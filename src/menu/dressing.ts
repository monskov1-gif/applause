// Главное меню: трёхмерная гримёрка со вступлением «THE KEY».
// Состояния вступления: dark → reveal → insert → await → turn → hold → lights → logo → menu.
// Центральный объект — музыкальная шкатулка с чёрной фигуркой-автоматом. Фигурка — три плоских пиксельных
// силуэта-«карточки» на одной оси (как вырезки в механическом театре): в зависимости от угла к зрителю
// раскрывается одна из них, и вращающийся силуэт читается по очереди как балерина, актёр с масками и статуэтка «Оскар».
// Стиль HD-2D: простая геометрия + рисованные пиксельные текстуры (NearestFilter), тёплый янтарный свет.
import * as THREE from 'three';
import { canvasTex } from '../gfx/tex';
import { audio } from '../core/audio';
import type { Renderer } from '../gfx/render';

type Mat = THREE.MeshStandardMaterial;
type C2 = CanvasRenderingContext2D;
const std = (o: THREE.MeshStandardMaterialParameters) => new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0, ...o });
const BX = 0.8, BZ = -0.12, BS = 1.42; // позиция и масштаб шкатулки
const smooth = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const wrap = (a: number) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const hh = (x: number, y: number, s = 0) => { const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return v - Math.floor(v); };

function pixTex(w: number, h: number, draw: (c: C2) => void, key: string) { return canvasTex(w, h, draw, 'menu|' + key); }
const rep = (t: THREE.Texture, x: number, y: number) => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(x, y); return t; };
const rect = (c: C2, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const ell = (c: C2, x: number, y: number, rx: number, ry: number, col: string) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fill(); };
/** Палитровая заливка: значение 0..1 → цвет рампы с дизерингом Байера. */
const BAY = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
function rampFill(c: C2, w: number, h: number, ramp: string[], fn: (x: number, y: number) => number, dither = 0.18) {
  const cols = ramp.map((s) => [parseInt(s.slice(1, 3), 16), parseInt(s.slice(3, 5), 16), parseInt(s.slice(5, 7), 16)]);
  const img = c.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const v = fn(x, y) + (BAY[(y & 3) * 4 + (x & 3)] / 16 - 0.5) * dither; const col = cols[Math.max(0, Math.min(cols.length - 1, Math.floor(v * cols.length)))];
    const i = (y * w + x) * 4; img.data[i] = col[0]; img.data[i + 1] = col[1]; img.data[i + 2] = col[2]; img.data[i + 3] = 255;
  }
  c.putImageData(img, 0, 0);
}

// ---------- текстуры ----------
const goldTex = () => pixTex(32, 32, (c) => rampFill(c, 32, 32, ['#4a300c', '#7a5418', '#a87a28', '#d0a040', '#ecc868', '#fff0b0'], (x, y) => 0.45 + Math.sin(x * 0.7 + y * 0.3) * 0.22 + Math.sin(x * 0.13 - y * 0.9) * 0.14 + hh(x, y) * 0.12), 'gold2');
/** Резная рама: продольные валики и канавки (вертикальная и горизонтальная версии). */
const frameTex = (vert: boolean) => pixTex(vert ? 16 : 64, vert ? 64 : 16, (c) => {
  const prof = [0.15, 0.55, 0.85, 0.95, 0.7, 0.4, 0.2, 0.5, 0.75, 0.6, 0.35, 0.8, 0.95, 0.7, 0.4, 0.12];
  rampFill(c, vert ? 16 : 64, vert ? 64 : 16, ['#2a1806', '#5a3a10', '#8a6220', '#b88a30', '#e0b850', '#fff0a8'], (x, y) => { const a = vert ? x : y, b = vert ? y : x; const orn = (a > 5 && a < 10) ? (Math.sin(b * 0.8) > 0.3 ? 0.25 : -0.1) : 0; return prof[a] + orn + (hh(x, y) - 0.5) * 0.12; }, 0.12);
}, 'frame' + (vert ? 'v' : 'h'));
/** Фарфор: кремовая глазурь с золотыми рокайльными завитками. */
const porcelainTex = () => pixTex(96, 48, (c) => {
  rampFill(c, 96, 48, ['#8e8070', '#b8a890', '#d6c8ae', '#ece0c8', '#faf2e2'], (x, y) => 0.62 + Math.sin(y / 48 * Math.PI) * 0.3 + (hh(x, y) - 0.5) * 0.1 - (y < 6 || y > 42 ? 0.2 : 0), 0.2);
  const scroll = (cx: number, cy: number, dir: number, s: number) => {
    for (const [col, lw, off] of [['#9a6a1c', 2.6, 0.6], ['#d8a040', 1.8, 0], ['#fff0a0', 0.9, -0.4]] as [string, number, number][]) {
      c.strokeStyle = col; c.lineWidth = lw; c.beginPath();
      for (let t = 0; t < 9.5; t += 0.25) { const r = (1 + t * 0.9) * s; const x = cx + Math.cos(t * dir) * r + off, y = cy + Math.sin(t * dir) * r * 0.85 + off; if (t === 0) c.moveTo(x, y); else c.lineTo(x, y); }
      c.stroke();
    }
  };
  for (let k = 0; k < 2; k++) {
    const ox = k * 48; scroll(ox + 14, 27, 1, 1.05); scroll(ox + 36, 21, -1, 0.9);
    c.strokeStyle = '#c08a2c'; c.lineWidth = 2; c.beginPath(); c.moveTo(ox + 4, 38); c.bezierCurveTo(ox + 16, 44, ox + 30, 8, ox + 46, 12); c.stroke();
    c.strokeStyle = '#f4d070'; c.lineWidth = 1; c.beginPath(); c.moveTo(ox + 4, 37); c.bezierCurveTo(ox + 16, 43, ox + 30, 7, ox + 46, 11); c.stroke();
    for (const [lx, ly] of [[ox + 24, 34], [ox + 28, 30], [ox + 8, 14], [ox + 42, 36], [ox + 20, 10]]) { ell(c, lx, ly, 2.5, 1.5, '#b07a24'); rect(c, lx - 1, ly - 1, 1, 1, '#ffe08a'); }
  }
  rect(c, 0, 0, 96, 3, '#a87a28'); rect(c, 0, 1, 96, 1, '#f0c860'); rect(c, 0, 45, 96, 3, '#a87a28'); rect(c, 0, 46, 96, 1, '#f0c860');
}, 'porcelain2');
/** Полированное красное дерево: длинные доски, волокна идут вдоль стола. */
const mahoganyTex = () => pixTex(128, 128, (c) => rampFill(c, 128, 128, ['#120604', '#1e0b06', '#2c120a', '#3c1a0e', '#4e2412', '#623016', '#7a3e1c'], (x, y) => {
  const pl = Math.floor(y / 32), yy = y % 32; if (yy === 0) return 0.02; if (yy === 1) return 0.2;
  const g = Math.sin(x * 0.045 + pl * 2.1 + Math.sin(yy * 0.35 + x * 0.02 + pl) * 1.6) * 0.5 + 0.5; const fleck = hh(x >> 1, y, pl) > 0.93 ? 0.12 : 0;
  return 0.25 + g * 0.42 + hh(x >> 3, y, pl + 3) * 0.12 + fleck + (pl % 2) * 0.05;
}, 0.22), 'mahogany');
const velvetTex = () => pixTex(32, 32, (c) => rampFill(c, 32, 32, ['#1a0206', '#32060c', '#4e0a14', '#6c101e', '#8c1a2a', '#b02a3c'], (x, y) => 0.45 + Math.sin(x / 32 * Math.PI * 4) * 0.4 + (hh(x, y) - 0.5) * 0.18), 'velvet2');
const wallTex = () => pixTex(32, 32, (c) => rampFill(c, 32, 32, ['#14060a', '#1e0a0e', '#2a0e12', '#3a1416', '#4e2016', '#7a4a20'], (x, y) => {
  const u = (x % 16) - 8, v = ((y + (Math.floor(x / 16) % 2) * 8) % 16) - 8; const d = Math.abs(u) * 1.2 + Math.abs(v); if (x % 16 === 0) return 0.5;
  return d < 2.5 ? 0.6 : d < 4 ? 0.12 : d < 5 ? 0.45 : 0.28 + hh(x, y) * 0.12;
}, 0.1), 'wall2');
/** Лампочка: раскалённая нить и стеклянные блики. */
const bulbTex = () => pixTex(16, 16, (c) => { rect(c, 0, 0, 16, 16, '#ffe4b0'); ell(c, 8, 8, 6, 6, '#fff4d8'); rect(c, 5, 7, 6, 2, '#ffffff'); rect(c, 4, 9, 2, 1, '#fff8e8'); rect(c, 10, 9, 2, 1, '#fff8e8'); rect(c, 3, 3, 2, 2, '#ffffff'); }, 'bulb');
/** Ореол: ступенчатый радиальный градиент — пиксельное свечение. */
const haloTex = () => pixTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const d = Math.hypot(x - 15.5, y - 15.5) / 16; const a = d < 0.22 ? 0.9 : d < 0.38 ? 0.5 : d < 0.58 ? 0.24 : d < 0.82 ? 0.09 : 0; c.fillStyle = `rgba(255,${Math.round(190 - d * 80)},${Math.round(110 - d * 60)},${a})`; c.fillRect(x, y, 1, 1); } }, 'halo2');
const glowTex = () => pixTex(64, 64, (c) => { for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) { const d = Math.hypot(x - 31.5, y - 31.5) / 32; const a = Math.max(0, Math.round((1 - d) ** 2 * 10) / 10) * 0.8; c.fillStyle = `rgba(255,${Math.round(170 - d * 60)},${Math.round(90 - d * 40)},${a})`; c.fillRect(x, y, 1, 1); } }, 'glow');
const streakTex = () => pixTex(8, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 8; x++) { const d = Math.max(Math.abs(x - 3.5) / 4, Math.abs(y - 15.5) / 16); const a = d < 0.3 ? 0.8 : d < 0.55 ? 0.4 : d < 0.8 ? 0.15 : 0; c.fillStyle = `rgba(255,170,90,${a})`; c.fillRect(x, y, 1, 1); } }, 'streak');
/** Старинное зеркало: тёмная амальгама с тёплыми пятнами и патиной по краям. */
const mirrorTex = () => pixTex(96, 128, (c) => rampFill(c, 96, 128, ['#0a0604', '#140c08', '#22150c', '#342012', '#4a2e18'], (x, y) => { const e = Math.min(x, 95 - x, y, 127 - y) / 16; return 0.3 + (1 - x / 96) * 0.25 + (y / 128) * 0.15 + Math.min(1, e) * 0.2 + (hh(x >> 1, y >> 1) - 0.5) * 0.2 + Math.sin(x * 0.11 + y * 0.05) * 0.08 + (hh(x, y) > 0.985 ? 0.3 : 0); }, 0.3), 'mirror2');
const facetTex = () => pixTex(16, 16, (c) => { rect(c, 0, 0, 16, 16, '#d8c8c0'); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const d = (x + y) % 8, e = (x - y + 16) % 8; if (d === 0 || e === 0) rect(c, x, y, 1, 1, '#ffffff'); else if (d === 4 || e === 4) rect(c, x, y, 1, 1, '#8a7068'); } }, 'facet');
const netTex = () => pixTex(16, 16, (c) => { rect(c, 0, 0, 16, 16, '#7a0c18'); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { if ((x + y) % 4 === 0 || (x - y + 16) % 4 === 0) rect(c, x, y, 1, 1, '#c03040'); if ((x + y * 3) % 7 === 0) rect(c, x, y, 1, 1, '#e8a060'); } }, 'net');
const petalTex = () => pixTex(16, 16, (c) => rampFill(c, 16, 16, ['#3a0408', '#6a0a12', '#9c1420', '#c82430', '#f04a48'], (x, y) => { const d = Math.hypot(x - 8, y - 15) / 16; return 0.2 + d * 0.75 + (Math.abs(x - 8) % 4 === 0 ? -0.15 : 0); }, 0.25), 'petal');
const brushTex = (k: number) => pixTex(8, 16, (c) => rampFill(c, 8, 16, k ? ['#1a0e0a', '#3a2014', '#6a3a22', '#a06a40', '#d8a070'] : ['#24140c', '#4a2a18', '#7a4a2c', '#b07a4a', '#e8c090'], (x, y) => 0.15 + (y / 16) * 0.75 + (x % 2) * 0.08), 'brush' + k);
const paperTex = (key: string, w: number, h: number, ink: (c: C2) => void) => pixTex(w, h, (c) => { rampFill(c, w, h, ['#8a7048', '#b49a6c', '#cdb688', '#e2cfa2', '#f0e2be'], (x, y) => 0.7 + (hh(x >> 2, y >> 2, 9) - 0.5) * 0.25 - (Math.min(x, w - 1 - x, y, h - 1 - y) < 2 ? 0.3 : 0), 0.25); ink(c); }, key);
const scribble = (c: C2, x0: number, y0: number, x1: number, lines: number, gap: number, col = '#3a2418') => { c.fillStyle = col; for (let l = 0; l < lines; l++) { const y = y0 + l * gap; let x = x0 + (l === 0 ? 6 : 0); while (x < x1 - (l === lines - 1 ? 14 : 0)) { const len = 2 + Math.floor(hh(x, y) * 5); for (let i = 0; i < len; i++) c.fillRect(x + i, y + Math.round(Math.sin((x + i) * 1.7 + l) * 0.6), 1, 1); x += len + 2; } } };

