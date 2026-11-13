// Глава Рубена, ROYAL FLUSH. Шпионский триллер в казино у горного озера (оммаж классике жанра, всё своё).
// Каркас: роль-ловушка «агент без нервов», желание Рубена сыграть по своему чтению стола, Варя ведёт его через наушник,
// и это становится контролем; кульминация: Рубен вынимает наушник, Варя решает, молчать ли.
// Механики: проход в салон (план Вари или честный разговор), покер по «теллам» соперника (маска Трагедии
// показывает спрятанное), подсказки в наушник против тишины, погоня по серпантину.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { R as D } from '../data/dialogue/ruben';
import { runner } from '../ui/minigames';
import { finishChapter, fog, actOf } from './common';
import { chandelier, sconce, rug } from '../world/decor';
import { barCounter, palm, statue, armchair, window3D } from '../world/decor3d';

const GRADE = { sat: 1.05, tint: [1.06, 1.0, 0.92], vig: 0.5, bloom: 0.75, contrast: 1.08 };
const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
const dressCode = (G: any) => { if (G.player.charId !== 'varya_gown') G.setPlayerChar('varya_gown'); };

/** Низкий серебристый автомобиль у входа. */
function car(R: Builder, x: number, z: number) {
  const g = new THREE.Group(); const silver = L(0xb8c0c8), dark = L(0x1a1e24);
  const b = (w: number, h: number, d: number, px: number, py: number, pz: number, m: THREE.Material) => { const m2 = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); m2.position.set(px, py, pz); m2.castShadow = true; g.add(m2); };
  b(4.6, 0.6, 1.9, 0, 0.62, 0, silver); b(2.2, 0.55, 1.6, -0.5, 1.15, 0, L(0x2a3a4a, { transparent: true, opacity: 0.8 })); b(4.7, 0.2, 1.95, 0, 0.38, 0, dark);
  for (const sx of [-1.5, 1.5]) for (const sz of [-0.9, 0.9]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.3, 14), dark); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.36, sz); g.add(w); }
  for (const sz of [-0.6, 0.6]) b(0.06, 0.16, 0.3, 2.32, 0.7, sz, L(0xfff4d0, { emissive: 0xffe0a0 }));
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 2.4, z - 1, x + 2.4, z + 1);
}
/** Стол рулетки: сукно, колесо, фишки. */
function roulette(R: Builder, x: number, z: number) {
  R.box(x, z, 3.4, 1.8, 0.95, { tex: 'darkwood' }); R.box(x, z, 3.2, 1.6, 0.04, { color: 0x1f6a45, y: 0.95, solid: false });
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.18, 24), L(0x5a3a22)); wheel.position.set(x - 1.0, 1.08, z); R.room.group.add(wheel);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.04, 24), L(0xc41e3a)); top.position.set(x - 1.0, 1.18, z); R.room.group.add(top); R.onUpdate((dt) => { top.rotation.y += dt * 2; wheel.rotation.y -= dt * 0.6; });
  for (let i = 0; i < 6; i++) R.box(x + 0.2 + (i % 3) * 0.4, z - 0.3 + Math.floor(i / 3) * 0.5, 0.18, 0.18, 0.08 + (i % 2) * 0.08, { color: [0xc41e3a, 0x1a1a1e, 0xe8c36a][i % 3], y: 0.97, solid: false, cast: false });
}

