// Глава Лизы — THE TOWER IS NOT A HOME. Сказка, книжная фактура, иллюстрации тушью.
// Механики: волосы как верёвка (подъём), лассо (тайминг), мост через провал, перенос груза волосами,
// противовес-лифт с недостающей шестерней; Лиза сама решает уйти из башни. Принц опаздывает.
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { L } from '../data/dialogue/lisa';
import { timing } from '../ui/minigames';
import { chapterIntro, finishChapter } from './common';

const BOOK = { sat: 0.9, tint: [1.06, 1.0, 0.88], vig: 0.6, bright: 0.98, bloom: 0.25, contrast: 1.05 };
function bookRoom(R: Builder, wall = 'paperstone') { R.room.group.userData.bg = 0xe8dab0; R.floor('paper', { tint: '#c8b07a' }); R.walls(wall, { h: 7 }); R.ambient(0x6a5a40, 1.7, 0xfff0d0); R.particles('dust', { count: 60, top: 6, color: 0xb89858 }); }
const ink = (R: Builder, text: string, x: number, y: number, w = 6) => R.decal(canvasTex(Math.round(w * 16), 14, (c) => ptext(c, text, Math.round(w * 8), 2, { size: 9, col: '#3a2a14', align: 'center', font: '"Marck Script", cursive' }), 'ink' + text), { x, y, w, h: 0.9 });
const lizaNPC = (R: Builder, G: any, x: number, z: number) => { const a = R.actor('liza_long', x, z, { id: 'liza' }); G.follow(a); return a; };

