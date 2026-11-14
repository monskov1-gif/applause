// Общие помощники глав: вход/выход из жанрового мира, «сценический» снимок, тёмные комнаты с фонарём.
import * as THREE from 'three';
import type { Builder } from '../world/room';

export async function chapterIntro(G: any, key: string, lines: (string | [string, string])[]) {
  if (G.f['intro_' + key]) return false; G.f['intro_' + key] = 1; await G.ui.card(lines); return true;
}
/** Завершение главы: друг возвращается в театр, хаб меняется. */
export async function finishChapter(G: any, id: string, card: (string | [string, string])[]) {
  G.set('done_' + id, 1); G.set('ret', id); try { const u = new Set(JSON.parse(localStorage.getItem('tom-unlock') || '[]')); u.add(id); localStorage.setItem('tom-unlock', JSON.stringify([...u])); } catch { /* приватный режим */ } G.setPlayerChar('varya'); if (G.state.mask) G.setMask(G.state.mask);
  G.note('c_' + id); G.audio.music(null); await G.ui.card(card);
  await G.goto('hub_backstage', 'ret_' + id, { fade: 'curtain' });
}
/** Фонарь, привязанный к героине (тёмные локации). */
export function carriedLight(R: Builder, G: any, color = 0xffe0a0, int = 22, dist = 11) {
  const l = R.light(0, 3.4, 0, color, int, dist); R.onUpdate(() => { const p = G.player; if (p) { const v = p.dir === 'l' ? -1.2 : p.dir === 'r' ? 1.2 : 0, w = p.dir === 'b' ? -1.2 : p.dir === 'f' ? 1.2 : 0; l.position.set(p.x + v, 3.4, p.z + w); } }); return l;
}
export function rainy(R: Builder, G: any, o: { thunder?: boolean } = {}) {
  R.particles('rain', { count: 600, top: 10 });
  if (o.thunder) { let next = 4 + Math.random() * 6; R.onUpdate((dt) => { next -= dt; if (next < 0) { next = 7 + Math.random() * 9; G.flash(0.55); setTimeout(() => G.sfx('thunder'), 600); } }); }
}
/** Плашка-шкала главы сверху экрана (давление жанра, сказочный сценарий и т. п.); сама исчезает за пределами главы. */
export function chapterHud(G: any, prefix: string, html: (f: any) => string) {
  const id = 'chap-hud-' + prefix; if (document.getElementById(id)) return;
  const el = document.createElement('div'); el.id = id; el.style.cssText = 'position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:30;pointer-events:none;font:13px "Pixelify Sans",monospace;color:#f0d478;text-shadow:0 2px 0 #000;background:rgba(10,6,14,.6);border:1px solid #d4ae48;padding:4px 12px;white-space:nowrap;letter-spacing:.04em;';
  (document.getElementById('ui') || document.body).appendChild(el);
  const draw = () => { el.innerHTML = html(G.f); }; draw();
  const iv = setInterval(() => { if (!G.running || !G.room || !String(G.room.id).startsWith(prefix)) { clearInterval(iv); el.remove(); return; } el.style.display = G.fast ? 'none' : ''; draw(); }, 400);
}
export const bar = (n: number, max = 5) => '▮'.repeat(Math.max(0, Math.min(max, n))) + '▯'.repeat(max - Math.max(0, Math.min(max, n)));
export function fog(R: Builder, color: number, near = 18, far = 46) { const s = R.room.group; s.userData.fog = new THREE.Fog(color, near, far); }

/** Номер акта зависит от того, сколько друзей уже вернулось: I вступление, II первые двое, III следующие двое и архив, IV последние двое и кабинет. */
export function actOf(G: any): string { const n = G.doneCount(); return n < 2 ? 'АКТ II · THE MISSING CAST' : n < 4 ? 'АКТ III · THE SCRIPT KNOWS' : 'АКТ IV · BEHIND THE CURTAIN'; }
