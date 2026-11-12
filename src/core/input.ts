// Ввод: клавиатура (с альтернативами), сенсорный джойстик.
const down = new Set<string>();
const pressed = new Set<string>();
export const touchAxis = { x: 0, y: 0 };
let uiMode = false;
/** В меню клавиши Tab/Enter/пробел работают как в обычной странице. */
export function setUiMode(v: boolean) { uiMode = v; }
const ALIASES: Record<string, string> = {
  KeyW: 'up', ArrowUp: 'up', KeyS: 'down', ArrowDown: 'down', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right',
  KeyE: 'act', Enter: 'act', Space: 'act', Escape: 'pause', KeyP: 'pause',
  Digit1: 'mask1', Digit2: 'mask2', Digit3: 'mask3', Digit0: 'mask0', KeyQ: 'mask0',
  KeyC: 'camera', KeyF: 'camera', Tab: 'notebook', KeyN: 'notebook', KeyJ0: 'notebook', KeyI: 'inventory', KeyB: 'inventory', KeyH: 'history', Slash: 'help', F1: 'help', KeyL: 'history',
  ControlLeft: 'skip', ControlRight: 'skip', ShiftLeft: 'run', ShiftRight: 'run',
  KeyJ: 'laneJ', KeyK: 'laneK', KeyG: 'laneG',
};
type Listener = (action: string, code: string) => void;
const listeners: Listener[] = [];
export function onAction(fn: Listener) { listeners.push(fn); return () => { const i = listeners.indexOf(fn); if (i >= 0) listeners.splice(i, 1); }; }
export function fire(action: string, code = '') { pressed.add(action); for (const l of [...listeners]) l(action, code); }
window.addEventListener('keydown', (e) => {
  const a = ALIASES[e.code];
  if (!a) return;
  const el = document.activeElement as HTMLElement | null;
  if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') ) return;
  if (!uiMode && ['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.repeat) return;
  down.add(a); fire(a, e.code);
});
window.addEventListener('keyup', (e) => { const a = ALIASES[e.code]; if (a) down.delete(a); });
window.addEventListener('blur', () => { down.clear(); touchAxis.x = touchAxis.y = 0; });
export const isDown = (a: string) => down.has(a);
export function consume(a: string) { const h = pressed.has(a); pressed.delete(a); return h; }
export function endFrame() { pressed.clear(); }
export function setDown(a: string, v: boolean) { if (v) down.add(a); else down.delete(a); }
export function axis() {
  let x = (isDown('right') ? 1 : 0) - (isDown('left') ? 1 : 0) + touchAxis.x;
  let y = (isDown('down') ? 1 : 0) - (isDown('up') ? 1 : 0) + touchAxis.y;
  const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; }
  return { x, y };
}
