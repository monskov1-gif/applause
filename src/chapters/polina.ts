// Глава Полины, THE HOUSE THAT LAUGHS. Хоррор / слэшер / немного комедии.
// Ночная лесная дорога, машина глохнет; особняк запирается за спиной. План дома: прихожая с лестницей,
// гостиная, библиотека с портретами, подвал; Полина одна: галерея с обоями и кухня со щитком.
// Маска Комедии превращает дом в розовое аниме, а Хозяина в котика.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, PPU } from '../gfx/tex';
import { charSheet, FW as FW0, FH as FH0, SS } from '../gfx/sprites';
const FW = FW0 * SS, FH = FH0 * SS;
import { P } from '../data/dialogue/polina';
import { lock } from '../ui/minigames';
import { finishChapter, carriedLight, rainy, fog, actOf } from './common';
import { rug, sconce, piano, vanity, chandelier } from '../world/decor';
import { wardrobe, bookshelf, sofa, armchair, window3D, coatStand, mirror3D } from '../world/decor3d';

const GRADE = { sat: 0.62, tint: [0.88, 0.94, 1.1], vig: 0.6, bright: 1.12, contrast: 1.05 };
const DARK = { sat: 0.5, tint: [0.84, 0.9, 1.1], vig: 0.72, bright: 1.08, contrast: 1.08 };
// маска Комедии: розовое аниме поверх хоррора
const KAWAII = { comedy: { sat: 2.0, tint: [1.28, 1.04, 1.22], bright: 1.5, contrast: 0.88, vig: 0.15 } };
const PORTRAITS = [
  { id: 'cap', name: 'Капитан с трубкой', year: '1902', sym: '✶', look: 'Капитан на палубе, в зубах трубка, за спиной штормовое море.', lie: '' },
  { id: 'lady', name: 'Дама с веером', year: '1931', sym: '☾', look: 'Дама с веером стоит перед зеркалом. В зеркале её отражение, лицом к нам.', lie: 'в зеркале дама стоит к нам спиной, а настоящая смотрит прямо в объектив.' },
  { id: 'kids', name: 'Дети на качелях', year: '1897', sym: '♣', look: 'Двое детей качаются на качелях в саду. Под качелями их тени.', lie: 'качели пустые. Детей на портрете нет, остались только две тени.' },
  { id: 'owner', name: 'Хозяин дома', year: '1922', sym: '⚷', look: 'Хозяин в цилиндре, за спиной напольные часы. Стрелки показывают три.', lie: 'у Хозяина вместо лица белая маска, а часы показывают тринадцать.' },
  { id: 'dog', name: 'Собака у камина', year: '1910', sym: '◉', look: 'Рыжая собака спит у камина, рядом мячик.', lie: '' },
];
const SYMS = ['☾', '✶', '♣', '⚷', '◉'];
const ANSWER = ['♣', '⚷', '☾'];

// ---------------- текстуры ----------------
function portraitTex(i: number, liar = false) {
  return canvasTex(26, 32, (c) => {
    c.fillStyle = '#5a4010'; c.fillRect(0, 0, 26, 32); c.fillStyle = '#86641c'; c.fillRect(1, 1, 24, 30); c.fillStyle = '#2a2a2e'; c.fillRect(3, 3, 20, 22);
    const sk = '#c8b8a0';
    if (i === 0) { c.fillStyle = '#2a4a6a'; c.fillRect(3, 3, 20, 10); c.fillStyle = '#1c2a44'; c.fillRect(7, 14, 12, 11); c.fillStyle = sk; c.fillRect(9, 7, 8, 8); c.fillStyle = '#fff'; c.fillRect(8, 5, 10, 3); c.fillStyle = '#5a4029'; c.fillRect(16, 12, 4, 2); }
    if (i === 1) { c.fillStyle = '#6a3a5a'; c.fillRect(6, 14, 10, 11); c.fillStyle = sk; c.fillRect(8, 7, 7, 8); c.fillStyle = '#2a1a14'; c.fillRect(7, 5, 9, 4); c.fillStyle = '#9fb4c8'; c.fillRect(17, 5, 5, 12); c.fillStyle = liar ? '#2a1a14' : sk; c.fillRect(18, 7, 3, 3); c.fillStyle = '#6a3a5a'; c.fillRect(18, 10, 3, 6); c.fillStyle = '#c8a0c0'; c.fillRect(12, 16, 5, 4); }
    if (i === 2) { c.fillStyle = '#2a4a2a'; c.fillRect(3, 3, 20, 22); c.fillStyle = '#5a4029'; c.fillRect(5, 4, 1, 14); c.fillRect(20, 4, 1, 14); c.fillRect(5, 4, 16, 1); c.fillRect(7, 18, 12, 1); if (!liar) { c.fillStyle = '#d8d0c0'; c.fillRect(8, 12, 3, 6); c.fillRect(14, 12, 3, 6); c.fillStyle = sk; c.fillRect(8, 9, 3, 3); c.fillRect(14, 9, 3, 3); } c.fillStyle = '#111'; c.fillRect(7, 22, 4, 2); c.fillRect(14, 22, 4, 2); }
    if (i === 3) { c.fillStyle = '#111'; c.fillRect(7, 13, 12, 12); c.fillStyle = liar ? '#f4f0e8' : sk; c.fillRect(9, 6, 8, 8); if (liar) { c.fillStyle = '#111'; c.fillRect(10, 8, 2, 2); c.fillRect(14, 8, 2, 2); c.fillRect(11, 11, 4, 1); } c.fillStyle = '#111'; c.fillRect(6, 4, 14, 3); c.fillRect(9, 1, 8, 4); c.fillStyle = '#e8e0c8'; c.fillRect(18, 5, 4, 4); c.fillStyle = '#111'; c.fillRect(20, 6, 1, 2); if (liar) c.fillRect(19, 6, 1, 1); else c.fillRect(20, 7, 2, 1); }
    if (i === 4) { c.fillStyle = '#5a2a1a'; c.fillRect(3, 14, 20, 11); c.fillStyle = '#ff8a30'; c.fillRect(4, 18, 4, 6); c.fillStyle = '#c86a2a'; c.fillRect(8, 18, 12, 5); c.fillRect(17, 15, 5, 5); c.fillStyle = '#e8e0c8'; c.fillRect(18, 22, 2, 2); }
    c.fillStyle = '#e8d8a8'; c.fillRect(8, 26, 10, 4); ptext(c, PORTRAITS[i].year, 13, 26, { size: 5, col: '#3a2a14', align: 'center' });
  }, 'portrait' + i + (liar ? 'L' : ''));
}
function wallpaper(R: Builder, x: number, up: boolean, mask?: string) {
  R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#2e5038'; c.fillRect(7, up ? 6 : 2, 2, 8); c.fillStyle = '#d86a8a'; c.fillRect(5, up ? 1 : 11, 6, 4); c.fillRect(6, up ? 0 : 15, 4, 1); c.fillStyle = '#48745a'; c.fillRect(up ? 9 : 4, 9, 3, 2); }, 'flower' + up), { x, y: 5.3, w: 1, h: 1, mask, noSlot: true });
}
const catTex = () => canvasTex(20, 22, (c) => {
  const W = '#fff8f4', S = '#f0d8e0'; c.fillStyle = W; c.fillRect(4, 9, 12, 11); c.fillRect(5, 5, 10, 7); c.fillRect(5, 3, 3, 3); c.fillRect(12, 3, 3, 3); c.fillStyle = '#ff9ac0'; c.fillRect(6, 4, 1, 1); c.fillRect(13, 4, 1, 1);
  c.fillStyle = '#2a1a2a'; c.fillRect(7, 7, 2, 2); c.fillRect(11, 7, 2, 2); c.fillStyle = '#fff'; c.fillRect(7, 7, 1, 1); c.fillRect(11, 7, 1, 1); c.fillStyle = '#ff7aa8'; c.fillRect(9, 9, 2, 1); c.fillStyle = S; c.fillRect(4, 18, 4, 2); c.fillRect(12, 18, 4, 2); c.fillRect(16, 12, 3, 2); c.fillRect(17, 9, 2, 3);
  c.fillStyle = '#ff4f8a'; c.fillRect(8, 11, 4, 2); c.fillStyle = '#1a1a1e'; c.fillRect(3, 2, 14, 1); c.fillRect(6, 0, 8, 2);
}, 'kawaiicat');
const heartTex = (col: string) => canvasTex(9, 8, (c) => { c.fillStyle = col; c.fillRect(1, 1, 3, 3); c.fillRect(5, 1, 3, 3); c.fillRect(0, 2, 9, 2); c.fillRect(1, 4, 7, 1); c.fillRect(2, 5, 5, 1); c.fillRect(3, 6, 3, 1); c.fillRect(4, 7, 1, 1); c.fillStyle = '#fff'; c.fillRect(2, 2, 1, 1); }, 'heart' + col);
const starTex = () => canvasTex(7, 7, (c) => { c.fillStyle = '#fff6a0'; c.fillRect(3, 0, 1, 7); c.fillRect(0, 3, 7, 1); c.fillRect(2, 2, 3, 3); }, 'kstar');