/** Силуэт для «карточки» автомата: рисуем путями, затем бинаризуем альфу и добавляем тёплый контровой кант. */
function silTex(kind: 'ballerina' | 'actor' | 'oscar') {
  const W = 48, H = 96;
  return pixTex(W, H, (c) => {
    c.fillStyle = '#000'; c.strokeStyle = '#000'; c.lineCap = 'round'; c.lineJoin = 'round';
    const line = (pts: number[][], lw: number) => { c.lineWidth = lw; c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) c.lineTo(p[0], p[1]); c.stroke(); };
    const poly = (pts: number[][]) => { c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (const p of pts.slice(1)) c.lineTo(p[0], p[1]); c.closePath(); c.fill(); };
    const circ = (x: number, y: number, r: number) => { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); };
    const hole = (fn: () => void) => { c.globalCompositeOperation = 'destination-out'; fn(); c.globalCompositeOperation = 'source-over'; };
    if (kind === 'ballerina') {
      // руки над головой кольцом (пятая позиция), пышная пачка, ноги на пуантах
      c.lineWidth = 4; c.beginPath(); c.moveTo(18, 31); c.bezierCurveTo(7, 25, 9, 5, 23, 4); c.stroke(); c.beginPath(); c.moveTo(30, 31); c.bezierCurveTo(41, 25, 39, 5, 25, 4); c.stroke();
      circ(24, 20.5, 5.4); circ(24, 14.6, 3.2); rect(c, 22, 24, 4, 6, '#000');
      poly([[16.5, 29], [31.5, 29], [29, 37], [28, 45], [20, 45], [19, 37]]);
      c.beginPath(); c.ellipse(24, 47.5, 23, 4.6, 0, 0, Math.PI * 2); c.fill(); c.beginPath(); c.ellipse(24, 45, 17, 3.4, 0, 0, Math.PI * 2); c.fill();
      for (let x = 2; x < 46; x += 3) poly([[x, 49], [x + 3, 49], [x + 1.5, 52.5 + (x % 2)]]);
      line([[21.5, 50], [22, 66], [23, 80], [23.4, 94]], 4.4); line([[26.5, 50], [26, 66], [25, 80], [24.6, 94]], 4.4);
      line([[21.8, 56], [22.6, 70]], 5.4); line([[26.2, 56], [25.4, 70]], 5.4);
    } else if (kind === 'actor') {
      // актёр в цилиндре и плаще: комическая маска поднята, трагическая опущена
      circ(24, 17, 4.6); rect(c, 17, 12, 14, 2, '#000'); rect(c, 19.5, 4, 9, 9, '#000');
      poly([[19, 23], [29, 23], [38, 82], [31, 79], [24, 81], [17, 79], [10, 82]]);
      line([[29, 25], [35, 16], [38, 8]], 3); line([[19, 26], [13, 40], [10, 52]], 3);
      c.beginPath(); c.ellipse(39, 6, 5.5, 6.5, 0.2, 0, Math.PI * 2); c.fill(); c.beginPath(); c.ellipse(9, 57, 5.5, 6.5, -0.2, 0, Math.PI * 2); c.fill();
      hole(() => { rect(c, 36, 4, 2, 2, '#000'); rect(c, 40, 4, 2, 2, '#000'); c.lineWidth = 1.2; c.beginPath(); c.arc(39, 7.5, 2.5, 0.3, Math.PI - 0.3); c.stroke(); rect(c, 6, 55, 2, 2, '#000'); rect(c, 10, 55, 2, 2, '#000'); c.beginPath(); c.arc(9, 62, 2.5, Math.PI + 0.3, -0.3); c.stroke(); });
      line([[22, 78], [19, 94]], 3.4); line([[26, 78], [29, 94]], 3.4);
    } else {
      // «Оскар»: статуэтка с мечом, стоящая на бобине плёнки
      circ(24, 9, 4); rect(c, 22.5, 12, 3, 4, '#000');
      poly([[18.5, 15], [29.5, 15], [28.5, 24], [27.4, 58], [25.8, 73], [22.2, 73], [20.6, 58], [19.5, 24]]);
      rect(c, 17, 22, 14, 3, '#000'); rect(c, 15.5, 25, 17, 2, '#000'); rect(c, 23, 20, 2, 64, '#000');
      circ(24, 84, 11); hole(() => { for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2 - Math.PI / 2; circ(24 + Math.cos(a) * 6, 84 + Math.sin(a) * 6, 2.4); } circ(24, 84, 1.2); });
      rect(c, 13, 93, 22, 3, '#000');
    }
    const id = c.getImageData(0, 0, W, H), d = id.data; const S = new Uint8Array(W * H); for (let i = 0; i < W * H; i++) S[i] = d[i * 4 + 3] > 100 ? 1 : 0;
    const s = (x: number, y: number) => (x < 0 || y < 0 || x >= W || y >= H) ? 0 : S[y * W + x];
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 4; if (!S[y * W + x]) { d[i + 3] = 0; continue; } let col = [14, 8, 8]; if (!s(x - 1, y) || !s(x, y - 1)) col = [150, 78, 34]; else if (!s(x - 2, y)) col = [58, 28, 16]; d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255; }
    c.putImageData(id, 0, 0);
  }, 'sil-' + kind);
}

