// Глава Матвея, 100 STEPS TO THE INEVITABLE. Школьная романтическая мелодрама / аниме-фанфик / комедия.
// Каркас: жанр даёт Матвею роль-ловушку («влюблённый школьник из клише»), у него своё желание (решиться самому),
// Варя помогает режиссурой, и это становится контролем; кульминация, выбор Матвея, Варя отступает.
// Механики: раскадровка (клише-карточки), «Постановочность / Искренность» (мир картонеет от идеальных дублей),
// дубли, которые герои начинают замечать, «идеальный кадр» камерой, финальный выбор: реплика или закрыть раскадровку.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { M } from '../data/dialogue/matvey';
import { pick, timing } from '../ui/minigames';
import { finishChapter, actOf, fog } from './common';
import { window3D } from '../world/decor3d';

const fakeGrade = (n: number) => ({ sat: 1.05 + n * 0.12, tint: [1.04 + n * 0.03, 1.0, 1.03 + n * 0.04], vig: 0.28 + n * 0.08, bright: 0.96, contrast: 1.06, bloom: 0.42 + n * 0.1, wave: n >= 3 ? 0.25 : 0 });
const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });

// ---------------- общие декорации ----------------
/** Японская школа: три этажа, ряды окон, часы, баннер фестиваля. Тянется за края комнаты. */
function schoolFacade(R: Builder, w: number, z = -6.3, night = false) {
  const W = w + 40; R.box(0, z, W, 0.8, 10, { tex: 'schoolwall', tint: night ? '#a8a4b8' : '#f4f0e8', solid: false }); R.collider(-w / 2, z - 0.4, w / 2, z + 0.4);
  R.box(0, z + 0.45, W, 0.2, 0.25, { color: 0xc8c0b8, y: 3.4, solid: false, cast: false }); R.box(0, z + 0.45, W, 0.2, 0.25, { color: 0xc8c0b8, y: 6.6, solid: false, cast: false });
  const win = canvasTex(24, 16, (c) => { c.fillStyle = '#d8d8e0'; c.fillRect(0, 0, 24, 16); c.fillStyle = night ? '#ffd890' : '#9cc8f0'; c.fillRect(1, 1, 22, 14); c.fillStyle = '#d8d8e0'; c.fillRect(11, 1, 2, 14); c.fillRect(1, 7, 22, 1); c.fillStyle = night ? '#fff0c0' : '#f0f8ff'; c.fillRect(3, 2, 3, 4); c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(15, 2, 5, 3); }, 'jwin' + night);
  for (let x = -W / 2 + 2; x < W / 2 - 1; x += 3.2) for (const y of [1.9, 5.0, 8.1]) { if (Math.abs(x) < 2.4 && y < 3) continue; R.decal(win, { x, y, z: z + 0.42, w: 2.6, h: 1.7, noSlot: true, glow: night }); }
  R.decal(canvasTex(20, 20, (c) => { c.fillStyle = '#f8f8f0'; c.beginPath(); c.arc(10, 10, 9, 0, 7); c.fill(); c.strokeStyle = '#2a2a3a'; c.lineWidth = 1.5; c.stroke(); c.fillStyle = '#2a2a3a'; c.fillRect(9.5, 4, 1, 6.5); c.fillRect(10, 9.5, 4, 1); }, 'jclock'), { x: 0, y: 9.4, z: z + 0.43, w: 1.4, h: 1.4, noSlot: true });
  R.decal(canvasTex(60, 12, (c) => { c.fillStyle = '#fff0f4'; c.fillRect(0, 0, 60, 12); c.fillStyle = '#e84a6f'; c.fillRect(0, 0, 60, 2); c.fillRect(0, 10, 60, 2); ptext(c, '祝 文化祭 · ШКОЛЬНЫЙ ФЕСТИВАЛЬ', 30, 3, { size: 6, col: '#c41e3a', align: 'center' }); }, 'jbanner'), { x: 0, y: 7.1, z: z + 0.43, w: 9, h: 1.6, noSlot: true });
}
/** Большая сакура из объёмных розовых облаков, с падающими лепестками. */
function sakura(R: Builder, x: number, z: number, s = 1) {
  const g = new THREE.Group(); const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * s, 0.4 * s, 3.2 * s, 8), L(0x5a3a2a)); trunk.position.y = 1.6 * s; trunk.castShadow = true; g.add(trunk);
  for (const [bx, bz, a] of [[-0.6, 0, 0.9], [0.7, 0.2, -0.8], [0, -0.4, 0.2]]) { const br = new THREE.Mesh(new THREE.CylinderGeometry(0.08 * s, 0.14 * s, 1.6 * s, 6), L(0x5a3a2a)); br.position.set(bx * s, 3.2 * s, bz * s); br.rotation.z = a; g.add(br); }
  const pinks = [0xffc8dc, 0xffb0cc, 0xffdcea, 0xf8a8c4];
  for (let i = 0; i < 16; i++) { const a = i * 2.4, r = (1.1 + (i % 4) * 0.35) * s; const b = new THREE.Mesh(new THREE.IcosahedronGeometry((0.9 + (i % 3) * 0.25) * s, 1), L(pinks[i % 4], { emissive: 0x3a1a24, flatShading: true })); b.position.set(Math.cos(a) * r, (3.6 + (i % 5) * 0.32) * s, Math.sin(a) * r * 0.7); b.castShadow = true; g.add(b); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 0.45 * s, z - 0.45 * s, x + 0.45 * s, z + 0.45 * s); return g;
}
/** Столб с проводами, как на каждой японской улице. */
function pole(R: Builder, x: number, z: number) { R.box(x, z, 0.22, 0.22, 7, { color: 0x8a8a84, solid: false }); R.box(x, z, 1.6, 0.1, 0.1, { color: 0x6a6a64, y: 6.4, solid: false, cast: false }); R.box(x, z, 1.2, 0.1, 0.1, { color: 0x6a6a64, y: 5.8, solid: false, cast: false }); }
function vending(R: Builder, x: number, z: number) {
  R.box(x, z, 1.1, 0.8, 2.1, { color: 0xe8f0f8 }); R.decal(canvasTex(16, 28, (c) => { c.fillStyle = '#e8f0f8'; c.fillRect(0, 0, 16, 28); c.fillStyle = '#c41e3a'; c.fillRect(0, 0, 16, 4); for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) { c.fillStyle = ['#e84a6f', '#40a0e0', '#f2c230', '#5fd0c8'][(r + k) % 4]; c.fillRect(1 + k * 4, 6 + r * 6, 3, 5); } c.fillStyle = '#2a2a3a'; c.fillRect(2, 24, 12, 3); }, 'vend'), { x, y: 1.05, z: z + 0.41, w: 1.0, h: 1.9, noSlot: true, glow: true }); R.light(x, 1.4, z + 0.8, 0xc8e8ff, 2.5, 3);
}
/** Ряд домиков с черепичными крышами за воротами: уходит далеко в дымку. */
function street(R: Builder, x0: number, x1: number, z: number) {
  for (let x = x0; x < x1; x += 4.4) { const k = Math.abs(Math.sin(x * 3.1)); const h = 3.2 + k * 1.8; R.box(x, z, 3.8, 3, h, { color: [0xe8dcc8, 0xd8d0c0, 0xf0e8d8][Math.floor(k * 3) % 3], solid: false }); const roof = new THREE.Mesh(new THREE.ConeGeometry(2.9, 1.3, 4), L(k > 0.5 ? 0x3a4a5a : 0x5a3a3a, { flatShading: true })); roof.rotation.y = Math.PI / 4; roof.scale.z = 0.6; roof.position.set(x, h + 0.62, z); R.room.group.add(roof); R.decal(canvasTex(8, 6, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 8, 6); c.fillStyle = '#9cc8f0'; c.fillRect(1, 1, 6, 4); c.fillStyle = '#5a4029'; c.fillRect(4, 1, 1, 4); }, 'hwin'), { x, y: h * 0.55, z: z + 1.52, w: 1.2, h: 0.9, noSlot: true }); }
}

