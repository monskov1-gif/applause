// Глава Рубена, ROYAL FLUSH. Шпионский триллер в казино у горного озера (оммаж классике жанра, всё своё).
// Каркас: роль-ловушка «агент без нервов», желание Рубена сыграть по своему чтению стола, Варя ведёт его через наушник,
// и это становится контролем; кульминация: Рубен вынимает наушник, Варя решает, молчать ли.
// Механики: проход в салон (план Вари или честный разговор), покер по «теллам» соперника (маска Трагедии
// показывает спрятанное), подсказки в наушник против тишины, погоня по серпантину.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { R as D } from '../data/dialogue/ruben';
import { runner } from '../ui/minigames';
import { finishChapter, fog, actOf } from './common';
import { chandelier, sconce, rug, column } from '../world/decor';
import { barCounter, statue, armchair, window3D } from '../world/decor3d';

const GRADE = { sat: 1.05, tint: [1.06, 1.0, 0.92], vig: 0.5, bloom: 0.75, contrast: 1.08 };
const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
const dressCode = (G: any) => { if (G.player.charId !== 'varya_gown') G.setPlayerChar('varya_gown'); };

// ---------------- пиксельные помощники (локальные) ----------------
type DC = CanvasRenderingContext2D;
const px = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const hsh = (x: number, y: number, s = 0) => { const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return v - Math.floor(v); };
function bev(c: DC, x: number, y: number, w: number, h: number, base: string, lt: string, dk: string, inset = false) { px(c, x, y, w, h, base); px(c, x, y, w, 1, inset ? dk : lt); px(c, x, y, 1, h, inset ? dk : lt); px(c, x, y + h - 1, w, 1, inset ? lt : dk); px(c, x + w - 1, y, 1, h, inset ? lt : dk); }
function grime(c: DC, w: number, h: number, col: string, k = 0.08, s = 1) { for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (hsh(x, y, s) < k) px(c, x, y, 1, 1, col); }
function rep(t: THREE.Texture, rx: number, ry: number) { const c = t.clone(); c.wrapS = c.wrapT = THREE.RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; }
const lamb = (map: THREE.Texture, o: THREE.MeshLambertMaterialParameters = {}) => new THREE.MeshLambertMaterial({ map, ...o });
function pbox(R: Builder, x: number, z: number, w: number, d: number, h: number, m: { front: THREE.Texture; side?: THREE.Texture; top?: THREE.Texture; emissive?: number }, o: { y?: number; ry?: number; solid?: boolean; cast?: boolean } = {}) {
  const side = lamb(m.side || m.front), top = lamb(m.top || m.side || m.front), fr = lamb(m.front, { emissive: m.emissive || 0, emissiveMap: m.emissive ? m.front : null });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, top, top, fr, side]); mesh.position.set(x, (o.y || 0) + h / 2, z); if (o.ry) mesh.rotation.y = o.ry; mesh.castShadow = o.cast !== false; mesh.receiveShadow = true; R.room.group.add(mesh);
  if (o.solid !== false) { const sw = o.ry && Math.abs(Math.sin(o.ry)) > 0.7 ? d : w, sd = o.ry && Math.abs(Math.sin(o.ry)) > 0.7 ? w : d; R.collider(x - sw / 2, z - sd / 2, x + sw / 2, z + sd / 2); }
  return mesh;
}
function paintFloor(R: Builder, t: THREE.Texture, unit: number, o: { w?: number; d?: number; x?: number; z?: number; y?: number; apron?: number } = {}) {
  const w = o.w || R.w, d = (o.d || R.d) + (o.apron ?? 7); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lamb(rep(t, w / unit, d / unit))); m.rotation.x = -Math.PI / 2; m.position.set(o.x || 0, o.y ?? 0.004, (o.z || 0) + (o.apron ?? 7) / 2); m.receiveShadow = true; R.room.group.add(m); return m;
}
function paintWalls(R: Builder, t: THREE.Texture, h: number, unit: number) {
  const th = 0.4, w = R.w, d = R.d; const mk = (ww: number, dd: number, x: number, z: number, along: number) => { const m = new THREE.Mesh(new THREE.BoxGeometry(ww, h, dd), lamb(rep(t, along / unit, h / unit))); m.position.set(x, h / 2, z); m.receiveShadow = true; R.room.group.add(m); };
  mk(w + th * 2, th, 0, -d / 2 - th / 2, w); mk(th, d, -w / 2 - th / 2, 0, d); mk(th, d, w / 2 + th / 2, 0, d);
}
/** Обои-дамаск с золотом + деревянные панели снизу: стены «настоящего» казино. */
function damaskTex(base: string, pat: string, key: string) {
  return canvasTex(32, 32, (c) => { px(c, 0, 0, 32, 32, base); for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const u = (x % 16) - 8, v = ((y + (Math.floor(x / 16) % 2) * 8) % 16) - 8; const d = Math.abs(u) * 1.3 + Math.abs(v); if (d > 3 && d < 5 || (Math.abs(u) < 1 && Math.abs(v) < 6) || (Math.abs(v) < 1 && Math.abs(u) < 4)) px(c, x, y, 1, 1, pat); } grime(c, 32, 32, 'rgba(0,0,0,0.18)', 0.08, 9); }, key);
}
function wainscot(R: Builder, base: string, key: string, h = 1.6) {
  const t = canvasTex(32, 24, (c) => { px(c, 0, 0, 32, 24, '#140a06'); px(c, 0, 0, 32, 3, '#c8a050'); px(c, 0, 3, 32, 1, '#2a1a10'); bev(c, 2, 6, 12, 15, base, '#a07048', '#24160c'); bev(c, 18, 6, 12, 15, base, '#a07048', '#24160c'); bev(c, 4, 8, 8, 11, base, '#8a6040', '#2a1a10', true); bev(c, 20, 8, 8, 11, base, '#8a6040', '#2a1a10', true); px(c, 0, 22, 32, 2, '#120a06'); }, 'wains' + key);
  R.decal(rep(t, R.w / 2, 1), { x: 0, y: h / 2 + 0.02, z: -R.d / 2 + 0.035, w: R.w, h, noSlot: true });
  for (const s of [-1, 1]) { const m = R.decal(rep(t, R.d / 2, 1), { x: 0, y: h / 2 + 0.02, z: 0, w: R.d, h, noSlot: true }); m.position.x = s * (R.w / 2 - 0.035); m.rotation.y = -s * Math.PI / 2; }
  const crown = canvasTex(16, 8, (c) => { px(c, 0, 0, 16, 8, '#5a3a18'); px(c, 0, 1, 16, 1, '#f0d478'); px(c, 0, 3, 16, 2, '#b08a2c'); for (let x = 0; x < 16; x += 4) px(c, x, 5, 2, 2, '#d4ae48'); px(c, 0, 7, 16, 1, '#2a1a08'); }, 'rcrown');
  return crown;
}
function backdrop(R: Builder, t: THREE.Texture, o: { z: number; w: number; h: number; y?: number; x?: number; tilt?: number }) {
  const g = new THREE.PlaneGeometry(o.w, o.h); g.translate(0, o.h / 2, 0); const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: t, fog: false })); m.position.set(o.x || 0, o.y ?? -0.5, o.z); m.rotation.x = -(o.tilt ?? 0.5); R.room.group.add(m); return m;
}
/** Альпы ночью: звёзды, луна, снежные пики под луной, лесистые склоны, озеро с отражениями огней городка. */
function alpsTex() {
  return canvasTex(384, 160, (c) => {
    const g = c.createLinearGradient(0, 0, 0, 92); g.addColorStop(0, '#060a20'); g.addColorStop(0.6, '#1a2450'); g.addColorStop(1, '#4a4a78'); c.fillStyle = g; c.fillRect(0, 0, 384, 92);
    for (let i = 0; i < 140; i++) px(c, Math.floor(hsh(i, 1) * 384), Math.floor(hsh(i, 2) * 60), 1, 1, i % 9 ? '#9aa8d8' : '#ffffff');
    const mx = 300, my = 22; for (let r = 20; r > 8; r -= 3) { c.fillStyle = `rgba(200,210,255,${0.05 + (20 - r) * 0.01})`; c.beginPath(); c.arc(mx, my, r, 0, 7); c.fill(); } c.fillStyle = '#f4f0e0'; c.beginPath(); c.arc(mx, my, 8, 0, 7); c.fill(); px(c, mx - 3, my - 2, 2, 2, '#d8d4c4'); px(c, mx + 2, my + 2, 3, 2, '#d8d4c4');
    // дальние пики: скала + снег, освещённый справа
    const peaks = [[20, 46], [62, 30], [100, 44], [150, 22], [196, 40], [240, 28], [290, 48], [336, 26], [380, 40]];
    const ridge = (pts: number[][], rock: string, rockL: string, snow: string, snowD: string, snowLine: number) => { for (let x = 0; x < 384; x++) { let h = 999; for (const [px0, py] of pts) h = Math.min(h, py + Math.abs(x - px0) * 0.9); h += hsh(x, 5) * 2;
        for (let y = Math.floor(h); y < 100; y++) { const lit = (x % 46) > 23; const isSnow = y < h + snowLine - (hsh(x, y, 3) * 4); px(c, x, y, 1, 1, isSnow ? (lit ? snow : snowD) : (lit ? rockL : rock)); } } };
    ridge(peaks, '#2a3050', '#3a4268', '#e8ecf8', '#a8b4d0', 12);
    ridge([[0, 70], [80, 58], [170, 66], [250, 56], [330, 64], [384, 60]], '#141c30', '#1e2840', '#c8d0e8', '#8a96b8', 3);
    // лес на склонах (ёлочки-зубцы)
    for (let x = 0; x < 384; x += 2) { const y0 = 84 + Math.sin(x * 0.05) * 3; const hh = 3 + hsh(x, 7) * 4; for (let k = 0; k < hh; k++) px(c, x - Math.floor(k / 3), Math.floor(y0 - hh + k), 1 + Math.floor(k / 2), 1, '#0a1220'); px(c, x - 1, Math.floor(y0), 3, 10, '#0a1220'); }
    // береговые огни городка и их дорожки на воде
    const lg = c.createLinearGradient(0, 92, 0, 160); lg.addColorStop(0, '#1a2448'); lg.addColorStop(1, '#0c1430'); c.fillStyle = lg; c.fillRect(0, 92, 384, 68);
    for (let i = 0; i < 46; i++) { const x = Math.floor(hsh(i, 11) * 384), y = 88 + Math.floor(hsh(i, 12) * 4); px(c, x, y, 1, 1, i % 4 ? '#ffd890' : '#ffffff'); for (let k = 0; k < 10; k++) if (hsh(i, k, 4) < 0.6) px(c, x + (k % 2), y + 4 + k * 2, 1 + (k % 3 === 0 ? 1 : 0), 1, 'rgba(255,216,144,0.55)'); }
    for (let k = 0; k < 30; k++) px(c, mx - 6 + Math.floor(hsh(k, 13) * 12), 96 + k * 2, 4 + Math.floor(hsh(k, 14) * 6), 1, 'rgba(240,240,220,0.5)');
    for (let y = 100; y < 160; y += 3) for (let x = (y % 2) * 3; x < 384; x += 7) if (hsh(x, y, 15) < 0.25) px(c, x, y, 3, 1, '#2a3a6a');
  }, 'alps2');
}
/** Пиксельная машина (серебристая): профиль с покатым стеклом и арками колёс. */
function carSideTex(body: string, lt: string, dk: string, key: string) {
  return canvasTex(92, 30, (c) => {
    px(c, 0, 0, 92, 30, body); px(c, 0, 0, 92, 9, dk); px(c, 0, 13, 92, 1, lt); px(c, 0, 14, 92, 1, '#f8f8ff'); px(c, 0, 15, 92, 1, dk); px(c, 0, 24, 92, 6, dk); px(c, 0, 23, 92, 1, '#0a0a0e');
    const win = (x0: number, x1: number, slopeL: number, slopeR: number) => { for (let y = 3; y < 13; y++) { const a = Math.round(x0 + (13 - y) * slopeL), b = Math.round(x1 - (13 - y) * slopeR); px(c, a, y, b - a, 1, y < 5 ? '#2a3c5c' : '#1a2440'); } for (let i = 0; i < 6; i++) px(c, x0 + 6 + i, 11 - i, 2, 1, '#6a8ab8'); };
    win(12, 40, 0.6, 0); win(43, 62, 0, 1.1); px(c, 40, 3, 3, 10, body); px(c, 40, 3, 1, 10, lt);
    px(c, 41, 15, 1, 9, '#0a0a0e'); px(c, 63, 15, 1, 9, '#0a0a0e'); px(c, 34, 17, 4, 1, '#ffffff'); px(c, 56, 17, 4, 1, '#ffffff');
    px(c, 88, 15, 4, 3, '#fff4c0'); px(c, 87, 18, 5, 2, '#d8d8e0'); px(c, 0, 15, 3, 3, '#c01818'); px(c, 0, 18, 4, 2, '#d8d8e0');
    for (const cx of [18, 74]) for (let y = 14; y < 30; y++) { const hw = Math.round(Math.sqrt(Math.max(0, 121 - (30 - y) * (30 - y))) + 1); px(c, cx - hw, y, 1, 1, '#0a0a0e'); px(c, cx + hw, y, 1, 1, '#0a0a0e'); }
  }, key);
}
function car(R: Builder, x: number, z: number) {
  const g = new THREE.Group(); const sh = new THREE.Shape(); const B = 0.33;
  sh.moveTo(-2.4, B); for (const cx of [-1.5, 1.5]) { sh.lineTo(cx - 0.48, B); sh.absarc(cx, B, 0.48, Math.PI, 0, true); } sh.lineTo(2.4, B); sh.lineTo(2.45, 0.6); sh.lineTo(2.3, 0.86); sh.lineTo(0.6, 1.0); sh.lineTo(-0.1, 1.46); sh.lineTo(-1.2, 1.48); sh.lineTo(-2.1, 1.0); sh.lineTo(-2.42, 0.9); sh.lineTo(-2.45, 0.55); sh.lineTo(-2.4, B);
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.8, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 1, curveSegments: 6 }); geo.translate(0, 0, -0.9);
  const side = carSideTex('#a8b0bc', '#e0e6ee', '#5a6270', 'rcarside'); side.repeat.set(1 / 4.9, 1 / 1.25); side.offset.set(0.5, -0.28 / 1.25);
  const paint = canvasTex(16, 16, (c) => { px(c, 0, 0, 16, 16, '#a8b0bc'); for (let i = 0; i < 16; i++) px(c, i, (i * 7) % 16, 1, 1, '#d8dee8'); }, 'rcarpaint');
  const body = new THREE.Mesh(geo, [lamb(side), lamb(rep(paint, 3, 3))]); body.castShadow = true; g.add(body);
  const glass = new THREE.MeshLambertMaterial({ map: canvasTex(8, 16, (c) => { px(c, 0, 0, 8, 16, '#16203a'); for (let i = 0; i < 6; i++) px(c, 1 + (i % 3), 2 + i * 2, 3, 1, '#5a7aa8'); }, 'rglass'), emissive: 0x0a1020, side: THREE.DoubleSide });
  const quad = (a: number[], b: number[], n: number[]) => { const o = 0.075, A = [a[0] + n[0] * o, a[1] + n[1] * o], Bv = [b[0] + n[0] * o, b[1] + n[1] * o]; const q = new THREE.BufferGeometry(); q.setAttribute('position', new THREE.Float32BufferAttribute([A[0], A[1], -0.84, A[0], A[1], 0.84, Bv[0], Bv[1], 0.84, Bv[0], Bv[1], -0.84], 3)); q.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2)); q.setIndex([0, 1, 2, 0, 2, 3]); q.computeVertexNormals(); g.add(new THREE.Mesh(q, glass)); };
  quad([0.6, 1.0], [-0.1, 1.46], [0.55, 0.83]); quad([-2.1, 1.0], [-1.2, 1.48], [-0.47, 0.88]);
  const wt = canvasTex(16, 16, (c) => { px(c, 0, 0, 16, 16, '#0c0c0e'); c.fillStyle = '#c8ccd8'; c.beginPath(); c.arc(8, 8, 5, 0, 7); c.fill(); for (let i = 0; i < 8; i++) px(c, 8 + Math.round(Math.cos(i * 0.785) * 3), 8 + Math.round(Math.sin(i * 0.785) * 3), 1, 1, '#5a5e6a'); px(c, 7, 7, 2, 2, '#ffffff'); }, 'rwheel');
  const wm = [L(0x0c0c0e), lamb(wt), lamb(wt)]; for (const sx of [-1.5, 1.5]) for (const sz of [-0.88, 0.88]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.3, 12), wm); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.4, sz); g.add(w); }
  for (const sz of [-0.6, 0.6]) { const h = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.3), L(0xfff4d0, { emissive: 0xffe0a0 })); h.position.set(2.42, 0.72, sz); g.add(h); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 2.5, z - 1, x + 2.5, z + 1);
}
/** Сукно рулетки: разметка номеров, колесо с номерами, фишки стопками. */
function roulette(R: Builder, x: number, z: number) {
  const felt = canvasTex(64, 32, (c) => { px(c, 0, 0, 64, 32, '#1a5a3a'); px(c, 0, 0, 64, 1, '#d4ae48'); for (let i = 0; i < 12; i++) for (let j = 0; j < 3; j++) { px(c, 20 + i * 3.5, 4 + j * 7, 3, 6, (i + j) % 2 ? '#a0182a' : '#141414'); px(c, 21 + i * 3.5, 6 + j * 7, 1, 2, '#e8e0c8'); } px(c, 17, 4, 2, 20, '#2a8a4a'); for (let i = 0; i < 3; i++) { px(c, 20 + i * 14, 26, 13, 4, '#164a30'); px(c, 21 + i * 14, 27, 11, 2, '#e8e0c8'); } c.strokeStyle = '#e8e0c8'; c.strokeRect(19.5, 3.5, 42, 21); }, 'rfelt');
  const rim = canvasTex(32, 8, (c) => { px(c, 0, 0, 32, 8, '#4a2a16'); px(c, 0, 0, 32, 1, '#d4ae48'); for (let i = 0; i < 32; i += 4) px(c, i, 3, 2, 3, '#6a3a1e'); }, 'rrim');
  pbox(R, x, z, 3.4, 1.8, 0.95, { front: rim, top: felt });
  const wheelT = canvasTex(32, 32, (c) => { c.fillStyle = '#5a3a22'; c.fillRect(0, 0, 32, 32); for (let i = 0; i < 18; i++) { c.fillStyle = i === 0 ? '#2a8a4a' : i % 2 ? '#a0182a' : '#141414'; c.beginPath(); c.moveTo(16, 16); c.arc(16, 16, 15, (i / 18) * 6.283, ((i + 1) / 18) * 6.283); c.fill(); } c.fillStyle = '#c8a050'; c.beginPath(); c.arc(16, 16, 7, 0, 7); c.fill(); px(c, 15, 9, 2, 14, '#f0d478'); px(c, 9, 15, 14, 2, '#f0d478'); }, 'rwheelT');
  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.16, 18), [lamb(rim), lamb(wheelT), lamb(rim)]); wheel.position.set(x - 1.05, 1.03, z); R.room.group.add(wheel); R.onUpdate((dt) => { wheel.rotation.y += dt * 1.6; });
  chips(R, x + 0.5, z - 0.2, 6, 0.97);
}
function chipTex(col: string) { return canvasTex(8, 10, (c) => { for (let i = 0; i < 4; i++) { px(c, 0, 8 - i * 2, 8, 2, '#0a0a0a'); px(c, 1, 8 - i * 2, 6, 1, col); px(c, 3, 8 - i * 2, 2, 1, '#f4f0e8'); } px(c, 1, 1, 6, 2, col); px(c, 3, 1, 2, 1, '#ffffff'); }, 'chip' + col); }
function chips(R: Builder, x: number, z: number, n: number, y: number) { const cols = ['#c41e3a', '#1a1a1e', '#e8c36a', '#2a5ac8']; for (let i = 0; i < n; i++) R.sprite(chipTex(cols[i % 4]), x + (i % 3) * 0.32 - 0.3, z + Math.floor(i / 3) * 0.3, { y, scale: 0.55 + (i % 2) * 0.15, thin: true }); }
/** Карта лицом вверх (пиксельная). */
const SUITS: Record<string, string> = { '♠': '#141418', '♣': '#141418', '♥': '#c41e3a', '♦': '#c41e3a' };
function cardTex(card: string) {
  return canvasTex(20, 28, (c) => { px(c, 0, 0, 20, 28, '#2a2a30'); px(c, 1, 1, 18, 26, '#f8f4ea'); px(c, 1, 1, 18, 1, '#ffffff'); const suit = card.slice(-1), rank = card.slice(0, -1), col = SUITS[suit] || '#141418';
    ptext(c, rank, 3, 2, { size: 8, col }); ptext(c, suit, 10, 10, { size: 11, col, align: 'center' }); ptext(c, suit, 3, 10, { size: 6, col }); }, 'card' + card);
}
const backTex = () => canvasTex(20, 28, (c) => { px(c, 0, 0, 20, 28, '#2a2a30'); px(c, 1, 1, 18, 26, '#8e1830'); for (let y = 3; y < 25; y += 2) for (let x = 3 + (y % 4) / 2; x < 17; x += 2) px(c, x, y, 1, 1, '#d4ae48'); px(c, 2, 2, 16, 1, '#e8c36a'); px(c, 2, 25, 16, 1, '#e8c36a'); }, 'cardback');
function sideTable(R: Builder, x: number, z: number, n: number) {
  const felt = canvasTex(32, 16, (c) => { px(c, 0, 0, 32, 16, '#1a5a3a'); c.strokeStyle = '#d4ae48'; c.beginPath(); c.arc(16, 0, 12, 0, 3.14); c.stroke(); for (let i = 0; i < 5; i++) { px(c, 3 + i * 6, 11 - Math.abs(i - 2), 4, 3, '#2a7a4a'); px(c, 4 + i * 6, 12 - Math.abs(i - 2), 2, 1, '#e8e0c8'); } ptext(c, 'BLACKJACK', 16, 3, { size: 5, col: '#e8c36a', align: 'center' }); }, 'bjfelt');
  const rim = canvasTex(32, 8, (c) => { px(c, 0, 0, 32, 8, '#4a2a16'); px(c, 0, 0, 32, 1, '#d4ae48'); px(c, 0, 7, 32, 1, '#1a0c06'); }, 'rrim2');
  pbox(R, x, z, 3, 1.4, 0.95, { front: rim, top: felt }); chips(R, x + 0.7, z - 0.2, n, 0.96);
  for (const dx of [-0.8, -0.1]) R.sprite(cardTex(dx < -0.5 ? 'K♥' : '9♠'), x + dx * 0.6, z + 0.1, { y: 0.96, scale: 0.36, thin: true });
}
/** Игровой автомат у стены. */
function slotMachine(R: Builder, x: number, z: number, i: number) {
  const t = canvasTex(20, 36, (c) => { px(c, 0, 0, 20, 36, '#140a10'); px(c, 1, 1, 18, 34, '#7a1a2a'); px(c, 2, 2, 16, 6, '#f0d478'); ptext(c, '777', 10, 2, { size: 6, col: '#8e1830', align: 'center' }); px(c, 3, 10, 14, 9, '#0a0a0a'); for (let k = 0; k < 3; k++) { px(c, 4 + k * 4, 11, 3, 7, '#f4f0e8'); px(c, 5 + k * 4, 13, 1, 3, ['#c41e3a', '#2a5ac8', '#e8a020'][(k + i) % 3]); } px(c, 3, 21, 14, 2, '#d4ae48'); px(c, 5, 25, 10, 6, '#2a1018'); px(c, 6, 26, 8, 1, '#c8a050'); px(c, 1, 33, 18, 2, '#3a0a14'); }, 'slotm' + i);
  pbox(R, x, z, 1.0, 0.8, 1.9, { front: t, side: canvasTex(8, 16, (c) => { px(c, 0, 0, 8, 16, '#5a1220'); px(c, 0, 0, 1, 16, '#8a2a3a'); px(c, 7, 0, 1, 16, '#2a0810'); }, 'slotside'), emissive: 0x403020 });
}