// ---------- шкатулка и фигурка ----------
interface Box { group: THREE.Group; fig: THREE.Group; update: (theta: number, t: number, camPos: THREE.Vector3) => number; }
function buildMusicBox(gold: Mat, porcelain: Mat, black: THREE.Material, cards: THREE.Material[]): Box {
  const g = new THREE.Group();
  // корпус: «пузатый» фарфор с золотыми поясками, бусинами и ножками-шарами
  const prof = [[0.0, 0], [0.19, 0], [0.205, 0.012], [0.2, 0.03], [0.228, 0.085], [0.226, 0.14], [0.205, 0.185], [0.2, 0.2], [0.0, 0.2]].map(([x, y]) => new THREE.Vector2(x, y + 0.04));
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 40), porcelain); body.castShadow = true; body.receiveShadow = true; g.add(body);
  for (const [y, r, tr] of [[0.05, 0.204, 0.009], [0.238, 0.2, 0.008], [0.255, 0.188, 0.012]]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(r, tr, 6, 40), gold); ring.rotation.x = Math.PI / 2; ring.position.y = y; g.add(ring); }
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.215, 0.04, 40), gold); base.position.y = 0.024; base.castShadow = true; g.add(base);
  const bead = new THREE.InstancedMesh(new THREE.SphereGeometry(0.009, 6, 4), gold, 2 * 52); const m4 = new THREE.Matrix4();
  for (let i = 0; i < 52; i++) { const a = i / 52 * Math.PI * 2; m4.makeTranslation(Math.cos(a) * 0.216, 0.03, Math.sin(a) * 0.216); bead.setMatrixAt(i, m4); m4.makeTranslation(Math.cos(a) * 0.2, 0.268, Math.sin(a) * 0.2); bead.setMatrixAt(52 + i, m4); }
  g.add(bead);
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; const f = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), gold); f.position.set(Math.cos(a) * 0.17, 0.0, Math.sin(a) * 0.17); f.castShadow = true; g.add(f); }
  // вращающаяся площадка в два яруса
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.16, 0.025, 32), gold); plate.position.y = 0.272; g.add(plate);
  const plate2 = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.02, 24), gold); plate2.position.y = 0.293; g.add(plate2);
  const fig = new THREE.Group(); fig.position.y = 0.303; g.add(fig);
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.012, 10), black); ped.position.y = 0.006; fig.add(ped);
  // три силуэта-карточки; каждая обращена к зрителю в своей фазе, толщина — из трёх слоёв
  const PH = [0, Math.PI * 2 / 3, Math.PI * 4 / 3];
  const FW = 0.23, FH = 0.4; const cardGeo = new THREE.PlaneGeometry(FW, FH); cardGeo.translate(0, FH / 2 + 0.008, 0);
  const cardG = PH.map((p, k) => { const cg = new THREE.Group(); cg.rotation.y = p; for (let l = 0; l < 3; l++) { const m = new THREE.Mesh(cardGeo, cards[k]); m.position.z = -l * 0.0035; m.castShadow = true; cg.add(m); } fig.add(cg); return cg; });
  const tmp = new THREE.Vector3(); let lastDom = -1;
  return {
    group: g, fig,
    update(theta, t, camPos) {
      fig.rotation.y = theta; fig.rotation.z = Math.sin(t * 2.3) * 0.01;
      // азимут зрителя в локальных координатах фигурки → какая карточка раскрыта (кулачки)
      g.updateMatrixWorld(); tmp.copy(camPos); fig.worldToLocal(tmp); const camAz = Math.atan2(tmp.x, tmp.z);
      const w = PH.map((p) => smooth(1.1, 0.62, Math.abs(wrap(camAz - p))));
      cardG.forEach((cg, k) => { cg.visible = w[k] > 0.01; cg.scale.set(Math.max(0.001, w[k]), 0.85 + 0.15 * w[k], 1); });
      const dom = w.indexOf(Math.max(...w)); if (Math.max(...w) > 0.5 && dom !== lastDom) { lastDom = dom; return dom; } return -1;
    },
  };
}
// ---------- ключ ----------
function buildKey(gold: Mat) {
  const g = new THREE.Group();
  const bow = new THREE.Shape(); const R = 0.045;
  for (let i = 0; i <= 64; i++) { const a = i / 64 * Math.PI * 2; const r = R * (0.82 + 0.18 * Math.cos(a * 4)); const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i === 0) bow.moveTo(x, y); else bow.lineTo(x, y); }
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; const h = new THREE.Path(); h.absellipse(Math.cos(a) * 0.022, Math.sin(a) * 0.022, 0.009, 0.006, 0, Math.PI * 2, true, a); bow.holes.push(h); }
  const hc = new THREE.Path(); hc.absarc(0, 0, 0.006, 0, Math.PI * 2, true); bow.holes.push(hc);
  const bowM = new THREE.Mesh(new THREE.ExtrudeGeometry(bow, { depth: 0.008, bevelEnabled: true, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 1 }), gold); bowM.position.set(0, 0, -0.004); g.add(bowM);
  const crown = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.03, 4), gold); crown.position.set(0, R + 0.01, 0); g.add(crown);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.0075, 0.17, 10), gold); shaft.rotation.z = Math.PI / 2; shaft.position.x = R + 0.085; g.add(shaft);
  for (const x of [R + 0.012, R + 0.03]) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.011, 0.003, 6, 16), gold); t.rotation.y = Math.PI / 2; t.position.x = x; g.add(t); }
  const bit = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.032, 0.006), gold); bit.position.set(R + 0.155, -0.02, 0); g.add(bit);
  const notch = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.012, 0.007), std({ color: 0x050304 })); notch.position.set(R + 0.152, -0.03, 0); g.add(notch);
  g.traverse((o: any) => { if (o.isMesh) o.castShadow = true; });
  // локальная ось ключа: +X — к бородке. Поворачиваем группу так, чтобы бородка входила в замок
  return g;
}

export class DressingRoom {
  root = new THREE.Group(); state = 'dark'; t = 0; st = 0; theta = 0; spinning = false; speed = 0; disposed = false;
  box!: Box; mirrorBox!: Box; tableBox!: Box; key!: THREE.Group; keyPivot = new THREE.Group(); lights: { l: THREE.Light; base: number }[] = [];
  bulbs: THREE.Mesh[] = []; halos: THREE.SpriteMaterial[] = []; amb!: THREE.HemisphereLight; keySpot!: THREE.SpotLight; backLight!: THREE.PointLight; mainSpot!: THREE.SpotLight;
  camFrom = new THREE.Vector3(); camTo = new THREE.Vector3(); lookFrom = new THREE.Vector3(); lookTo = new THREE.Vector3(); camPos = new THREE.Vector3(); look = new THREE.Vector3();
  finalCam = new THREE.Vector3(); finalLook = new THREE.Vector3(); mouse = { x: 0, y: 0 }; cloth!: THREE.Mesh; curtain!: THREE.Mesh; photos: THREE.Object3D[] = []; dust!: THREE.Points;
  lagUntil = 0; lagBuf: number[] = []; nextLag = 18; nextAmb = 12; onState: (s: string) => void = () => {}; turnAsked = false; keyAngle = 0; prevFov = 30;
  deco = new THREE.Group(); streaks: { m: THREE.Mesh; b: THREE.Vector3 }[] = []; streakMat!: THREE.MeshBasicMaterial;
  constructor(public R: Renderer, public withIntro: boolean) {}

