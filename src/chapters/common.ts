// Общие помощники глав: вход/выход из жанрового мира, «сценический» снимок, тёмные комнаты с фонарём.
import * as THREE from 'three';
import type { Builder } from '../world/room';

export async function chapterIntro(G: any, key: string, lines: (string | [string, string])[]) {
  if (G.f['intro_' + key]) return false; G.f['intro_' + key] = 1; await G.ui.card(lines); return true;
}
/** Завершение главы: друг возвращается в театр, хаб меняется. */
export async function finishChapter(G: any, id: string, card: (string | [string, string])[]) {
  G.set('done_' + id, 1); G.set('ret', id); G.setPlayerChar('varya'); if (G.state.mask) G.setMask(G.state.mask);
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
export function fog(R: Builder, color: number, near = 18, far = 46) { const s = R.room.group; s.userData.fog = new THREE.Fog(color, near, far); }