// ---------------- 1. терраса над озером ----------------
const terrace: RoomDef = {
  card: (G) => G.f.intro_rub ? null : (G.f.intro_rub = 1, [[actOf(G), 'act'], ['ROYAL FLUSH', 'big'], ['шпионский триллер · казино у озера · ставка на себя', 'sm']]),
  name: 'Терраса казино', chapter: 'Рубен', w: 34, d: 14, music: 'heist', amb: 'wind', step: 'stone', grade: { ...GRADE, tint: [0.96, 0.98, 1.08] }, camDist: 24,
  build(R, G) {
    R.room.group.userData.bg = 0x0c1430; fog(R, 0x101a3a, 40, 120); G.cam.pitch = 0.3;
    // плитка террасы: продлена во все стороны (за краем кадра сад и фасад)
    const tile = canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const g = x % 16 === 0 || y % 16 === 0, d = ((x >> 4) + (y >> 4)) % 2; px(c, x, y, 1, 1, g ? '#6a6458' : d ? (hsh(x, y, 2) < 0.3 ? '#b0a894' : '#bcb4a0') : (hsh(x, y, 3) < 0.3 ? '#a49c88' : '#aca490')); } px(c, 7, 7, 2, 2, '#8a8270'); px(c, 23, 23, 2, 2, '#8a8270'); }, 'rterr');
    paintFloor(R, tile, 2.4, { w: 80, d: 20, z: 6.5, apron: 0 }); R.ambient(0x3a4060, 2.8, 0xc0c8e8); R.sun(0x9ab0e0, 1.6, -8, 14, 10);
    // задник: Альпы + озеро; плоскость озера под террасой с бликами огней
    backdrop(R, alpsTex(), { z: -30, w: 96, h: 23.2, y: -12.9, tilt: 0.04 });
    const lake = new THREE.Mesh(new THREE.PlaneGeometry(300, 60), new THREE.MeshBasicMaterial({ color: 0x1a2448, fog: false })); lake.rotation.x = -Math.PI / 2; lake.position.set(0, -3, -28); R.room.group.add(lake);
    for (let i = 0; i < 50; i++) { const gl = new THREE.Mesh(new THREE.PlaneGeometry(0.6 + (i % 3) * 0.5, 0.1), new THREE.MeshBasicMaterial({ color: i % 5 ? 0xffd890 : 0xe8e8f8 })); gl.rotation.x = -Math.PI / 2; gl.position.set(-60 + (i * 7.3) % 120, -2.95, -6 - (i * 3.7) % 30); R.room.group.add(gl); }
    // подпорная стена террасы и балюстрада из нарисованных балясин
    pbox(R, -12, -3.7, 70, 0.8, 3.2, { front: rep(tex('stone', '#a8a090'), 20, 1) }, { y: -3.2, solid: false });
    const bal = canvasTex(16, 24, (c) => { px(c, 0, 0, 16, 3, '#e8e0d0'); px(c, 0, 2, 16, 1, '#8a8478'); px(c, 0, 21, 16, 3, '#d8d0c0'); for (const bx of [4]) { px(c, bx + 1, 3, 6, 2, '#d8d0c0'); px(c, bx + 2, 5, 4, 3, '#e8e0d0'); px(c, bx, 8, 8, 6, '#f0e8d8'); px(c, bx + 6, 8, 2, 6, '#b8b0a0'); px(c, bx + 2, 14, 4, 5, '#e0d8c8'); px(c, bx + 1, 19, 6, 2, '#c8c0b0'); } }, 'rbal');
    const balM = new THREE.Mesh(new THREE.PlaneGeometry(52, 1.25), new THREE.MeshLambertMaterial({ map: rep(bal, 52, 1), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })); balM.position.set(-17, 0.62, -3.3); R.room.group.add(balM);
    pbox(R, -17, -3.3, 52, 0.42, 0.16, { front: tex('white', '#e8e0d0') }, { y: 1.22, solid: false }); R.collider(-60, -40, 9, -3.1);
    for (let x = -40; x <= 6; x += 6.5) pbox(R, x, -3.3, 0.5, 0.5, 1.45, { front: tex('white', '#d8d0c0') }, { solid: false });
    // фасад казино в стиле бель-эпок: пилястры, арочные окна, козырёк с лампочками
    const facade = canvasTex(32, 48, (c) => { px(c, 0, 0, 32, 48, '#d8ccb4'); for (let y = 0; y < 48; y += 6) px(c, 0, y, 32, 1, '#b8ac94'); px(c, 0, 0, 4, 48, '#e8dcc4'); px(c, 3, 0, 1, 48, '#a89c84'); px(c, 0, 22, 32, 3, '#c8bca4'); px(c, 0, 24, 32, 1, '#9a8e76');
      for (const y0 of [4, 28]) { px(c, 9, y0, 16, 14, '#6a5a40'); px(c, 10, y0 + 1, 14, 13, '#ffd890'); c.fillStyle = '#ffd890'; c.beginPath(); c.arc(17, y0 + 1, 7, Math.PI, 0); c.fill(); px(c, 16, y0 - 5, 2, 19, '#8a7a5a'); px(c, 10, y0 + 6, 14, 1, '#8a7a5a'); px(c, 11, y0 + 2, 3, 4, '#fff4d0'); px(c, 8, y0 + 14, 18, 2, '#e8dcc4'); } }, 'rfacade');
    pbox(R, 21, -1.8, 24, 10.4, 10, { front: rep(facade, 24 / 4, 10 / 6), side: rep(facade, 10.4 / 4, 10 / 6), top: tex('stone') }, { solid: false }); R.collider(9, -7, 40, 3.4);
    gableRoof(R, 21, 10, -1.8, 26, 11);
    pbox(R, 13, 4.0, 4.2, 1.8, 0.25, { front: canvasTex(32, 4, (c) => { px(c, 0, 0, 32, 4, '#3a1a14'); for (let x = 1; x < 32; x += 3) px(c, x, 1, 1, 2, '#ffe8a0'); }, 'marquee'), emissive: 0xffffff }, { y: 3.9, solid: false });
    for (const sx of [-1.9, 1.9]) pbox(R, 13 + sx, 4.7, 0.18, 0.18, 3.9, { front: tex('gold') }, { solid: false });
    R.light(13, 3.4, 4.6, 0xffd890, 10, 9);
    // фонари вдоль балюстрады, кипарисы в кадках, скамья
    for (const [x, z] of [[-14, -2.6], [-6, -2.6], [2, -2.6]]) { pbox(R, x, z, 0.18, 0.18, 3, { front: tex('metal') }, { solid: false }); R.sprite('lantern', x, z, { y: 3, glow: true, scale: 1.1, thin: true }); R.light(x, 3.2, z + 0.6, 0xffd890, 8, 8); }
    const cyp = canvasTex(20, 56, (c) => { px(c, 4, 46, 12, 10, '#5a4a3a'); px(c, 3, 46, 14, 2, '#8a7a6a'); px(c, 5, 48, 2, 8, '#7a6a58'); for (let y = 2; y < 46; y++) { const hw = Math.round(Math.sin((y / 46) * Math.PI) * 6 + 1); for (let x = -hw; x <= hw; x++) px(c, 10 + x, y, 1, 1, Math.abs(x) === hw ? '#0a140c' : x > hw / 3 ? (hsh(x, y, 4) < 0.5 ? '#3a6a44' : '#2e5a38') : (hsh(x, y, 5) < 0.4 ? '#1a3a22' : '#224a2c')); } }, 'cypress');
    for (const [x, z] of [[-16, 4.8], [-21, 1.2], [4.8, 5.4], [7.6, -2.4], [-27, 4.6]]) R.sprite(cyp, x, z, { scale: 1.2, solid: 0.4 });
    const bench = canvasTex(32, 14, (c) => { px(c, 0, 0, 32, 3, '#e8e0d0'); px(c, 0, 3, 32, 1, '#9a9284'); px(c, 1, 6, 30, 3, '#d8d0c0'); px(c, 2, 9, 4, 5, '#c8c0b0'); px(c, 26, 9, 4, 5, '#c8c0b0'); }, 'rbench');
    R.sprite(bench, -2, -2.5, { scale: 1.2 }); statue(R, -10, 0.2, { pose: 'muse' });
    car(R, -21, 4.0); R.look('car', -21, 5.4, 'Серебристый автомобиль', D.car); R.look('lake', -6, -2.2, 'Озеро', D.lake);
    R.door('casino', 13, { z: 3.42, label: 'Вход в казино', col: '#5a1a14', sign: 'CASINO', w: 2.6, h: 3.6, glow: '#ffd890', fn: (G) => G.goto('rub_casino', 'start', { fade: 'fade' }) });
    R.npc('ruben_tux', 3.2, 1.0, { id: 'ruben', dir: 'l', talk: ['ruben/worried: Пойдём? Я буду делать вид, что я агент. А ты делай вид, что не видишь, как у меня трясутся руки.'] });
    R.npc('nol', -17.4, 2.8, { dir: 'r', talk: ['nol: Наушники проверены, линия чистая. Всё, что скажешь, он услышит. Всё.'] });
    R.spawn('start', -4.5, 2.6, 'r');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_arr) { G.f.rub_arr = 1; await G.run(D.arrive); } },
};
/** Скатная крыша-мансарда из черепицы над фасадом. */
function gableRoof(R: Builder, x: number, y: number, z: number, w: number, d: number) {
  const sh = canvasTex(32, 16, (c) => { for (let yy = 0; yy < 16; yy++) for (let xx = 0; xx < 32; xx++) { const row = yy >> 2, k = (xx + (row % 2) * 4) % 8; px(c, xx, yy, 1, 1, yy % 4 === 3 || k === 0 ? '#141a28' : yy % 4 === 0 ? '#5a6a8a' : '#3a4866'); } }, 'rslate');
  const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(d / 2 - 1.6, 2.4); s.lineTo(-d / 2 + 1.6, 2.4); s.lineTo(-d / 2, 0);
  const geo = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false }); geo.translate(0, 0, -w / 2); const m = new THREE.Mesh(geo, [lamb(rep(sh, 0.25, 0.25)), lamb(rep(sh, 0.25, 0.25))]); m.rotation.y = Math.PI / 2; m.position.set(x, y, z); R.room.group.add(m);
  for (const dx of [-7, 0, 7]) { pbox(R, x + dx, z + 3.6, 2, 1.2, 1.8, { front: canvasTex(16, 14, (c) => { px(c, 0, 0, 16, 14, '#d8ccb4'); px(c, 3, 3, 10, 10, '#6a5a40'); px(c, 4, 4, 8, 9, '#ffd890'); px(c, 7, 4, 2, 9, '#8a7a5a'); px(c, 0, 0, 16, 2, '#3a4866'); }, 'dormer'), emissive: 0x302010 }, { y: y + 0.6, solid: false }); }
}

