// Полноэкранный режим: вход по первому жесту, повторный вход по клику, если включено в настройках.
import { settings } from './state';
const doc: any = typeof document !== 'undefined' ? document : null;
export const isFullscreen = () => !!(doc?.fullscreenElement || doc?.webkitFullscreenElement);
export function enterFullscreen() {
  if (!settings.fullscreen || !doc || isFullscreen()) return;
  const de: any = doc.documentElement; try { const r = (de.requestFullscreen || de.webkitRequestFullscreen)?.call(de, { navigationUI: 'hide' }); if (r && r.catch) r.catch(() => { /* браузер не разрешил: например, iPhone */ }); } catch { /* недоступно */ }
}
export function exitFullscreen() { if (!doc || !isFullscreen()) return; try { (doc.exitFullscreen || doc.webkitExitFullscreen)?.call(doc); } catch { /* ignore */ } }
/** После выхода из полноэкранного (Esc) возвращаемся в него при следующем клике, пока настройка включена. */
export function autoFullscreen() { if (!doc) return; const h = () => enterFullscreen(); doc.addEventListener('pointerdown', h, true); }