/** Ларёк с навесом-норэн, фонарями и вывеской. */
function stall(R: Builder, x: number, z: number, kind: number, face = 1) {
  const cols = [[0x8e1830, '#c41e3a', 'ТАКОЯКИ'], [0x22507e, '#2f6fb0', 'КИНГЁ'], [0x9a6a18, '#d8901c', 'ВАТА'], [0x4a2a70, '#6a3aa0', 'МАСКИ'], [0x1f5a44, '#2f8f6a', 'ДАНГО']][kind % 5] as [number, string, string];
  R.box(x, z, 3.2, 1.4, 1.0, { tex: 'wood', tint: '#c8a070' }); R.box(x, z - face * 0.5, 3.4, 0.5, 0.12, { color: 0xe8dcc0, y: 1.0, solid: false });
  for (const sx of [-1.5, 1.5]) R.box(x + sx, z - face * 0.6, 0.12, 0.12, 2.8, { tex: 'wood', solid: false });
  const roof = R.box(x, z, 3.6, 1.8, 0.14, { color: cols[0], y: 2.85, solid: false }); roof.rotation.x = face * 0.18;
  R.decal(canvasTex(36, 10, (c) => { c.fillStyle = cols[1]; c.fillRect(0, 0, 36, 10); for (let k = 0; k < 6; k++) { c.fillStyle = k % 2 ? 'rgba(255,255,255,.18)' : 'rgba(0,0,0,.1)'; c.fillRect(k * 6, 0, 6, 10); } ptext(c, cols[2], 18, 2, { size: 6, col: '#fff8e8', align: 'center' }); }, 'noren' + kind), { x, y: 2.4, z: z + face * 0.95, w: 3.2, h: 0.85, noSlot: true });
  for (const sx of [-1.2, 1.2]) R.sprite('lantern', x + sx, z + face * 0.95, { y: 1.8, glow: true, scale: 0.9, thin: true });
  R.light(x, 2.2, z + face * 1.6, 0xffb060, 7, 7);
}

// ---------------- состояние главы ----------------
/** «Постановочность»: сколько идеальных дублей Варя навязала. Мир от них картонеет. */
const staged = (f: any) => f.mat_st || 0;
const stage = (G: any, n = 1) => { G.f.mat_st = staged(G.f) + n; G.grade(fakeGrade(Math.min(4, staged(G.f)))); G.sfx('glitch'); G.toast('Постановочность растёт: мир становится глаже и фальшивее', '✂'); };
const sincere = (G: any) => { G.f.mat_sin = (G.f.mat_sin || 0) + 1; G.toast('Искренность: сцена живая, хоть и неловкая', '♡'); };
/** Выбор раскадровки: варианты Вари с последствиями. Возвращает индекс. */
async function board(G: any, opts: string[]) { let r = 0; await G.run([{ c: opts.map((t, i) => [t, [() => { r = i; }]]) }]); return r; }