// ---------------- 2. большой зал ----------------
const casino: RoomDef = {
  name: 'Большой зал', w: 40, d: 16, music: 'heist', amb: 'crowd', step: 'carpet', grade: GRADE, camDist: 26,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c0806;
    const parq = canvasTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const b = ((x >> 3) + (y >> 3)) % 2, u = b ? x % 8 : y % 8; px(c, x, y, 1, 1, u === 0 ? '#2a1608' : b ? (hsh(x, y, 1) < 0.3 ? '#8a5a32' : '#9a6a3a') : (hsh(x, y, 2) < 0.3 ? '#7a4a28' : '#86542e')); } }, 'rparq');
    paintFloor(R, parq, 2.4, { w: 70 }); paintWalls(R, damaskTex('#6a1418', '#a8303a', 'rdam1'), 9, 2.4); const crown = wainscot(R, '#4a2414', 'c1', 1.8);
    R.decal(rep(crown, 40 / 1.5, 1), { x: 0, y: 8.6, z: -7.96, w: 40, h: 0.7, noSlot: true }); R.ambient(0x5a3a2a, 2.6, 0xffd8b0);
    rug(R, 0, 1, 26, 8, { col: '#3a0a10', border: '#d4ae48' });
    for (const x of [-12, 0, 12]) chandelier(R, x, 7.6, 0, 1.4, { light: 14 });
    for (const x of [-16, -8, 8, 16]) sconce(R, x, 4, -7.96, { light: 4 });
    for (const x of [-18.6, 18.6]) for (const z of [-4.5, 3]) column(R, x, z, 9, { tex: 'white' });
    window3D(R, -2, { wall: 'w', y: 4, w: 2.4, h: 4, night: true, curtains: true }); window3D(R, 3, { wall: 'w', y: 4, w: 2.4, h: 4, night: true, curtains: true });
    R.decal(canvasTex(40, 28, (c) => { px(c, 0, 0, 40, 28, '#5a4010'); px(c, 1, 1, 38, 26, '#d4ae48'); px(c, 3, 3, 34, 22, '#1a2440'); px(c, 3, 15, 34, 10, '#1a3a5a'); for (let x = 3; x < 37; x++) { const h = 8 + Math.abs(Math.sin(x * 0.4)) * 6; px(c, x, Math.floor(h), 1, 15 - Math.floor(h) + 3, '#3a4868'); if (h < 10) px(c, x, Math.floor(h), 1, 2, '#e8ecf8'); } px(c, 28, 6, 3, 3, '#f4f0e0'); }, 'alpspaint'), { x: -4, y: 5.6, w: 3.4, h: 2.4 });
    for (const [i, x] of [-17.2, -15.8, 15.8, 17.2].entries()) slotMachine(R, x, -7.3, i);
    roulette(R, -11, 1); roulette(R, 11, 1); R.look('roul', -11, 2.6, 'Рулетка', D.roulette);
    sideTable(R, -6, 4.6, 5); sideTable(R, 6, 4.6, 7);
    barCounter(R, -13, -6.4, 8); R.npc('barman', -13, -4.6, { dir: 'f', talk: D.bar });
    R.npc('croupier', -11, -0.4, { dir: 'f', talk: ['croupier: Ставки сделаны, ставок больше нет. Ой, простите, мадемуазель, это я по привычке.'] }); R.actor('croupier', 11, -0.4, { dir: 'f', id: 'cr2' });
    R.npc('hostess', 4, -4.6, { talk: async (G: any) => { await G.run(D.fortuna); if (!f.rub_fort) { f.rub_fort = 1; await G.run(D.fortunaAfter); } } }); R.spot(4, 8, -2, 4, -4.6, 0xffe0a0, 50, { angle: 0.25, cone: 0.05, shadow: false });
    R.photo('fortuna', 'Леди Фортуна', 4, -4.6);
    // салон за бархатной верёвкой: красный луч, светящаяся вывеска и дорожка ведут взгляд к двери
    R.door('salon', 12.5, { label: f.rub_rope ? 'Частный салон' : 'Частный салон (бархатная верёвка)', sign: 'SALON PRIVÉ', col: '#8e1830', w: 2.4, glow: '#ff6080', fn: async (G) => { if (!f.rub_rope) { await G.run(D.ropeLocked); await G.run(D.ropePlan); f.rub_rope = 1; if (f.rub_fake) f.rub_ctrl = (f.rub_ctrl || 0) + 1; } G.sfx('door'); await G.goto('rub_salon', 'start', { fade: 'fade' }); } });
    for (const sx of [-1.6, 1.6]) { pbox(R, 12.5 + sx, -6.6, 0.12, 0.12, 1, { front: tex('gold') }, { solid: false }); const b = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), lamb(tex('gold'))); b.position.set(12.5 + sx, 1.05, -6.6); R.room.group.add(b); }
    const rope = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.06, 6, 16, Math.PI), lamb(tex('velvet'))); rope.rotation.z = Math.PI; rope.scale.y = 0.25; rope.position.set(12.5, 0.95, -6.6); R.room.group.add(rope);
    R.spot(12.5, 8.5, -3, 12.5, -6.2, 0xff5070, 60, { angle: 0.3, cone: 0.06, shadow: false });
    const runnerT = canvasTex(16, 16, (c) => { px(c, 0, 0, 16, 16, '#7a0e1c'); px(c, 0, 0, 2, 16, '#d4ae48'); px(c, 14, 0, 2, 16, '#d4ae48'); px(c, 7, 6, 2, 4, '#a8283a'); }, 'rrun');
    const run = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 6), lamb(rep(runnerT, 1, 3))); run.rotation.x = -Math.PI / 2; run.position.set(12.5, 0.02, -2.8); R.room.group.add(run);
    R.npc('guard', 15.2, -6.0, { dir: 'l', talk: D.ropeLocked });
    R.actor('ruben_tux', 9.6, -5.2, { id: 'ruben', dir: 'r' });
    // гости вокруг столов, боком к камере (не спинами)
    for (const [i, [id, x, z, d]] of ([['courtier', -7.6, 3.2, 'r'], ['collector', -4.4, 3.3, 'l'], ['lydia', 4.4, 3.2, 'r'], ['courtier', 7.6, 3.3, 'l']] as [string, number, number, string][]).entries()) R.actor(id, x, z, { dir: d, id: 'crowd_' + i + '_' + id });
    // выход на террасу: дорожка за край кадра (без дублирующей таблички)
    const exitRun = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 6), lamb(rep(runnerT, 1, 3))); exitRun.rotation.x = -Math.PI / 2; exitRun.position.set(0, 0.02, 9); R.room.group.add(exitRun);
    R.inter('out', 0, 6.6, { label: 'На террасу', y: 2.4, fn: async (G) => { G.sfx('step'); await G.goto('rub_terrace', 'start'); } });
    R.spawn('start', 0, 5.4, 'b');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_hall) { G.f.rub_hall = 1; await G.run(D.hallIn); } },
};

