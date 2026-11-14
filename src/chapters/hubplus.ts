// Здание театра: фойе с парадной лестницей, бельэтаж с ложами, репетиционный зал, костюмерная, трюм под сценой.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { T } from '../data/dialogue/theater';
import { witness } from './casework';
import { D } from '../data/dialogue/hub';
import { column, chandelier, sconce, balustrade, rug, PROPTEX, piano, gear, windowBeam, photoWall, costumeRack, vanity, theatreBox } from '../world/decor';
import { mirror3D, window3D, wardrobe, bookshelf, sofa, armchair, screen3D, coatStand, desk, corkBoard, statue, palm, ticketBooth, cloakroom, barCounter, cafeTable } from '../world/decor3d';
import { tex } from '../gfx/tex';

// ---------- локальный набор стилизованных (пиксель-арт) предметов для театра ----------
type DC = CanvasRenderingContext2D;
export const rr = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
export const hsh = (i: number) => { const s = Math.sin(i * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
/** Чёткая альфа: сглаженные края путей превращаются в пиксельные. */
export function crisp(c: DC, w: number, h: number) { const d = c.getImageData(0, 0, w, h); for (let i = 3; i < d.data.length; i += 4) d.data[i] = d.data[i] > 110 ? 255 : 0; c.putImageData(d, 0, 0); }
export const pxTex = (w: number, h: number, draw: (c: DC, w: number, h: number) => void, key: string) => canvasTex(w, h, draw, 'px_' + key);
/** Плоский слой-задник (MeshBasic, без света): для панорам, отражений, далёких силуэтов. */
export function layer(R: Builder, t: THREE.Texture, x: number, y: number, z: number, w: number, h: number, o: { add?: boolean; flat?: boolean; opacity?: number; color?: number; ry?: number; fog?: boolean } = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, alphaTest: o.add ? 0 : 0.05, depthWrite: !o.add, opacity: o.opacity ?? 1, color: o.color ?? 0xffffff, blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending, fog: o.fog ?? false }));
  m.position.set(x, y, z); if (o.flat) m.rotation.x = -Math.PI / 2; if (o.ry) m.rotation.y = o.ry; R.room.group.add(m); return m;
}
/** Горшечная пальма-кентия (спрайт). */
export const palmTex = () => pxTex(30, 54, (c) => {
  const lf = ['#173a24', '#22502e', '#2f6a3a', '#3f8448', '#5aa25a'];
  for (let i = 0; i < 9; i++) { const a = -2.6 + i * 0.4 + (i % 2) * 0.12, L = 13 + (i % 3) * 3; for (let k = 0; k < L; k++) { const t = k / L, x = 15 + Math.cos(a) * k * 1.05, y = 24 + Math.sin(a) * k * 0.95 + t * t * 9; rr(c, x, y, 2, 1, lf[Math.min(4, 1 + ((i + k) % 4))]); if (k % 2 === 0 && k > 2) { rr(c, x - 1, y + 1, 1, 2, lf[i % 2]); rr(c, x + 2, y + 1, 1, 2, lf[1 + (i % 2)]); } } }
  rr(c, 14, 22, 2, 18, '#5a3a20'); rr(c, 15, 22, 1, 18, '#7a5a32');
  rr(c, 7, 38, 16, 2, '#e8d8b0'); rr(c, 8, 40, 14, 13, '#c8a870'); rr(c, 8, 40, 4, 13, '#e0c890'); rr(c, 18, 40, 4, 13, '#8a6a3a'); rr(c, 9, 52, 12, 2, '#5a4020'); rr(c, 8, 44, 14, 1, '#a08050');
}, 'palm');
export function pPalm(R: Builder, x: number, z: number, s = 0.85) { R.sprite(palmTex(), x, z, { scale: s }); R.collider(x - 0.45, z - 0.35, x + 0.45, z + 0.35); }
/** Связка воздушных шаров с нитками. */
export const balloonTex = (seed = 0) => pxTex(26, 60, (c) => {
  const cols = [['#c41e3a', '#e8506a', '#7a0e22'], ['#f0d0e0', '#fff4fa', '#c898b0'], ['#e8c36a', '#fff0a8', '#a8822a'], ['#5fa8d8', '#a8d8f8', '#2a6a98']];
  const pos = [[7, 8], [17, 6], [12, 17], [20, 18]];
  pos.forEach(([x, y], i) => { const [b, h, d] = cols[(i + seed) % 4]; c.strokeStyle = '#d8d0c8'; c.beginPath(); c.moveTo(x + 0.5, y + 8); c.quadraticCurveTo(x + 2 - i, y + 30, 13.5, 58); c.stroke(); c.fillStyle = d; c.beginPath(); c.ellipse(x, y, 5, 6.5, 0, 0, 7); c.fill(); c.fillStyle = b; c.beginPath(); c.ellipse(x - 0.6, y - 0.6, 4.2, 5.6, 0, 0, 7); c.fill(); rr(c, x - 3, y - 4, 2, 2, h); rr(c, x - 3, y - 2, 1, 1, h); rr(c, x - 1, y + 6, 2, 2, d); });
  crisp(c, 26, 60);
}, 'balloon' + seed);
/** Подарок с бантом. */
export const giftTex = (body = '#2f7f82', rib = '#e8c36a') => pxTex(18, 17, (c) => {
  rr(c, 1, 6, 16, 11, body); rr(c, 1, 6, 4, 11, 'rgba(255,255,255,.18)'); rr(c, 13, 6, 4, 11, 'rgba(0,0,0,.25)'); rr(c, 0, 4, 18, 3, body); rr(c, 0, 4, 18, 1, 'rgba(255,255,255,.3)');
  rr(c, 8, 4, 2, 13, rib); rr(c, 0, 9, 18, 2, rib); rr(c, 3, 0, 5, 4, rib); rr(c, 10, 0, 5, 4, rib); rr(c, 5, 1, 2, 2, body); rr(c, 11, 1, 2, 2, body); rr(c, 8, 3, 2, 2, '#fff0b0'); rr(c, 1, 16, 16, 1, 'rgba(0,0,0,.35)');
}, 'gift' + body);
/** Кафе-столик с двумя стульями (вид спереди). */
export const bistroTex = (top = '#e8e0d4', seat = '#8e1830') => pxTex(44, 26, (c) => {
  for (const sx of [0, 32]) { rr(c, sx + 2, 0, 9, 3, '#b08a2c'); rr(c, sx + 2, 0, 1, 18, '#86641c'); rr(c, sx + 10, 0, 1, 18, '#86641c'); for (let k = 0; k < 3; k++) rr(c, sx + 3 + k * 3, 2, 1, 9, '#b08a2c'); rr(c, sx + 1, 12, 11, 3, seat); rr(c, sx + 1, 12, 11, 1, 'rgba(255,255,255,.25)'); rr(c, sx + 2, 15, 1, 11, '#86641c'); rr(c, sx + 10, 15, 1, 11, '#86641c'); }
  rr(c, 12, 9, 20, 3, top); rr(c, 12, 9, 20, 1, '#fffaf0'); rr(c, 12, 11, 20, 1, '#9a9088'); rr(c, 21, 12, 2, 12, '#3a3a40'); rr(c, 17, 24, 10, 2, '#3a3a40');
  rr(c, 15, 6, 2, 3, '#f4f0e8'); rr(c, 17, 7, 1, 1, '#f4f0e8'); rr(c, 26, 4, 2, 5, '#d8ecff'); rr(c, 26, 4, 2, 2, '#e84a6f'); rr(c, 21, 5, 2, 4, '#e8e0c8'); rr(c, 21, 4, 2, 1, '#ffd060');
}, 'bistro' + top + seat);
/** Колонна: коробка с нарисованными каннелюрами и светотенью + золотые база и капитель. */
export function pColumn(R: Builder, x: number, z: number, h: number, o: { w?: number; tint?: string; light?: string; collide?: boolean } = {}) {
  const w = o.w || 0.9, base = o.tint || '#d8c8b4', hi = o.light || '#f4ead8';
  const t = pxTex(16, 32, (c) => { rr(c, 0, 0, 16, 32, base); rr(c, 2, 0, 5, 32, hi); rr(c, 11, 0, 3, 32, 'rgba(60,40,30,.28)'); rr(c, 14, 0, 2, 32, 'rgba(40,24,20,.45)'); for (let i = 1; i < 16; i += 3) rr(c, i, 0, 1, 32, 'rgba(90,60,40,.22)'); for (let y = 0; y < 32; y += 2) if (hsh(y) > 0.7) rr(c, 3 + (y % 5), y, 1, 1, 'rgba(255,255,255,.4)'); }, 'col' + base);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, Math.max(1, Math.round(h / 2.2)));
  const g = new THREE.Group(); const sh = new THREE.Mesh(new THREE.BoxGeometry(w, h - 1, w), new THREE.MeshLambertMaterial({ map: t })); sh.position.y = h / 2; sh.castShadow = true; g.add(sh);
  const gm = new THREE.MeshLambertMaterial({ map: tex('gold') }), sm = new THREE.MeshLambertMaterial({ map: tex('stone'), color: 0xd8ccc0 });
  for (const [y, s, hh, m] of [[0.2, 1.45, 0.4, sm], [0.5, 1.25, 0.2, gm], [h - 0.55, 1.25, 0.2, gm], [h - 0.25, 1.55, 0.5, gm]] as [number, number, number, THREE.Material][]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w * s, hh, w * s), m); b.position.y = y; b.castShadow = true; g.add(b); }
  g.position.set(x, 0, z); R.room.group.add(g); if (o.collide !== false) R.collider(x - w * 0.7, z - w * 0.7, x + w * 0.7, z + w * 0.7); return g;
}
/** Мраморная статуя-спрайт на каменном постаменте. */
export const statueTex = (pose = 0) => pxTex(22, 40, (c) => {
  const m = ['#8a8078', '#b0a69c', '#d0c8be', '#ece6dc', '#fffaf2'];
  rr(c, 8, 2, 6, 7, m[2]); rr(c, 8, 2, 3, 5, m[3]); rr(c, 9, 1, 4, 2, m[1]); rr(c, 7, 2, 2, 4, m[1]); rr(c, 12, 5, 1, 1, m[0]);
  rr(c, 9, 9, 4, 2, m[1]); rr(c, 6, 11, 10, 9, m[2]); rr(c, 6, 11, 4, 9, m[3]); rr(c, 14, 11, 2, 9, m[1]);
  rr(c, 5, 20, 12, 18, m[2]); rr(c, 5, 20, 4, 18, m[3]); rr(c, 14, 20, 3, 18, m[1]); for (let k = 0; k < 4; k++) rr(c, 7 + k * 3, 22, 1, 16, m[1]); rr(c, 4, 37, 14, 3, m[1]);
  if (pose) { rr(c, 15, 6, 2, 7, m[2]); rr(c, 16, 3, 5, 5, m[3]); rr(c, 17, 4, 1, 1, m[0]); rr(c, 19, 4, 1, 1, m[0]); rr(c, 4, 12, 2, 10, m[2]); }
  else { rr(c, 3, 7, 2, 8, m[2]); rr(c, 2, 5, 3, 3, m[3]); rr(c, 16, 12, 2, 10, m[1]); rr(c, 4, 14, 3, 6, m[2]); }
}, 'statue' + pose);
export function pStatue(R: Builder, x: number, z: number, pose = 0) {
  R.box(x, z, 1.2, 1.2, 1.3, { tex: 'stone', tint: '#c8bcb0' }); R.box(x, z, 1.4, 1.4, 0.16, { tex: 'gold', y: 1.3, solid: false });
  R.sprite(statueTex(pose), x, z + 0.1, { y: 1.46, scale: 1.4 });
}
/** Мраморный пол «шахматкой»: кремовый и бордовый мрамор с прожилками, мягкий контраст. */
export function marbleFloor(R: Builder, o: any = {}, tile = 1.5, a = '#d8c8a8', b = '#7a3036') {
  const t = pxTex(32, 32, (c) => { const sh = (hex: string, k: number) => { const n = parseInt(hex.slice(1), 16); const f = (v: number) => Math.max(0, Math.min(255, Math.round(v * k))); return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`; };
    for (let ty = 0; ty < 2; ty++) for (let tx = 0; tx < 2; tx++) { const col = (tx + ty) % 2 ? b : a; for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const n = hsh(tx * 31 + ty * 17 + x * 0.37 + y * 1.71); const vein = Math.abs(Math.sin((x + y * 0.6 + tx * 5) * 0.55 + Math.sin(y * 0.4 + ty) * 2)) < 0.12; rr(c, tx * 16 + x, ty * 16 + y, 1, 1, sh(col, vein ? 1.18 : 0.9 + n * 0.16 + (((x + y) & 1) ? 0.02 : -0.02))); }
      rr(c, tx * 16, ty * 16, 16, 1, 'rgba(60,30,20,.35)'); rr(c, tx * 16, ty * 16, 1, 16, 'rgba(60,30,20,.35)'); rr(c, tx * 16 + 1, ty * 16 + 1, 14, 1, 'rgba(255,250,235,.15)'); } }, 'marble' + a + b);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1 / (tile * 2), 1 / (tile * 2));
  const m = R.floor('checker', o); const mat = m.material as THREE.MeshLambertMaterial; mat.map = t; mat.needsUpdate = true; return m;
}
/** Бархатная банкетка-диван анфас (спрайт): спинка с каретной стяжкой, золотые ножки и кант. */
export const settleTex = (col = '#8e1830', hi = '#b83a50', dk = '#5a0c18') => pxTex(48, 26, (c) => {
  rr(c, 3, 2, 42, 13, dk); rr(c, 5, 0, 38, 3, dk); rr(c, 5, 2, 38, 11, col); rr(c, 5, 2, 38, 2, hi); for (let x = 9; x < 42; x += 6) for (let y = 5; y < 13; y += 4) { rr(c, x + ((y / 4) % 2) * 3, y, 1, 1, dk); rr(c, x + ((y / 4) % 2) * 3 - 1, y - 1, 1, 1, hi); }
  rr(c, 4, 0, 40, 1, '#d4ae48'); rr(c, 0, 9, 6, 12, col); rr(c, 42, 9, 6, 12, dk); rr(c, 0, 9, 6, 2, hi); rr(c, 42, 9, 6, 2, col); rr(c, 4, 14, 40, 7, col); rr(c, 4, 14, 40, 2, hi); rr(c, 4, 20, 40, 1, dk); rr(c, 0, 21, 48, 1, '#86641c');
  for (const x of [2, 22, 44]) { rr(c, x, 22, 2, 4, '#b08a2c'); rr(c, x, 22, 1, 4, '#f0d478'); }
}, 'settle' + col);
/** Шестерня-«картонка»: латунный обод с зубьями, спицы, тёмные провалы, блики на кромке; вращается. */
export function pGear(R: Builder, x: number, y: number, z: number, rad = 1.5, o: { teeth?: number; speed?: number; tone?: number } = {}) {
  const n = o.teeth || 16, tone = o.tone ?? 0;
  const t = pxTex(64, 64, (c) => { const pal = tone ? ['#2a2620', '#4a443a', '#6a6250', '#8a8270', '#b0a88c'] : ['#3a2410', '#6a4a1c', '#8a6424', '#b08a34', '#e0c060'];
    const cx = 32, R0 = 31, R1 = 26; c.fillStyle = pal[1]; c.beginPath(); for (let i = 0; i < n * 2; i++) { const a = i / (n * 2) * Math.PI * 2, r = i % 2 ? R0 : R1, a2 = a + Math.PI / (n * 2); c.lineTo(cx + Math.cos(a) * r, cx + Math.sin(a) * r); c.lineTo(cx + Math.cos(a2) * r, cx + Math.sin(a2) * r); } c.fill();
    c.fillStyle = pal[2]; c.beginPath(); c.arc(cx, cx, R1 - 1, 0, 7); c.fill(); c.fillStyle = '#120c08'; c.beginPath(); c.arc(cx, cx, R1 - 5, 0, 7); c.fill();
    for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; c.strokeStyle = pal[2]; c.lineWidth = 6; c.beginPath(); c.moveTo(cx, cx); c.lineTo(cx + Math.cos(a) * (R1 - 4), cx + Math.sin(a) * (R1 - 4)); c.stroke(); c.strokeStyle = pal[3]; c.lineWidth = 1.5; c.beginPath(); c.moveTo(cx + Math.cos(a - 0.1) * 6, cx + Math.sin(a - 0.1) * 6); c.lineTo(cx + Math.cos(a - 0.08) * (R1 - 5), cx + Math.sin(a - 0.08) * (R1 - 5)); c.stroke(); }
    c.fillStyle = pal[3]; c.beginPath(); c.arc(cx, cx, 8, 0, 7); c.fill(); c.fillStyle = pal[0]; c.beginPath(); c.arc(cx, cx, 3, 0, 7); c.fill();
    crisp(c, 64, 64); const d = c.getImageData(0, 0, 64, 64); for (let yy = 1; yy < 63; yy++) for (let xx = 1; xx < 63; xx++) { const i = (yy * 64 + xx) * 4; if (!d.data[i + 3]) continue; const up = d.data[((yy - 1) * 64 + xx) * 4 + 3], lf = d.data[(yy * 64 + xx - 1) * 4 + 3], dn = d.data[((yy + 1) * 64 + xx) * 4 + 3]; const hx = pal[!up || !lf ? 4 : !dn ? 0 : -1 as any]; if (hx) { const v = parseInt(hx.slice(1), 16); d.data[i] = v >> 16; d.data[i + 1] = (v >> 8) & 255; d.data[i + 2] = v & 255; } } c.putImageData(d, 0, 0);
    for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; rr(c, cx + Math.cos(a) * (R1 - 3), cx + Math.sin(a) * (R1 - 3), 1, 1, pal[4]); } }, 'gear' + n + tone);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(rad * 2, rad * 2), new THREE.MeshLambertMaterial({ map: t, alphaTest: 0.5, side: THREE.DoubleSide })); m.position.set(x, y, z); m.castShadow = true; R.room.group.add(m);
  const sh = new THREE.Mesh(new THREE.CircleGeometry(rad * 0.97, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false })); sh.position.set(x + 0.12, y - 0.15, z - 0.06); R.room.group.add(sh);
  const sp = o.speed ?? 0.2; R.onUpdate((dt) => { m.rotation.z += dt * sp; }); return m;
}
/** Шкаф: тело в дереве + нарисованный фасад (филёнки, латунные ручки, карниз, тени) — не чёрная коробка. */
export function pWardrobe(R: Builder, x: number, z: number, o: { w?: number; h?: number; d?: number; wood?: string; ry?: number; mirror?: boolean } = {}) {
  const w = o.w || 2, h = o.h || 3.2, d = o.d || 0.9, wood = o.wood || '#8a5a3a';
  const face = pxTex(32, 48, (c) => { const n = parseInt(wood.slice(1), 16); const sh = (k: number) => `rgb(${Math.min(255, (n >> 16) * k) | 0},${Math.min(255, ((n >> 8) & 255) * k) | 0},${Math.min(255, (n & 255) * k) | 0})`;
    rr(c, 0, 0, 32, 48, sh(0.8)); for (let y = 0; y < 48; y += 2) for (let x = 0; x < 32; x++) if (hsh(x * 0.3 + y * 5.1) > 0.82) rr(c, x, y, 2, 1, sh(0.9)); rr(c, 0, 0, 32, 4, sh(1.15)); rr(c, 0, 3, 32, 1, sh(0.5)); rr(c, 0, 44, 32, 4, sh(0.6)); rr(c, 15, 4, 2, 40, sh(0.45));
    for (const dx of [2, 18]) { for (const [py, ph] of [[6, 16], [25, 17]]) { rr(c, dx, py, 12, ph, sh(0.65)); rr(c, dx + 1, py + 1, 10, ph - 2, o.mirror && py === 6 ? '#9fb0c0' : sh(0.95)); rr(c, dx + 1, py + 1, 10, 1, sh(1.25)); rr(c, dx + 1, py + 1, 1, ph - 2, sh(1.15)); if (o.mirror && py === 6) { rr(c, dx + 3, py + 2, 2, ph - 4, '#d8e4f0'); } } }
    rr(c, 13, 22, 2, 4, '#d4ae48'); rr(c, 17, 22, 2, 4, '#d4ae48'); rr(c, 13, 22, 1, 1, '#fff0b0'); rr(c, 17, 22, 1, 1, '#fff0b0'); rr(c, 3, 45, 4, 3, sh(0.4)); rr(c, 25, 45, 4, 3, sh(0.4)); }, 'wardrobe' + wood + (o.mirror ? 'm' : ''));
  const g = new THREE.Group(); const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ map: tex('wood', wood) })); body.position.y = h / 2; body.castShadow = true; g.add(body);
  const f = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshLambertMaterial({ map: face })); f.position.set(0, h / 2, d / 2 + 0.01); g.add(f);
  const top = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.18, d + 0.15), new THREE.MeshLambertMaterial({ map: tex('wood', wood) })); top.position.y = h + 0.09; g.add(top);
  g.position.set(x, 0, z); if (o.ry) g.rotation.y = o.ry; R.room.group.add(g);
  const sw = o.ry ? Math.abs(Math.sin(o.ry)) * d + Math.abs(Math.cos(o.ry)) * w : w, sd = o.ry ? Math.abs(Math.sin(o.ry)) * w + Math.abs(Math.cos(o.ry)) * d : d; R.collider(x - sw / 2, z - sd / 2, x + sw / 2, z + sd / 2); return g;
}
/** Вешалка-стойка с шляпой и вещами (спрайт). */
export const coatStandTex = (a = '#c41e3a', b = '#2f2a3a') => pxTex(22, 56, (c) => { rr(c, 10, 6, 2, 46, '#5a3a20'); rr(c, 10, 6, 1, 46, '#8a6038'); rr(c, 4, 52, 14, 2, '#3a2414'); rr(c, 6, 50, 2, 3, '#3a2414'); rr(c, 14, 50, 2, 3, '#3a2414'); for (const [x, y] of [[5, 7], [16, 7], [7, 4], [14, 4]]) rr(c, x, y, 2, 2, '#b08a2c'); rr(c, 9, 3, 4, 3, '#b08a2c');
  rr(c, 3, 0, 12, 4, b); rr(c, 1, 3, 16, 2, b); rr(c, 3, 2, 12, 1, '#c41e3a'); rr(c, 13, 8, 7, 22, a); rr(c, 13, 8, 2, 22, 'rgba(255,255,255,.2)'); rr(c, 18, 8, 2, 22, 'rgba(0,0,0,.25)'); rr(c, 2, 8, 7, 26, b); rr(c, 2, 8, 2, 26, 'rgba(255,255,255,.15)'); rr(c, 4, 10, 1, 20, 'rgba(0,0,0,.4)'); rr(c, 14, 9, 5, 2, '#fff0f0'); }, 'coatstand' + a + b);
export const featherTex = () => pxTex(12, 4, (c) => { rr(c, 0, 2, 12, 1, '#c8b8a8'); for (let x = 1; x < 11; x++) { rr(c, x, 0 + (x % 2), 1, 2, x % 3 ? '#f4ecd8' : '#e8d0e0'); rr(c, x, 3, 1, 1, '#e0d4c4'); } }, 'feather');
/** Тёмный пол-«ковёр» с затуханием к краям: мир не обрывается в пустоту. */
export function falloff(R: Builder, x: number, z: number, w: number, d: number, y = -0.02, col = '#050304') {
  const t = pxTex(64, 64, (c) => { const g = c.createRadialGradient(32, 32, 10, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, col); c.fillStyle = g; c.fillRect(0, 0, 64, 64); }, 'falloff' + col);
  return layer(R, t, x, y, z, w, d, { flat: true });
}

/** Стеллаж реквизитора: на полках короны, мечи, черепа, кубки, фонари, маски (объёмные примитивы). */
function propShelf(R: Builder, x: number, z: number, w: number, h: number, v = 0) {
  const g = new THREE.Group(); const wood = new THREE.MeshLambertMaterial({ map: tex('darkwood', ['#ffffff', '#c89a6a', '#7a8a6a'][v]) }), gold = new THREE.MeshLambertMaterial({ map: tex('gold') }), bone = new THREE.MeshLambertMaterial({ color: 0xe8e0c8 }), steel = new THREE.MeshLambertMaterial({ color: 0xb8c0c8 }), red = new THREE.MeshLambertMaterial({ color: 0x8e1830 }), white = new THREE.MeshLambertMaterial({ color: 0xf0ece4 });
  const B = (W: number, H: number, D: number, px: number, py: number, pz: number, m: THREE.Material) => { const b = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), m); b.position.set(px, py, pz); b.castShadow = true; g.add(b); return b; };
  const n = [4, 3, 5][v], d = 0.7, per = [4, 3, 2][v]; B(w, h, 0.06, 0, h / 2, -d / 2, wood); for (const sx of [-1, 1]) B(0.1, h, d, sx * w / 2, h / 2, 0, wood); for (let i = 0; i <= n; i++) B(w, 0.08, d, 0, 0.1 + i * (h - 0.2) / n, 0, wood);
  if (v === 1) B(w + 0.3, 0.22, d + 0.1, 0, h + 0.1, 0, gold);
  const items = [['crown', 'skull', 'goblet', 'sword', 'lantern', 'mask', 'goblet', 'crown', 'skull', 'mask', 'sword', 'lantern'], ['mask', 'lantern', 'mask', 'skull', 'goblet', 'mask', 'lantern', 'mask', 'crown'], ['sword', 'crown', 'goblet', 'sword', 'lantern', 'crown', 'skull', 'sword', 'goblet', 'crown']][v];
  for (let i = 0; i < n; i++) { const sy = 0.14 + i * (h - 0.2) / n; for (let k = 0; k < per; k++) { if (hsh(i * 9 + k + v * 31) < 0.15) continue; const it = items[(i * per + k + v) % items.length], ix = -w / 2 + 0.45 + (per > 1 ? k * (w - 0.9) / (per - 1) : (w - 0.9) / 2), o = new THREE.Group(); o.position.set(ix, sy, 0.05); g.add(o);
    if (it === 'crown') { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.18, 10, 1, true), gold); c.position.y = 0.09; o.add(c); for (let t = 0; t < 5; t++) { const p = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 4), gold); p.position.set(Math.cos(t * 1.25) * 0.19, 0.24, Math.sin(t * 1.25) * 0.19); o.add(p); } const j = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), red); j.position.set(0, 0.1, 0.19); o.add(j); }
    else if (it === 'skull') { const c = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), bone); c.position.y = 0.17; o.add(c); const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.14), bone); jaw.position.set(0, 0.05, 0.04); o.add(jaw); for (const ex of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 5, 4), new THREE.MeshBasicMaterial({ color: 0x111111 })); e.position.set(ex * 0.06, 0.18, 0.13); o.add(e); } }
    else if (it === 'goblet') { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.04, 0.16, 10), gold); c.position.y = 0.3; o.add(c); const st = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 6), gold); st.position.y = 0.12; o.add(st); const ft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.03, 10), gold); ft.position.y = 0.02; o.add(ft); }
    else if (it === 'sword') { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.62, 0.02), steel); bl.position.y = 0.48; o.add(bl); const gd = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.05), gold); gd.position.y = 0.16; o.add(gd); const hd = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.14, 6), red); hd.position.y = 0.08; o.add(hd); o.rotation.z = 0.35; }
    else if (it === 'lantern') { const fr = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.2), new THREE.MeshLambertMaterial({ color: 0x2a2a2a, transparent: true, opacity: 0.55 })); fr.position.y = 0.17; o.add(fr); const fl = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffc860 })); fl.position.y = 0.17; o.add(fl); const tp = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.1, 4), gold); tp.position.y = 0.37; tp.rotation.y = Math.PI / 4; o.add(tp); }
    else { const c = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8, 0, Math.PI), k % 2 ? white : gold); c.position.y = 0.22; o.add(c); for (const ex of [-1, 1]) { const e = new THREE.Mesh(new THREE.CircleGeometry(0.035, 6), new THREE.MeshBasicMaterial({ color: 0x111111 })); e.position.set(ex * 0.06, 0.26, 0.171); o.add(e); } }
  } }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - w / 2, z - d / 2, x + w / 2, z + d / 2); return g;
}
const WARM = { tint: [1.05, 0.98, 0.9], vig: 0.45 };
const base = (R: Builder, amb = 1.6) => { R.ambient(0x4a3830, amb, 0xffe6c8); R.particles('dust', { count: 110, top: 7 }); };
const portrait = (title: string, i: number) => canvasTex(24, 32, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 32); c.fillStyle = '#2a1c14'; c.fillRect(2, 2, 20, 24); c.fillStyle = ['#3a2a3a', '#2a3a3a', '#3a3a2a', '#3a2a2a'][i % 4]; c.fillRect(3, 3, 18, 22); c.fillStyle = '#a3122a'; c.fillRect(10, 9, 5, 13); c.fillStyle = 'rgba(200,180,160,.6)'; c.fillRect(11, 5, 3, 4); for (let k = 0; k < 4; k++) { c.fillStyle = '#5a4a3a'; c.fillRect(4 + k * 5, 15 + (k % 2) * 2, 3, 9); } c.fillStyle = '#e8dcc0'; c.fillRect(3, 27, 18, 4); ptext(c, title, 12, 27, { size: 4, col: '#3a2a14', align: 'center' }); }, 'prt' + title);

// Фойе: имперская лестница (центральный марш, площадка, два марша к галерее под потолком), колонны,
// три люстры, статуи, пальмы, диваны, зеркала, объёмные касса и гардероб, вход в буфет.
const foyer: RoomDef = {
  name: 'Фойе', floor: 'Партер', w: 42, d: 28, music: 'theater', amb: 'hall', step: 'stone', grade: { ...WARM, bloom: 0.42 },
  build(R, G) {
    marbleFloor(R, {}, 1.0, '#cdbd9c', '#5e2c30'); R.walls('wallpaper', { h: 10, trim: 'gold' }); base(R, 1.6);
    R.floor('carpet', { w: 5, d: 14, z: 5, y: 0.015 });
    // имперская лестница
    const stone = new THREE.MeshLambertMaterial({ map: tex('paperstone') }), runner = new THREE.MeshLambertMaterial({ map: tex('carpet') }), gold = new THREE.MeshLambertMaterial({ map: tex('gold') });
    const step = (x: number, y: number, z: number, w: number, d: number, rot = 0) => { const st = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, d), stone); st.position.set(x, y, z); st.rotation.y = rot; st.castShadow = st.receiveShadow = true; R.room.group.add(st); const rn = new THREE.Mesh(new THREE.BoxGeometry(w * 0.6, 0.02, d + 0.01), runner); rn.position.set(x, y + 0.16, z); rn.rotation.y = rot; R.room.group.add(rn); };
    for (let i = 0; i < 9; i++) step(0, 0.15 + i * 0.3, -2 - i * 0.55, 6, 0.6); // центральный марш
    const land = new THREE.Mesh(new THREE.BoxGeometry(14, 2.85, 3), stone); land.position.set(0, 1.42, -8.9); R.room.group.add(land); const landTop = new THREE.Mesh(new THREE.BoxGeometry(14, 0.02, 3), runner); landTop.position.set(0, 2.86, -8.9); R.room.group.add(landTop);
    for (const sx of [-1, 1]) { for (let i = 0; i < 12; i++) step(sx * (7.6 + i * 0.55), 3 + i * 0.3, -8.9, 0.6, 3); const gal = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 3.6), stone); gal.position.set(sx * 17.5, 6.6, -9.2); R.room.group.add(gal); balustrade(R, sx * 14.5, -7.4, sx * 20.5, -7.4, { y: 6.8, solid: false }); }
    for (const sx of [-1, 1]) { const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 5.4), gold); rail.position.set(sx * 3.1, 2.4, -4.4); rail.rotation.x = -0.5; R.room.group.add(rail); for (let i = 0; i < 9; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 1, 6), new THREE.MeshLambertMaterial({ color: 0xe8d8c0 })); b.position.set(sx * 3.1, 0.65 + i * 0.3, -2 - i * 0.55); R.room.group.add(b); } const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.4, 0.4), stone); post.position.set(sx * 3.1, 0.7, -1.7); R.room.group.add(post); R.sprite(pxTex(10, 16, (c) => { rr(c, 4, 9, 2, 7, '#86641c'); rr(c, 2, 14, 6, 2, '#b08a2c'); rr(c, 1, 1, 8, 8, '#ffe8b0'); rr(c, 2, 0, 6, 1, '#ffe8b0'); rr(c, 2, 2, 3, 4, '#fffaf0'); rr(c, 1, 8, 8, 1, '#d4ae48'); }, 'newel'), sx * 3.1, -1.7, { y: 1.4, glow: true, scale: 1.1 }); R.light(sx * 3.1, 2, -1.3, 0xffd8a0, 4, 6, { pool: true }); }
    R.collider(-21, -14, 21, -7.2); R.collider(-3, -7.2, 3, -1.9); R.collider(-21, -7.2, -3.3, -6.9); R.collider(3.3, -7.2, 21, -6.9);
    R.inter('up', 0, -1, { label: 'Парадная лестница на бельэтаж', fn: (G) => G.goto('hub_mezz', 'stairs', { fade: 'fade' }) });
    R.decal(canvasTex(48, 32, (c) => { c.fillStyle = '#5a0c18'; c.fillRect(0, 0, 48, 32); c.strokeStyle = '#d4ae48'; c.strokeRect(1.5, 1.5, 45, 29); c.fillStyle = '#d4ae48'; c.beginPath(); c.arc(24, 16, 9, 0, 7); c.fill(); c.fillStyle = '#5a0c18'; c.beginPath(); c.arc(24, 16, 6, 0, 7); c.fill(); ptext(c, 'МК', 24, 12, { size: 7, col: '#d4ae48', align: 'center' }); }, 'crest'), { x: 0, y: 7.4, w: 3.4, h: 2.3, noSlot: true });
    // колонны, люстры, статуи, пальмы, диваны, зеркала
    for (const x of [-14, -7, 7, 14]) for (const z of [0.5, 7.5]) if (!(z > 5 && Math.abs(x) < 10)) pColumn(R, x, z, 9.6);
    chandelier(R, -10.5, 9.4, 3, 1.1, { light: 9 }); chandelier(R, 10.5, 9.4, 3, 1.1, { light: 9 }); chandelier(R, 0, 10.4, -4.5, 1.3, { light: 10 });
    for (const sx of [-1, 1]) { sofa(R, sx * 10.5, 4.2, { w: 2.6, col: 0x8a2a3a }); pPalm(R, sx * 6.2, 12.2); R.sprite('flowerpot', sx * 17.5, 1.4, { scale: 1.4 }); rug(R, sx * 10.5, 5.8, 4.6, 2.4, { col: '#3a1a2a', border: '#b89858' }); rug(R, sx * 12.4, 9.6, 7, 3.2, { col: '#4a1420', border: '#d4ae48' }); rug(R, sx * 16.4, 4.6, 3.4, 5.4, { col: '#2a1a14', border: '#a08850' }); } rug(R, 0, 11, 7, 3.2, { col: '#5a0c18' });
    pStatue(R, -4.6, -0.6, 1); pStatue(R, 4.6, -0.6, 0); for (const [x, z] of [[-19.6, -5.6], [19.6, -5.6], [-19.6, 12.5], [19.6, 12.5]]) pPalm(R, x, z, 1.0);
    sofa(R, -10.5, 11.6, { w: 3.2, col: 0xb04050 }); sofa(R, 10.5, 11.6, { w: 3.2, col: 0xb04050 }); armchair(R, -14.5, 11.2, { col: 0xb04050, ry: 0.4 }); armchair(R, 14.5, 11.2, { col: 0xb04050, ry: -0.4 });
    for (const sx of [-1, 1]) { mirror3D(R, sx * 20.85, 3.6, 3, 2.2, 4, { ry: -sx * Math.PI / 2 }); window3D(R, -2, { wall: sx < 0 ? 'w' : 'e', y: 5.2, w: 2, h: 3.4 }); }
    // касса, гардероб, буфет
    ticketBooth(R, 16, 4.2, -Math.PI / 2); R.light(14.2, 3.4, 4.2, 0xffd8a8, 7, 7); R.look('kassa', 14, 4.2, 'Касса', T.kassa); witness(R, G, 'usher', 13.4, 6.6, { dir: 'l' });
    cloakroom(R, -16.6, 5.8, 6); R.light(-16.6, 3.6, 8.2, 0xffd8a8, 7, 8); R.look('coats', -16.6, 7.6, 'Гардероб', T.coats, { photo: 'Номерок № 18', egg: 'cloak18' });
    R.door('d_buffet', 10, { wall: 'w', to: 'hub_buffet', label: 'Буфет', sign: 'БУФЕТ', col: '#6a1a22' });
    R.light(7.8, 2.2, 12, 0xffe0b0, 4, 4); R.sprite('bookstand', 7.8, 11.2, { scale: 1.4, solid: 0.4 }); R.look('guest', 7.8, 12.2, 'Книга отзывов', T.guestbook, { egg: 'guestbook' });
    // двери в зал, служебный вход, выход
    R.door('d_stalls', -10.5, { to: 'hub_stage', spot: 'stalls', label: 'Двери в партер', sign: 'ПАРТЕР', col: '#6a1a22', w: 2.6, h: 3.8, fade: 'curtain', z: -7.15 });
    R.door('d_stalls2', 10.5, { to: 'hub_stage', spot: 'stalls2', label: 'Двери в партер', sign: 'ПАРТЕР', col: '#6a1a22', w: 2.6, h: 3.8, fade: 'curtain', z: -7.15 });
    R.door('d_service', 10.5, { wall: 'e', to: 'hub_corridor', spot: 'foyer', label: 'Служебный вход «Только для артистов»', sign: 'СЛУЖЕБНЫЙ', col: '#3a2a1c' });
    R.door('d_exit', 0, { wall: 's', label: 'Парадный выход', fn: (G) => G.run(T.exitLocked) });
    for (const [i, x] of [-18, -15.5].entries()) R.poster(['КОРОЛЕВА', 'ЧАЙКА'][i], 'АЛЛА ЕВА', { x, y: 1.45, w: 1.5, h: 2.1, face: '#d9a878', z: -7.12 });
    R.poster('ГЛУПЕЕ ДУРАКА, УМНЕЕ УМНОГО', 'в ролях: Варвара', { x: 15.6, y: 1.5, w: 1.7, h: 2.2, z: -7.12, motif: 'mask', bg: '#f0e0c0' }); R.look('play2', 15.6, -6.2, 'Афиша', ['~: «Глупее дурака, умнее умного». Ещё один наш спектакль. Я играла ту, кто всех перехитрила и в итоге осталась одна на сцене.', '~: Тогда это казалось смешным финалом.'], { egg: 'plays2' });
    for (const x of [-13.4, 13.4]) sconce(R, x, 2.3, -7.12, { light: 5 });
    R.spawn('start', 0, 10, 'b'); R.spawn('service', 19.2, 10, 'l'); R.spawn('stalls', -10.5, -5.8); R.spawn('stalls2', 10.5, -5.8); R.spawn('stairs', 0, -0.6); R.spawn('buffet', -19.2, 10, 'r');
  },
  async enter(G) { if (!G.f.foyer0) { G.f.foyer0 = 1; await G.run(T.foyerFirst); } },
};
const buffet: RoomDef = {
  name: 'Буфет', floor: 'Партер', w: 24, d: 15, music: 'theater', amb: 'crowd', step: 'stone', grade: { ...WARM, bloom: 0.55 },
  build(R, G) {
    marbleFloor(R, {}, 1.0, '#d4c4a4', '#2e4a3a'); R.walls('wallgreen', { h: 7, trim: 'gold' }); base(R, 1.7); rug(R, 0, 3, 12, 5, { col: '#3a1a14' });
    const bt = (x: number, z: number, i: number) => { R.sprite(bistroTex(['#e8e0d4', '#d8ccb8', '#f0e8dc'][i % 3], ['#8e1830', '#2e5038', '#5a3a6a'][i % 3]), x, z, { scale: 1.2 }); R.collider(x - 1.2, z - 0.35, x + 1.2, z + 0.35); };
    barCounter(R, 0, -6.2, 12); R.decal(pxTex(64, 4, (c) => { rr(c, 0, 0, 64, 4, '#ffcf84'); rr(c, 0, 0, 64, 1, '#fff0c8'); for (let x = 0; x < 64; x += 8) rr(c, x, 3, 4, 1, '#d89a50'); }, 'barstrip'), { x: 0, y: 0.18, z: -4.98, w: 11.6, h: 0.22, glow: true, noSlot: true }); R.light(0, 3.6, -6.9, 0xffc070, 6, 6); R.look('bar', 0, -3.8, 'Буфет', T.bar, { egg: 'buffet' });
    [[-7, 1.5], [0, -0.6], [7, 1.5], [-4.6, 4.6], [4.6, 4.6]].forEach(([x, z], i) => bt(x, z, i));
    R.light(0, 5.5, 3, 0xffd8a0, 14, 14); R.light(0, 4, -3.5, 0xffe0b0, 8, 9); for (const sx of [-1, 1]) bt(sx * 9.6, -1.6, sx + 4); window3D(R, -2, { wall: 'w', y: 3.6, w: 2, h: 3 }); window3D(R, -2, { wall: 'e', y: 3.6, w: 2, h: 3 });
    pPalm(R, -10.6, 6); pPalm(R, 10.6, 6); R.poster('ШАМПАНСКОЕ', 'антракт 15 минут', { x: -7.6, y: 2.6, w: 1.3, h: 1.8, motif: 'moon' }); R.poster('ПИРОЖНОЕ «ПРИМА»', 'вкус аплодисментов', { x: 7.6, y: 2.6, w: 1.3, h: 1.8, motif: 'crown' });
    R.door('out', 0, { wall: 's', to: 'hub_foyer', spot: 'buffet', label: 'В фойе' }); R.spawn('start', 0, 6.4, 'b');
  },
};
// Реквизиторская: стеллажи с реквизитом, маски, оружие, короны, ящики.
const props: RoomDef = {
  name: 'Реквизиторская', floor: 'Партер', w: 20, d: 12, music: 'caper', amb: 'hall', step: 'wood', grade: { tint: [1.04, 0.98, 0.92], vig: 0.5 },
  build(R, G) {
    R.floor('floor'); R.walls('woodwall', { h: 6 }); base(R, 2.3); R.light(0, 4.4, 0, 0xffd8a8, 16, 14, { flicker: 0.04 }); R.light(-6, 3.6, -3.6, 0xffc890, 7, 8); R.light(6, 3.6, -3.6, 0xffc890, 7, 8);
    propShelf(R, -7, -5.3, 3.6, 4, 0); propShelf(R, 0, -5.3, 4.4, 3, 1); propShelf(R, 6.6, -5.3, 2.6, 4.6, 2);
    // центр: бутафорский трон, конь-каталка, свёрнутый ковёр, стойка с алебардами
    const throneT = pxTex(26, 40, (c) => { rr(c, 3, 0, 20, 4, '#d4ae48'); for (let x = 4; x < 22; x += 4) rr(c, x, -1 + 0, 2, 2, '#f0d478'); rr(c, 4, 4, 18, 18, '#d4ae48'); rr(c, 6, 5, 14, 16, '#8e1830'); rr(c, 7, 6, 4, 14, '#b23048'); rr(c, 2, 20, 22, 4, '#d4ae48'); rr(c, 4, 22, 18, 6, '#8e1830'); rr(c, 4, 22, 18, 1, '#c84a60'); rr(c, 1, 16, 4, 10, '#b08a2c'); rr(c, 21, 16, 4, 10, '#86641c'); rr(c, 3, 28, 3, 12, '#86641c'); rr(c, 20, 28, 3, 12, '#5a4410'); rr(c, 12, 10, 2, 2, '#f0d478'); rr(c, 6, 27, 14, 1, '#5a0c18'); }, 'throne');
    R.sprite(throneT, -1.8, -2.2, { scale: 1.3, solid: 0.6 }); R.sprite('horse', 2.6, -1.6, { scale: 0.9, solid: 0.8 }); { const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 2.6, 10), new THREE.MeshLambertMaterial({ map: tex('carpet', '#c86a5a') })); roll.rotation.set(0, 0.5, Math.PI / 2); roll.position.set(-4.6, 0.28, -1.8); roll.castShadow = true; R.room.group.add(roll); }
    const halb = pxTex(16, 56, (c) => { for (let i = 0; i < 4; i++) { const x = 1 + i * 4; rr(c, x + 1, 8, 1, 46, '#6a4a2a'); rr(c, x, 2 + i % 2, 3, 6, '#b8c0c8'); rr(c, x, 2 + i % 2, 1, 6, '#e8eef4'); } rr(c, 0, 40, 16, 2, '#3a2a1a'); rr(c, 0, 53, 16, 3, '#3a2a1a'); }, 'halberds'); R.sprite(halb, -9.2, -3.6, { scale: 1.3 });
    for (const x of [-3.5, 3.5]) { R.box(x, -4.9, 0.03, 0.03, 1.2, { tex: 'black', y: 4.6, solid: false, cast: false }); R.sprite(pxTex(10, 12, (c) => { rr(c, 4, 0, 2, 3, '#3a3a3a'); rr(c, 2, 3, 6, 2, '#5a5a5a'); rr(c, 2, 5, 6, 6, '#ffe8b0'); rr(c, 3, 6, 2, 3, '#fffaf0'); rr(c, 3, 11, 4, 1, '#d8a050'); }, 'bulbHang'), x, -4.9, { y: 3.9, glow: true, scale: 1.1 }); }
    R.table(-5, 1, 3.4, 1.4); for (let i = 0; i < 4; i++) R.sprite(['masks', 'book', 'bookstand', 'candle'][i], -6.2 + i * 0.8, 1, { y: 1.15, scale: 0.9 });
    R.sprite(PROPTEX.trunk(), 5.6, 2.4, { scale: 1.6, solid: 1 }); R.sprite(PROPTEX.hatbox(), 7.4, 3.2, { scale: 1.2 }); R.sprite(PROPTEX.hatbox(), 7.5, 3.2, { y: 1.15, scale: 1.1 }); R.sprite('bust', -8.2, -1.6, { scale: 1.4, solid: 0.5 }); R.sprite(PROPTEX.feathers(), -7.6, 3.4, { scale: 1.2 });
    pWardrobe(R, 8.8, -1.4, { w: 2, h: 3.2, ry: -Math.PI / 2, wood: '#9a6a44' });
    R.look('ptable', -5, 2.2, 'Стол реквизитора', ['~: Всё подписано: «кинжал (не настоящий)», «яд (чай)», «корона (не трогать, Алла Ева)».', '~: И отдельная коробка: «Для Девушки». Внутри пусто. Только записка: «Принесёт своё».']);
    R.door('out', 0, { wall: 's', to: 'hub_corridor', spot: 'props', label: 'В коридор' }); R.spawn('start', 0, 4.4, 'b');
  },
};
const mezz: RoomDef = {
  name: 'Бельэтаж', floor: 'Бельэтаж', w: 38, d: 16, music: 'theater', amb: 'hall', step: 'carpet', grade: WARM,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a0606; R.floor('carpet', { d: 11, z: -2.5 }); R.walls('wallgreen', { h: 6.5, trim: 'gold', skirt: false }); base(R, 1.6);
    // кромка бельэтажа: золочёный бортик, под ним виден освещённый мраморный пол фойе и стены
    R.box(0, 3.25, 38.8, 0.5, 1.6, { tex: 'gold', y: -1.6, solid: false, cast: false }); R.box(0, 3.3, 38.6, 0.42, 1.2, { tex: 'velvet', y: -1.4, solid: false, cast: false }); for (let x = -18; x <= 18; x += 2.4) R.box(x, 3.52, 0.5, 0.06, 0.5, { tex: 'gold', y: -1.05, solid: false, cast: false });
    marbleFloor(R, { z: 14, d: 24, y: -4, w: 70 }, 1.0, '#cdbd9c', '#5e2c30'); for (const sx of [-1, 1]) R.box(sx * 19.2, 14, 0.4, 24, 11, { tex: 'wallpaper', y: -4, solid: false, cast: false }); for (const x of [-12, 12]) pColumn(R, x, 7.5, 4, { collide: false }).position.y = -4; chandelier(R, 0, -0.6, 8.5, 1.2, { light: 12 });
    const sideW = (x: number) => { R.box(x, 6, 0.4, 24, 9, { tex: 'wallgreen', y: 0, solid: false, cast: false }); }; sideW(-19.2); sideW(19.2);
    // проём над фойе: балюстрада и люстра внизу
    balustrade(R, -19, 3, -4, 3); balustrade(R, 4, 3, 19, 3); R.light(0, -1, 6, 0xffd8a0, 26, 14); R.light(-12, -1.5, 6, 0xffc890, 16, 12); R.light(12, -1.5, 6, 0xffc890, 16, 12); rug(R, 0, 9, 10, 4, { col: '#5a1420', border: '#d4ae48' }).position.y = -3.95; rug(R, 0, -1.6, 7, 2.2, { col: '#3a1a2a' }); R.light(-11, -2, 6, 0xffc070, 18, 14); R.light(11, -2, 6, 0xffc070, 18, 14); R.collider(-19, 3.2, 19, 8);
    for (const sx of [-1, 1]) { R.sprite(settleTex(), sx * 6.5, -1.6, { scale: 1.05 }); R.collider(sx * 6.5 - 1.5, -2, sx * 6.5 + 1.5, -1.2); pPalm(R, sx * 17.4, -5.6); } pPalm(R, -2.25, -6.8, 0.8);
    R.inter('down', 0, 2.2, { label: 'Парадная лестница, вниз, в фойе', fn: (G) => G.goto('hub_foyer', 'stairs', { fade: 'fade' }) }); R.stairs(0, 5.4, 6, 4, { runner: true }).position.y = -1.2;
    // портреты постановок и бюст основателя
    ['ЧАЙКА', 'ГАМЛЕТ', 'СИРАНО', 'САД'].forEach((t, i) => R.decal(portrait(t, i), { x: -15 + i * 2.2, y: 3.4, w: 1.7, h: 2.3 }));
    R.look('portraits', -11.7, -6.6, 'Портреты постановок', T.portraits); R.box(15, -6.4, 1.0, 0.8, 1.2, { tex: 'stone', tint: '#c8bcb0' }); R.box(15, -6.4, 1.15, 0.95, 0.12, { tex: 'gold', y: 1.2, solid: false }); R.sprite('bust', 15, -6.2, { scale: 1.4, y: 1.32 }); R.look('bust2', 15, -5.4, 'Бюст основателя', T.bust, { egg: 'matias' });
    for (const x of [-2.25, 5.25, 13]) sconce(R, x, 3.6, -7.96, { light: 5.5 }); window3D(R, 16, { wall: 'n', y: 3.6, w: 1.8, h: 2.8 });
    R.door('d_reh', -5.5, { to: 'hub_rehearsal', label: 'Репетиционный зал', sign: 'РЕПЕТИЦИИ', col: '#3a2a1c' });
    R.door('d_arch', 1, { to: 'hub_archive', label: 'Архив', sign: 'АРХИВ', cond: () => G.has('archive_card'), locked: D.archiveLocked });
    R.door('d_box', 9.5, { to: 'hub_box', label: 'Ложа для режиссёра', sign: 'ЛОЖА 3', col: '#6a1a22', fn: async (G) => { await G.run(T.boxDoor); await G.goto('hub_box'); } });
    R.door('stair', 0, { wall: 'e', to: 'hub_corridor', spot: 'stair', label: 'Служебная лестница вниз', sign: '↓ ПАРТЕР' });
    // кабинет худрука за гобеленом (западная стена)
    if (f.office_open) R.door('d_office', -2, { wall: 'w', to: 'hub_office', label: 'Кабинет худрука', sign: 'К.', col: '#2a1c14' });
    else {
      R.decal(canvasTex(40, 60, (c) => { rr(c, 0, 0, 40, 60, '#5a4010'); rr(c, 2, 2, 36, 56, '#a08850'); rr(c, 4, 4, 32, 52, '#3a5a44'); for (let i = 0; i < 40; i++) rr(c, 4 + hsh(i) * 30, 4 + hsh(i + 1) * 24, 3, 3, ['#2a4a34', '#4a6a4a', '#5a7a50'][i % 3]); rr(c, 4, 34, 32, 22, '#5a6a3a'); for (let x = 4; x < 36; x += 2) rr(c, x, 34 + (x % 4 ? 0 : 1), 1, 2, '#7a8a4a');
      rr(c, 18, 28, 10, 5, '#a86a3a'); rr(c, 26, 25, 3, 4, '#a86a3a'); rr(c, 27, 22, 1, 3, '#6a4a2a'); rr(c, 29, 21, 1, 4, '#6a4a2a'); rr(c, 19, 33, 1, 5, '#7a4a2a'); rr(c, 26, 33, 1, 5, '#7a4a2a'); rr(c, 8, 40, 3, 3, '#e8c8a0'); rr(c, 7, 43, 5, 7, '#8e1830'); rr(c, 11, 44, 7, 1, '#d4ae48'); rr(c, 8, 50, 1, 4, '#3a2a1a'); rr(c, 10, 50, 1, 4, '#3a2a1a');
      for (let x = 2; x < 38; x += 3) { rr(c, x, 2, 2, 1, '#d4ae48'); rr(c, x, 57, 2, 1, '#d4ae48'); } for (let x = 3; x < 38; x += 2) rr(c, x, 58, 1, 2, '#c8a050'); }, 'tapestry2'), { wall: 'w', at: -2, y: 2.6, w: 2.6, h: 3.9, mask: 'none' });
      R.decal(canvasTex(40, 60, (c) => { c.fillStyle = '#0c0808'; c.fillRect(0, 0, 40, 60); c.strokeStyle = '#6a8ad0'; c.strokeRect(2.5, 2.5, 35, 57); c.fillStyle = '#6a8ad0'; c.fillRect(17, 28, 6, 9); c.fillRect(15, 30, 10, 3); }, 'officedoor'), { wall: 'w', at: -2, y: 2.6, w: 2.6, h: 3.9, mask: 'tragedy', glow: true });
      R.look('tap', -18.1, -2, 'Гобелен', ['~: Гобелен. Охота, олень, все довольны, кроме оленя. Висит немного криво, будто его часто отодвигают.'], { mask: 'none' });
      R.inter('officeTr', -18.1, -2, { label: 'Дверь за гобеленом', mask: 'tragedy', fn: async (G) => { await G.run(D.officeFind); if (!G.has('marionette')) return G.run(D.officeNoKey); await G.run(D.officeOpen); f.office_open = 1; await G.goto('hub_office'); } });
    }
    for (const x of [-14, 13]) { R.sprite(settleTex('#2e5038', '#4a7a58', '#1a3020'), x, -6.6, { scale: 1.0 }); R.collider(x - 1.5, -7, x + 1.5, -6.2); }
    R.spawn('start', 0, 0.8, 'b'); R.spawn('stairs', 0, 1.2, 'b'); R.spawn('stair', 17.2, 0, 'l'); R.spawn('arch', 1, -6.2); R.spawn('office', -17.2, -2, 'r'); R.spawn('reh', -5.5, -6.2); R.spawn('box', 9.5, -6.2);
  },
  async enter(G) { if (!G.f.mezz0) { G.f.mezz0 = 1; await G.run(T.mezzFirst); } },
};
const box: RoomDef = {
  name: 'Ложа № 3', floor: 'Бельэтаж', w: 14, d: 8, music: 'theater', amb: 'hall', step: 'carpet', grade: { ...WARM, vig: 0.6 }, camDist: 17,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x050304; R.floor('carpet', { d: 5.4, z: -1.3 }); R.walls('velvet', { h: 5, w: false, e: false, skirt: false }); R.ambient(0x3a2828, 1.4, 0xffd8c0);
    // ложа: боковые стенки до барьера, золочёный карниз и ламбрекен, бра-декали
    for (const sx of [-1, 1]) { R.box(sx * 7.2, -1.3, 0.4, 5.6, 5, { tex: 'velvet', solid: false }); R.collider(sx * 7.2 - 0.2, -4, sx * 7.2 + 0.2, 1.4); R.box(sx * 7.2, -1.3, 0.6, 5.8, 0.35, { tex: 'gold', y: 4.8, solid: false, cast: false }); R.box(sx * 7.2, 1.35, 0.7, 0.5, 5.4, { tex: 'gold', y: -0.4, solid: false, cast: false }); }
    R.box(0, -4.1, 14.8, 0.5, 0.35, { tex: 'gold', y: 4.8, solid: false, cast: false });
    const swag = pxTex(64, 12, (c) => { for (let x = 0; x < 64; x++) { const t = Math.abs(((x % 16) - 8) / 8); const h = 6 + (1 - t * t) * 5; rr(c, x, 0, 1, h, (x % 16) < 8 ? '#721022' : '#5a0c18'); rr(c, x, h - 1, 1, 1, '#d4ae48'); } rr(c, 0, 0, 64, 2, '#d4ae48'); for (let x = 7; x < 64; x += 16) rr(c, x, 2, 2, 7, '#d4ae48'); }, 'swag'); swag.wrapS = THREE.RepeatWrapping; swag.repeat.set(4, 1);
    R.decal(swag, { x: 0, y: 4.3, z: -3.97, w: 14, h: 1.1, noSlot: true });
    for (const x of [-2.6, 4]) sconce(R, x, 3.2, -3.98, {});
    // барьер ложи: бархатная обивка, золотой кант, лампочки; под ним темнота зала с тёплым отсветом сцены
    R.box(0, 1.35, 14, 0.4, 1.3, { tex: 'gold', y: -1.3, solid: false, cast: false }); R.box(0, 1.6, 13.6, 0.1, 0.9, { tex: 'velvet', y: -1.1, solid: false, cast: false });
    for (let x = -6; x <= 6; x += 3) R.decal(pxTex(8, 8, (c) => { rr(c, 2, 2, 4, 4, '#ffe8b0'); rr(c, 3, 3, 2, 2, '#fffaf0'); rr(c, 1, 6, 6, 2, '#b08a2c'); }, 'boxbulb'), { x, y: -0.65, z: 1.67, w: 0.35, h: 0.35, glow: true, noSlot: true });
    // стулья ложи, столик с программкой и биноклем
    for (const [x, fl] of [[-3, false], [-1.2, false], [1.6, true], [3.4, false]] as [number, boolean][]) R.sprite('chair', x, -1.6 + (fl ? 0.25 : 0), { scale: 1.3, flipX: fl });
    R.box(0.2, -1.9, 0.9, 0.6, 0.9, { tex: 'wood', tint: '#c89060', solid: false }); R.sprite(pxTex(16, 8, (c) => { rr(c, 0, 2, 7, 6, '#e8dcc0'); rr(c, 1, 3, 5, 1, '#8e1830'); rr(c, 1, 5, 4, 1, '#6a5a4a'); rr(c, 9, 4, 3, 3, '#2a2a2e'); rr(c, 13, 4, 3, 3, '#2a2a2e'); rr(c, 12, 5, 1, 1, '#d4ae48'); rr(c, 10, 5, 1, 1, '#9fb4c8'); rr(c, 14, 5, 1, 1, '#9fb4c8'); }, 'programme'), 0.2, -1.8, { y: 0.92, scale: 0.9 });
    balustrade(R, -7, 1, 7, 1, { h: 0.75 });
    // партер под ложей: ступенчатые ряды кресел со зрителями, тёплый отсвет сцены, чтобы низ кадра не проваливался в черноту
    const rowT = (seed: number) => pxTex(128, 18, (c) => { for (let i = 0; i < 16; i++) { const x = i * 8 + (seed % 2) * 3; rr(c, x, 7, 7, 11, '#6a0e1c'); rr(c, x, 7, 7, 1, '#c8963a'); rr(c, x + 1, 8, 5, 8, '#8e1830'); if (hsh(i * 7 + seed * 13) > 0.22) { const hc = ['#1a1214', '#3a2418', '#5a3a20', '#120c0e', '#7a5a3a'][Math.floor(hsh(i + seed) * 5)]; rr(c, x + 1, 1, 5, 6, hc); rr(c, x + 2, 0, 3, 1, hc); rr(c, x + 1, 5, 5, 2, '#2a1a1a'); } } }, 'stallrow' + seed);
    R.box(0, 4.5, 30, 8, 0.3, { tex: 'carpet', tint: '#7a2a2a', y: -4.4, solid: false, cast: false });
    for (let k = 0; k < 6; k++) layer(R, rowT(k), (k % 3 - 1) * 0.7, -1.9 - k * 0.42, 1.9 + k * 0.75, 22, 1.4, { color: [0xc8a090, 0xd0a898, 0xd8b0a0, 0xe0b8a8, 0xe8c0b0, 0xf0c8b8][k] });
    for (const sx of [-1, 1]) { R.box(sx * 10.6, 2, 6.2, 18, 14, { tex: 'wallpaper', tint: '#6a2028', y: -8, solid: false, cast: false }); for (const z of [-2, 3, 8]) R.box(sx * 7.48, z, 0.06, 0.5, 9, { tex: 'gold', y: -7, solid: false, cast: false }); }
    R.light(0, -1.5, 4, 0xffc890, 6, 10, { force: true });
    // вид вниз, на сцену (виден при осмотре)
    const st = R.box(0, 6, 22, 8, 0.4, { tex: 'stage', y: -7, solid: false }); for (let x = -10; x <= 10; x += 2.4) R.box(x, 2.6, 2.3, 0.3, 3, { tex: 'velvet', y: -7, solid: false });
    const heads = pxTex(96, 14, (c) => { for (let i = 0; i < 12; i++) { const x = 4 + i * 8 + (i % 2) * 2; rr(c, x, 3, 6, 7, ['#1a1214', '#2a1a14', '#140e10', '#3a2a1a'][i % 4]); rr(c, x + 1, 2, 4, 1, '#1a1214'); rr(c, x - 2, 9, 10, 5, '#0e0a0c'); } }, 'heads');
    for (let k = 0; k < 4; k++) layer(R, heads, (k % 2) * 0.6, -6.2, 9.5 + k * 1.3, 18, 2.6, { color: 0x9a8a80 });
    R.spot(0, 2, 6, 0, 6, 0xffe2b0, 60, { angle: 0.3, shadow: false });
    if (!f.act4) { const a = R.actor('alla', 0, 6, { id: 'allaBelow', pose: 'bow' }); a.y = -6.6; R.onUpdate((dt, t) => { a.pose = Math.floor(t / 2) % 2 ? 'bow' : 'arms'; }); }
    R.collider(-7, 1.2, 7, 4); R.inter('view', 0, 0.2, { label: 'Посмотреть вниз, на сцену', fn: async (G) => { const y0 = G.cam.yOff; G.cam.yOff = -5; G.focus(0, 6, 16); await G.wait(1.2); await G.run(T.boxView); G.unfocus(); G.cam.yOff = y0; G.egg('boxview'); } });
    R.door('out', -4.5, { label: 'На бельэтаж', col: '#6a1a22', fn: (G) => G.goto('hub_mezz', 'box') }); R.spawn('start', -4.5, -3);
  },
};
/** Кабинетный рояль: лакированный корпус с бликами (пиксельная текстура), поднятая крышка на подпорке, три ноги с латунными колёсиками, банкетка. */
function grandPiano(R: Builder, x: number, z: number) {
  const g = new THREE.Group(); const lac = pxTex(32, 16, (c) => { rr(c, 0, 0, 32, 16, '#141016'); rr(c, 0, 0, 32, 2, '#3a3440'); rr(c, 2, 3, 12, 1, '#4a4450'); rr(c, 4, 5, 3, 1, '#6a6470'); rr(c, 0, 14, 32, 2, '#08060a'); rr(c, 24, 2, 1, 12, '#2a2430'); }, 'lacquer'); const L = new THREE.MeshLambertMaterial({ map: lac }), gold = new THREE.MeshLambertMaterial({ map: tex('gold') });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.55, 2.6), L); body.position.set(0, 1.2, -0.2); body.castShadow = true; g.add(body);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.55, 16, 1, false, 0, Math.PI), L); tail.rotation.y = Math.PI / 2; tail.position.set(0, 1.2, -1.5); tail.scale.set(1, 1, 0.9); g.add(tail);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.05, 2.4), L); lid.position.set(-0.45, 1.85, -0.4); lid.rotation.z = 0.55; g.add(lid); const prop = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.9, 0.04), gold); prop.position.set(0.55, 1.75, -0.4); prop.rotation.z = 0.4; g.add(prop);
  const keys = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.08, 0.38), new THREE.MeshLambertMaterial({ map: pxTex(36, 4, (c) => { rr(c, 0, 0, 36, 4, '#f4f0e8'); for (let i = 0; i < 36; i++) if ([1, 3, 6, 8, 10].includes(i % 12)) rr(c, i, 0, 1, 2, '#111111'); }, 'gkeys') })); keys.position.set(0, 1.1, 1.25); g.add(keys); const cheek = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.3, 0.42), L); cheek.position.set(0, 0.98, 1.25); g.add(cheek);
  for (const [lx, lz] of [[-0.85, 1.0], [0.85, 1.0], [0, -1.9]]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.95, 0.18), L); leg.position.set(lx, 0.47, lz); g.add(leg); const cast = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.22), gold); cast.position.set(lx, 0.04, lz); g.add(cast); }
  const lyre = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.6, 0.06), gold); lyre.position.set(0, 0.35, 0.6); g.add(lyre);
  const bench = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.12, 0.4), new THREE.MeshLambertMaterial({ map: tex('velvet') })); bench.position.set(0, 0.62, 1.95); g.add(bench); for (const sx of [-1, 1]) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.58, 0.32), L); bl.position.set(sx * 0.42, 0.29, 1.95); g.add(bl); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 1.05, z - 2.6, x + 1.05, z + 2.2); return g;
}
const rehearsal: RoomDef = {
  name: 'Репетиционный зал', floor: 'Бельэтаж', w: 26, d: 13, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.06, 0.97, 0.88], vig: 0.5 },
  build(R, G) {
    R.floor('parquet', { tint: '#a87a4a' }); R.walls('woodwall', { h: 6 }); R.ambient(0x4a3828, 1.6, 0xffd8b0);
    for (let i = 0; i < 6; i++) R.decal(canvasTex(24, 40, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 40); const gr = c.createLinearGradient(0, 0, 24, 40); gr.addColorStop(0, '#9a8a80'); gr.addColorStop(0.5, '#6a5c58'); gr.addColorStop(1, '#8a7a70'); c.fillStyle = gr; c.fillRect(1, 1, 22, 38); c.fillStyle = 'rgba(80,50,40,.5)'; c.fillRect(1, 26, 22, 13); c.fillStyle = 'rgba(255,236,210,.35)'; c.fillRect(3, 2, 3, 36); c.fillRect(14, 2, 1, 36); c.fillStyle = 'rgba(255,240,220,.2)'; c.fillRect(7, 2, 1, 30); }, 'rehmirror2'), { x: -10 + i * 4, y: 2.6, w: 3.9, h: 4.2, glow: true, color: 0xb8aca0 }); R.particles('dust', { count: 120, top: 6 });
    R.light(-8, 4, 2, 0xffb070, 10, 14); R.light(8, 4, 2, 0xffb070, 10, 14); window3D(R, 0, { wall: 'w', y: 3.4, w: 2, h: 3, night: false }); window3D(R, 0, { wall: 'e', y: 3.4, w: 2, h: 3, night: false });
    R.box(0, -6.1, 26, 0.12, 0.12, { tex: 'gold', y: 1.3, solid: false }); for (let x = -12; x <= 12; x += 4) R.box(x, -6.1, 0.1, 0.4, 1.3, { tex: 'metal', solid: false });
    grandPiano(R, 6.2, 0.4); R.look('piano', 6.2, 3.3, 'Рояль', T.piano, { egg: 'piano' }); R.sprite('bookstand', 3.6, 2.6, { scale: 1.1 });
    // центр зала: полукруг складных стульев вокруг разметки, сумка, бутылки воды, коврики
    for (const [x, z, fl] of [[-3.6, 2.6, false], [-1.4, 3.4, false], [1.6, 3.2, true]] as [number, number, boolean][]) R.sprite('chair', x, z, { scale: 1.0, flipX: fl, solid: 0.3 });
    const bagT = pxTex(18, 12, (c) => { rr(c, 1, 3, 16, 9, '#2f5a7a'); rr(c, 1, 3, 16, 2, '#4a7a9a'); rr(c, 5, 0, 8, 1, '#1a2a3a'); rr(c, 4, 1, 1, 3, '#1a2a3a'); rr(c, 13, 1, 1, 3, '#1a2a3a'); rr(c, 2, 7, 14, 1, '#d8d0c0'); rr(c, 13, 8, 4, 4, '#ff8fd0'); }, 'gymbag'); R.sprite(bagT, -2.6, 3.9, { scale: 1.1 });
    const botT = pxTex(10, 10, (c) => { for (const x of [1, 6]) { rr(c, x, 3, 3, 7, '#bfe0ff'); rr(c, x, 3, 1, 7, '#e8f6ff'); rr(c, x + 1, 1, 1, 2, '#2f7f82'); } }, 'bottles'); R.sprite(botT, -0.6, 3.8, { scale: 1 });
    R.decal(pxTex(16, 32, (c) => { rr(c, 0, 0, 16, 32, '#6a3a6a'); for (let y = 0; y < 32; y += 4) rr(c, 0, y, 16, 1, '#5a2a5a'); rr(c, 0, 0, 1, 32, '#8a5a8a'); }, 'yogamat'), { flat: true, x: 2.6, z: 1.2, y: 0.03, w: 0.9, h: 2.2, ry: 0 });
    R.box(-7.6, 0.6, 3.6, 0.08, 0.08, { tex: 'gold', y: 1.1, solid: false }); for (const dx of [-1.7, 1.7]) R.box(-7.6 + dx, 0.6, 0.1, 0.4, 1.1, { tex: 'metal', solid: false }); R.collider(-9.4, 0.4, -5.8, 0.8);
    for (let i = 0; i < 4; i++) R.sprite('chair', 11.6 - (i % 2) * 0.3, -3.8 + i * 1.6, { scale: 1.05, solid: 0.35, flipX: true }); coatStand(R, -11.6, -4.6); R.table(-5.6, 3.6, 2.8, 1.2); R.box(-6.4, 3.6, 0.22, 0.22, 0.36, { color: 0xd8ecff, opacity: 0.6, y: 1.1, solid: false }); for (let i = 0; i < 4; i++) { const pp = R.box(-5.4 + i * 0.35, 3.5 + (i % 2) * 0.15, 0.45, 0.6, 0.02, { color: 0xf2eadb, y: 1.1 + i * 0.012, solid: false, cast: false }); pp.rotation.y = i * 0.3 - 0.4; } R.look('scripts', -5.6, 4.8, 'Стол со сценариями', ['~: Шесть экземпляров сценария, у каждого пометки своим почерком. Седьмой без имени. В нём подчёркнута одна реплика: «Ну что, начнём?».']);
    for (let i = 0; i < 4; i++) R.sprite('chair', -11.5, 4 - i * 0.12, { y: i * 0.45, scale: 1.1 }); screen3D(R, -9.8, -1.6, { ry: 0.4 });
    const tape = canvasTex(64, 32, (c) => { const names = ['П', 'Р', 'М', 'Э', 'Л', 'А']; names.forEach((n, i) => { const x = 8 + i * 9, y = 10 + (i % 2) * 8; c.fillStyle = ['#c9a7ff', '#ffb057', '#ff8fd0', '#9fc3e8', '#ffe27a', '#ff7ab8'][i]; c.fillRect(x - 3, y, 7, 1); c.fillRect(x, y - 3, 1, 7); }); c.fillStyle = '#c8203c'; c.fillRect(29, 26, 7, 1); c.fillRect(32, 23, 1, 7); c.fillStyle = '#2f7f82'; c.fillRect(29, 27, 7, 1); c.fillRect(33, 23, 1, 7); }, 'tape');
    R.decal(tape, { flat: true, x: 0, z: -1.4, y: 0.03, w: 8, h: 4, opacity: 0.55 });
    R.box(0, -6.35, 26, 0.5, 0.4, { tex: 'gold', y: 5.6, solid: false, cast: false }); R.box(0, -6.4, 26, 0.3, 1.0, { tex: 'darkwood', y: 4.6, solid: false, cast: false }); for (let x = -11; x <= 11; x += 4.4) R.decal(pxTex(24, 8, (c) => { rr(c, 0, 0, 24, 8, '#3a2a1a'); rr(c, 1, 1, 22, 6, '#9cc2ee'); rr(c, 1, 5, 22, 2, '#e8d0a0'); rr(c, 12, 1, 1, 6, '#3a2a1a'); }, 'transom'), { x, y: 5.1, z: -6.22, w: 3.4, h: 0.9, glow: true, color: 0xd8d0c0, noSlot: true }); R.look('tape', 0, 1.6, 'Разметка на полу', T.tape);
    R.look('mirror', -3, -5.2, 'Зеркальная стена', T.rehMirror, { mask: 'none' }); R.look('mirrorTr', -3, -5.2, 'Зеркальная стена', T.rehMirrorTr, { mask: 'tragedy', photo: 'Две фигуры у станка' });
    R.look('barre', 4, -5.2, 'Балетный станок', T.barre);
    R.door('out', 0, { wall: 's', to: 'hub_mezz', spot: 'reh', label: 'На бельэтаж' }); R.spawn('start', 0, 4.4, 'b');
  },
  async enter(G) { if (!G.f.reh0) { G.f.reh0 = 1; await G.run(T.rehFirst); } },
};
const costume: RoomDef = {
  name: 'Костюмерная', floor: 'Партер', w: 26, d: 14, music: 'caper', amb: 'hall', step: 'wood', grade: { tint: [1.04, 0.97, 0.94], vig: 0.5 },
  build(R, G) {
    R.floor('floor'); R.walls('wallpaper', { h: 6, trim: 'darkwood' }); base(R, 1.5);
    for (const x of [-8, 0, 8]) R.light(x, 4.4, -1, 0xffd8a8, 9, 10, { flicker: 0.03 });
    costumeRack(R, -6, -5.6, 7, 0); costumeRack(R, 6, -5.6, 7, 3); costumeRack(R, -7, -1.4, 5, 5); costumeRack(R, 7, -1.4, 5, 1);
    R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, 40, 10); ptext(c, 'АЛЛА ЕВА', 20, 2, { size: 6, col: '#8e1830', align: 'center' }); }, 'tagAlla'), { x: -9, y: 2.9, z: -5.6, w: 1.6, h: 0.4, glow: true });
    R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, 40, 10); ptext(c, 'ВАРЯ', 20, 2, { size: 6, col: '#2f7f82', align: 'center' }); }, 'tagVarya'), { x: -3, y: 2.9, z: -5.6, w: 1.6, h: 0.4, glow: true });
    R.look('rackAlla', -6, -4.6, 'Вешалки «Алла Ева» и «Варя»', T.rackAlla, { mask: 'none' }); R.look('rackAllaTr', -6, -4.6, 'Подкладка платьев', T.rackAllaTr, { mask: 'tragedy' });
    for (const [x, z] of [[-11, 3], [11, 3.4], [3, 4.4]]) R.sprite(PROPTEX.mannequin(), x, z, { scale: 1.4, solid: 0.4 });
    R.look('mann', 3, 5.2, 'Манекен Королевы', T.mannequin);
    for (const [x, z, n] of [[-10.4, -5.2, 2], [10.6, -5.2, 2], [-5.4, 5.2, 1]]) { for (let i = 0; i < n; i++) R.sprite(PROPTEX.hatbox(), x + i * 0.9, z + (i % 2) * 0.2, { scale: 0.9 - i * 0.1 }); R.collider(x - 0.5, z - 0.3, x + n * 0.9 - 0.4, z + 0.4); }
    R.sprite(PROPTEX.trunk(), 7.0, 4.6, { scale: 1.5, solid: 0.9 }); R.sprite(PROPTEX.feathers(), 7.6, 4.4, { y: 0.9, scale: 1.2 }); R.sprite(PROPTEX.boa(), -2.4, 2.7, { y: 1.15, scale: 1.0 });
    R.table(-3.6, 2.6, 3, 1.4); R.sprite(canvasTex(16, 12, (c) => { c.fillStyle = '#2a2a2e'; c.fillRect(2, 4, 12, 8); c.fillRect(10, 0, 4, 6); c.fillStyle = '#d4ae48'; c.fillRect(4, 6, 6, 1); c.fillStyle = '#2f7f82'; c.fillRect(0, 11, 16, 1); }, 'sew'), -4, 2.6, { y: 1.15, scale: 1.2 }); R.look('sew', -3.6, 3.8, 'Швейная машинка', T.sewing);
    vanity(R, 0, -5.8, { w: 3, clutter: 4, photos: 2 }); screen3D(R, 10.6, -2.6, { ry: -0.5, col: '#5a2a4a' });
    R.door('out', 0, { wall: 's', to: 'hub_corridor', spot: 'costume', label: 'В коридор' }); R.spawn('start', 0, 5.6, 'b');
  },
  async enter(G) { if (!G.f.cost0) { G.f.cost0 = 1; await G.run(T.costumeFirst); } },
};
const trap: RoomDef = {
  name: 'Трюм', floor: 'Под сценой', w: 34, d: 16, music: 'backstage', amb: 'hum', step: 'metal', grade: { tint: [0.9, 0.95, 1.08], vig: 0.6, sat: 0.9 },
  build(R, G) {
    R.room.group.userData.bg = 0x050608; R.floor('metal', { tint: '#5a5e68' }); R.walls('brick', { h: 7 }); R.ambient(0x54505a, 3.0, 0xd0c0b0);
    // пол трюма: рельсы подъёмника, лужи, масляные пятна, затёртые дорожки
    for (const rz of [3.2, 4.8]) R.box(0, rz, 34, 0.14, 0.06, { tex: 'metal', tint: '#a8b0c0', solid: false, cast: false }); for (let x = -16; x <= 16; x += 1.1) R.box(x, 4, 0.24, 2.2, 0.03, { tex: 'darkwood', solid: false, cast: false });
    const puddle = pxTex(32, 16, (c) => { c.fillStyle = 'rgba(20,30,50,.75)'; c.beginPath(); c.ellipse(16, 8, 15, 6, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(120,150,200,.45)'; c.fillRect(8, 5, 7, 1); c.fillRect(18, 9, 5, 1); crisp(c, 32, 16); }, 'puddle2');
    for (const [x, z, w] of [[-7, 5.6, 2.6], [5, -1.2, 3.4], [-13, -2.6, 2], [11, 6.2, 1.8]]) R.decal(puddle, { flat: true, x, z, y: 0.025, w, h: w / 2 });
    const oil = pxTex(24, 24, (c) => { for (let i = 0; i < 40; i++) { c.fillStyle = `rgba(10,8,6,${0.08 + hsh(i) * 0.14})`; c.beginPath(); c.arc(12 + (hsh(i + 1) - 0.5) * 14, 12 + (hsh(i + 2) - 0.5) * 14, 2 + hsh(i + 3) * 4, 0, 7); c.fill(); } }, 'oil'); for (const [x, z] of [[-3, 1.4], [9, 2], [-10, 6.4], [3, 6.8]]) R.decal(oil, { flat: true, x, z, y: 0.022, w: 2.4, h: 2.4 }); R.particles('dust', { count: 90, top: 6, color: 0xc8d8ff });
    pGear(R, -6, 3.2, -6.6, 3, { speed: 0.12 }); pGear(R, -1.4, 1.6, -6.3, 1.4, { teeth: 10, speed: -0.26, tone: 1 }); pGear(R, 6, 3.4, -4.4, 3.2, { speed: 0.06, teeth: 24 }); pGear(R, 1.6, 1.4, -5.6, 1.2, { teeth: 12, speed: -0.16, tone: 1 }); pGear(R, 12, 2.4, -6.6, 2, { speed: -0.18 }); pGear(R, -9.2, 4.8, -7.2, 1.6, { teeth: 12, speed: 0.2, tone: 1 }); pGear(R, 9.4, 4.9, -6.9, 1.3, { teeth: 10, speed: 0.3, tone: 1 });
    R.collider(2.2, -5.8, 9.8, -3.2); R.spot(0, 7, 4, 0, 4, 0xffe8c0, 60, { angle: 0.22, cone: 0.05, pen: 0.2 }); R.box(0, 4, 2.4, 2.4, 0.1, { color: 0xfff0c8, emissive: 0x806030, y: 6.9, solid: false }); for (const [bx, bz, bw, bd] of [[0, 2.65, 3, 0.3], [0, 5.35, 3, 0.3], [-1.35, 4, 0.3, 3], [1.35, 4, 0.3, 3]]) R.box(bx, bz, bw, bd, 0.3, { tex: 'darkwood', y: 6.8, solid: false, cast: false });
    for (let x = -15; x <= 15; x += 3) R.box(x, -6, 0.3, 4, 0.4, { tex: 'darkwood', y: 6.6, solid: false, cast: false }); 
    for (const x of [-12, -9, 14]) { R.box(x, -6.5, 0.3, 0.3, 7, { tex: 'metal' }); R.box(x, -6.5, 0.9, 0.9, 1.2, { tex: 'metal', y: 2 + (x % 3), solid: false }); R.box(x + 0.25, -6.3, 0.03, 0.03, 7, { color: 0xb8a070, solid: false }); }
    for (const [x, z] of [[-14, 4], [-13, 5.4], [15, 4.8]]) R.sprite(PROPTEX.sandbag(), x, z, { scale: 1.4 }); R.sprite(PROPTEX.coil(), -10, 5, { scale: 1.6 });
    for (const x of [-12, 0, 12]) { R.light(x, 3.4, 2, 0xffd890, 12, 12, { flicker: 0.08 }); R.sprite('lamp', x, 2.4, { y: 0.1, scale: 0.8 }); }
    R.light(-6, 5, -3, 0xffc070, 14, 12); R.light(8, 4, -3, 0xffc070, 10, 12);
    R.box(-10, 2, 3, 2, 1.4, { tex: 'wood' }); R.decal(canvasTex(16, 10, (c) => { c.fillStyle = '#6e5133'; c.fillRect(0, 0, 16, 10); ptext(c, 'К.', 8, 1, { size: 8, col: '#2a1c14', align: 'center' }); }, 'crateK'), { x: -10, y: 0.8, z: 3.02, w: 1.4, h: 0.9 });
    R.look('crate', -10, 3.6, 'Ящик «К.»', T.crate); R.look('gears', -6, -4.4, 'Шестерни поворотного круга', T.gears);
    R.box(0, 4, 2.4, 2.4, 0.3, { tex: 'metal', tint: '#8a7a6a' }); for (const dx of [-1.1, 1.1]) R.box(dx, 4, 0.15, 0.15, 6, { tex: 'metal', solid: false });
    R.look('lift', 0, 5.6, 'Подъёмник люка', T.lift); for (const [x, z, s] of [[-6, 1.4, 1.2], [-4.8, 1.6, 0.9], [8, -2, 1.3], [9.2, -1.8, 0.9], [-12, -1.5, 1.1]]) R.box(x, z, s, s, s, { tex: 'wood', tint: '#a88a60' }); R.box(11, 2.2, 0.8, 0.8, 1.6, { tex: 'metal', tint: '#6a6a72' }); R.box(11, 2.2, 0.04, 0.04, 5.4, { color: 0x9a8a60, y: 1.6, solid: false, cast: false });
    R.decal(canvasTex(48, 24, (c) => { c.fillStyle = '#ff5a2a'; c.fillRect(1, 9, 7, 5); c.fillRect(3, 8, 4, 8); c.fillStyle = '#ffd0a0'; c.fillRect(2, 10, 2, 1); c.fillStyle = 'rgba(255,90,42,.55)'; c.fillRect(8, 11, 5, 2); c.fillRect(13, 12, 3, 1); }, 'paintsteps4'), { flat: true, x: 9, z: 4.4, y: 0.03, w: 9, h: 4.5 }); for (const [py, col] of [[5.0, 0x8a5a3a], [5.5, 0x6a6a72]] as number[][]) { R.box(0, -7.7, 34, 0.18, 0.18, { color: col, y: py, solid: false, cast: false }); for (let x = -15; x <= 15; x += 5) R.box(x, -7.75, 0.08, 0.25, 0.3, { color: 0x3a3a3a, y: py - 0.06, solid: false, cast: false }); } for (const [cx, cz] of [[-1.35, 2.65], [1.35, 2.65], [-1.35, 5.35], [1.35, 5.35]]) R.box(cx, cz, 0.04, 0.04, 2.2, { color: 0x4a4a52, y: 7.0, solid: false, cast: false });
    { R.sprite(pxTex(16, 12, (c) => { rr(c, 1, 2, 10, 9, '#9aa0aa'); rr(c, 1, 2, 10, 2, '#c8ccd4'); rr(c, 1, 9, 10, 2, '#5a5e68'); rr(c, 3, 4, 6, 4, '#e8e0c8'); rr(c, 4, 5, 4, 2, '#ff5a2a'); rr(c, 11, 3, 2, 7, '#6a6e78'); rr(c, 11, 4, 4, 6, '#ff5a2a'); rr(c, 13, 9, 3, 3, '#ff5a2a'); }, 'paintcan'), 5.0, 4.6, { scale: 1.3 }); R.sprite(canvasTex(10, 4, (c) => { c.fillStyle = '#8a6a3a'; c.fillRect(0, 1, 7, 2); c.fillStyle = '#ff5a2a'; c.fillRect(7, 0, 3, 4); }, 'brush'), 5.9, 5.0, { y: 0.02, scale: 1 }); } R.look('paint', 9, 5.4, 'Следы красной краски', T.paint);
    R.inter('hatch', 0, 3, { label: 'Подъёмник, наверх, на сцену', fn: async (G) => { G.sfx('gear'); await G.goto('hub_stage', 'hatch', { fade: 'fade' }); } });
    R.door('stairs', 16.2, { wall: 's', to: 'hub_corridor', spot: 'trap', label: 'Лестница, наверх, в коридор', sign: '↑ В КОРИДОР' });
    R.spawn('start', 13.4, 5.2, 'l'); R.spawn('stairs', 13.4, 5.2, 'l');
    // машинерия в центре трюма: лебёдка с барабаном, контргрузы, верстак с инструментом, катушка троса, клетчатые рабочие лампы
    const winchT = pxTex(40, 30, (c) => { rr(c, 2, 24, 36, 5, '#3a3a40'); rr(c, 2, 24, 36, 1, '#6a6a74'); rr(c, 6, 6, 4, 18, '#4a4e58'); rr(c, 30, 6, 4, 18, '#4a4e58'); rr(c, 10, 8, 20, 12, '#7a5a34'); for (let y = 9; y < 20; y += 2) rr(c, 10, y, 20, 1, '#a88a50'); rr(c, 10, 8, 20, 1, '#c8a060'); rr(c, 4, 4, 8, 8, '#8a6a2a'); rr(c, 6, 6, 4, 4, '#3a2a1a'); rr(c, 34, 12, 4, 2, '#c8302a'); rr(c, 37, 8, 2, 8, '#2a2a2e'); for (let x = 4; x < 38; x += 6) rr(c, x, 26, 2, 2, '#9aa0aa'); }, 'winch');
    R.sprite(winchT, -3.2, 0.2, { scale: 1.6, solid: 0.6 }); R.box(-3.2, -2.8, 0.05, 0.05, 6, { color: 0x9a8a60, y: 1.2, solid: false, cast: false });
    const wtT = pxTex(14, 30, (c) => { for (let i = 0; i < 7; i++) { rr(c, 1, 2 + i * 4, 12, 3, i % 2 ? '#5a5e68' : '#6a6e78'); rr(c, 1, 2 + i * 4, 12, 1, '#9aa0aa'); } rr(c, 6, 0, 2, 30, '#2a2a2e'); }, 'counterw'); R.sprite(wtT, 3.4, -0.6, { scale: 1.4 }); R.sprite(wtT, 4.2, -0.4, { scale: 1.1 });
    const bench = R.box(-7.4, -4.6, 3.2, 1.1, 0.12, { tex: 'darkwood', y: 0.95 }); for (const [dx, dz] of [[-1.45, -0.45], [1.45, -0.45], [-1.45, 0.45], [1.45, 0.45]]) R.box(-7.4 + dx, -4.6 + dz, 0.12, 0.12, 0.95, { tex: 'darkwood', solid: false }); void bench;
    const toolT = pxTex(28, 10, (c) => { rr(c, 0, 4, 10, 6, '#c8302a'); rr(c, 0, 4, 10, 1, '#e86a5a'); rr(c, 3, 2, 4, 2, '#3a3a3a'); rr(c, 12, 7, 8, 2, '#8a6a3a'); rr(c, 19, 5, 3, 5, '#9aa0aa'); rr(c, 23, 3, 2, 7, '#c8a040'); rr(c, 22, 2, 4, 2, '#9aa0aa'); }, 'tools'); R.sprite(toolT, -7.4, -4.6, { y: 1.07, scale: 1.2, thin: true }); R.sprite('wheel', 6.6, 0.8, { scale: 1.3 }); R.sprite(PROPTEX.coil(), 7.8, 1.2, { scale: 1.2 }); R.sprite(PROPTEX.sandbag(), -1.4, 0.8, { scale: 1.1 });
    const cage = pxTex(10, 14, (c) => { rr(c, 4, 0, 2, 3, '#2a2a2e'); rr(c, 2, 3, 6, 9, '#ffd890'); rr(c, 3, 4, 4, 6, '#fff4d0'); for (let y = 3; y < 12; y += 3) rr(c, 2, y, 6, 1, '#3a3a40'); rr(c, 2, 3, 1, 9, '#3a3a40'); rr(c, 7, 3, 1, 9, '#3a3a40'); rr(c, 1, 12, 8, 2, '#3a3a40'); }, 'cagelamp');
    // передний край: низкие поддоны, лежащая стремянка, кабели по полу, тёплые пятна света (ничего высокого, чтобы не закрывать героиню)
    const pallet = canvasTex(16, 16, (c) => { c.fillStyle = '#5a3e24'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#9a7448'; for (let x = 0; x < 16; x += 4) c.fillRect(x, 0, 3, 16); c.fillStyle = '#c89a60'; for (let x = 0; x < 16; x += 4) c.fillRect(x, 0, 1, 16); }, 'pallet'); pallet.wrapS = pallet.wrapT = THREE.RepeatWrapping;
    for (const [x, z, ry] of [[-6.2, 6.9, 0.1], [4.4, 7.0, -0.15], [-12.6, 7.1, 0.3]]) { const m = R.box(x, z, 1.8, 1.2, 0.28, { tex: 'wood', solid: false, ry }); (m.material as THREE.MeshLambertMaterial).map = pallet; }
    R.sprite(PROPTEX.sandbag(), 4.4, 7.0, { y: 0.28, scale: 1.0 }); R.sprite(PROPTEX.coil(), -6.2, 6.9, { y: 0.28, scale: 0.9 });
    const cable = pxTex(64, 8, (c) => { c.strokeStyle = '#1a1a1e'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, 4); for (let x = 0; x <= 64; x += 8) c.quadraticCurveTo(x + 4, (x / 8) % 2 ? 1 : 7, x + 8, 4); c.stroke(); c.strokeStyle = '#c8a040'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, 5); for (let x = 0; x <= 64; x += 8) c.quadraticCurveTo(x + 4, (x / 8) % 2 ? 7 : 2, x + 8, 5); c.stroke(); }, 'cables'); for (const [x, z] of [[-1, 6.4], [8, 6.6], [-9, 6.2]]) R.decal(cable, { flat: true, x, z, y: 0.03, w: 6, h: 0.75 });
    for (const x of [-8, 0, 8]) R.light(x, 2.6, 6.4, 0xffc070, 6, 9, { pool: true });
    for (const [x, z] of [[-6.8, 0.6], [3.6, 1.4], [-11.6, 4.2]]) { R.sprite(cage, x, z, { y: 3.6, glow: true, scale: 1.1 }); R.box(x, z, 0.03, 0.03, 2.4, { color: 0x2a2a2e, y: 4.6, solid: false, cast: false }); R.light(x, 3.4, z, 0xffc070, 7, 9, { pool: true }); } R.spawn('hatch', 0, 5.6);
  },
  async enter(G) { if (!G.f.trap0) { G.f.trap0 = 1; await G.run(T.trapFirst); } },
};
// Пролог: балкон в Сиднее накануне дня рождения.
/** Ночная панорама Сиднея: небо, Норт-Шор, небоскрёбы CBD, Сидней-тауэр. */
const sydCity = () => pxTex(1024, 300, (c, W, H) => {
  const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#070a22'); g.addColorStop(0.45, '#151a44'); g.addColorStop(0.78, '#2e2856'); g.addColorStop(0.9, '#4a3458'); g.addColorStop(1, '#3a2a40'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += 2) for (let x = (y / 2) % 2; x < W; x += 2) if (hsh(x * 0.37 + y * 1.3) > 0.985) rr(c, x, y, 1, 1, 'rgba(10,10,30,.5)'); // дизер неба
  for (let i = 0; i < 220; i++) { const x = hsh(i) * W, y = hsh(i + 0.5) * H * 0.55; rr(c, x, y, 1, 1, hsh(i + 9) > 0.8 ? '#ffffff' : '#a8b0d8'); if (hsh(i + 3) > 0.95) { rr(c, x - 1, y, 3, 1, 'rgba(255,255,255,.5)'); rr(c, x, y - 1, 1, 3, 'rgba(255,255,255,.5)'); } }
  c.fillStyle = '#f4ecd0'; c.beginPath(); c.arc(880, 96, 15, 0, 7); c.fill(); c.fillStyle = '#d8ccb0'; for (const [x, y, r] of [[874, 92, 3], [886, 102, 4], [884, 88, 2]]) { c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); }
  c.fillStyle = 'rgba(244,236,208,.12)'; c.beginPath(); c.arc(880, 96, 30, 0, 7); c.fill();
  // дальние холмы Норт-Шора с огоньками
  c.fillStyle = '#141838'; c.beginPath(); c.moveTo(0, H); for (let x = 0; x <= W; x += 8) c.lineTo(x, 232 + Math.sin(x * 0.011) * 8 + Math.sin(x * 0.037) * 4); c.lineTo(W, H); c.fill();
  for (let i = 0; i < 260; i++) { const x = hsh(i + 40) * W, y = 238 + hsh(i + 41) * 40; rr(c, x, y, 1, 1, ['#ffd890', '#ffe8b8', '#ff9a60', '#c8d8ff'][i % 4]); }
  // небоскрёбы CBD
  const tower = (x: number, w: number, h: number, s: number) => { const top = 286 - h; const body = ['#1a2040', '#20264a', '#181c36', '#262a50'][s % 4]; rr(c, x, top, w, h + 14, body); rr(c, x + w - Math.max(2, w >> 2), top, Math.max(2, w >> 2), h + 14, 'rgba(0,0,0,.35)'); rr(c, x, top, w, 1, '#3e4670');
    const wc = s % 3 === 0 ? ['#9fd0ff', '#d8ecff'] : ['#ffd890', '#fff0c0']; for (let y = top + 3; y < 296; y += 3) for (let xx = x + 1; xx < x + w - 1; xx += 2) if (hsh(xx * 3.1 + y * 7.7 + s) > (s % 5 === 1 ? 0.35 : 0.58)) rr(c, xx, y, 1, 1, wc[(xx + y) % 2]);
    if (s % 4 === 0) { rr(c, x + (w >> 1), top - 8, 1, 8, '#3e4670'); rr(c, x + (w >> 1), top - 9, 1, 1, '#ff4040'); }
    if (s % 6 === 2) { rr(c, x, top + 2, w, 2, '#5fd0c8'); } };
  for (let i = 0; i < 46; i++) { const x = 300 + i * 11 + hsh(i) * 8, cx = Math.abs(x - 560) / 260; tower(x, 9 + (i % 4) * 3, 30 + (1 - cx) * 110 * (0.5 + hsh(i + 7) * 0.6), i); }
  for (let i = 0; i < 24; i++) tower(60 + i * 10 + hsh(i + 3) * 6, 8 + (i % 3) * 2, 18 + hsh(i + 2) * 34, i + 3); for (let i = 0; i < 20; i++) tower(820 + i * 10, 8 + (i % 3) * 2, 14 + hsh(i + 5) * 30, i + 5);
  // Сидней-тауэр
  rr(c, 638, 84, 5, 210, '#2a3054'); rr(c, 638, 84, 2, 210, '#3e4670'); rr(c, 630, 92, 21, 14, '#262c4e'); rr(c, 630, 96, 21, 3, '#ffd060'); rr(c, 632, 101, 17, 2, '#c8a040'); rr(c, 634, 88, 13, 4, '#3e4670'); rr(c, 640, 52, 1, 36, '#4a5280'); rr(c, 640, 51, 1, 1, '#ff4040'); for (let k = 0; k < 6; k++) rr(c, 639, 120 + k * 26, 3, 1, '#fff0c0');
  // набережная: огни у воды
  rr(c, 0, 290, W, 10, '#0c1028'); for (let x = 0; x < W; x += 3) if (hsh(x * 0.7) > 0.45) rr(c, x, 288 + (x % 2), 2, 1, ['#ffd890', '#fff0c0', '#ff9a60'][x % 3]);
}, 'sydcity');
/** Харбор-бридж: арка с фермами, пилоны, подсветка. */
const sydBridge = () => pxTex(640, 200, (c, W) => {
  const st = '#46507a', hi = '#8a96c0', lt = '#fff0c0';
  const top = (x: number) => { const t = (x - 320) / 215; return 22 + 66 * t * t; }, bot = (x: number) => { const t = (x - 320) / 215; return 46 + 120 * t * t; };
  for (let x = 105; x <= 535; x++) { const a = top(x), b = Math.min(bot(x), 168); rr(c, x, a, 1, 3, hi); rr(c, x, a + 3, 1, 2, st); rr(c, x, b - 3, 1, 4, st); }
  for (let x = 110; x <= 530; x += 9) { const a = top(x) + 4, b = Math.min(bot(x), 168) - 2; rr(c, x, a, 2, b - a, st); const x2 = x + 9, a2 = top(x2) + 4, b2 = Math.min(bot(x2), 168) - 2; c.strokeStyle = st; c.lineWidth = 1; c.beginPath(); c.moveTo(x + 1, (x / 9) % 2 ? a : b); c.lineTo(x2, (x / 9) % 2 ? b2 : a2); c.stroke(); }
  for (let x = 140; x <= 500; x += 9) { const b = bot(x); if (b < 140) rr(c, x, b, 1, 140 - b, '#2a3050'); }
  for (let x = 108; x <= 532; x += 6) rr(c, x, top(x) - 1, 2, 2, lt); // гирлянда по арке
  rr(c, 0, 140, W, 7, '#262c4a'); rr(c, 0, 140, W, 1, hi); for (let x = 2; x < W; x += 5) rr(c, x, 143, 2, 1, x % 3 ? '#ffd890' : '#ff6a50'); rr(c, 0, 147, W, 3, '#141830');
  for (const px of [58, 538]) { rr(c, px, 96, 44, 104, '#5a544e'); rr(c, px, 96, 8, 104, '#7a726a'); rr(c, px + 36, 96, 8, 104, '#3a3632'); for (let y = 102; y < 200; y += 6) rr(c, px, y, 44, 1, '#3a3632'); rr(c, px - 2, 90, 48, 6, '#6a645c'); rr(c, px + 4, 86, 10, 4, '#6a645c'); rr(c, px + 30, 86, 10, 4, '#6a645c'); rr(c, px + 16, 104, 12, 30, '#2a2622'); rr(c, px + 18, 106, 8, 8, '#ffd890'); for (const wx of [px + 5, px + 33]) rr(c, wx, 112, 5, 7, '#ffd890'); rr(c, px + 21, 80, 2, 10, '#c8c0b0'); rr(c, px + 23, 80, 7, 4, '#2a4aa0'); }
  for (const px of [10, 600]) { rr(c, px, 150, 8, 50, '#4a4640'); rr(c, px, 150, 2, 50, '#6a645c'); }
  crisp(c, W, 200);
}, 'sydbridge');
/** Сиднейская опера: подиум и паруса-раковины. */
const sydOpera = () => pxTex(330, 130, (c, W, H) => {
  rr(c, 0, 104, W, 26, '#7a6450'); rr(c, 0, 104, W, 3, '#c8a878'); rr(c, 10, 110, W - 20, 6, '#ffd890'); for (let x = 14; x < W - 14; x += 6) rr(c, x, 110, 1, 6, '#8a6a40'); for (let y = 118; y < 130; y += 3) rr(c, 0, y, W, 1, '#5a4836');
  const sail = (x0: number, x1: number, ax: number, ay: number, dir: number) => {
    c.fillStyle = '#e8e4da'; c.beginPath(); c.moveTo(x0, 104); c.quadraticCurveTo(x0 + dir * 4, ay + 18, ax, ay); c.quadraticCurveTo(ax + (x1 - ax) * 0.7, ay + (104 - ay) * 0.35, x1, 104); c.closePath(); c.fill();
    c.save(); c.clip(); for (let y = ay; y < 104; y += 3) for (let x = Math.min(x0, x1); x < Math.max(x0, x1); x += 3) if ((x + y) % 6 === 0) rr(c, x, y, 2, 1, '#c8c8cc'); const sh = c.createLinearGradient(x0, 0, x1, 0); sh.addColorStop(0, 'rgba(255,248,230,0)'); sh.addColorStop(1, 'rgba(70,80,120,.55)'); c.fillStyle = sh; c.fillRect(0, 0, W, H); rr(c, 0, 92, W, 12, 'rgba(255,200,120,.35)'); c.restore();
    c.strokeStyle = '#fffaf0'; c.beginPath(); c.moveTo(x0, 104); c.quadraticCurveTo(x0 + dir * 4, ay + 18, ax, ay); c.stroke(); };
  sail(40, 120, 54, 34, 1); sail(80, 150, 92, 22, 1); sail(118, 176, 128, 40, 1); sail(150, 196, 160, 58, 1);
  sail(190, 250, 202, 40, 1); sail(222, 280, 234, 30, 1); sail(256, 300, 266, 52, 1); sail(14, 54, 22, 70, 1); sail(290, 318, 298, 76, 1);
  crisp(c, W, H);
}, 'sydopera');
/** Тёмная вода залива с рябью; повторяется. */
const sydWater = () => { const t = pxTex(64, 64, (c) => { rr(c, 0, 0, 64, 64, '#08122c'); for (let i = 0; i < 90; i++) { const x = hsh(i) * 64, y = Math.floor(hsh(i + 0.3) * 32) * 2, l = 3 + hsh(i + 2) * 8; rr(c, x, y, l, 1, i % 3 ? '#122048' : '#1c2c5c'); if (x + l > 64) rr(c, x - 64, y, l, 1, i % 3 ? '#122048' : '#1c2c5c'); } }, 'sydwater'); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
/** Дорожка отражения: штрихи по воде, гаснущие к зрителю. */
const reflTex = (col: string, key: string) => pxTex(24, 96, (c) => { for (let y = 0; y < 96; y += 2) { const k = 1 - y / 96; const n = Math.floor(k * 6) + 1; for (let i = 0; i < n; i++) { const w = 2 + hsh(y * 3 + i) * 7 * k, x = 12 + (hsh(y + i * 7) - 0.5) * 18 * (0.4 + k * 0.6) - w / 2; c.globalAlpha = 0.25 + k * 0.75; rr(c, x, y, w, 1, col); } } c.globalAlpha = 1; }, 'refl' + key);
const cityRefl = () => pxTex(256, 64, (c) => { for (let x = 0; x < 256; x += 2) { const col = ['#ffd890', '#fff0c0', '#9fd0ff', '#ff9a60'][Math.floor(hsh(x) * 4)]; const L = 10 + hsh(x + 1) * 50; for (let y = 0; y < L; y += 2) if (hsh(x * 7 + y) > 0.35) { c.globalAlpha = (1 - y / L) * 0.8; rr(c, x, y, 1 + (hsh(y + x) > 0.7 ? 1 : 0), 1, col); } } c.globalAlpha = 1; }, 'cityrefl');
/** Фасад дома под балконом: кромка плиты, штукатурка, окна нижней квартиры. */
const sydFacade = () => { const t = pxTex(128, 96, (c) => { rr(c, 0, 0, 128, 96, '#3a3648'); rr(c, 0, 0, 128, 7, '#9a948c'); rr(c, 0, 0, 128, 1, '#c8c2b8'); rr(c, 0, 7, 128, 2, '#1a1824'); for (let x = 0; x < 128; x += 2) for (let y = 10; y < 96; y += 2) if (hsh(x * 1.7 + y * 3.1) > 0.8) rr(c, x, y, 1, 1, '#46425a');
  for (const wx of [12, 76]) { rr(c, wx - 2, 20, 40, 46, '#24202e'); rr(c, wx, 22, 36, 42, '#ffcf84'); rr(c, wx, 22, 36, 6, '#ffe8b8'); rr(c, wx, 22, 9, 42, '#a3384a'); rr(c, wx + 27, 22, 9, 42, '#a3384a'); rr(c, wx + 17, 22, 2, 42, '#5a4030'); rr(c, wx, 42, 36, 2, '#5a4030'); rr(c, wx + 12, 46, 6, 12, '#7a5a3a'); rr(c, wx - 3, 64, 42, 3, '#8a847c'); }
  rr(c, 58, 30, 12, 9, '#c8c4bc'); rr(c, 59, 31, 10, 7, '#9a968e'); for (let k = 0; k < 4; k++) rr(c, 60, 32 + k * 2, 8, 1, '#6a665e');
  const g = c.createLinearGradient(0, 60, 0, 96); g.addColorStop(0, 'rgba(5,6,14,0)'); g.addColorStop(1, 'rgba(5,6,14,1)'); c.fillStyle = g; c.fillRect(0, 60, 128, 36); }, 'sydfacade'); t.wrapS = THREE.RepeatWrapping; return t; };
/** Шезлонг сбоку: тиковая рама, подушка, поднятая спинка. */
const loungerTex = () => pxTex(46, 22, (c) => { rr(c, 2, 13, 42, 2, '#6a4a2a'); rr(c, 2, 13, 42, 1, '#9a7448'); for (const x of [6, 22, 38]) { rr(c, x, 15, 2, 7, '#5a3a20'); rr(c, x, 15, 1, 7, '#8a6038'); } rr(c, 14, 9, 30, 4, '#ece6da'); rr(c, 14, 9, 30, 1, '#fffaf0'); rr(c, 14, 12, 30, 1, '#b8b0a4'); for (let x = 18; x < 44; x += 6) rr(c, x, 9, 1, 4, '#c8c0b4');
  for (let k = 0; k < 12; k++) { rr(c, 3 + k, 12 - k * 0.9, 3, 3, '#ece6da'); rr(c, 2 + k, 13 - k * 0.9, 1, 2, '#6a4a2a'); } rr(c, 4, 2, 6, 3, '#c41e3a'); rr(c, 5, 2, 4, 1, '#e8506a'); rr(c, 30, 7, 10, 3, '#2f7f82'); rr(c, 30, 7, 10, 1, '#5fb0b0'); crisp(c, 46, 22); }, 'lounger');
/** Пляжный зонт в полоску. */
const umbrellaTex = () => pxTex(60, 62, (c) => { for (let x = 0; x < 60; x++) { const t = (x - 30) / 30, y = 6 + t * t * 10; const band = Math.floor((x + 3) / 8) % 2; rr(c, x, y, 1, 14 - t * t * 4, band ? '#c41e3a' : '#f4ece0'); rr(c, x, y, 1, 1, band ? '#e8506a' : '#ffffff'); rr(c, x, y + 13 - t * t * 4, 1, 1, band ? '#7a0e22' : '#b8b0a4'); if (x % 8 === 4) rr(c, x, y + 14 - t * t * 4, 1, 2, band ? '#c41e3a' : '#f4ece0'); }
  rr(c, 29, 0, 2, 6, '#c8c0b4'); rr(c, 29, 18, 2, 40, '#e8e0d4'); rr(c, 30, 18, 1, 40, '#9a9288'); rr(c, 22, 57, 16, 5, '#5a5a62'); rr(c, 22, 57, 16, 1, '#8a8a92'); crisp(c, 60, 62); }, 'umbrella2');
/** Матовая перегородка к соседям. */
const frostTex = () => pxTex(64, 40, (c) => { const g = c.createLinearGradient(0, 0, 64, 0); g.addColorStop(0, '#5a6a88'); g.addColorStop(1, '#8a9ab8'); c.fillStyle = g; c.fillRect(0, 0, 64, 40); for (let x = 0; x < 64; x += 4) rr(c, x, 0, 1, 40, 'rgba(255,255,255,.18)'); rr(c, 40, 8, 14, 22, 'rgba(255,214,150,.35)'); rr(c, 0, 0, 64, 2, '#c8ccd4'); rr(c, 0, 38, 64, 2, '#3a3a44'); rr(c, 0, 0, 2, 40, '#c8ccd4'); rr(c, 62, 0, 2, 40, '#3a3a44'); }, 'frost');
/** Гирлянда: провод с провисами и тёплыми лампочками. */
function stringLights(R: Builder, x0: number, x1: number, z: number, y: number, sag = 0.35) {
  const bulb = pxTex(5, 7, (c) => { rr(c, 2, 0, 1, 2, '#2a2a2a'); rr(c, 1, 2, 3, 4, '#ffcf70'); rr(c, 1, 2, 2, 2, '#fff4c8'); rr(c, 2, 6, 1, 1, '#ff9a40'); }, 'bulb'); const N = 30, span = (x1 - x0) / 3;
  const pts: THREE.Vector3[] = []; for (let i = 0; i <= N; i++) { const x = x0 + (x1 - x0) * i / N, u = ((x - x0) % span) / span; pts.push(new THREE.Vector3(x, y - Math.sin(u * Math.PI) * sag, z)); }
  R.room.group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x1a1612 })));
  for (let i = 1; i < N; i++) { if (i % 10 === 0) continue; const p = pts[i]; R.sprite(bulb, p.x, p.z, { y: p.y - 0.42, glow: true, scale: 1.2 }); }
}
const sydney: RoomDef = {
  name: 'Сидней. 23:41', chapter: 'Пролог', w: 18, d: 9, music: 'morning', amb: 'wind', step: 'stone', grade: { tint: [0.92, 0.95, 1.1], vig: 0.42, bloom: 0.7, sat: 1.05 }, noMasks: true, noCamera: true,
  card: (G) => G.f.syd0 ? null : (G.f.syd0 = 1, [['ПРОЛОГ', 'act'], 'Сидней. Без девятнадцати полночь.', ['Завтра Варе восемнадцать.', 'sm']]),
  build(R, G) {
    R.room.group.userData.bg = 0x060a1c; R.floor('stone', { tint: '#b8a898', apron: 0 }); R.ambient(0x2a3458, 1.7, 0x8aa0d8);
    // квартира, западная стена с окном и дверью; балкон смотрит на север, на залив
    R.walls('plaster', { h: 6, tint: '#d8c8b8', n: false, e: false, skirt: false }); window3D(R, -1.6, { wall: 'w', y: 3.2, w: 2, h: 3, curtains: true }); R.door('home', 2.4, { wall: 'w', label: 'Комната', col: '#e8e0d0', fn: (G) => G.run(['~: Ещё рано. Пять минут на воздухе.']) });
    R.box(-9.2, 6.6, 0.4, 4.2, 6, { tex: 'plaster', tint: '#a89888', solid: false }); R.box(-9.2, -2, 0.6, 9.4, 0.3, { tex: 'stone', tint: '#c8c0b4', y: 6, solid: false, cast: false });
    R.light(-7.4, 3, -1.6, 0xffd8a0, 8, 8); // свет из комнаты
    // ---- панорама залива (слои с параллаксом) ----
    const water = new THREE.Mesh(new THREE.PlaneGeometry(260, 150), new THREE.MeshBasicMaterial({ map: sydWater() })); (water.material as THREE.MeshBasicMaterial).map!.repeat.set(52, 30); water.rotation.x = -Math.PI / 2; water.position.set(0, -24, -64); R.room.group.add(water);
    layer(R, sydCity(), 0, -9, -128, 190, 30);
    layer(R, cityRefl(), 0, -23.9, -116, 190, 26, { flat: true, add: true, opacity: 0.85 });
    layer(R, sydBridge(), -24, -14, -100, 64, 20);
    layer(R, reflTex('#fff0c0', 'br'), -24, -23.88, -88, 50, 22, { flat: true, add: true, opacity: 0.5 });
    layer(R, sydOpera(), 21, -16.4, -84, 42, 16.6);
    layer(R, reflTex('#ffe0a8', 'op'), 21, -23.86, -72, 30, 22, { flat: true, add: true, opacity: 0.7 });
    layer(R, reflTex('#f4ecd0', 'moon'), 50, -23.85, -100, 14, 40, { flat: true, add: true, opacity: 0.45 });
    // паромы с огоньками ходят по заливу
    const ferry = pxTex(40, 12, (c) => { rr(c, 2, 6, 36, 4, '#1e3a2a'); rr(c, 0, 8, 40, 2, '#0e1a14'); rr(c, 8, 2, 22, 4, '#e8d8a8'); for (let x = 9; x < 29; x += 3) rr(c, x, 3, 2, 2, '#ffd060'); rr(c, 18, 0, 2, 2, '#3a3a3a'); rr(c, 2, 6, 2, 1, '#ff3030'); rr(c, 36, 6, 2, 1, '#30ff60'); }, 'ferry');
    const boats = [[-10, -48, 1.6], [34, -74, -1.1]].map(([x, z, v]) => { const m = layer(R, ferry, x, -23.2, z, 4.4, 1.32); return { m, v }; });
    R.onUpdate((dt) => { for (const b of boats) { b.m.position.x += b.v * dt; if (b.m.position.x > 70) b.m.position.x = -70; if (b.m.position.x < -70) b.m.position.x = 70; } });
    // ---- сам дом: торец плиты и фасад нижней квартиры, соседний балкон за матовой перегородкой ----
    const fac = new THREE.Mesh(new THREE.PlaneGeometry(64, 8), new THREE.MeshLambertMaterial({ map: sydFacade() })); (fac.material as THREE.MeshLambertMaterial).map!.repeat.set(8, 1); fac.position.set(0, -4.4, 4.52); R.room.group.add(fac);
    const under = new THREE.Mesh(new THREE.PlaneGeometry(64, 40), new THREE.MeshBasicMaterial({ color: 0x05060e })); under.position.set(0, -28, 4.5); R.room.group.add(under);
    R.floor('stone', { x: 21, w: 24, z: 0, d: 9, tint: '#8a8078' }); falloff(R, 21, 0, 26, 12, 0.02, 'rgba(6,8,20,0.92)');
    R.box(9.35, 0.1, 0.16, 8.8, 2.4, { tex: 'metal', tint: '#6a6a78', solid: false }); R.decal(frostTex(), { x: 9.26, y: 1.3, z: 0.1, w: 8.6, h: 2.2, ry: -Math.PI / 2, noSlot: true }); R.collider(9.1, -4.4, 9.5, 4.5);
    balustrade(R, 9.6, -4.3, 30, -4.3, { h: 1.2, solid: false }); balustrade(R, 9.6, 4.45, 30, 4.45, { h: 1.0, solid: false });
    R.sprite(palmTex(), 11.4, -3.4, { scale: 0.8 }); R.sprite('bush', 13, 3.6, { scale: 1.6 }); R.sprite(pxTex(30, 20, (c) => { c.strokeStyle = '#3a3a44'; c.lineWidth = 2; c.beginPath(); c.arc(7, 13, 6, 0, 7); c.stroke(); c.beginPath(); c.arc(23, 13, 6, 0, 7); c.stroke(); rr(c, 7, 6, 16, 2, '#a3122a'); rr(c, 14, 6, 2, 8, '#a3122a'); rr(c, 20, 3, 4, 2, '#222'); rr(c, 6, 4, 5, 2, '#222'); crisp(c, 30, 20); }, 'bike'), 15, -1.2, { scale: 1.2 });
    // ---- балкон: гирлянда, мебель, цветы ----
    balustrade(R, -9, -4.3, 9, -4.3, { h: 1.2 }); R.collider(-9, -5, 9, -4.1); balustrade(R, -9, 4.45, 9, 4.45, { h: 1.0, solid: false });
    for (const x of [-9, 9]) { R.box(x, -4.3, 0.3, 0.3, 2.9, { tex: 'darkwood', solid: false }); }
    stringLights(R, -9, 9, -4.35, 2.85, 0.4); R.light(-4, 2.2, -3.6, 0xffc870, 7, 8); R.light(4.5, 2.2, -3.6, 0xffc870, 7, 8); R.light(0, 2, -3.8, 0xffb860, 2, 6, { pool: true });
    R.sprite(loungerTex(), -1.5, -1.2, { scale: 1.0 }); R.collider(-2.9, -1.5, -0.1, -0.9);
    R.box(0.4, -3.0, 0.9, 0.9, 0.7, { tex: 'wood', tint: '#e8d0a8' }); R.sprite(pxTex(50, 24, (c) => { rr(c, 2, 4, 46, 20, '#8a6a42'); for (let y = 5; y < 24; y += 2) for (let x = 2 + (y % 4) / 2; x < 48; x += 3) rr(c, x, y, 2, 1, '#a8844e'); rr(c, 2, 4, 46, 2, '#c8a46a'); rr(c, 0, 8, 4, 16, '#7a5a36'); rr(c, 46, 8, 4, 16, '#6a4a2a'); rr(c, 6, 0, 18, 6, '#ece6da'); rr(c, 26, 0, 18, 6, '#e8e0d4'); rr(c, 6, 0, 18, 1, '#fffaf0'); rr(c, 26, 0, 18, 1, '#fffaf0'); rr(c, 10, 0, 8, 3, '#2f7f82'); rr(c, 2, 22, 46, 2, '#4a3420'); }, 'wicker'), -4.4, 3.4, { scale: 1.0 }); R.collider(-5.9, 3.0, -2.9, 3.8); pPalm(R, 0.6, 4.0);
    R.sprite(canvasTex(6, 10, (c) => { c.fillStyle = '#1a1a22'; c.fillRect(0, 0, 6, 10); c.fillStyle = '#6a8ad0'; c.fillRect(1, 1, 4, 7); }, 'phone'), 0.9, -2.2, { y: 0.7, glow: true, scale: 0.8 }); R.light(0.9, 1.0, -2.0, 0x6a8ad0, 1.5, 2.5, { pool: true });
    R.look('phone', 0.4, -2.0, 'Телефон', ['~: Мама: «Спи уже». Папа: стикер с тортом и семнадцать восклицательных знаков.', '~: Матвей: «Надень завтра красный лонгслив, он счастливый, я знаю, я дарил». Я и так в нём, с утра не снимала.', '~: Полина прислала голосовое на две минуты. Там в основном смех.']);
    R.look('view', 5, -3.4, 'Вид на залив', ['~: Мост и опера. Ночью огни на мосту мигают, как рампа перед спектаклем.', '~: Красиво. Завтра тоже будет красиво. Я всё распланировала, так что по-другому быть не может.']);
    R.look('plan', 1.2, -3.2, 'План праздника', ['~: Листок с планом праздника. 18:00 гости, 18:15 тост, 18:40 торт, 19:00 общее фото. Напротив каждого пункта уже стоит галочка, хотя ничего ещё не случилось.', '~: Мне нравится, когда всё под контролем. Тогда не так страшно.'], { r: 1.1 });
    R.sprite(pxTex(10, 7, (c) => { rr(c, 0, 0, 10, 7, '#f4ecd8'); for (let k = 0; k < 4; k++) { rr(c, 1, 1 + k * 1.5, 1, 1, '#2f7f82'); rr(c, 3, 1 + k * 1.5, 5, 1, '#6a6a7a'); } }, 'plan'), 1.2, -3.0, { y: 0.71, scale: 0.7, glow: true });
    pPalm(R, -7.4, 3.4); pPalm(R, 7.4, 3.4); pPalm(R, -8.2, -3.5, 0.75);
    R.sprite('flowerpot', -1.8, 3.9, { scale: 1.3 }); R.sprite('flowerpot', 4.6, 3.9, { scale: 1.3 }); R.sprite('flowerpot', 6.6, -3.7, { scale: 1.2 }); R.sprite('flowerpot', -5.6, -3.8, { scale: 1.1 });
    R.sprite(umbrellaTex(), 5.4, -0.6, { scale: 0.85 }); R.collider(5.0, -0.8, 5.8, -0.4);
    rug(R, 3.2, 1.6, 6, 3.2, { col: '#2a3a5a', border: '#d8c8a0' }); R.sprite(bistroTex('#e8e0d4', '#2f5a7a'), 4.6, 1.8, { scale: 1.3 }); R.collider(3.3, 1.5, 5.9, 2.1);
    R.sprite(giftTex(), 2.2, 2.4, { scale: 1.1 }); R.collider(1.8, 2.1, 2.6, 2.7);
    R.sprite(balloonTex(0), 8.0, -3.7, { scale: 0.75, y: 0.4 });
    R.look('gift', 2.2, 3.4, 'Коробка с бантом', ['~: Подарок от мамы. Сказано открыть ровно в полночь, не раньше. Я честно не трясу. Почти.'], { r: 1.1 });
    R.inter('sleep', -1.5, 0.4, { label: 'Лечь в шезлонг', fn: async (G) => { const p = G.player; p.place(-1.5, -1.2); p.y = 0.55; p.pose = 'lie'; G.focus(-1.5, -1.5, 15); await G.run(['~: Ещё пять минут.', '*: Огни на мосту мигают. Один раз. Второй. Будто кто-то проверяет свет перед спектаклем.', '~: …пять минут.']); G.sfx('bell'); await G.wait(1.2); G.set('slept', 1); await G.goto('hub_dressing', 'start', { fade: 'fade' }); } });
    R.spawn('start', 3, 0, 'f');
  },
  async enter(G) { G.cam.pitch = 0.34; if (!G.f.syd1) { G.f.syd1 = 1; await G.run(['*: Тёплый ветер с залива. Где-то внизу смеются туристы.', '~: Завтра мне восемнадцать. План расписан по минутам, гости рассажены, тост отрепетирован перед зеркалом. Три раза.', '~: Надо бы спать. Но сначала посмотрю на город ещё чуть-чуть.']); } },
};
export const extraRooms: Record<string, RoomDef> = { hub_sydney: sydney, hub_buffet: buffet, hub_props: props, hub_foyer: foyer, hub_mezz: mezz, hub_box: box, hub_rehearsal: rehearsal, hub_costume: costume, hub_trap: trap };