// ---------------- 1. школьный двор ----------------
const yard: RoomDef = {
  card: (G) => G.f.intro_mat ? null : [[actOf(G), 'act'], ['100 STEPS TO THE INEVITABLE', 'big'], ['школьная мелодрама · аниме-фанфик · сакура и клише', 'sm']],
  name: 'Школа Сакура', chapter: 'Матвей', w: 36, d: 15, music: 'school', amb: null, step: 'stone', grade: fakeGrade(0), camDist: 23,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x9cc8ec; fog(R, 0xc8dcf0, 40, 110);
    R.floor('grass', { tint: '#8ac070', w: 140, d: 50, z: 6, y: -0.02 }); R.floor('concrete', { w: 140, d: 4, z: -3.6, y: 0.01, tint: '#d8d0c8' }); R.floor('concrete', { w: 4, d: 11, x: -6, z: 1.5, y: 0.012, tint: '#e0d8d0' });
    R.ambient(0x8a8aa8, 1.9, 0xfff0f4); R.sun(0xfff0e0, 2.0, 10, 16, 12); schoolFacade(R, 36);
    R.particles('petals', { count: 160, top: 9 }); const rain = R.particles('rain', { count: 400, top: 9, name: 'rain' }); rain.visible = false;
    sakura(R, 3, 1.4, 1.35); R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#c8c0b0'; c.beginPath(); c.arc(8, 8, 7.5, 0, 7); c.fill(); c.fillStyle = '#6aa860'; c.beginPath(); c.arc(8, 8, 5.5, 0, 7); c.fill(); }, 'bed'), { flat: true, x: 3, z: 1.4, y: 0.02, w: 5, h: 5 });
    for (const [x, z, ry] of [[-0.6, 3.6, 0.3], [6.6, 3.6, -0.3]]) { R.box(x, z, 2.2, 0.6, 0.12, { tex: 'wood', y: 0.55, ry }); R.box(x, z - 0.25, 2.2, 0.1, 0.5, { tex: 'wood', y: 0.6, ry, solid: false }); }
    for (const [x, z, s] of [[-15, 4.6, 1], [-11.6, -1.8, 0.9], [-4, 6.6, 0.8]]) sakura(R, x, z, s);
    vending(R, -9.6, -5.4); vending(R, -8.4, -5.4); R.look('vend', -9, -4.4, 'Автоматы с напитками', ['~: Клубничное молоко, дынная газировка, персиковый чай. В тетради Матвея: «Шаг 1. Случайно встретиться у автомата». Шаг пропущен. Автомат стоит одиноко.']);
    for (let i = 0; i < 5; i++) R.box(-16 + i * 0.9, -4.6, 0.08, 1.4, 0.9, { color: 0x6a6a74, solid: false });
    for (const x of [11.2, 16.8]) R.box(x, -1.2, 0.7, 0.7, 2.6, { tex: 'concrete', tint: '#e8e0d8' }); R.box(14, -1.2, 5.2, 0.3, 0.3, { tex: 'metal', y: 2.4, solid: false });
    street(R, 20, 80, -9); street(R, -80, -20, -9); for (let x = -70; x <= 70; x += 9) pole(R, x, -7.6);
    R.door('school', -6, { label: 'В школу', z: -5.86, col: '#c8aa78', sign: 'ВХОД', fn: (G) => G.goto('mat_hall', 'yard') });
    R.door('fest', 14, { label: 'На фестиваль (вечер)', z: -1.35, col: '#e8888a', sign: 'МАЦУРИ', w: 2.4, cond: () => !!f.mat_note, locked: ['~: Фестиваль вечером. До него в тетради ещё «Закрытый класс» и «Записка».'], fn: (G) => G.goto('mat_fest', 'start', { fade: 'iris' }) });
    // шаг 12: один зонт
    R.box(-2, -4.6, 1.2, 0.6, 1.1, { tex: 'metal' }); for (let i = 0; i < (f.mat_umb ? 1 : 4); i++) R.sprite('umbrella', -2.4 + i * 0.3, -4.5, { scale: 0.7, y: 0.4 });
    R.inter('umb', -2, -3.6, { label: f.mat_umb ? 'Стойка (один зонт)' : 'Стойка с зонтами', cond: () => !!f.mat_book && !f.mat_s1, fn: async (G) => { if (!f.mat_umbI) { f.mat_umbI = 1; await G.run(M.umbIntro); } if (!f.mat_umb) { f.mat_umb = 1; await G.run(M.umbTake); await G.rebuild(); } } });
    R.inter('signal', 14, 1.6, { label: 'Дать знак дождю', cond: () => !!f.mat_umb && !f.mat_s1, fn: rainScene });
    R.sprite(canvasTex(14, 10, (c) => { c.fillStyle = '#e88a3a'; c.fillRect(2, 3, 10, 6); c.fillRect(1, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(2, 2, 1, 1); c.fillStyle = '#e88a3a'; c.fillRect(11, 1, 2, 4); }, 'cat'), 6.4, 4.0, { scale: 1.2, y: 0.65 }); R.look('cat', 6.4, 4.8, 'Кот', ['~: Школьный кот, рыжий и круглый. Ему всё равно, кто в кого влюблён, так что он тут самый мудрый персонаж.'], { r: 1.2, egg: 'cat' });
    if (f.mat_book && !f.mat_s1) R.npc('artemiy', 15.4, 2.0, { dir: 'l', talk: ['artemiy/smile: Жду, когда кончится урок у всего мира. Ну, или дождь. Хотя дождя нет.'] });
    if (!f.mat_s1) R.npc('matvey_school', f.mat_book ? -8.6 : -4.6, f.mat_book ? 2.4 : 3.6, { id: 'matvey', talk: (G: any) => G.run(f.mat_book ? ['matvey/worried: Он у ворот. Он всегда уходит через ворота в 15:40. Я не следил. Я просто… знаю.'] : ['matvey/worried: Пойдём внутрь? Только не смотри на того, кто у окна. И на меня не смотри.']) });
    R.npc('student2', 0, 5.6, { talk: ['student2: Вчера у ворот трижды шёл дождь. Над воротами. Только над ними. У нас тут вечно какие-то случайные события.'] }); R.actor('student', -14, -2.6, { dir: 'r' });
    R.spawn('start', -10, 4, 'r'); R.spawn('back', -6, -4.6); R.spawn('gate', 14, 1.2);
  },
  async enter(G) { if (!G.f.mat_arr) { G.f.mat_arr = 1; G.f.intro_mat = 1; await G.run(M.arrive); } },
};
async function rainScene(G: any) {
  const f = G.f, mat = G.actor('matvey'), art = G.actor('artemiy'); if (!mat || !art) return; G.focus(14, 1.4, 13);
  mat.walkTo(12.2, 1.6, 2.6); await G.run(['~: Матвей идёт к воротам с розовым зонтом. Сейчас… сейчас…']);
  const r = await timing({ title: 'Сигнал дождю', sub: 'Щёлкни пальцами, когда Матвей поравняется с Арутеми', zone: 0.2 });
  if (r === 'miss') { G.room.named.rain.visible = true; G.sfx('thunder'); await G.run(['*: Дождь начинается раньше, и Матвей стоит под ним, как мокрый попугайчик.', 'matvey/angry: Варя!']); G.room.named.rain.visible = false; mat.place(-8.6, 2.4); G.unfocus(); return; }
  G.room.named.rain.visible = true; G.audio.ambience('rain'); await mat.walkTo(14.4, 1.9, 2.5); art.face(mat.x, mat.z); mat.face(art.x, art.z);
  await G.run(M.umbRain); await G.run(M.umbChoicePrompt);
  let c = await board(G, ['Дать Матвею идеальную реплику', 'Не вмешиваться', 'Дубль!']);
  if (c === 2) { G.flash(0.4); stage(G); await G.run(M.retake); c = await board(G, ['Дать Матвею идеальную реплику', 'Не вмешиваться']); }
  if (c === 0) { stage(G); await G.run(M.umbPerfect); await art.walkTo(19, 3, 2.4); } else { sincere(G); await G.run(M.umbSelf); await Promise.all([art.walkTo(19, 3, 2.4), mat.walkTo(18.4, 3.2, 2.4)]); mat.hidden = true; }
  art.hidden = true; G.room.named.rain.visible = false; G.audio.ambience(null);
  await G.run(M.umbAfter); f.mat_s1 = 1; G.unfocus(); G.note('n_mat_fake');
}