// ---------------- 1. терраса над озером ----------------
const terrace: RoomDef = {
  card: (G) => G.f.intro_rub ? null : (G.f.intro_rub = 1, [[actOf(G), 'act'], ['ROYAL FLUSH', 'big'], ['шпионский триллер · казино у озера · ставка на себя', 'sm']]),
  name: 'Терраса казино', chapter: 'Рубен', w: 34, d: 14, music: 'heist', amb: 'wind', step: 'stone', grade: { ...GRADE, tint: [0.96, 0.98, 1.08] }, camDist: 24,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a1028; fog(R, 0x101830, 40, 110); R.floor('stone', { tint: '#c8c0b0', d: 10.5, z: 1.75 }); R.ambient(0x3a4060, 2.6, 0xc0c8e8); R.sun(0x9ab0e0, 1.6, -8, 14, 10);
    // горы и озеро на заднем плане
    const sky = canvasTex(160, 60, (c) => { const g = c.createLinearGradient(0, 0, 0, 60); g.addColorStop(0, '#0a1030'); g.addColorStop(0.6, '#3a3a6a'); g.addColorStop(1, '#a86a6a'); c.fillStyle = g; c.fillRect(0, 0, 160, 60); c.fillStyle = '#fff'; for (let i = 0; i < 40; i++) c.fillRect((i * 53) % 160, (i * 29) % 26, 1, 1); c.fillStyle = '#1a1e30'; c.beginPath(); c.moveTo(0, 48); for (let x = 0; x <= 160; x += 10) c.lineTo(x, 30 + Math.abs(Math.sin(x * 0.07)) * 16 + (x % 20 ? 4 : 0)); c.lineTo(160, 60); c.lineTo(0, 60); c.fill(); c.fillStyle = '#e8e8f0'; for (let x = 20; x < 160; x += 40) { c.beginPath(); c.moveTo(x - 4, 34); c.lineTo(x, 30); c.lineTo(x + 4, 34); c.fill(); } c.fillStyle = '#ffd890'; for (let i = 0; i < 30; i++) c.fillRect((i * 37) % 160, 48 + (i * 7) % 6, 1, 1); }, 'alps');
    const back = new THREE.Mesh(new THREE.PlaneGeometry(150, 46), new THREE.MeshBasicMaterial({ map: sky })); back.position.set(0, 4, -30); R.room.group.add(back);
    const lake = new THREE.Mesh(new THREE.PlaneGeometry(200, 30), new THREE.MeshLambertMaterial({ color: 0x1a2a50, emissive: 0x0c1430 })); lake.rotation.x = -Math.PI / 2; lake.position.set(0, -1.2, -18); for (let i = 0; i < 40; i++) { const gl = new THREE.Mesh(new THREE.PlaneGeometry(0.6 + (i % 3) * 0.4, 0.08), new THREE.MeshBasicMaterial({ color: 0xffd890 })); gl.rotation.x = -Math.PI / 2; gl.position.set(-40 + (i * 7.3) % 80, -1.15, -6 - (i * 3.7) % 20); R.room.group.add(gl); } R.room.group.add(lake);
    // фасад казино справа, балюстрада над озером
    R.box(13, -2, 8, 10, 9, { tex: 'white', tint: '#e8e0d0' }); for (const y of [2.4, 5.6]) for (const z of [-5, -2, 1]) R.decal(canvasTex(10, 14, (c) => { c.fillStyle = '#c8b898'; c.fillRect(0, 0, 10, 14); c.fillStyle = '#ffd890'; c.fillRect(1, 1, 8, 12); c.fillStyle = '#c8b898'; c.fillRect(4, 1, 2, 12); }, 'cwin'), { x: 8.98, y, at: z, w: 1.2, h: 1.7, noSlot: true, glow: true }).rotation.y = -Math.PI / 2;
    for (let x = -17; x <= 8; x += 1) R.box(x, -3.3, 0.18, 0.18, 1.1, { tex: 'white', solid: false, cast: false }); R.box(-4.5, -3.3, 26, 0.4, 0.15, { tex: 'white', y: 1.1, solid: false }); R.box(-4.5, -3.3, 26, 0.6, 0.6, { tex: 'stone', tint: '#c8c0b0', y: -0.6, solid: false }); R.collider(-17, -7, 9, -3.1);
    for (const [x, z] of [[-14, -2.6], [-6, -2.6], [2, -2.6]]) { R.box(x, z, 0.2, 0.2, 3, { color: 0x2a2a2e, solid: false }); R.sprite('lantern', x, z, { y: 3, glow: true, scale: 1.1, thin: true }); R.light(x, 3.2, z + 0.6, 0xffd890, 8, 8); }
    palm(R, -16, 4.8); palm(R, 4, 5.6); car(R, -5, 3.6); statue(R, -11, 0.4, { pose: 'muse' });
    R.look('car', -5, 5.2, 'Серебристый автомобиль', D.car); R.look('lake', -9, -2.2, 'Озеро', D.lake);
    R.door('casino', 13, { z: 3.02, label: 'Вход в казино', col: '#3a1a14', sign: 'CASINO', w: 2.6, h: 3.6, fn: (G) => G.goto('rub_casino', 'start', { fade: 'fade' }) });
    R.npc('ruben_tux', 6.4, 0.6, { id: 'ruben', dir: 'l', talk: ['ruben/worried: Пойдём? Я буду делать вид, что я агент. А ты делай вид, что не видишь, как у меня трясутся руки.'] });
    R.npc('nol', -12.6, 3.6, { dir: 'r', talk: ['nol: Наушники проверены, линия чистая. Всё, что скажешь, он услышит. Всё.'] });
    R.spawn('start', -14, 2.4, 'r');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_arr) { G.f.rub_arr = 1; await G.run(D.arrive); } },
};

