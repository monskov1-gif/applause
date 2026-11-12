// Набор театральных декораций: колонны, люстры, бра, балюстрады, гримёрные столики с лампами, костюмы,
// манекены, шляпные коробки, сундуки, рояль, шестерни, окна со световыми лучами, ложи, ряды кресел.
import * as THREE from 'three';
import type { Builder } from './room';
import { canvasTex, tex, ptext } from '../gfx/tex';

type DC = CanvasRenderingContext2D;
const r = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const lam = (o: THREE.MeshLambertMaterialParameters) => new THREE.MeshLambertMaterial(o);
const gold = () => lam({ map: tex('gold') });

export function column(R: Builder, x: number, z: number, h = 6, o: { tex?: string; r?: number } = {}) {
  const rad = o.r || 0.42; const g = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad * 1.05, h - 1, 14), lam({ map: tex(o.tex || 'white', o.tex ? undefined : '#e8d8c8') })); shaft.position.y = h / 2; shaft.castShadow = true; g.add(shaft);
  for (const [y, s] of [[0.25, 1.4], [h - 0.3, 1.5]]) { const cap = new THREE.Mesh(new THREE.BoxGeometry(rad * 2 * s, 0.5, rad * 2 * s), gold()); cap.position.y = y; g.add(cap); }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(rad * 1.06, 0.05, 6, 16), gold()); ring.rotation.x = Math.PI / 2; ring.position.y = h - 0.8; g.add(ring);
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - rad, z - rad, x + rad, z + rad); return g;
}
export function chandelier(R: Builder, x: number, y: number, z: number, s = 1, o: { light?: number; color?: number } = {}) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s);
  const gm = gold(); const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2, 6), gm); rod.position.y = 1; g.add(rod);
  for (const [rr, yy] of [[1.1, 0], [0.7, 0.45], [0.35, 0.8]]) { const t = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.05, 6, 24), gm); t.rotation.x = Math.PI / 2; t.position.y = yy; g.add(t); }
  const flame = canvasTex(4, 8, (c) => { r(c, 1, 0, 2, 3, '#ffe9a0'); r(c, 0, 3, 4, 3, '#ffb040'); r(c, 1, 6, 2, 2, '#e8e0c8'); }, 'cflame');
  const crystal = lam({ color: 0xfff6e8, emissive: 0x6a5a40, transparent: true, opacity: 0.85 });
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; const cx = Math.cos(a) * 1.1, cz = Math.sin(a) * 1.1;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: flame, color: 0xffffff })); sp.scale.set(0.16, 0.32, 1); sp.position.set(cx, 0.2, cz); g.add(sp);
    const dr = new THREE.Mesh(new THREE.OctahedronGeometry(0.07), crystal); dr.scale.y = 1.8; dr.position.set(cx * 0.92, -0.32, cz * 0.92); g.add(dr); }
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + 0.3; const dr = new THREE.Mesh(new THREE.OctahedronGeometry(0.06), crystal); dr.scale.y = 2; dr.position.set(Math.cos(a) * 0.55, -0.6, Math.sin(a) * 0.55); g.add(dr); }
  const big = new THREE.Mesh(new THREE.OctahedronGeometry(0.16), crystal); big.scale.y = 2; big.position.y = -0.9; g.add(big);
  R.room.group.add(g); const l = R.light(x, y - 0.4 * s, z, o.color ?? 0xffd8a0, o.light ?? 18, 16 * s, { flicker: 0.03 });
  R.onUpdate((dt, t) => { g.rotation.y = Math.sin(t * 0.3 + x) * 0.05; });
  return { group: g, light: l };
}
export function sconce(R: Builder, x: number, y: number, z: number, o: { wall?: 'n' | 'w' | 'e'; light?: number } = {}) {
  const t = canvasTex(10, 14, (c) => { r(c, 4, 6, 2, 8, '#86641c'); r(c, 1, 9, 8, 2, '#b08a2c'); r(c, 1, 3, 2, 4, '#fff4c8'); r(c, 7, 3, 2, 4, '#fff4c8'); r(c, 1, 1, 2, 2, '#ffd060'); r(c, 7, 1, 2, 2, '#ffd060'); }, 'sconce2');
  const m = R.decal(t, { x, y, z, wall: o.wall === 'w' || o.wall === 'e' ? o.wall : undefined, at: z, glow: true, w: 0.7, h: 1 });
  const lx = o.wall === 'w' ? x + 0.6 : o.wall === 'e' ? x - 0.6 : x, lz = o.wall === 'w' || o.wall === 'e' ? z : z + 0.6;
  R.light(lx, y, lz, 0xffc880, o.light ?? 5, 7, { flicker: 0.06 }); return m;
}
export function balustrade(R: Builder, x0: number, z0: number, x1: number, z1: number, o: { y?: number; h?: number; solid?: boolean } = {}) {
  const y = o.y || 0, h = o.h || 1.1, len = Math.hypot(x1 - x0, z1 - z0), ang = Math.atan2(z1 - z0, x1 - x0); const g = new THREE.Group();
  const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.14, 0.22), gold()); rail.position.y = h; g.add(rail);
  const base = new THREE.Mesh(new THREE.BoxGeometry(len, 0.18, 0.26), lam({ map: tex('darkwood') })); base.position.y = 0.09; g.add(base);
  const n = Math.max(2, Math.floor(len / 0.34)); const bal = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.05, 0.08, h - 0.2, 6), lam({ color: 0xe8d8c0 }), n); const m4 = new THREE.Matrix4();
  for (let i = 0; i < n; i++) { m4.makeTranslation(-len / 2 + (i + 0.5) * len / n, h / 2, 0); bal.setMatrixAt(i, m4); } g.add(bal);
  g.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); g.rotation.y = -ang; R.room.group.add(g);
  if (o.solid !== false) { const pad = 0.2; R.collider(Math.min(x0, x1) - pad, Math.min(z0, z1) - pad, Math.max(x0, x1) + pad, Math.max(z0, z1) + pad); }
  return g;
}
/** Гримёрный столик: зеркало в раме из лампочек, флаконы, кисти, фотографии за рамой. */
export function vanity(R: Builder, x: number, z: number, o: { w?: number; wall?: boolean; clutter?: number; photos?: number; dark?: boolean } = {}) {
  const w = o.w || 3; R.table(x, z, w, 1.1, { tex: 'darkwood' });
  const mw = w - 0.5, mh = 2, my = 2.6, mz = z - 0.45;
  const mirrorTex = canvasTex(32, 24, (c) => { r(c, 0, 0, 32, 24, '#3a3028'); for (let i = 0; i < 6; i++) r(c, 2 + i * 5, 0, 2, 24, 'rgba(255,240,220,0.08)'); r(c, 4, 2, 3, 20, 'rgba(255,255,255,0.12)'); }, 'vmirror');
  const mirror = new THREE.Mesh(new THREE.PlaneGeometry(mw, mh), lam({ map: mirrorTex, emissive: 0x201810 })); mirror.position.set(x, my, mz + 0.02); R.room.group.add(mirror);
  const frameM = gold(); for (const [fx, fy, fw, fh] of [[x - mw / 2 - 0.08, my, 0.16, mh + 0.3], [x + mw / 2 + 0.08, my, 0.16, mh + 0.3], [x, my + mh / 2 + 0.08, mw + 0.3, 0.16]]) { const f = new THREE.Mesh(new THREE.BoxGeometry(fw, fh, 0.08), frameM); f.position.set(fx, fy, mz); R.room.group.add(f); }
  const bulb = lam({ color: 0xfff4d8, emissive: o.dark ? 0x221a10 : 0xffd090 }); const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.09, 8, 6), bulb, 40); const m4 = new THREE.Matrix4(); let n = 0;
  for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) { m4.makeTranslation(x + sx * (mw / 2 + 0.08), my - mh / 2 + 0.15 + i * (mh - 0.1) / 5, mz + 0.1); bulbs.setMatrixAt(n++, m4); }
  for (let i = 0; i < Math.floor(mw / 0.35); i++) { m4.makeTranslation(x - mw / 2 + 0.2 + i * 0.35, my + mh / 2 + 0.08, mz + 0.1); bulbs.setMatrixAt(n++, m4); } bulbs.count = n; R.room.group.add(bulbs);
  if (!o.dark) { R.light(x - mw / 2, my, mz + 0.8, 0xffd9a0, 4, 6, { flicker: 0.04 }); R.light(x + mw / 2, my, mz + 0.8, 0xffd9a0, 4, 6, { flicker: 0.04 }); }
  const items = ['bottle', 'powder', 'brushes', 'bottle2', 'comb', 'lipstick', 'perfume'];
  for (let i = 0; i < (o.clutter ?? 6); i++) R.sprite(clutterTex(items[i % items.length]), x - w / 2 + 0.4 + i * (w - 0.8) / Math.max(1, (o.clutter ?? 6) - 1), z - 0.2 + (i % 2) * 0.25, { y: 1.15, scale: 0.9 });
  for (let i = 0; i < (o.photos ?? 3); i++) R.decal(photoTex(i), { x: x - mw / 2 + 0.3 + i * 0.5, y: my + mh / 2 - 0.3 - (i % 2) * 0.2, z: mz + 0.05, w: 0.42, h: 0.52, ry: 0 });
  return mirror;
}
export function clutterTex(kind: string) {
  return canvasTex(10, 12, (c) => {
    if (kind === 'bottle') { r(c, 3, 3, 4, 9, 'rgba(200,220,240,.8)'); r(c, 4, 0, 2, 3, '#b08a2c'); r(c, 3, 7, 4, 4, '#c86a8a'); }
    if (kind === 'bottle2') { r(c, 2, 5, 6, 7, 'rgba(240,200,220,.85)'); r(c, 4, 2, 2, 3, '#d8d8e0'); r(c, 3, 0, 4, 2, '#e84a6f'); }
    if (kind === 'powder') { r(c, 1, 8, 8, 4, '#f4e8d8'); r(c, 1, 7, 8, 1, '#d4ae48'); r(c, 3, 5, 4, 2, '#fff8f0'); }
    if (kind === 'brushes') { r(c, 3, 6, 4, 6, 'rgba(220,230,240,.6)'); r(c, 3, 1, 1, 6, '#1a1214'); r(c, 6, 0, 1, 7, '#6a3a2a'); r(c, 2, 0, 3, 2, '#5a3a28'); r(c, 5, 0, 3, 1, '#c8a080'); }
    if (kind === 'comb') { r(c, 1, 9, 8, 2, '#2a1a14'); for (let i = 0; i < 4; i++) r(c, 1 + i * 2, 11, 1, 1, '#2a1a14'); }
    if (kind === 'lipstick') { r(c, 4, 6, 2, 6, '#d4ae48'); r(c, 4, 3, 2, 3, '#b3122e'); }
    if (kind === 'perfume') { r(c, 2, 5, 6, 7, 'rgba(255,220,180,.8)'); r(c, 4, 3, 2, 2, '#b08a2c'); r(c, 6, 1, 3, 3, '#a3122a'); }
  }, 'clutter' + kind);
}
export function photoTex(i: number) {
  return canvasTex(10, 12, (c) => { r(c, 0, 0, 10, 12, '#efe6d6'); r(c, 1, 1, 8, 8, ['#4a3a2a', '#2a2a3a', '#5a2a2a', '#3a3a2a'][i % 4]); r(c, 4, 2 + (i % 2), 2, 2, '#c8b8a0'); r(c, 3, 4 + (i % 2), 4, 4, '#8a7a6a'); }, 'vphoto' + (i % 4));
}
const DRESS_COLS = [['#a3122a', '#e8c36a'], ['#2f7f82', '#f0f0f0'], ['#e8e0d0', '#c0c0c8'], ['#5a2a6a', '#e8c36a'], ['#1a1a22', '#c8c8d8'], ['#d86a8a', '#fff0f8'], ['#3a5a3a', '#d4ae48'], ['#c86a2a', '#ffe0a0']];
export function dressTex(i: number) {
  const [a, b] = DRESS_COLS[i % DRESS_COLS.length];
  return canvasTex(16, 34, (c) => { r(c, 7, 0, 2, 3, '#86641c'); r(c, 5, 2, 6, 2, '#86641c'); r(c, 4, 4, 8, 10, a); r(c, 3, 4, 2, 6, a); r(c, 11, 4, 2, 6, a); r(c, 5, 13, 6, 2, b);
    for (let y = 15; y < 34; y++) { const w = 6 + Math.floor((y - 15) / 2); r(c, 8 - w / 2, y, w, 1, y % 5 === 0 ? b : a); }
    for (let k = 0; k < 10; k++) r(c, 3 + (k * 7) % 10, 6 + (k * 11) % 26, 1, 1, '#fff6d0'); }, 'dress' + i);
}
export function costumeRack(R: Builder, x: number, z: number, len = 4, seed = 0) {
  const g = new THREE.Group(); const m = lam({ color: 0x3a3a40 }); const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, len, 6), m); rod.rotation.z = Math.PI / 2; rod.position.y = 2.4; g.add(rod);
  for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 6), m); p.position.set(sx * len / 2, 1.2, 0); g.add(p); const f = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.8), m); f.position.set(sx * len / 2, 0.03, 0); g.add(f); }
  g.position.set(x, 0, z); R.room.group.add(g);
  const n = Math.floor(len / 0.45); for (let i = 0; i < n; i++) R.sprite(dressTex(seed + i), x - len / 2 + 0.3 + i * (len - 0.6) / Math.max(1, n - 1), z + (i % 2) * 0.12 - 0.06, { y: 0.4, scale: 1.05 + (i % 3) * 0.05 });
  R.collider(x - len / 2, z - 0.4, x + len / 2, z + 0.4); return g;
}
export const PROPTEX = {
  mannequin: () => canvasTex(14, 36, (c) => { r(c, 5, 0, 4, 5, '#d8c8b0'); r(c, 6, 5, 2, 2, '#c8b8a0'); r(c, 3, 7, 8, 12, '#e0d0b8'); r(c, 4, 19, 6, 4, '#c8b8a0'); r(c, 6, 23, 2, 10, '#3a2a1a'); r(c, 3, 33, 8, 3, '#3a2a1a'); r(c, 3, 9, 8, 1, '#a3122a'); }),
  hatbox: () => canvasTex(16, 18, (c) => { r(c, 1, 9, 14, 9, '#e8b0c0'); r(c, 0, 8, 16, 2, '#a3122a'); r(c, 2, 1, 12, 7, '#2a6a6a'); r(c, 1, 0, 14, 2, '#d4ae48'); r(c, 7, 9, 2, 9, '#fff0f8'); }),
  trunk: () => canvasTex(22, 14, (c) => { r(c, 0, 3, 22, 11, '#5a3a22'); r(c, 0, 0, 22, 4, '#6e4a2a'); r(c, 0, 3, 22, 1, '#d4ae48'); r(c, 4, 0, 2, 14, '#2a1a10'); r(c, 16, 0, 2, 14, '#2a1a10'); r(c, 10, 5, 2, 3, '#d4ae48'); for (let i = 0; i < 3; i++) r(c, 1 + i * 8, 9, 5, 3, ['#e8c36a', '#c86a8a', '#6aa0c8'][i]); }),
  feathers: () => canvasTex(16, 24, (c) => { for (let i = 0; i < 5; i++) { const x = 3 + i * 2.5; for (let y = 0; y < 18; y++) r(c, x + Math.sin(y / 4 + i) * 2, y, 2, 1, i % 2 ? '#f4ecd8' : '#e8d0e0'); } r(c, 4, 18, 8, 6, '#a3122a'); }),
  boa: () => canvasTex(28, 8, (c) => { for (let x = 0; x < 28; x++) r(c, x, 2 + Math.sin(x / 3) * 2, 1, 4, x % 2 ? '#ff9ad8' : '#ffc8e8'); }),
  stool: () => canvasTex(12, 14, (c) => { r(c, 0, 0, 12, 4, '#8e1830'); r(c, 1, 4, 2, 10, '#3a2a1a'); r(c, 9, 4, 2, 10, '#3a2a1a'); }),
  screen: () => canvasTex(36, 36, (c) => { for (let i = 0; i < 3; i++) { r(c, i * 12, 0, 11, 36, '#3a2a1a'); r(c, i * 12 + 1, 1, 9, 34, ['#c8a0a0', '#a0b8c8', '#c8c0a0'][i]); for (let k = 0; k < 6; k++) r(c, i * 12 + 2 + (k * 3) % 7, 4 + k * 5, 3, 2, 'rgba(120,40,40,.4)'); } }),
  sandbag: () => canvasTex(10, 10, (c) => { r(c, 1, 3, 8, 7, '#a08a6a'); r(c, 3, 0, 4, 3, '#8a7a5a'); r(c, 1, 5, 8, 1, '#6a5a4a'); }),
  coil: () => canvasTex(14, 8, (c) => { for (let i = 0; i < 4; i++) { c.strokeStyle = '#b8a070'; c.beginPath(); c.ellipse(7, 5, 6 - i, 2.5 - i * 0.4, 0, 0, 7); c.stroke(); } }),
  harp: () => canvasTex(16, 28, (c) => { c.strokeStyle = '#d4ae48'; c.lineWidth = 2; c.beginPath(); c.moveTo(3, 27); c.lineTo(3, 3); c.quadraticCurveTo(10, 0, 14, 8); c.lineTo(5, 26); c.stroke(); c.strokeStyle = '#f4ecd8'; c.lineWidth = 0.5; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(4 + i, 4 + i); c.lineTo(4 + i, 26 - i * 3); c.stroke(); } }),
  bar: () => canvasTex(40, 24, (c) => { r(c, 0, 10, 40, 14, '#4a2a1a'); r(c, 0, 9, 40, 2, '#d4ae48'); for (let i = 0; i < 8; i++) r(c, 2 + i * 5, 2, 3, 7, ['#2a6a3a', '#8a2a2a', '#d8c890', '#3a3a6a'][i % 4]); r(c, 2, 14, 36, 1, '#6a4a2a'); }),
  coats: () => canvasTex(40, 30, (c) => { r(c, 0, 0, 40, 2, '#86641c'); for (let i = 0; i < 7; i++) { const col = ['#2a2a32', '#5a3a2a', '#3a4a5a', '#6a2a2a', '#4a4a3a', '#2a3a2a', '#5a5a5a'][i]; r(c, 1 + i * 5.6, 2, 5, 26 - (i % 3) * 3, col); r(c, 2 + i * 5.6, 2, 1, 6, '#1a1a1a'); } }),
  kassa: () => canvasTex(36, 30, (c) => { r(c, 0, 12, 36, 18, '#4a2a1a'); r(c, 0, 11, 36, 2, '#d4ae48'); r(c, 4, 0, 28, 12, '#2a1a14'); r(c, 6, 2, 24, 9, '#c8b890'); ptext(c, 'КАССА', 18, 3, { size: 7, col: '#5a0c18', align: 'center' }); r(c, 14, 16, 8, 6, '#1a0e0a'); }),
};
export function piano(R: Builder, x: number, z: number, ry = 0) {
  const g = new THREE.Group(); const blk = lam({ color: 0x0c0a0c, emissive: 0x0a0808 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.3, 1.4), blk); body.position.y = 1.2; g.add(body);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.06, 1.4), blk); lid.position.set(0, 2.2, -0.35); lid.rotation.x = -0.55; g.add(lid);
  const keys = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.08, 0.4), lam({ map: canvasTex(36, 4, (c) => { r(c, 0, 0, 36, 4, '#f4f0e8'); for (let i = 0; i < 36; i++) if ([1, 3, 6, 8, 10].includes(i % 12)) r(c, i, 0, 1, 2, '#111'); }, 'keys') })); keys.position.set(0, 1.2, 0.85); g.add(keys);
  for (const sx of [-1, 1]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.6, 6), blk); leg.position.set(sx * 1.1, 0.3, 0.4); g.add(leg); }
  const cand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 6), gold()); cand.position.set(1, 2, 0.2); g.add(cand);
  g.position.set(x, 0, z); g.rotation.y = ry; R.room.group.add(g); R.collider(x - 1.4, z - 0.8, x + 1.4, z + 1.2); return g;
}
export function gear(R: Builder, x: number, y: number, z: number, rad = 1.5, o: { teeth?: number; speed?: number; axis?: 'x' | 'y' | 'z' } = {}) {
  const n = o.teeth || 16, s = new THREE.Shape();
  for (let i = 0; i < n * 2; i++) { const a = i / (n * 2) * Math.PI * 2, rr = i % 2 ? rad : rad * 0.85; const a2 = a + Math.PI / (n * 2); if (i === 0) s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); else s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); s.lineTo(Math.cos(a2) * rr, Math.sin(a2) * rr); }
  for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; const h = new THREE.Path(); h.absarc(Math.cos(a) * rad * 0.5, Math.sin(a) * rad * 0.5, rad * 0.16, 0, Math.PI * 2, true); s.holes.push(h); }
  const m = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: 0.25, bevelEnabled: false }), lam({ map: tex('metal'), color: 0xe8c080, emissive: 0x2a1a08 })); m.castShadow = true;
  const g = new THREE.Group(); g.add(m); m.position.z = -0.12; g.position.set(x, y, z); if (o.axis === 'y') g.rotation.x = -Math.PI / 2; if (o.axis === 'x') g.rotation.y = Math.PI / 2; R.room.group.add(g);
  const sp = o.speed ?? 0.2; R.onUpdate((dt) => { m.rotation.z += dt * sp; }); return g;
}
/** Высокое окно на задней стене со световым лучом и узором теней на полу (готический витраж). */
export function windowBeam(R: Builder, x: number, o: { col?: number; gothic?: boolean; floorZ?: number } = {}) {
  const col = o.col ?? 0xcfe0ff, z = -R.d / 2 + 0.04;
  const wt = canvasTex(24, 40, (c) => { r(c, 0, 0, 24, 40, '#1a140e'); c.fillStyle = '#9ab8e8'; c.beginPath(); c.moveTo(2, 40); c.lineTo(2, 12); c.quadraticCurveTo(12, -4, 22, 12); c.lineTo(22, 40); c.fill(); c.fillStyle = '#1a140e'; r(c, 11, 4, 2, 36, '#1a140e'); r(c, 2, 20, 20, 2, '#1a140e'); r(c, 2, 30, 20, 2, '#1a140e'); c.beginPath(); c.arc(12, 13, 4, 0, 7); c.strokeStyle = '#1a140e'; c.lineWidth = 2; c.stroke(); }, 'gothwin');
  R.decal(wt, { x, y: 4.2, z, w: 2.2, h: 3.6, glow: true, color: 0xb8c8e8 });
  R.spot(x, 6, z + 0.6, x + 1.6, o.floorZ ?? 2.5, col, 40, { angle: 0.28, cone: 0.09, pen: 0.3 });
  const pat = canvasTex(24, 40, (c) => { c.fillStyle = 'rgba(200,220,255,0.28)'; c.beginPath(); c.moveTo(2, 40); c.lineTo(2, 12); c.quadraticCurveTo(12, -4, 22, 12); c.lineTo(22, 40); c.fill(); c.fillStyle = 'rgba(0,0,0,0.5)'; r(c, 11, 4, 2, 36, 'rgba(0,0,0,0.4)'); r(c, 2, 20, 20, 2, 'rgba(0,0,0,0.4)'); r(c, 2, 30, 20, 2, 'rgba(0,0,0,0.4)'); }, 'gothpat');
  R.decal(pat, { flat: true, x: x + 1.4, z: o.floorZ ?? 2.2, y: 0.03, w: 3.2, h: 5, glow: true, opacity: 0.8 });
}
export function rug(R: Builder, x: number, z: number, w: number, d: number, o: { col?: string; border?: string } = {}) {
  const t = canvasTex(64, 40, (c) => { r(c, 0, 0, 64, 40, o.col || '#5a0c18'); c.strokeStyle = o.border || '#d4ae48'; c.lineWidth = 2; c.strokeRect(3, 3, 58, 34); c.lineWidth = 1; c.strokeRect(7, 7, 50, 26);
    for (let i = 0; i < 6; i++) { c.beginPath(); c.ellipse(32, 20, 4 + i * 4, 2 + i * 2.2, 0, 0, 7); c.strokeStyle = i % 2 ? (o.border || '#d4ae48') : '#2a0610'; c.stroke(); } for (let k = 0; k < 8; k++) r(c, 10 + k * 6, 8, 2, 2, o.border || '#d4ae48'); }, 'rug' + (o.col || '') + (o.border || ''));
  return R.decal(t, { flat: true, x, z, y: 0.025, w, h: d });
}
export function photoWall(R: Builder, x: number, y: number, n = 6, o: { z?: number } = {}) {
  for (let i = 0; i < n; i++) { const t = canvasTex(16, 20, (c) => { r(c, 0, 0, 16, 20, '#86641c'); r(c, 1, 1, 14, 18, '#2a2420'); r(c, 2, 2, 12, 14, '#c8b898'); r(c, 5 + (i % 3), 4, 5, 6, '#6a5a4a'); r(c, 4 + (i % 2), 10, 7, 6, '#5a4a3a'); }, 'pw' + (i % 5)); R.decal(t, { x: x + (i % 3) * 1.1 - 1.1, y: y + Math.floor(i / 3) * 1.25 + (i % 2) * 0.15, z: o.z, w: 0.8, h: 1 }); }
}
/** Ложа: балкон на боковой стене зала с золотым фасадом и бархатной драпировкой. */
export function theatreBox(R: Builder, x: number, z: number, side: 'w' | 'e', y = 3.4) {
  const s = side === 'w' ? -1 : 1; const g = new THREE.Group();
  const front = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.1, 3), lam({ map: tex('gold') })); front.position.set(-s * 0.9, 0.55, 0); g.add(front);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 3), lam({ map: tex('darkwood') })); floor.position.set(0, -0.1, 0); g.add(floor);
  const drape = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 3.2), lam({ map: tex('velvet') })); drape.position.set(-s * 0.9, 3, 0); g.add(drape);
  for (const dz of [-1.45, 1.45]) { const c = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.2, 0.25), lam({ map: tex('gold') })); c.position.set(-s * 0.9, 1.5, dz); g.add(c); }
  g.position.set(x, y, z); R.room.group.add(g); return g;
}
export function seatRows(R: Builder, z0: number, rows: number, o: { x0?: number; x1?: number; aisle?: number; dz?: number } = {}) {
  const x0 = o.x0 ?? -13, x1 = o.x1 ?? 13, aisle = o.aisle ?? 1.6, dz = o.dz ?? 1.6;
  const back = canvasTex(14, 18, (c) => { r(c, 1, 0, 12, 12, '#8e1830'); r(c, 2, 1, 10, 9, '#a82840'); r(c, 0, 0, 1, 18, '#86641c'); r(c, 13, 0, 1, 18, '#86641c'); r(c, 1, 12, 12, 4, '#721022'); }, 'seatback');
  const mat = lam({ map: back, alphaTest: 0.3, side: THREE.DoubleSide }); const geo = new THREE.PlaneGeometry(0.9, 1.15); geo.translate(0, 0.58, 0);
  let count = 0; const pos: number[][] = []; for (let r2 = 0; r2 < rows; r2++) for (let x = x0; x <= x1; x += 1.05) { if (Math.abs(x) < aisle / 2) continue; pos.push([x + (r2 % 2) * 0.3, z0 + r2 * dz]); count++; }
  const im = new THREE.InstancedMesh(geo, mat, count); const m4 = new THREE.Matrix4(); pos.forEach((p, i) => { m4.makeTranslation(p[0], 0.05 + (pos[i][1] - z0) * 0.12, p[1]); im.setMatrixAt(i, m4); }); im.castShadow = true; R.room.group.add(im);
  for (let r2 = 0; r2 < rows; r2++) { R.collider(x0 - 0.5, z0 + r2 * dz - 0.25, -aisle / 2, z0 + r2 * dz + 0.25); R.collider(aisle / 2, z0 + r2 * dz - 0.25, x1 + 0.5, z0 + r2 * dz + 0.25); }
  return im;
}