// ---------------- 2. коридор: столкновение, тетрадь ----------------
const hall: RoomDef = {
  name: 'Коридор второго этажа', w: 40, d: 11, music: 'school_soft', amb: null, step: 'wood', grade: fakeGrade(0), camDist: 27,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xbcdcf4; fog(R, 0xe8eef4, 30, 90);
    R.floor('wood', { tint: '#f0c890', w: 140, d: 11 }); R.walls('schoolwall', { h: 5.5, tint: '#f0e8dc', e: false, w: false }); R.ambient(0x9a9ab0, 2.4, 0xfff4e8); R.sun(0xfff0d0, 2.2, -6, 12, 8);
    R.box(0, -5.6, 140, 0.4, 5.5, { tex: 'schoolwall', tint: '#f0e8dc', solid: false }); R.box(0, -5.35, 140, 0.1, 0.9, { color: 0xb8a890, solid: false, cast: false });
    // окна, шкафчики, таблички классов: коридор уходит за края кадра
    for (let x = -64; x <= 64; x += 4) { if (Math.abs(x - -12) < 2.4 || Math.abs(x - 12) < 2.4) continue; if ((x / 4) % 2 === 0) R.decal(canvasTex(24, 20, (c) => { c.fillStyle = '#d8d8e0'; c.fillRect(0, 0, 24, 20); const g = c.createLinearGradient(0, 0, 0, 20); g.addColorStop(0, '#8ec0f0'); g.addColorStop(1, '#e8f4ff'); c.fillStyle = g; c.fillRect(1, 1, 22, 18); c.fillStyle = '#fff'; c.fillRect(4, 4, 6, 2); c.fillStyle = '#ffc8dc'; c.fillRect(1, 15, 22, 4); c.fillStyle = '#d8d8e0'; c.fillRect(11, 1, 2, 18); }, 'hwin2'), { x, y: 3, z: -5.38, w: 3.2, h: 2.6, glow: true, noSlot: true }); else { R.box(x, -5.1, 3.4, 0.6, 2.2, { color: 0x8a9aa8, solid: false }); for (let k = 0; k < 4; k++) R.box(x - 1.27 + k * 0.85, -4.78, 0.78, 0.04, 2.0, { color: 0xa0b0c0, y: 0.1, solid: false, cast: false }); } }
    R.collider(-20, -5.6, 20, -4.6); for (let x = -18; x <= 18; x += 6) R.box(x, 0, 0.6, 0.6, 0.08, { color: 0xffffff, emissive: 0xfff8e8, y: 5.4, solid: false, cast: false });
    R.particles('petals', { count: 50, top: 5 });
    R.door('d_class', -12, { label: 'Класс 2-Б', z: -5.36, col: '#c8aa78', sign: '2-Б', cond: () => !!f.mat_s1, locked: ['~: Сначала шаг 12, «Один зонт». Он у ворот, во дворе.'], fn: (G) => G.goto('mat_class') });
    R.door('d_club', 12, { label: 'Кабинет драмкружка', z: -5.36, col: '#8a3a4a', sign: 'ДРАМКРУЖОК', cond: () => !!f.mat_roof, locked: ['~: Кабинет драмкружка. Заперт, пока идёт подготовка к спектаклю.'], fn: (G) => G.goto('mat_club') });
    R.door('out', 0, { wall: 's', to: 'mat_yard', spot: 'back', label: 'Во двор' });
    if (!f.mat_c1) { R.npc('artemiy', 6, -3.6, { dir: 'f', talk: async (G: any) => collide(G) }); R.npc('matvey_school', -6, -2, { id: 'matvey', talk: (G: any) => collide(G) }); R.trigger(-2.5, -3.6, 2.5, 0.6, (G: any) => collide(G)); }
    if (f.mat_c1 && !f.mat_book) { R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#ff9ac0'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#fff'; c.fillRect(2, 2, 6, 1); c.fillRect(2, 4, 4, 1); }, 'pinkbook'), 0.6, -1.4, { y: 0.03, glow: true, thin: true }); R.inter('book', 0.6, -0.8, { label: 'Розовая тетрадь', fn: bookScene }); R.npc('matvey_school', -3, -2.6, { id: 'matvey', talk: ['matvey/scared: Я… я собираю учебники. Не смотри.'] }); }
    R.spawn('start', 0, 3.6, 'b'); R.spawn('yard', 0, 3.6, 'b'); R.spawn('class', -12, -4.0); R.spawn('club', 12, -4.0);
  },
  async enter(G) { if (!G.f.mat_hallI) { G.f.mat_hallI = 1; await G.run(M.hallIntro); } },
};
async function collide(G: any) {
  const f = G.f; if (f.mat_c1) return; f.mat_c1 = 1; const mat = G.actor('matvey'), art = G.actor('artemiy'); G.focus(0, -2, 13);
  await G.run(M.collide0); mat.walkTo(-0.5, -2.6, 2.4); await art.walkTo(0.5, -2.6, 2.4); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  const c = await board(G, ['Включить «идеальный дубль»', 'Усилить эффект', 'Не вмешиваться']);
  if (c === 0) { stage(G); G.flash(0.5); await G.run(M.collidePerfect); } else if (c === 1) { stage(G); await G.run(M.collideBoost); } else { sincere(G); G.shake(0.2); await G.run(M.collideNone); }
  await G.run(M.collideAfter); await art.walkTo(-12, -4.2, 2.6); art.hidden = true; mat.walkTo(-3, -2.6, 2); G.unfocus(); await G.rebuild();
}
async function bookScene(G: any) {
  const f = G.f; await G.run(M.bookFind); await G.ui.paper(M.bookText); await G.run(M.bookAgree); f.mat_book = 1; G.mech('storyboard'); await G.rebuild();
}