/** Маска Комедии: сердечки, звёздочки, розовый пол, блёстки. Всё видно только в Комедии. */
function kawaii(R: Builder, G: any, o: { w: number; d: number } ) {
  const hw = o.w / 2 - 1, cols = ['#ff9ac8', '#ffc0e0', '#c8a0ff', '#a0e0ff'];
  for (let i = 0; i < 9; i++) R.decal(i % 3 === 2 ? starTex() : heartTex(cols[i % 4]), { x: -hw + (i / 8) * hw * 2, y: 3.6 + Math.sin(i * 1.7) * 1.2, w: 0.8, h: 0.75, mask: 'comedy', glow: true, noSlot: true });
  R.decal(canvasTex(16, 16, (c) => { c.fillStyle = 'rgba(255,170,210,.5)'; c.fillRect(0, 0, 16, 16); c.fillStyle = 'rgba(255,255,255,.35)'; for (let k = 0; k < 6; k++) c.fillRect((k * 5) % 16, (k * 7) % 16, 2, 2); }, 'kfloor'), { flat: true, x: 0, z: 0, y: 0.03, w: o.w, h: o.d, mask: 'comedy', opacity: 0.22, glow: true }); R.light(0, 5, 1, 0xffc0e0, 0, 30, { name: 'kawaiiL' }); R.onUpdate(() => { const l = R.room.named.kawaiiL as THREE.PointLight; l.intensity = G.state.mask === 'comedy' ? 26 : 0; });
  const sparkles: THREE.Object3D[] = []; for (let i = 0; i < 14; i++) { const s = R.sprite(i % 2 ? starTex() : heartTex(cols[i % 4]), -hw + Math.random() * hw * 2, -o.d / 2 + 1 + Math.random() * (o.d - 2), { y: 1 + Math.random() * 3, glow: true, scale: 0.6, mask: 'comedy', thin: true }); sparkles.push(s); }
  R.onUpdate((dt, t) => { sparkles.forEach((s, i) => { s.position.y = 1.2 + ((t * 0.4 + i * 0.37) % 1) * 3.4; }); });
  // первый раз в Комедии: Полина в шоке от няшности
  R.onUpdate(() => { if (G.state.mask === 'comedy' && !G.f.pol_kawaii && G.lock === 0) { G.f.pol_kawaii = 1; G.cut(() => G.run(P.kawaii)); } });
}
/** В Комедии вместо Хозяина по дому ходит котик в шляпе. */
function catFor(R: Builder, G: any, guard: any) {
  const cat = R.sprite(catTex(), guard.actor.x, guard.actor.z, { scale: 1.7, glow: true, thin: true }); cat.visible = false;
  R.onUpdate((dt, t) => { const com = G.state.mask === 'comedy' && guard.active; guard.actor.hidden = !guard.active || com; cat.visible = com; cat.position.set(guard.actor.x, Math.abs(Math.sin(t * 9)) * 0.12, guard.actor.z); });
  return cat;
}