// ---------------- 3. частный салон: три руки покера ----------------
const TZ = -2.2;
const salon: RoomDef = {
  name: 'Частный салон', w: 18, d: 11, music: 'noir', amb: null, step: 'carpet', grade: { ...GRADE, vig: 0.62, contrast: 1.12 }, camDist: 20,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x050304;
    const carpet = canvasTex(32, 32, (c) => { px(c, 0, 0, 32, 32, '#3a0a12'); for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const u = (x % 16) - 8, v = (y % 16) - 8; if (Math.abs(Math.abs(u) + Math.abs(v) - 6) < 1) px(c, x, y, 1, 1, '#6a4a20'); else if (hsh(x, y, 7) < 0.15) px(c, x, y, 1, 1, '#2a060c'); } }, 'rsalcarpet');
    paintFloor(R, carpet, 2.4, { w: 40 }); paintWalls(R, damaskTex('#3a2a1c', '#6a5030', 'rdam2'), 6, 2.4); const crown = wainscot(R, '#3a2010', 'c2', 1.6);
    R.decal(rep(crown, 18 / 1.5, 1), { x: 0, y: 5.7, z: -5.46, w: 18, h: 0.6, noSlot: true });
    R.ambient(0x5a4030, 3.4, 0xe8c0a0); R.particles('dust', { count: 60, top: 5 });
    for (const x of [-7.4, -2.6, 2.6]) sconce(R, x, 3.4, -5.46, { light: 5 }); sconce(R, -8.96, 3.4, 1.6, { wall: 'w', light: 4 }); sconce(R, 8.96, 3.4, 1.6, { wall: 'e', light: 4 });
    window3D(R, -2.0, { wall: 'e', y: 3.2, w: 1.6, h: 2.6, night: true, curtains: true });
    // покерный стол под низкой лампой (отодвинут назад, Рубен сидит сбоку, сукно видно)
    const feltT = canvasTex(48, 32, (c) => { px(c, 0, 0, 48, 32, '#1a5a3a'); for (let i = 0; i < 40; i++) px(c, Math.floor(hsh(i, 1) * 48), Math.floor(hsh(i, 2) * 32), 1, 1, '#16503a'); c.strokeStyle = '#2a7a4a'; c.beginPath(); c.ellipse(24, 16, 18, 10, 0, 0, 7); c.stroke(); ptext(c, 'ROYAL', 24, 13, { size: 5, col: '#2a7a4a', align: 'center' }); }, 'pfelt');
    const rail = canvasTex(32, 8, (c) => { px(c, 0, 0, 32, 8, '#3a1a0c'); px(c, 0, 1, 32, 2, '#6a3a1c'); px(c, 0, 1, 32, 1, '#9a6a3a'); for (let x = 0; x < 32; x += 6) px(c, x, 4, 3, 1, '#2a1006'); }, 'prail');
    const t = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.2, 32), [lamb(rail), lamb(rail), lamb(rail)]); t.scale.z = 0.55; t.position.set(0, 1.0, TZ); R.room.group.add(t);
    const cloth = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.04, 32), [lamb(feltT), lamb(feltT), lamb(feltT)]); cloth.scale.z = 0.55; cloth.position.set(0, 1.11, TZ); R.room.group.add(cloth);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.7, 0.9, 10), lamb(rail)); ped.position.set(0, 0.45, TZ); R.room.group.add(ped); R.collider(-2.4, TZ - 1.3, 2.4, TZ + 1.3);
    const lampT = canvasTex(24, 8, (c) => { px(c, 0, 0, 24, 8, '#1a3a24'); px(c, 1, 0, 22, 2, '#2a5a34'); px(c, 0, 6, 24, 2, '#c8a050'); px(c, 2, 7, 20, 1, '#fff0c0'); }, 'plamp');
    pbox(R, 0, TZ, 1.6, 0.6, 0.35, { front: lampT, top: lampT, emissive: 0x302010 }, { y: 3.4, solid: false }); R.box(0, TZ, 0.04, 0.04, 2.3, { tex: 'gold', y: 3.75, solid: false, cast: false });
    R.light(0, 3.1, TZ + 0.6, 0xffd890, 7, 6); R.spot(0, 3.3, TZ, 0, TZ, 0xffe0a0, 6, { angle: 0.6, cone: 0.03, shadow: false });
    chips(R, -1.2, TZ - 0.3, 6, 1.13); chips(R, 1.0, TZ - 0.35, 5, 1.13);
    // пять общих карт на сукне + колода
    const cards = new THREE.Group(); cards.name = 'board'; for (let i = 0; i < 5; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.62), new THREE.MeshBasicMaterial({ map: backTex(), transparent: true, alphaTest: 0.3 })); m.position.set(-1.0 + i * 0.5, 1.3, TZ + 0.3); m.rotation.x = -1.0; cards.add(m); } R.room.group.add(cards); R.room.named.board = cards;
    R.sprite(backTex(), 1.6, TZ + 0.1, { y: 1.13, scale: 0.45, thin: true });
    armchair(R, -6.4, -3.6, { col: 0xb04050, ry: 0.4 }); armchair(R, 6.4, -3.6, { col: 0xb04050, ry: -0.4 });
    pbox(R, -7.6, -0.6, 0.9, 2.4, 1.0, { front: canvasTex(24, 12, (c) => { px(c, 0, 0, 24, 12, '#140a06'); bev(c, 1, 1, 22, 10, '#4a2414', '#7a4a2a', '#24100a'); px(c, 11, 5, 2, 2, '#d4ae48'); }, 'rcab'), top: tex('wood', '#8a5a3a') }, { ry: Math.PI / 2 });
    R.sprite(canvasTex(12, 16, (c) => { px(c, 4, 10, 4, 6, '#d4ae48'); px(c, 5, 0, 2, 10, '#c8e0f0'); px(c, 3, 2, 6, 6, 'rgba(200,170,90,0.8)'); px(c, 4, 3, 1, 4, '#ffffff'); }, 'decanter'), -7.6, -0.9, { y: 1.0, scale: 1, thin: true });
    R.decal(canvasTex(24, 18, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 18); c.fillStyle = '#2a3a5a'; c.fillRect(2, 2, 20, 14); c.fillStyle = '#e8e0d0'; c.fillRect(4, 10, 16, 3); c.fillStyle = '#5a6a8a'; c.beginPath(); c.moveTo(4, 10); c.lineTo(10, 5); c.lineTo(15, 10); c.fill(); }, 'safepaint'), { x: 5.4, y: 3.2, w: 2.4, h: 1.8 });
    R.npc('zero', 0, TZ - 1.5, { dir: 'f', talk: (G: any) => poker(G) }); R.actor('collector', -2.5, TZ - 0.2, { dir: 'r', id: 'p1' }); R.actor('courtier', 2.5, TZ - 0.6, { dir: 'l', id: 'p2' });
    R.npc('ruben_tux', 2.0, TZ + 1.6, { id: 'ruben', dir: 'l', talk: (G: any) => poker(G) });
    if (f.rub_won && !G.has('marionette')) R.inter('safe', 5.4, -4.4, { label: 'Сейф за картиной', fn: vaultScene });
    R.door('out', -5.5, { label: 'В большой зал', col: '#8e1830', fn: (G) => G.goto('rub_casino', 'start') });
    R.spawn('start', -5.5, -3.6, 'r');
  },
  async enter(G) { dressCode(G); if (!G.f.rub_salonI) { G.f.rub_salonI = 1; await G.run(D.salonIn); G.mech('masks'); } },
};
/** Раздачи: карты Рубена (крупно поверх кадра) и стол. Третья рука, конечно, роял-флеш. */
const DEALS = [{ hole: ['Q♥', 'Q♠'], board: ['K♣', '7♦', '2♠', 'J♥', '9♣'] }, { hole: ['7♠', '7♥'], board: ['7♦', 'K♠', '3♣', '10♥', '2♦'] }, { hole: ['A♠', 'K♠'], board: ['Q♠', 'J♠', '10♠', '4♦', '2♥'] }];
function showDeal(G: any, i: number | null) {
  document.getElementById('rub-hole')?.remove(); const board = G.room?.named.board as THREE.Group | undefined;
  if (i == null) { board?.children.forEach((m: any) => { m.material.map = backTex(); m.material.needsUpdate = true; }); return; }
  const d = DEALS[i]; board?.children.forEach((m: any, k: number) => { m.material.map = cardTex(d.board[k]); m.material.needsUpdate = true; });
  const el = document.createElement('div'); el.id = 'rub-hole'; el.style.cssText = 'position:fixed;left:3%;bottom:30%;display:flex;gap:10px;z-index:40;pointer-events:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.6));';
  const lab = document.createElement('div'); lab.textContent = 'Карты Рубена'; lab.style.cssText = 'position:absolute;top:-22px;left:0;font:14px "Pixelify Sans",monospace;color:#f0d478;text-shadow:0 2px 0 #000;'; el.appendChild(lab);
  for (const [k, cd] of d.hole.entries()) { const cv = (cardTex(cd).image as HTMLCanvasElement); const img = document.createElement('img'); img.src = cv.toDataURL(); img.style.cssText = `width:100px;height:140px;image-rendering:pixelated;transform:rotate(${k ? 6 : -6}deg);`; el.appendChild(img); }
  document.body.appendChild(el);
}
async function hand(G: any, deal: number, intro: any[], tr: any[], ask: any[], rightIsCall: boolean) {
  const f = G.f; showDeal(G, deal); await G.run(intro); const sees = G.state.mask === 'tragedy'; if (sees) await G.run(tr); else G.toast('Маска Трагедии (2) показала бы, что Зеро прячет', '☹');
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
  G.focus(0, -1.6, 11);
  await hand(G, 0, D.hand1, D.hand1Tr, D.hand1Ask, false);
  await hand(G, 1, D.hand2, D.hand2Tr, D.hand2Ask, true);
  showDeal(G, 2); await G.run(D.hand3); await G.run(D.hand3Choice); G.sfx('heart'); await G.wait(0.6); await G.run(D.hand3Ruben);
  await G.run(f.rub_silent ? D.hand3Silent : D.hand3Talked); f.rub_won = 1; G.sfx('applause', { dur: 2 }); document.getElementById('rub-hole')?.remove(); G.unfocus(); await G.rebuild();
}
async function vaultScene(G: any) {
  await G.run(D.vault.slice(0, 2)); G.give('marionette', true); G.sfx('pickup'); await G.run(D.vault.slice(2));
  G.sfx('alarm'); G.audio.music('chase'); await G.ui.card([['СЕРПАНТИН НАД ОЗЕРОМ', 'act'], ['план ушёл, люди остались', 'sm']]); await G.run(D.chaseIntro);
  let ok = false; while (!ok) { const r = await runner({ track: 'chase', title: 'Погоня', sub: '← → или A / D: уворачиваться от машин охраны', duration: 30 }); ok = r.ok; if (!ok) await G.run(D.chaseLose); }
  G.audio.music('heist'); await G.run(D.end); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'ruben', [['ROYAL FLUSH', 'act'], 'Рубен поставил всё на свой прочёт.', ['Лучшая подсказка иногда, это тишина.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { rub_terrace: terrace, rub_casino: casino, rub_salon: salon };