// ---------------- 3. класс: закрытая дверь и записка ----------------
const klass: RoomDef = {
  name: 'Класс 2-Б', w: 20, d: 12, music: 'school_soft', amb: null, step: 'wood', grade: fakeGrade(1),
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xbcdcf4; R.floor('schoolfloor'); R.walls('schoolwall', { h: 5.5, tint: '#f0e8dc' }); R.ambient(0x9a9ab0, 2.6, 0xfff4e8);
    for (let z = -4; z <= 3; z += 2.4) R.decal(canvasTex(24, 20, (c) => { c.fillStyle = '#d8d8e0'; c.fillRect(0, 0, 24, 20); const g = c.createLinearGradient(0, 0, 0, 20); g.addColorStop(0, '#8ec0f0'); g.addColorStop(1, '#e8f4ff'); c.fillStyle = g; c.fillRect(1, 1, 22, 18); c.fillStyle = '#fff'; c.fillRect(4, 4, 6, 2); c.fillRect(13, 7, 7, 2); c.fillStyle = '#ffc8dc'; c.fillRect(1, 14, 8, 5); c.fillStyle = '#d8d8e0'; c.fillRect(11, 1, 2, 18); }, 'cwin'), { wall: 'w', at: z, y: 3, w: 2.2, h: 2.6, glow: true });
    R.sun(0xfff0d0, 2.6, -14, 12, 2); R.light(-8, 3, 0, 0xfff0d8, 10, 12);
    R.decal(canvasTex(90, 38, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 90, 38); c.fillStyle = '#2e5038'; c.fillRect(2, 2, 86, 32); ptext(c, 'Тема урока:', 6, 5, { size: 7, col: '#e8e8e8' }); ptext(c, '«Не всё, что поставлено, правда»', 6, 16, { size: 7, col: '#ffe0f0', w: 78 }); ptext(c, 'дежурные: Матвей, Арутеми', 40, 28, { size: 5, col: '#e8e8e8' }); }, 'jboard2'), { x: 0, y: 2.7, w: 8, h: 3.3 });
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) { const x = -5.4 + c * 3.4, z = -0.6 + r * 2.3; R.table(x, z, 1.5, 0.9, { tex: 'wood' }); R.box(x, z + 0.75, 0.6, 0.5, 0.5, { tex: 'wood', tint: '#c8a070', solid: false }); }
    R.table(-5, -4.4, 2.4, 1, { tex: 'darkwood' }); R.sprite('book', -5, -4.4, { y: 1.15 });
    R.look('manga', -6.2, -3.3, 'Томик сёдзё-манги', ['~: На учительском столе томик сёдзё-манги. На закладке рукой Алёны-сэнсэй: «Не путать жанр и жизнь».'], { r: 1.0, egg: 'manga' });
    R.box(8.6, -1, 0.7, 6, 2.2, { color: 0x8a9aa8 }); R.look('lockers', 7.8, 1.6, 'Шкафчики', ['~: Шкафчик Матвея: двадцать значков и наклейка «НЕ ОТКРЫВАТЬ, ТАМ ЧУВСТВА».']);
    if (!f.mat_lock) { R.npc('matvey_school', 1.6, 0.6, { id: 'matvey', dir: 'l', talk: ['matvey/worried: Мы дежурим. Вдвоём. Я протираю одну и ту же парту уже пять минут.'] }); R.npc('artemiy', -1.6, -1.6, { dir: 'r', talk: ['artemiy/smile: Если вытирать доску по сценарию, она чище? Проверяю.'] }); R.inter('lock', 6, -3.8, { label: 'Дверь класса (запереть «случайно»)', fn: lockScene }); }
    if (f.mat_lock && !f.mat_note) R.inter('note', -5, -3.3, { label: 'Записка «от Матвея»', fn: noteScene });
    R.door('out', 6, { label: 'В коридор', z: -5.96, col: '#c8aa78', fn: (G) => G.goto('mat_hall', 'class') });
    R.spawn('start', 6, -4.6);
  },
  async enter(G) { if (!G.f.mat_cl) { G.f.mat_cl = 1; await G.run(M.classIntro); } },
};
async function lockScene(G: any) {
  const f = G.f; G.focus(0, -0.6, 14); G.sfx('locked'); await G.run(M.classLock); G.sfx('door');
  const c = await board(G, ['Удержать сцену (запереть снова)', 'Отпустить']); if (c === 0) { stage(G); G.sfx('locked'); await G.run(M.classHold); } else { sincere(G); await G.run(M.classLet); }
  await G.run(M.classAfter); f.mat_lock = 1; G.unfocus(); await G.rebuild();
}
async function noteScene(G: any) {
  const f = G.f; await G.run(M.noteIntro); const r = await pick({ ...M.s2note, confirm: 'Подбросить в учебник' } as any); f.mat_note = r || 1; G.sfx('pencil'); stage(G);
  const B = new (await import('../world/room')).Builder(G.room, G); const tch = B.actor('teacher', 6, -4.4, { id: 'teacher' }); const mat = B.actor('matvey_school', 2, 0.6, { id: 'matvey' }); G.focus(0, -2, 14);
  await tch.walkTo(-3.6, -3.4, 2.4); tch.face(0, 3); await G.run(M.noteWrong); await tch.walkTo(6, -4.8, 3); tch.hidden = true; mat.face(G.player.x, G.player.z); G.unfocus();
}