// ---------------- 1. ночная дорога ----------------
function car3D() {
  const g = new THREE.Group(); const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
  const B = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, p: THREE.Object3D = g) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; p.add(b); return b; };
  B(4.4, 0.75, 1.9, 0, 0.75, 0, L(0xb02434)); B(2.5, 0.7, 1.7, -0.35, 1.45, 0, L(0x9a1e2c));
  B(2.3, 0.55, 1.72, -0.35, 1.45, 0, L(0x2a3a5a, { emissive: 0x0a1020, transparent: true, opacity: 0.85 }));
  B(4.5, 0.18, 1.95, 0, 0.42, 0, L(0x1a1a1e)); for (const sx of [-1.4, 1.4]) for (const sz of [-0.9, 0.9]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.3, 14), L(0x111114)); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.38, sz); g.add(w); }
  const head = L(0xfff4c0, { emissive: 0xffe090 }); const tail = L(0x8a1010, { emissive: 0x600000 });
  for (const sz of [-0.62, 0.62]) { B(0.08, 0.2, 0.36, 2.22, 0.85, sz, head); B(0.08, 0.18, 0.34, -2.22, 0.85, sz, tail); }
  const lamps = [0, 1].map((i) => { const l = new THREE.SpotLight(0xfff0c0, 40, 26, 0.38, 0.5, 1.2); l.position.set(2.3, 0.9, i ? 0.6 : -0.6); l.target.position.set(14, 0, i ? 0.6 : -0.6); g.add(l, l.target); return l; });
  const hazard = new THREE.PointLight(0xffa020, 0, 5, 1.6); hazard.position.set(0, 1.4, 0); g.add(hazard);
  return { g, lamps, head, hazard };
}
const road: RoomDef = {
  name: 'Лесная дорога. 23:58', chapter: 'Акт II · Полина', w: 46, d: 12, music: 'horror', amb: 'rain', step: 'stone', grade: GRADE, camDist: 22,
  card: (G) => G.f.intro_pol ? null : (G.f.intro_pol = 1, [[actOf(G), 'act'], ['THE HOUSE THAT LAUGHS', 'big'], ['хоррор · слэшер · немного комедии', 'sm']]),
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a1020; fog(R, 0x0e1626, 30, 70);
    R.floor('grass', { tint: '#2e3a30', w: 160, d: 36, z: 4, y: -0.02 }); R.ambient(0x3a4868, 3.4, 0x9ab0e0); R.sun(0xa8c0ff, 2.4, -8, 14, 8); R.light(-12, 5, 4, 0x8098d0, 8, 18);
    R.floor('asphalt', { w: 160, d: 4.4, z: 1.2, y: 0.01 }); for (let x = -78; x <= 78; x += 3.2) R.box(x, 1.2, 1.4, 0.14, 0.02, { color: 0xd8d8c8, y: 0.03, solid: false, cast: false });
    for (const z of [-1.05, 3.45]) R.box(0, z, 160, 0.12, 0.05, { color: 0x6a6a5a, y: 0.02, solid: false, cast: false });
    rainy(R, G, { thunder: true });
    // бесконечный лес: ряды елей уходят за края комнаты в туман
    for (let x = -76; x <= 76; x += 2.3) { const j = Math.sin(x * 12.9898) * 0.5 + 0.5; if (Math.abs(x - 17) > 2.2) R.sprite('pine', x + j * 0.8, -3.6 - j * 1.6, { scale: 1.2 + j * 0.5, solid: Math.abs(x) < 23 ? 0.4 : false }); R.sprite('pine', x + 1.1, -6.2 - j, { scale: 1.5 + j * 0.4 }); if (j > 0.55) R.sprite('pine', x + 0.4, 5.6 + j * 0.8, { scale: 1.1 + j * 0.4 }); }
    R.collider(-23, -6, 15.6, -1.4); R.collider(18.4, -6, 23, -1.4);
    // тропинка к свету между деревьями
    R.floor('dirt', { x: 17, w: 2.4, d: 5.4, z: -3.8, y: 0.02 }); R.light(18, 3, -10, 0xffb860, 14, 14, { flicker: 0.2 });
    R.decal(canvasTex(10, 12, (c) => { c.fillStyle = '#1a120c'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#ffc870'; c.fillRect(2, 2, 6, 8); c.fillStyle = '#1a120c'; c.fillRect(4, 2, 2, 8); }, 'farwin'), { x: 18.6, y: 2.4, z: -9.5, w: 0.7, h: 0.85, glow: true, noSlot: true });
    R.inter('path', 17, -5.2, { label: 'Тропинка к свету', fn: async (G) => { G.sfx('step'); await G.goto('pol_porch', 'start', { fade: 'fade' }); } });
    R.look('road', -20, 2.6, 'Дорога в туман', P.road);
    // машина
    const car = car3D(); car.g.position.set(f.pol_drive ? -12 : -44, 0, 1.2); R.room.group.add(car.g); R.room.named.car = car.g;
    if (f.pol_drive) { car.lamps.forEach((l) => (l.intensity = 0)); car.head.emissive.set(0x000000); R.onUpdate((dt, t) => { car.hazard.intensity = Math.floor(t * 1.6) % 2 ? 4 : 0; }); }
    R.collider(-14.3, 0.2, -9.7, 2.2);
    R.inter('car', -12, 2.9, { label: 'Машина', fn: async (G) => { await G.run(f.pol_car ? P.carAfter : P.car); f.pol_car = 1; } });
    R.trigger(8, -2, 23, 6, async (G) => { await G.run(P.light); });
    if (f.pol_drive) { const pol = R.actor('polina_coat', -10.6, 3.3, { id: 'polina' }); G.follow(pol); }
    R.spawn('start', -12, 3.2, 'r');
  },
  async enter(G) {
    const f = G.f; if (f.pol_drive) return;
    // поездка: машина въезжает из тумана, глохнет, и девочки выходят
    const car = G.room.named.car as THREE.Group; G.player.hidden = true; G.focus(-24, 1, 16); let x = -44; let v = 7;
    const drive = new Promise<void>((res) => { const t0 = performance.now(); const step = () => { if (!G.room || G.room.named.car !== car) return res(); const k = (performance.now() - t0) / 1000; if (k > 2.2) v = Math.max(0, v - 0.09); x += v / 60; car.position.x = Math.min(x, -12); G.cam.focus = { x: car.position.x + 2, z: 1, dist: 16 }; if (x >= -12 || v <= 0) { car.position.x = -12; return res(); } requestAnimationFrame(step); }; step(); });
    if (!G.fast) { G.sfx('engine'); await G.run(P.drive); } await drive;
    G.sfx('engine', { stall: true }); G.flash(0.15); await G.wait(0.4); G.flash(0.15); G.room.named.car && (G.room.named.car.position.x = -12);
    f.pol_drive = 1; await G.rebuild(); G.player.hidden = false; G.player.place(-12, 3.2, 'r'); G.camSnap();
    await G.run(P.stall); G.unfocus();
  },
};

// ---------------- 2. крыльцо ----------------
const mansionFacade = (R: Builder) => {
  R.box(0, -5.6, 22, 1, 7.5, { tex: 'woodwall', tint: '#5a5a6a' }); R.box(0, -5.9, 24, 1.8, 0.5, { tex: 'darkwood', y: 7.5 });
  R.box(-6, -5.6, 7, 1, 3, { tex: 'darkwood', tint: '#3a3a4a', y: 8 }); R.box(6, -5.6, 7, 1, 3, { tex: 'darkwood', tint: '#3a3a4a', y: 8 });
  for (const x of [-8, -4, 4, 8]) for (const y of [2, 5.5]) { const lit = x === 4 && y === 5.5; R.decal(canvasTex(16, 22, (c) => { c.fillStyle = '#2a1c14'; c.fillRect(0, 0, 16, 22); c.fillStyle = lit ? '#e8b860' : '#141c2a'; c.fillRect(2, 2, 12, 18); c.fillStyle = '#2a1c14'; c.fillRect(7, 2, 2, 18); c.fillRect(2, 10, 12, 2); }, 'win' + lit), { x, y, z: -5.05, w: 1.4, h: 1.9, glow: lit, noSlot: true }); if (lit) R.light(x, y, -4.4, 0xe8a850, 4, 6, { flicker: 0.2 }); }
  R.box(0, -4.3, 5, 1.6, 0.3, { tex: 'darkwood' }); for (const x of [-2.3, 2.3]) R.box(x, -4.3, 0.3, 0.3, 3.6, { tex: 'darkwood', solid: false }); R.box(0, -4.3, 5.4, 1.8, 0.2, { tex: 'darkwood', y: 3.6, solid: false });
};
const porch: RoomDef = {
  name: 'Особняк в лесу', chapter: 'Акт II · Полина', w: 30, d: 14, music: 'horror', amb: 'rain', step: 'grass', grade: GRADE, camDist: 25, maskGrade: KAWAII,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0e1426; fog(R, 0x101a2c, 32, 72);
    R.floor('grass'); R.floor('dirt', { w: 3, d: 9, z: 1.5, y: 0.01 }); R.ambient(0x3e4a6a, 3.4, 0xa8b8e8); R.sun(0xb0c4ff, 2.2, -6, 14, 10);
    rainy(R, G, { thunder: true }); mansionFacade(R); R.light(0, 3, -3.6, 0xffc070, 8, 8, { flicker: 0.1 });
    for (const [x, z] of [[-13, -2], [-11, 3], [12, -3], [13, 2.5], [-14, 5.5], [10, 5.5], [-9, -4.5], [9.5, -4.6]]) R.sprite('pine', x, z, { scale: 1.3, solid: 0.4 });
    R.sprite('streetlamp', -3.5, 0.6, { solid: 0.2 }); R.light(-3.5, 3.8, 0.8, 0xffd890, 10, 9, { flicker: 0.25 });
    R.door('front', 0, { label: 'Входная дверь', z: -5.05, col: '#2a1c14', cond: () => G.has('porch_key'), locked: P.frontLocked, fn: async (G) => { G.sfx('creak'); await G.goto('pol_hall', 'front'); } });
    [[-2.6, -3.2, 0], [2.6, -3.2, 1], [3.6, -1.6, 0]].forEach(([x, z, k], i) => { R.sprite('flowerpot', x, z, { scale: 1.6 }); R.inter('pot' + i, x, z + 0.8, { label: 'Цветочный горшок', r: 1.2, fn: async (G) => { if (k && !G.has('porch_key')) { await G.run(P.pot); G.give('porch_key'); } else await G.run(P.potNot); } }); });
    R.photo('window', 'Силуэт в окне', 4, -5);
    kawaii(R, G, { w: 30, d: 14 });
    const pol = R.actor('polina_coat', 1.4, 5.4, { id: 'polina' }); G.follow(pol);
    R.spawn('start', 0, 5.5, 'b');
  },
  async enter(G) { if (!G.f.pol_arr) { G.f.pol_arr = 1; await G.run(P.arrive); await G.run(P.porchPhoto); G.toast('C: фотоаппарат', '◉'); } },
  async photo(G, subs) { if (subs.includes('window') && !G.f.pol_win) { G.f.pol_win = 1; await G.run(P.porchPhotoTaken); } },
};

// ---------------- 3. прихожая ----------------
const hall: RoomDef = {
  name: 'Прихожая', w: 24, d: 12, music: 'horror', amb: 'rain', step: 'wood', grade: GRADE, maskGrade: KAWAII,
  build(R, G) {
    const f = G.f, dark = !!f.pol_dark && !f.pol_light; R.room.group.userData.bg = 0x05060a;
    R.floor('parquet', { tint: '#6a4a34' }); R.walls('wallgreen', { h: 6.5, trim: 'darkwood' }); R.particles('dust', { count: 60, top: 5 }); rug(R, 0, 0.6, 8, 4.6, { col: '#3a1418', border: '#a08850' });
    if (dark) { R.ambient(0x343a58, 3.0, 0x7a8ab8); carriedLight(R, G, 0xffe0a0, 20, 12); R.light(0, 4, -3, 0x7088d0, 12, 14); }
    else { R.ambient(0x4a4250, 3.2, 0xc0b0b0); R.light(0, 4.4, 2, 0xffd8a8, 14, 16, { flicker: 0.05 }); chandelier(R, 0, 5.6, 0.4, 0.9, { light: f.pol_light ? 16 : 9 }); sconce(R, -3.5, 3.4, -5.96, { light: 4 }); sconce(R, 5.25, 3.4, -5.96, { light: 4 }); }
    // двери: входная (восток), гостиная (восток), библиотека (запад), подвал и галерея (север)
    R.door('front', 2.6, { wall: 'e', label: 'Входная дверь', col: '#2a1c14', fn: (G) => G.run(f.pol_dark ? P.polinaRun : P.houseLocked) });
    R.door('liv', -2.6, { wall: 'e', to: 'pol_living', spot: 'hall', label: 'Гостиная', col: '#3a2a1c', cond: () => !f.pol_dark || !!f.pol_light, locked: ['~: Из гостиной тянет холодом. Без света туда не пойду.'] });
    R.door('lib', -2, { wall: 'w', to: 'pol_library', label: 'Библиотека', col: '#3a2a1c', cond: () => !f.pol_dark, locked: ['~: В библиотеке что-то ходит. Тяжело, как метроном. Не туда.'] });
    R.door('gal', 8, { to: 'pol_gallery', label: 'Галерея', col: '#3a2a1c', cond: () => !!f.pol_dark && !f.pol_light, locked: ['polina/worried: Варь, там галерея. Давай не будем туда, пока можно не туда.'] });
    R.door('basement', 2.5, { label: f.pol_dark ? 'Засов подвала' : 'Дверь в подвал (замок с дисками)', col: '#4a4a56', fn: async (G) => {
      if (f.pol_dark) { if (!f.pol_light) return G.run(P.basementBolt); return polinaFree(G); }
      if (f.pol_open) return G.goto('pol_basement'); if (!f.pol_book) return G.run(P.basementLocked);
      const found = PORTRAITS.filter((p) => p.lie && f['pol_an_' + p.id]).sort((x, y) => +x.year - +y.year);
      const r = await lock({ title: 'Замок подвала', hint: `Три диска. Знаки трёх портретов-лжецов, по году: от самого давнего к самому новому.${found.length ? '<br><i>Блокнот: ' + found.map((p) => '«' + p.name + '», ' + p.year + ', знак ' + p.sym).join('; ') + '</i>' : '<br><i>Блокнот пока пуст. Портреты в библиотеке, смотреть через камеру.</i>'}`, symbols: SYMS, len: 3, answer: ANSWER });
      if (!r) return; if (r.join() === ANSWER.join()) { G.sfx('ok'); await G.run(P.lockRight); f.pol_open = 1; await G.goto('pol_basement'); } else { G.sfx('laugh', { n: 7 }); G.shake(0.2); await G.run(P.lockWrong); } } });
    R.sprite(canvasTex(6, 6, (c) => { c.fillStyle = f.pol_light ? '#40e040' : '#601010'; c.fillRect(0, 0, 6, 6); }, 'boltled' + !!f.pol_light), 3.9, -5.7, { y: 3.9, glow: true, thin: true });
    // парадная лестница наверх (провалена)
    R.stairs(-7, -1.4, 3.4, 8, { tex: 'darkwood' }); R.box(-8.8, -3.4, 0.12, 4.4, 1.1, { tex: 'darkwood', y: 0.9 + 0.9, solid: false });
    R.look('stairs', -7, -0.6, 'Лестница наверх', P.stairs, { mask: 'none' }); R.look('stairsTr', -7, -0.6, 'Следы на лестнице', P.stairsTr, { mask: 'tragedy' });
    // часы, зеркало с консолью, вешалка, скамья
    R.sprite(canvasTex(14, 40, (c) => { c.fillStyle = '#3a2a1c'; c.fillRect(0, 0, 14, 40); c.fillStyle = '#e8e0c8'; c.fillRect(2, 2, 10, 10); c.fillStyle = '#111'; c.fillRect(6, 3, 1, 5); c.fillRect(6, 7, 4, 1); c.fillStyle = '#86641c'; c.fillRect(5, 16, 4, 14); }, 'gclock'), 10.6, -5.3, { scale: 1.3, solid: 0.5 });
    R.look('clock', 10.6, -4.3, 'Напольные часы', P.clock, { mask: 'none' }); R.look('clockC', 10.6, -4.3, 'Часы (кашляют)', P.clockCom, { mask: 'comedy', egg: 'clock13' });
    R.table(-1.6, -5.4, 2.4, 0.7, { tex: 'darkwood' }); mirror3D(R, -1.6, 3.3, -5.94, 1.6, 2.2, {}); R.look('hmirror', -1.6, -4.4, 'Зеркало', P.mirrorHall);
    coatStand(R, 10.4, 4.6, [0x2a2a30, 0xe8c230]); R.look('coat', 10.4, 3.6, 'Вешалка', P.coat);
    sofa(R, -10.4, 3.6, { w: 2.2, col: 0x3a2a2a, ry: Math.PI / 2 });
    wallpaper(R, -5.5, true); wallpaper(R, 5.5, true);
    kawaii(R, G, { w: 24, d: 12 });
    if (!f.pol_dark) { const pol = R.actor('polina_coat', 8.6, 3.6, { id: 'polina' }); G.follow(pol); }
    R.spawn('front', 10.2, 2.6, 'l'); R.spawn('start', 10.2, 2.6, 'l'); R.spawn('lib', -10.2, -2, 'r'); R.spawn('liv', 10.2, -2.6, 'l'); R.spawn('gal', 8, -4.4); R.spawn('base', 2.5, -4.4);
  },
  async enter(G, from) {
    const f = G.f; if (f.pol_dark && !f.pol_dark_seen) { f.pol_dark_seen = 1; G.grade(DARK, true); await G.run(P.polinaStart); return; }
    if (f.pol_dark && !f.pol_light) G.grade(DARK, true);
    if (from === 'pol_porch' && !f.pol_in) { f.pol_in = 1; G.sfx('door'); G.shake(0.5); G.flash(0.2); await G.run(P.slam); G.sfx('laugh', { n: 5, f: 380, vol: 0.18 }); await G.run(P.enterHall); }
  },
};

// ---------------- 4. гостиная (Хозяина здесь нет) ----------------
function fireplace(R: Builder, x: number, z: number) {
  const fp = new THREE.Group(); const marble = new THREE.MeshLambertMaterial({ color: 0xd8ccc0 }); const add = (w: number, h: number, d: number, px: number, py: number, pz: number, m: THREE.Material) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(px, py, pz); b.castShadow = true; fp.add(b); };
  add(3.4, 0.3, 0.9, 0, 2.2, 0, marble); add(0.45, 2.2, 0.7, -1.45, 1.1, 0, marble); add(0.45, 2.2, 0.7, 1.45, 1.1, 0, marble); add(2.5, 1.6, 0.3, 0, 0.8, -0.25, new THREE.MeshBasicMaterial({ color: 0x140806 }));
  const fire = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshBasicMaterial({ map: canvasTex(16, 10, (c) => { c.fillStyle = '#ff8a20'; c.fillRect(2, 4, 12, 6); c.fillStyle = '#ffd060'; c.fillRect(5, 2, 6, 8); c.fillStyle = '#fff4c8'; c.fillRect(7, 5, 2, 5); }, 'fire'), transparent: true })); fire.position.set(0, 0.5, 0.05); fp.add(fire);
  fp.position.set(x, 0, z); R.room.group.add(fp); R.collider(x - 1.7, z - 0.45, x + 1.7, z + 0.45); R.light(x, 1, z + 1.2, 0xff9a40, 9, 8, { flicker: 0.25 });
  R.onUpdate((dt, t) => { fire.scale.y = 0.9 + Math.sin(t * 13) * 0.08 + Math.sin(t * 7.3) * 0.06; });
}
const living: RoomDef = {
  name: 'Гостиная', w: 20, d: 12, music: 'horror', amb: 'rain', step: 'carpet', grade: GRADE, maskGrade: KAWAII,
  build(R, G) {
    R.room.group.userData.bg = 0x05060a; R.floor('parquet', { tint: '#6a4a34' }); R.walls('wallpaper', { h: 6, tint: '#7a5a5a', trim: 'darkwood' }); R.ambient(0x4a4048, 3.2, 0xc8b0b0); R.light(0, 4.6, 1.4, 0xffd8a8, 14, 16, { flicker: 0.04 }); R.particles('dust', { count: 50, top: 5 });
    rug(R, 0, 0.2, 9, 5.4, { col: '#2a1a3a', border: '#b89858' });
    fireplace(R, 0, -5.5); R.look('fire', 0, -4.4, 'Камин', P.fire);
    window3D(R, -6, { wall: 'n', y: 3.2, w: 1.8, h: 2.8, curtains: true }); window3D(R, 6, { wall: 'n', y: 3.2, w: 1.8, h: 2.8, curtains: true });
    sofa(R, 0, 2.4, { w: 3.4, col: 0x5a2a2a, ry: Math.PI }); armchair(R, -3.8, -1.2, { col: 0x6a3a3a, ry: Math.PI / 2 }); armchair(R, 3.8, -1.2, { col: 0x6a3a3a, ry: -Math.PI / 2 });
    R.table(0, -0.8, 2.4, 1.1, { tex: 'darkwood' }); for (const [i, cx] of [-0.6, 0, 0.6].entries()) { const cup = R.box(cx, -0.8 + (i % 2) * 0.2, 0.18, 0.18, 0.14, { color: 0xf4f0e8, y: 1.08, solid: false }); void cup; }
    R.look('tea', 0, 0.4, 'Чайный столик', P.tea);
    R.sprite(canvasTex(8, 12, (c) => { c.fillStyle = '#e8c230'; c.fillRect(1, 5, 6, 6); c.fillStyle = '#f0e0d0'; c.fillRect(2, 1, 4, 4); c.fillStyle = '#f0d98a'; c.fillRect(1, 0, 6, 2); c.fillStyle = '#111'; c.fillRect(3, 2, 1, 1); c.fillRect(5, 2, 1, 1); }, 'pdoll'), 3.8, -1.2, { y: 0.75, scale: 1.1, thin: true }); R.look('doll', 3.8, 0, 'Кукла в кресле', P.doll);
    piano(R, 7.4, -3.4, -0.3); R.look('piano', 6.8, -1.8, 'Пианино', P.piano);
    bookshelf(R, -9.4, 2.8, { w: 3, h: 4.2, ry: Math.PI / 2 }); R.sprite('lamp', -7.4, -4.6, { scale: 1 }); R.light(-7.4, 2.8, -4.4, 0xffd8a0, 5, 6);
    R.box(7.6, 2.6, 1.2, 0.8, 0.9, { tex: 'darkwood' }); R.box(7.6, 2.6, 0.9, 0.5, 0.55, { color: 0x6a4a2a, y: 0.9, solid: false }); R.box(7.6, 2.86, 0.6, 0.02, 0.35, { color: 0xd8c8a0, y: 0.98, solid: false, cast: false });
    R.inter('radio', 7.6, 3.6, { label: 'Старое радио', fn: async (G) => { G.sfx('laugh', { n: 6, f: 520, vol: 0.2 }); await G.run(P.radio); } });
    kawaii(R, G, { w: 20, d: 12 });
    const pol = R.actor('polina_coat', -7.6, -0.6, { id: 'polina' }); G.follow(pol);
    R.door('hall', -2.6, { wall: 'w', to: 'pol_hall', spot: 'liv', label: 'В прихожую', col: '#3a2a1c' });
    R.spawn('hall', -8.2, -2.6, 'r'); R.spawn('start', -8.2, -2.6, 'r');
  },
  async enter(G) { if (!G.f.pol_liv) { G.f.pol_liv = 1; await G.run(P.living); } },
};

