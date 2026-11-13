// Глава Полины, THE HOUSE THAT LAUGHS. Хоррор / слэшер / немного комедии.
// Ночная лесная дорога, машина глохнет; особняк запирается за спиной. План дома: прихожая с лестницей,
// гостиная, библиотека с портретами, подвал; Полина одна: галерея с обоями и кухня со щитком.
// Маска Комедии превращает дом в розовое аниме, а Хозяина в котика.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, PPU, tex } from '../gfx/tex';
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
  return canvasTex(52, 64, (c) => {
    c.save(); c.scale(2, 2); c.fillStyle = '#5a4010'; c.fillRect(0, 0, 26, 32); c.fillStyle = '#86641c'; c.fillRect(1, 1, 24, 30); c.fillStyle = '#2a2a2e'; c.fillRect(3, 3, 20, 22);
    const sk = '#c8b8a0';
    if (i === 0) { c.fillStyle = '#2a4a6a'; c.fillRect(3, 3, 20, 10); c.fillStyle = '#1c2a44'; c.fillRect(7, 14, 12, 11); c.fillStyle = sk; c.fillRect(9, 7, 8, 8); c.fillStyle = '#fff'; c.fillRect(8, 5, 10, 3); c.fillStyle = '#5a4029'; c.fillRect(16, 12, 4, 2); }
    if (i === 1) { c.fillStyle = '#6a3a5a'; c.fillRect(6, 14, 10, 11); c.fillStyle = sk; c.fillRect(8, 7, 7, 8); c.fillStyle = '#2a1a14'; c.fillRect(7, 5, 9, 4); c.fillStyle = '#9fb4c8'; c.fillRect(17, 5, 5, 12); c.fillStyle = liar ? '#2a1a14' : sk; c.fillRect(18, 7, 3, 3); c.fillStyle = '#6a3a5a'; c.fillRect(18, 10, 3, 6); c.fillStyle = '#c8a0c0'; c.fillRect(12, 16, 5, 4); }
    if (i === 2) { c.fillStyle = '#2a4a2a'; c.fillRect(3, 3, 20, 22); c.fillStyle = '#5a4029'; c.fillRect(5, 4, 1, 14); c.fillRect(20, 4, 1, 14); c.fillRect(5, 4, 16, 1); c.fillRect(7, 18, 12, 1); if (!liar) { c.fillStyle = '#d8d0c0'; c.fillRect(8, 12, 3, 6); c.fillRect(14, 12, 3, 6); c.fillStyle = sk; c.fillRect(8, 9, 3, 3); c.fillRect(14, 9, 3, 3); } c.fillStyle = '#111'; c.fillRect(7, 22, 4, 2); c.fillRect(14, 22, 4, 2); }
    if (i === 3) { c.fillStyle = '#111'; c.fillRect(7, 13, 12, 12); c.fillStyle = liar ? '#f4f0e8' : sk; c.fillRect(9, 6, 8, 8); if (liar) { c.fillStyle = '#111'; c.fillRect(10, 8, 2, 2); c.fillRect(14, 8, 2, 2); c.fillRect(11, 11, 4, 1); } c.fillStyle = '#111'; c.fillRect(6, 4, 14, 3); c.fillRect(9, 1, 8, 4); c.fillStyle = '#e8e0c8'; c.fillRect(18, 5, 4, 4); c.fillStyle = '#111'; c.fillRect(20, 6, 1, 2); if (liar) c.fillRect(19, 6, 1, 1); else c.fillRect(20, 7, 2, 1); }
    if (i === 4) { c.fillStyle = '#5a2a1a'; c.fillRect(3, 14, 20, 11); c.fillStyle = '#ff8a30'; c.fillRect(4, 18, 4, 6); c.fillStyle = '#c86a2a'; c.fillRect(8, 18, 12, 5); c.fillRect(17, 15, 5, 5); c.fillStyle = '#e8e0c8'; c.fillRect(18, 22, 2, 2); }
    c.restore(); px(c, 2, 2, 48, 1, '#b08a2c'); px(c, 2, 2, 1, 60, '#b08a2c'); px(c, 9, 50, 34, 13, '#3a2a10'); px(c, 10, 51, 32, 11, '#f0e2b4'); px(c, 10, 51, 32, 1, '#fff6d8'); px(c, 10, 61, 32, 1, '#a08850');
    ptext(c, PORTRAITS[i].year, 26, 52, { size: 9, col: '#1e1408', align: 'center' });
  }, 'portraitB' + i + (liar ? 'L' : ''));
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
// ---------------- пиксельные помощники (локальные): расписанные вручную коробки, полы, стены, задники ----------------
type DC = CanvasRenderingContext2D;
const px = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const hsh = (x: number, y: number, s = 0) => { const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return v - Math.floor(v); };
/** Филёнка со скосом: светлый верх/лево, тёмный низ/право. */
function bev(c: DC, x: number, y: number, w: number, h: number, base: string, lt: string, dk: string, inset = false) { px(c, x, y, w, h, base); px(c, x, y, w, 1, inset ? dk : lt); px(c, x, y, 1, h, inset ? dk : lt); px(c, x, y + h - 1, w, 1, inset ? lt : dk); px(c, x + w - 1, y, 1, h, inset ? lt : dk); }
function grime(c: DC, w: number, h: number, col: string, k = 0.08, s = 1) { for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (hsh(x, y, s) < k) px(c, x, y, 1, 1, col); }
/** Копия текстуры с повтором (у каждой поверхности свой масштаб). */
function rep(t: THREE.Texture, rx: number, ry: number) { const c = t.clone(); c.wrapS = c.wrapT = THREE.RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; }
const lamb = (map: THREE.Texture, o: THREE.MeshLambertMaterialParameters = {}) => new THREE.MeshLambertMaterial({ map, ...o });
/** Коробка с нарисованным фасадом: front на +Z, side на бока, top сверху. */
function pbox(R: Builder, x: number, z: number, w: number, d: number, h: number, m: { front: THREE.Texture; side?: THREE.Texture; top?: THREE.Texture; emissive?: number }, o: { y?: number; ry?: number; solid?: boolean; cast?: boolean } = {}) {
  const side = lamb(m.side || m.front), top = lamb(m.top || m.side || m.front), fr = lamb(m.front, { emissive: m.emissive || 0, emissiveMap: m.emissive ? m.front : null });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, top, top, fr, side]); mesh.position.set(x, (o.y || 0) + h / 2, z); if (o.ry) mesh.rotation.y = o.ry; mesh.castShadow = o.cast !== false; mesh.receiveShadow = true; R.room.group.add(mesh);
  if (o.solid !== false) { const sw = o.ry && Math.abs(Math.sin(o.ry)) > 0.7 ? d : w, sd = o.ry && Math.abs(Math.sin(o.ry)) > 0.7 ? w : d; R.collider(x - sw / 2, z - sd / 2, x + sw / 2, z + sd / 2); }
  return mesh;
}
/** Пол из своей текстуры (unit = мировых единиц на тайл), с «фартуком» к камере. */
function paintFloor(R: Builder, t: THREE.Texture, unit: number, o: { w?: number; d?: number; x?: number; z?: number; y?: number; apron?: number } = {}) {
  const w = o.w || R.w, d = (o.d || R.d) + (o.apron ?? 7); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lamb(rep(t, w / unit, d / unit))); m.rotation.x = -Math.PI / 2; m.position.set(o.x || 0, o.y ?? 0.004, (o.z || 0) + (o.apron ?? 7) / 2); m.receiveShadow = true; R.room.group.add(m); return m;
}
/** Стены-разрез из своей текстуры. */
function paintWalls(R: Builder, t: THREE.Texture, h: number, unit: number) {
  const th = 0.4, w = R.w, d = R.d; const mk = (ww: number, dd: number, x: number, z: number, along: number) => { const m = new THREE.Mesh(new THREE.BoxGeometry(ww, h, dd), lamb(rep(t, along / unit, h / unit))); m.position.set(x, h / 2, z); m.receiveShadow = true; R.room.group.add(m); };
  mk(w + th * 2, th, 0, -d / 2 - th / 2, w); mk(th, d, -w / 2 - th / 2, 0, d); mk(th, d, w / 2 + th / 2, 0, d);
}
/** Расписанный задник, наклонённый к камере (как театральный задник в HD-2D): небо, луна, силуэты. */
function backdrop(R: Builder, t: THREE.Texture, o: { z: number; w: number; h: number; y?: number; x?: number; tilt?: number }) {
  const g = new THREE.PlaneGeometry(o.w, o.h); g.translate(0, o.h / 2, 0); const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: t, fog: false })); m.position.set(o.x || 0, o.y ?? -0.5, o.z); m.rotation.x = -(o.tilt ?? 0.5); R.room.group.add(m); return m;
}
/** Полосы тумана между рядами деревьев (пиксельный дизеринг альфы). */
function mistBand(R: Builder, z: number, o: { w?: number; h?: number; y?: number; col?: string; op?: number; x?: number } = {}) {
  const t = canvasTex(64, 16, (c) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 64; x++) { const k = Math.sin((y / 15) * Math.PI) * (0.55 + 0.45 * Math.sin(x * 0.21 + y * 0.3)); if (hsh(x, y, 7) < k * 0.8) px(c, x, y, 1, 1, o.col || '#5a6a8a'); } }, 'mist' + (o.col || ''));
  const m = new THREE.Mesh(new THREE.PlaneGeometry(o.w || 120, o.h || 2.4), new THREE.MeshBasicMaterial({ map: rep(t, (o.w || 120) / 16, 1), transparent: true, opacity: o.op ?? 0.35, depthWrite: false, fog: false })); m.position.set(o.x || 0, o.y ?? 1, z); m.rotation.x = -0.25; R.room.group.add(m); return m;
}
/** Ели: контур, ярусы с провисшими лапами, рваный нижний край, редкий лунный блик справа. */
function pineTex(v: number) {
  return canvasTex(64, 128, (c) => {
    const O = '#070b10', D = '#16281f', M = '#21382b', L = '#30503a', H = '#5a8496';
    px(c, 29, 98, 7, 30, O); px(c, 30, 98, 5, 30, '#2e2016'); px(c, 33, 100, 1, 26, '#4a3826'); px(c, 25, 124, 15, 4, O); px(c, 27, 122, 3, 3, '#17100c'); px(c, 36, 122, 3, 3, '#17100c');
    const tiers = 6 + (v % 2), slim = v === 2 ? 0.72 : v === 3 ? 1.12 : 1;
    for (let t = 0; t < tiers; t++) { const top = 2 + t * (96 / tiers), hh = 96 / tiers + 9, base = (4 + t * 3.7) * slim;
      for (let y = 0; y < hh; y++) { const yy = Math.round(top + y); if (yy > 108) continue; const hw = Math.round(1 + Math.pow(y / hh, 0.85) * base); const saw = y > hh - 5;
        for (let x = -hw - 1; x <= hw + 1; x++) { if (saw && ((x + t * 3 + 40) % 6) > 3 - (hh - y) * 0.6) continue; const edge = Math.abs(x) >= hw; if (edge && hsh(x, yy, v + t) < 0.3) continue;
          const lit = x > hw * 0.3 && y < hh - 3 && hsh(x, yy, v + 5) < 0.55; px(c, 32 + x, yy, 1, 1, edge ? O : y > hh - 6 ? D : lit ? (x > hw * 0.7 && hsh(x, yy, 9) < 0.4 ? H : L) : hsh(x, yy, v) < 0.35 ? D : M); } } }
  }, 'ppine2_' + v);
}
/** Дуб: кроны-клубы с затенением, корявый ствол с корнями. */
function oakTex(v: number) {
  return canvasTex(96, 120, (c) => {
    const O = '#04070a'; px(c, 42, 54, 12, 66, O); px(c, 43, 54, 10, 64, '#33241a'); px(c, 49, 58, 2, 56, '#4e3a28'); for (let i = 0; i < 8; i++) { px(c, 36 - i * 2, 112 + Math.floor(i / 3), 4, 3, '#1a120c'); px(c, 54 + i * 2, 112 + Math.floor(i / 3), 4, 3, '#1a120c'); }
    px(c, 30, 60, 14, 4, '#1a120c'); px(c, 52, 66, 16, 4, '#1a120c');
    const cl = [[48, 30, 24], [28, 44, 18], [68, 44, 19], [40, 56, 15], [60, 58, 14], [48, 16, 16], [20, 30, 12], [76, 28, 12]];
    const circ = (x: number, y: number, r: number, col: string) => { c.fillStyle = col; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); };
    for (const [x, y, r] of cl) circ(x, y + v, r + 2, O);
    for (const [x, y, r] of cl) circ(x, y + v, r, '#1a2c20');
    for (const [x, y, r] of cl) circ(x + r * 0.25, y + v - r * 0.2, r * 0.7, '#25402c');
    for (const [x, y, r] of cl) circ(x + r * 0.4, y + v - r * 0.4, r * 0.35, '#36583c');
    for (let i = 0; i < 260; i++) { const x = Math.floor(hsh(i, 1, v) * 96), y = Math.floor(hsh(i, 2, v) * 80); const d = c.getImageData(x, y, 1, 1).data; if (d[3] > 0 && d[1] > 20) px(c, x, y, 1, 1, hsh(i, 3) < 0.3 ? '#4a7480' : '#122018'); }
  }, 'poak' + v);
}
/** Ствол на переднем плане: только низ, без кроны (крона за кадром). */
function trunkTex(v: number) {
  return canvasTex(40, 160, (c) => { const O = '#030405'; px(c, 12, 0, 16, 160, O); px(c, 14, 0, 12, 156, '#0e1014'); for (let y = 0; y < 156; y += 7) px(c, 16 + (y % 3) * 2, y, 1, 5, '#262c34'); px(c, 24, 0, 1, 150, '#3a4656');
    for (let i = 0; i < 10; i++) { px(c, 10 - i, 150 + Math.floor(i / 2), 3, 3, O); px(c, 27 + i, 150 + Math.floor(i / 2), 3, 3, O); } if (v) { for (let i = 0; i < 12; i++) px(c, 26 + i, 40 - i, 3, 2, O); for (let i = 0; i < 9; i++) px(c, 12 - i, 70 - i, 3, 2, O); } }, 'ptrunk' + v);
}
function bushTex(v: number) {
  return canvasTex(48, 24, (c) => { const circ = (x: number, y: number, r: number, col: string) => { c.fillStyle = col; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); };
    const cl = [[10, 16, 8], [22, 12, 10], [34, 15, 9], [42, 18, 6], [16, 19, 6]]; for (const [x, y, r] of cl) circ(x, y + 1, r + 1, '#04070a'); for (const [x, y, r] of cl) circ(x, y + 1, r, '#1a2c20'); for (const [x, y, r] of cl) circ(x + 2, y - 1, r * 0.6, v ? '#2a4430' : '#2e4a34'); for (const [x, y, r] of cl) px(c, x + 2, y - r * 0.6, 2, 1, '#5a8496'); px(c, 0, 23, 48, 1, '#04070a'); }, 'pbush' + v);
}
function fernTex() { return bushTex(0); }
function deadTreeTex() {
  return canvasTex(48, 96, (c) => {
    const col = '#06070a', hi = '#2a3646'; px(c, 21, 30, 6, 66, col); px(c, 25, 34, 1, 60, hi);
    const br = (x: number, y: number, dx: number, n: number) => { for (let i = 0; i < n; i++) { px(c, x + dx * i, y - Math.floor(i * 0.7), 2, 2, col); if (i % 3 === 0) px(c, x + dx * i, y - Math.floor(i * 0.7) - 1, 1, 1, hi); } };
    br(21, 40, -1, 14); br(26, 34, 1, 16); br(22, 56, -1, 10); br(26, 50, 1, 12); br(23, 30, -1, 9); br(25, 26, 1, 8); br(9, 31, -1, 5); br(40, 23, 1, 4); px(c, 15, 92, 18, 4, '#0a0a0c');
  }, 'pdead');
}
/** Ночной лес: трёхслойный силуэт под луной, внизу цвет тумана, чтобы пол растворялся. */
function forestSkyTex(fogCol: string, key: string, house = 0) {
  return canvasTex(320, 120, (c) => {
    const g = c.createLinearGradient(0, 0, 0, 120); g.addColorStop(0, '#03060f'); g.addColorStop(0.45, '#14203c'); g.addColorStop(0.75, '#2c3c62'); g.addColorStop(1, fogCol); c.fillStyle = g; c.fillRect(0, 0, 320, 120);
    for (let y = 0; y < 120; y += 2) for (let x = (y / 2) % 2; x < 320; x += 2) if (hsh(x, y, 2) < 0.18) px(c, x, y, 1, 1, 'rgba(0,0,0,0.18)');
    px(c, 0, 0, 0, 0, '#000'); for (let i = 0; i < 90; i++) px(c, Math.floor(hsh(i, 1) * 320), Math.floor(hsh(i, 2) * 52), 1, 1, i % 7 ? '#8a9ac8' : '#ffffff');
    // луна с гало
    const mx = 232, my = 26; for (let r = 22; r > 9; r -= 3) { c.fillStyle = `rgba(160,180,230,${0.05 + (22 - r) * 0.008})`; c.beginPath(); c.arc(mx, my, r, 0, 7); c.fill(); }
    c.fillStyle = '#e8ecf6'; c.beginPath(); c.arc(mx, my, 9, 0, 7); c.fill(); px(c, mx - 4, my - 3, 3, 2, '#c4cadc'); px(c, mx + 2, my + 2, 3, 3, '#c4cadc'); px(c, mx - 1, my + 5, 2, 1, '#c4cadc');
    // рваные облака
    for (let k = 0; k < 6; k++) { const cx = Math.floor(hsh(k, 9) * 300), cy = 14 + Math.floor(hsh(k, 8) * 30), cw = 30 + Math.floor(hsh(k, 7) * 40); px(c, cx, cy, cw, 2, 'rgba(70,84,120,0.55)'); px(c, cx + 6, cy - 2, cw - 14, 2, 'rgba(90,104,140,0.45)'); px(c, cx + 4, cy + 2, cw - 6, 1, 'rgba(30,40,70,0.5)'); }
    const ridge = (base: number, amp: number, col: string, hi: string, seed: number, step: number) => { for (let x = 0; x < 320; x++) { const k = x % step, tw = step / 2 - Math.abs(k - step / 2); const h = base - tw * (amp / step) * 2 - hsh(Math.floor(x / step), seed) * amp; px(c, x, Math.floor(h), 1, 120, col); if (k > step / 2 && hsh(x, seed) < 0.5) px(c, x, Math.floor(h), 1, 2, hi); } };
    ridge(78, 22, '#26365a', '#3c5080', 1, 9); if (house) { const hx = house - 23; px(c, hx + 4, 56, 38, 26, '#1a2440'); c.fillStyle = '#1a2440'; c.beginPath(); c.moveTo(hx, 58); c.lineTo(hx + 18, 42); c.lineTo(hx + 36, 58); c.fill(); c.beginPath(); c.moveTo(hx + 24, 58); c.lineTo(hx + 36, 48); c.lineTo(hx + 46, 58); c.fill(); px(c, hx + 30, 44, 3, 8, '#1a2440'); px(c, hx + 12, 62, 2, 3, '#e8b860'); px(c, hx + 30, 66, 2, 3, '#e8b860'); px(c, hx + 20, 60, 2, 2, '#c89040'); }
    ridge(92, 26, '#18243e', '#2c3c60', 2, 11); ridge(106, 20, '#0f1830', '#1e2c48', 3, 13);
    const fg = c.createLinearGradient(0, 96, 0, 120); fg.addColorStop(0, 'rgba(0,0,0,0)'); fg.addColorStop(1, fogCol); c.fillStyle = fg; c.fillRect(0, 96, 320, 24);
  }, key);
}
/** Шкаф с нарисованным фасадом: 0 филёнки, 1 зеркальная створка, 2 резные ромбы, 3 жалюзи. */
function wardTex(v: number, base: string, lt: string, dk: string) {
  return canvasTex(30, 52, (c) => {
    px(c, 0, 0, 30, 52, '#140c08'); px(c, 1, 1, 28, 50, base); px(c, 1, 1, 28, 4, lt); px(c, 1, 5, 28, 1, dk); px(c, 1, 46, 28, 5, dk); px(c, 1, 46, 28, 1, lt);
    for (const dx of [3, 16]) { bev(c, dx, 8, 11, 37, base, lt, dk);
      if (v === 0) { bev(c, dx + 2, 10, 7, 15, base, lt, dk, true); bev(c, dx + 2, 28, 7, 15, base, lt, dk, true); }
      if (v === 1) { if (dx === 3) { px(c, dx + 2, 10, 7, 33, '#6a7890'); for (let i = 0; i < 7; i++) px(c, dx + 2 + i, 12 + i * 2, 1, 4, '#c8d4e4'); px(c, dx + 2, 10, 7, 1, '#2a3040'); } else { bev(c, dx + 2, 10, 7, 33, base, lt, dk, true); } }
      if (v === 2) { for (let i = 0; i < 6; i++) { px(c, dx + 5 - i, 14 + i, 1, 1, lt); px(c, dx + 5 + i, 14 + i, 1, 1, dk); px(c, dx + 5 - i, 26 - i, 1, 1, lt); px(c, dx + 5 + i, 26 - i, 1, 1, dk); } bev(c, dx + 2, 30, 7, 12, base, lt, dk, true); }
      if (v === 3) for (let y = 11; y < 42; y += 3) { px(c, dx + 2, y, 7, 1, dk); px(c, dx + 2, y + 1, 7, 1, lt); } }
    px(c, 13, 25, 2, 3, '#d4ae48'); px(c, 15, 25, 2, 3, '#d4ae48'); px(c, 13, 25, 1, 1, '#fff0a0');
    grime(c, 30, 52, 'rgba(10,6,4,0.35)', 0.06, v + 11);
  }, 'ward' + v + base);
}
function wardrobeP(R: Builder, x: number, z: number, o: { v?: number; w?: number; h?: number; base?: string; lt?: string; dk?: string; ry?: number } = {}) {
  const base = o.base || '#6a4228', lt = o.lt || '#9a6a42', dk = o.dk || '#3a2216'; const w = o.w || 1.8, h = o.h || 3.1;
  const m = pbox(R, x, z, w, 0.9, h, { front: wardTex(o.v || 0, base, lt, dk), side: rep(tex('wood', lt), 1, 2) }, { ry: o.ry });
  const crown = pbox(R, x, z, w + 0.24, 1.05, 0.22, { front: tex('wood', lt) }, { y: h, ry: o.ry, solid: false }); void crown; return m;
}
/** Старый дом: деревянные панели снизу стен, карниз под потолком, гроза за окнами (вспышки + гром). */
function oldHouse(R: Builder, G: any, o: { h: number; base?: string; storm?: boolean; sides?: boolean }) {
  const b = o.base || '#5a3a24';
  const dado = canvasTex(32, 24, (c) => { px(c, 0, 0, 32, 24, '#1a100a'); px(c, 0, 0, 32, 3, '#8a6a48'); px(c, 0, 3, 32, 1, '#2a1a10'); bev(c, 2, 6, 12, 15, b, '#8a6040', '#24160c'); bev(c, 18, 6, 12, 15, b, '#8a6040', '#24160c'); bev(c, 4, 8, 8, 11, b, '#7a5436', '#2a1a10', true); bev(c, 20, 8, 8, 11, b, '#7a5436', '#2a1a10', true); px(c, 0, 22, 32, 2, '#120a06'); grime(c, 32, 24, 'rgba(0,0,0,0.25)', 0.05, 71); }, 'dado' + b);
  R.decal(rep(dado, R.w / 2, 1), { x: 0, y: 0.78, z: -R.d / 2 + 0.035, w: R.w, h: 1.5, noSlot: true });
  if (o.sides !== false) for (const s of [-1, 1]) { const m = R.decal(rep(dado, R.d / 2, 1), { x: s * (R.w / 2 - 0.035), y: 0.78, z: 0, w: R.d, h: 1.5, noSlot: true }); m.position.x = s * (R.w / 2 - 0.035); m.rotation.y = -s * Math.PI / 2; }
  const crown = canvasTex(16, 8, (c) => { px(c, 0, 0, 16, 8, '#3a2618'); px(c, 0, 1, 16, 1, '#b08a5a'); px(c, 0, 3, 16, 2, '#6a4a30'); for (let x = 0; x < 16; x += 4) px(c, x, 5, 2, 2, '#9a7448'); px(c, 0, 7, 16, 1, '#1a100a'); }, 'crown');
  R.decal(rep(crown, R.w / 1.5, 1), { x: 0, y: o.h - 0.3, z: -R.d / 2 + 0.04, w: R.w, h: 0.55, noSlot: true });
  if (o.storm !== false) { const bolt = R.ambient(0xc8d4ff, 0, 0xffffff); let next = 4 + Math.random() * 6, fl = 0; R.onUpdate((dt) => { next -= dt; if (next < 0) { next = 10 + Math.random() * 10; fl = 0.5; setTimeout(() => G.sfx('thunder'), 700 + Math.random() * 900); } if (fl > 0) { fl -= dt; bolt.intensity = (fl > 0.38 ? 1 : fl > 0.3 ? 0.1 : fl > 0.2 ? 0.7 : fl / 0.2 * 0.3) * 4; } else bolt.intensity = 0; }); }
}
/** Картина в раме (пейзаж/натюрморт), на север или боковую стену. */
function paintingTex(i: number) {
  return canvasTex(28, 22, (c) => { px(c, 0, 0, 28, 22, '#3a2a10'); px(c, 1, 1, 26, 20, '#b08a2c'); px(c, 1, 1, 26, 1, '#f0d478'); px(c, 3, 3, 22, 16, '#1a1a20');
    if (i === 0) { px(c, 3, 3, 22, 9, '#3a4a6a'); px(c, 3, 12, 22, 7, '#2a3a2a'); px(c, 8, 7, 6, 5, '#5a5a6a'); px(c, 10, 5, 2, 2, '#e8e0c8'); for (let x = 3; x < 25; x += 3) px(c, x, 11 - (x % 2), 2, 2, '#1a2a1a'); }
    if (i === 1) { px(c, 3, 3, 22, 16, '#2a1a14'); px(c, 9, 10, 10, 7, '#6a4a2a'); px(c, 10, 6, 3, 5, '#c84a3a'); px(c, 14, 7, 3, 4, '#d8a040'); px(c, 12, 5, 2, 2, '#8a2a4a'); px(c, 5, 15, 18, 2, '#4a3020'); }
    if (i === 2) { px(c, 3, 3, 22, 16, '#5a6a7a'); px(c, 3, 13, 22, 6, '#2a3a5a'); px(c, 12, 6, 2, 8, '#2a2018'); px(c, 9, 7, 8, 1, '#e8e0d0'); px(c, 10, 8, 6, 4, '#e8e0d0'); for (let x = 4; x < 24; x += 4) px(c, x, 15, 2, 1, '#8a9ab0'); }
    grime(c, 28, 22, 'rgba(0,0,0,0.25)', 0.06, 80 + i); }, 'painting' + i);
}
const starTex = () => canvasTex(7, 7, (c) => { c.fillStyle = '#fff6a0'; c.fillRect(3, 0, 1, 7); c.fillRect(0, 3, 7, 1); c.fillRect(2, 2, 3, 3); }, 'kstar');

