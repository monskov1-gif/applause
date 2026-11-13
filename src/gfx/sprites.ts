// Спрайты персонажей HD-2D: фигурки-билборды в объёмной сцене.
// Персонаж собирается из частей (ноги, юбка, туловище, руки, шея, голова, волосы сзади и спереди, аксессуары),
// каждая часть поворачивается в своём суставе, поэтому шаг, поклон, испуг, указание и танец, это настоящие позы.
// Рисуем вдвое детальнее (SS = 2), а в мире фигура занимает те же FW×FH «логических» пикселей.
import { CharDef, CHARS } from '../data/chars';

export const FW = 32, FH = 48, SS = 2;
export const FRAMES = ['idle0', 'idle1', 'walk0', 'walk1', 'walk2', 'walk3', 'arms', 'bow', 'fear', 'sit', 'point', 'dance1', 'dance2', 'lie'];
export const DIRS = ['f', 'b', 's'];
const PW = FW * SS, PH = FH * SS;
const OUT = 'rgb(26,18,22)';

function shade(hex: string, k: number): string {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  if (k < 0) { r *= 1 + k; g *= 1 + k; b *= 1 + k * 0.8; } else { r += (255 - r) * k; g += (255 - g) * k; b += (255 - b) * k; }
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}
type Ctx = CanvasRenderingContext2D;
interface Pose { bob: number; lean: number; tilt: number; aL: number; aR: number; eL: number; eR: number; lL: number; lR: number; kL: number; kR: number; sit: boolean; lie: boolean; mouth: 'n' | 'o' | 's'; }
const P0: Pose = { bob: 0, lean: 0, tilt: 0, aL: 0.12, aR: 0.12, eL: 0.1, eR: 0.1, lL: 0, lR: 0, kL: 0, kR: 0, sit: false, lie: false, mouth: 'n' };
/** Позы: углы в радианах. a* плечо (0 вниз, >0 наружу/вперёд), e* локоть, l* бедро, k* колено. */
function pose(frame: string, dir: string): Pose {
  const p = { ...P0 }; const side = dir === 's';
  switch (frame) {
    case 'idle1': p.bob = 1; p.aL = p.aR = 0.16; break;
    case 'walk0': case 'walk2': { const s = frame === 'walk0' ? 1 : -1; p.bob = 0; if (side) { p.lL = 0.45 * s; p.lR = -0.45 * s; p.kL = s < 0 ? 0.5 : 0.1; p.kR = s > 0 ? 0.5 : 0.1; p.aL = -0.5 * s; p.aR = 0.5 * s; } else { p.kL = s > 0 ? 0.9 : 0; p.kR = s < 0 ? 0.9 : 0; p.aL = 0.12 + 0.22 * s; p.aR = 0.12 - 0.22 * s; } break; }
    case 'walk1': case 'walk3': p.bob = -2; p.aL = p.aR = 0.14; break;
    case 'arms': p.aL = p.aR = 2.7; p.eL = p.eR = 0.3; p.mouth = 'o'; break;
    case 'bow': p.lean = 0.5; p.bob = 3; p.aL = p.aR = 0.5; p.tilt = 0.25; break;
    case 'fear': p.aL = p.aR = 2.3; p.eL = p.eR = 2.0; p.kL = p.kR = 0.3; p.bob = 2; p.mouth = 'o'; break;
    case 'sit': p.sit = true; p.lL = p.lR = 1.5; p.kL = p.kR = 1.4; p.aL = p.aR = 0.35; p.eL = p.eR = 0.8; break;
    case 'point': p.aR = 1.35; p.eR = -0.25; p.aL = 0.1; break;
    case 'dance1': p.aL = 2.5; p.aR = 2.5; p.eL = p.eR = 0.5; p.bob = -1; p.lL = 0.3; p.kL = 0.6; p.mouth = 's'; break;
    case 'dance2': p.aL = 1.4; p.aR = 1.4; p.bob = 1; p.lR = -0.3; p.kR = 0.6; p.mouth = 's'; break;
    case 'lie': p.lie = true; break;
  }
  return p;
}
/** Залитая капсула (кусок конечности) от сустава вниз на длину len, ширина w. */
function limb(c: Ctx, len: number, w: number, col: string, hi?: string) {
  c.fillStyle = col; c.beginPath(); c.moveTo(-w / 2, 0); c.lineTo(w / 2, 0); c.lineTo(w / 2 - 0.4, len); c.arc(0, len, w / 2 - 0.4, 0, Math.PI); c.closePath(); c.fill();
  if (hi) { c.fillStyle = hi; c.fillRect(-w / 2, 0, 1, len * 0.9); }
}
function ell(c: Ctx, x: number, y: number, rx: number, ry: number, col: string) { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fill(); }
function rect(c: Ctx, x: number, y: number, w: number, h: number, col: string) { c.fillStyle = col; c.fillRect(x, y, w, h); }