// ---------------- 5. библиотека: портреты и Хозяин ----------------
async function hide(G: any, actorsToHide: string[] = ['polina']) {
  const p = G.player; G.mech('hide');
  if (!p.hidden) { await G.run(P.hideIn); p.hidden = true; for (const id of actorsToHide) { const a = G.actor(id); if (a) a.hidden = true; } G.override = () => {}; G.grade({ vig: 0.95, bright: 0.7 }); }
  else { p.hidden = false; for (const id of actorsToHide) { const a = G.actor(id); if (a) a.hidden = false; } G.override = null; G.grade(G.f.pol_dark ? DARK : GRADE); }
}
const library: RoomDef = {
  name: 'Библиотека', w: 24, d: 12, music: 'horror', amb: 'rain', step: 'carpet', grade: GRADE, maskGrade: KAWAII,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('parquet', { tint: '#5a3a2a' }); R.walls('woodwall', { h: 6 }); R.ambient(0x463e48, 3.2, 0xc0b0b0); R.light(0, 4.6, 0.4, 0xffd8a8, 14, 16, { flicker: 0.05 }); R.particles('dust', { count: 60, top: 5 });
    rug(R, 0, 0.6, 7, 3.6, { col: '#3a1a14', border: '#a08850' });
    for (const x of [-6, 6]) { R.light(x, 3.6, -3.4, 0xe8b070, 10, 10, { flicker: 0.3 }); }
    // портреты: глазами одно, через видоискатель лжецы показывают другое
    const swaps: { a: THREE.Object3D; b: THREE.Object3D }[] = [];
    PORTRAITS.forEach((pt, i) => { const x = -8 + i * 4; const a = R.decal(portraitTex(i), { x, y: 3, w: 1.9, h: 2.4, noSlot: true }); if (pt.lie) { const b = R.decal(portraitTex(i, true), { x, y: 3, w: 1.9, h: 2.4, noSlot: true }); b.visible = false; swaps.push({ a, b }); }
      sconce(R, x + 2, 3.9, -5.96, { light: 0 }); R.inter('pt_' + pt.id, x, -4.4, { label: 'Портрет: ' + pt.name, fn: (G) => G.run(P.portraitLook(pt.name, pt.year, pt.sym, pt.look)) }); R.photo(pt.id, pt.name, x, -5.5); });
    R.onUpdate(() => { const v = !!G.inPhoto; for (const s of swaps) { s.a.visible = !v; s.b.visible = v; } });
    bookshelf(R, -11.4, -2.4, { w: 3.2, h: 4.6, ry: Math.PI / 2 }); bookshelf(R, -11.4, 1.4, { w: 3.2, h: 4.6, ry: Math.PI / 2 }); bookshelf(R, 11.4, 2.2, { w: 3, h: 4.6, ry: -Math.PI / 2 });
    R.table(0, 0.4, 3, 1.3, { tex: 'darkwood' }); R.sprite('bookstand', 0, 0.4, { y: 1.15, scale: 1.1 }); R.sprite('candle', -1.1, 0.3, { y: 1.15, scale: 1.1 }); R.light(-1.1, 1.8, 0.6, 0xffc070, 3, 4, { flicker: 0.3 });
    armchair(R, -2.6, 1.6, { col: 0x4a2a2a, ry: Math.PI + 0.4 }); armchair(R, 2.6, 1.6, { col: 0x4a2a2a, ry: Math.PI - 0.4 });
    R.inter('book', 0, 1.6, { label: 'Проклятая книга', fn: async (G) => { await G.run(P.book); await G.ui.paper(P.bookText); if (!f.pol_book) { f.pol_book = 1; await G.run(P.bookAfter); await ownerEnters(G); } } });
    for (const x of [-7.6, 7.6]) { wardrobe(R, x, 4.4, { w: 1.9, h: 3.2, col: 0x8a5a3a }); R.inter('wd' + x, x, 5.2, { label: 'Шкаф (спрятаться / выйти)', r: 1.4, fn: (G) => hide(G) }); }
    const g = R.guard('owner', [[-9, -2.6], [7, -2.6]], { speed: 1.6, range: 5.2, half: 0.45, pause: 1.6, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(G.state.mask === 'comedy' ? P.caughtCat : P.caught); G.player.place(10, 1.6, 'l'); G.actor('polina')?.place(10.4, 2.4); G.room.guards[0].actor.place(-9, -2.6); G.camSnap(); } });
    g.active = !!f.pol_book; catFor(R, G, g);
    R.look('catL', 0, -2, 'Котик-Хозяин', P.catLook, { mask: 'comedy', r: 3 });
    kawaii(R, G, { w: 24, d: 12 });
    R.door('back', -2, { wall: 'e', to: 'pol_hall', spot: 'lib', label: 'В прихожую', col: '#3a2a1c' });
    const pol = R.actor('polina_coat', 10.4, 2.4, { id: 'polina' }); G.follow(pol); R.spawn('start', 10, 1.2, 'l');
  },
  async photo(G, subs) {
    const f = G.f; for (const pt of PORTRAITS.filter((p) => subs.includes(p.id))) { if (pt.lie) { await G.run(P.liar(pt.name, pt.year, pt.sym, pt.lie)); f['pol_an_' + pt.id] = 1; } else await G.run(P.honest(pt.name)); }
    if (PORTRAITS.every((p) => !p.lie || f['pol_an_' + p.id]) && !f.pol_photos) { f.pol_photos = 1; await G.run(P.allLiars); }
  },
};
/** Хозяин не стоит в комнате заранее: он входит в дверь, когда книга прочитана. */
async function ownerEnters(G: any) {
  const g = G.room.guards[0]; const a = g.actor; a.place(10.8, -2.2, 'l'); g.active = false; a.hidden = false; G.sfx('creak'); G.focus(6, -1, 16);
  await G.run(P.ownerSeen.slice(0, 1)); await a.walkTo(7, -2.6, 1.6); g.active = true; await G.run(P.ownerSeen.slice(1)); G.unfocus(); G.mech('stealth');
}