/** Маска Комедии: сердечки, звёздочки, розовый пол, блёстки. Всё видно только в Комедии. */
function kawaii(R: Builder, G: any, o: { w: number; d: number } ) {
  const hw = o.w / 2 - 1, cols = ['#ff9ac8', '#ffc0e0', '#c8a0ff', '#a0e0ff'];
  for (let i = 0; i < 9; i++) R.decal(i % 3 === 2 ? starTex() : heartTex(cols[i % 4]), { x: -hw + (i / 8) * hw * 2, y: 3.6 + Math.sin(i * 1.7) * 1.2, w: 0.8, h: 0.75, mask: 'comedy', glow: true, noSlot: true });
  R.decal(canvasTex(4, 4, (c) => { c.fillStyle = '#ffb4d8'; c.fillRect(0, 0, 4, 4); }, 'kfloor2'), { flat: true, x: 0, z: 7, y: 0.03, w: o.w + 40, h: o.d + 14, mask: 'comedy', opacity: 0.2, glow: true }); R.light(0, 5, 1, 0xffc0e0, 0, 30, { name: 'kawaiiL' }); R.onUpdate(() => { const l = R.room.named.kawaiiL as THREE.PointLight; l.intensity = G.state.mask === 'comedy' ? 26 : 0; });
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
/** Пиксельная машинка: профиль с покатым стеклом и арками колёс (Extrude), бок расписан вручную. */
function carSideTex(body: string, lt: string, dk: string, key: string) {
  // 92×30 px на 4.6×1.5 ед.: x = (u - 2.3), y = 0.3 + (30 - v)/20
  return canvasTex(92, 30, (c) => {
    px(c, 0, 0, 92, 30, body); px(c, 0, 0, 92, 9, dk); // крыша/стёкла сверху (под профилем всё равно обрезано)
    px(c, 0, 13, 92, 1, lt); px(c, 0, 14, 92, 1, '#e8e8f0'); px(c, 0, 15, 92, 1, dk); px(c, 0, 24, 92, 6, dk); px(c, 0, 23, 92, 1, '#0a0a0e');
    // окна: от стойки до стойки
    const win = (x0: number, x1: number, slopeL: number, slopeR: number) => { for (let y = 3; y < 13; y++) { const a = Math.round(x0 + (13 - y) * slopeL), b = Math.round(x1 - (13 - y) * slopeR); px(c, a, y, b - a, 1, y < 5 ? '#2a3c5c' : '#1a2440'); } for (let i = 0; i < 6; i++) px(c, x0 + 6 + i, 11 - i, 2, 1, '#6a8ab8'); };
    win(12, 40, 0.6, 0); win(43, 62, 0, 1.1); px(c, 40, 3, 3, 10, body); px(c, 40, 3, 1, 10, lt);
    px(c, 41, 15, 1, 9, '#0a0a0e'); px(c, 63, 15, 1, 9, '#0a0a0e'); px(c, 34, 17, 4, 1, '#d8d8e0'); px(c, 56, 17, 4, 1, '#d8d8e0');
    px(c, 88, 15, 4, 3, '#fff4c0'); px(c, 87, 18, 5, 2, '#d8d8e0'); px(c, 0, 15, 3, 3, '#c01818'); px(c, 0, 18, 4, 2, '#d8d8e0');
    for (const cx of [18, 74]) for (let y = 14; y < 30; y++) { const hw = Math.round(Math.sqrt(Math.max(0, 121 - (30 - y) * (30 - y))) + 1); px(c, cx - hw, y, 1, 1, '#0a0a0e'); px(c, cx + hw, y, 1, 1, '#0a0a0e'); }
    grime(c, 92, 30, 'rgba(0,0,0,0.25)', 0.05, 4);
  }, key);
}
function wheelTex() { return canvasTex(16, 16, (c) => { c.fillStyle = '#0c0c0e'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#2a2a30'; c.beginPath(); c.arc(8, 8, 6, 0, 7); c.fill(); c.fillStyle = '#a8acb8'; c.beginPath(); c.arc(8, 8, 4, 0, 7); c.fill(); px(c, 7, 4, 2, 8, '#5a5e6a'); px(c, 4, 7, 8, 2, '#5a5e6a'); px(c, 7, 7, 2, 2, '#e8e8f0'); px(c, 5, 5, 1, 1, '#ffffff'); }, 'pwheel'); }
function pixelCar(o: { body: string; lt: string; dk: string; key: string }) {
  const g = new THREE.Group(); const sh = new THREE.Shape(); const B = 0.35;
  sh.moveTo(-2.28, B); for (const cx of [-1.4, 1.4]) { sh.lineTo(cx - 0.5, B); sh.absarc(cx, B, 0.5, Math.PI, 0, true); } sh.lineTo(2.28, B); sh.lineTo(2.32, 0.62); sh.lineTo(2.22, 0.98); sh.lineTo(0.75, 1.08); sh.lineTo(0.05, 1.68); sh.lineTo(-1.15, 1.72); sh.lineTo(-1.9, 1.12); sh.lineTo(-2.26, 1.02); sh.lineTo(-2.32, 0.6); sh.lineTo(-2.28, B);
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.8, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 1, curveSegments: 6 }); geo.translate(0, 0, -0.9);
  const side = carSideTex(o.body, o.lt, o.dk, 'carside' + o.key); side.repeat.set(1 / 4.6, 1 / 1.5); side.offset.set(0.5, -0.3 / 1.5);
  const paint = canvasTex(16, 16, (c) => { px(c, 0, 0, 16, 16, o.body); for (let i = 0; i < 16; i++) px(c, i, (i * 7) % 16, 1, 1, o.lt); px(c, 0, 0, 16, 1, o.dk); }, 'carpaint' + o.key); const pt = rep(paint, 3, 3);
  const body = new THREE.Mesh(geo, [lamb(side), lamb(pt)]); body.castShadow = true; g.add(body);
  // лобовое и заднее стекло: тёмные пластины поверх скатов
  const glass = new THREE.MeshLambertMaterial({ map: canvasTex(8, 16, (c) => { px(c, 0, 0, 8, 16, '#16203a'); for (let i = 0; i < 6; i++) px(c, 1 + (i % 3), 2 + i * 2, 3, 1, '#5a7aa8'); px(c, 0, 0, 8, 1, '#0a0a10'); }, 'pglass'), emissive: 0x0a1020, side: THREE.DoubleSide });
  const quad = (a: number[], b: number[], n: number[]) => { const o = 0.075, A = [a[0] + n[0] * o, a[1] + n[1] * o], Bv = [b[0] + n[0] * o, b[1] + n[1] * o]; const q = new THREE.BufferGeometry(); q.setAttribute('position', new THREE.Float32BufferAttribute([A[0], A[1], -0.84, A[0], A[1], 0.84, Bv[0], Bv[1], 0.84, Bv[0], Bv[1], -0.84], 3)); q.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2)); q.setIndex([0, 1, 2, 0, 2, 3]); q.computeVertexNormals(); g.add(new THREE.Mesh(q, glass)); };
  quad([0.75, 1.08], [0.05, 1.68], [0.65, 0.76]); quad([-1.9, 1.12], [-1.15, 1.72], [-0.62, 0.78]);
  const wheelM = [lamb(canvasTex(8, 8, (c) => { px(c, 0, 0, 8, 8, '#0c0c0e'); for (let i = 0; i < 8; i += 2) px(c, i, 0, 1, 8, '#1e1e24'); }, 'ptread')), lamb(wheelTex()), lamb(wheelTex())];
  for (const sx of [-1.4, 1.4]) for (const sz of [-0.88, 0.88]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 12), wheelM); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.42, sz); w.castShadow = true; g.add(w); }
  const head = new THREE.MeshLambertMaterial({ color: 0xfff4c0, emissive: 0xffe090 }); const tail = new THREE.MeshLambertMaterial({ color: 0x8a1010, emissive: 0x600000 });
  for (const sz of [-0.62, 0.62]) { const h = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.18, 0.34), head); h.position.set(2.3, 0.82, sz); g.add(h); const t = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.3), tail); t.position.set(-2.32, 0.84, sz); g.add(t); }
  const bump = new THREE.Mesh(new THREE.BoxGeometry(4.75, 0.14, 1.95), lamb(tex('metal'))); bump.position.y = 0.5; g.add(bump);
  return { g, head, tail };
}
function car3D() {
  const { g, head } = pixelCar({ body: '#a82434', lt: '#d8465a', dk: '#5a0e18', key: 'pol' });
  const lamps = [0, 1].map((i) => { const l = new THREE.SpotLight(0xfff0c0, 40, 26, 0.38, 0.5, 1.2); l.position.set(2.3, 0.9, i ? 0.6 : -0.6); l.target.position.set(14, 0, i ? 0.6 : -0.6); g.add(l, l.target); return l; });
  const hazard = new THREE.PointLight(0xffa020, 0, 5, 1.6); hazard.position.set(0, 1.4, 0); g.add(hazard);
  return { g, lamps, head, hazard };
}
/** Глаза в темноте: моргают, иногда пропадают. */
const eyesTex = (col: string) => canvasTex(10, 3, (c) => { px(c, 0, 0, 3, 2, col); px(c, 7, 0, 3, 2, col); px(c, 1, 0, 1, 1, '#ffffff'); px(c, 8, 0, 1, 1, '#ffffff'); }, 'eyes' + col);
const lurkerTex = () => canvasTex(16, 40, (c) => { px(c, 3, 0, 10, 4, '#000'); px(c, 1, 4, 14, 2, '#000'); px(c, 5, 6, 6, 7, '#e8e4d8'); px(c, 6, 8, 1, 2, '#000'); px(c, 9, 8, 1, 2, '#000'); px(c, 6, 11, 4, 1, '#000'); px(c, 3, 13, 10, 20, '#000'); px(c, 1, 15, 2, 14, '#000'); px(c, 13, 15, 2, 14, '#000'); px(c, 4, 33, 3, 7, '#000'); px(c, 9, 33, 3, 7, '#000'); }, 'lurker');
/** Поваленное дерево: ствол с корой, торцы с кольцами, обломки веток. */
function logMesh(R: Builder, x: number, z: number, len: number, ry: number, solid = true) {
  const bark = canvasTex(32, 16, (c) => { for (let y = 0; y < 16; y++) for (let xx = 0; xx < 32; xx++) px(c, xx, y, 1, 1, (xx + (y % 4 === 0 ? 3 : 0)) % 7 === 0 ? '#07080a' : hsh(xx, y, 61) < 0.2 ? '#2a3a26' : y % 5 === 0 ? '#1a140e' : '#2a2016'); }, 'bark');
  const end = canvasTex(16, 16, (c) => { px(c, 0, 0, 16, 16, '#000'); c.fillStyle = '#2a2016'; c.beginPath(); c.arc(8, 8, 7, 0, 7); c.fill(); for (const r of [5, 3]) { c.strokeStyle = '#6a5038'; c.beginPath(); c.arc(8, 8, r, 0, 7); c.stroke(); } px(c, 7, 7, 2, 2, '#8a6a48'); }, 'logend');
  const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, len, 10), [lamb(rep(bark, 1, len / 2)), lamb(end), lamb(end)]); m.rotation.z = Math.PI / 2; m.castShadow = true; g.add(m);
  for (let i = 0; i < 3; i++) { const br = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.09, 1.3, 5), lamb(bark)); br.position.set((i - 1) * len * 0.3, 0.6, (i - 1) * 0.2); br.rotation.set(0.5 * (i - 1), 0, 0.6 - i * 0.5); g.add(br); }
  g.position.set(x, 0.42, z); g.rotation.y = ry; R.room.group.add(g);
  if (solid) { const hx = Math.abs(Math.cos(ry)) * len / 2 + 0.4, hz = Math.abs(Math.sin(ry)) * len / 2 + 0.4; R.collider(x - hx, z - hz, x + hx, z + hz); }
}
// Долгая дорога через лес в грозу: машина глохнет на шоссе, дальше пешком по грязной тропе к огоньку особняка.
const CAR_X = -48, PATH_X = 50;
const road: RoomDef = {
  name: 'Лесная дорога. 23:58', chapter: 'Акт II · Полина', w: 112, d: 14, music: 'horror', amb: 'rain', step: 'grass', grade: { ...GRADE, vig: 0.72, bright: 1.05 }, camDist: 21,
  card: (G) => G.f.intro_pol ? null : (G.f.intro_pol = 1, [[actOf(G), 'act'], ['THE HOUSE THAT LAUGHS', 'big'], ['хоррор · слэшер · немного комедии', 'sm']]),
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x1a2438; fog(R, 0x1a2438, 16, 46);
    R.floor('grass', { tint: '#3e5040', w: 240, d: 70, z: -12, y: -0.02 }); const amb = R.ambient(0x3a4868, 3.6, 0x9ab0e0); R.sun(0xa8c0ff, 2.2, 10, 14, 6); carriedLight(R, G, 0xd8e4ff, 16, 10);
    // шоссе только в начале; дальше тропа
    R.floor('asphalt', { x: -86, w: 110, d: 4.4, z: 1.2, y: 0.01 }); for (let x = -140; x <= -33; x += 3.2) R.box(x, 1.2, 1.4, 0.14, 0.02, { color: 0x9a9a8a, y: 0.03, solid: false, cast: false }); for (const z of [-1.05, 3.45]) R.box(-86, z, 110, 0.12, 0.05, { color: 0x4a4a3a, y: 0.02, solid: false, cast: false });
    R.decal(canvasTex(24, 14, (c) => { px(c, 0, 0, 24, 14, '#1a1a1e'); px(c, 1, 1, 22, 12, '#e8d8a0'); px(c, 2, 2, 20, 10, '#1a1a1e'); px(c, 3, 3, 18, 8, '#e8d8a0'); ptext(c, '3 км', 12, 3, { size: 7, col: '#1a1a1e', align: 'center' }); }, 'roadsign'), { x: -40, y: 2.4, z: -1.9, w: 1.4, h: 0.85, noSlot: true }); R.box(-40, -1.95, 0.1, 0.1, 2.4, { tex: 'metal', solid: false });
    // грязная извилистая тропа, лужи, корни поперёк
    const tz = (x: number) => 1.4 + Math.sin(x * 0.11) * 1.1;
    for (let x = -36, i = 0; x <= PATH_X + 2; x += 3, i++) R.floor('dirt', { x, w: 3.6, d: 3 + (i % 3) * 0.4, z: tz(x), y: 0.004 + (i % 2) * 0.004, tint: '#6a5038' });
    const puddle = canvasTex(24, 10, (c) => { c.fillStyle = '#1a2438'; c.beginPath(); c.ellipse(12, 5, 11, 4, 0, 0, 7); c.fill(); px(c, 6, 3, 6, 1, '#5a6a90'); px(c, 14, 6, 4, 1, '#3a4a6a'); }, 'puddle');
    for (let i = 0; i < 12; i++) { const x = -32 + i * 7.3 + hsh(i, 1) * 2; R.decal(puddle, { flat: true, x, z: tz(x) + (hsh(i, 2) - 0.5), y: 0.02, w: 1.6 + hsh(i, 3), h: 0.7, glow: true, opacity: 0.8 }); }
    const roots = canvasTex(32, 12, (c) => { for (let k = 0; k < 4; k++) { let y = 2 + k * 2.5; for (let x = 0; x < 32; x++) { y += (hsh(x, k, 3) - 0.5) * 1.2; px(c, x, Math.round(y), 1, 2, '#120c08'); if (x % 5 === 0) px(c, x, Math.round(y), 1, 1, '#3a2a1c'); } } }, 'roots');
    void roots;
    // ЛЕС: слои. Задние ряды в тумане, средние густые, у тропы кусты и пни, впереди у края кадра тёмные стволы
    const pines = [0, 1, 2, 3].map(pineTex), oaks = [0, 4].map(oakTex), dead = deadTreeTex(), trunks = [0, 1].map(trunkTex), bushes = [0, 1].map(bushTex);
    const X0 = -72, X1 = 74; let n = 0; const tree = (i: number, j: number) => (j > 0.9 ? dead : (i + Math.floor(j * 7)) % 3 === 0 ? oaks[i % 2] : pines[(i + Math.floor(j * 5)) % 4]);
    for (let x = X0; x <= X1; x += 2.2, n++) { const j = hsh(n, 1); if (Math.abs(x - PATH_X) < 2.4) continue; R.sprite(tree(n, j), x + j, -3.2 - j * 1.4, { scale: 0.8 + j * 0.35, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 2.6, i++) { const j = hsh(i, 2); if (Math.abs(x - PATH_X) < 2) continue; R.sprite(tree(i + 1, j), x + j * 1.5, -6.5 - j * 2, { scale: 0.95 + j * 0.4, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 3.1, i++) { const j = hsh(i, 3); R.sprite(tree(i + 2, j), x + j * 2, -10.5 - j * 2.5, { scale: 1.1 + j * 0.4, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 3.8, i++) { const j = hsh(i, 4); R.sprite(pines[i % 4], x + j * 2, -15 - j * 3, { scale: 1.3 + j * 0.4, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 2.9, i++) { const j = hsh(i, 5); R.sprite(bushes[i % 2], x + j, -1.7 - j * 0.5, { scale: 0.9 + j * 0.4, thin: true }); if (j > 0.35) R.sprite(bushes[(i + 1) % 2], x + j * 2, 5.4 + j * 1.2, { scale: 1 + j * 0.5, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 4.1, i++) { const j = hsh(i, 6); R.sprite(j > 0.5 ? pines[i % 4] : dead, x + j * 2, 8.2 + j, { scale: 0.62 + j * 0.15, thin: true }); }
    for (let x = X0, i = 0; x <= X1; x += 5.2, i++) { const j = hsh(i, 7); R.sprite(trunks[i % 2], x + j * 3, 12.5 + j * 2, { scale: 0.85 + j * 0.2, thin: true }); }
    // поваленные деревья и пни
    logMesh(R, -20, -2.2, 5, 0.25); logMesh(R, 6, 5.2, 6, -0.2); logMesh(R, 28, -2.3, 4.5, 0.4); logMesh(R, 41, 5.6, 5, 0.1);
    const stump = canvasTex(16, 14, (c) => { px(c, 2, 4, 12, 10, '#04070a'); px(c, 3, 5, 10, 9, '#2a2016'); px(c, 3, 3, 10, 3, '#5a4630'); px(c, 5, 4, 6, 1, '#7a6040'); px(c, 1, 12, 3, 2, '#2a2016'); px(c, 12, 12, 3, 2, '#2a2016'); px(c, 9, 7, 1, 6, '#14100a'); }, 'stump');
    for (const x of [-30, -9, 15, 34]) R.sprite(stump, x, -1.2, { scale: 1.3 });
    // глаза в темноте между стволами
    const eyes: THREE.Object3D[] = []; for (let i = 0; i < 9; i++) { const e = R.sprite(eyesTex(i % 3 ? '#ffd040' : '#ff4030'), -30 + i * 9.7 + hsh(i, 9) * 3, -5 - hsh(i, 8) * 6, { y: 0.6 + hsh(i, 7) * 1.4, glow: true, scale: 0.9, thin: true }); eyes.push(e); }
    // фигура, которую видно только во вспышке молнии
    const lurk = R.sprite(lurkerTex(), 0, -8, { scale: 1.6, glow: true, thin: true }); lurk.visible = false; (lurk.material as THREE.MeshBasicMaterial).color.set(0x8090b0);
    // гроза: свой цикл, чтобы вспышка подсвечивала лес, а не только экран
    rainy(R, G);
    const bolt = R.ambient(0xd0dcff, 0, 0xffffff); let next = 3, fl = 0, creak = 6;
    R.onUpdate((dt, t) => {
      next -= dt; creak -= dt; if (creak < 0) { creak = 8 + Math.random() * 10; G.sfx('creak'); }
      if (next < 0) { next = 8 + Math.random() * 9; fl = 0.55; G.flash(0.35); setTimeout(() => G.sfx('thunder'), 500 + Math.random() * 900); const p = G.player; if (p) lurk.position.set(p.x + (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 6), 0, -7 - Math.random() * 5); }
      if (fl > 0) { fl -= dt; const k = fl > 0.4 ? 1 : fl > 0.3 ? 0.2 : fl > 0.18 ? 0.8 : fl / 0.18 * 0.4; bolt.intensity = k * 9; lurk.visible = k > 0.5; } else { bolt.intensity = 0; lurk.visible = false; }
      amb.intensity = 3.6; eyes.forEach((e, i) => { const ph = (t * 0.35 + i * 0.61) % 3; e.visible = ph < 1.6 && !(ph % 0.9 < 0.08); });
    });
    R.collider(-140, -40, PATH_X - 1.4, -1.5); R.collider(PATH_X + 1.4, -40, 140, -1.5); R.collider(-140, 6.4, 140, 40);
    // тропинка к свету в конце пути
    R.floor('dirt', { x: PATH_X, w: 2.4, d: 6, z: -4, y: 0.02, tint: '#6a5038' }); R.light(PATH_X + 1, 3, -10, 0xffb860, 14, 14, { flicker: 0.2 });
    R.decal(canvasTex(10, 12, (c) => { c.fillStyle = '#1a120c'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#ffc870'; c.fillRect(2, 2, 6, 8); c.fillStyle = '#1a120c'; c.fillRect(4, 2, 2, 8); }, 'farwin'), { x: PATH_X + 1.6, y: 2.4, z: -9.5, w: 0.7, h: 0.85, glow: true, noSlot: true });
    R.inter('path', PATH_X, -2.6, { label: 'Тропинка к свету', fn: async (G) => { G.sfx('step'); await G.goto('pol_porch', 'start', { fade: 'fade' }); } });
    R.look('road', CAR_X - 8, 2.6, 'Дорога в туман', P.road);
    // машина
    const car = car3D(); car.g.position.set(f.pol_drive ? CAR_X : CAR_X - 36, 0, 1.2); R.room.group.add(car.g); R.room.named.car = car.g;
    if (f.pol_drive) { car.lamps.forEach((l) => (l.intensity = 0)); car.head.emissive.set(0x000000); R.onUpdate((dt, t) => { car.hazard.intensity = Math.floor(t * 1.6) % 2 ? 4 : 0; }); }
    R.collider(CAR_X - 2.3, 0.2, CAR_X + 2.3, 2.2);
    R.inter('car', CAR_X, 2.9, { label: 'Машина', fn: async (G) => { await G.run(f.pol_car ? P.carAfter : P.car); f.pol_car = 1; } });
    // жуткие моменты по дороге
    R.trigger(-22, -3, -18, 8, async (G) => { G.sfx('creak'); G.shake(0.2); await G.run(['polina/worried: Варь… Ты слышала? Как будто ветка хрустнула. Только ветра нет.', '~: Ветер есть. Просто он дует не оттуда, откуда хрустит.']); });
    R.trigger(8, -3, 12, 8, async (G) => { next = 0.01; await G.wait(0.9); await G.run(['polina/worried: Там кто-то стоял! Между деревьями! В шляпе!', '~: Я видела только деревья. И очень хочу, чтобы это были только деревья.']); });
    R.trigger(PATH_X - 12, -2, PATH_X + 6, 7, async (G) => { await G.run(P.light); });
    if (f.pol_drive) { const pol = R.actor('polina_coat', CAR_X + 1.4, 3.3, { id: 'polina' }); G.follow(pol); }
    R.spawn('start', CAR_X, 3.2, 'r');
  },
  async enter(G) {
    const f = G.f; if (f.pol_drive) return;
    // поездка: машина въезжает из тумана, глохнет, и девочки выходят
    const car = G.room.named.car as THREE.Group; G.player.hidden = true; G.focus(CAR_X - 12, 1, 16); let x = CAR_X - 36; let v = 7;
    const drive = new Promise<void>((res) => { const t0 = performance.now(); const step = () => { if (!G.room || G.room.named.car !== car) return res(); const k = (performance.now() - t0) / 1000; if (k > 2.2) v = Math.max(0, v - 0.09); x += v / 60; car.position.x = Math.min(x, CAR_X); G.cam.focus = { x: car.position.x + 2, z: 1, dist: 16 }; if (x >= CAR_X || v <= 0) { car.position.x = CAR_X; return res(); } requestAnimationFrame(step); }; step(); });
    if (!G.fast) { G.sfx('engine'); await G.run(P.drive); } await drive;
    G.sfx('engine', { stall: true }); G.flash(0.15); await G.wait(0.4); G.flash(0.15); G.room.named.car && (G.room.named.car.position.x = CAR_X);
    f.pol_drive = 1; await G.rebuild(); G.player.hidden = false; G.player.place(CAR_X, 3.2, 'r'); G.camSnap();
    await G.run(P.stall); G.unfocus();
  },
};

// ---------------- 2. крыльцо ----------------
const sidingTex = () => canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) { const k = y % 8; px(c, 0, y, 32, 1, k === 0 ? '#1a1e2c' : k === 1 ? '#5a6480' : k < 4 ? '#454e68' : '#3a4258'); } for (let i = 0; i < 40; i++) px(c, Math.floor(hsh(i, 3) * 32), Math.floor(hsh(i, 4) * 32), 2, 1, i % 3 ? '#2e3448' : '#4a5a50'); px(c, 15, 0, 1, 32, '#262c3c'); }, 'siding');
const shingleTex = () => canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const row = Math.floor(y / 6), off = (row % 2) * 4, k = (x + off) % 8; const yy = y % 6; px(c, x, y, 1, 1, yy === 5 || k === 0 ? '#0c0e16' : yy === 0 ? '#3a4460' : hsh(Math.floor((x + off) / 8), row, 5) < 0.2 ? '#2e4a3a' : '#222a3e'); } }, 'shingle');
/** Двускатный фронтон (треугольная призма с черепицей), лицом к камере. */
function gable(R: Builder, x: number, y: number, z: number, w: number, h: number, d: number) {
  const sh = new THREE.Shape(); sh.moveTo(-w / 2, 0); sh.lineTo(w / 2, 0); sh.lineTo(0, h); sh.lineTo(-w / 2, 0);
  const geo = new THREE.ExtrudeGeometry(sh, { depth: d, bevelEnabled: false }); geo.translate(0, 0, -d / 2);
  const front = sidingTex(); const fm = lamb(rep(front, 1 / 2, 1 / 2)); const rm = lamb(rep(shingleTex(), 1 / 2, 1 / 2));
  const m = new THREE.Mesh(geo, [fm, rm]); m.position.set(x, y, z); m.castShadow = true; R.room.group.add(m);
  // карниз-доски по скатам
  for (const s of [-1, 1]) { const len = Math.hypot(w / 2, h) + 0.4; const b = new THREE.Mesh(new THREE.BoxGeometry(len, 0.22, 0.2), lamb(tex('wood', '#8a7a6a'))); b.position.set(x + s * w / 4, y + h / 2, z + d / 2 + 0.1); b.rotation.z = -s * Math.atan2(h, w / 2); R.room.group.add(b); }
  return m;
}
function houseWinTex(lit: boolean, fig = false) {
  return canvasTex(18, 26, (c) => { px(c, 0, 0, 18, 26, '#0c0a0e'); px(c, 1, 1, 16, 24, '#8a7a6a'); px(c, 2, 2, 14, 2, '#b8a890'); px(c, 3, 4, 12, 18, lit ? '#e8b860' : '#121a2c');
    if (lit) { px(c, 3, 4, 12, 3, '#f8d890'); px(c, 3, 4, 3, 18, '#a86a30'); px(c, 12, 4, 3, 18, '#a86a30'); if (fig) { px(c, 8, 8, 3, 3, '#1a0e0a'); px(c, 7, 11, 5, 11, '#1a0e0a'); } } else { px(c, 4, 5, 2, 6, '#2a3a5a'); px(c, 6, 5, 1, 3, '#3a4a6a'); }
    px(c, 8, 4, 2, 18, '#4a3a2e'); px(c, 3, 12, 12, 2, '#4a3a2e'); px(c, 1, 22, 16, 3, '#5a4a3a'); px(c, 0, 25, 18, 1, '#0c0a0e'); }, 'hwin' + lit + fig);
}
const mansionFacade = (R: Builder) => {
  const sid = sidingTex();
  pbox(R, 0, -5.6, 22, 1, 7.5, { front: rep(sid, 11, 3.75), side: rep(sid, 0.5, 3.75), top: tex('darkwood') });
  for (const x of [-6, 6]) { pbox(R, x, -5.3, 7.4, 1.6, 0.4, { front: tex('wood', '#8a7a6a') }, { y: 7.3, solid: false }); gable(R, x, 7.5, -5.3, 8.2, 3.6, 1.6); R.decal(houseWinTex(x > 0), { x, y: 8.7, z: -4.48, w: 1.1, h: 1.5, glow: x > 0, noSlot: true }); }
  gable(R, 0, 7.5, -6.1, 10, 3, 1); pbox(R, 2.8, -6.4, 0.9, 0.9, 2.6, { front: tex('brick') }, { y: 9, solid: false });
  for (const x of [-8, -4, 4, 8]) for (const y of [2, 5.5]) { const lit = x === 4 && y === 5.5 || x === -8 && y === 2; R.decal(houseWinTex(lit, x === 4), { x, y, z: -5.07, w: 1.5, h: 2.15, glow: lit, noSlot: true }); for (const sx of [-1, 1]) R.decal(canvasTex(5, 22, (c) => { px(c, 0, 0, 5, 22, '#1e2a24'); for (let i = 2; i < 22; i += 3) px(c, 1, i, 3, 1, '#0c1210'); px(c, 0, 0, 1, 22, '#3a4a40'); }, 'shutter'), { x: x + sx * 1.02, y, z: -5.06, w: 0.45, h: 2.1, noSlot: true }); if (lit) R.light(x, y, -4.4, 0xe8a850, 4, 6, { flicker: 0.2 }); }
  // крыльцо: настил, ступени, столбики с перилами, навес с черепицей, фонарь у двери
  pbox(R, 0, -4.1, 6.2, 2, 0.35, { front: tex('wood', '#9a8068'), top: rep(tex('wood', '#8a7058'), 2, 1) });
  for (let i = 0; i < 2; i++) pbox(R, 0, -2.85 + i * 0.35, 2.6, 0.4, 0.24 - i * 0.12, { front: tex('wood', '#9a8068') }, { solid: false });
  for (const x of [-2.9, 2.9]) { pbox(R, x, -3.25, 0.26, 0.26, 3.6, { front: tex('wood', '#b8a890') }, { solid: false }); for (let k = 0; k < 5; k++) pbox(R, x - Math.sign(x) * (0.35 + k * 0.32), -3.25, 0.08, 0.08, 0.9, { front: tex('wood', '#b8a890') }, { y: 0.35, solid: false, cast: false }); pbox(R, x - Math.sign(x) * 0.95, -3.25, 1.6, 0.12, 0.1, { front: tex('wood', '#b8a890') }, { y: 1.25, solid: false }); }
  const roof = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.16, 2.6), lamb(rep(shingleTex(), 3, 1))); roof.position.set(0, 3.75, -4.0); roof.rotation.x = 0.28; roof.castShadow = true; R.room.group.add(roof);
  R.decal(canvasTex(8, 12, (c) => { px(c, 3, 0, 2, 2, '#1a1a1e'); px(c, 1, 2, 6, 8, '#1a1a1e'); px(c, 2, 3, 4, 6, '#ffd890'); px(c, 3, 4, 2, 3, '#fff4c8'); px(c, 2, 10, 4, 2, '#1a1a1e'); }, 'porchlamp'), { x: 1.9, y: 2.6, z: -4.95, w: 0.5, h: 0.75, glow: true, noSlot: true });
  R.collider(-3.1, -5.1, 3.1, -3.1);
};
const porch: RoomDef = {
  name: 'Особняк в лесу', chapter: 'Акт II · Полина', w: 30, d: 14, music: 'horror', amb: 'rain', step: 'grass', grade: GRADE, camDist: 25, maskGrade: KAWAII,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0e1626; fog(R, 0x0e1626, 20, 56);
    R.floor('grass', { w: 140, d: 70, z: -6 }); R.floor('dirt', { w: 3, d: 9, z: 1.5, y: 0.01 }); R.ambient(0x3e4a6a, 3.4, 0xa8b8e8); R.sun(0xb0c4ff, 2.2, -6, 14, 10);
    rainy(R, G, { thunder: true }); mansionFacade(R); R.light(0, 3, -3.0, 0xffc070, 9, 8, { flicker: 0.1 });
    backdrop(R, forestSkyTex('#0e1626', 'porchsky'), { z: -22, w: 200, h: 60, tilt: 0.56 });
    const pines = [0, 1, 2, 3].map(pineTex), fern = fernTex();
    for (const [x, z, k] of [[-13, -2, 0], [-11, 3, 1], [12, -3, 2], [13, 2.5, 3], [-14, 5.5, 1], [10.5, 5.6, 0], [-9.5, -4.4, 2], [9.5, -4.6, 3]]) R.sprite(pines[k], x, z, { scale: 1.15, solid: 0.4, thin: true });
    for (let x = -40, i = 0; x <= 40; x += 3.3, i++) { const j = hsh(i, 6); if (Math.abs(x) < 12) R.sprite(pines[i % 4], x + j, -9.5 - j * 3, { scale: 1.5 + j * 0.4, thin: true }); else { R.sprite(pines[i % 4], x + j, -6 + j * 4, { scale: 1.1 + j * 0.5, thin: true }); R.sprite(pines[(i + 2) % 4], x + j * 2, -12 - j * 2, { scale: 1.4 + j * 0.4, thin: true }); } }
    for (let i = 0; i < 16; i++) { const j = hsh(i, 8), x = -14 + i * 1.9 + j; if (Math.abs(x) < (i % 2 ? 4.5 : 2.4)) continue; R.sprite(fern, x, i % 2 ? -2.8 : 6.2 + j, { scale: 0.8 + j * 0.4, thin: true }); }
    R.sprite('streetlamp', -3.5, 0.6, { solid: 0.2 }); R.light(-3.5, 3.8, 0.8, 0xffd890, 10, 9, { flicker: 0.25 });
    R.door('front', 0, { label: 'Входная дверь', z: -5.05, col: '#6a3a2a', cond: () => G.has('porch_key'), locked: P.frontLocked, fn: async (G) => { G.sfx('creak'); await G.goto('pol_hall', 'front'); } });
    [[-3.7, -2.7, 0], [3.6, -2.7, 1], [4.7, -1.3, 0]].forEach(([x, z, k], i) => { R.sprite('flowerpot', x, z, { scale: 1.6 }); R.inter('pot' + i, x, z + 0.8, { label: 'Цветочный горшок', r: 1.2, fn: async (G) => { if (k && !G.has('porch_key')) { await G.run(P.pot); G.give('porch_key'); } else await G.run(P.potNot); } }); });
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
    else { R.ambient(0x4a4250, 3.2, 0xc0b0b0); R.light(0, 4.4, 2, 0xffd8a8, 14, 16, { flicker: 0.05 }); chandelier(R, 0, 5.6, 0.4, 0.9, { light: f.pol_light ? 16 : 9 }); sconce(R, -1.7, 3.4, -5.96, { light: 4 }); sconce(R, 5.25, 3.4, -5.96, { light: 4 }); }
    // двери: входная (восток), гостиная (восток), библиотека (запад), подвал и галерея (север)
    R.door('front', 2.6, { wall: 'e', label: 'Входная дверь', col: '#6a3a2a', fn: (G) => G.run(f.pol_dark ? P.polinaRun : P.houseLocked) });
    R.door('liv', -2.6, { wall: 'e', to: 'pol_living', spot: 'hall', label: 'Гостиная', col: '#7a5236', cond: () => !f.pol_dark || !!f.pol_light, locked: ['~: Из гостиной тянет холодом. Без света туда не пойду.'] });
    R.door('lib', -2, { wall: 'w', to: 'pol_library', label: 'Библиотека', col: '#7a5236', cond: () => !f.pol_dark, locked: ['~: В библиотеке что-то ходит. Тяжело, как метроном. Не туда.'] });
    R.door('gal', 8, { to: 'pol_gallery', label: 'Галерея', col: '#7a5236', cond: () => !!f.pol_dark && !f.pol_light, locked: ['polina/worried: Варь, там галерея. Давай не будем туда, пока можно не туда.'] });
    R.door('basement', 2.5, { label: f.pol_dark ? 'Засов подвала' : 'Дверь в подвал (замок с дисками)', col: '#7a7a88', fn: async (G) => {
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
    R.table(-3.8, -5.4, 2.4, 0.7, { tex: 'wood', tint: '#8a6448' }); mirror3D(R, -3.8, 3.3, -5.94, 1.6, 2.2, {}); R.look('hmirror', -3.8, -4.4, 'Зеркало', P.mirrorHall);
    R.sprite('candle', -4.6, -5.4, { y: 1.15, scale: 1.1 }); R.sprite(canvasTex(10, 12, (c) => { px(c, 3, 6, 4, 6, '#3a2a4a'); px(c, 2, 5, 6, 1, '#5a4a6a'); px(c, 1, 0, 3, 4, '#8e1830'); px(c, 5, 1, 3, 4, '#c8a0c0'); px(c, 4, 3, 2, 3, '#2e5038'); }, 'vase'), -3.0, -5.4, { y: 1.15, scale: 1.2, thin: true });
    coatStand(R, 11.0, 0.1, [0x2a2a30, 0xe8c230]); R.look('coat', 10.2, 0.6, 'Вешалка', P.coat);
    sofa(R, -10.4, 3.6, { w: 2.2, col: 0x8a5a5a, ry: Math.PI / 2 }); oldHouse(R, G, { h: 6.5 }); window3D(R, 3.4, { wall: 'w', y: 3.4, w: 1.4, h: 2.4, curtains: true });
    R.decal(paintingTex(0), { x: -0.2, y: 4.9, w: 1.6, h: 1.25 }); R.decal(paintingTex(2), { wall: 'e', at: 0.1, y: 4.4, w: 1.3, h: 1.0 });
    pbox(R, -10.9, -4.6, 0.8, 1.6, 1.0, { front: wardTex(0, '#5a3a26', '#8a6040', '#2e1c12'), top: tex('wood', '#9a7050') }); R.sprite('lamp', -10.9, -4.6, { y: 1.0, scale: 0.8 }); R.sprite(canvasTex(12, 8, (c) => { px(c, 0, 4, 12, 4, '#3a2a1a'); px(c, 1, 0, 4, 5, '#2a3a5a'); px(c, 6, 1, 5, 4, '#8a1a2a'); px(c, 2, 1, 2, 1, '#e8e0d0'); }, 'hats'), 10.6, -5.3, { y: 2.65, scale: 0.9, thin: true });
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
  const fp = new THREE.Group(); const marble = new THREE.MeshLambertMaterial({ map: tex('stone', '#c8b8a4') }); const add = (w: number, h: number, d: number, px: number, py: number, pz: number, m: THREE.Material) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(px, py, pz); b.castShadow = true; fp.add(b); };
  add(3.4, 0.3, 0.9, 0, 2.2, 0, marble); add(0.45, 2.2, 0.7, -1.45, 1.1, 0, marble); add(0.45, 2.2, 0.7, 1.45, 1.1, 0, marble); add(2.5, 1.6, 0.3, 0, 0.8, -0.25, new THREE.MeshBasicMaterial({ color: 0x140806 }));
  const fire = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshBasicMaterial({ map: canvasTex(16, 10, (c) => { c.fillStyle = '#ff8a20'; c.fillRect(2, 4, 12, 6); c.fillStyle = '#ffd060'; c.fillRect(5, 2, 6, 8); c.fillStyle = '#fff4c8'; c.fillRect(7, 5, 2, 5); }, 'fire'), transparent: true })); fire.position.set(0, 0.5, 0.05); fp.add(fire);
  fp.position.set(x, 0, z); R.room.group.add(fp); R.collider(x - 1.7, z - 0.45, x + 1.7, z + 0.45); R.light(x, 1, z + 1.2, 0xff9a40, 9, 8, { flicker: 0.25 });
  R.onUpdate((dt, t) => { fire.scale.y = 0.9 + Math.sin(t * 13) * 0.08 + Math.sin(t * 7.3) * 0.06; });
}
const living: RoomDef = {
  name: 'Гостиная', w: 20, d: 12, music: 'horror', amb: 'rain', step: 'carpet', grade: GRADE, maskGrade: KAWAII,
  build(R, G) {
    R.room.group.userData.bg = 0x05060a; R.floor('parquet', { tint: '#6a4a34' }); R.walls('wallpaper', { h: 6, tint: '#7a5a5a', trim: 'darkwood' }); R.ambient(0x4a4048, 3.2, 0xc8b0b0); R.light(0, 4.6, 1.4, 0xffd8a8, 14, 16, { flicker: 0.04 }); R.particles('dust', { count: 50, top: 5 });
    rug(R, 0, 0.2, 9, 5.4, { col: '#2a1a3a', border: '#b89858' }); oldHouse(R, G, { h: 6 });
    R.decal(paintingTex(1), { x: -3.3, y: 4.3, w: 1.5, h: 1.2 }); R.decal(paintingTex(0), { x: 3.3, y: 4.3, w: 1.5, h: 1.2 }); R.decal(paintingTex(2), { wall: 'e', at: -1.4, y: 3.8, w: 1.6, h: 1.25 });
    pbox(R, -9.3, -2.6, 0.7, 1.4, 0.9, { front: wardTex(2, '#5a3a26', '#8a6040', '#2e1c12'), top: tex('wood', '#9a7050') }, { ry: Math.PI / 2 }); R.sprite(canvasTex(10, 14, (c) => { px(c, 3, 8, 4, 6, '#3a5a8a'); px(c, 2, 7, 6, 1, '#5a7aaa'); px(c, 1, 1, 3, 4, '#e8e0d0'); px(c, 5, 0, 3, 5, '#c84a6a'); px(c, 3, 2, 3, 3, '#e8c040'); px(c, 4, 5, 1, 3, '#2e5038'); }, 'flowers'), -9.3, -2.6, { y: 0.9, scale: 1.2, thin: true });
    fireplace(R, 0, -5.5); R.look('fire', 0, -4.4, 'Камин', P.fire);
    window3D(R, -6, { wall: 'n', y: 3.2, w: 1.8, h: 2.8, curtains: true }); window3D(R, 6, { wall: 'n', y: 3.2, w: 1.8, h: 2.8, curtains: true });
    sofa(R, 0, 2.4, { w: 3.4, col: 0xc87070, ry: Math.PI }); armchair(R, -3.8, -1.2, { col: 0x6a3a3a, ry: Math.PI / 2 }); armchair(R, 3.8, -1.2, { col: 0x6a3a3a, ry: -Math.PI / 2 });
    R.table(0, -0.8, 2.4, 1.1, { tex: 'darkwood' }); for (const [i, cx] of [-0.6, 0, 0.6].entries()) { const cup = R.box(cx, -0.8 + (i % 2) * 0.2, 0.18, 0.18, 0.14, { color: 0xf4f0e8, y: 1.08, solid: false }); void cup; }
    R.look('tea', 0, 0.4, 'Чайный столик', P.tea);
    R.sprite(canvasTex(8, 12, (c) => { c.fillStyle = '#e8c230'; c.fillRect(1, 5, 6, 6); c.fillStyle = '#f0e0d0'; c.fillRect(2, 1, 4, 4); c.fillStyle = '#f0d98a'; c.fillRect(1, 0, 6, 2); c.fillStyle = '#111'; c.fillRect(3, 2, 1, 1); c.fillRect(5, 2, 1, 1); }, 'pdoll'), 3.8, -1.2, { y: 0.75, scale: 1.1, thin: true }); R.look('doll', 3.8, 0, 'Кукла в кресле', P.doll);
    piano(R, 7.4, -3.4, -0.3); R.look('piano', 6.8, -1.8, 'Пианино', P.piano);
    bookshelf(R, -9.4, 2.8, { w: 3, h: 4.2, ry: Math.PI / 2 }); R.sprite('lamp', -7.4, -4.6, { scale: 1 }); R.light(-7.4, 2.8, -4.4, 0xffd8a0, 5, 6);
    R.box(7.6, 2.6, 1.2, 0.8, 0.9, { tex: 'darkwood' }); R.box(7.6, 2.6, 0.9, 0.5, 0.55, { color: 0x6a4a2a, y: 0.9, solid: false }); R.box(7.6, 2.86, 0.6, 0.02, 0.35, { color: 0xd8c8a0, y: 0.98, solid: false, cast: false });
    R.inter('radio', 7.6, 3.6, { label: 'Старое радио', fn: async (G) => { G.sfx('laugh', { n: 6, f: 520, vol: 0.2 }); await G.run(P.radio); } });
    kawaii(R, G, { w: 20, d: 12 });
    const pol = R.actor('polina_coat', -7.6, -0.6, { id: 'polina' }); G.follow(pol);
    R.door('hall', -2.6, { wall: 'w', to: 'pol_hall', spot: 'liv', label: 'В прихожую', col: '#7a5236' });
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
      if (i < 4) sconce(R, x + 2, 3.9, -5.96, { light: 0 }); R.inter('pt_' + pt.id, x, -4.4, { label: 'Портрет: ' + pt.name, fn: (G) => G.run(P.portraitLook(pt.name, pt.year, pt.sym, pt.look)) }); R.photo(pt.id, pt.name, x, -5.5); });
    R.onUpdate(() => { const v = !!G.inPhoto; for (const s of swaps) { s.a.visible = !v; s.b.visible = v; } });
    bookshelf(R, -11.4, -2.4, { w: 3.2, h: 4.6, ry: Math.PI / 2 }); bookshelf(R, -11.4, 1.4, { w: 3.2, h: 4.6, ry: Math.PI / 2 }); bookshelf(R, 11.4, 2.2, { w: 3, h: 4.6, ry: -Math.PI / 2 });
    R.table(0, 0.4, 3, 1.3, { tex: 'darkwood' }); R.sprite('bookstand', 0, 0.4, { y: 1.15, scale: 1.1 }); R.sprite('candle', -1.1, 0.3, { y: 1.15, scale: 1.1 }); R.light(-1.1, 1.8, 0.6, 0xffc070, 3, 4, { flicker: 0.3 });
    armchair(R, -2.6, 1.6, { col: 0xb06060, ry: Math.PI + 0.4 }); armchair(R, 2.6, 1.6, { col: 0xb06060, ry: Math.PI - 0.4 }); oldHouse(R, G, { h: 6, base: '#4a2e1c' });
    R.sprite('lamp', -10.6, 4.4, { scale: 1 }); R.light(-10.4, 2.6, 4.2, 0xffd090, 4, 6); pbox(R, 6, 4.8, 2.2, 0.8, 0.9, { front: wardTex(0, '#4a2e1c', '#7a5436', '#24160c'), top: tex('wood', '#8a6040') }); R.sprite('candle', 5.4, 4.8, { y: 0.9, scale: 1 }); R.sprite(canvasTex(14, 8, (c) => { px(c, 0, 4, 14, 4, '#5a2a1a'); px(c, 1, 2, 12, 2, '#2a3a5a'); px(c, 2, 0, 10, 2, '#8a6a2a'); px(c, 0, 4, 14, 1, '#e8e0c8'); }, 'bookpile'), 6.6, 4.8, { y: 0.9, scale: 1, thin: true });
    R.inter('book', 0, 1.6, { label: 'Проклятая книга', fn: async (G) => { await G.run(P.book); await G.ui.paper(P.bookText); if (!f.pol_book) { f.pol_book = 1; await G.run(P.bookAfter); await ownerEnters(G); } } });
    for (const [k, x] of [-10.4, 10.4].entries()) { wardrobeP(R, x, -5.3, { v: k ? 2 : 0, w: 1.9, h: 3.2, base: '#5a3a26', lt: '#8a6040', dk: '#2e1c12' }); R.inter('wd' + (k ? 7.6 : -7.6), x, -4.3, { label: 'Шкаф (спрятаться / выйти)', r: 1.4, fn: (G) => hide(G) }); }
    const g = R.guard('owner', [[-9, -2.6], [7, -2.6]], { speed: 1.6, range: 5.2, half: 0.45, pause: 1.6, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(G.state.mask === 'comedy' ? P.caughtCat : P.caught); G.player.place(10, 1.6, 'l'); G.actor('polina')?.place(10.4, 2.4); G.room.guards[0].actor.place(-9, -2.6); G.camSnap(); } });
    g.active = !!f.pol_book; catFor(R, G, g);
    R.look('catL', 0, -2, 'Котик-Хозяин', P.catLook, { mask: 'comedy', r: 3 });
    kawaii(R, G, { w: 24, d: 12 });
    R.door('back', -2, { wall: 'e', to: 'pol_hall', spot: 'lib', label: 'В прихожую', col: '#7a5236' });
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
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('parquet', { tint: '#7a5640' }); R.walls('wallgreen', { h: 6, trim: 'wood' }); oldHouse(R, G, { h: 6, base: '#3a2a20' }); R.ambient(0x3a4060, 4.2, 0x8a9ac8); carriedLight(R, G, 0xffe0a0, 20, 12);
    // ковровая дорожка вдоль всей галереи (повторяющийся узор, без растяжения)
    const runner = canvasTex(32, 16, (c) => { px(c, 0, 0, 32, 16, '#3a1218'); px(c, 0, 1, 32, 1, '#8a6a30'); px(c, 0, 14, 32, 1, '#8a6a30'); for (let i = 0; i < 6; i++) { px(c, 8 - i, 3 + i, 1, 1, '#6a2a30'); px(c, 8 + i, 3 + i, 1, 1, '#6a2a30'); px(c, 8 - i, 12 - i, 1, 1, '#6a2a30'); px(c, 8 + i, 12 - i, 1, 1, '#6a2a30'); } px(c, 7, 7, 3, 2, '#a07a3a'); px(c, 24, 7, 2, 2, '#5a1a22'); grime(c, 32, 16, '#2a0c10', 0.08, 21); }, 'galrunner');
    paintFloor(R, runner, 2, { w: 30, d: 2.4, z: 1.6, y: 0.015, apron: 0 });
    for (const x of [-14.6, 14.6]) { R.sprite('candle', x, -5, { y: 1.6, scale: 1.4 }); pbox(R, x, -5, 0.7, 0.7, 1.6, { front: wardTex(3, '#4a3022', '#7a5038', '#22140c') }); R.light(x, 2.4, -4.2, 0xffb060, 5, 7, { flicker: 0.3 }); R.sprite('plant', x * 0.82, 4.6, { scale: 1.1 }); }
    const DCOL = ['#8a2e2e', '#2f6a50', '#8a6a3a', '#3e5486'];
    for (const [di, d] of DOORS_G.entries()) { wallpaper(R, d.x, d.up); sconce(R, d.x + (d.x < 0 ? -1.95 : 1.95), 3.1, -5.46, { light: 6 }); R.decal(canvasTex(24, 4, (c) => { px(c, 0, 0, 24, 4, '#2a1a10'); px(c, 1, 1, 22, 2, '#ffcf80'); for (let i = 2; i < 22; i += 4) px(c, i, 1, 1, 2, '#2a1a10'); }, 'transom'), { x: d.x, y: 4.35, z: -5.44, w: 2.2, h: 0.36, glow: true, noSlot: true });
      R.door('g' + d.x, d.x, { label: 'Дверь', col: DCOL[di], fn: async (G) => {
      if (!f.pol_gal_hint) { f.pol_gal_hint = 1; await G.run(P.galleryHint); }
      if (d.up) { G.sfx('creak'); return G.goto('pol_kitchen'); }
      G.sfx('creak'); await G.run(P.fakeDoor.slice(0, 1)); G.sfx('laugh', { n: 6, f: 420, vol: 0.3 }); G.flash(0.4); G.shake(0.3); await G.run(P.fakeDoor.slice(1)); } });
      R.look('wp' + d.x, d.x + 1.4, -4.2, 'Обои над дверью', d.up ? P.wallpaperUp : P.wallpaperDown, { r: 1.0, y: 4.6 }); }
    const WD = [{ v: 0, base: '#6a4228', lt: '#9a6a42', dk: '#3a2216' }, { v: 1, base: '#4a3448', lt: '#7a5a76', dk: '#24182a' }, { v: 3, base: '#3e4a3a', lt: '#66785e', dk: '#1e281c' }];
    for (const [i, x] of [-7, 0, 7].entries()) { wardrobeP(R, x, -4.2, { ...WD[i], w: 1.8 + (i === 1 ? 0.3 : 0), h: 3.1 + (i === 1 ? 0.3 : -0.1 * i) }); R.inter('wd' + i, x, -3.2, { label: 'Шкаф (спрятаться / выйти)', r: 1.3, fn: (G) => hide(G, []) }); R.decal(portraitTex([1, 3, 2][i]), { x, y: 4.75, z: -5.44, w: 0.95, h: 1.2, noSlot: true }); }
    for (const x of [-14.6, 14.6]) R.decal(portraitTex(x < 0 ? 0 : 4), { x, y: 3.6, w: 1.3, h: 1.65, noSlot: true });
    R.guard('owner', [[-13, 1.6], [13, 1.6]], { speed: 2.0, range: 6.2, half: 0.5, pause: 1.2, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(P.galCaught); G.player.place(-14.2, 2, 'r'); G.room.guards[0].actor.place(13, 1.6); G.camSnap(); } });
    R.door('back', 2, { wall: 'w', to: 'pol_hall', spot: 'gal', label: 'В прихожую', col: '#7a5236' });
    R.spawn('start', -14.2, 2, 'r');
  },
  async enter(G) { if (!G.f.pol_gal_seen) { G.f.pol_gal_seen = 1; G.sfx('heart'); await G.run(P.galleryIn); } },
};

// ---------------- 8. кухня: щиток и Хозяин ----------------
const kitchen: RoomDef = {
  name: 'Кухня', w: 16, d: 10, music: 'horror', amb: 'rain', step: 'stone', grade: DARK, noMasks: true,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a;
    const tile = canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const d = ((x >> 4) + (y >> 4)) % 2, g = x % 16 === 0 || y % 16 === 0; px(c, x, y, 1, 1, g ? '#141614' : d ? (hsh(x, y, 3) < 0.25 ? '#6e6a58' : '#7a7462') : (hsh(x, y, 4) < 0.25 ? '#1e2422' : '#262c2a')); } for (let i = 0; i < 9; i++) px(c, 3 + i, 20 + (i % 3), 1, 1, '#141614'); grime(c, 32, 32, 'rgba(20,16,8,0.4)', 0.06, 31); }, 'ktile');
    const wallT = canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const row = y >> 2, off = (row % 2) * 4, g = y % 4 === 0 || (x + off) % 8 === 0; px(c, x, y, 1, 1, g ? '#262a28' : hsh((x + off) >> 3, row, 9) < 0.2 ? '#4e5652' : '#5a625c'); } grime(c, 32, 32, 'rgba(30,24,14,0.45)', 0.07, 33); }, 'kwall');
    paintFloor(R, tile, 1.6); paintWalls(R, wallT, 5, 2);
    if (!f.pol_light) { R.ambient(0x262c40, 2.6, 0x5a6a90); carriedLight(R, G, 0xffe0a0, 20, 12); R.light(0, 4.2, -1, 0x7088d0, 3, 10); R.light(6.0, 1.3, -2.8, 0xfff0c8, 7, 6, { flicker: 0.05 }); R.light(-3.6, 2.2, -3.9, 0xffa040, 5, 7, { flicker: 0.12 }); }
    else { R.ambient(0x50483c, 2.8, 0xffe0c0); R.light(0, 4, 0, 0xffe8c0, 16, 16); R.light(-3.6, 2.2, -3.9, 0xffb060, 4, 7); }
    // кухонный гарнитур: расписанные тумбы, навесные шкафы с подсветкой снизу, плита, мойка, холодильник
    const cab = canvasTex(24, 16, (c) => { px(c, 0, 0, 24, 16, '#141a16'); px(c, 1, 1, 22, 15, '#4e6256'); px(c, 1, 1, 22, 3, '#3a4a40'); px(c, 10, 2, 4, 1, '#c8c0a0'); bev(c, 2, 5, 9, 10, '#4e6256', '#7a9282', '#2a3630'); bev(c, 13, 5, 9, 10, '#4e6256', '#7a9282', '#2a3630'); px(c, 9, 8, 1, 3, '#c8c0a0'); px(c, 14, 8, 1, 3, '#c8c0a0'); grime(c, 24, 16, 'rgba(10,8,4,0.4)', 0.07, 41); }, 'kcab');
    const upper = canvasTex(24, 16, (c) => { px(c, 0, 0, 24, 16, '#141a16'); px(c, 1, 1, 22, 14, '#4e6256'); for (const dx of [2, 13]) { bev(c, dx, 2, 9, 12, '#4e6256', '#7a9282', '#2a3630'); px(c, dx + 2, 4, 5, 8, '#1a2220'); px(c, dx + 2, 7, 5, 1, '#5a5a50'); px(c, dx + 3, 5, 2, 2, '#d8d0c0'); px(c, dx + 5, 9, 2, 2, '#c86a4a'); } }, 'kup');
    const top = canvasTex(16, 8, (c) => { px(c, 0, 0, 16, 8, '#8a8478'); for (let i = 0; i < 12; i++) px(c, Math.floor(hsh(i, 1) * 16), Math.floor(hsh(i, 2) * 8), 1, 1, '#6a6458'); px(c, 0, 7, 16, 1, '#3a3630'); }, 'ktop');
    for (let x = -6.4; x <= 1.6; x += 1.6) { if (Math.abs(x + 1.6) < 0.1) continue; pbox(R, x, -4.4, 1.55, 1.0, 1.05, { front: cab, side: tex('wood', '#5a6a60') }); pbox(R, x, -4.35, 1.6, 1.1, 0.08, { front: top }, { y: 1.05, solid: false }); pbox(R, x, -4.75, 1.4, 0.5, 1.0, { front: upper, side: tex('wood', '#5a6a60') }, { y: 3.0, solid: false }); }
    R.box(-2.4, -4.48, 9.4, 0.06, 0.05, { color: 0xffc070, emissive: 0xffa040, y: 2.96, solid: false, cast: false });
    const stove = canvasTex(24, 16, (c) => { px(c, 0, 0, 24, 16, '#0c0c0e'); px(c, 1, 1, 22, 15, '#3a3a40'); for (let i = 0; i < 4; i++) { px(c, 3 + i * 5, 2, 3, 2, '#121214'); px(c, 4 + i * 5, 2, 1, 1, '#c8c8d0'); } bev(c, 3, 5, 18, 10, '#2a2a30', '#5a5a64', '#141418'); px(c, 5, 7, 14, 6, '#140c08'); px(c, 6, 11, 12, 1, '#a04010'); px(c, 4, 5, 16, 1, '#a8a8b0'); }, 'kstove');
    pbox(R, -1.6, -4.4, 1.5, 1.0, 1.06, { front: stove, side: tex('metal'), top: canvasTex(16, 12, (c) => { px(c, 0, 0, 16, 12, '#1a1a1e'); for (const [bx, by] of [[1, 1], [9, 1], [1, 7], [9, 7]]) { px(c, bx, by, 6, 4, '#2a2a30'); px(c, bx + 1, by + 1, 4, 2, '#0c0c0e'); px(c, bx + 2, by + 1, 2, 1, '#4a4a54'); } }, 'kburn') });
    R.box(1.6, -4.35, 0.9, 0.6, 0.06, { tex: 'metal', y: 1.1, solid: false, cast: false }); R.box(1.6, -4.7, 0.06, 0.06, 0.4, { tex: 'metal', y: 1.12, solid: false, cast: false });
    const pan = canvasTex(10, 12, (c) => { px(c, 4, 0, 2, 5, '#3a3a40'); c.fillStyle = '#1a1a1e'; c.beginPath(); c.arc(5, 8, 4, 0, 7); c.fill(); c.fillStyle = '#7a5a3a'; c.beginPath(); c.arc(5, 8, 3, 0, 7); c.fill(); px(c, 3, 6, 2, 1, '#c8a070'); }, 'kpan');
    R.box(-4.7, -5.3, 2.8, 0.06, 0.06, { tex: 'metal', y: 2.55, solid: false, cast: false }); for (let i = 0; i < 4; i++) R.decal(pan, { x: -5.6 + i * 0.6, y: 2.1 - (i % 2) * 0.12, z: -5.25, w: 0.5, h: 0.6, noSlot: true });
    const fridge = canvasTex(20, 36, (c) => { px(c, 0, 0, 20, 36, '#1a1a1c'); px(c, 1, 1, 18, 35, '#c8c4b4'); px(c, 1, 1, 18, 2, '#e8e4d4'); px(c, 1, 12, 18, 1, '#4a4844'); px(c, 15, 4, 2, 6, '#8a8880'); px(c, 15, 15, 2, 10, '#8a8880'); px(c, 2, 3, 1, 32, '#ece8d8'); px(c, 4, 16, 3, 3, '#e84a6f'); px(c, 8, 20, 4, 3, '#3a8ae8'); px(c, 5, 24, 5, 6, '#f4f0e0'); px(c, 6, 25, 3, 1, '#4a4a4a'); px(c, 6, 27, 2, 1, '#4a4a4a'); px(c, 1, 34, 18, 2, '#3a3834'); grime(c, 20, 36, 'rgba(60,50,30,0.35)', 0.07, 51); }, 'kfridge');
    pbox(R, 6.6, -4.2, 1.4, 1.2, 2.4, { front: fridge, side: canvasTex(8, 16, (c) => { px(c, 0, 0, 8, 16, '#a8a494'); px(c, 0, 0, 1, 16, '#d8d4c4'); px(c, 7, 0, 1, 16, '#6a685c'); }, 'kfside') });
    R.decal(canvasTex(12, 20, (c) => { const g = c.createLinearGradient(0, 0, 12, 0); g.addColorStop(0, 'rgba(255,240,190,0.9)'); g.addColorStop(1, 'rgba(255,240,190,0)'); c.fillStyle = g; c.fillRect(0, 0, 12, 20); }, 'kfglow'), { x: 5.86, y: 1.2, z: -3.55, w: 0.3, h: 2.0, glow: true, noSlot: true, opacity: 0.7 });
    const stool = canvasTex(12, 12, (c) => { px(c, 0, 0, 12, 12, '#2a1c12'); px(c, 1, 0, 10, 3, '#8a6040'); px(c, 1, 0, 10, 1, '#b08058'); px(c, 2, 3, 2, 9, '#5a3a24'); px(c, 8, 3, 2, 9, '#5a3a24'); px(c, 2, 7, 8, 1, '#4a2e1c'); }, 'kstool');
    R.table(-2.6, 1.2, 2.6, 1.4, { tex: 'wood', tint: '#9a7050' }); for (const [cx, cz] of [[-3.6, 2.3], [-1.6, 2.3], [-3.6, 0.1], [-1.6, 0.1]]) pbox(R, cx, cz, 0.5, 0.5, 0.55, { front: stool, side: stool, top: tex('wood', '#9a7050') }, { solid: false });
    R.sprite('candle', -2.2, 1.0, { y: 1.15, scale: 1 }); R.sprite(canvasTex(8, 6, (c) => { px(c, 0, 2, 8, 4, '#e8e4d8'); px(c, 1, 3, 6, 2, '#8a2a20'); px(c, 1, 0, 6, 2, '#f4f0e8'); }, 'kplate'), -3.0, 1.3, { y: 1.15, scale: 1, thin: true });
    window3D(R, -2.6, { wall: 'w', y: 2.8, w: 1.6, h: 2 }); window3D(R, 4.4, { wall: 'e', y: 2.8, w: 1.4, h: 2, curtains: false }); { const bolt = R.ambient(0xc8d4ff, 0, 0xffffff); let nx = 3, fl = 0; R.onUpdate((dt) => { nx -= dt; if (nx < 0) { nx = 9 + Math.random() * 9; fl = 0.5; setTimeout(() => G.sfx('thunder'), 800); } fl -= dt; bolt.intensity = fl > 0 ? (fl > 0.35 ? 3 : fl > 0.25 ? 0.3 : 2) : 0; }); }
    R.box(4.4, -4.85, 1.2, 0.3, 1.6, { tex: 'metal' });
    R.sprite(canvasTex(10, 14, (c) => { c.fillStyle = '#484e59'; c.fillRect(0, 0, 10, 14); c.fillStyle = f.pol_light ? '#40e040' : '#601010'; c.fillRect(2, 2, 2, 2); c.fillStyle = '#e8e0c8'; c.fillRect(5, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(3, f.pol_light ? 5 : 9, 4, 3); }, 'fuse' + !!f.pol_light), 4.4, -4.6, { y: 1.5, scale: 1.2, thin: true });
    R.inter('fuse', 4.4, -3.5, { label: f.pol_light ? 'Щиток (включён)' : 'Электрощиток', fn: async (G) => { if (f.pol_light) return; await breakerScene(G); } });
    if (f.pol_pile) { R.sprite(canvasTex(24, 12, (c) => { c.fillStyle = '#1c1614'; c.fillRect(0, 6, 24, 6); c.fillStyle = '#111'; c.fillRect(2, 2, 14, 3); c.fillRect(5, 0, 8, 3); c.fillStyle = '#e8e4d8'; c.fillRect(15, 4, 7, 7); c.fillStyle = '#111'; c.fillRect(16, 6, 2, 2); c.fillRect(19, 6, 2, 2); }, 'ownerpile'), 4.6, -2.0, { scale: 1.3 }); R.look('pile', 4.6, -1.2, 'Плащ, шляпа и маска', P.pile); }
    R.door('back', 1.2, { wall: 'w', to: 'pol_gallery', label: 'В галерею', col: '#7a5236', fn: async (G) => G.goto(f.pol_light ? 'pol_hall' : 'pol_gallery', f.pol_light ? 'gal' : 'start') });
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
