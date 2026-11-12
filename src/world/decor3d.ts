// Объёмные элементы интерьера: резные двери, окна с откосами и шторами, зеркала, шкафы, книжные стеллажи,
// диваны, кресла, ширмы, гардероб, касса, барная стойка. Всё из примитивов с пиксельными текстурами.
import * as THREE from 'three';
import { tex, canvasTex, ptext } from '../gfx/tex';
import type { Builder } from './room';

const lam = (o: THREE.MeshLambertMaterialParameters) => new THREE.MeshLambertMaterial(o);
const M = { gold: () => lam({ map: tex('gold') }), wood: (c?: string) => lam({ map: tex('darkwood'), color: c || 0xffffff }), velvet: (c = 0xffffff) => lam({ map: tex('velvet'), color: c }) };
function box(g: THREE.Object3D, w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, cast = true) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = cast; b.receiveShadow = true; g.add(b); return b; }
const hexToNum = (h: string) => parseInt(h.replace('#', ''), 16);

/** Резная дверь: наличник с карнизом, полотно с филёнками, латунная ручка, табличка. Лицом к +Z. */
export function door3D(W: number, H: number, col: string, sign?: string, double = false, glow?: string) {
  const g = new THREE.Group(); const frame = M.wood(); const leafM = lam({ map: tex('wood'), color: hexToNum(col) | 0x202020 }); const gold = M.gold();
  box(g, W + 0.5, 0.3, 0.3, 0, H + 0.15, 0.12, frame); box(g, W + 0.8, 0.12, 0.38, 0, H + 0.36, 0.14, gold); box(g, W * 0.5, 0.35, 0.2, 0, H + 0.55, 0.1, frame);
  for (const sx of [-1, 1]) { box(g, 0.25, H, 0.3, sx * (W / 2 + 0.12), H / 2, 0.12, frame); box(g, 0.32, 0.3, 0.36, sx * (W / 2 + 0.12), 0.15, 0.14, frame); }
  const leaves = double ? [-1, 1] : [0]; const lw = double ? W / 2 - 0.02 : W - 0.04;
  for (const L of leaves) {
    const leaf = new THREE.Group(); leaf.name = 'leaf'; const hx = double ? L * lw : -lw / 2; leaf.position.set(double ? L * (W / 2 - 0.01) : -W / 2 + 0.02, 0, 0.04); g.add(leaf);
    const pivX = double ? -L * lw / 2 : lw / 2; // полотно строится от петли
    box(leaf, lw, H - 0.04, 0.1, pivX, H / 2, 0, leafM);
    for (const [py, ph] of [[H * 0.72, H * 0.36], [H * 0.27, H * 0.38]]) { box(leaf, lw - 0.3, ph, 0.05, pivX, py, 0.07, leafM); box(leaf, lw - 0.46, ph - 0.16, 0.05, pivX, py, 0.1, lam({ map: tex('wood'), color: (hexToNum(col) | 0x202020) })); }
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), gold); knob.position.set(double ? pivX - L * (lw / 2 - 0.15) : pivX + lw / 2 - 0.18, H * 0.48, 0.14); leaf.add(knob);
    void hx;
  }
  if (sign) { const cw = Math.max(48, Math.ceil(sign.length * 5.4 + 12)); const t = canvasTex(cw, 14, (c) => { c.fillStyle = '#e8d8b0'; c.fillRect(0, 0, cw, 14); c.strokeStyle = '#86641c'; c.strokeRect(0.5, 0.5, cw - 1, 13); ptext(c, sign, cw / 2, 3, { size: 8, col: '#3a1a14', align: 'center' }); }, 'dsign' + sign); const pw = Math.min(cw * 0.03, W + 1.4); const pl = new THREE.Mesh(new THREE.PlaneGeometry(pw, 0.42), lam({ map: t, emissive: 0x2a2010 })); pl.position.set(0, H + 0.15, 0.3); g.add(pl); }
  if (glow) { const l = new THREE.PointLight(hexToNum(glow), 3, 4, 1.6); l.position.set(0, H * 0.7, 0.8); g.add(l); }
  return g;
}
/** Анимация открывания: створки поворачиваются на петлях. */
export function swingDoor(g: THREE.Object3D) {
  const leaves = g.children.filter((c) => c.name === 'leaf'); if (!leaves.length) return; let t = 0;
  const step = () => { t += 1 / 60; const k = Math.min(1, t / 0.4); leaves.forEach((l, i) => { l.rotation.y = (leaves.length > 1 ? (i ? -1 : 1) : -1) * k * 1.2; }); if (k < 1) requestAnimationFrame(step); }; step();
}
/** Окно в стене: откосы, переплёт, подоконник, полупрозрачные шторы и тёплый/лунный свет. */
export function window3D(R: Builder, x: number, o: { wall?: 'n' | 'w' | 'e'; y?: number; w?: number; h?: number; night?: boolean; arch?: boolean; view?: string; curtains?: boolean } = {}) {
  const W = o.w || 2, H = o.h || 2.8, y = o.y ?? 3; const g = new THREE.Group(); const fr = M.wood(); const gold = M.gold();
  const viewTex = canvasTex(32, 44, (c) => { const gr = c.createLinearGradient(0, 0, 0, 44); if (o.night !== false) { gr.addColorStop(0, '#0c1430'); gr.addColorStop(1, '#2a3a6a'); } else { gr.addColorStop(0, '#6a9ad8'); gr.addColorStop(1, '#cfe0f0'); } c.fillStyle = gr; c.fillRect(0, 0, 32, 44); if (o.night !== false) { c.fillStyle = '#fff'; for (let i = 0; i < 14; i++) c.fillRect((i * 37) % 32, (i * 17) % 26, 1, 1); c.fillStyle = '#f0e8c8'; c.beginPath(); c.arc(24, 8, 3, 0, 7); c.fill(); } c.fillStyle = '#1a1830'; for (let i = 0; i < 8; i++) { const hh = 6 + (i * 7) % 12; c.fillRect(i * 4, 44 - hh, 4, hh); c.fillStyle = (i % 3) ? '#e8c060' : '#1a1830'; c.fillRect(i * 4 + 1, 44 - hh + 2, 1, 1); c.fillStyle = '#1a1830'; } }, 'winview' + (o.night !== false));
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: viewTex })); glass.position.set(0, 0, -0.18); g.add(glass);
  box(g, W + 0.3, 0.18, 0.4, 0, H / 2 + 0.05, 0, fr); box(g, W + 0.5, 0.12, 0.55, 0, -H / 2 - 0.06, 0.08, fr); box(g, W + 0.6, 0.06, 0.6, 0, -H / 2 - 0.14, 0.1, gold);
  for (const sx of [-1, 1]) box(g, 0.16, H + 0.2, 0.4, sx * (W / 2 + 0.06), 0, 0, fr);
  box(g, 0.08, H, 0.08, 0, 0, -0.12, fr); for (const yy of [-H / 6, H / 6 + 0.2]) box(g, W, 0.07, 0.08, 0, yy, -0.12, fr);
  if (o.arch !== false) { const a = new THREE.Mesh(new THREE.TorusGeometry(W / 2 + 0.06, 0.1, 6, 16, Math.PI), fr); a.position.set(0, H / 2 + 0.05, 0); g.add(a); const fan = new THREE.Mesh(new THREE.CircleGeometry(W / 2, 16, 0, Math.PI), new THREE.MeshBasicMaterial({ map: viewTex })); fan.position.set(0, H / 2 + 0.05, -0.18); g.add(fan); }
  if (o.curtains !== false) for (const sx of [-1, 1]) { const cg = new THREE.PlaneGeometry(0.9, H + 1.2, 8, 1); const pos = cg.attributes.position; for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 14) * 0.06); cg.computeVertexNormals(); const cm = new THREE.Mesh(cg, lam({ map: tex('velvet'), side: THREE.DoubleSide })); cm.position.set(sx * (W / 2 + 0.35), 0.1, 0.32); g.add(cm); const tie = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 4, 10), gold); tie.position.set(sx * (W / 2 + 0.35), -0.3, 0.4); g.add(tie); }
  box(g, W + 2.2, 0.1, 0.12, 0, H / 2 + 0.6, 0.38, gold);
  const wall = o.wall || 'n'; const s = wall === 'w' ? -1 : 1;
  if (wall === 'n') { const at = R.wallSlot('n', x, W + 2, y, H + 1.4, { fixed: true, obj: g }); g.position.set(at, y, -R.d / 2 + 0.2); }
  else { const at = R.wallSlot(wall, x, W + 2, y, H + 1.4, { fixed: true, obj: g }); g.position.set(s * (R.w / 2 - 0.2), y, at); g.rotation.y = -s * Math.PI / 2; }
  R.room.group.add(g);
  const l = new THREE.SpotLight(o.night !== false ? 0x8aa8e8 : 0xfff0d0, o.night !== false ? 14 : 30, 14, 0.5, 0.6, 1.2); const wp = new THREE.Vector3(0, 0.6, 0.5).applyEuler(g.rotation).add(g.position); l.position.copy(wp); const tgt = new THREE.Vector3(0, -y, 3.2).applyEuler(g.rotation).add(g.position); l.target.position.copy(tgt); R.room.group.add(l, l.target);
  return g;
}
/** Зеркало в золочёной раме, с объёмом и бликами. */
export function mirror3D(R: Builder, x: number, y: number, z: number, w: number, h: number, o: { bulbs?: boolean; ry?: number } = {}) {
  const g = new THREE.Group(); const gold = M.gold();
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: canvasTex(24, 32, (c) => { const gr = c.createLinearGradient(0, 0, 24, 32); gr.addColorStop(0, '#a89a90'); gr.addColorStop(0.5, '#5e524c'); gr.addColorStop(1, '#847468'); c.fillStyle = gr; c.fillRect(0, 0, 24, 32); c.fillStyle = 'rgba(255,240,220,.22)'; c.fillRect(3, 1, 2, 30); c.fillRect(7, 1, 1, 30); }, 'mirglass2'), metalness: 0.3, roughness: 0.25, emissive: 0x58504a, emissiveIntensity: 0.55 })); (glass.material as any).emissiveMap = (glass.material as any).map;
  glass.position.z = 0.03; g.add(glass);
  for (const [bw, bh, bx, by] of [[w + 0.3, 0.16, 0, h / 2 + 0.08], [w + 0.3, 0.16, 0, -h / 2 - 0.08], [0.16, h, -w / 2 - 0.08, 0], [0.16, h, w / 2 + 0.08, 0]]) box(g, bw, bh, 0.14, bx, by, 0.05, gold);
  const crest = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.05, 6, 12, Math.PI), gold); crest.position.set(0, h / 2 + 0.16, 0.06); g.add(crest);
  if (o.bulbs) { const bm = lam({ color: 0xfff4d8, emissive: 0xffc070 }); const n = Math.max(3, Math.round(h / 0.4)); for (const sx of [-1, 1]) for (let i = 0; i < n; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), bm); b.position.set(sx * (w / 2 + 0.08), -h / 2 + 0.2 + i * (h - 0.4) / (n - 1), 0.15); g.add(b); } R.light(x, y, z + 0.8, 0xffd9a0, 5, 6, { flicker: 0.04 }); }
  g.position.set(x, y, z); if (o.ry) g.rotation.y = o.ry; R.room.group.add(g); return g;
}
export function wardrobe(R: Builder, x: number, z: number, o: { w?: number; h?: number; col?: number; ry?: number } = {}) {
  const w = o.w || 1.8, h = o.h || 3.2, d = 0.9; const g = new THREE.Group(); const m = lam({ map: tex('darkwood'), color: o.col ?? 0xc89a70 }); const gold = M.gold();
  box(g, w, h, d, 0, h / 2, 0, m); box(g, w + 0.2, 0.18, d + 0.15, 0, h + 0.09, 0, m); box(g, w + 0.3, 0.06, d + 0.2, 0, h + 0.2, 0, lam({ color: 0xb08a3c })); box(g, w + 0.1, 0.15, d + 0.05, 0, 0.08, 0, m);
  for (const sx of [-1, 1]) { box(g, w / 2 - 0.15, h - 0.6, 0.04, sx * w / 4, h / 2, d / 2 + 0.01, lam({ map: tex('darkwood'), color: (o.col ?? 0xc89a70) - 0x101010 })); const k = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), gold); k.position.set(sx * 0.12, h / 2, d / 2 + 0.06); g.add(k); }
  g.position.set(x, 0, z); if (o.ry) g.rotation.y = o.ry; R.room.group.add(g); const hw = o.ry ? d / 2 : w / 2, hd = o.ry ? w / 2 : d / 2; R.collider(x - hw, z - hd, x + hw, z + hd); return g;
}
export function bookshelf(R: Builder, x: number, z: number, o: { w?: number; h?: number; shelves?: number; ry?: number } = {}) {
  const w = o.w || 2.4, h = o.h || 3.6, d = 0.6, n = o.shelves || 5; const g = new THREE.Group(); const m = M.wood();
  box(g, w, h, 0.06, 0, h / 2, -d / 2, m); for (const sx of [-1, 1]) box(g, 0.08, h, d, sx * w / 2, h / 2, 0, m); for (let i = 0; i <= n; i++) box(g, w, 0.07, d, 0, 0.1 + i * (h - 0.2) / n, 0, m, false);
  const cols = [0x8e1830, 0x2a4a3a, 0x3a3a6a, 0xb08a2c, 0x5a3a22, 0x6a2a4a, 0xd8c8a0]; const bm = lam({ color: 0xffffff }); const count = n * Math.floor(w / 0.09); const books = new THREE.InstancedMesh(new THREE.BoxGeometry(0.08, 1, d - 0.15), bm, count); const m4 = new THREE.Matrix4(), col = new THREE.Color(); let k = 0;
  for (let i = 0; i < n; i++) { let bx = -w / 2 + 0.1; while (bx < w / 2 - 0.15 && k < count) { const bh = 0.32 + ((k * 37) % 13) / 60, bw = 0.06 + ((k * 7) % 4) / 100; const lean = (k % 11 === 0) ? 0.25 : 0; m4.makeRotationZ(lean); m4.scale(new THREE.Vector3(bw / 0.08, bh, 1)); m4.setPosition(bx + bw / 2, 0.14 + i * (h - 0.2) / n + bh / 2, 0.02); books.setMatrixAt(k, m4); books.setColorAt(k, col.setHex(cols[(k * 3 + i) % cols.length])); bx += bw + 0.005 + ((k % 9 === 0) ? 0.12 : 0); k++; } }
  books.count = k; g.add(books); g.position.set(x, 0, z); if (o.ry) g.rotation.y = o.ry; R.room.group.add(g); const hw = o.ry ? d / 2 : w / 2, hd = o.ry ? w / 2 : d / 2; R.collider(x - hw, z - hd, x + hw, z + hd); return g;
}
export function sofa(R: Builder, x: number, z: number, o: { w?: number; col?: number; ry?: number; solid?: boolean } = {}) {
  const w = o.w || 2.8; const g = new THREE.Group(); const v = M.velvet(o.col ?? 0xffffff), wood = M.wood(), gold = M.gold();
  box(g, w, 0.45, 1.0, 0, 0.45, 0, v); box(g, w, 1.1, 0.25, 0, 0.95, -0.4, v); for (const sx of [-1, 1]) { box(g, 0.25, 0.75, 1.0, sx * (w / 2 - 0.12), 0.6, 0, v); const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.0, 10), v); roll.rotation.x = Math.PI / 2; roll.position.set(sx * (w / 2 - 0.12), 1.0, 0); g.add(roll); }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.03, 0.25, 6), gold); l.position.set(sx * (w / 2 - 0.15), 0.12, sz * 0.38); g.add(l); }
  for (let i = 0; i < Math.floor(w / 0.9); i++) box(g, 0.8, 0.12, 0.9, -w / 2 + 0.6 + i * 0.85, 0.72, 0.03, v); box(g, w, 0.05, 0.05, 0, 1.5, -0.4, gold); void wood;
  g.position.set(x, 0, z); if (o.ry) g.rotation.y = o.ry; R.room.group.add(g); if (o.solid !== false) { const hw = o.ry ? 0.5 : w / 2, hd = o.ry ? w / 2 : 0.5; R.collider(x - hw, z - hd, x + hw, z + hd); } return g;
}
export function armchair(R: Builder, x: number, z: number, o: { col?: number; ry?: number } = {}) {
  const g = new THREE.Group(); const v = M.velvet(o.col ?? 0xffffff), gold = M.gold(); box(g, 1, 0.4, 0.9, 0, 0.45, 0, v); box(g, 1, 1.0, 0.2, 0, 0.95, -0.35, v); for (const sx of [-1, 1]) box(g, 0.18, 0.55, 0.9, sx * 0.48, 0.65, 0, v); box(g, 1.1, 0.06, 0.08, 0, 1.47, -0.35, gold);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.26, 6), gold); l.position.set(sx * 0.4, 0.13, sz * 0.35); g.add(l); }
  g.position.set(x, 0, z); g.rotation.y = o.ry || 0; R.room.group.add(g); R.collider(x - 0.5, z - 0.45, x + 0.5, z + 0.45); return g;
}
export function screen3D(R: Builder, x: number, z: number, o: { ry?: number; col?: string } = {}) {
  const g = new THREE.Group(); const fr = M.wood(); const t = canvasTex(16, 32, (c) => { c.fillStyle = o.col || '#c8a888'; c.fillRect(0, 0, 16, 32); c.fillStyle = 'rgba(120,40,40,.45)'; for (let k = 0; k < 7; k++) { c.fillRect(3 + (k * 5) % 9, 3 + k * 4, 4, 2); c.fillRect(5 + (k * 3) % 7, 4 + k * 4, 1, 4); } }, 'scr' + (o.col || ''));
  for (let i = 0; i < 3; i++) { const p = new THREE.Group(); p.position.set((i - 1) * 0.72, 0, (i % 2) * 0.22); p.rotation.y = (i - 1) * 0.35; box(p, 0.7, 2.6, 0.05, 0, 1.4, 0, lam({ map: t })); box(p, 0.76, 0.08, 0.08, 0, 2.72, 0, fr); box(p, 0.76, 0.08, 0.08, 0, 0.08, 0, fr); for (const sx of [-1, 1]) box(p, 0.06, 2.72, 0.08, sx * 0.36, 1.36, 0, fr); g.add(p); }
  g.position.set(x, 0, z); g.rotation.y = o.ry || 0; R.room.group.add(g); R.collider(x - 1.1, z - 0.4, x + 1.1, z + 0.4); return g;
}
/** Вешалка-стойка с объёмными пальто, шляпой и шарфом. */
export function coatStand(R: Builder, x: number, z: number, cols = [0x2f2a3a, 0xc41e3a]) {
  const g = new THREE.Group(); const m = lam({ color: 0x2a1c14 }); const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 3, 8), m); pole.position.y = 1.5; g.add(pole);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.08, 12), m); base.position.y = 0.04; g.add(base);
  cols.forEach((c, i) => { const a = i * 2.1; const coat = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.32, 1.6, 8, 1, true), lam({ color: c, side: THREE.DoubleSide })); coat.position.set(Math.cos(a) * 0.22, 2.05, Math.sin(a) * 0.22); g.add(coat); });
  const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.25, 12), lam({ color: 0x1a1a1e })); hat.position.y = 3.05; g.add(hat); const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.03, 14), lam({ color: 0x1a1a1e })); brim.position.y = 2.93; g.add(brim);
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 0.35, z - 0.35, x + 0.35, z + 0.35); return g;
}
/** Касса: деревянная будка с окошком, вывеской и латунной решёткой. */
export function ticketBooth(R: Builder, x: number, z: number, ry = 0) {
  const g = new THREE.Group(); const wood = M.wood(), gold = M.gold(), v = M.velvet();
  box(g, 3, 1.2, 1.4, 0, 0.6, 0, wood); box(g, 3.2, 0.1, 1.6, 0, 1.25, 0.05, gold); box(g, 3, 1.8, 0.12, 0, 2.2, -0.6, wood); for (const sx of [-1, 1]) box(g, 0.15, 1.8, 1.4, sx * 1.42, 2.2, 0, wood);
  box(g, 3.4, 0.3, 1.7, 0, 3.25, 0, wood); box(g, 3.5, 0.08, 1.8, 0, 3.42, 0, gold);
  const grill = new THREE.Group(); for (let i = 0; i < 9; i++) box(grill, 0.03, 1.4, 0.03, -1.2 + i * 0.3, 2.0, 0.65, gold, false); g.add(grill); box(g, 0.9, 0.5, 0.04, 0, 1.55, 0.67, lam({ color: 0x1a0e0a }));
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.5), lam({ map: canvasTex(64, 12, (c) => { c.fillStyle = '#5a0c18'; c.fillRect(0, 0, 64, 12); ptext(c, 'К А С С А', 32, 2, { size: 8, col: '#f0d478', align: 'center' }); }, 'kassa3d') })); sign.position.set(0, 3.25, 0.87); g.add(sign);
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), gold); bell.position.set(0.9, 1.3, 0.4); g.add(bell); void v;
  g.position.set(x, 0, z); g.rotation.y = ry; R.room.group.add(g); R.collider(x - 1.6, z - 0.8, x + 1.6, z + 0.8); return g;
}
/** Гардероб: стойка с номерками и ряды объёмных пальто на штангах. */
export function cloakroom(R: Builder, x: number, z: number, w = 6) {
  const g = new THREE.Group(); const wood = M.wood(), gold = M.gold();
  box(g, w, 1.15, 0.7, 0, 0.58, 0.9, wood); box(g, w + 0.2, 0.08, 0.9, 0, 1.2, 0.9, gold);
  for (const rz of [-0.4, -1.3]) { box(g, w - 0.4, 0.05, 0.05, 0, 2.6, rz, gold, false); const n = Math.floor((w - 0.6) / 0.32); const coats = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 1.5, 0.55), lam({ color: 0xffffff }), n); const m4 = new THREE.Matrix4(), col = new THREE.Color(); const cs = [0x2a2a32, 0x5a3a2a, 0x3a4a5a, 0x6a2a2a, 0x4a4a3a, 0x1e2a1e, 0x5a5a5a, 0x7a5a3a]; for (let i = 0; i < n; i++) { m4.makeTranslation(-w / 2 + 0.45 + i * 0.32, 1.85 - (i % 3) * 0.08, rz); coats.setMatrixAt(i, m4); coats.setColorAt(i, col.setHex(cs[(i * 5 + (rz < -1 ? 3 : 0)) % cs.length])); } g.add(coats); }
  const tags = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.6, 0.6), lam({ map: canvasTex(64, 8, (c) => { c.fillStyle = '#3a2414'; c.fillRect(0, 0, 64, 8); for (let i = 0; i < 16; i++) { c.fillStyle = '#d4ae48'; c.fillRect(2 + i * 4, 2, 2, 4); } }, 'tags'), transparent: true })); tags.position.set(0, 3.2, -1.6); g.add(tags);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.45), lam({ map: canvasTex(64, 12, (c) => { c.fillStyle = '#2a1408'; c.fillRect(0, 0, 64, 12); ptext(c, 'ГАРДЕРОБ', 32, 2, { size: 8, col: '#f0d478', align: 'center' }); }, 'gardsign') })); sign.position.set(0, 1.62, 1.27); sign.rotation.x = -0.2; g.add(sign);
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - w / 2, z - 1.8, x + w / 2, z + 1.25); return g;
}
/** Барная стойка с полками бутылок, зеркалом и латунной штангой. */
export function barCounter(R: Builder, x: number, z: number, w = 7) {
  const g = new THREE.Group(); const wood = M.wood(), gold = M.gold();
  box(g, w, 1.2, 0.9, 0, 0.6, 1.1, wood); box(g, w + 0.2, 0.1, 1.1, 0, 1.25, 1.1, lam({ map: tex('stone'), color: 0xd8c8b8 })); const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, w, 6), gold); rail.rotation.z = Math.PI / 2; rail.position.set(0, 0.25, 1.62); g.add(rail);
  for (let i = 0; i < 3; i++) box(g, w - 0.6, 0.06, 0.4, 0, 1.6 + i * 0.7, -0.9, wood);
  const n = Math.floor((w - 0.8) / 0.22) * 3; const bot = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.07, 0.42, 6), lam({ color: 0xffffff, transparent: true, opacity: 0.9 }), n); const m4 = new THREE.Matrix4(), col = new THREE.Color(); const cs = [0x2a6a3a, 0x8a2a2a, 0xd8c890, 0x3a3a6a, 0xb07a2a, 0xe8e0d0];
  for (let i = 0; i < n; i++) { const row = i % 3, k = Math.floor(i / 3); m4.makeTranslation(-w / 2 + 0.5 + k * 0.22, 1.85 + row * 0.7, -0.9); bot.setMatrixAt(i, m4); bot.setColorAt(i, col.setHex(cs[(i * 7) % cs.length])); } g.add(bot);
  const mir = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.8, 2.2), new THREE.MeshStandardMaterial({ color: 0x3a2a24, metalness: 0.8, roughness: 0.2 })); mir.position.set(0, 2.5, -1.12); g.add(mir);
  // на стойке: самовар, кассовый аппарат, витрины-колпаки с пирожными, ряд бокалов
  const glassM = lam({ color: 0xe8f4ff, transparent: true, opacity: 0.45 }); const T = 1.3, FZ = 1.15;
  const sam = new THREE.Group(); sam.position.set(-w / 2 + 0.8, T, FZ); const sb = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.55, 12), gold); sb.position.y = 0.42; sam.add(sb); const sf = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.15, 10), gold); sf.position.y = 0.08; sam.add(sf); const st = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), gold); st.position.y = 0.78; sam.add(st); box(sam, 0.18, 0.04, 0.04, 0.3, 0.3, 0, gold); g.add(sam);
  const till = new THREE.Group(); till.position.set(w / 2 - 0.9, T, FZ); box(till, 0.6, 0.3, 0.45, 0, 0.15, 0, lam({ color: 0x5a4a3a })); box(till, 0.5, 0.22, 0.06, 0, 0.42, -0.12, gold); box(till, 0.4, 0.06, 0.3, 0, 0.32, 0.05, lam({ color: 0xd8d0c0 })); g.add(till);
  for (const cx of [-w / 4, w / 4 - 0.4]) { const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 14), lam({ color: 0xf4f0e8 })); pl.position.set(cx, T + 0.02, FZ); g.add(pl); for (let k = 0; k < 3; k++) { const ck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.12, 8), lam({ color: [0xd86a8a, 0x8a5a3a, 0xf0e0a0][k] })); ck.position.set(cx - 0.14 + k * 0.14, T + 0.1, FZ + (k % 2) * 0.08); g.add(ck); } const dome = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), glassM); dome.position.set(cx, T + 0.04, FZ); g.add(dome); }
  for (let k = 0; k < 8; k++) { const gl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.02, 0.22, 8), glassM); gl.position.set(-0.9 + k * 0.24, T + 0.11, FZ - 0.25); g.add(gl); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - w / 2, z + 0.6, x + w / 2, z + 1.6); R.collider(x - w / 2, z - 1.2, x + w / 2, z - 0.6); return g;
}
export function cafeTable(R: Builder, x: number, z: number) {
  const g = new THREE.Group(); const gold = M.gold(); const top = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.06, 16), lam({ map: tex('stone'), color: 0xe8dcd0 })); top.position.y = 1.0; g.add(top);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 8), gold); leg.position.y = 0.5; g.add(leg); const ft = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.05, 12), gold); ft.position.y = 0.03; g.add(ft);
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.1, 8), lam({ color: 0xf4f0e8 })); cup.position.set(0.15, 1.08, 0.1); g.add(cup); const gl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.02, 0.2, 8), lam({ color: 0xe8f0f8, transparent: true, opacity: 0.6 })); gl.position.set(-0.2, 1.13, -0.05); g.add(gl);
  for (const a of [0, Math.PI]) { const ch = new THREE.Group(); ch.position.set(Math.cos(a) * 0.85, 0, Math.sin(a) * 0.85); ch.rotation.y = -a + Math.PI / 2; box(ch, 0.5, 0.06, 0.5, 0, 0.6, 0, M.velvet()); box(ch, 0.5, 0.6, 0.05, 0, 0.9, -0.24, gold); for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(ch, 0.04, 0.6, 0.04, sx * 0.22, 0.3, sz * 0.22, gold); g.add(ch); }
  const sd = Math.abs(Math.round(x * 3 + z * 7)) % 3; // разные столики: цветы, меню, свеча
  if (sd === 0) { const v = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.22, 8), lam({ color: 0xc8e0f0, transparent: true, opacity: 0.7 })); v.position.set(0, 1.14, -0.1); g.add(v); for (let k = 0; k < 3; k++) { const fl = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), lam({ color: [0xc41e3a, 0xf0e0f0, 0xe8a0b8][k] })); fl.position.set(-0.05 + k * 0.05, 1.3 + (k % 2) * 0.05, -0.1); g.add(fl); } }
  else if (sd === 1) { const mn = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.03), lam({ color: 0x8e1830 })); mn.position.set(0, 1.17, -0.15); mn.rotation.x = -0.25; g.add(mn); }
  else { const cd = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 6), lam({ color: 0xf4ecd8, emissive: 0x403020 })); cd.position.set(0, 1.12, -0.1); g.add(cd); const fl = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffd080 })); fl.position.set(0, 1.24, -0.1); g.add(fl); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 1.1, z - 0.6, x + 1.1, z + 0.6); return g;
}
/** Мраморная статуя на постаменте (силуэт из примитивов). */
export function statue(R: Builder, x: number, z: number, o: { pose?: 'muse' | 'mask' } = {}) {
  const g = new THREE.Group(); const marble = lam({ map: tex('white'), color: 0xf0e8e0 });
  box(g, 1.1, 1.2, 1.1, 0, 0.6, 0, lam({ map: tex('stone'), color: 0xc8c0b8 })); box(g, 1.3, 0.15, 1.3, 0, 1.25, 0, marble);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.42, 1.8, 10), marble); body.position.y = 2.2; g.add(body); const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), marble); head.position.y = 3.3; g.add(head);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.9, 6), marble); arm.position.set(0.3, 2.9, 0.1); arm.rotation.z = -0.9; g.add(arm);
  if (o.pose === 'mask') { const mk = new THREE.Mesh(new THREE.CircleGeometry(0.16, 10), marble); mk.position.set(0.65, 3.25, 0.15); g.add(mk); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 0.6, z - 0.6, x + 0.6, z + 0.6); return g;
}
export function palm(R: Builder, x: number, z: number) {
  const g = new THREE.Group(); const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.8, 12), lam({ map: tex('gold') })); pot.position.y = 0.4; g.add(pot);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 1.6, 6), lam({ color: 0x6a4a2a })); trunk.position.y = 1.6; g.add(trunk); const leafM = lam({ color: 0x3a6a3a, side: THREE.DoubleSide });
  for (let i = 0; i < 8; i++) { const lf = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 1.4), leafM); lf.position.set(0, 2.4, 0); lf.rotation.set(0.9, i * 0.8, 0); lf.translateY(0.6); g.add(lf); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 0.4, z - 0.4, x + 0.4, z + 0.4); return g;
}
/** Письменный стол руководителя: тумбы, сукно, лампа, стопки бумаг. */
export function desk(R: Builder, x: number, z: number, w = 3.2) {
  const g = new THREE.Group(); const wood = lam({ map: tex('darkwood'), color: 0xd0a070 }), gold = M.gold();
  box(g, w, 0.12, 1.5, 0, 1.12, 0, wood); box(g, w - 0.6, 0.02, 1.1, 0, 1.19, 0, lam({ color: 0x2e5038 }));
  for (const sx of [-1, 1]) { box(g, 0.9, 1.06, 1.4, sx * (w / 2 - 0.5), 0.53, 0, wood); for (let k = 0; k < 3; k++) { box(g, 0.75, 0.28, 0.03, sx * (w / 2 - 0.5), 0.2 + k * 0.33, 0.71, wood); const kn = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), gold); kn.position.set(sx * (w / 2 - 0.5), 0.2 + k * 0.33, 0.75); g.add(kn); } }
  box(g, w - 1.8, 0.5, 0.04, 0, 0.8, -0.65, wood);
  const lampG = new THREE.Group(); lampG.position.set(w / 2 - 0.4, 1.18, -0.35); const st = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.12, 0.5, 8), gold); st.position.y = 0.25; lampG.add(st); const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.28, 0.25, 12, 1, true), lam({ color: 0x2e6a48, emissive: 0x0a2a14, side: THREE.DoubleSide })); sh.position.y = 0.55; lampG.add(sh); g.add(lampG);
  const paper = lam({ color: 0xf0e6d0 }); for (let i = 0; i < 9; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.012, 0.56), paper); p.position.set(-w / 2 + 0.5 + (i % 3) * 0.55, 1.2 + Math.floor(i / 3) * 0.02 + (i % 4) * 0.012, -0.1 + ((i * 7) % 5) * 0.06); p.rotation.y = ((i * 13) % 9 - 4) * 0.08; g.add(p); }
  const ink = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.1, 8), lam({ color: 0x1a1a2a })); ink.position.set(0.2, 1.24, -0.35); g.add(ink); const quill = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.45), lam({ color: 0xf4f0e8, side: THREE.DoubleSide })); quill.position.set(0.25, 1.45, -0.35); quill.rotation.z = -0.4; g.add(quill);
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - w / 2, z - 0.75, x + w / 2, z + 0.75); R.light(x + w / 2 - 0.4, 1.6, z, 0xffe0a0, 5, 5); return g;
}
/** Пробковая доска с записками, фотографиями и нитками. */
export function corkBoard(R: Builder, x: number, y: number, w: number, h: number, seed = 0, o: { z?: number; wall?: 'w' | 'e'; at?: number } = {}) {
  const t = canvasTex(64, 44, (c) => {
    c.fillStyle = '#5a4029'; c.fillRect(0, 0, 64, 44); c.fillStyle = '#b08a5a'; c.fillRect(2, 2, 60, 40); for (let i = 0; i < 120; i++) { c.fillStyle = 'rgba(90,60,30,.35)'; c.fillRect((i * 37 + seed) % 60 + 2, (i * 23) % 40 + 2, 1, 1); }
    const notes = [['#f4ecd4', 0], ['#fff8a0', 1], ['#f8d0d8', 2], ['#d8f0f8', 3], ['#ffffff', 4], ['#f4ecd4', 5]];
    notes.forEach(([col, i], k) => { const nx = 4 + (k % 3) * 20 + ((seed + k) % 3), ny = 4 + Math.floor(k / 3) * 19 + ((seed * 3 + k) % 3); c.fillStyle = col as string; c.fillRect(nx, ny, 16, 15); c.fillStyle = '#3a2a5a'; for (let l = 0; l < 4; l++) c.fillRect(nx + 2, ny + 4 + l * 3, 8 + ((k + l + seed) % 5), 1); c.fillStyle = ['#c41e3a', '#2a6ad0', '#2a8a3a'][k % 3]; c.fillRect(nx + 7, ny + 1, 2, 2); if (k === 4) { c.fillStyle = '#6a5a4a'; c.fillRect(nx + 2, ny + 3, 12, 9); c.fillStyle = '#c8b8a0'; c.fillRect(nx + 6, ny + 5, 4, 5); } });
    c.strokeStyle = '#c41e3a'; c.beginPath(); c.moveTo(12, 6); c.lineTo(32, 26); c.lineTo(52, 8); c.stroke();
  }, 'cork' + seed);
  return R.decal(t, { x, y, w, h, z: o.z, wall: o.wall, at: o.at });
}