// ---------------- 6. подвал ----------------
const basement: RoomDef = {
  name: 'Подвал', w: 14, d: 10, music: 'horror', amb: null, step: 'stone', grade: { ...GRADE, tint: [1.0, 0.92, 0.9] }, noMasks: true,
  build(R, G) {
    R.room.group.userData.bg = 0x05060a; R.floor('stone'); R.walls('stone', { h: 5 }); R.ambient(0x4a3c40, 3.0, 0xb09ca0);
    vanity(R, 0, -4.2, { w: 3, clutter: 4, photos: 2 }); mirror3D(R, 0, 2.9, -4.92, 2.2, 2.6, { bulbs: true });
    R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#fff8e8'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#e84a6f'; c.fillRect(2, 2, 6, 1); }, 'card'), 0.9, -4.1, { y: 1.15, glow: true, thin: true });
    R.look('card', 0.9, -3.0, 'Открытка', ['~: «Варюш, восемнадцать, это не экзамен…» Мамина открытка. Та же, что в моей гримёрке.', '~: Кто-то развесил по чужим историям кусочки меня. Как метки на карте.'], { r: 1.3 });
    // котёл, стеллаж с банками, ящики, решётка
    const boil = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.4, 14), new THREE.MeshLambertMaterial({ color: 0x5a4a3a })); boil.position.set(-5.4, 1.2, -3.6); R.room.group.add(boil); R.collider(-6.2, -4.4, -4.6, -2.8); R.box(-5.4, -3.6, 0.2, 0.2, 2.6, { color: 0x3a3a3a, y: 2.4, solid: false });
    R.box(5.6, -4.4, 2, 0.7, 3, { tex: 'darkwood' }); for (let k = 0; k < 3; k++) for (let j = 0; j < 4; j++) R.box(4.9 + j * 0.45, -4.1, 0.25, 0.25, 0.35, { color: [0xc86a2a, 0x8a2a3a, 0x6a8a3a, 0xd8c890][(j + k) % 4], y: 0.5 + k * 0.95, solid: false, cast: false, opacity: 0.85 });
    R.decal(canvasTex(16, 10, (c) => { c.fillStyle = '#3a3a40'; c.fillRect(0, 0, 16, 10); c.fillStyle = '#111'; for (let i = 0; i < 4; i++) c.fillRect(2, 1 + i * 2.3, 12, 1); }, 'vent'), { wall: 'e', at: -1.5, y: 3.2, w: 1.5, h: 1 });
    R.inter('vent', 6.2, -1.5, { label: 'Вентиляционная решётка', fn: (G) => G.run(['~: Решётка. Сквозь неё слышен дождь и скрип половиц наверху.']) });
    R.box(-5, 3.2, 1.6, 1, 1, { tex: 'wood' }); R.box(5.2, 3.4, 1.3, 1.3, 1.3, { tex: 'wood' }); R.light(0, 3.6, 0, 0xffd9a0, 6, 9, { flicker: 0.08 });
    R.spawn('start', -3.6, 2.4, 'r');
  },
  async enter(G) {
    const f = G.f; if (f.pol_trapped) return; f.pol_trapped = 1; const pol = G.actor('polina'); G.unfollow?.(pol);
    await G.run(P.basementDown.slice(0, 3)); G.sfx('door'); G.shake(0.5); G.flash(0.3); await G.run(P.basementDown.slice(3)); G.sfx('laugh', { n: 8, f: 260, vol: 0.4 });
    // идём к решётке по свободному проходу, в обход столика
    await G.player.walkTo(-1, 0.6, 4); await G.player.walkTo(5.2, 0.6, 4); await G.player.walkTo(5.6, -1.5, 3); G.player.dir = 'r'; await G.run(P.vent);
    f.pol_dark = 1; G.setPlayerChar('polina_coat'); G.give('flashlight', true); await G.ui.card([['ПОЛИНА', 'act'], ['Страшно, и всё равно идти.', 'sm']]);
    await G.goto('pol_hall', 'base', { fade: 'fade' });
  },
};