// ---------------- 2. большой зал ----------------
const casino: RoomDef = {
  name: 'Большой зал', w: 40, d: 16, music: 'heist', amb: 'crowd', step: 'carpet', grade: GRADE, camDist: 26,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c0806; R.floor('parquet', { tint: '#8a5a3a' }); R.walls('wallpaper', { h: 9, tint: '#8a2a2a', trim: 'gold' }); R.ambient(0x5a3a2a, 2.6, 0xffd8b0);
    rug(R, 0, 1, 26, 8, { col: '#3a0a10', border: '#d4ae48' });
    for (const x of [-12, 0, 12]) chandelier(R, x, 7.6, 0, 1.4, { light: 14 });
    for (const x of [-16, -8, 8, 16]) sconce(R, x, 4, -7.96, { light: 4 });
    window3D(R, -2, { wall: 'w', y: 4, w: 2.4, h: 4, night: true, curtains: true }); window3D(R, 3, { wall: 'w', y: 4, w: 2.4, h: 4, night: true, curtains: true });
    roulette(R, -11, 1); roulette(R, 11, 1); R.look('roul', -11, 2.6, 'Рулетка', D.roulette);
    for (const [x, z] of [[-6, 4.6], [6, 4.6]]) { R.box(x, z, 3, 1.4, 0.95, { tex: 'darkwood' }); R.box(x, z, 2.8, 1.2, 0.04, { color: 0x1f6a45, y: 0.95, solid: false }); }
    barCounter(R, -13, -6.4, 8); R.npc('barman', -13, -4.6, { dir: 'f', talk: D.bar });
    R.npc('croupier', -11, -0.4, { dir: 'f', talk: ['croupier: Ставки сделаны, ставок больше нет. Ой, простите, мадемуазель, это я по привычке.'] }); R.actor('croupier', 11, -0.4, { dir: 'f', id: 'cr2' });
    R.npc('hostess', 4, -4.6, { talk: async (G: any) => { await G.run(D.fortuna); if (!f.rub_fort) { f.rub_fort = 1; await G.run(D.fortunaAfter); } } }); R.spot(4, 8, -2, 4, -4.6, 0xffe0a0, 50, { angle: 0.25, cone: 0.05, shadow: false });
    R.photo('fortuna', 'Леди Фортуна', 4, -4.6);
    // салон за бархатной верёвкой: дверь на дальней стене, не за декором
    R.door('salon', 12.5, { label: f.rub_rope ? 'Частный салон' : 'Частный салон (бархатная верёвка)', sign: 'SALON PRIVÉ', col: '#5a0c18', w: 2.4, fn: async (G) => { if (!f.rub_rope) { await G.run(D.ropeLocked); await G.run(D.ropePlan); f.rub_rope = 1; if (f.rub_fake) f.rub_ctrl = (f.rub_ctrl || 0) + 1; } G.sfx('door'); await G.goto('rub_salon', 'start', { fade: 'fade' }); } });
    for (const sx of [-1.6, 1.6]) { R.box(12.5 + sx, -6.6, 0.12, 0.12, 1, { tex: 'gold', solid: false }); } R.box(12.5, -6.6, 3.2, 0.06, 0.06, { color: 0x8e1830, y: 0.85, solid: false, cast: false });
    R.npc('guard', 15.2, -6.0, { dir: 'l', talk: D.ropeLocked });
    R.actor('ruben_tux', 9.6, -5.2, { id: 'ruben', dir: 'r' });
    R.crowd(['courtier', 'collector', 'lydia', 'courtier'], -6, 6.4, 4, 3.6, 1.2, 'b');
    R.door('out', 0, { wall: 's', to: 'rub_terrace', spot: 'start', label: 'На террасу' });
    R.spawn('start', 0, 5.4, 'b');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_hall) { G.f.rub_hall = 1; await G.run(D.hallIn); } },
};