// ---------------- 4. мацури: бэнто, тетрадь, картонный мир ----------------
const fest: RoomDef = {
  name: 'Школьный мацури', w: 52, d: 14, music: 'school', amb: 'crowd', step: 'stone', grade: { ...fakeGrade(2), sat: 1.0, tint: [1.04, 0.94, 1.08], bright: 1.0, bloom: 0.7 }, camDist: 22,
  build(R, G) {
    const f = G.f, broken = !!f.mat_break; R.room.group.userData.bg = broken ? 0x3a3448 : 0x1a1030; fog(R, broken ? 0x5a5468 : 0x2a1a40, 30, 80);
    R.floor('cobble', { w: 160, d: 40, z: 4, y: -0.02, tint: broken ? '#a8a0a0' : '#8a7a8a' }); R.ambient(broken ? 0x8a8478 : 0x5a4a78, 3.0, broken ? 0xd8d0c0 : 0xc0a8e8);
    R.particles('petals', { count: broken ? 160 : 90, top: 8 });
    let k = 0; for (let x = -76; x <= 76; x += 4.6) { if (Math.abs(x) < 26) { if (x > -24 && x < 18 && Math.abs(x - 2) > 4) stall(R, x, -4.6, k, 1); } else { stall(R, x, -4.6, k, 1); stall(R, x, 8.6, k + 2, -1); } k++; }
    for (const zz of [-2.6, 2.4]) { R.box(0, zz, 160, 0.03, 0.03, { color: 0x2a2018, y: 5.2, solid: false, cast: false }); for (let x = -76; x <= 76; x += 1.6) { if (broken && Math.sin(x * 7) > 0.3) continue; R.sprite('lantern', x, zz, { y: 4.4 + Math.sin(x * 0.7) * 0.18, glow: !broken, scale: 0.75, thin: true }); } }
    for (let x = -20; x <= 20; x += 10) R.light(x, 4.6, 0, broken ? 0xd8d0c0 : 0xffa070, broken ? 6 : 12, 14);
    if (broken) { // картонный мир: задники на подпорках, нарисованное небо
      R.box(0, -12, 140, 0.2, 12, { color: 0xc8b898, solid: false }); R.decal(canvasTex(64, 24, (c) => { c.fillStyle = '#d8c8a8'; c.fillRect(0, 0, 64, 24); c.strokeStyle = '#6a5a4a'; c.lineWidth = 1; for (let i = 0; i < 6; i++) { c.beginPath(); c.arc(8 + i * 10, 12, 4, 0, 7); c.stroke(); } ptext(c, 'ФОН №3: «ВЕЧЕР»', 32, 18, { size: 4, col: '#6a5a4a', align: 'center' }); }, 'cardsky'), { x: 0, y: 6, z: -11.85, w: 60, h: 22, noSlot: true });
      for (let x = -20; x <= 20; x += 8) { const s = R.box(x, -6.6, 0.1, 1.6, 2.6, { tex: 'wood', solid: false }); s.rotation.x = -0.5; }
    }
    // тории и лестница к холму
    const torii = new THREE.Group(); const red = L(broken ? 0xc8b0a0 : 0xd8302a, { emissive: broken ? 0 : 0x3a0806 }); const B = (w: number, h: number, d: number, x: number, y: number, z: number) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), red); b.position.set(x, y, z); b.castShadow = true; torii.add(b); };
    B(0.5, 6, 0.5, -2.4, 3, 0); B(0.5, 6, 0.5, 2.4, 3, 0); B(7.4, 0.5, 0.6, 0, 6.2, 0); B(6.2, 0.35, 0.4, 0, 5.2, 0); torii.position.set(21, 0, -3.4); R.room.group.add(torii); R.collider(18.4, -3.8, 18.8, -3.0); R.collider(23.2, -3.8, 23.6, -3.0);
    for (let i = 0; i < 10; i++) R.box(21, -6 - i * 0.6, 5, 0.6, 0.3 + i * 0.3, { tex: 'stone', tint: '#a8a0a8', solid: false });
    R.box(-16, 3.4, 6, 3, 0.6, { tex: 'stage', solid: false }); R.collider(-19, 1.9, -13, 4.9); R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#fff0f4'; c.fillRect(0, 0, 40, 10); ptext(c, 'ДРАМКРУЖОК ★ СПЕКТАКЛЬ', 20, 2, { size: 5, col: '#e84a6f', align: 'center' }); }, 'clubstage'), { x: -16, y: 3.2, z: 4.95, w: 4.4, h: 1.1, noSlot: true });
    if (!broken) { let next = 2; R.onUpdate((dt) => { next -= dt; if (next < 0) { next = 3 + Math.random() * 3; const c = [0xff6080, 0x80c0ff, 0xffe070][Math.floor(Math.random() * 3)]; const l = R.light(-20 + Math.random() * 40, 12, -14, c, 60, 60); let t = 0; R.onUpdate((d2) => { t += d2; l.intensity = Math.max(0, 60 - t * 50); }); } }); }
    // стол для бэнто у ларька
    R.table(2, 0.2, 2.4, 1.2, { tex: 'wood' }); R.photo('pair', 'Идеальный кадр', 2, 0.2, { cond: () => !!f.mat_bentoG && !f.mat_shot });
    if (!f.mat_bento) { R.npc('matvey_school', 0.6, 1.4, { id: 'matvey', talk: (G: any) => bentoScene(G) }); R.npc('artemiy', 3.4, 1.4, { dir: 'l', talk: (G: any) => bentoScene(G) }); }
    if (f.mat_bento && !f.mat_break) R.trigger(-4, -2, 8, 4, (G: any) => notebookScene(G));
    if (f.mat_break) { R.npc('matvey_school', 19.4, 0.8, { id: 'matvey', dir: 'l', talk: ['matvey/sad: Крыша. Шаг 100. Ты же всё рассчитала. Пойдём, раз рассчитала.'] }); R.door('roof', 21, { z: -3.6, label: 'Лестница на крышу школы', col: '#8a3a4a', sign: 'КРЫША', fn: (G) => G.goto('mat_roof') }); }
    R.crowd(['student', 'student2', 'dancer', 'student', 'courtier', 'student2'], -22, 4.6, 6, 3.6, 1.4, 'f');
    R.spawn('start', -23, 1.2, 'r');
  },
  async enter(G) { if (!G.f.mat_f) { G.f.mat_f = 1; await G.run(M.festIntro); } },
  async photo(G, subs) { const f = G.f; if (!subs.includes('pair') || f.mat_shot) return; f.mat_shot = 1; stage(G); await G.run(M.photoAnime); await bentoTaste(G); },
};
async function bentoScene(G: any) {
  const f = G.f; if (f.mat_bentoG) return G.run(M.bentoShot); f.mat_bentoG = 1; const mat = G.actor('matvey'), art = G.actor('artemiy'); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  await G.run(M.bentoGive); await G.run(M.bentoShot); G.toast('C: поднять камеру. Или просто подождать', '◉');
  const c = await board(G, ['Поставить идеальный кадр (камера)', 'Не мешать, пусть едят']); if (c === 1) { sincere(G); await bentoTaste(G); }
}
async function bentoTaste(G: any) { const f = G.f; if (f.mat_bento) return; await G.run(M.bentoTaste); f.mat_bento = 1; G.give('mat_photo' as any, true); await G.rebuild(); }
async function notebookScene(G: any) {
  const f = G.f; if (f.mat_break) return; const B = new (await import('../world/room')).Builder(G.room, G); const mat = B.actor('matvey_school', 0.6, 1.4, { id: 'matvey' }); const art = B.actor('artemiy', 3.4, 1.4, { id: 'artemiy', dir: 'l' }); G.focus(2, 0.8, 13);
  await G.run(M.notebook); await art.walkTo(-24, 2, 3); art.hidden = true; mat.face(G.player.x, G.player.z); await G.run(M.matveyAngry);
  G.audio.music(null); G.sfx('crash'); G.shake(0.6); G.flash(0.4); f.mat_break = 1; G.grade({ ...fakeGrade(3), sat: 0.55, wave: 0.1 }); await G.run(M.worldBreaks); G.unfocus(); await G.rebuild(); G.audio.music('school_soft');
}