// ---------------- 7. Полина одна: галерея ----------------
const DOORS_G = [{ x: -10.5, up: false }, { x: -3.5, up: true }, { x: 3.5, up: false }, { x: 10.5, up: false }];
const gallery: RoomDef = {
  name: 'Галерея', w: 32, d: 11, music: 'horror', amb: 'rain', step: 'wood', grade: DARK, noMasks: true,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('parquet', { tint: '#4a3428' }); R.walls('wallgreen', { h: 6, trim: 'darkwood' }); R.ambient(0x343a58, 3.0, 0x7a8ab8); carriedLight(R, G, 0xffe0a0, 20, 12); for (const x of [-11, 0, 11]) R.light(x, 4, -2, 0x7088d0, 8, 12);
    R.floor('carpet', { w: 30, d: 2, z: 1.6, y: 0.015 });
    for (const x of [-14, 14]) { R.sprite('candle', x, -5, { y: 1.6, scale: 1.4 }); R.box(x, -5, 0.6, 0.6, 1.6, { tex: 'darkwood' }); }
    for (const d of DOORS_G) { wallpaper(R, d.x, d.up); R.door('g' + d.x, d.x, { label: 'Дверь', col: '#3a2a1c', fn: async (G) => {
      if (!f.pol_gal_hint) { f.pol_gal_hint = 1; await G.run(P.galleryHint); }
      if (d.up) { G.sfx('creak'); return G.goto('pol_kitchen'); }
      G.sfx('creak'); await G.run(P.fakeDoor.slice(0, 1)); G.sfx('laugh', { n: 6, f: 420, vol: 0.3 }); G.flash(0.4); G.shake(0.3); await G.run(P.fakeDoor.slice(1)); } });
      R.look('wp' + d.x, d.x + 1.4, -4.2, 'Обои над дверью', d.up ? P.wallpaperUp : P.wallpaperDown, { r: 1.0, y: 4.6 }); }
    for (const [i, x] of [-7, 0, 7].entries()) { wardrobe(R, x, -4.9, { w: 1.8, h: 3.1, col: 0x7a4a2a }); R.inter('wd' + i, x, -3.9, { label: 'Шкаф (спрятаться / выйти)', r: 1.3, fn: (G) => hide(G, []) }); }
    for (const x of [-12.9, 12.9]) R.decal(portraitTex(x < 0 ? 0 : 4), { x, y: 3.2, w: 1.3, h: 1.65, noSlot: true });
    R.guard('owner', [[-13, 1.6], [13, 1.6]], { speed: 2.0, range: 6.2, half: 0.5, pause: 1.2, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(P.galCaught); G.player.place(-14.2, 2, 'r'); G.room.guards[0].actor.place(13, 1.6); G.camSnap(); } });
    R.door('back', 2, { wall: 'w', to: 'pol_hall', spot: 'gal', label: 'В прихожую', col: '#3a2a1c' });
    R.spawn('start', -14.2, 2, 'r');
  },
  async enter(G) { if (!G.f.pol_gal_seen) { G.f.pol_gal_seen = 1; G.sfx('heart'); await G.run(P.galleryIn); } },
};