const base: RoomDef = {
  name: 'Подножие башни', chapter: 'Акт II · Лиза', w: 30, d: 12, music: 'fairy', amb: 'wind', step: 'grass', grade: BOOK,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xe8dab0; R.floor('grass', { tint: '#9ab060' }); R.floor('dirt', { w: 4, d: 12, x: 4, y: 0.01, tint: '#c8a070' }); R.ambient(0x6a6040, 1.6, 0xfff4d8); R.sun(0xfff0d0, 1.8, -6, 14, 8);
    R.particles('petals', { count: 50, top: 8, color: 0xd8b0d0 });
    R.box(4, -3.6, 5, 4, 14, { tex: 'paperstone' }); R.box(4, -3.6, 6, 5, 1.2, { tex: 'carpet', tint: '#4a6aa0', y: 14 });
    R.decal(canvasTex(16, 20, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 16, 20); c.fillStyle = '#f0d0a0'; c.fillRect(2, 2, 12, 16); c.fillStyle = '#3a2a14'; c.fillRect(7, 2, 2, 16); }, 'twin2'), { x: 4, y: 10, z: -1.55, w: 1.6, h: 2 });
    if (f.liz_hair) R.box(4.3, -1.4, 0.5, 0.5, 9.4, { color: 0xf0d98a, y: 0, solid: false });
    for (const [x, z, s] of [[-12, -3, 1.2], [-8, 3, 1], [12, -3, 1.3], [13, 3.2, 1]] as any) R.sprite('tree', x, z, { scale: s, solid: 0.4 });
    for (let i = 0; i < 8; i++) R.sprite('bush', -14 + i * 4, 5.2 - (i % 2), { scale: 1.2 });
    ink(R, 'облака', -6, 8, 4); ink(R, 'башня (очень высокая)', 4, 15.4, 8);
    R.npc('fairy', -3, 1.4, { talk: ['fairy: Ждать — это искусство, милочка. Я жду принца для принцессы уже двести страниц. И ничего, держусь.'] });
    R.inter('call', 4, -0.6, { label: f.liz_hair ? 'Подняться по косе' : 'Позвать Лизу', fn: async (G) => { if (!f.liz_hair) { await G.run(L.call); f.liz_hair = 1; G.sfx('rope'); await G.rebuild(); return; } await G.run(L.climb); G.sfx('rope'); await G.goto('liz_top', 'start', { fade: 'page' }); } });
    R.spawn('start', -12, 3, 'r'); R.spawn('ground', 4, 1.4);
  },
  async enter(G) { if (await chapterIntro(G, 'liz', [['АКТ II · THE MISSING CAST', 'act'], ['THE TOWER IS NOT A HOME', 'big'], ['сказка · тушь и акварель · с мотивами «Рапунцель»', 'sm']])) await G.run(L.arrive); },
};
const top: RoomDef = {
  name: 'Покои принцессы', w: 16, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: BOOK,
  build(R, G) {
    const f = G.f; bookRoom(R); R.light(0, 5, 0, 0xfff0d0, 14, 12); R.light(-5, 3, -3, 0xffe0a0, 6, 8);
    R.decal(canvasTex(16, 22, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 16, 22); c.fillStyle = '#9cc2ee'; c.fillRect(2, 2, 12, 18); c.fillStyle = '#fff'; c.fillRect(4, 4, 4, 3); }, 'lwin'), { x: -4, y: 3.4, w: 2, h: 2.8, glow: true });
    for (let i = 0; i < 10; i++) R.box(-6 + i * 1.3, 2.6 + (i % 3) * 0.6, 1.2, 0.4, 0.3, { color: 0xf0d98a, solid: false, cast: false });
    R.box(4.6, -3, 3, 2, 0.8, { tex: 'velvet', tint: '#b58ad0' }); R.box(4.6, -3.9, 3, 0.3, 2.2, { tex: 'darkwood' });
    R.decal(canvasTex(18, 24, (c) => { c.fillStyle = '#d4ae48'; c.fillRect(0, 0, 18, 24); c.fillStyle = '#c8d8e8'; c.fillRect(2, 2, 14, 20); }, 'lmirror'), { x: 1, y: 2.6, w: 1.4, h: 1.9 });
    R.look('mirror', 1, -4, 'Зеркальце', L.mirror, { mask: 'none' }); R.look('mirrorC', 1, -4, 'Зеркальце', L.mirror, { mask: 'comedy' }); R.look('mirrorT', 1, -4, 'Зеркальце', L.mirror, { mask: 'tragedy' }); R.look('mirrorDr', 1, -4, 'Зеркальце', L.mirrorDr, { mask: 'drama' });
    // люстра с ключом
    R.box(-1, 0, 2.4, 2.4, 0.2, { tex: 'gold', y: 5.6, solid: false }); R.box(-1, 0, 0.1, 0.1, 1.2, { color: 0x86641c, y: 5.8, solid: false });
    for (const dx of [-1, 0, 1]) R.sprite('candle', -1 + dx, 0, { y: 5.8, glow: true });
    if (!G.has('tower_key')) R.sprite('key', -0.4, 0.4, { y: 5.0, scale: 1.4, name: 'keySpr', glow: true });
    R.inter('lasso', -1, 1.4, { label: 'Ключ на люстре', cond: () => !G.has('tower_key'), fn: async (G) => { await G.run(L.lassoAsk); const r = await timing({ title: 'Лассо из косы', sub: 'Лиза бросает — скажи «сейчас!»', zone: 0.2, speed: 1.1 }); if (r === 'miss') { G.sfx('crash'); return G.run(L.lassoMiss); } G.sfx('rope'); G.room.named.keySpr.visible = false; G.give('tower_key'); await G.run(L.lassoOk); } });
    R.door('down', 5.6, { label: 'Дверь вниз', z: -4.96, col: '#6a4a2a', cond: () => G.has('tower_key'), locked: ['~: Заперто. Ключ — на люстре.'], fn: async (G) => { await G.run(L.door); G.sfx('door'); await G.goto('liz_mid', 'start', { fade: 'page' }); } });
    lizaNPC(R, G, -2.6, 1.6); R.spawn('start', -4, 2.4, 'b');
  },
  async enter(G) { if (!G.f.liz_top) { G.f.liz_top = 1; await G.run(L.top); } },
};
const mid: RoomDef = {
  name: 'Механизм башни', w: 28, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: { ...BOOK, tint: [1.02, 0.98, 0.9] },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x1a1208; R.floor('paper', { tint: '#c8b07a', x: -8.5, w: 11 }); R.floor('paper', { tint: '#c8b07a', x: 7.5, w: 13 }); R.walls('stone', { h: 7 }); R.ambient(0x6a5a40, 1.7, 0xfff0d0); R.particles('dust', { count: 60, top: 6, color: 0xb89858 }); R.light(-8, 4, -1, 0xffe0b0, 12, 12); R.light(8, 4, -1, 0xffe0b0, 12, 12);
    // провал
    R.box(-1, 0, 4, 10, 0.1, { color: 0x140e08, solid: false, y: -3 }); for (const x of [-3, 1]) R.box(x, 0, 0.1, 10, 3, { tex: 'stone', y: -3, solid: false, cast: false }); R.collider(-3, -5, 1, -1.1); R.collider(-3, 1.1, 1, 5); const mid = R.collider(-3, -1.1, 1, 1.1); mid.on = !f.liz_bridge;
    R.box(1.4, -4.4, 0.3, 0.3, 0.3, { tex: 'metal', y: 2 }); R.sprite('hook', 1.5, -4.2, { y: 1.6, scale: 1.4 });
    if (f.liz_bridge) R.box(-1, 0, 4.4, 1.2, 0.18, { color: 0xf0d98a, y: 0.02, solid: false });
    R.inter('gap', -3.8, 0, { label: f.liz_bridge ? 'Мост из косы' : 'Провал', fn: async (G) => { if (f.liz_bridge) return G.run(['liza_long: Не наступай на пробор!']); await G.run(L.gap); await G.run(L.bridge); G.sfx('rope'); f.liz_bridge = 1; await G.rebuild(); } });
    // шестерня и гиря
    if (!G.has('gear') && !f.liz_gear) { R.sprite('gear', -9, -3, { scale: 1.3, name: 'gearSpr' }); R.inter('gear', -9, -2.2, { label: 'Груда шпилек', fn: async (G) => { await G.run(L.gearGot); G.give('gear'); G.room.named.gearSpr.visible = false; } }); }
    if (!G.has('weight') && !f.liz_weight) { R.sprite('weight', -11, 2, { scale: 1.6, name: 'wSpr' }); R.inter('weight', -11, 2.8, { label: 'Тяжёлая гиря', fn: async (G) => { await G.run(L.weightGot); G.give('weight'); G.room.named.wSpr.visible = false; } }); }
    // лифт
    R.box(8, -1, 4, 4, 0.3, { tex: 'wood', solid: false }); for (const [x, z] of [[6.2, -2.8], [9.8, -2.8]]) R.box(x, z, 0.2, 0.2, 6, { tex: 'darkwood' });
    R.sprite('wheel', 8, -2.9, { y: 4.4, scale: 1.8 }); R.box(11.6, -1, 1.2, 1.2, 0.4, { tex: 'metal' }); if (f.liz_weight) R.sprite('weight', 11.6, -1, { y: 0.4, scale: 1.4 });
    R.inter('lift', 8, 0.4, { label: 'Лифт-противовес', fn: async (G) => {
      if (G.has('gear')) { G.take('gear'); f.liz_gear = 1; G.sfx('gear'); } if (G.has('weight')) { G.take('weight'); f.liz_weight = 1; G.sfx('crash'); }
      if (!f.liz_gear || !f.liz_weight) { if (!f.liz_seen_lift) { f.liz_seen_lift = 1; await G.run(L.gearHole); } await G.rebuild(); return G.run(L.liftNeed(!!f.liz_gear, !!f.liz_weight)); }
      await G.run(L.liftReady); G.sfx('gear'); G.shake(0.2); await G.goto('liz_ground', 'start', { fade: 'page' }); } });
    lizaNPC(R, G, -10.8, -1); R.spawn('start', -12, -1, 'r');
  },
};
const ground: RoomDef = {
  name: 'Нижний ярус', w: 26, d: 11, music: 'fairy', amb: 'wind', step: 'stone', grade: BOOK,
  build(R, G) {
    const f = G.f; bookRoom(R, 'stone'); R.light(0, 4, 0, 0xfff0d0, 16, 14);
    R.door('exit', 0, { label: f.liz_cut ? 'Наружу' : 'Дверь «Только принцам»', col: '#6a4a2a', w: 3.2, h: 4.4, sign: 'ПРИНЦАМ', cond: () => !!f.liz_cut, locked: ['liza_long: С этими волосами я не пролезу. Но сначала — поговорим с Феей.'], fn: outside });
    ink(R, 'ВЫХОД ТОЛЬКО ПРИНЦАМ', 0, 5.5, 8);
    R.npc('fairy', 4, -1.4, { talk: async (G: any) => { if (f.liz_cut) return G.run(['fairy/worried: Ох. Ох-ох. Двести страниц ожидания, и ради чего? Ради… ради прекрасной стрижки, вообще-то. Тебе идёт.']); await groundScene(G); } });
    R.sprite('basket', 5, -0.6, { scale: 1.2 });
    if (f.liz_cut) R.box(-2, -3, 3, 1.4, 0.3, { color: 0xf0d98a, solid: false });
    const lz = R.actor(f.liz_cut ? 'liza' : 'liza_long', -2, 1, { id: 'liza' }); G.follow(lz); R.spawn('start', -6, 2, 'r');
  },
  async enter(G) { if (!G.f.liz_gr) { G.f.liz_gr = 1; await groundScene(G); } },
};
async function groundScene(G: any) {
  if (G.f.liz_cut) return; await G.run(L.ground); await G.run(L.choice); G.sfx('snip'); await G.run(L.cut.slice(0, 1)); G.f.liz_cut = 1; G.actor('liza').setChar('liza'); G.sfx('snip'); await G.run(L.cut.slice(1)); await G.rebuild();
}
async function outside(G: any) {
  await G.goto('liz_base', 'ground', { fade: 'page' }); const B = new (await import('../world/room')).Builder(G.room, G);
  const lz = B.actor('liza', 5.4, 1.6, { id: 'liza2' }); lz.face(-10, 2); G.room.actors.find((a: any) => a.id === 'fairy')!.hidden = true;
  const horse = B.sprite('horse', -18, 3, { scale: 1.6 }); const pr = B.actor('prince', -18, 3.2, { id: 'prince' }); pr.y = 0.9; G.focus(-2, 2, 22);
  await G.wait(0.4); G.sfx('engine'); const t0 = performance.now();
  await new Promise<void>((res) => { const tick = () => { const k = Math.min(1, (performance.now() - t0) / 1800); horse.position.x = -18 + k * 16; pr.x = horse.position.x; if (k < 1) requestAnimationFrame(tick); else res(); }; tick(); });
  pr.face(lz.x, lz.z); await G.run(L.prince); G.unfocus(); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'liza', [['THE TOWER IS NOT A HOME', 'act'], 'Лиза вышла сама. Принц опоздал — спасать было некого.', ['Не всякая башня — дом. Даже если она очень красивая.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { liz_base: base, liz_top: top, liz_mid: mid, liz_ground: ground };