// ---------------- 5. крыша: шаг 100 ----------------
const roof: RoomDef = {
  name: 'Крыша школы', w: 24, d: 12, music: 'school_soft', amb: 'wind', step: 'stone', grade: { sat: 0.85, tint: [0.92, 0.94, 1.1], vig: 0.5, bright: 1.0, bloom: 0.7 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c1430; fog(R, 0x101a38, 30, 80); R.floor('concrete', { tint: '#8a8a94' }); R.ambient(0x3a4468, 2.8, 0x8aa0d8); R.light(0, 4, 2, 0xc8d8ff, 10, 14);
    for (let x = -11.5; x <= 11.5; x += 0.5) R.box(x, -5.6, 0.05, 0.05, 2.2, { color: 0x8a9aa8, solid: false, cast: false }); for (const y of [0.1, 1.1, 2.15]) R.box(0, -5.6, 23, 0.06, 0.06, { color: 0x8a9aa8, y, solid: false, cast: false }); R.collider(-12, -6, 12, -5.3);
    const city = canvasTex(160, 40, (c) => { const g = c.createLinearGradient(0, 0, 0, 40); g.addColorStop(0, '#060a1e'); g.addColorStop(1, '#2a2a5a'); c.fillStyle = g; c.fillRect(0, 0, 160, 40); c.fillStyle = '#fff'; for (let i = 0; i < 50; i++) c.fillRect((i * 53) % 160, (i * 29) % 20, 1, 1); c.fillStyle = '#0a0e22'; for (let x = 0; x < 160; x += 8) { const h = 8 + ((x * 7) % 13); c.fillRect(x, 40 - h, 7, h); } c.fillStyle = '#ffd890'; for (let i = 0; i < 70; i++) c.fillRect((i * 37) % 160, 26 + (i * 7) % 14, 1, 1); }, 'roofcity');
    const back = new THREE.Mesh(new THREE.PlaneGeometry(90, 24), new THREE.MeshBasicMaterial({ map: city })); back.position.set(0, 4, -26); R.room.group.add(back);
    R.box(-8.6, -3, 2.4, 2.4, 3.2, { color: 0x9aa0a8 }); R.box(7.6, -3.6, 3, 2.4, 3, { color: 0xb8b8c0 }); R.door('down', -2, { wall: 'e', label: 'Лестница вниз', col: '#5a5a66', cond: () => !!f.mat_roof, locked: ['~: Сначала шаг 100. Матвей ждёт.'], fn: (G) => G.goto('mat_hall', 'club') });
    R.npc('matvey_school', 1.4, -3.6, { id: 'matvey', dir: 'b', talk: (G: any) => roofScene(G) });
    R.spawn('start', 9.6, -2, 'l');
  },
  async enter(G) { if (!G.f.mat_roofI) { G.f.mat_roofI = 1; await G.run(M.roofIntro); } },
};
async function roofScene(G: any) {
  const f = G.f; if (f.mat_roof) return G.run(['matvey/worried: Он в кабинете драмкружка. Я знаю. Он всегда там, когда ему грустно. Я… пойду сам.']);
  G.focus(1, -3, 13); await G.run(M.roofWait); await G.run(M.roofChoice); G.sfx('firework'); G.flash(0.3); await G.run(M.roofFire);
  f.mat_roof = 1; G.unfocus(); await G.run(['matvey: Он в кабинете драмкружка. Я знаю. Он всегда там, когда ему грустно.']);
}