// ---------------- 8. кухня: щиток и Хозяин ----------------
const kitchen: RoomDef = {
  name: 'Кухня', w: 16, d: 10, music: 'horror', amb: 'rain', step: 'stone', grade: DARK, noMasks: true,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('checker'); R.walls('plaster', { h: 5, tint: '#8a9aa0' });
    if (!f.pol_light) { R.ambient(0x343a58, 3.0, 0x7a8ab8); carriedLight(R, G, 0xffe0a0, 20, 12); R.light(0, 4, -2, 0x7088d0, 8, 12); } else { R.ambient(0x50483c, 2.8, 0xffe0c0); R.light(0, 4, 0, 0xffe8c0, 22, 16); }
    // кухонный гарнитур: тумбы со столешницей, плита, мойка, навесные шкафы
    for (let x = -6.4; x <= 1.6; x += 1.6) { if (Math.abs(x + 1.6) < 0.1) continue; R.box(x, -4.4, 1.55, 1.0, 1.05, { tex: 'wood', tint: '#a8c0b8' }); R.box(x, -4.35, 1.6, 1.1, 0.08, { tex: 'stone', tint: '#e8e0d8', y: 1.05, solid: false }); R.box(x, -4.75, 1.4, 0.5, 1.0, { tex: 'wood', tint: '#a8c0b8', y: 3.0, solid: false }); }
    R.box(-1.6, -4.4, 1.5, 1.0, 1.06, { color: 0x1a1a1e }); for (const [bx, bz] of [[-1.95, -4.6], [-1.25, -4.6], [-1.95, -4.15], [-1.25, -4.15]]) R.box(bx, bz, 0.4, 0.4, 0.03, { color: 0x3a3a40, y: 1.07, solid: false, cast: false });
    R.box(1.6, -4.35, 0.9, 0.6, 0.06, { color: 0xc8d0d8, y: 1.1, solid: false, cast: false }); R.box(1.6, -4.7, 0.06, 0.06, 0.4, { color: 0xc8d0d8, y: 1.12, solid: false, cast: false });
    for (let i = 0; i < 4; i++) { const pot = R.box(-5.6 + i * 0.6, -4.9, 0.36, 0.36, 0.26, { color: 0x8a6a4a, y: 2.0, solid: false, cast: false }); void pot; }
    R.box(6.6, -4.2, 1.4, 1.2, 2.4, { tex: 'gloss', tint: '#e8e8e0' }); R.box(6.0, -3.58, 0.06, 0.06, 0.6, { color: 0x888888, y: 1.3, solid: false, cast: false });
    R.table(-2.6, 1.2, 2.6, 1.4, { tex: 'wood' }); for (const [cx, cz] of [[-3.6, 2.3], [-1.6, 2.3], [-3.6, 0.1], [-1.6, 0.1]]) R.box(cx, cz, 0.5, 0.5, 0.55, { tex: 'wood', solid: false });
    window3D(R, -2.6, { wall: 'w', y: 2.8, w: 1.6, h: 2 });
    R.box(4.4, -4.85, 1.2, 0.3, 1.6, { tex: 'metal' });
    R.sprite(canvasTex(10, 14, (c) => { c.fillStyle = '#484e59'; c.fillRect(0, 0, 10, 14); c.fillStyle = f.pol_light ? '#40e040' : '#601010'; c.fillRect(2, 2, 2, 2); c.fillStyle = '#e8e0c8'; c.fillRect(5, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(3, f.pol_light ? 5 : 9, 4, 3); }, 'fuse' + !!f.pol_light), 4.4, -4.6, { y: 1.5, scale: 1.2, thin: true });
    R.inter('fuse', 4.4, -3.5, { label: f.pol_light ? 'Щиток (включён)' : 'Электрощиток', fn: async (G) => { if (f.pol_light) return; await breakerScene(G); } });
    if (f.pol_pile) { R.sprite(canvasTex(24, 12, (c) => { c.fillStyle = '#1c1614'; c.fillRect(0, 6, 24, 6); c.fillStyle = '#111'; c.fillRect(2, 2, 14, 3); c.fillRect(5, 0, 8, 3); c.fillStyle = '#e8e4d8'; c.fillRect(15, 4, 7, 7); c.fillStyle = '#111'; c.fillRect(16, 6, 2, 2); c.fillRect(19, 6, 2, 2); }, 'ownerpile'), 4.6, -2.0, { scale: 1.3 }); R.look('pile', 4.6, -1.2, 'Плащ, шляпа и маска', P.pile); }
    R.door('back', 1.2, { wall: 'w', to: 'pol_gallery', label: 'В галерею', col: '#3a2a1c', fn: async (G) => G.goto(f.pol_light ? 'pol_hall' : 'pol_gallery', f.pol_light ? 'gal' : 'start') });
    R.spawn('start', -6.6, 1.2, 'r');
  },
  async enter(G) { if (!G.f.pol_k_seen) { G.f.pol_k_seen = 1; G.sfx('ok'); await G.run(P.kitchen); } },
};
/** Свет включён, но Хозяин врывается на кухню, загоняет Полину в угол и... кончается. Разваливается на части. */
async function breakerScene(G: any) {
  const f = G.f; await G.run(P.fuse); f.pol_light = 1; G.flash(0.8); G.grade({ ...GRADE, bright: 1.05, sat: 0.7 }, false); await G.rebuild();
  await G.run(P.burst1); G.sfx('crash'); G.shake(0.9); G.flash(0.3);
  const B = new (await import('../world/room')).Builder(G.room, G); const own = B.actor('owner', -7.2, 1.2, { id: 'ownerK', dir: 'r' });
  G.audio.music('chase', { restart: true }); G.grade({ tint: [1.3, 0.82, 0.82], vig: 0.95, contrast: 1.25, sat: 0.6 }, false); G.focus(0, -1, 13);
  // тесак в руке Хозяина
  const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.9), new THREE.MeshBasicMaterial({ map: canvasTex(6, 12, (c) => { c.fillStyle = '#c8d0d8'; c.fillRect(0, 0, 6, 7); c.fillStyle = '#fff'; c.fillRect(0, 0, 1, 7); c.fillStyle = '#3a2a1a'; c.fillRect(2, 7, 2, 5); }, 'cleaver'), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })); blade.position.set(0.55, 1.5, 0.05); own.group.add(blade);
  await G.run(P.burst2); G.sfx('heart');
  await own.walkTo(0, 0.2, 1.4); await G.run(P.burst3); G.sfx('heart'); G.shake(0.3);
  await Promise.all([own.walkTo(4.6, -2.2, 1.1), G.player.walkTo(5.8, -3.1, 1.6)]); G.player.dir = 'f'; G.player.pose = 'fear'; own.face(G.player.x, G.player.z);
  await G.run(P.burst4);
  await tweenP(G, 0.7, (k) => { blade.position.y = 1.5 + k * 1.3; blade.rotation.z = k * 0.9; }); G.sfx('heart'); G.shake(0.6); G.flash(0.2);
  G.audio.music(null); G.sfx('hum'); await G.wait(0.8); await G.run(P.burst5); G.sfx('windup', { down: true });
  await fallApart(G, own, [blade]); G.player.pose = null; f.pol_pile = 1;
  G.grade({ ...GRADE, bright: 1.05, sat: 0.7 }, false); G.audio.music('horror'); await G.run(P.owner); G.give('owner_mask' as any, true); G.unfocus(); await G.rebuild();
}
function tweenP(G: any, dur: number, fn: (k: number) => void) { return new Promise<void>((res) => { let t = 0; const u = (dt: number) => { t += dt; const k = Math.min(1, t / dur); fn(k); if (k >= 1) { const i = G.room.updaters.indexOf(u); if (i >= 0) G.room.updaters.splice(i, 1); res(); } }; G.room.updaters.push(u); }); }
/** Персонаж «разваливается»: спрайт режется на шляпу, голову, туловище, руки и ноги, и они падают с физикой. */
export async function fallApart(G: any, actor: any, extra: THREE.Object3D[] = []) {
  const sheet = charSheet(actor.charId); const cx = sheet.getContext('2d')!; const img = cx.getImageData(0, 0, FW, FH).data;
  let t = FH, b = 0, l = FW, r = 0; for (let y = 0; y < FH; y++) for (let x = 0; x < FW; x++) if (img[(y * FW + x) * 4 + 3] > 40) { t = Math.min(t, y); b = Math.max(b, y); l = Math.min(l, x); r = Math.max(r, x); }
  const H = b - t + 1, W = r - l + 1; const cut = (px: number, py: number, pw: number, ph: number) => { const cv = document.createElement('canvas'); cv.width = Math.max(1, pw); cv.height = Math.max(1, ph); cv.getContext('2d')!.drawImage(sheet, px, py, pw, ph, 0, 0, pw, ph); const tx = new THREE.CanvasTexture(cv); tx.magFilter = THREE.NearestFilter; tx.colorSpace = THREE.SRGBColorSpace; return tx; };
  const parts = [
    { n: 'hat', x: l, y: t, w: W, h: Math.round(H * 0.16), vx: 0.6, vy: 4.2, sp: 5 },
    { n: 'head', x: l + Math.round(W * 0.2), y: t + Math.round(H * 0.14), w: Math.round(W * 0.6), h: Math.round(H * 0.2), vx: -1.2, vy: 2.0, sp: -3 },
    { n: 'torso', x: l + Math.round(W * 0.22), y: t + Math.round(H * 0.34), w: Math.round(W * 0.56), h: Math.round(H * 0.32), vx: 0.2, vy: 0.4, sp: 1.4 },
    { n: 'armL', x: l, y: t + Math.round(H * 0.34), w: Math.round(W * 0.22), h: Math.round(H * 0.34), vx: -2.2, vy: 1.4, sp: -4 },
    { n: 'armR', x: l + Math.round(W * 0.78), y: t + Math.round(H * 0.34), w: W - Math.round(W * 0.78), h: Math.round(H * 0.34), vx: 2.2, vy: 1.6, sp: 4 },
    { n: 'legL', x: l + Math.round(W * 0.2), y: t + Math.round(H * 0.66), w: Math.round(W * 0.3), h: H - Math.round(H * 0.66), vx: -0.8, vy: 0.2, sp: -2 },
    { n: 'legR', x: l + Math.round(W * 0.5), y: t + Math.round(H * 0.66), w: Math.round(W * 0.3), h: H - Math.round(H * 0.66), vx: 0.9, vy: 0.2, sp: 2.2 },
  ];
  const meshes = parts.map((p, i) => { const pw = p.w / PPU / SS, ph = p.h / PPU / SS; const m = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), new THREE.MeshLambertMaterial({ map: cut(p.x, p.y, p.w, p.h), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
    m.position.set(actor.x + (p.x + p.w / 2 - FW / 2) / PPU / SS, (FH - (p.y + p.h / 2)) / PPU / SS, actor.z + 0.02 * i); G.room.group.add(m); return { m, vx: p.vx * (0.7 + Math.random() * 0.6), vy: p.vy, vz: (Math.random() - 0.3) * 1.2, sp: p.sp, half: Math.min(pw, ph) / 2, rest: false }; });
  for (const e of extra) { const wp = new THREE.Vector3(); e.getWorldPosition(wp); e.parent?.remove(e); e.position.copy(wp); G.room.group.add(e); meshes.push({ m: e as any, vx: 1.6, vy: 1, vz: 0.4, sp: 6, half: 0.2, rest: false }); }
  actor.hidden = true; G.sfx('crash'); G.shake(0.4);
  await new Promise<void>((res) => { let t2 = 0; const u = (dt: number) => { t2 += dt; for (const p of meshes) { if (p.rest) continue; p.vy -= 12 * dt; p.m.position.x += p.vx * dt; p.m.position.y += p.vy * dt; p.m.position.z += p.vz * dt; p.m.rotation.z += p.sp * dt; if (p.m.position.y < p.half) { p.m.position.y = p.half; p.vy *= -0.32; p.vx *= 0.55; p.vz *= 0.55; p.sp *= 0.5; if (Math.abs(p.vy) < 0.6) { p.rest = true; p.m.rotation.x = -Math.PI / 2 + 0.2; p.m.position.y = 0.06; G.sfx('clunk'); } } } if (t2 > 2.8) { const i = G.room.updaters.indexOf(u); if (i >= 0) G.room.updaters.splice(i, 1); res(); } }; G.room.updaters.push(u); });
}
async function polinaFree(G: any) {
  G.sfx('gear'); await G.wait(0.4); G.setPlayerChar('varya'); G.set('pol_dark', 0);
  await G.goto('pol_basement', 'start', { fade: 'fade', silent: true });
  const B = new (await import('../world/room')).Builder(G.room, G); const pol = B.actor('polina_coat', -3.6, 3.6, { id: 'polina', dir: 'b' }); G.player.place(-1, 0.6, 'f'); G.camSnap();
  await pol.walkTo(-2, 1.2, 3); pol.face(G.player.x, G.player.z); G.player.face(pol.x, pol.z); G.audio.music('school_soft');
  await G.run(P.free); G.sfx('applause', { dur: 4 });
  await finishChapter(G, 'polina', [['THE HOUSE THAT LAUGHS', 'act'], 'Полина заметила то, чего не заметил никто.', ['Смелость, это идти, когда страшно.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { pol_road: road, pol_porch: porch, pol_hall: hall, pol_living: living, pol_library: library, pol_basement: basement, pol_gallery: gallery, pol_kitchen: kitchen };