  build() {
    const R = this.R, root = this.root; R.scene.add(root); R.scene.background = new THREE.Color(0x020101); R.scene.fog = null;
    // тёплое окружение для бликов: тёмная комната и ряд ламп
    const es = new THREE.Scene(); es.add(new THREE.Mesh(new THREE.BoxGeometry(12, 12, 12), new THREE.MeshBasicMaterial({ color: 0x1c0c06, side: THREE.BackSide })));
    const lampM = new THREE.MeshBasicMaterial(); lampM.color.setRGB(3, 1.8, 0.8); for (let i = 0; i < 7; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), lampM); l.position.set(-1.2 + (i % 2) * 2.4, -1 + i * 0.5, -4); es.add(l); }
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(0.35, 0.2, 0.1) })); sky.position.set(0, 4, 0); sky.rotation.x = Math.PI / 2; es.add(sky);
    const pm = new THREE.PMREMGenerator(R.r); this.envTex = pm.fromScene(es, 0.03).texture; pm.dispose(); R.scene.environment = this.envTex; (R.scene as any).environmentIntensity = 0.12;
    es.traverse((o: any) => { o.geometry?.dispose(); o.material?.dispose(); });
    R.setGrade({ tint: [1.1, 0.95, 0.8], sat: 1.08, vig: 0.62, contrast: 1.08, bloom: 0.6, bright: 0.95 }, true);
    const gold = std({ map: goldTex(), color: 0xffffff, metalness: 0.75, roughness: 0.36 }), black = new THREE.MeshBasicMaterial({ color: 0x050203 });
    const pt = porcelainTex(); pt.wrapS = THREE.RepeatWrapping; pt.repeat.set(5, 1); const porcelain = std({ map: pt, roughness: 0.3 });
    const cards = (['ballerina', 'actor', 'oscar'] as const).map((k) => new THREE.MeshBasicMaterial({ map: silTex(k), alphaTest: 0.5, side: THREE.DoubleSide }));
    const velvet = std({ map: rep(velvetTex(), 3, 1), roughness: 0.95 });
    // стена, занавес и зеркало (зеркало — окно в «отражённую» комнату)
    const wall = std({ map: rep(wallTex(), 1, 1), roughness: 0.9 });
    const MW = 1.9, MH = 2.35, MX = BX - 0.12 + MW / 2, MY = 0.32 + MH / 2, WZ = -1.0; this.MX = MX; this.MW = MW;
    const wallPart = (x: number, y: number, w: number, h: number) => { const pg = new THREE.PlaneGeometry(w, h); const uv = pg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w * 3.5, uv.getY(i) * h * 3.5); const m = new THREE.Mesh(pg, wall); m.position.set(x, y, WZ); m.receiveShadow = true; root.add(m); };
    const ML = MX - MW / 2, MRt = MX + MW / 2; wallPart(ML - 2, 1.5, 4, 4); wallPart(MRt + 2, 1.5, 4, 4); wallPart(MX, MY + MH / 2 + 1, MW, 2); wallPart(MX, 0.15, MW, 0.4);
    const glassMat = new THREE.MeshStandardMaterial({ map: mirrorTex(), color: 0x9a7a60, emissive: 0xc07040, emissiveMap: mirrorTex(), emissiveIntensity: 0, metalness: 0.9, roughness: 0.18, transparent: true, opacity: 0.42, depthWrite: false });
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(MW, MH), glassMat); this.glass = glass; glass.position.set(MX, MY, WZ + 0.005); glass.renderOrder = 2; root.add(glass);
    const rg = new THREE.BoxGeometry(MW + 3, 4, 3); { const uv = rg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 14, uv.getY(i) * 14); }
    const reflRoom = new THREE.Mesh(rg, std({ map: wallTex(), color: 0x6a5048, side: THREE.BackSide, roughness: 1 })); reflRoom.position.set(MX, 1.6, WZ - 1.5); root.add(reflRoom);
    // золотая резная рама и лампы гримёрного зеркала (колонна слева, ряд сверху, колонна справа)
    const fV = std({ map: rep(frameTex(true), 1, 4), color: 0xb08860, metalness: 0.45, roughness: 0.5 }), fH = std({ map: rep(frameTex(false), 6, 1), color: 0xb08860, metalness: 0.45, roughness: 0.5 });
    const fr = (x: number, y: number, w: number, h: number, m: Mat) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.07), m); b.position.set(x, y, WZ + 0.035); b.receiveShadow = true; root.add(b); };
    const FWd = 0.22; fr(ML - FWd / 2, MY, FWd, MH + FWd * 2, fV); fr(MRt + FWd / 2, MY, FWd, MH + FWd * 2, fV); fr(MX, MY + MH / 2 + FWd / 2, MW, FWd, fH); fr(MX, MY - MH / 2 - 0.06, MW + FWd * 2, 0.12, fH);
    // внутренний багет
    for (const [x, y, w, h] of [[ML + 0.015, MY, 0.03, MH], [MRt - 0.015, MY, 0.03, MH], [MX, MY + MH / 2 - 0.015, MW, 0.03], [MX, MY - MH / 2 + 0.015, MW, 0.03]]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.03), gold); b.position.set(x, y, WZ + 0.02); root.add(b); }
    const bt = bulbTex(), ht = haloTex();
    const bulbAt = (x: number, y: number) => {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.068, 12, 10), new THREE.MeshStandardMaterial({ color: 0xfff0d0, map: bt, emissive: 0xffb050, emissiveMap: bt, emissiveIntensity: 0, roughness: 0.3 })); b.position.set(x, y, WZ + 0.15); root.add(b); this.bulbs.push(b);
      const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.08, 10), gold); sock.rotation.x = Math.PI / 2; sock.position.set(x, y, WZ + 0.09); root.add(sock);
      const hm = new THREE.SpriteMaterial({ map: ht, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }); this.halos.push(hm);
      const sp = new THREE.Sprite(hm); sp.scale.setScalar(0.32); sp.position.set(x, y, WZ + 0.2); root.add(sp);
      const rs = new THREE.Sprite(hm); rs.scale.setScalar(0.26); rs.position.set(x, y, WZ * 2 - 0.2); root.add(rs);
    };
    for (let i = 0; i < 6; i++) { const y = 0.5 + i * 0.4; bulbAt(ML - FWd / 2, y); bulbAt(MRt + FWd / 2, y); }
    for (let i = 0; i < 5; i++) bulbAt(ML + 0.2 + i * (MW - 0.4) / 4, MY + MH / 2 + FWd / 2);
    for (const [x, y] of [[ML - FWd / 2, 0.7], [ML - FWd / 2, 1.7], [MX, MY + MH / 2], [MRt + FWd / 2, 1.1]]) { const l = new THREE.PointLight(0xffb468, 0, 5, 1.5); l.position.set(x + 0.15, y, WZ + 0.75); root.add(l); this.lights.push({ l, base: 1.1 }); }
    // отражённые лампочки в зеркале
    for (const b of this.bulbs) { const rb = b.clone(); rb.material = b.material; rb.position.z = WZ * 2 - b.position.z; root.add(rb); }
    // стол: лакированное красное дерево (полупрозрачный лак над отражением) и тёмное основание
    const top = std({ map: rep(mahoganyTex(), 4, 1.4), roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.66 });
    const tbl = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.8), top); tbl.rotation.x = -Math.PI / 2; tbl.position.set(0.6, 0, -0.1); tbl.receiveShadow = true; root.add(tbl);
    const under = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.8), std({ color: 0x0a0403 })); under.rotation.x = -Math.PI / 2; under.position.set(0.6, -0.5, -0.1); root.add(under);
    const wood = std({ map: rep(mahoganyTex(), 6, 0.2), roughness: 0.3 });
    const edge = new THREE.Mesh(new THREE.BoxGeometry(6, 0.06, 0.06), wood); edge.position.set(0.6, -0.03, 0.8); root.add(edge);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(6, 0.7, 0.04), wood); apron.position.set(0.6, -0.4, 0.78); root.add(apron);
    // отражённый стол за зеркалом
    const rtbl = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.8), std({ map: rep(mahoganyTex(), 4, 1.4), color: 0x806050, roughness: 0.4 })); rtbl.rotation.x = -Math.PI / 2; rtbl.position.set(0.6, 0, WZ * 2 + 0.1); root.add(rtbl);
    // бликовые дорожки ламп на лаке
    this.streakMat = new THREE.MeshBasicMaterial({ map: streakTex(), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
    for (const b of this.bulbs) { if (b.position.y > MY + MH / 2 - 0.1) continue; const m = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.7), this.streakMat); m.rotation.order = 'YXZ'; root.add(m); this.streaks.push({ m, b: b.position.clone() }); }
    // занавес слева (тяжёлый бархат с глубокими складками)
    const cg = new THREE.PlaneGeometry(1.6, 4, 60, 1); const cp = cg.attributes.position; for (let i = 0; i < cp.count; i++) { const x = cp.getX(i); cp.setZ(i, Math.sin(x * 16) * 0.06 + Math.sin(x * 37) * 0.015); }
    cg.computeVertexNormals(); this.curtain = new THREE.Mesh(cg, std({ map: rep(velvetTex(), 6, 1), color: 0xb08080, roughness: 0.95 })); this.curtain.position.set(-1.0, 1.7, -0.75); this.curtain.scale.set(1.9, 1, 1); root.add(this.curtain);
    // шкатулка + её отражения (в зеркале и в лаке стола)
    this.box = buildMusicBox(gold, porcelain, black, cards); this.box.group.position.set(BX, 0.03, BZ); this.box.group.scale.setScalar(BS); this.box.group.rotation.y = 0.2; root.add(this.box.group);
    this.mirrorBox = buildMusicBox(gold, porcelain, black, cards); // отражение чуть смещено вправо (как в кадре-референсе), чтобы силуэт не прятался за самой фигуркой
    this.mirrorBox.group.position.set(BX + 0.85, 0.03, WZ * 2 - BZ); this.mirrorBox.group.scale.set(BS, BS, -BS); root.add(this.mirrorBox.group);
    const dim = (g: THREE.Object3D, k: number) => g.traverse((o: any) => { if (o.isMesh && !(o.material as any).alphaTest) { o.material = o.material.clone(); o.material.color?.multiplyScalar(k); } });
    this.tableBox = buildMusicBox(gold, porcelain, black, cards); this.tableBox.group.position.set(BX, -0.03, BZ); this.tableBox.group.scale.set(BS, -BS, BS); dim(this.tableBox.group, 0.5); root.add(this.tableBox.group);
    // ключ: в финале торчит из заводного отверстия шкатулки
    this.key = buildKey(std({ map: goldTex(), color: 0xffe0a0, metalness: 0.5, roughness: 0.38, emissive: 0x1a0e02 })); this.keyPivot.add(this.key); this.key.rotation.y = Math.PI; root.add(this.keyPivot);
    const KA = 0.5, kd = new THREE.Vector3(Math.cos(KA), 0, Math.sin(KA)); const kh = new THREE.Vector3(BX, 0.03 + 0.13 * BS, BZ).addScaledVector(kd, 0.226 * BS); this.keyPivot.position.copy(kh); this.keyPivot.rotation.y = -KA;
    const esc = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.006, 16), gold); esc.rotation.z = Math.PI / 2; esc.position.copy(kh).addScaledVector(kd, -0.004); esc.rotation.y = -KA; root.add(esc); this.esc = esc;
    const hole = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.026, 0.01), new THREE.MeshBasicMaterial({ color: 0x000000 })); hole.position.copy(kh).addScaledVector(kd, 0.002); hole.rotation.y = -KA; root.add(hole); this.isKeyPart = ((o: any) => { let p = o; while (p) { if (p === this.key || p === esc || p === hole) return true; p = p.parent; } return false; }) as any;
    // мелочи туалетного столика (и их отражение в зеркале)
    root.add(this.deco); this.perfume(gold); this.props(gold, velvet);
    const rdeco = this.deco.clone(); rdeco.traverse((o: any) => { o.castShadow = false; }); rdeco.scale.z = -1; rdeco.position.z = WZ * 2; root.add(rdeco);
    this.wallDeco(gold, ML, MRt, MY, MH, WZ);
    // свет: один теневой прожектор, тёплое заполнение, контровой свет за фигуркой
    this.amb = new THREE.HemisphereLight(0xffc890, 0x240a04, 0); root.add(this.amb);
    this.mainSpot = new THREE.SpotLight(0xffc888, 0, 7, 0.55, 0.7, 1.3); this.mainSpot.position.set(-0.6, 2.3, 1.3); this.mainSpot.target.position.set(0.6, 0.05, 0.1); this.mainSpot.castShadow = true; this.mainSpot.shadow.mapSize.set(1024, 1024); this.mainSpot.shadow.bias = -0.0015; root.add(this.mainSpot, this.mainSpot.target);
    this.backLight = new THREE.PointLight(0xff9a50, 0, 2.4, 1.3); this.backLight.position.set(BX + 0.1, 0.75, -0.7);
    // тёплое свечение за фигуркой: силуэт читается контражуром
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.3), new THREE.MeshBasicMaterial({ map: glowTex(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.set(BX + 0.9, 0.95, WZ + 0.01); halo.scale.set(1.2, 1.6, 1); root.add(halo); this.halo = halo; root.add(this.backLight);
    this.keySpot = new THREE.SpotLight(0xfff0d0, 0, 3, 0.18, 0.8, 1.2); root.add(this.keySpot, this.keySpot.target);
    // пыль в лучах
    const N = 160, pos = new Float32Array(N * 3); for (let i = 0; i < N; i++) { pos[i * 3] = -0.6 + Math.random() * 3; pos[i * 3 + 1] = Math.random() * 2.2; pos[i * 3 + 2] = -0.9 + Math.random() * 1.6; }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: 0xffd8a0, size: 0.01, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); root.add(this.dust);
    // кадр
    this.adaptFraming();
    this.prevFov = R.baseFov; R.baseFov = 34; R.cam.near = 0.03; R.cam.far = 40; R.dofFocus = this.finalCam.distanceTo(this.box.group.position); R.setup({ pixelH: 460, dof: true });
    window.addEventListener('pointermove', this.onMove); window.addEventListener('resize', this.onResize);
    if (this.withIntro) this.enter('dark'); else this.enter('menu', true);
  }
  MX = 0; MW = 0;
  onMove = (e: PointerEvent) => { this.mouse.x = e.clientX / window.innerWidth - 0.5; this.mouse.y = e.clientY / window.innerHeight - 0.5; };
  onResize = () => { this.adaptFraming(); };
  /** Низкая «интимная» камера почти на уровне столешницы. На узких экранах камера отъезжает, чтобы шкатулка оставалась в кадре под меню. */
  adaptFraming() {
    const a = window.innerWidth / window.innerHeight;
    if (a < 1) { this.finalCam.set(0.75, 0.8, 2.45); this.finalLook.set(0.85, 0.42, -0.3); } else if (a < 1.5) { this.finalCam.set(0.3, 0.8, 2.4); this.finalLook.set(0.5, 0.52, -0.22); } else { this.finalCam.set(0.3, 0.78, 2.3); this.finalLook.set(0.4, 0.5, -0.22); }
    // дорожки бликов: точка отражения лампы в лаке для текущей камеры
    const c = this.finalCam;
    for (const { m, b } of this.streaks) {
      const t = c.y / (c.y + b.y); const p = new THREE.Vector3(c.x + (b.x - c.x) * t, 0.004, c.z + (b.z - c.z) * t);
      const d = new THREE.Vector3(c.x - p.x, 0, c.z - p.z); m.position.copy(p).addScaledVector(d.normalize(), 0.12); m.rotation.set(-Math.PI / 2, Math.atan2(d.x, d.z), 0, 'YXZ'); m.visible = p.z > -0.95 && p.z < 0.75;
    }
  }

  /** Добавить мелочь на стол (она же попадёт в отражение). */
  put<T extends THREE.Object3D>(o: T, shadow = true): T { if (shadow) o.traverse((m: any) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); this.deco.add(o); return o; }
  perfume(gold: Mat) {
    const glass = new THREE.MeshStandardMaterial({ map: rep(facetTex(), 6, 3), color: 0xf8eae8, roughness: 0.08, metalness: 0.3, transparent: true, opacity: 0.62, emissive: 0x3a2014, emissiveMap: facetTex() });
    const PX = 0.28, PZ = -0.18;
    // шкатулка для украшений под флаконом
    const jb = new THREE.Group(); jb.position.set(PX - 0.02, 0, PZ + 0.02); jb.rotation.y = 0.25;
    const jbBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.3), std({ map: rep(velvetTex(), 2, 1), roughness: 0.8 })); jbBody.position.y = 0.035; jb.add(jbBody);
    for (const [w, d, dx, dz] of [[0.43, 0.014, 0, 0.152], [0.43, 0.014, 0, -0.152], [0.014, 0.31, 0.21, 0], [0.014, 0.31, -0.21, 0]]) { const t = new THREE.Mesh(new THREE.BoxGeometry(w, 0.016, d), gold); t.position.set(dx, 0.072, dz); jb.add(t); }
    const clasp = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.01), gold); clasp.position.set(0, 0.045, 0.155); jb.add(clasp); this.put(jb);
    // гранёный флакон-атомайзер с сеточной грушей и кисточкой
    const at = new THREE.Group(); at.position.set(PX, 0.08, PZ);
    const prof = [[0, 0], [0.05, 0], [0.085, 0.03], [0.1, 0.085], [0.088, 0.14], [0.05, 0.172], [0.024, 0.18], [0, 0.18]].map(([x, y]) => new THREE.Vector2(x, y));
    const b = new THREE.Mesh(new THREE.LatheGeometry(prof, 12), glass); at.add(b);
    const liquid = new THREE.Mesh(new THREE.LatheGeometry(prof.map((v) => new THREE.Vector2(v.x * 0.86, Math.min(v.y, 0.09))), 12), std({ color: 0xe0904a, emissive: 0x5a2008, transparent: true, opacity: 0.75 })); at.add(liquid);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.032, 0.05, 10), gold); neck.position.y = 0.2; at.add(neck);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.026, 0.035, 10), gold); cap.position.y = 0.24; at.add(cap);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([[0, 0.24, 0], [-0.06, 0.27, 0], [-0.12, 0.25, 0.01], [-0.16, 0.2, 0.02]].map(([x, y, z]) => new THREE.Vector3(x, y, z))), 12, 0.006, 5), gold); at.add(tube);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), std({ map: rep(netTex(), 3, 2), roughness: 0.9 })); bulb.position.set(-0.18, 0.15, 0.02); bulb.scale.y = 1.3; at.add(bulb);
    const tas = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.09, 8), std({ map: rep(netTex(), 2, 2), color: 0xffb0a0, roughness: 1 })); tas.position.set(-0.18, 0.06, 0.02); at.add(tas);
    this.put(at);
    // хрустальная баночка с серебряной крышкой
    const jar = new THREE.Group(); jar.position.set(0.48, 0, -0.55);
    const jp = [[0, 0], [0.1, 0], [0.108, 0.02], [0.105, 0.11], [0.096, 0.125], [0, 0.125]].map(([x, y]) => new THREE.Vector2(x, y));
    jar.add(new THREE.Mesh(new THREE.LatheGeometry(jp, 14), glass));
    const silver = std({ color: 0xd8d0d8, metalness: 0.85, roughness: 0.3, map: goldTex() });
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.11, 0.04, 16), silver); lid.position.y = 0.145; jar.add(lid);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), silver); knob.position.y = 0.18; jar.add(knob); this.put(jar);
  }
  props(gold: Mat, velvet: Mat) {
    const put = <T extends THREE.Object3D>(o: T, s = true) => this.put(o, s);
    // бархатная ткань у левого края: объёмные складки, свисающие со стола
    const CW = 1.3, CD = 1.35; const clg = new THREE.PlaneGeometry(CW, CD, 34, 34); const clp = clg.attributes.position;
    const heap = (x: number, v: number) => 0.16 * Math.exp(-((x + 0.15) ** 2 + (v - 0.55) ** 2) / 0.07) + 0.09 * Math.exp(-((x - 0.3) ** 2 + (v - 0.35) ** 2) / 0.04) + Math.max(0, Math.sin(x * 11 + v * 4)) * 0.045 + Math.max(0, Math.sin(x * 23 - v * 2)) * 0.012;
    const EDGE = 0.8, Z0 = -0.25;
    for (let i = 0; i < clp.count; i++) {
      const x = clp.getX(i), v = CD / 2 - clp.getY(i), z = Z0 + v;
      if (z < EDGE) clp.setXYZ(i, x, 0.012 + heap(x, v), z); else { const dv = z - EDGE; clp.setXYZ(i, x + Math.sin(dv * 6 + x * 3) * 0.03, -dv * 1.1, EDGE + 0.03 + Math.max(0, Math.sin(x * 11)) * 0.04 + dv * 0.05); }
    }
    clg.computeVertexNormals(); this.cloth = new THREE.Mesh(clg, std({ map: rep(velvetTex(), 4, 3), roughness: 0.92, side: THREE.DoubleSide })); this.cloth.position.set(-0.45, 0, 0); put(this.cloth); (this.cloth as any).base = Float32Array.from(clp.array as ArrayLike<number>);
    const clothY = (wx: number, wz: number) => wz < EDGE ? 0.012 + heap(wx + 0.45, wz - Z0) : -(wz - EDGE) * 1.1;
    // жемчуг: нить по складкам ткани, свисающая с края, и нить у основания зеркала
    const pearl = std({ color: 0xfff4ea, roughness: 0.18, metalness: 0.15, emissive: 0x2a1a10 }); const m4 = new THREE.Matrix4();
    const pts1 = [[-0.95, 0.4], [-0.7, 0.2], [-0.45, 0.25], [-0.25, 0.45], [-0.3, 0.68], [-0.42, 0.78]].map(([x, z]) => new THREE.Vector3(x, clothY(x, z) + 0.02, z));
    pts1.push(new THREE.Vector3(-0.44, -0.12, 0.86), new THREE.Vector3(-0.38, -0.3, 0.86));
    const pts2 = [[1.55, -0.6], [1.75, -0.45], [1.95, -0.62], [2.15, -0.5], [2.3, -0.7]].map(([x, z]) => new THREE.Vector3(x, 0.02, z));
    const pts3 = [[0.05, 0.35], [0.2, 0.28], [0.33, 0.36], [0.3, 0.46], [0.15, 0.48]].map(([x, z]) => new THREE.Vector3(x, 0.016, z));
    for (const [pts, n, r] of [[pts1, 44, 0.02], [pts2, 26, 0.018], [pts3, 20, 0.014]] as [THREE.Vector3[], number, number][]) { const c = new THREE.CatmullRomCurve3(pts); const im = new THREE.InstancedMesh(new THREE.SphereGeometry(r, 8, 6), pearl, n); for (let i = 0; i < n; i++) { const p = c.getPoint(i / (n - 1)); m4.makeTranslation(p.x, p.y, p.z); im.setMatrixAt(i, m4); } put(im); }
    // стакан с кистями у правого края
    const cupG = new THREE.Group(); cupG.position.set(1.62, 0, 0.05);
    cupG.add(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.28, 16, 1, true), new THREE.MeshStandardMaterial({ map: rep(facetTex(), 4, 2), color: 0xf0f4f4, transparent: true, opacity: 0.4, roughness: 0.05, metalness: 0.3, side: THREE.DoubleSide })));
    (cupG.children[0] as THREE.Mesh).position.y = 0.14;
    const handles = [0x141012, 0x5a2a1a, 0x141012, 0x8a1a24, 0x2a1810];
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group(); g.position.set((i - 2) * 0.035, 0.02, (i % 2) * 0.04 - 0.02); g.rotation.z = (i - 2) * 0.16; g.rotation.x = (i % 2 ? 0.1 : -0.12);
      const L = 0.36 + (i % 3) * 0.06; const h = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.014, L, 8), std({ color: handles[i], roughness: 0.3 })); h.position.y = L / 2; g.add(h);
      const fer = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.012, 0.06, 8), i % 2 ? std({ color: 0xc8c8d0, metalness: 0.8, roughness: 0.3 }) : gold); fer.position.y = L + 0.03; g.add(fer);
      const big = i === 1 || i === 3; const br = new THREE.Mesh(big ? new THREE.SphereGeometry(0.05, 8, 6) : new THREE.ConeGeometry(0.022, 0.09, 8), std({ map: brushTex(i % 2), roughness: 1 }));
      br.position.y = L + (big ? 0.1 : 0.1); if (big) br.scale.set(1, 1.5, 1); else br.rotation.x = Math.PI; g.add(br); cupG.add(g);
    }
    put(cupG);
    // помада и кольцо перед шкатулкой
    const lip = new THREE.Group(); lip.position.set(0.4, 0.022, 0.32); lip.rotation.set(0, 0.7, Math.PI / 2);
    const lb = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.09, 10), gold); lip.add(lb); const lt = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.04, 10), std({ color: 0xa01020, roughness: 0.4 })); lt.position.y = 0.065; lip.add(lt); put(lip);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.005, 6, 16), gold); ring.rotation.x = Math.PI / 2; ring.position.set(1.32, 0.006, 0.28); put(ring);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.01), std({ color: 0xff2040, emissive: 0x600010, roughness: 0.1 })); gem.position.set(1.32, 0.012, 0.302); put(gem);
    // маки / розы: чашечка из изогнутых лепестков
    const petal = std({ map: petalTex(), roughness: 0.75, side: THREE.DoubleSide });
    const flower = (x: number, y: number, z: number, s: number, rx: number, rz = 0) => {
      const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s); g.rotation.set(rx, 0, rz);
      for (let ring = 0; ring < 2; ring++) for (let i = 0; i < 5; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.11 - ring * 0.03, 8, 6, 0, 1.4, 0.35, 1.25), petal); p.rotation.y = i / 5 * Math.PI * 2 + ring * 0.6; p.position.y = ring * 0.01; g.add(p); }
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), std({ color: 0x14100c })); c.position.y = 0.04; g.add(c);
      const st = new THREE.InstancedMesh(new THREE.BoxGeometry(0.008, 0.008, 0.008), std({ color: 0xe8b040, emissive: 0x3a2000 }), 10); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; m4.makeTranslation(Math.cos(a) * 0.04, 0.05, Math.sin(a) * 0.04); st.setMatrixAt(i, m4); } g.add(st);
      put(g);
    };
    flower(1.28, 0.0, 0.68, 1.5, 0.55, -0.2); flower(1.5, 0.02, 0.45, 1.0, 0.25); flower(-0.95, 0.12, 0.5, 1.2, 0.6, 0.3);
    // старое письмо (чуть загнутое) и билетик
    const ng = new THREE.PlaneGeometry(0.62, 0.42, 10, 1); const np = ng.attributes.position; for (let i = 0; i < np.count; i++) { const x = np.getX(i) / 0.31; np.setZ(i, Math.max(0, x * x - 0.5) * 0.04); } ng.computeVertexNormals();
    const note = new THREE.Mesh(ng, std({ map: paperTex('letter', 64, 44, (c) => { scribble(c, 6, 7, 58, 8, 4); rect(c, 31, 2, 1, 40, 'rgba(90,60,30,.35)'); ell(c, 50, 34, 5, 4, 'rgba(120,80,40,.25)'); rect(c, 40, 37, 14, 1, '#3a2418'); }), roughness: 0.85, side: THREE.DoubleSide }));
    note.rotation.set(-Math.PI / 2, 0, 0.22); note.position.set(0.0, 0.006, 0.55); put(note);
    const ticket = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.12), std({ map: pixTex(32, 14, (c) => { rect(c, 0, 0, 32, 14, '#d8c49a'); rect(c, 1, 1, 30, 12, '#e8d6ae'); rect(c, 2, 2, 7, 10, '#8e1830'); rect(c, 4, 4, 3, 6, '#e8c060'); rect(c, 10, 2, 1, 10, '#a08060'); for (let i = 0; i < 4; i++) rect(c, 13, 3 + i * 2.5, 16 - i * 3, 1, '#3a2a14'); }, 'ticket2'), roughness: 0.9 }));
    ticket.rotation.set(-Math.PI / 2, 0, -0.4); ticket.position.set(0.58, 0.008, 0.45); put(ticket);
    // программка под шкатулкой слева
    const prog = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.4), std({ map: pixTex(24, 32, (c) => { rect(c, 0, 0, 24, 32, '#4a0a14'); c.strokeStyle = '#d4ae48'; c.strokeRect(1.5, 1.5, 21, 29); rect(c, 6, 10, 12, 2, '#d4ae48'); rect(c, 8, 14, 8, 1, '#d4ae48'); rect(c, 5, 22, 14, 1, '#d4ae48'); ell(c, 12, 6, 2, 2, '#d4ae48'); }, 'prog') }));
    prog.position.set(-0.05, 0.004, -0.35); prog.rotation.set(-Math.PI / 2, 0, 0.5); put(prog);
    // сувениры пройденных глав: на столе появляется по одной вещице от каждого друга
    let un: string[] = []; try { un = JSON.parse(localStorage.getItem('tom-unlock') || '[]'); } catch { un = []; }
    const KEEP: Record<string, [number, number, number, (c: C2) => void]> = {
      polina: [-0.62, 0.34, 0.12, (c) => { ell(c, 8, 8, 7, 7, '#c89a10'); ell(c, 8, 8, 6, 6, '#f2c230'); for (const [x, y] of [[6, 6], [10, 6], [6, 10], [10, 10]]) rect(c, x - 1, y - 1, 2, 2, '#7a5a08'); }],
      ruben: [1.05, 0.62, 0.13, (c) => { ell(c, 8, 8, 7, 7, '#1a1a1e'); ell(c, 8, 8, 6, 6, '#c41e3a'); for (let k = 0; k < 6; k++) { const a = k / 6 * 6.283; rect(c, 8 + Math.cos(a) * 5 - 1, 8 + Math.sin(a) * 5 - 1, 2, 2, '#f4f0e8'); } ell(c, 8, 8, 3, 3, '#f4f0e8'); }],
      matvey: [-0.34, 0.66, 0.2, (c) => { rect(c, 7, 0, 2, 3, '#3a2a1e'); ell(c, 8, 10, 6, 7, '#e84a4a'); for (let y = 5; y < 16; y += 3) rect(c, 2, y, 12, 1, '#a82a2a'); rect(c, 5, 16, 6, 2, '#3a2a1e'); ell(c, 7, 9, 2, 3, '#ffb0a0'); }],
      erika: [1.55, 0.32, 0.12, (c) => { rect(c, 1, 3, 14, 10, '#e8e4dc'); rect(c, 1, 3, 14, 3, '#1a1a1e'); rect(c, 3, 8, 10, 1, '#7a7a7a'); rect(c, 3, 10, 7, 1, '#7a7a7a'); rect(c, 11, 9, 2, 3, '#c41e3a'); }],
      liza: [0.32, 0.74, 0.16, (c) => { for (let k = 0; k < 6; k++) rect(c, 4 + (k % 2) * 3, 1 + k * 2.4, 5, 3, k % 2 ? '#c89a5a' : '#e8c080'); rect(c, 3, 15, 10, 3, '#e84a6f'); }],
      angelina: [-0.85, 0.02, 0.18, (c) => { ell(c, 8, 5, 5, 5, '#3a3a44'); ell(c, 8, 5, 4, 4, '#8a8a9a'); for (let y = 2; y < 9; y += 2) rect(c, 4, y, 8, 1, '#4a4a54'); rect(c, 7, 10, 2, 8, '#1a1a1e'); ell(c, 8, 18, 4, 1.5, '#1a1a1e'); }],
    };
    for (const id of un) { const k = KEEP[id]; if (!k) continue; const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: pixTex(16, 20, k[3], 'keep_' + id), transparent: true, alphaTest: 0.4 })); sp.scale.set(k[2], k[2] * 1.25, 1); sp.position.set(k[0], k[2] * 0.62, k[1]); put(sp); }
  }
  /** Фото, ноты и открытка, заткнутые за раму зеркала. */
  wallDeco(_gold: Mat, ML: number, MRt: number, MY: number, MH: number, WZ: number) {
    const card = (x: number, y: number, rz: number, w: number, h: number, key: string, tw: number, th: number, draw: (c: C2) => void, pin = true) => {
      const g = new THREE.Group(); g.position.set(x, y, WZ + 0.08); g.rotation.set(-0.06, 0, rz);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), std({ map: pixTex(tw, th, draw, key), roughness: 0.9 })); m.position.y = -h / 2 + 0.03; m.castShadow = true; g.add(m);
      if (pin) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.02, 0.01), std({ color: 0x8a6a3a, metalness: 0.6, roughness: 0.4 })); p.position.z = 0.006; g.add(p); }
      this.root.add(g); this.photos.push(g);
    };
    // полароид зала театра
    card(MRt - 0.55, 1.42, -0.16, 0.38, 0.44, 'pola', 30, 34, (c) => {
      rect(c, 0, 0, 30, 34, "#ece4d4"); rect(c, 2, 2, 26, 24, '#2a2018');
      for (let i = 0; i < 3; i++) { c.fillStyle = ['#4a3a2a', '#5a4a38', '#6a5a46'][i]; c.beginPath(); c.arc(15, 22, 12 - i * 3, Math.PI, 0); c.fill(); }
      rect(c, 9, 12, 12, 8, '#a89070'); rect(c, 10, 13, 10, 6, '#c8b088'); rect(c, 14, 3, 2, 3, '#d8c8a0');
      for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) rect(c, 3 + i * 2.8 + (r % 2), 21 + r * 1.8, 2, 1, '#1a140e');
      rect(c, 2, 6, 3, 15, '#5a1a1a'); rect(c, 25, 6, 3, 15, '#5a1a1a');
    });
    // ноты и записка сверху слева
    card(ML + 0.62, 1.5, 0.08, 0.28, 0.34, 'sheet', 24, 28, (c) => { rect(c, 0, 0, 24, 28, '#e6d8b8'); for (let s = 0; s < 3; s++) for (let l = 0; l < 5; l++) rect(c, 2, 4 + s * 8 + l * 1.2, 20, 1, '#6a5a48'); for (let i = 0; i < 9; i++) { rect(c, 3 + i * 2.2, 5 + (i * 7 % 5) + Math.floor(i / 3) * 8, 2, 1.5, '#2a1a12'); } });
    card(ML + 0.95, 1.46, -0.07, 0.22, 0.2, 'memo', 20, 18, (c) => { rect(c, 0, 0, 20, 18, '#e8c8b0'); scribble(c, 2, 4, 18, 3, 4, '#7a1a22'); });
  }

  // ---------- машина состояний ----------
  enter(s: string, instant = false) {
    this.state = s; this.st = 0; this.onState(s);
    if (s === 'dark') { this.setLights(0); this.spinning = false; this.speed = 0; this.key.position.x = 0.45; this.key.rotation.x = 0; this.keySpot.intensity = 0; this.root.traverse((o: any) => { if (o.isMesh && o.material && !this.isKeyPart(o)) o.visible = false; }); this.placeKeyCam(0.9); }
    if (s === 'reveal') audio.sfx('mechtick');
    if (s === 'insert') audio.sfx('scrape', { dur: 0.9 });
    if (s === 'lights') { this.root.traverse((o: any) => { if (o.isMesh) o.visible = true; }); this.adaptFraming(); this.theta = this.faceTheta() - 2.2; audio.sfx('lighton'); this.R.flash = 0.55; this.camFrom.copy(this.camPos); this.lookFrom.copy(this.look); }
    if (s === 'menu') { this.root.traverse((o: any) => { if (o.isMesh) o.visible = true; }); this.adaptFraming(); this.spinning = true; if (instant) { this.theta = this.faceTheta() - 0.9; this.setLights(1); this.speed = 1; this.camPos.copy(this.finalCam); this.look.copy(this.finalLook); this.key.position.x = 0.13; } audio.music(menuTheme()); audio.ambience('hall'); }
  }
  /** Угол площадки, при котором к финальной камере обращена балерина. */
  faceTheta() { return Math.atan2(this.finalCam.x - BX, this.finalCam.z - BZ) - 0.2; }
  isKeyPart(o: THREE.Object3D) { let p: THREE.Object3D | null = o; while (p) { if (p === this.key) return true; p = p.parent; } return false; }
  placeKeyCam(dist: number) { this.root.updateMatrixWorld(true); const k = new THREE.Vector3(); this.key.getWorldPosition(k); k.add(new THREE.Vector3(Math.cos(0.5), 0, Math.sin(0.5)).multiplyScalar(-0.1)); const n = new THREE.Vector3(-Math.sin(0.5), 0, Math.cos(0.5)); this.camPos.copy(k).addScaledVector(n, dist).add(new THREE.Vector3(0, 0.07, 0)); this.look.copy(k); }
  setLights(k: number) {
    const kk = Math.min(1, k);
    (this.R.scene as any).environmentIntensity = 0.1 + 0.3 * kk; if (this.halo) (this.halo.material as THREE.MeshBasicMaterial).opacity = 0.5 * kk; if (this.glass) (this.glass.material as Mat).emissiveIntensity = 1.0 * kk;
    this.amb.intensity = 0.2 * k; this.mainSpot.intensity = 2.0 * k; this.backLight.intensity = 0.55 * k; (this.dust.material as THREE.PointsMaterial).opacity = 0.5 * k; this.streakMat.opacity = 0.42 * kk;
    for (const { l, base } of this.lights) l.intensity = base * k;
  }
  /** Ввод: клик/клавиша. Во время вступления — поворот ключа или пропуск. */
  input(kind: 'act' | 'skip') {
    if (this.state === 'menu') return;
    if (this.state === 'await' && kind === 'act') { this.enter('turn'); return; }
    if (kind === 'skip' || ['dark', 'reveal', 'insert', 'logo', 'hold', 'lights'].includes(this.state)) { this.enter('menu', true); }
  }
  halo: THREE.Mesh | null = null; esc: THREE.Mesh | null = null; glass: THREE.Mesh | null = null; lastNow = 0; envTex: THREE.Texture | null = null;
  update(_dt: number) {
    if (this.disposed) return; const now = performance.now(); const dt = this.lastNow ? Math.min(0.25, (now - this.lastNow) / 1000) : 0.016; this.lastNow = now; this.t += dt; this.st += dt; const st = this.st, kp = this.key;
    switch (this.state) {
      case 'dark': if (st > 1.0) this.enter('reveal'); break;
      case 'reveal': { const k = Math.min(1, st / 2.1); (this.R.scene as any).environmentIntensity = 0.12 + 0.3 * ease(k); const w = new THREE.Vector3(); kp.getWorldPosition(w); this.keySpot.position.copy(w).add(new THREE.Vector3(-0.3, 0.6, 0.7)); this.keySpot.target.position.copy(w); this.keySpot.intensity = 6 * ease(k); this.placeKeyCam(0.9 - 0.25 * ease(k)); if (st > 2.2) this.enter('insert'); break; }
      case 'insert': { const k = ease(Math.min(1, st / 1.3)); kp.position.x = 0.13 + 0.32 * (1 - k); this.placeKeyCam(0.62 - 0.06 * k); if (st > 1.3 && !this.turnAsked) { this.turnAsked = true; audio.sfx('keyin'); } if (st > 1.9) this.enter('await'); break; }
      case 'await': this.onState('await'); if (st > 2.0) this.enter('turn'); break;
      case 'turn': { const T = 2.4; const k = Math.min(1, st / T); const stutter = Math.sin(k * Math.PI * 7) * 0.035 * (1 - k); kp.rotation.x = -(ease(k) + stutter) * Math.PI * 1.5; if (st < 0.05) audio.sfx('scrape', { dur: 2.2 }); if (Math.floor(st * 3) !== Math.floor((st - dt) * 3)) audio.sfx('mechtick'); if (k >= 1) { audio.sfx('clunk'); audio.sfx('hum'); setTimeout(() => audio.sfx('windup'), 250); this.enter('hold'); } break; }
      case 'hold': if (st > 0.9) this.enter('lights'); break;
      case 'lights': {
        const k = Math.min(1, st / 3.4); this.setLights(k < 0.06 ? 1.15 : 0.3 + 0.7 * ease(k)); this.bulbs.forEach((b, i) => { const on = st > 0.15 + i * 0.05; (b.material as Mat).emissiveIntensity = on ? 1.0 : 0; if (on && st - dt <= 0.15 + i * 0.05 && i % 2 === 0) audio.sfx('mechtick'); });
        const c = ease(Math.min(1, st / 3.4)); const ctrl = new THREE.Vector3((this.camFrom.x + this.finalCam.x) / 2 + 0.6, Math.max(this.camFrom.y, this.finalCam.y) + 0.6, Math.max(this.camFrom.z, this.finalCam.z) + 1.2); const a1 = new THREE.Vector3().lerpVectors(this.camFrom, ctrl, c), a2 = new THREE.Vector3().lerpVectors(ctrl, this.finalCam, c); this.camPos.lerpVectors(a1, a2, c); this.look.lerpVectors(this.lookFrom, this.finalLook, c); this.keySpot.intensity *= 0.95;
        if (st > 0.6) { this.spinning = true; this.speed = Math.min(1, (st - 0.6) / 2); } if (st > 0.8 && audio.musicId() !== menuTheme()) { audio.music(menuTheme(), { fade: 2 }); audio.ambience('hall'); }
        if (st > 3.3) this.enter('logo'); break; }
      case 'logo': if (st > 1.0) this.enter('menu'); break;
      case 'menu': break;
    }
    if (this.state === 'menu' || this.state === 'logo') {
      for (const b of this.bulbs) (b.material as Mat).emissiveIntensity = 1.0 * (0.92 + Math.sin(this.t * 9 + b.position.y * 13 + b.position.x * 7) * 0.04 + (Math.random() < 0.004 ? -0.5 : 0));
      const d = 0.025; this.camPos.set(this.finalCam.x + Math.sin(this.t * 0.21) * d + this.mouse.x * 0.06, this.finalCam.y + Math.sin(this.t * 0.17) * d * 0.5 - this.mouse.y * 0.03, this.finalCam.z); this.look.copy(this.finalLook);
      kp.rotation.x -= dt * 0.25 * this.speed; // ключ медленно раскручивается, пока играет шкатулка
      this.nextAmb -= dt; if (this.nextAmb < 0) { this.nextAmb = 20 + Math.random() * 25; audio.sfx(Math.random() < 0.5 ? 'applause' : 'creak', { dur: 2, dens: 12 }); }
    }
    this.bulbs.forEach((b, i) => { const hm = this.halos[i]; if (hm) hm.opacity = Math.min(1, (b.material as Mat).emissiveIntensity / 1.0) * 0.6; });
    // шкатулка
    // балерина «задерживается» лицом к зрителю, как в настоящей шкатулке с неровным заводом
    const dwell = Math.abs(wrap(this.faceTheta() - this.theta)) < 0.45 ? 0.35 : 1;
    if (this.spinning) this.theta += dt * (Math.PI * 2 / 15) * this.speed * dwell;
    this.lagBuf.push(this.theta); if (this.lagBuf.length > 40) this.lagBuf.shift();
    this.nextLag -= dt; if (this.nextLag < 0 && this.state === 'menu') { this.nextLag = 22 + Math.random() * 20; this.lagUntil = this.t + 1.6; }
    const mirrorTheta = this.t < this.lagUntil ? this.lagBuf[0] : this.theta;
    const cam = this.R.cam; const changed = this.box.update(this.theta, this.t, cam.position); // отражение показывает тот же силуэт, что видит зритель (камера переносится в систему координат отражённой шкатулки)
    this.box.group.updateMatrixWorld(); this.mirrorBox.group.updateMatrixWorld(); const vcam = this.mirrorBox.group.localToWorld(this.box.group.worldToLocal(cam.position.clone())); this.mirrorBox.update(mirrorTheta, this.t, vcam); this.tableBox.update(this.theta, this.t, cam.position);
    if (changed >= 0 && this.spinning) audio.sfx('mechtick');
    // ткань и фото колышутся
    const cl = this.cloth.geometry.attributes.position, base = (this.cloth as any).base as Float32Array; for (let i = 0; i < cl.count; i++) { const y = base[i * 3 + 1]; if (y < -0.05) cl.setX(i, base[i * 3] + Math.sin(this.t * 0.9 + y * 4) * 0.008); } cl.needsUpdate = true;
    this.photos.forEach((p, i) => { p.rotation.z += Math.sin(this.t * (0.6 + i * 0.13) + i) * 0.0004; }); this.curtain.rotation.y = 0.35 + Math.sin(this.t * 0.4) * 0.015;
    const dp = this.dust.geometry.attributes.position; for (let i = 0; i < dp.count; i++) { dp.setY(i, dp.getY(i) - dt * 0.02 * (1 + (i % 3))); dp.setX(i, dp.getX(i) + Math.sin(this.t + i) * dt * 0.01); if (dp.getY(i) < 0) dp.setY(i, 2.2); } dp.needsUpdate = true;
    cam.position.copy(this.camPos); cam.up.set(0, 1, 0); cam.lookAt(this.look);
    if (this.R.bokeh) (this.R.bokeh.uniforms as any).focus.value = cam.position.distanceTo(this.box.group.position);
    // тилт-шифт: резкая полоса — на шкатулке
    if (this.R.tilt && (this.state === 'menu' || this.state === 'logo' || this.state === 'lights')) { const u = this.R.tilt.uniforms; const v = new THREE.Vector3(BX, 0.4, BZ).project(cam); u.uFocus.value = (v.y + 1) / 2; u.uBand.value = 0.26; u.uAmt.value = 0.8; }
  }
  dispose() {
    if (this.disposed) return; this.disposed = true; this.R.scene.remove(this.root);
    this.root.traverse((o: any) => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m: any) => m.dispose()); });
    window.removeEventListener('pointermove', this.onMove); window.removeEventListener('resize', this.onResize);
    if (this.R.tilt) { const u = this.R.tilt.uniforms; u.uBand.value = 0.16; u.uAmt.value = 1; u.uFocus.value = 0.5; }
    this.R.setGrade({}, true);
    this.R.scene.environment = null; this.envTex?.dispose(); this.R.baseFov = this.prevFov; this.R.cam.near = 1; this.R.cam.far = 200; this.R.setup({ pixelH: 0, dof: false }); audio.ambience(null);
  }
}
/** После прохождения в меню звучит тема финальных титров. */
export function menuTheme() { try { return localStorage.getItem('tom-done') ? 'fin_bows' : 'menu_box'; } catch { return 'menu_box'; } }
