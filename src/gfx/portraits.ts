// Портреты для диалогов: векторный «риг» лица с выражениями, рисуется на canvas и кешируется.
import { CHARS, CharDef } from '../data/chars';
import { shade } from './sprites';

const cache = new Map<string, string>();
export type Expr = 'neutral' | 'smile' | 'sad' | 'scared' | 'angry' | 'worried' | 'smirk' | 'surprised' | 'laugh' | 'blank';

// Нарисованные портреты (public/portraits): у костюмных вариантов берём портрет основного персонажа.
const ART = new Set(['artemiy', 'varya', 'ruben', 'matvey', 'alla', 'dana', 'vasilisa', 'nina', 'angelina', 'liza', 'erika', 'olya', 'polina', 'anya']);
const ALIAS: Record<string, string> = { queen: 'alla', girl: 'varya' };
export function portrait(id: string, expr: Expr = 'neutral', heal = false): string {
  const base = ALIAS[id] || id.split('_')[0]; if (ART.has(base)) return 'portraits/' + base + (heal && (base === 'varya' || base === 'matvey') && ['smile', 'laugh', 'surprised', 'blank'].includes(expr) ? '_heal' : '') + '.jpg' + (id.endsWith('_noir') ? '#noir' : '');
  const key = id + '|' + expr; const hit = cache.get(key); if (hit) return hit;
  const d: CharDef = CHARS[id]; const W = 200, H = 240;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d')!;
  if (!d) return '';
  if (id === 'kukolnik' || id === 'narrator') { // силуэт / книга
    c.fillStyle = '#1a1210'; c.fillRect(0, 0, W, H);
    if (id === 'kukolnik') { c.fillStyle = '#050404'; c.beginPath(); c.ellipse(100, 100, 44, 54, 0, 0, 7); c.fill(); c.fillRect(30, 170, 140, 80); c.beginPath(); c.ellipse(100, 190, 80, 40, 0, 0, 7); c.fill(); c.fillRect(60, 40, 80, 14); c.fillRect(74, 4, 52, 44); c.strokeStyle = '#d8b56a55'; c.lineWidth = 1; for (const x of [60, 100, 140]) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + (x - 100) * 0.3, 60); c.stroke(); } }
    else { c.fillStyle = '#e8d8a8'; c.fillRect(30, 60, 140, 120); c.fillStyle = '#b89858'; c.fillRect(97, 60, 6, 120); c.fillStyle = '#6a5a3a'; for (let i = 0; i < 7; i++) { c.fillRect(42, 78 + i * 13, 46, 3); c.fillRect(112, 78 + i * 13, 46, 3); } }
    const u = cv.toDataURL(); cache.set(key, u); return u;
  }
  const acc = d.acc || []; const hair = d.hair, hairD = shade(hair, -0.3), hairL = shade(hair, 0.25), skinD = shade(d.skin, -0.18), skinL = shade(d.skin, 0.12);
  const cx = 100, fy = 112, fw = d.build === 'big' ? 52 : d.build === 'strong' ? 50 : 46, fh = 58;
  const st = d.style; const curly = st.startsWith('curly');
  const blob = (x: number, y: number, rx: number, ry: number, col: string) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, 7); c.fill(); };
  // волосы сзади
  c.fillStyle = hair;
  if (st === 'long' || st === 'longStyled' || st === 'glam' || st === 'rapunzel') { const w = st === 'glam' ? 84 : st === 'longStyled' ? 72 : 66; c.beginPath(); c.moveTo(cx - w, 240); c.quadraticCurveTo(cx - w - 8, 80, cx, 44); c.quadraticCurveTo(cx + w + 8, 80, cx + w, 240); c.fill(); if (st === 'glam') for (let i = 0; i < 5; i++) { blob(cx - 78 + (i % 2) * 8, 110 + i * 28, 16, 18, i % 2 ? hair : hairD); blob(cx + 78 - (i % 2) * 8, 110 + i * 28, 16, 18, i % 2 ? hairD : hair); } }
  if (st === 'curls') { c.beginPath(); c.moveTo(cx - 70, 200); c.quadraticCurveTo(cx - 80, 70, cx, 46); c.quadraticCurveTo(cx + 80, 70, cx + 70, 200); c.fill(); for (let i = 0; i < 4; i++) for (const sd of [-1, 1]) { const x = cx + sd * (64 - (i % 2) * 6), y = 120 + i * 24; c.fillStyle = i % 2 ? hairD : hair; c.beginPath(); c.ellipse(x, y, 15, 15, 0, 0, 7); c.fill(); c.strokeStyle = hairL; c.lineWidth = 2; c.beginPath(); c.arc(x - sd * 3, y - 2, 8, Math.PI * (sd > 0 ? 1.1 : 1.6), Math.PI * (sd > 0 ? 1.7 : 2.2)); c.stroke(); } c.fillStyle = hair; }
  if (st === 'bob' || st === 'bobLong') { const b = st === 'bob' ? 150 : 172; c.beginPath(); c.moveTo(cx - 62, b); c.quadraticCurveTo(cx - 70, 60, cx, 46); c.quadraticCurveTo(cx + 70, 60, cx + 62, b); c.fill(); }
  if (st === 'curlyMid') for (let i = 0; i < 16; i++) { const a = Math.PI * (0.95 + i / 15 * 1.1); blob(cx + Math.cos(a) * 58, 104 + Math.sin(a) * 56 + (i < 3 || i > 12 ? 30 : 0), 17, 17, i % 2 ? hair : hairD); }
  if (st === 'fluffy') for (let i = 0; i < 14; i++) { const a = Math.PI * (0.9 + i / 13 * 1.2); blob(cx + Math.cos(a) * 58, 100 + Math.sin(a) * 52, 19, 19, i % 2 ? hair : hairL); }
  if (st === 'twin') { for (const s of [-1, 1]) { blob(cx + s * 70, 120, 15, 44, hair); blob(cx + s * 70, 150, 12, 26, hairD); c.fillStyle = '#e84a6f'; c.fillRect(cx + s * 70 - 9, 82, 18, 7); } }
  if (st === 'ponytail') { blob(cx + 52, 70, 18, 16, hair); c.fillStyle = hairD; c.beginPath(); c.moveTo(cx + 58, 70); c.quadraticCurveTo(cx + 92, 110, cx + 66, 190); c.quadraticCurveTo(cx + 54, 130, cx + 44, 80); c.fill(); }
  if (st === 'bun') blob(cx, 40, 22, 18, hair);
  if (acc.includes('wings')) { blob(30, 200, 34, 50, 'rgba(230,220,255,0.7)'); blob(170, 200, 34, 50, 'rgba(230,220,255,0.7)'); }
  // плечи и шея
  const sw = d.build === 'strong' ? 96 : d.build === 'big' ? 100 : d.build === 'thin' ? 70 : 80;
  c.fillStyle = d.top; c.beginPath(); c.moveTo(cx - sw, 240); c.quadraticCurveTo(cx - sw, 186, cx - 26, 180); c.lineTo(cx + 26, 180); c.quadraticCurveTo(cx + sw, 186, cx + sw, 240); c.fill();
  c.fillStyle = shade(d.top, -0.25); c.fillRect(cx - sw, 232, sw * 2, 8);
  if (acc.includes('cape')) { c.fillStyle = d.trim || '#a22'; c.fillRect(cx - sw, 196, 30, 44); c.fillRect(cx + sw - 30, 196, 30, 44); }
  c.fillStyle = skinD; c.fillRect(cx - 13, 156, 26, 32); c.fillStyle = d.skin; c.beginPath(); c.moveTo(cx - 20, 184); c.lineTo(cx, 200); c.lineTo(cx + 20, 184); c.lineTo(cx + 13, 176); c.lineTo(cx - 13, 176); c.fill();
  if (acc.includes('offshoulder')) { c.fillStyle = d.skin; c.beginPath(); c.moveTo(cx - sw + 6, 214); c.quadraticCurveTo(cx - sw + 4, 186, cx - 26, 180); c.lineTo(cx + 26, 180); c.quadraticCurveTo(cx + sw - 4, 186, cx + sw - 6, 214); c.closePath(); c.fill(); c.fillStyle = d.top; c.fillRect(cx - sw, 214, sw * 2, 26); for (const sd of [-1, 1]) { c.beginPath(); c.moveTo(cx + sd * sw, 240); c.lineTo(cx + sd * sw, 202); c.quadraticCurveTo(cx + sd * (sw - 10), 200, cx + sd * (sw - 24), 214); c.lineTo(cx + sd * (sw - 24), 240); c.fill(); } c.fillStyle = shade(d.top, -0.22); c.fillRect(cx - sw + 24, 214, sw * 2 - 48, 3); c.strokeStyle = skinD; c.lineWidth = 1.5; c.beginPath(); c.moveTo(cx - 30, 192); c.quadraticCurveTo(cx - 14, 198, cx - 4, 194); c.moveTo(cx + 30, 192); c.quadraticCurveTo(cx + 14, 198, cx + 4, 194); c.stroke(); }
  else if (d.trim) { c.strokeStyle = d.trim; c.lineWidth = 5; c.beginPath(); c.moveTo(cx - 24, 182); c.lineTo(cx, 204); c.lineTo(cx + 24, 182); c.stroke(); }
  if (acc.includes('pearls')) { c.fillStyle = '#f6f0e8'; for (let i = 0; i < 11; i++) { const a = Math.PI * (0.15 + i * 0.07); c.beginPath(); c.arc(cx + Math.cos(a) * 30 * (i < 6 ? -1 : -1) * Math.cos(a) * 0 + (i - 5) * 5, 196 + Math.sin(i / 10 * Math.PI) * 10, 3, 0, 7); c.fill(); } }
  if (acc.includes('scarf')) { c.fillStyle = d.trim || '#e84a6f'; c.beginPath(); c.ellipse(cx, 186, 40, 14, 0, 0, 7); c.fill(); c.fillRect(cx + 10, 186, 16, 50); }
  if (acc.includes('camera')) { c.fillStyle = '#222'; c.fillRect(cx - 22, 208, 44, 30); blob(cx, 224, 11, 11, '#557'); blob(cx, 224, 6, 6, '#9bd'); c.strokeStyle = '#333'; c.lineWidth = 4; c.beginPath(); c.moveTo(cx - 30, 184); c.lineTo(cx - 20, 210); c.moveTo(cx + 30, 184); c.lineTo(cx + 20, 210); c.stroke(); }
  if (acc.includes('pins')) { blob(cx + 44, 214, 5, 5, '#fff'); blob(cx + 54, 226, 4, 4, '#4ae0c0'); blob(cx + 40, 228, 3, 3, '#e84a6f'); }
  // уши и лицо
  blob(cx - fw + 2, fy + 4, 7, 11, skinD); blob(cx + fw - 2, fy + 4, 7, 11, skinD);
  c.fillStyle = d.skin; c.beginPath(); c.moveTo(cx - fw, fy - 20); c.quadraticCurveTo(cx - fw, fy - fh, cx, fy - fh); c.quadraticCurveTo(cx + fw, fy - fh, cx + fw, fy - 20); c.quadraticCurveTo(cx + fw, fy + 34, cx + 16, fy + fh - 4); c.quadraticCurveTo(cx, fy + fh + 4, cx - 16, fy + fh - 4); c.quadraticCurveTo(cx - fw, fy + 34, cx - fw, fy - 20); c.fill();
  blob(cx - 26, fy + 22, 10, 6, 'rgba(230,110,100,0.16)'); blob(cx + 26, fy + 22, 10, 6, 'rgba(230,110,100,0.16)');
  if (acc.includes('earrings')) { blob(cx - fw, fy + 22, 4, 8, '#f4d060'); blob(cx + fw, fy + 22, 4, 8, '#f4d060'); }
  if (acc.includes('pearls')) { blob(cx - fw, fy + 18, 4, 4, '#f6f0e8'); blob(cx + fw, fy + 18, 4, 4, '#f6f0e8'); blob(cx - fw, fy + 26, 5, 5, '#f6f0e8'); blob(cx + fw, fy + 26, 5, 5, '#f6f0e8'); }
  // глаза
  const eyeY = fy + 2, ex = 21; let open = 1, browL = 0, browTilt = 0, mouth = 'flat', pup = 1;
  switch (expr) {
    case 'smile': mouth = 'smile'; open = 0.85; break; case 'laugh': mouth = 'laugh'; open = 0.25; browL = -2; break;
    case 'sad': mouth = 'sad'; browTilt = -5; open = 0.8; break; case 'scared': mouth = 'o'; browTilt = -6; open = 1.3; pup = 0.7; browL = -4; break;
    case 'angry': mouth = 'sad'; browTilt = 7; open = 0.8; browL = 3; break; case 'worried': mouth = 'wavy'; browTilt = -5; break;
    case 'smirk': mouth = 'smirk'; open = 0.75; browTilt = 2; break; case 'surprised': mouth = 'o'; open = 1.25; browL = -5; break; case 'blank': pup = 0.8; break;
  }
  if (d.brows === 'strict') browTilt += 4;
  if (!acc.includes('maskface')) {
    for (const s of [-1, 1]) {
      const x = cx + s * ex;
      if (d.shadow) blob(x, eyeY - 4, 13, 9, d.shadow + '99');
      c.save(); c.beginPath(); c.ellipse(x, eyeY, 11, 8 * Math.min(open, 1.3), 0, 0, 7); c.clip();
      c.fillStyle = '#f6f1ea'; c.fillRect(x - 12, eyeY - 12, 24, 24);
      blob(x + (expr === 'smirk' ? 2 : 0), eyeY + 0.5, 7 * pup, 7 * pup, d.eyes); blob(x + (expr === 'smirk' ? 2 : 0), eyeY + 0.5, 3.4 * pup, 3.4 * pup, '#120a08'); blob(x - 2.5, eyeY - 3, 2, 2, '#fff');
      c.fillStyle = skinD; c.fillRect(x - 12, eyeY - 12, 24, 5 + (1 - Math.min(open, 1)) * 6); c.restore();
      c.strokeStyle = '#1a1010'; c.lineWidth = d.lips || d.shadow ? 3 : 2.2; c.beginPath(); c.ellipse(x, eyeY, 11, 8 * Math.min(open, 1.3), 0, Math.PI * 1.05, Math.PI * 1.95); c.stroke();
      if (d.lips || d.shadow) { c.beginPath(); c.moveTo(x + s * 10, eyeY - 3); c.lineTo(x + s * 15, eyeY - 7); c.stroke(); }
      if (expr === 'laugh') { c.strokeStyle = '#1a1010'; c.lineWidth = 2.5; c.beginPath(); c.arc(x, eyeY + 4, 9, Math.PI * 1.15, Math.PI * 1.85); c.stroke(); }
      // брови
      c.strokeStyle = shade(hair === '#f0d98a' || hair === '#e8e0f0' || hair === '#e8e8f0' ? '#a88a4a' : hair, -0.25); c.lineWidth = d.brows === 'strict' ? 4.5 : 3.2; c.lineCap = 'round';
      c.beginPath(); const by = eyeY - 16 + browL; c.moveTo(x - s * 10, by + browTilt * 0.5 + (d.brows === 'arch' ? 1 : 0)); c.quadraticCurveTo(x, by - (d.brows === 'arch' ? 5 : 2), x + s * 11, by - browTilt * 0.5 + (d.brows === 'arch' ? 2 : 0)); c.stroke();
    }
    // нос, рот
    c.strokeStyle = skinD; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 1, fy + 10); c.quadraticCurveTo(cx - 5, fy + 22, cx + 2, fy + 23); c.stroke();
    const my = fy + 37; c.strokeStyle = d.lips || '#7a3a34'; c.fillStyle = d.lips || '#7a3a34'; c.lineWidth = d.lips ? 4 : 2.6; c.lineCap = 'round'; c.beginPath();
    if (mouth === 'flat') { c.moveTo(cx - 9, my); c.quadraticCurveTo(cx, my + 2, cx + 9, my); c.stroke(); }
    if (mouth === 'smile') { c.moveTo(cx - 12, my - 2); c.quadraticCurveTo(cx, my + 8, cx + 12, my - 2); c.stroke(); }
    if (mouth === 'smirk') { c.moveTo(cx - 9, my + 1); c.quadraticCurveTo(cx + 2, my + 4, cx + 13, my - 4); c.stroke(); }
    if (mouth === 'sad') { c.moveTo(cx - 10, my + 3); c.quadraticCurveTo(cx, my - 4, cx + 10, my + 3); c.stroke(); }
    if (mouth === 'wavy') { c.moveTo(cx - 10, my); c.quadraticCurveTo(cx - 5, my - 4, cx, my); c.quadraticCurveTo(cx + 5, my + 4, cx + 10, my); c.stroke(); }
    if (mouth === 'o') { c.fillStyle = '#4a1a1a'; c.ellipse(cx, my + 1, 6, 8, 0, 0, 7); c.fill(); c.stroke(); }
    if (mouth === 'laugh') { c.fillStyle = '#4a1a1a'; c.moveTo(cx - 14, my - 4); c.quadraticCurveTo(cx, my + 18, cx + 14, my - 4); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#fff'; c.fillRect(cx - 8, my - 3, 16, 4); }
    if (acc.includes('freckles')) { c.fillStyle = shade(d.skin, -0.3); for (const [x, y] of [[-30, 14], [-24, 18], [-18, 13], [-26, 10], [30, 14], [24, 18], [18, 13], [26, 10], [-4, 16], [5, 15]]) { c.beginPath(); c.arc(cx + x, fy + y, 1.6, 0, 7); c.fill(); } }
    if (acc.includes('mole')) blob(cx + 24, fy + 30, 2.2, 2.2, '#3a1a14');
  } else { // маска Хозяина
    c.fillStyle = '#e8e4d8'; c.beginPath(); c.ellipse(cx, fy, fw - 2, fh - 2, 0, 0, 7); c.fill(); blob(cx - 20, fy - 4, 9, 12, '#111'); blob(cx + 20, fy - 4, 9, 12, '#111');
    c.strokeStyle = '#111'; c.lineWidth = 4; c.beginPath(); c.moveTo(cx - 24, fy + 26); c.quadraticCurveTo(cx, fy + 48, cx + 24, fy + 26); c.stroke(); for (let i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(cx + i * 9, fy + 30); c.lineTo(cx + i * 9, fy + 40); c.stroke(); }
  }
  if (acc.includes('glasses')) { c.strokeStyle = '#222'; c.lineWidth = 3; for (const s of [-1, 1]) { c.beginPath(); c.ellipse(cx + s * ex, eyeY, 15, 13, 0, 0, 7); c.stroke(); c.fillStyle = 'rgba(190,225,255,0.18)'; c.fill(); } c.beginPath(); c.moveTo(cx - 6, eyeY); c.lineTo(cx + 6, eyeY); c.stroke(); }
  if (acc.includes('visor')) { c.fillStyle = (d.trim || '#40e0d0') + 'cc'; c.fillRect(cx - fw - 2, eyeY - 11, fw * 2 + 4, 20); c.fillStyle = '#ffffff55'; c.fillRect(cx - fw + 4, eyeY - 8, 30, 3); }
  if (acc.includes('maskhalf')) { c.fillStyle = '#e8c36a'; c.beginPath(); c.ellipse(cx, eyeY - 2, fw - 2, 18, 0, 0, 7); c.fill(); blob(cx - ex, eyeY, 8, 5, '#120a08'); blob(cx + ex, eyeY, 8, 5, '#120a08'); }
  // волосы спереди
  c.fillStyle = hair;
  if (st !== 'none') {
    const top = fy - fh - 8;
    c.beginPath(); c.moveTo(cx - fw - 3, fy - 8); c.quadraticCurveTo(cx - fw - 6, top, cx, top - 2); c.quadraticCurveTo(cx + fw + 6, top, cx + fw + 3, fy - 8);
    if (d.bangs) { c.quadraticCurveTo(cx + fw - 6, fy - 18, cx + fw - 10, fy - 14); c.lineTo(cx - fw + 10, fy - 14); c.quadraticCurveTo(cx - fw + 6, fy - 18, cx - fw - 3, fy - 8); }
    else if (st === 'short' || st === 'bun' || st === 'ponytail') { c.quadraticCurveTo(cx + fw - 4, fy - 34, cx + 10, fy - 40); c.quadraticCurveTo(cx - 20, fy - 44, cx - fw - 3, fy - 8); }
    else { c.quadraticCurveTo(cx + fw - 2, fy - 30, cx - 8, fy - 44); c.quadraticCurveTo(cx - fw + 4, fy - 30, cx - fw - 3, fy - 8 + (st === 'bob' || st === 'bobLong' ? 30 : 10)); }
    c.fill();
    if (d.bangs) { c.strokeStyle = hairD; c.lineWidth = 1.5; for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(cx + i * 11, fy - 40); c.lineTo(cx + i * 12, fy - 15); c.stroke(); } }
    if (st === 'bob' || st === 'bobLong' || st === 'long' || st === 'longStyled' || st === 'glam' || st === 'rapunzel' || st === 'curls') { c.fillStyle = hair; const b = st === 'bob' ? 152 : st === 'bobLong' ? 172 : st === 'curls' ? 150 : 236; c.fillRect(cx - fw - 8, fy - 10, 10, b - fy + 10); c.fillRect(cx + fw - 2, fy - 10, 10, b - fy + 10); if (st === 'bob' || st === 'bobLong') { blob(cx - fw - 2, b - 4, 9, 8, hair); blob(cx + fw + 2, b - 4, 9, 8, hair); } }
    if (curly) for (let i = 0; i < 9; i++) blob(cx - 48 + i * 12, fy - fh + 2 + (i % 2) * 6 + Math.abs(i - 4) * 3, 12, 12, i % 2 ? hair : hairL);
    if (st === 'fluffy') for (let i = 0; i < 8; i++) blob(cx - 46 + i * 13, fy - fh + 4 + (i % 2) * 5 + Math.abs(i - 3.5) * 3.5, 13, 12, i % 2 ? hairL : hair);
    c.strokeStyle = hairL; c.lineWidth = 3; c.beginPath(); c.arc(cx - 8, fy - 30, 30, Math.PI * 1.15, Math.PI * 1.5); c.stroke();
  }
  if (acc.includes('hat')) { c.fillStyle = '#2a2a2e'; c.beginPath(); c.ellipse(cx, fy - 36, 80, 12, 0, 0, 7); c.fill(); c.fillStyle = '#3a3a40'; c.beginPath(); c.moveTo(cx - 46, fy - 38); c.quadraticCurveTo(cx - 44, fy - 86, cx, fy - 84); c.quadraticCurveTo(cx + 44, fy - 86, cx + 46, fy - 38); c.fill(); c.fillStyle = '#111'; c.fillRect(cx - 46, fy - 48, 92, 9); }
  if (acc.includes('crown')) { c.fillStyle = '#f4d060'; c.beginPath(); c.moveTo(cx - 38, fy - 52); c.lineTo(cx - 42, fy - 92); c.lineTo(cx - 20, fy - 70); c.lineTo(cx, fy - 98); c.lineTo(cx + 20, fy - 70); c.lineTo(cx + 42, fy - 92); c.lineTo(cx + 38, fy - 52); c.fill(); blob(cx, fy - 62, 6, 6, '#d02040'); }
  if (acc.includes('headphones')) { c.strokeStyle = '#222'; c.lineWidth = 8; c.beginPath(); c.arc(cx, fy - 8, fw + 8, Math.PI * 1.08, Math.PI * 1.92); c.stroke(); c.fillStyle = '#222'; c.fillRect(cx - fw - 14, fy - 12, 16, 34); c.fillRect(cx + fw - 2, fy - 12, 16, 34); }
  const u = cv.toDataURL(); cache.set(key, u); return u;
}