function drawFrame(c: Ctx, ox: number, oy: number, d: CharDef, frame: string, dir: string) {
  const p = pose(frame, dir); const side = dir === 's', back = dir === 'b';
  const acc = d.acc || []; const has = (a: string) => acc.includes(a);
  const H = d.h * SS; // рост в пикселях листа
  const build = d.build;
  const shW = build === 'thin' ? 13 : build === 'mid' ? 15 : build === 'strong' ? 19 : 18; // ширина плеч
  const waW = build === 'thin' ? 10 : build === 'mid' ? 12 : build === 'strong' ? 15 : 16; // талия
  const legW = build === 'thin' ? 5 : build === 'strong' ? 6.5 : 6;
  const armW = build === 'strong' ? 5 : 4;
  const headH = Math.round(H * 0.27), headW = Math.round(headH * 0.86);
  const legLen = Math.round(H * 0.4), torsoH = Math.round(H * 0.29), armLen = Math.round(H * 0.32);
  const cx = PW / 2, foot = PH - 2;
  c.save(); c.translate(ox, oy);
  if (p.lie) { c.translate(cx, foot - 6); c.rotate(-Math.PI / 2); c.translate(-cx - 4, -foot + 18); }
  const legH = p.sit ? legLen * 0.5 : legLen;
  const hipY = foot - legH + p.bob, shY = hipY - torsoH;
  const skin = d.skin, skinD = shade(skin, -0.16), skinL = shade(skin, 0.1);
  const top = d.top, topD = shade(top, -0.28), topL = shade(top, 0.14);
  const bot = d.bottom, botD = shade(bot, -0.3);
  const hair = d.hair, hairD = shade(hair, -0.32), hairL = shade(hair, 0.3);
  const shoe = d.shoes || '#221c22';
  const st = d.style;
  const longLen: Record<string, number> = { curls: 0.62, long: 0.62, longStyled: 0.66, glam: 0.7, rapunzel: 1.2, bob: 0.26, bobLong: 0.38, curlyMid: 0.3, fluffy: 0.22, twin: 0.2, ponytail: 0.2, short: 0.1, curlyShort: 0.12, bun: 0.1 };
  const hl = Math.round((longLen[st] || 0) * H * 0.55);
  // --- торс с наклоном (поклон), голова качается с ним ---
  const leanX = Math.sin(p.lean) * torsoH;
  const headCX = cx + leanX + (side ? 2 : 0), headY = shY - headH + 3 + Math.round(p.lean * 6);

  // волосы сзади (за телом)
  const backHair = () => {
    if (hl < 6 || st === 'ponytail' || st === 'twin' || st === 'bun') return; const w = headW + (st === 'curls' || st === 'glam' || st === 'curlyMid' || st === 'fluffy' ? 6 : 3);
    const x0 = (side ? headCX - 3 : headCX) - w / 2, y0 = headY + 2;
    c.fillStyle = hair; c.beginPath(); c.moveTo(x0, y0 + 4); c.quadraticCurveTo(x0 - 1, y0 + headH * 0.5 + hl * 0.5, x0 + 2, y0 + headH * 0.4 + hl); c.lineTo(x0 + w - 2, y0 + headH * 0.4 + hl); c.quadraticCurveTo(x0 + w + 1, y0 + headH * 0.5 + hl * 0.5, x0 + w, y0 + 4); c.closePath(); c.fill();
    c.fillStyle = hairD; c.fillRect(x0 + w - 3, y0 + 6, 2, hl * 0.8); if (st === 'curls' || st === 'curlyMid') for (let i = 0; i < 5; i++) { ell(c, x0 + 1, y0 + 8 + i * hl / 5, 2.5, 3, i % 2 ? hairD : hair); ell(c, x0 + w - 1, y0 + 10 + i * hl / 5, 2.5, 3, i % 2 ? hair : hairD); }
    if (st === 'rapunzel') for (let i = 0; i < 6; i++) rect(c, x0 + w / 2 - 2 + (i % 2) * 2, y0 + headH + i * 7, 4, 5, i % 2 ? hairL : hair);
  };
  if (!back) backHair();
  if (has('cape')) { const cw = shW + 6; c.fillStyle = shade(d.trim || '#a22', -0.1); c.beginPath(); c.moveTo(cx - cw / 2 + leanX, shY + 1); c.lineTo(cx + cw / 2 + leanX, shY + 1); c.lineTo(cx + cw / 2 + 3, foot - 4); c.lineTo(cx - cw / 2 - 3, foot - 4); c.closePath(); c.fill(); }
  if (has('wings') && !side) { for (const s of [-1, 1]) { c.fillStyle = 'rgba(230,220,255,0.85)'; c.beginPath(); c.ellipse(cx + s * (shW / 2 + 6), shY + 8, 7, 11, s * 0.4, 0, Math.PI * 2); c.fill(); } }

  // --- ноги ---
  const legCol = d.skirt === 'short' ? skin : bot, legColD = d.skirt === 'short' ? skinD : botD;
  const drawLeg = (x: number, a: number, k: number, front: boolean) => {
    c.save(); c.translate(x, hipY); c.rotate(-a);
    const th = legH * 0.5, sh = legH * 0.5; // бедро и голень
    limb(c, th, legW, front ? legCol : legColD, front ? shade(legCol, 0.12) : undefined);
    c.translate(0, th); c.rotate(side ? k : 0); const shin = side ? sh : sh - k * 3.2; limb(c, shin, legW - 0.6, front ? legCol : legColD);
    // ботинок
    c.fillStyle = shoe; if (side) { c.beginPath(); c.ellipse(1.6, shin + 0.5, legW * 0.75, 2, 0, 0, Math.PI * 2); c.fill(); } else { c.fillRect(-legW / 2 - 0.5, shin - 1, legW + 1, 3); }
    c.restore();
  };
  if (side) { drawLeg(cx + leanX * 0.2, p.lR, p.kR, false); drawLeg(cx + leanX * 0.2, p.lL, p.kL, true); }
  else if (p.sit) { for (const s of [-1, 1]) { rect(c, cx + s * 3.5 - legW / 2, hipY, legW, legH - 2, legCol); rect(c, cx + s * 3.5 - legW / 2 - 0.5, foot - 3, legW + 1, 3, shoe); } }
  else { const g = waW * 0.24; drawLeg(cx - g, -p.lL * 0.3, p.kL, true); drawLeg(cx + g, p.lR * 0.3, p.kR, true); }

  // --- юбка ---
  if (d.skirt) { const sl = d.skirt === 'long' ? legH - 4 : legH * 0.42; const w0 = (side ? waW - 3 : waW), w1 = w0 + (d.skirt === 'long' ? 9 : 6);
    c.fillStyle = bot; c.beginPath(); c.moveTo(cx - w0 / 2 + leanX * 0.3, hipY - 2); c.lineTo(cx + w0 / 2 + leanX * 0.3, hipY - 2); c.lineTo(cx + w1 / 2, hipY + sl); c.lineTo(cx - w1 / 2, hipY + sl); c.closePath(); c.fill();
    c.fillStyle = botD; c.fillRect(cx + w1 / 2 - 3, hipY + 2, 2, sl - 3); c.fillStyle = shade(bot, 0.15); c.fillRect(cx - w1 / 2 + 2, hipY + 2, 1, sl - 4); if (d.trim) rect(c, cx - w1 / 2, hipY + sl - 1.5, w1, 1.5, d.trim);
  }

  // --- руки (дальняя рука в профиль рисуется до торса) ---
  const sleeve = has('offshoulder') ? top : (d.id === 'alla' || d.id === 'queen') ? skin : top;
  const drawArm = (s: number, a: number, e: number, far: boolean) => {
    c.save(); const sx = side ? cx + leanX * 0.7 + (far ? 2 : -2) : cx + leanX * 0.6 + s * (shW / 2 + armW / 2 - 1.2); c.translate(sx, shY + 2.5);
    c.rotate(side ? -a : -s * a); const up = armLen * 0.52; const sc = far ? shade(sleeve, -0.25) : shade(sleeve, -0.06); limb(c, up, armW, sc, far ? undefined : shade(sleeve, 0.12)); c.fillStyle = shade(sleeve, -0.32); c.fillRect(s > 0 ? -armW / 2 : armW / 2 - 1, 0, 1, up);
    c.translate(0, up); c.rotate(side ? -e : -s * e); limb(c, armLen * 0.5, armW - 0.6, sc); c.fillStyle = shade(sleeve, -0.32); c.fillRect(s > 0 ? -armW / 2 + 0.3 : armW / 2 - 1.3, 0, 1, armLen * 0.45);
    const glove = has('gloves') ? '#16121a' : far ? skinD : skin; ell(c, 0, armLen * 0.5 + 1.2, armW * 0.55, armW * 0.6, glove);
    if (has('bracelets') && !far) { rect(c, -armW / 2, armLen * 0.42, armW, 1.2, '#4ae0c0'); rect(c, -armW / 2, armLen * 0.36, armW, 1, '#f2c230'); }
    c.restore();
  };
  if (side) drawArm(1, p.aR, p.eR, true);
  if (back) { drawArm(-1, p.aL, p.eL, false); drawArm(1, p.aR, p.eR, false); }

  // --- туловище ---
  const tw = side ? shW - 5 : shW, ww = side ? waW - 4 : waW;
  c.save(); c.translate(cx, hipY); c.rotate(p.lean * (side ? 1 : 0.35)); c.translate(-cx, -hipY);
  c.fillStyle = top; c.beginPath(); c.moveTo(cx - tw / 2, shY + 2); c.quadraticCurveTo(cx - tw / 2 - 0.5, shY, cx - tw / 2 + 2, shY); c.lineTo(cx + tw / 2 - 2, shY); c.quadraticCurveTo(cx + tw / 2 + 0.5, shY, cx + tw / 2, shY + 2); c.lineTo(cx + ww / 2, hipY + (d.skirt ? 0 : 2)); c.lineTo(cx - ww / 2, hipY + (d.skirt ? 0 : 2)); c.closePath(); c.fill();
  // объём: свет слева, тень справа и под грудью
  c.fillStyle = topL; c.fillRect(cx - tw / 2 + 1, shY + 2, 1.5, torsoH * 0.6); c.fillStyle = topD; c.beginPath(); c.moveTo(cx + tw / 2 - 2, shY + 1); c.lineTo(cx + tw / 2, shY + 2); c.lineTo(cx + ww / 2, hipY); c.lineTo(cx + ww / 2 - 2.5, hipY); c.closePath(); c.fill();
  if (!d.skirt) { rect(c, cx - ww / 2, hipY - 1, ww, 2.5, has('belt') ? '#2a1a14' : botD); }
  if (has('offshoulder') && !back) { c.fillStyle = skin; c.beginPath(); c.moveTo(cx - tw / 2 + 1, shY + 1); c.quadraticCurveTo(cx, shY + 6, cx + tw / 2 - 1, shY + 1); c.lineTo(cx + tw / 2 - 1, shY - 1); c.lineTo(cx - tw / 2 + 1, shY - 1); c.closePath(); c.fill(); rect(c, cx - tw / 2 + 1, shY + 4, tw - 2, 1, topD); rect(c, cx - 3.5, shY + 2, 1, 6, topD); rect(c, cx + 2.5, shY + 2, 1, 6, topD); rect(c, cx - 2.5, shY + 7, 5, 2.5, '#d8c890'); }
  if (has('coat')) { c.fillStyle = shade(top, -0.08); c.fillRect(cx - tw / 2 - 1, shY + 1, 3, torsoH + legH * 0.55); c.fillRect(cx + tw / 2 - 2, shY + 1, 3, torsoH + legH * 0.55); }
  if (has('jacket') && !back) { rect(c, cx - tw / 2, shY + 1, tw * 0.32, torsoH, d.trim || shade(top, 0.25)); rect(c, cx + tw / 2 - tw * 0.32, shY + 1, tw * 0.32, torsoH, d.trim || shade(top, 0.25)); }
  if (d.trim && !back && !has('jacket')) { rect(c, cx - 1, shY + 1, 2, d.skirt ? 4 : 3, d.trim); }
  if (has('scarf')) { rect(c, cx - tw / 2 + 1, shY - 1, tw - 2, 3, d.trim || '#e84a6f'); if (!back) for (let i = 0; i < 4; i++) rect(c, cx + 1 + (i % 2), shY + 2 + i * 2, 3, 2, i % 2 ? '#2a2a2a' : (d.trim || '#e84a6f')); }
  if (has('bowtie') && !back) { c.fillStyle = '#111'; c.beginPath(); c.moveTo(cx - 3, shY); c.lineTo(cx, shY + 1.4); c.lineTo(cx - 3, shY + 2.8); c.closePath(); c.fill(); c.beginPath(); c.moveTo(cx + 3, shY); c.lineTo(cx, shY + 1.4); c.lineTo(cx + 3, shY + 2.8); c.closePath(); c.fill(); if (has('jacket')) rect(c, cx - 1.5, shY + 3, 3, torsoH - 4, '#f4f0e8'); }
  if (has('tie') && !back) { rect(c, cx - 1, shY + 1, 2, 7, '#a3122a'); }
  if (has('pins') && !back && !side) { ell(c, cx + tw / 2 - 3, shY + 5, 1.2, 1.2, '#fff'); ell(c, cx + tw / 2 - 4, shY + 8, 1.2, 1.2, '#4ae0c0'); ell(c, cx - tw / 2 + 3, shY + 6, 1.2, 1.2, '#f2c230'); }
  if (has('camera') && !back) { rect(c, cx - 3.5, shY + 7, 7, 5, '#222'); ell(c, cx, shY + 9.5, 1.6, 1.6, '#8ac'); c.strokeStyle = '#333'; c.lineWidth = 1; c.beginPath(); c.moveTo(cx - tw / 2 + 2, shY); c.lineTo(cx - 3, shY + 7); c.moveTo(cx + tw / 2 - 2, shY); c.lineTo(cx + 3, shY + 7); c.stroke(); }
  if (has('pearls') && !back) { for (let i = 0; i < 5; i++) ell(c, cx - 4 + i * 2, shY + 2 + Math.sin(i / 4 * Math.PI) * 1.5, 0.8, 0.8, '#f6f0e8'); }
  if (has('fur') && !back) { for (let i = 0; i < 7; i++) ell(c, cx - tw / 2 + i * tw / 6, shY + 2 + (i % 2), 3, 2.6, i % 2 ? '#f4f0ec' : '#e0dcd8'); }
  if (has('necklace') && !back) { c.strokeStyle = '#d8c890'; c.lineWidth = 0.8; c.beginPath(); c.moveTo(cx - 3, shY); c.quadraticCurveTo(cx, shY + 6, cx + 3, shY); c.stroke(); }
  c.restore();
  // ближние руки
  if (side) drawArm(1, p.aL, p.eL, false);
  else if (!back) { drawArm(-1, p.aL, p.eL, false); drawArm(1, p.aR, p.eR, false); }

  // --- шея и голова ---
  rect(c, headCX - 2, headY + headH - 3, 4, 5, skinD);
  c.save(); c.translate(headCX, headY + headH * 0.55); c.rotate(p.tilt); c.translate(-headCX, -(headY + headH * 0.55));
  const hx = headCX - headW / 2;
  if (st !== 'none' || d.id !== 'kukolnik') {
    ell(c, headCX, headY + headH * 0.5, headW / 2, headH / 2, skin); ell(c, headCX + (side ? 2 : 0), headY + headH * 0.62, headW / 2 - 1, headH * 0.36, skin);
    c.fillStyle = skinD; c.fillRect(headCX + headW / 2 - 2, headY + headH * 0.35, 1.5, headH * 0.35); // тень щеки
    if (side) { rect(c, headCX + headW / 2 - 0.5, headY + headH * 0.5, 1.6, 2, skin); }
  }
  if (!back) {
    const ey = headY + Math.round(headH * 0.48), ec = shade(d.eyes, -0.2);
    const eye = (x: number) => { rect(c, x, ey - 1, 2.6, 3.4, '#f6f0e6'); rect(c, x + 0.6, ey - 1, 2, 3.4, ec); rect(c, x + 0.8, ey - 0.6, 0.8, 0.8, '#fff'); rect(c, x - 0.3, ey - 1.6, 3.2, 0.8, shade(d.hair, -0.45)); };
    if (side) eye(headCX + 1.5); else { eye(headCX - 4.2); eye(headCX + 1.6); }
    const by = ey - 3; c.fillStyle = shade(d.hair, -0.4);
    if (!side) { if (d.brows === 'strict') { c.fillRect(headCX - 4.6, by, 3.4, 1); c.fillRect(headCX + 1.4, by, 3.4, 1); } else if (d.brows === 'arch') { c.fillRect(headCX - 4.4, by - 0.4, 3, 0.8); c.fillRect(headCX + 1.6, by - 0.4, 3, 0.8); } else { c.fillRect(headCX - 4, by + 0.2, 2.6, 0.7); c.fillRect(headCX + 1.6, by + 0.2, 2.6, 0.7); } }
    ell(c, headCX - 4 + (side ? 6 : 0), ey + 3.2, 1.6, 0.9, 'rgba(240,120,120,0.35)'); if (!side) ell(c, headCX + 4, ey + 3.2, 1.6, 0.9, 'rgba(240,120,120,0.35)');
    const my = headY + Math.round(headH * 0.78), mx = side ? headCX + 3 : headCX;
    if (p.mouth === 'o') ell(c, mx, my, 1, 1.3, '#5a1a1a'); else rect(c, mx - 1.2, my, p.mouth === 's' ? 3 : 2.4, 0.9, d.lips || shade(skin, -0.38));
    if (has('freckles')) for (const fx of side ? [3, 5] : [-4, -2.5, 2.5, 4]) rect(c, headCX + fx, ey + 2.2, 0.8, 0.8, shade(skin, -0.3));
    if (has('mole')) rect(c, headCX + 3.5, ey + 4, 0.9, 0.9, '#3a1a14');
    if (has('glasses')) { c.strokeStyle = '#1a1a1e'; c.lineWidth = 0.9; if (side) c.strokeRect(headCX + 1, ey - 1.6, 3.4, 3.6); else { c.strokeRect(headCX - 4.8, ey - 1.6, 3.8, 3.8); c.strokeRect(headCX + 1, ey - 1.6, 3.8, 3.8); c.beginPath(); c.moveTo(headCX - 1, ey); c.lineTo(headCX + 1, ey); c.stroke(); } }
    if (has('visor')) rect(c, hx, ey - 2, headW, 3.5, d.trim || '#40e0d0');
    if (has('maskface')) { ell(c, headCX, headY + headH * 0.55, headW / 2, headH * 0.45, '#ece8dc'); rect(c, headCX - 4, ey - 1, 2.6, 2.6, '#111'); rect(c, headCX + 1.4, ey - 1, 2.6, 2.6, '#111'); c.strokeStyle = '#111'; c.lineWidth = 0.9; c.beginPath(); c.arc(headCX, my - 2, 3.2, 0.2, Math.PI - 0.2); c.stroke(); }
    if (has('maskhalf')) { rect(c, hx, ey - 2.5, headW, 5, '#e8c36a'); rect(c, headCX - 3.6, ey - 1, 2, 2, '#111'); rect(c, headCX + 1.6, ey - 1, 2, 2, '#111'); }
  }
  // --- волосы спереди ---
  if (st !== 'none') {
    const topY = headY - 1, w = headW + 2;
    c.fillStyle = hair; c.beginPath(); c.ellipse(headCX + (side ? -1 : 0), headY + headH * 0.36, w / 2, headH * 0.42, 0, Math.PI, 0); c.fill();
    if (back) { c.beginPath(); c.ellipse(headCX, headY + headH * 0.5, w / 2, headH * 0.52, 0, 0, Math.PI * 2); c.fill(); if (hl > 6) { c.beginPath(); c.moveTo(headCX - w / 2, headY + headH * 0.5); c.lineTo(headCX + w / 2, headY + headH * 0.5); c.lineTo(headCX + w / 2 - 1, headY + headH * 0.4 + hl); c.lineTo(headCX - w / 2 + 1, headY + headH * 0.4 + hl); c.closePath(); c.fill(); rect(c, headCX - 0.5, headY + 4, 1, hl, hairD); } }
    else {
      const bangDepth = d.bangs ? headH * 0.38 : headH * 0.2;
      // чёлка/пробор
      c.beginPath(); c.moveTo(headCX - w / 2, headY + headH * 0.42); c.quadraticCurveTo(headCX - w / 4, headY + bangDepth + 2, headCX - 1, headY + bangDepth); c.quadraticCurveTo(headCX + w / 4, headY + bangDepth + 3, headCX + w / 2, headY + headH * 0.45); c.lineTo(headCX + w / 2, headY + headH * 0.2); c.lineTo(headCX - w / 2, headY + headH * 0.2); c.closePath(); c.fill();
      // боковые пряди у лица
      if (hl > 4 && !side) { const sl = Math.min(hl, headH * 1.1); c.fillRect(headCX - w / 2 - 0.5, headY + headH * 0.3, 2.6, sl); c.fillStyle = hairD; c.fillRect(headCX + w / 2 - 2, headY + headH * 0.3, 2.6, sl); }
      if (side && hl > 4) { c.fillStyle = hair; c.fillRect(headCX - w / 2 - 1, headY + headH * 0.3, 4, Math.min(hl, headH)); }
      // блик
      c.fillStyle = hairL; c.beginPath(); c.ellipse(headCX - w / 6, headY + headH * 0.14, w / 5, 1.2, -0.2, 0, Math.PI * 2); c.fill();
    }
    const curly = st === 'curlyMid' || st === 'curlyShort' || st === 'curls' || st === 'fluffy';
    if (curly) { const n = st === 'curlyShort' ? 6 : 8; for (let i = 0; i < n; i++) { const a = Math.PI * (1.05 + i / (n - 1) * 0.9); const r = w / 2 + (st === 'fluffy' ? 2.5 : 1.5); ell(c, headCX + Math.cos(a) * r, headY + headH * 0.42 + Math.sin(a) * headH * 0.5, st === 'fluffy' ? 3.4 : 2.8, st === 'fluffy' ? 3.4 : 2.8, i % 2 ? hairL : hair); } }
    if (st === 'twin') for (const s of side ? [-1] : [-1, 1]) { c.fillStyle = hair; c.beginPath(); c.ellipse(headCX + s * (w / 2 + 2), headY + headH * 0.75, 2.6, 7, s * 0.2, 0, Math.PI * 2); c.fill(); rect(c, headCX + s * (w / 2 + 2) - 1.5, headY + headH * 0.32, 3, 2, '#e84a6f'); }
    if (st === 'ponytail') { c.fillStyle = hair; if (side || back) { c.beginPath(); c.ellipse(headCX - (side ? w / 2 : 0), headY + headH * 0.9, 2.8, 9, 0.25, 0, Math.PI * 2); c.fill(); } else ell(c, headCX + w / 2 + 1, headY + headH * 0.5, 2, 5, hairD); }
    if (st === 'bun') ell(c, headCX, topY - 1, 4, 3.4, hair);
    if (st === 'rapunzel' && !back) { for (let i = 0; i < 8; i++) ell(c, headCX + w / 2 + 2 + (i % 2), headY + headH + i * 5, 2.6, 3, i % 2 ? hairD : hairL); }
  }
  if (has('earrings') && !back && !side) { ell(c, headCX - headW / 2 - 0.4, headY + headH * 0.68, 0.9, 1.4, '#f4d060'); ell(c, headCX + headW / 2 + 0.4, headY + headH * 0.68, 0.9, 1.4, '#f4d060'); }
  if (has('hat')) { rect(c, headCX - headW / 2 - 4, headY + 1, headW + 8, 2, '#24242a'); rect(c, headCX - headW / 2 + 1, headY - 5, headW - 2, 6, '#34343c'); rect(c, headCX - headW / 2 + 1, headY - 1, headW - 2, 1.4, '#7a1a22'); }
  if (has('crown')) { c.fillStyle = '#f4d060'; c.beginPath(); c.moveTo(headCX - 5, headY + 1); for (let i = 0; i <= 4; i++) { c.lineTo(headCX - 5 + i * 2.5, headY - (i % 2 ? 1 : 4)); } c.lineTo(headCX + 5, headY + 1); c.closePath(); c.fill(); ell(c, headCX, headY - 1, 1, 1, '#c41e3a'); }
  if (has('headphones')) { rect(c, headCX - headW / 2, headY - 2, headW, 1.5, '#222'); rect(c, headCX - headW / 2 - 2, headY + headH * 0.35, 3, 5, '#222'); rect(c, headCX + headW / 2 - 1, headY + headH * 0.35, 3, 5, '#222'); }
  if (has('monocle') && !back && !side) { c.strokeStyle = '#d8c890'; c.lineWidth = 0.9; c.beginPath(); c.arc(headCX + 2.9, headY + Math.round(headH * 0.48) + 0.4, 2.4, 0, Math.PI * 2); c.stroke(); rect(c, headCX + 4.8, headY + Math.round(headH * 0.48) + 2, 0.7, 6, '#d8c890'); }
  if (has('sunglasses') && !back) { rect(c, headCX - 5, headY + 1, 10, 2, '#111'); }
  c.restore();
  c.restore();
}