// ---------------- 6. кабинет драмкружка: настоящий шаг ----------------
const club: RoomDef = {
  name: 'Кабинет драмкружка', w: 18, d: 11, music: null, amb: null, step: 'wood', grade: { sat: 0.95, tint: [1.08, 0.98, 0.9], vig: 0.45, bright: 1.0, bloom: 0.4 }, noTilt: false,
  build(R, G) {
    R.room.group.userData.bg = 0x1a1410; R.floor('stage', { tint: '#b08860' }); R.walls('schoolwall', { h: 5.5, tint: '#b8a890' }); R.ambient(0x5a4a40, 1.8, 0xffd8b0);
    window3D(R, -5, { wall: 'n', y: 3, w: 2.4, h: 2.4, night: true }); R.light(-5, 3, -3, 0xffc890, 8, 10);
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; const x = Math.cos(a) * 3.2, z = 0.4 + Math.sin(a) * 2.2; R.box(x, z, 0.6, 0.6, 0.55, { tex: 'wood', tint: '#a07848' }); R.box(x - Math.cos(a) * 0.25, z - Math.sin(a) * 0.25, 0.6, 0.1, 0.6, { tex: 'wood', tint: '#a07848', y: 0.55, solid: false }); }
    for (let i = 0; i < 4; i++) R.box(6.4 + (i % 2) * 1.1, -4.4 + (i > 1 ? 0.9 : 0), 1, 0.8, 0.8 + (i % 2) * 0.3, { tex: 'paper', tint: '#c8a878' });
    R.sprite('masks', 6.8, -4.5, { y: 1.2, scale: 1.2 }); R.sprite(canvasTex(12, 24, (c) => { c.fillStyle = '#e8e0f0'; c.fillRect(2, 0, 8, 22); c.fillStyle = '#c41e3a'; c.fillRect(2, 8, 8, 3); }, 'yukatarack'), -7.6, -4.6, { scale: 1.4 });
    // зеркало: на миг в нём две девушки в школьной форме
    const mir = R.decal(canvasTex(24, 36, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 36); c.fillStyle = '#9aa8b8'; c.fillRect(2, 2, 20, 32); c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(4, 3, 2, 30); }, 'clubmirror'), { x: 3, y: 2.6, w: 2, h: 3 });
    const ghost = R.decal(canvasTex(24, 36, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 36); c.fillStyle = '#7a8898'; c.fillRect(2, 2, 20, 32); const girl = (x: number, hair: string, long: boolean) => { c.fillStyle = hair; c.fillRect(x, 10, 6, long ? 12 : 6); c.fillStyle = '#e8c8a8'; c.fillRect(x + 1, 11, 4, 4); c.fillStyle = '#2a3050'; c.fillRect(x, 16, 6, 10); c.fillStyle = '#c41e3a'; c.fillRect(x + 2, 16, 2, 2); c.fillStyle = '#2a2a3a'; c.fillRect(x, 26, 6, 6); }; girl(5, '#5a341f', false); girl(13, '#8a3a1e', true); }, 'clubghost'), { x: 3, y: 2.6, w: 2, h: 3, noSlot: true }); ghost.visible = false; R.room.named.ghost = ghost; void mir;
    R.look('mirror', 3, -4.4, 'Зеркало', ['~: Обычное зеркало для репетиций. В углу наклейка: «Улыбайся глазами».']);
    R.npc('artemiy', -4.6, -4.0, { dir: 'f', talk: (G: any) => clubScene(G) });
    R.spawn('start', 7.4, 3.6, 'l');
  },
  async enter(G) { if (!G.f.mat_clubI) { G.f.mat_clubI = 1; await clubScene(G); } },
};
async function clubScene(G: any) {
  const f = G.f; if (f.mat_done) return; const B = new (await import('../world/room')).Builder(G.room, G); const mat = B.actor('matvey_school', 2.6, 2.6, { id: 'matvey' }); const art = G.actor('artemiy');
  G.player.place(8.2, 4.4, 'l'); G.focus(-1, -1.4, 13); G.audio.music('school_soft');
  await G.run(M.clubIntro); await mat.walkTo(-2.6, -2.4, 1.6); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  // искушение вмешаться: каждый раз можно промолчать
  let fails = 0; for (const [line, bad, good] of M.tempt as string[][]) { await G.run([line]); const c = await board(G, [good, bad]); if (c === 1) { fails++; stage(G); G.flash(0.3); await G.run(M.temptFail); } else sincere(G); }
  const ending = f.mat_perfect ? 'perfect' : staged(f) >= 4 ? 'tear' : 'real'; f.mat_end = ending;
  await G.run(ending === 'perfect' ? M.confPerfect : ending === 'tear' ? M.confTear : M.confReal);
  G.room.named.ghost.visible = true; G.sfx('glitch'); await G.wait(0.8); G.room.named.ghost.visible = false; await G.run(M.mirror); await G.run(M.clue);
  void fails; f.mat_done = 1; await mat.walkTo(7, 3.6, 3); mat.face(G.player.x, G.player.z); G.player.face(mat.x, mat.z); G.unfocus();
  G.audio.music('school'); await G.run(M.end); G.give('lantern', true); G.sfx('applause', { dur: 3 });
  const title = ending === 'perfect' ? 'Идеальная сцена' : ending === 'tear' ? 'Неизбежный шаг' : 'Настоящий кадр';
  await finishChapter(G, 'matvey', [['100 STEPS TO THE INEVITABLE', 'act'], 'Финал: «' + title + '».', ['Матвей сделал шаг сам. Варя не режиссировала.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { mat_yard: yard, mat_hall: hall, mat_class: klass, mat_fest: fest, mat_roof: roof, mat_club: club };