// ---------------- 3. частный салон: три руки покера ----------------
const salon: RoomDef = {
  name: 'Частный салон', w: 18, d: 11, music: 'noir', amb: null, step: 'carpet', grade: { ...GRADE, vig: 0.65, contrast: 1.15 }, camDist: 20,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x050304; R.floor('carpet'); R.walls('woodwall', { h: 6, tint: '#5a3a2a' }); R.ambient(0x3a2a20, 2.4, 0xd8b090); R.particles('dust', { count: 60, top: 5 });
    // покерный стол под низкой лампой
    const t = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.2, 32), L(0x5a3a22)); t.scale.z = 0.55; t.position.set(0, 1.0, -1.4); R.room.group.add(t);
    const cloth = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.04, 32), L(0x1f6a45)); cloth.scale.z = 0.55; cloth.position.set(0, 1.11, -1.4); R.room.group.add(cloth); R.collider(-2.4, -2.7, 2.4, -0.1);
    R.box(0, -1.4, 1.2, 0.5, 0.06, { color: 0xc8b890, emissive: 0x806030, y: 3.6, solid: false, cast: false }); R.box(0, -1.4, 0.04, 0.04, 2.4, { color: 0x2a2a2a, y: 3.6, solid: false, cast: false }); R.light(0, 3.2, -1.4, 0xffd890, 9, 7); R.light(-5, 3.5, 1, 0xd8a070, 6, 9); R.light(5, 3.5, 1, 0xd8a070, 6, 9);
    for (let i = 0; i < 8; i++) R.box(-0.9 + (i % 4) * 0.6, -1.5 + Math.floor(i / 4) * 0.3, 0.2, 0.2, 0.06 + (i % 3) * 0.05, { color: [0xc41e3a, 0x1a1a1e, 0xe8c36a][i % 3], y: 1.13, solid: false, cast: false });
    armchair(R, -6.4, -3.6, { col: 0x5a1a22, ry: 0.4 }); armchair(R, 6.4, -3.6, { col: 0x5a1a22, ry: -0.4 });
    R.decal(canvasTex(24, 18, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 18); c.fillStyle = '#2a3a5a'; c.fillRect(2, 2, 20, 14); c.fillStyle = '#e8e0d0'; c.fillRect(4, 10, 16, 3); c.fillStyle = '#5a6a8a'; c.beginPath(); c.moveTo(4, 10); c.lineTo(10, 5); c.lineTo(15, 10); c.fill(); }, 'safepaint'), { x: 5.4, y: 3.2, w: 2.4, h: 1.8 });
    R.npc('zero', 0, -2.9, { dir: 'f', talk: (G: any) => poker(G) }); R.actor('collector', -1.9, -1.6, { dir: 'r', id: 'p1' }); R.actor('courtier', 1.9, -1.6, { dir: 'l', id: 'p2' });
    R.npc('ruben_tux', 0, 0.2, { id: 'ruben', dir: 'b', talk: (G: any) => poker(G) });
    if (f.rub_won && !G.has('marionette')) R.inter('safe', 5.4, -4.4, { label: 'Сейф за картиной', fn: vaultScene });
    R.door('out', -5.5, { label: 'В большой зал', col: '#5a0c18', fn: (G) => G.goto('rub_casino', 'start') });
    R.spawn('start', -5.5, -3.6, 'r');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_salonI) { G.f.rub_salonI = 1; await G.run(D.salonIn); G.mech('masks'); } },
};
/** Одна рука: Варя видит игру с бара; маска Трагедии показывает спрятанный «телл». */
async function hand(G: any, intro: any[], tr: any[], ask: any[], rightIsCall: boolean) {
  const f = G.f; await G.run(intro); const sees = G.state.mask === 'tragedy'; if (sees) await G.run(tr); else G.toast('Маска Трагедии (2) показала бы, что Зеро прячет', '☹');
  await G.run(ask);
  let r = 0; const opts: any[] = [['Настоять на своей подсказке', [() => { r = 0; }]], ['Промолчать: пусть Рубен читает стол сам', [() => { r = 1; }]]];
  if (sees) opts.push([rightIsCall ? 'Подсказать: «Отвечай, у него ничего нет»' : 'Подсказать: «Сбрасывай, у него сила»', [() => { r = 2; }]]);
  await G.run([{ c: opts }]);
  const call = r === 0 ? !rightIsCall : true === rightIsCall; // Варина первая подсказка всегда неверна; Рубен сам читает верно
  if (r !== 1) f.rub_ctrl = (f.rub_ctrl || 0) + 1;
  if (r === 2) await G.run(['ruben/sad: (тихо) Ты опять решила за меня. Правильно решила. Но за меня.']);
  if (call) await G.run(rightIsCall ? D.callWin : D.callLose); else await G.run(rightIsCall ? D.foldBad : D.foldGood);
}
async function poker(G: any) {
  const f = G.f; if (f.rub_won) return G.run(['zero: Партия окончена, месье. Сейф ваш. Не люблю проигрывать, но люблю красивые блефы.']);
  G.focus(0, -1.4, 12);
  await hand(G, D.hand1, D.hand1Tr, D.hand1Ask, false);
  await hand(G, D.hand2, D.hand2Tr, D.hand2Ask, true);
  await G.run(D.hand3); await G.run(D.hand3Choice); G.sfx('heart'); await G.wait(0.6); await G.run(D.hand3Ruben);
  await G.run(f.rub_silent ? D.hand3Silent : D.hand3Talked); f.rub_won = 1; G.sfx('applause', { dur: 2 }); G.unfocus(); await G.rebuild();
}
async function vaultScene(G: any) {
  await G.run(D.vault.slice(0, 2)); G.give('marionette', true); G.sfx('pickup'); await G.run(D.vault.slice(2));
  G.sfx('alarm'); G.audio.music('chase'); await G.ui.card([['СЕРПАНТИН НАД ОЗЕРОМ', 'act'], ['план ушёл, люди остались', 'sm']]); await G.run(D.chaseIntro);
  let ok = false; while (!ok) { const r = await runner({ track: 'chase', title: 'Погоня', sub: '← → или A / D: уворачиваться от машин охраны', duration: 30 }); ok = r.ok; if (!ok) await G.run(D.chaseLose); }
  G.audio.music('heist'); await G.run(D.end); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'ruben', [['ROYAL FLUSH', 'act'], 'Рубен поставил всё на свой прочёт.', ['Лучшая подсказка иногда, это тишина.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { rub_terrace: terrace, rub_casino: casino, rub_salon: salon };