/** Твёрдые края (пиксельная чёткость) и тёмная обводка, не пересекающая границы кадров. */
function finishSheet(c: Ctx, w: number, h: number) {
  const img = c.getImageData(0, 0, w, h), a = img.data;
  for (let i = 3; i < a.length; i += 4) a[i] = a[i] > 110 ? 255 : 0;
  const src = new Uint8ClampedArray(a); const op = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && src[(y * w + x) * 4 + 3] > 0;
  const o = [26, 18, 22];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (op(x, y)) continue; const fx = x % PW, fy = y % PH; if (fx === 0 || fx === PW - 1 || fy === 0 || fy === PH - 1) continue;
    if (op(x - 1, y) || op(x + 1, y) || op(x, y - 1) || op(x, y + 1)) { const i = (y * w + x) * 4; a[i] = o[0]; a[i + 1] = o[1]; a[i + 2] = o[2]; a[i + 3] = 255; }
  }
  c.putImageData(img, 0, 0); void OUT;
}

const sheets = new Map<string, HTMLCanvasElement>();
export function charSheet(id: string): HTMLCanvasElement {
  let cv = sheets.get(id); if (cv) return cv;
  const d = CHARS[id]; if (!d) throw new Error('Нет персонажа: ' + id);
  cv = document.createElement('canvas'); cv.width = PW * FRAMES.length; cv.height = PH * DIRS.length;
  const c = cv.getContext('2d', { willReadFrequently: true })!; c.imageSmoothingEnabled = false;
  DIRS.forEach((dir, r) => FRAMES.forEach((f, i) => {
    const special = i >= 6; drawFrame(c, i * PW, r * PH, d, f, special && dir === 'b' && f !== 'sit' && f !== 'arms' && f !== 'dance1' && f !== 'dance2' ? 'f' : dir);
  }));
  finishSheet(c, cv.width, cv.height);
  if (id === 'kukolnik' || id === 'narrator') { c.globalCompositeOperation = 'source-in'; c.fillStyle = '#0a0808'; c.fillRect(0, 0, cv.width, cv.height); }
  sheets.set(id, cv); return cv;
}
export { shade };
