// Глава Эрики, THE CITY NEVER SLEEPS. Нуар 1940-х: монохром, дождь, джаз.
// Механики: опрос свидетелей, поиск улик (одна видна только в маске Трагедии), доска расследования ,
// игрок сам связывает показание с противоречащей ему уликой; финальный выбор принадлежит Эрике.
// Визуально: город-декорация нуара. Каждое здание улицы нарисовано отдельно (закусочная, джаз-клуб, кинотеатр,
// ломбард, особняк, вокзал, отель, доходные дома с пожарными лестницами), мокрая брусчатка, конусы фонарей, пар из люков.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { E, ECUE } from '../data/dialogue/erika';
import { board } from '../ui/minigames';
import { finishChapter, rainy, fog, actOf } from './common';
import { cafeTable, bookshelf, armchair, statue, wardrobe, screen3D, coatStand, barCounter } from '../world/decor3d';
import { vanity, rug, costumeRack, piano } from '../world/decor';
import { tween, camMove, camBack, warmRig, warmOn, warmOff } from './warm';

// ---------- кино: тёплый свет в нежные моменты, медленная камера, паузы (всё мгновенно в G.fast) ----------
/** Первая подсказка про маски в главе (один раз). */
function maskHint(G: any, key: string, text: string) { if (G.f['mhint_' + key]) return; G.f['mhint_' + key] = 1; G.toast(text, '◐'); }
// метки из диалога: пауза перед «Я не знаю», и цвет, который впервые проступает в сером городе
ECUE.silence = (G: any) => { G.sfx('heart'); void camMove(G, { dist: 7.6, pitch: 0.34, yOff: 1.8 }, 2.4); };
ECUE.honest = (G: any) => { void warmOn(G, { grade: { sat: 0.6, bloom: 0.75, vig: 0.45 }, int: 14, dur: 2.6 }); };

const NOIR = { sat: 0.04, tint: [1.0, 0.98, 0.94], vig: 0.6, contrast: 1.12, bright: 1.15, bloom: 0.3 };
const EVID = ['e_photo', 'e_contract', 'e_letter', 'e_ticket', 'e_matches'];

// ---------------- пиксельные помощники ----------------
type DC = CanvasRenderingContext2D;
const px = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
const disc = (c: DC, cx: number, cy: number, r: number, col: string) => { c.fillStyle = col; for (let y = Math.floor(-r); y <= r; y++) { const hw = Math.floor(Math.sqrt(Math.max(0, r * r - y * y))); c.fillRect(Math.round(cx - hw), Math.round(cy + y), hw * 2 + 1, 1); } };
const hsh = (i: number, s = 0) => { const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
function tile(key: string, size: number, draw: (c: DC, s: number) => void, h = size) { const t = canvasTex(size, h, (c) => draw(c, size), 'nt_' + key); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
function ground(R: Builder, t: THREE.Texture, x: number, z: number, w: number, d: number, unit = 2, y = 0, col = 0xffffff) {
  const tt = t.clone(); tt.wrapS = tt.wrapT = THREE.RepeatWrapping; tt.repeat.set(w / unit, d / unit); tt.needsUpdate = true;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshLambertMaterial({ map: tt, color: col })); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; R.room.group.add(m); return m;
}
function plane(R: Builder, t: THREE.Texture, x: number, y: number, z: number, w: number, h: number, o: { basic?: boolean; ry?: number; rx?: number; col?: number; opacity?: number; rep?: [number, number]; add?: boolean } = {}) {
  let map = t; if (o.rep) { map = t.clone(); map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.set(o.rep[0], o.rep[1]); map.needsUpdate = true; }
  const mat = o.basic || o.add ? new THREE.MeshBasicMaterial({ map, transparent: true, alphaTest: o.add ? 0 : 0.05, color: o.col ?? 0xffffff, opacity: o.opacity ?? 1, depthWrite: !o.add, blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending }) : new THREE.MeshLambertMaterial({ map, transparent: true, alphaTest: 0.05, color: o.col ?? 0xffffff });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); if (o.ry) m.rotation.y = o.ry; if (o.rx) m.rotation.x = o.rx; m.receiveShadow = !o.basic && !o.add; R.room.group.add(m); return m;
}
function pbox(R: Builder, x: number, z: number, w: number, d: number, h: number, front: THREE.Texture, o: { side?: number; top?: number; y?: number; solid?: boolean; ry?: number; glow?: boolean } = {}) {
  const side = L(o.side ?? 0x4a4a4a); const top = L(o.top ?? o.side ?? 0x4a4a4a);
  const fm = o.glow ? new THREE.MeshBasicMaterial({ map: front, color: 0xb8b8b8 }) : new THREE.MeshLambertMaterial({ map: front });
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, top, side, fm, side]); m.position.set(x, (o.y || 0) + h / 2, z); if (o.ry) m.rotation.y = o.ry; m.castShadow = true; m.receiveShadow = true; R.room.group.add(m);
  if (o.solid !== false) R.collider(x - w / 2, z - d / 2, x + w / 2, z + d / 2); return m;
}
/** Текст с обводкой. */
function otext(c: DC, s: string, x: number, y: number, size: number, col: string, ol: string, align: CanvasTextAlign = 'center') { for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) ptext(c, s, x + dx, y + dy, { size, col: ol, align }); ptext(c, s, x, y, { size, col, align }); }
/** Вывеска в 2× разрешении: кириллица читается (С не превращается в О). */
const sign = (t: string, w = 72) => canvasTex(w * 2, 28, (c) => { px(c, 0, 0, w * 2, 28, '#111'); c.strokeStyle = '#ddd'; c.lineWidth = 2; c.strokeRect(1, 1, w * 2 - 2, 26); ptext(c, t, w, 6, { size: 16, col: '#f4f4f4', align: 'center' }); }, 'nsign2' + t);

// ---------------- нуар-свет и окна ----------------
/** Контровой ореол за героиней + слабый передний свет: силуэт не теряется в монохроме. */
function noirRim(R: Builder, G: any, int = 4) {
  const halo = canvasTex(32, 48, (c) => { const g = c.createRadialGradient(16, 22, 1, 16, 22, 16); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(0.5, 'rgba(255,255,255,.3)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 32, 48); }, 'nhalo');
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.4), new THREE.MeshBasicMaterial({ map: halo, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending })); m.renderOrder = -1; R.room.group.add(m);
  const l = R.light(0, 3, 0, 0xffffff, int, 6);
  R.onUpdate(() => { const p = G.player; if (!p) return; m.position.set(p.x, 1.25, p.z - 0.3); l.position.set(p.x + 0.8, 3.2, p.z + 1.8); });
}
const rainTex = () => tile('rainstreak', 16, (c) => { c.clearRect(0, 0, 16, 32); for (let i = 0; i < 7; i++) { const x = Math.floor(hsh(i, 3) * 16), y = Math.floor(hsh(i, 4) * 32), l = 3 + Math.floor(hsh(i, 5) * 8); px(c, x, y, 1, l, 'rgba(230,230,240,.7)'); px(c, x, y + l, 1, 1, '#fff'); } }, 32);
/** Окно с жалюзи: ночной город за стеклом, стекающий дождь, полосы света от жалюзи на полу. */
function noirWindow(R: Builder, x: number, o: { shadow?: boolean; w?: number; h?: number; wall?: 'w' | 'e'; at?: number } = {}) {
  const w = o.w || 2.2, h = o.h || 2.9, y = 3.1;
  const t = canvasTex(32, 42, (c) => { px(c, 0, 0, 32, 42, '#1a1a1a'); px(c, 2, 2, 28, 38, '#3a3a40'); for (let k = 0; k < 5; k++) { const bx = 3 + k * 6, bh = 12 + Math.floor(hsh(k, 9) * 14); px(c, bx, 40 - bh, 5, bh, '#202024'); for (let yy = 40 - bh + 2; yy < 39; yy += 3) if (hsh(k * 31 + yy, 2) > 0.6) px(c, bx + 1 + (yy % 3), yy, 1, 1, '#d8d4c0'); } for (let yy = 3; yy < 22; yy += 2) { px(c, 2, yy, 28, 1, '#d8d8d8'); px(c, 2, yy + 1, 28, 1, '#5a5a5a'); } px(c, 15, 2, 2, 38, '#1a1a1a'); px(c, 0, 39, 32, 3, '#2a2a2a'); px(c, 4, 21, 1, 8, '#9a9a9a'); }, 'nwin');
  const deco: any = { y, w, h, glow: true, color: 0x9c9c9c }; if (o.wall) { deco.wall = o.wall; deco.at = o.at ?? 0; } else deco.x = x;
  const m = R.decal(t, deco);
  const rt = rainTex().clone(); rt.wrapS = rt.wrapT = THREE.RepeatWrapping; rt.repeat.set(w / 1.2, h / 1.4); rt.needsUpdate = true;
  const rain = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.92, h * 0.9), new THREE.MeshBasicMaterial({ map: rt, transparent: true, opacity: 0.45, depthWrite: false })); rain.position.copy(m.position); rain.rotation.copy(m.rotation); rain.translateZ(0.02); R.room.group.add(rain);
  R.onUpdate((dt) => { rt.offset.y += dt * 0.6; });
  if (!o.wall) {
    const stripes = canvasTex(16, 32, (c) => { c.clearRect(0, 0, 16, 32); for (let yy = 0; yy < 32; yy += 4) px(c, 0, yy, 16, 2, 'rgba(255,255,255,1)'); }, 'nstripes');
    const s = plane(R, stripes, x + 1.1, 0.03, -R.d / 2 + 2.8, w * 1.2, 3.6, { add: true, rx: -Math.PI / 2, opacity: 0.12 }); s.rotation.z = -0.25;
    spotC(R, x, 4.2, -R.d / 2 + 0.8, x + 1.6, -R.d / 2 + 3.4, 0xe8e8ff, 26, { angle: 0.35, cone: 0.05, pen: 0.3, shadow: !!o.shadow });
  }
  return m;
}
/** R.spot с исправленным видимым конусом: в движке конус после lookAt разворачивается от цели (вверх), здесь возвращаем его вниз. */
function spotC(R: Builder, x: number, y: number, z: number, tx: number, tz: number, col: number, int: number, o: any = {}) { const l = R.spot(x, y, z, tx, tz, col, int, o); return l; }
/** Общий интерьер нуара. */
function interior(R: Builder, G: any, wall = 'wallpaper', floor = 'parquet', amb = 2.2) {
  R.room.group.userData.bg = 0x050505; fog(R, 0x050505, 18, 40); R.floor(floor); R.walls(wall, { h: 7.5, trim: 'darkwood' }); R.ambient(0x505050, amb, 0xd8d8d8); R.particles('dust', { count: 60, top: 5, color: 0xdddddd }); noirRim(R, G);
}
/** Картина в раме (серые пейзажи и портреты для особняка, конторы). */
const painting = (k: number) => canvasTex(24, 18, (c) => { px(c, 0, 0, 24, 18, '#2a2418'); px(c, 1, 1, 22, 16, '#8a7a50'); px(c, 2, 2, 20, 14, '#5a5a5a'); if (k % 3 === 0) { for (let x = 2; x < 22; x++) px(c, x, 9 + Math.round(Math.sin(x * 0.6) * 2), 1, 7, '#3a3a3a'); disc(c, 16, 6, 2, '#cfcfcf'); } else if (k % 3 === 1) { disc(c, 12, 7, 3, '#b8b0a0'); px(c, 8, 10, 8, 6, '#2a2a2a'); } else { px(c, 2, 11, 20, 5, '#2e2e2e'); px(c, 7, 6, 3, 6, '#cfcfcf'); px(c, 13, 4, 3, 8, '#9a9a9a'); } }, 'npaint' + k);
/** Фонарь-столб: чугунный столб, светящийся плафон и видимый конус света в дождь. */
function lampPost(R: Builder, x: number, z: number, o: { int?: number; shadow?: boolean } = {}) {
  const iron = new THREE.MeshLambertMaterial({ map: tex('metal', '#3a3a3a') });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 4.4, 8), iron); pole.position.set(x, 2.2, z); pole.castShadow = true; R.room.group.add(pole);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.5, 8), iron); base.position.set(x, 0.25, z); R.room.group.add(base);
  const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.18, 0.55, 6), new THREE.MeshBasicMaterial({ color: 0xfff6e0 })); cage.position.set(x, 4.55, z); R.room.group.add(cage);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.3, 6), iron); cap.position.set(x, 4.95, z); R.room.group.add(cap);
  spotC(R, x, 4.4, z, x + 0.5, z + 1.5, 0xfff4e0, o.int ?? 34, { angle: 0.55, cone: 0.04, pen: 0.45, shadow: !!o.shadow, dist: 12 }); R.collider(x - 0.25, z - 0.25, x + 0.25, z + 0.25);
}
/** Лужа: тёмное зеркало с бликом-отражением фонаря. */
const puddleTex = (k: number) => canvasTex(32, 20, (c) => { c.clearRect(0, 0, 32, 20); for (let i = 0; i < 6; i++) disc(c, 8 + hsh(i, k) * 16, 6 + hsh(i, k + 1) * 8, 4 + hsh(i, k + 2) * 3, '#3a3a3e'); for (let i = 0; i < 6; i++) disc(c, 8 + hsh(i, k) * 16, 6 + hsh(i, k + 1) * 8, 2.5 + hsh(i, k + 2) * 2, '#16161a'); px(c, 14, 3, 2, 14, 'rgba(220,220,220,.55)'); px(c, 15, 5, 1, 10, '#e8e8e8'); }, 'npuddle' + k);
/** Пар из люка: клубы поднимаются и тают. */
function steam(R: Builder, x: number, z: number, n = 6, s = 1) {
  const puff = canvasTex(24, 24, (c) => { const g = c.createRadialGradient(12, 12, 1, 12, 12, 12); g.addColorStop(0, 'rgba(235,235,235,.8)'); g.addColorStop(1, 'rgba(235,235,235,0)'); c.fillStyle = g; c.fillRect(0, 0, 24, 24); }, 'npuff');
  const ps: THREE.Mesh[] = []; for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6 * s, 1.6 * s), new THREE.MeshBasicMaterial({ map: puff, transparent: true, depthWrite: false, opacity: 0.4 })); R.room.group.add(m); ps.push(m); }
  R.onUpdate((dt, t) => { ps.forEach((m, i) => { const k = ((t * 0.35 + i / n) % 1); m.position.set(x + Math.sin(t + i) * 0.3 * k, 0.3 + k * 3.2 * s, z); m.scale.setScalar(0.6 + k * 1.4); (m.material as THREE.MeshBasicMaterial).opacity = 0.42 * (1 - k); }); });
}

// ---------------- фасады улицы: каждое здание нарисовано отдельно (16 px на единицу, видна высота 0..7) ----------------
const FH = 7, PP = 16;
const brickWall = (c: DC, w: number, h: number, base = '#5a5652', mort = '#2e2c2a') => { px(c, 0, 0, w, h, mort); for (let y = 0; y < h; y += 4) for (let x = -((y / 4) % 2) * 4; x < w; x += 8) px(c, x + 1, y + 1, 7, 3, hsh(x * 3 + y, 7) > 0.8 ? '#6a6662' : hsh(x + y * 5, 2) > 0.7 ? '#4e4a46' : base); };
const stoneWall = (c: DC, w: number, h: number, base = '#8a8884') => { px(c, 0, 0, w, h, '#4a4846'); for (let y = 0; y < h; y += 10) for (let x = -((y / 10) % 2) * 9; x < w; x += 18) { px(c, x + 1, y + 1, 17, 9, hsh(x + y * 3, 5) > 0.6 ? '#94928e' : base); px(c, x + 1, y + 1, 17, 1, '#a8a6a2'); } };
/** Окно второго этажа (верх кадра). */
const upWin = (c: DC, x: number, y: number, lit: boolean, w = 14, h = 18) => { px(c, x - 1, y - 1, w + 2, h + 3, '#1e1e1e'); px(c, x, y, w, h, lit ? '#c8c4b0' : '#2a2a30'); if (lit) { px(c, x, y, w, 5, '#e8e4d0'); px(c, x + 2, y + 8, 4, h - 8, '#6a665a'); } px(c, x + w / 2 - 1, y, 1, h, '#1e1e1e'); px(c, x, y + h / 2, w, 1, '#1e1e1e'); px(c, x - 2, y + h + 1, w + 4, 2, '#8a8a8a'); };
/** Витрина с товаром. */
const shopWin = (c: DC, x: number, y: number, w: number, h: number, goods: (c: DC, x: number, y: number, w: number, h: number) => void, lit = true) => { px(c, x - 2, y - 2, w + 4, h + 4, '#141414'); px(c, x, y, w, h, lit ? '#a8a49a' : '#3a3a3e'); px(c, x, y, w, 3, lit ? '#d8d4c8' : '#4a4a4e'); goods(c, x, y, w, h); px(c, x + 3, y + 2, 2, h - 4, 'rgba(255,255,255,.25)'); px(c, x - 2, y + h + 2, w + 4, 6, '#2a2a2a'); };
function building(R: Builder, x0: number, x1: number, o: { tex?: string; tint?: string; h?: number; draw: (c: DC, w: number, h: number) => void; key: string; depth?: number }) {
  const w = x1 - x0, xc = (x0 + x1) / 2, H = o.h || 12, D = o.depth || 1.2;
  R.box(xc, -5.15 - D / 2, w, D, H, { tex: o.tex || 'brick', tint: o.tint || '#7a7672', solid: false });
  const t = canvasTex(Math.round(w * PP), FH * PP, (c, cw, ch) => o.draw(c, cw, ch), 'nfac_' + o.key);
  plane(R, t, xc, FH / 2, -5.13, w, FH);
}
const awning = (R: Builder, x: number, w: number, y: number, stripes = true, depth = 1.4) => { const t = tile('awn' + stripes, 16, (c) => { for (let i = 0; i < 4; i++) px(c, i * 4, 0, 4, 16, stripes ? (i % 2 ? '#d8d8d8' : '#3a3a3a') : '#2a2a2a'); px(c, 0, 14, 16, 2, '#111'); }); const tt = t.clone(); tt.repeat.set(w / 0.8, 1); tt.needsUpdate = true; const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, depth), new THREE.MeshLambertMaterial({ map: tt })); m.position.set(x, y, -5.1 + depth / 2 - 0.05); m.rotation.x = 0.35; m.castShadow = true; R.room.group.add(m); const val = canvasTex(32, 6, (c) => { for (let i = 0; i < 8; i++) { c.fillStyle = stripes ? (i % 2 ? '#d8d8d8' : '#3a3a3a') : '#2a2a2a'; c.beginPath(); c.moveTo(i * 4, 0); c.lineTo(i * 4 + 4, 0); c.lineTo(i * 4 + 4, 3); c.arc(i * 4 + 2, 3, 2, 0, Math.PI); c.fill(); } }, 'nval' + stripes); plane(R, val, x, y - Math.sin(0.35) * depth / 2 - 0.12, -5.1 + depth * Math.cos(0.35) - 0.02, w, 0.36, { rep: [w / 1.6, 1] }); };

function streetFacades(R: Builder, G: any) {
  // отель «Метрополь»: козырёк над входом, вращающаяся дверь, швейцар
  building(R, -40, -24, { key: 'hotel', tex: 'stone', tint: '#9a9890', draw: (c, w, h) => { stoneWall(c, w, h); for (let x = 10; x < w - 10; x += 26) if (Math.abs(x - 176) > 30) upWin(c, x, 4, hsh(x, 1) > 0.4, 16, 22); const dx = 176; px(c, dx - 26, 50, 52, 62, '#121212'); px(c, dx - 24, 52, 48, 60, '#6a6a68'); for (let k = 0; k < 4; k++) { px(c, dx - 22 + k * 12, 54, 10, 56, k % 2 ? '#8a8a86' : '#a8a8a2'); px(c, dx - 22 + k * 12, 54, 1, 56, '#1a1a1a'); } px(c, dx - 1, 52, 2, 60, '#d8c890'); px(c, dx - 40, 46, 80, 4, '#d8d0b0'); for (let x = 20; x < w - 20; x += 40) if (Math.abs(x - dx) > 50) shopWin(c, x, 64, 24, 30, (c, x, y, w, h) => { px(c, x + 4, y + h - 10, w - 8, 10, '#5a3a2a'); disc(c, x + w / 2, y + 10, 4, '#f0e8c8'); }); otext(c, 'ОТЕЛЬ', dx, 30, 16, '#f0f0f0', '#111'); } });
  { const can = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.3, 3.2), new THREE.MeshLambertMaterial({ map: tex('velvet', '#5a5a5a') })); can.position.set(-29, 3.4, -3.6); can.castShadow = true; R.room.group.add(can); for (const sx of [-2.4, 2.4]) R.box(-29 + sx, -2.2, 0.12, 0.12, 3.4, { tex: 'gold', solid: false }); R.collider(-31.5, -2.4, -31.3, -2); R.collider(-26.7, -2.4, -26.5, -2);
    const cs = canvasTex(80, 10, (c) => { px(c, 0, 0, 80, 10, '#111'); otext(c, '«МЕТРОПОЛЬ»', 40, 0, 9, '#f4f4f4', '#000'); }, 'nmetro'); plane(R, cs, -29, 3.4, -1.98, 5, 0.6, { basic: true, col: 0xd8d8d8 }); R.actor('guard', -27.4, -4.3, { id: 'doorman', dir: 'f' }); R.sprite('suitcase', -30.6, -4.2, { scale: 1.1 }); R.sprite('suitcase', -30.9, -3.9, { scale: 0.9 }); }
  // доходный дом с конторой «Сыск и Ко» (дверь на x=-18), пожарная лестница
  building(R, -24, -14, { key: 'office', draw: (c, w, h) => { brickWall(c, w, h); for (const x of [14, 46, 126, 140]) upWin(c, x, 6, hsh(x, 3) > 0.5); px(c, 68, 4, 44, 24, '#141414'); px(c, 70, 6, 40, 20, '#9a988e'); otext(c, 'СЫСК И КО', 90, 8, 10, '#1a1a1a', '#d8d8d8'); ptext(c, 'частный детектив', 90, 19, { size: 6, col: '#2a2a2a', align: 'center' }); for (const x of [10, 124]) shopWin(c, x, 62, 30, 34, (c, x, y, w, h) => { for (let k = 0; k < 4; k++) px(c, x + 3 + k * 7, y + h - 14 + (k % 2) * 4, 5, 14 - (k % 2) * 4, '#4a4a4a'); px(c, x, y + 6, w, 1, '#3a3a3a'); }, false); px(c, 0, 108, w, 4, '#3a3a3a'); } });
  { const iron = new THREE.MeshLambertMaterial({ map: tex('metal', '#2a2a2a') }); const g = new THREE.Group(); const plat = new THREE.Mesh(new THREE.BoxGeometry(5, 0.08, 1.1), iron); plat.position.set(0, 5.4, 0.55); g.add(plat); const rail = new THREE.Mesh(new THREE.BoxGeometry(5, 0.06, 0.06), iron); rail.position.set(0, 6.4, 1.1); g.add(rail); for (let i = 0; i <= 10; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1, 0.04), iron); b.position.set(-2.5 + i * 0.5, 5.9, 1.1); g.add(b); } for (const sx of [-0.4, 0.4]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 0.05), iron); l.position.set(1.8 + sx, 3.9, 1.0); g.add(l); } for (let i = 0; i < 9; i++) { const r = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.04, 0.04), iron); r.position.set(1.8, 2.7 + i * 0.3, 1.0); g.add(r); } g.position.set(-20.5, 0, -5.15); R.room.group.add(g); }
  R.decal(sign('СЫСК', 30), { x: -18, y: 3.95, z: -5.0, w: 2.0, h: 0.45, glow: true, color: 0xcccccc });
  // закусочная «Луна»: неон, стойка, табуреты и кабинки за стеклом
  building(R, -14, -10.4, { key: 'diner', tint: '#8a8a88', tex: 'white', draw: (c, w, h) => { px(c, 0, 0, w, h, '#a8a8a4'); for (let y = 0; y < h; y += 6) px(c, 0, y, w, 1, '#8a8a86'); upWin(c, 10, 6, true, 16, 18); upWin(c, 34, 6, false, 16, 18); px(c, 2, 46, w - 4, 52, '#0e0e0e'); px(c, 4, 48, w - 8, 48, '#b8b4a8'); px(c, 4, 48, w - 8, 10, '#d8d4c8'); for (let k = 0; k < 3; k++) { px(c, 6 + k * 18, 70, 14, 4, '#3a3a3a'); px(c, 6 + k * 18, 62, 3, 12, '#2a2a2a'); px(c, 17 + k * 18, 62, 3, 12, '#2a2a2a'); } px(c, 4, 76, w - 8, 3, '#6a6a6a'); for (let k = 0; k < 5; k++) { px(c, 8 + k * 11, 80, 5, 3, '#1a1a1a'); px(c, 10 + k * 11, 83, 1, 10, '#3a3a3a'); } px(c, 12, 60, 4, 3, '#efefef'); px(c, 40, 59, 3, 4, '#efefef'); px(c, 2, 98, w - 4, 10, '#2a2a2a'); } });
  { const ns = canvasTex(64, 14, (c) => { px(c, 0, 0, 64, 14, '#0a0a0a'); c.strokeStyle = '#f0f0f0'; c.strokeRect(1.5, 1.5, 61, 11); otext(c, 'ЗАКУСОЧНАЯ', 32, 2, 9, '#ffffff', '#6a6a6a'); }, 'ndinern'); plane(R, ns, -12.2, 3.25, -5.05, 3.4, 0.75, { basic: true, col: 0xe8e8e8 }); R.light(-12.2, 2.4, -3.6, 0xf0f0e0, 6, 6, { flicker: 0.06 }); awning(R, -12.2, 3.6, 2.9, true, 1.0); }
  // переулок (щель между домами): мокрый асфальт уходит в туман, в конце фонарь и силуэты небоскрёбов
  ground(R, tex('asphalt'), -9.7, -15, 1.6, 20, 2, 0.01); for (const sx of [-10.45, -8.95]) R.box(sx, -15, 0.3, 20, 9, { tex: 'brick', tint: '#5a5652', solid: false }); R.collider(-10.4, -7, -9, -5.0);
  plane(R, canvasTex(24, 40, (c) => { px(c, 0, 0, 24, 40, '#1a1a1c'); for (let k = 0; k < 4; k++) { const bh = 14 + hsh(k, 2) * 20; px(c, k * 6, 40 - bh, 5, bh, '#2a2a30'); for (let y = 40 - bh + 2; y < 39; y += 3) if (hsh(k * 9 + y, 3) > 0.55) px(c, k * 6 + 2, y, 1, 1, '#c8c8b8'); } disc(c, 12, 10, 3, '#f4f4f0'); }, 'nalleyend'), -9.7, 2.2, -24.8, 1.6, 5.4, { basic: true, col: 0x9a9a9a }); R.sprite(canvasTex(10, 12, (c) => { px(c, 1, 2, 8, 10, '#2a2a2a'); px(c, 0, 0, 10, 3, '#3a3a3a'); px(c, 2, 4, 1, 7, '#5a5a5a'); }, 'ntrash'), -9.7, -8, { scale: 1.1 });
  // джаз-клуб «Синяя нота»: чёрный лак, козырёк, вертикальная неоновая вывеска, афиши певицы
  building(R, -9, -2.9, { key: 'club', tex: 'black', tint: '#2a2a2a', draw: (c, w, h) => { px(c, 0, 0, w, h, '#1a1a1a'); for (let x = 0; x < w; x += 12) px(c, x, 0, 1, h, '#2e2e2e'); upWin(c, 8, 6, true, 18, 20); upWin(c, 66, 6, false, 18, 20); for (const x of [6, 74]) { px(c, x, 52, 18, 28, '#d8c890'); px(c, x + 1, 53, 16, 26, '#e8e8e8'); px(c, x + 5, 56, 8, 9, '#1a1a1a'); px(c, x + 3, 65, 12, 10, '#3a3a3a'); ptext(c, 'МЭЙ', x + 9, 74, { size: 5, col: '#111', align: 'center' }); } px(c, 0, 106, w, 6, '#0a0a0a'); } });
  { const blade = canvasTex(16, 64, (c) => { px(c, 0, 0, 16, 64, '#0a0a0a'); c.strokeStyle = '#ffffff'; c.strokeRect(1.5, 1.5, 13, 61); const s = 'СИНЯЯ'; for (let i = 0; i < s.length; i++) ptext(c, s[i], 8, 4 + i * 11, { size: 10, col: '#ffffff', align: 'center' }); disc(c, 8, 60, 2, '#fff'); }, 'nblade'); for (const ry of [Math.PI / 2, -Math.PI / 2]) plane(R, blade, -3.6, 4.6, -4.45, 0.9, 3.6, { basic: true, ry }); R.box(-3.6, -4.45, 0.08, 1.2, 0.08, { tex: 'metal', y: 6.4, solid: false, cast: false }); awning(R, -7, 3, 3.75, false, 1.6); R.light(-5.6, 3.4, -3.4, 0xffffff, 7, 7, { flicker: 0.08 });
    R.decal(sign('СИНЯЯ НОТА', 72), { x: -7, y: 4.35, z: -5.0, w: 3.2, h: 0.62, glow: true, color: 0xe0e0e0 }); }
  // киностудия «Серебряный экран»: козырёк-маркиза с лампочками, касса, витрины афиш
  building(R, -2.9, 8.2, { key: 'cinema', tex: 'stone', tint: '#8a8884', draw: (c, w, h) => { stoneWall(c, w, h, '#7a7874'); for (let x = 8; x < w - 10; x += 22) upWin(c, x, 4, hsh(x, 6) > 0.5, 12, 16); const pcase = (x: number, k: number) => { px(c, x, 48, 24, 36, '#d8d0a8'); px(c, x + 2, 50, 20, 32, '#e8e8e4'); px(c, x + 6, 54, 12, 12, k ? '#2a2a2a' : '#5a5a5a'); disc(c, x + 12, 58, 3, '#d8d8d8'); ptext(c, k ? 'ДРАМА' : 'ПРЕМЬЕРА', x + 12, 70, { size: 5, col: '#111', align: 'center' }); }; pcase(12, 0); pcase(102, 1); pcase(140, 0); px(c, 40, 70, 16, 26, '#141414'); px(c, 42, 72, 12, 12, '#8a8a7a'); ptext(c, 'КАССА', 48, 86, { size: 5, col: '#d8d8d8', align: 'center' }); px(c, 0, 106, w, 6, '#3a3a3a'); } });
  { const mw = 6.6, mt = canvasTex(Math.round(mw * 24), 30, (c, w) => { px(c, 0, 0, w, 30, '#111'); px(c, 2, 4, w - 4, 22, '#e8e8e8'); for (let x = 3; x < w - 2; x += 5) { px(c, x, 1, 2, 2, '#ffffff'); px(c, x, 27, 2, 2, '#ffffff'); } otext(c, 'СЕРЕБРЯНЫЙ ЭКРАН', w / 2, 6, 16, '#111', '#e8e8e8'); }, 'nmarq2');
    pbox(R, 4, -4.4, mw, 1.6, 1.0, mt, { side: 0x2a2a2a, top: 0x3a3a3a, y: 3.6, solid: false, glow: true }); const bl = canvasTex(4, 4, (c) => { px(c, 0, 0, 4, 4, '#fff'); }, 'nbulb'); for (let x = -3.2; x <= 3.2; x += 0.4) plane(R, bl, 4 + x, 3.55, -3.55, 0.09, 0.09, { basic: true }); R.light(4, 3.0, -2.8, 0xffffff, 8, 7, { flicker: 0.25 }); }
  // ломбард: решётка на окне, три шара
  building(R, 8.2, 10.6, { key: 'pawn', draw: (c, w, h) => { brickWall(c, w, h, '#4e4a46'); upWin(c, 12, 6, false); shopWin(c, 6, 48, w - 12, 40, (c, x, y, w, hh) => { px(c, x + 4, y + 18, 8, 8, '#d8d8d8'); disc(c, x + 20, y + 24, 4, '#9a9a9a'); px(c, x + 6, y + 30, 18, 4, '#5a5a5a'); for (let k = 0; k < w; k += 4) px(c, x + k, y, 1, hh, '#0a0a0a'); px(c, x, y + 12, w, 1, '#0a0a0a'); px(c, x, y + 26, w, 1, '#0a0a0a'); }); otext(c, 'ЛОМБАРД', w / 2, 34, 8, '#e8e8e8', '#111'); } });
  { const gm = new THREE.MeshLambertMaterial({ map: tex('gold') }); for (const [dx, dy] of [[-0.25, 0], [0.25, 0], [0, -0.4]]) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), gm); b.position.set(9.4 + dx, 4.6 + dy, -4.6); R.room.group.add(b); } R.box(9.4, -4.85, 0.06, 0.6, 0.06, { tex: 'metal', y: 4.9, solid: false, cast: false }); }
  // особняк Вейса: рустованный камень, колонны у двери, медная табличка, ступени
  building(R, 10.6, 16.6, { key: 'weiss', tex: 'stone', tint: '#aaa8a0', draw: (c, w, h) => { stoneWall(c, w, h, '#9a9890'); for (const x of [8, 70]) { px(c, x, 30, 18, 40, '#141414'); px(c, x + 1, 31, 16, 38, '#4a4a50'); c.fillStyle = '#4a4a50'; c.beginPath(); c.arc(x + 9, 31, 8, Math.PI, 0); c.fill(); for (let k = 0; k < 4; k++) px(c, x + 2 + k * 4, 31, 1, 38, '#1a1a1a'); px(c, x - 2, 70, 22, 3, '#c8c8c0'); } px(c, 36, 8, 24, 10, '#c8b878'); ptext(c, 'ВЕЙС', 48, 9, { size: 7, col: '#2a2010', align: 'center' }); } });
  { const col = new THREE.MeshLambertMaterial({ map: tex('white', '#d8d8d0') }); for (const sx of [-1.55, 1.55]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 3.8, 10), col); p.position.set(13 + sx, 1.9, -4.85); p.castShadow = true; R.room.group.add(p); } R.box(13, -4.85, 3.8, 0.5, 0.3, { tex: 'stone', tint: '#c8c8c0', y: 3.8, solid: false }); R.box(13, -4.7, 3.2, 0.7, 0.14, { tex: 'stone', tint: '#a8a8a0', solid: false }); R.decal(sign('ВЕЙС', 30), { x: 13, y: 4.35, z: -4.55, w: 1.8, h: 0.42, glow: true, color: 0xb8b8b8 }); }
  // вокзал: большие арочные окна, часы над входом
  building(R, 16.6, 27, { key: 'station', tex: 'stone', tint: '#9a9890', h: 14, draw: (c, w, h) => { stoneWall(c, w, h); for (const x of [10, 112, 140]) { px(c, x, 22, 22, 70, '#141414'); px(c, x + 2, 24, 18, 66, '#6a6a68'); c.fillStyle = '#141414'; c.beginPath(); c.arc(x + 11, 24, 11, Math.PI, 0); c.fill(); c.fillStyle = '#6a6a68'; c.beginPath(); c.arc(x + 11, 24, 9, Math.PI, 0); c.fill(); for (let y = 30; y < 90; y += 10) px(c, x + 2, y, 18, 1, '#141414'); px(c, x + 10, 16, 2, 74, '#141414'); for (let k = 0; k < 4; k++) if (hsh(x + k, 2) > 0.4) px(c, x + 4 + k * 4, 50 + k * 8, 3, 6, '#d8d4c0'); } otext(c, 'ВОКЗАЛ', 62, 4, 16, '#f0f0f0', '#111'); } });
  { const clk = canvasTex(32, 32, (c) => { disc(c, 16, 16, 15.5, '#111'); disc(c, 16, 16, 13.5, '#e8e8e0'); for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; px(c, 16 + Math.cos(a) * 11 - 1, 16 + Math.sin(a) * 11 - 1, 2, 2, '#111'); } c.strokeStyle = '#111'; c.lineWidth = 2; c.beginPath(); c.moveTo(16, 16); c.lineTo(16, 5); c.moveTo(16, 16); c.lineTo(22, 19); c.stroke(); }, 'nclock'); plane(R, clk, 20.5, 5.4, -5.05, 1.5, 1.5, { basic: true, col: 0xc8c8c8 }); R.light(20.5, 3.6, -3.4, 0xf0f0ff, 6, 7); }
  // магазины справа: шляпы, ателье
  building(R, 27, 40, { key: 'shops', draw: (c, w, h) => { brickWall(c, w, h, '#625e5a'); for (let x = 10; x < w; x += 30) upWin(c, x, 6, hsh(x, 9) > 0.5); shopWin(c, 12, 50, 70, 40, (c, x, y, w, hh) => { for (let k = 0; k < 4; k++) { px(c, x + 6 + k * 16, y + 22, 2, hh - 22, '#3a3a3a'); px(c, x + 2 + k * 16, y + 16, 10, 6, '#1a1a1a'); px(c, x + k * 16, y + 21, 14, 2, '#1a1a1a'); } }); otext(c, 'ШЛЯПЫ · ПЕРЧАТКИ', 47, 34, 8, '#e0e0e0', '#111'); shopWin(c, 116, 50, 76, 40, (c, x, y, w, hh) => { for (let k = 0; k < 3; k++) { disc(c, x + 14 + k * 24, y + 10, 4, '#cfcfcf'); px(c, x + 8 + k * 24, y + 15, 12, 22, k % 2 ? '#2a2a2a' : '#6a6a6a'); } }); otext(c, 'АТЕЛЬЕ', 154, 34, 8, '#e0e0e0', '#111'); } });
  awning(R, 30, 5, 3.6, true); awning(R, 37.4, 5.2, 3.6, false);
  // дальше по обе стороны: доходные дома с лавками (город не кончается)
  for (let k = 0; k < 6; k++) for (const side of [-1, 1]) { const x0 = side < 0 ? -40 - (k + 1) * 9 : 40 + k * 9; building(R, x0, x0 + 9, { key: 'gen' + (k % 3), tint: ['#6a6662', '#7a7672', '#5a5652'][k % 3], draw: (c, w, h) => { brickWall(c, w, h, ['#5a5652', '#625e5a', '#4e4a46'][k % 3]); for (let x = 12; x < w - 12; x += 32) upWin(c, x, 6, hsh(x + k, 4) > 0.5); shopWin(c, 14, 54, 50, 36, (c, x, y, w, hh) => { for (let i = 0; i < 5; i++) px(c, x + 4 + i * 9, y + hh - 12, 6, 12, '#4a4a4a'); }, k % 2 === 0); px(c, 90, 56, 26, 52, '#141414'); px(c, 92, 58, 22, 50, '#3a3a3a'); } }); }
}
/** Автомобиль конца 40-х: покатый кузов, крылья, хром, фары. */
function car(R: Builder, x: number, z: number, flip = 1) {
  const g = new THREE.Group(); const paint = new THREE.MeshLambertMaterial({ map: tile('carpaint', 16, (c) => { px(c, 0, 0, 16, 16, '#1e1e20'); px(c, 0, 3, 16, 1, '#5a5a5e'); px(c, 0, 4, 16, 1, '#3a3a3e'); }) }); const chrome = new THREE.MeshLambertMaterial({ color: 0xd8d8d8, emissive: 0x222222 }); const blk = L(0x0a0a0a);
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.8, 1.8), paint); body.position.y = 0.75; g.add(body);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.75, 1.6), new THREE.MeshLambertMaterial({ map: canvasTex(48, 15, (c) => { px(c, 0, 0, 48, 15, '#1e1e20'); px(c, 4, 2, 18, 11, '#7a7a80'); px(c, 26, 2, 18, 11, '#7a7a80'); px(c, 6, 3, 3, 9, '#b8b8c0'); px(c, 28, 3, 3, 9, '#b8b8c0'); }, 'ncarcab') })); cab.position.set(-0.2 * flip, 1.5, 0); g.add(cab);
  for (const sx of [-1.45, 1.45]) { const f = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 1.86, 12, 1, false, 0, Math.PI), paint); f.rotation.x = Math.PI / 2; f.rotation.y = Math.PI / 2; f.position.set(sx, 0.62, 0); g.add(f); const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.7, 12), blk); wh.rotation.x = Math.PI / 2; wh.position.set(sx, 0.42, 0); g.add(wh); const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.74, 8), chrome); hub.rotation.x = Math.PI / 2; hub.position.set(sx, 0.42, 0); g.add(hub); }
  for (const sx of [-2.35, 2.35]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 1.9), chrome); b.position.set(sx, 0.45, 0); g.add(b); }
  for (const sz of [-0.6, 0.6]) { const hl = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xf4f4e8 })); hl.position.set(2.3 * flip, 0.95, sz); g.add(hl); }
  g.position.set(x, 0, z); R.room.group.add(g); g.traverse((o: any) => { if (o.isMesh) o.castShadow = true; }); R.collider(x - 2.4, z - 0.95, x + 2.4, z + 0.95);
  plane(R, canvasTex(16, 8, (c) => { c.clearRect(0, 0, 16, 8); px(c, 2, 0, 3, 8, 'rgba(255,255,240,.5)'); px(c, 11, 0, 3, 8, 'rgba(255,255,240,.5)'); }, 'nheadref'), x + 3.2 * flip, 0.02, z, 2, 2.4, { add: true, rx: -Math.PI / 2, opacity: 0.3 }).rotation.z = Math.PI / 2;
}

// ---------------- 1. контора ----------------
const office: RoomDef = {
  card: (G) => G.f.intro_eri ? null : [[actOf(G), 'act'], ['THE CITY NEVER SLEEPS', 'big'], ['нуар · 1940-е · дождь, который всё помнит', 'sm']],
  name: 'Контора «Сыск и Ко»', chapter: 'Акт II · Эрика', w: 16, d: 10, music: 'noir', amb: 'rain', step: 'wood', grade: NOIR, camDist: 18,
  build(R, G) {
    const f = G.f; interior(R, G, 'plaster', 'parquet'); noirWindow(R, -5.0); noirWindow(R, 2.6, { shadow: true }); R.light(4, 2.6, -2, 0xfff0d0, 8, 8, { flicker: 0.04 });
    rug(R, 0.6, 1.2, 5.4, 3.4, { col: '#3a3a3a', border: '#9a9a9a' }); warmRig(R, 0.4, -3.6, { count: 70 });
    R.table(4, -2.4, 3, 1.4, { tex: 'darkwood' }); R.sprite('typewriter', 3.4, -2.4, { y: 1.15 }); R.sprite('lamp', 5, -2.6, { y: 1.1, scale: 0.45 });
    R.sprite(canvasTex(10, 14, (c) => { px(c, 3, 0, 4, 3, '#2a2a2a'); px(c, 2, 3, 6, 10, '#5a5a5a'); px(c, 3, 4, 1, 8, '#9a9a9a'); px(c, 2, 8, 6, 3, '#d8d8d8'); px(c, 1, 13, 8, 1, '#1a1a1a'); }, 'nbottle'), 4.9, -2.2, { y: 1.08, scale: 0.6 }); R.sprite(canvasTex(10, 6, (c) => { px(c, 0, 2, 10, 4, '#1a1a1a'); px(c, 1, 0, 8, 3, '#3a3a3a'); px(c, 7, 0, 3, 2, '#d8d8d8'); }, 'nphone'), 2.8, -2.0, { y: 1.08, scale: 0.8 });
    R.box(4, -1.1, 0.8, 0.7, 0.5, { tex: 'darkwood', tint: '#5a5a5a', y: 0.0 }); R.box(4, -0.78, 0.8, 0.12, 0.7, { tex: 'darkwood', tint: '#5a5a5a', y: 0.5, solid: false });
    R.decal(canvasTex(56, 40, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 56, 40); c.fillStyle = '#9a8a6a'; c.fillRect(2, 2, 52, 36); const n = EVID.filter((e) => G.has(e)).length; for (let i = 0; i < n; i++) { c.fillStyle = '#eee'; c.fillRect(6 + (i % 3) * 16, 6 + Math.floor(i / 3) * 16, 12, 10); c.fillStyle = '#a00'; c.fillRect(11 + (i % 3) * 16, 6 + Math.floor(i / 3) * 16, 2, 2); } c.fillStyle = '#ddd'; c.fillRect(22, 14, 12, 14); if (f.eri_board) { c.strokeStyle = '#c00'; c.beginPath(); c.moveTo(12, 10); c.lineTo(28, 20); c.lineTo(44, 10); c.lineTo(28, 30); c.stroke(); } }, 'eboard' + EVID.filter((e) => G.has(e)).length + !!f.eri_board), { x: -1.2, y: 3, w: 4.2, h: 3 });
    R.inter('board', -1.2, -4, { label: 'Доска расследования', fn: async (G) => {
      if (f.eri_board) return G.run(['erika: Нитки натянуты. Полночный поезд ждать не будет.']);
      if (!f.eri_b0) { f.eri_b0 = 1; await G.run(E.board0); }
      const n = EVID.filter((e) => G.has(e)).length, t = [1, 2, 3, 4, 5].filter((i) => f['eri_t' + i]).length; if (n < 5 || t < 5) return G.run([`erika: Показаний: ${t} из 5. Улик: ${n} из 5. Город ещё не всё рассказал.`]);
      const r = await board({ title: 'Доска расследования', sub: 'дело Вронской', intro: 'Свяжи ниткой показание и улику, которая ему противоречит. Не все показания лживы, и не все улики полезны.',
        left: { title: 'Показания', items: [{ id: 't1', title: 'Сол, бармен', text: '«Ушла в полночь, одна, в слезах».' }, { id: 't2', title: 'Мэй, певица', text: '«Мы не общались. Соперницы».' }, { id: 't3', title: 'Грей, режиссёр', text: '«В пятницу была счастлива, главная роль!»' }, { id: 't4', title: 'Вейс, коллекционер', text: '«Не был знаком лично».' }, { id: 't5', title: 'Кассир', text: '«На вокзале не появлялась».' }] },
        right: { title: 'Улики', items: [{ id: 'e1', title: 'Фото из гримёрки Мэй', text: '«Сестрёнке, от той, кто в третьем ряду. Л.»' }, { id: 'e2', title: 'Контракт', text: 'Роль «передана» в четверг.' }, { id: 'e3', title: 'Записка', text: '«Аркадий, спасибо за цветы… у моря. Л.»' }, { id: 'e4', title: 'Квитанция', text: 'Суббота. Чемодан. Сдала: Вронская Л.' }, { id: 'e5', title: 'Спички', text: 'Клуб «Синяя нота».' }] },
        pairs: [['t2', 'e1', 'Мэй и Лидия, подруги. Мэй прикрывает её.'], ['t3', 'e2', 'Роль отобрали до пятницы. «Счастлива», заученная ложь.'], ['t4', 'e3', 'Вейс знал её и помогал ей.'], ['t5', 'e4', 'Чемодан на вокзале, значит, и она была там.']], wrong: E.wrong });
      if (r.done) { f.eri_board = 1; G.sfx('stamp'); G.flash(0.25); void camMove(G, { x: -0.2, z: -2.4, dist: 11, pitch: 0.42, yOff: 1.9 }, 1.6); await G.run(E.boardDone); void camMove(G, { dist: 9.4 }, 7); await G.run(E.version); if (f.eri_false) await G.run(E.versionMei); await warmOff(G); await camBack(G); await G.rebuild(); } } });
    R.npc('erika_noir', 2.2, 0.6, { id: 'erika', talk: (G: any) => G.run(f.eri_board ? ['erika: Вокзал. Полночь. Не опаздывай, поезда в этом городе ходят точнее людей.'] : ['erika: Опроси всех. Смотри на руки, а не на лица. Лица здесь давно научились врать.']) });
    const cab = canvasTex(22, 40, (c) => { px(c, 0, 0, 22, 40, '#1e1e1e'); for (let k = 0; k < 4; k++) { px(c, 1, 1 + k * 10, 20, 9, '#5a5a5a'); px(c, 1, 1 + k * 10, 20, 1, '#8a8a8a'); px(c, 8, 4 + k * 10, 6, 2, '#c8c8c8'); px(c, 9, 7 + k * 10, 4, 1, '#d8d8d8'); } }, 'ncabinet');
    pbox(R, -6.4, -4, 1.4, 1, 2.6, cab, { side: 0x3a3a3a }); R.sprite('suitcase', -6.4, -3.5, { y: 2.6 });
    coatStand(R, 7.0, -1.6, [0x2a2a2a, 0x5a5a5a]); R.sprite('plant', -7.2, 3.6, { scale: 1.2 });
    R.decal(painting(1), { wall: 'w', at: 0.5, y: 3.2, w: 1.6, h: 1.2 }); R.decal(canvasTex(16, 22, (c) => { px(c, 0, 0, 16, 22, '#d8d8d0'); px(c, 1, 1, 14, 3, '#1a1a1a'); ptext(c, 'РАЗЫСК.', 8, 1, { size: 4, col: '#e8e8e8', align: 'center' }); disc(c, 8, 10, 3, '#3a3a3a'); px(c, 4, 13, 8, 5, '#3a3a3a'); }, 'nwanted'), { wall: 'e', at: 1, y: 3, w: 1.0, h: 1.4 });
    R.door('out', 6.2, { label: 'На улицу', z: -4.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'office') }); R.decal(sign('СЫСК', 30), { x: 6.2, y: 3.95, z: -4.9, w: 1.8, h: 0.42, glow: true, color: 0xcccccc });
    R.spawn('start', 0, 2.4, 'b');
  },
  async enter(G) { if (!G.f.intro_eri) { G.f.intro_eri = 1; true } if (G.f.intro_eri === 1 && (G.f.intro_eri = 2)) { G.setPlayerChar('varya_noir'); G.focus(0.6, -1.4, 22); G.cam.pitch = 0.78; G.cam.yOff = 2.6; G.camSnap(); void camMove(G, { x: 1.4, z: -0.6, dist: 13, pitch: 0.5, yOff: 1.6 }, 8); await G.run(E.arrive); await camBack(G); } },
};

// ---------------- 2. улица ----------------
const street: RoomDef = {
  name: 'Улица под дождём', w: 46, d: 12, music: 'noir', amb: 'rain', step: 'stone', grade: NOIR, camDist: 23,
  build(R, G) {
    R.room.group.userData.bg = 0x060606; fog(R, 0x0a0a0a, 24, 52);
    // тротуар с бордюром, мокрая брусчатка проезжей части (тянется далеко)
    R.floor('cobble', { w: 200, d: 60, z: 22, y: -0.02 }); ground(R, tile('wetcobble', 32, (c) => { px(c, 0, 0, 32, 32, '#141416'); for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) { const x = k * 8 + (r % 2) * 4, y = r * 8; for (const ox of [0, -32]) { disc(c, x + ox + 4, y + 4, 3.4, hsh(r * 4 + k, 3) > 0.5 ? '#3a3a3e' : '#2e2e32'); px(c, x + ox + 2, y + 2, 2, 1, '#6a6a70'); } } }), 0, 22, 200, 60, 1.4, -0.005);
    ground(R, tile('sidewalk', 32, (c) => { px(c, 0, 0, 32, 32, '#2a2a2c'); for (const [x, y] of [[0, 0], [16, 0], [0, 16], [16, 16]]) { px(c, x + 1, y + 1, 15, 15, hsh(x + y, 4) > 0.5 ? '#4e4e52' : '#46464a'); px(c, x + 1, y + 1, 15, 1, '#5e5e62'); } }), 0, -4.2, 200, 2.2, 2, 0.015); R.box(0, -3.05, 200, 0.2, 0.13, { tex: 'stone', tint: '#8a8a86', solid: false, cast: false });
    R.ambient(0x4a4a4a, 2.4, 0xd0d0d0); rainy(R, G, { thunder: true }); noirRim(R, G, 5);
    streetFacades(R, G); R.collider(-23, -6.6, 23, -5.12);
    const doors: [string, number, string][] = [['eri_office', -18, 'Контора «Сыск»'], ['eri_club', -7, 'Джаз-клуб «Синяя нота»'], ['eri_studio', 4, 'Киностудия'], ['eri_collector', 13, 'Особняк коллекционера'], ['eri_station', 20.5, 'Вокзал']];
    for (const [to, x, label] of doors) R.door('d_' + to, x, { label, z: -5.06, col: '#2a2a2a', fn: (G) => G.goto(to, 'start', { fade: 'iris' }) });
    for (const x of [-13.5, -1, 9.6, 17.5, -30]) lampPost(R, x, -3.35, { shadow: x === -1 });
    // лужи с отражениями фонарей, газеты, люк с паром
    for (const [x, z, s, k] of [[-13.4, -1.6, 2.4, 1], [-0.6, -1.2, 3, 2], [9.8, -1.4, 2.6, 3], [6, 2.8, 3.4, 4], [-20, 1.8, 2.8, 5], [17, 2.4, 2.2, 6], [-6, 4.4, 2.6, 7]]) plane(R, puddleTex(k), x, 0.012, z, s, s * 0.6, { basic: true, rx: -Math.PI / 2, opacity: 0.85 });
    const paper = canvasTex(12, 9, (c) => { px(c, 0, 0, 12, 9, '#c8c8c0'); for (let y = 2; y < 8; y += 2) px(c, 1, y, 10, 1, '#6a6a6a'); px(c, 1, 0, 6, 2, '#2a2a2a'); }, 'npaper');
    for (const [x, z, r] of [[-11, 0.6, 0.4], [2.2, 3.6, -0.7], [14.6, -2.4, 1.2], [-24, -2.2, 0.2]]) plane(R, paper, x, 0.02, z, 0.7, 0.52, { rx: -Math.PI / 2 }).rotation.z = r;
    plane(R, canvasTex(16, 16, (c) => { disc(c, 8, 8, 7.5, '#0a0a0a'); disc(c, 8, 8, 6.5, '#3a3a3a'); for (let y = 3; y < 14; y += 2) px(c, 3, y, 10, 1, '#1a1a1a'); }, 'nmanhole'), 1.6, 0.02, 1.8, 1.1, 1.1, { rx: -Math.PI / 2 }); steam(R, 1.6, 1.8, 7, 0.9);
    // уличная мебель: телефонная будка, почтовый ящик, гидрант, газетный киоск, урна, авто
    pbox(R, -4.6, -4.3, 1.1, 1.1, 2.7, canvasTex(18, 44, (c) => { px(c, 0, 0, 18, 44, '#1a1a1a'); px(c, 1, 1, 16, 5, '#e8e8e8'); ptext(c, 'ТЕЛЕФОН', 9, 1, { size: 4, col: '#111', align: 'center' }); for (let y = 8; y < 42; y += 8) for (let x = 2; x < 16; x += 7) px(c, x, y, 6, 7, '#8a8a88'); px(c, 7, 22, 4, 6, '#2a2a2a'); }, 'nbooth'), { side: 0x2a2a2a, glow: true });
    pbox(R, -15.6, -4.4, 0.6, 0.5, 1.15, canvasTex(10, 18, (c) => { px(c, 0, 0, 10, 18, '#2a2a2a'); px(c, 1, 2, 8, 2, '#0a0a0a'); ptext(c, 'ПОЧТА', 5, 6, { size: 3, col: '#d8d8d8', align: 'center' }); px(c, 1, 14, 8, 1, '#4a4a4a'); }, 'nmail'), { side: 0x2a2a2a });
    R.sprite(canvasTex(10, 14, (c) => { px(c, 3, 0, 4, 2, '#5a5a5a'); px(c, 2, 2, 6, 10, '#8a8a8a'); px(c, 0, 5, 10, 3, '#6a6a6a'); px(c, 3, 3, 1, 8, '#b8b8b8'); px(c, 1, 12, 8, 2, '#3a3a3a'); }, 'nhydrant'), 11.2, -3.6, { scale: 1.0, solid: 0.2 });
    pbox(R, 0.9, -4.4, 1.3, 0.8, 1.5, canvasTex(20, 24, (c) => { px(c, 0, 0, 20, 24, '#2a2a2a'); px(c, 0, 0, 20, 4, '#5a5a5a'); ptext(c, 'ГАЗЕТЫ', 10, 0, { size: 4, col: '#111', align: 'center' }); for (let k = 0; k < 3; k++) { px(c, 2 + k * 6, 6, 5, 7, '#d8d8d0'); px(c, 3 + k * 6, 7, 3, 1, '#2a2a2a'); px(c, 2 + k * 6, 14, 5, 7, '#c8c8c0'); } }, 'nkiosk'), { side: 0x2a2a2a });
    R.decal(canvasTex(30, 40, (c) => { c.fillStyle = '#ddd'; c.fillRect(0, 0, 30, 40); c.fillStyle = '#222'; c.fillRect(8, 6, 14, 16); c.fillStyle = '#111'; c.fillRect(6, 4, 18, 6); ptext(c, 'АЛЛА ЕВА', 15, 26, { size: 6, col: '#111', align: 'center' }); ptext(c, 'сегодня', 15, 33, { size: 5, col: '#444', align: 'center' }); }, 'npost'), { x: -2.2, y: 2.6, z: -5.04, w: 1.6, h: 2.1 });
    R.look('poster', -2.2, -4, 'Афиша', ['~: «Алла Ева. Сегодня. Всегда». На месте лица, тень от полей шляпы. Только каре видно.'], { photo: 'Афиша без лица' });
    car(R, 8.4, 3.4, 1); car(R, -26, 3.6, -1);
    // трамвайные рельсы и «зебра» у кинотеатра: брусчатка не пустая
    for (const z of [5.4, 6.6]) R.box(0, z, 200, 0.1, 0.02, { tex: 'metal', tint: '#b8b8b8', solid: false, cast: false });
    for (let i = 0; i < 6; i++) R.box(-12.4 + i * 0.7 - 0, -1.0 + 0, 0.42, 3.6, 0.012, { color: 0xb8b8b4, solid: false, cast: false });
    R.npc('erika_noir', -16, 1.6, { id: 'erika', talk: ['erika: Я держу улицу. Если кто-то выйдет из клуба с чемоданом, я замечу.'] });
    R.spawn('start', -18, -3.6); R.spawn('office', -18, -3.6); for (const [to, x] of doors) R.spawn(to.replace('eri_', ''), x, -3.6);
  },
  async enter(G, from) { if (!G.f.eri_st) { G.f.eri_st = 1; await G.run(E.street); } const sp = from.replace('eri_', ''); if (G.room.spawns[sp]) { const s = G.room.spawns[sp]; G.player.place(s.x, s.z, 'f'); G.camSnap(); } },
};

// ---------------- 3. джаз-клуб ----------------
const club: RoomDef = {
  name: 'Джаз-клуб «Синяя нота»', w: 26, d: 12, music: 'noir', amb: 'crowd', step: 'carpet', grade: NOIR, camDist: 19,
  build(R, G) {
    interior(R, G, 'wallpaper', 'floor', 2.7); R.light(-6, 3.5, -1, 0xfff0d8, 10, 12); R.light(1, 3.2, 3.2, 0xfff0d8, 8, 12); R.light(-9, 2.6, 3.4, 0xffe8c8, 5, 8); spotC(R, 6, 9, 2, 6, -3.4, 0xffffff, 40, { angle: 0.22, cone: 0.07 });
    // сцена: подиум, занавес-задник, боковые кулисы, микрофон, контрабас-силуэт
    R.box(6, -4, 6, 3, 0.6, { tex: 'stage', solid: false }); R.box(6, -2.47, 6, 0.06, 0.6, { tex: 'gold', solid: false, cast: false }); R.curtain(6, -5.75, 7.6, 7, { tint: '#6a6a6a' }); for (const sx of [2.4, 9.6]) R.curtain(sx, -5.2, 1.4, 7, { tint: '#4a4a4a' });
    R.sprite('mic', 6, -3.4, { y: 0.6 }); R.sprite('speaker', 3.4, -4.8, { y: 0.6 }); R.sprite('speaker', 8.6, -4.8, { y: 0.6 });
    R.sprite(canvasTex(14, 40, (c) => { c.fillStyle = '#5a4030'; c.beginPath(); c.ellipse(7, 28, 6, 10, 0, 0, 7); c.fill(); c.beginPath(); c.ellipse(7, 16, 4, 6, 0, 0, 7); c.fill(); px(c, 6, 0, 2, 14, '#2a2a2a'); px(c, 6, 20, 2, 16, '#1a1a1a'); px(c, 6, 37, 2, 3, '#2a2a2a'); }, 'nbass'), 8.2, -4.4, { y: 0.6, scale: 1.1 });
    piano(R, 0.6, -4.3, 0.25);
    // бар: стойка с бутылками и зеркалом (Сол за ней)
    barCounter(R, -7, -4.7, 6);
    // столики со свечами и скатертями: зал полон
    for (const [x, z] of [[-2, 2], [2, 3.4], [-6, 3.6]]) { R.table(x, z, 1.4, 1.4, { tex: 'darkwood' }); R.box(x, z, 1.5, 1.5, 0.03, { tex: 'white', tint: '#9a9a9a', y: 1.15, solid: false, cast: false }); R.sprite('candle', x, z, { y: 1.15 }); }
    for (const [x, z] of [[5.2, 0.8], [9.8, 2.4], [-10.6, 1.2], [6.4, 4.6], [-2.6, -0.8]]) cafeTable(R, x, z);
    R.light(0, 1.6, 3, 0xffd8a0, 4, 6, { flicker: 0.12 });
    // стены: неоновая вывеска, афиши, бра
    R.decal(canvasTex(64, 16, (c) => { px(c, 0, 0, 64, 16, '#0a0a0a'); c.strokeStyle = '#fff'; c.strokeRect(1.5, 1.5, 61, 13); otext(c, 'СИНЯЯ НОТА', 32, 3, 9, '#ffffff', '#5a5a5a'); }, 'nclubneon'), { x: -1.6, y: 4.6, w: 3.6, h: 0.9, glow: true, color: 0xd8d8d8 });
    R.poster('МЭЙ', 'каждую ночь', { wall: 'w', at: -1, y: 3, w: 1.3, h: 1.8, face: '#d8d8d8' }); R.poster('ДЖАЗ', 'до утра', { wall: 'e', at: 1.8, y: 3, w: 1.3, h: 1.8, motif: 'moon' });
    witness(R, 'barman', -7, -4.4, E.sol, 'eri_t1', G); witness(R, 'singer', 6, -3, E.mei, 'eri_t2', G);
    R.door('back', 11, { label: 'Гримёрка Мэй', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_dressing') });
    R.door('out', -11, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'club') });
    for (const [i, [x, z, d]] of ([[-3.15, 2.1, 'r'], [3.15, 3.5, 'l'], [-7.15, 3.7, 'r']] as [number, number, string][]).entries()) R.actor(['student', 'cashier', 'courtier'][i], x, z, { dir: d, id: 'patron' + i, pose: 'sit' });
    R.spawn('start', -11, -4.4); R.spawn('back', 11, -4.4);
  },
};
// допрос в масках: у трёх свидетелей есть второе дно, и открывает его только нужная маска
const MASK_TALK: Record<string, [string, string, string]> = { singer: ['drama', 'meiDr', 'eri_mei_dr'], cashier: ['comedy', 'cashierC', 'eri_cash_c'], director: ['tragedy', 'greyTr', 'eri_grey_tr'] };
const witness = (R: Builder, ch: string, x: number, z: number, talk: any, flag: string, G: any) => R.npc(ch, x, z, { talk: async (G: any) => {
  await G.run(talk); G.flag(flag) && G.toast('Показание записано', '✎'); const mt = MASK_TALK[ch];
  if (mt && G.state.mask === mt[0] && !G.f[mt[2]]) { // крупный план, пауза, и человек говорит то, что прятал
    G.f[mt[2]] = 1; const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('mask'); G.flash(0.2); await camMove(G, { x, z: z + 0.8, dist: 7.6, pitch: 0.38, yOff: 1.9 }, 0.9); await G.wait(0.6);
    await G.run((E as any)[mt[1]]); G.toast('Маска открыла новое в деле', '◐'); await camBack(G, p0, y0, 0.8);
  } else if (!G.f.eri_mhint && [1, 2, 3, 4, 5].filter((i) => G.f['eri_t' + i]).length >= 2) { G.f.eri_mhint = 1; await G.run(E.maskHintTalk); maskHint(G, 'eri', 'Маски на допросе (1–3): Комедия развязывает язык, Трагедия видит спрятанное, Драма показывает чувства'); }
} });

// ---------------- 4. гримёрка Мэй ----------------
const meiRoom: RoomDef = {
  name: 'Гримёрка Мэй', w: 12, d: 9, music: 'noir', amb: 'crowd', step: 'carpet', grade: NOIR, camDist: 17,
  build(R, G) {
    interior(R, G, 'wallpaper', 'carpet', 2.8); vanity(R, 0, -3.6, { w: 3, dark: true, clutter: 4, photos: 2 }); R.light(0, 3.2, -2.2, 0xfff0e0, 7, 8); R.light(-3.6, 3.0, 1.6, 0xfff0e0, 6, 8); R.light(3.4, 2.6, 2.6, 0xffffff, 4, 7); warmRig(R, 1.2, -3.8, { count: 50, y: 2.6 });
    R.sprite(canvasTex(10, 12, (c) => { c.fillStyle = '#3a3a3a'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#5a5a5a'; c.fillRect(1, 1, 8, 10); }, 'framebk'), 1.2, -3.6, { y: 1.15, mask: 'none' });
    R.sprite(canvasTex(10, 12, (c) => { c.fillStyle = '#3a3a3a'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#ddd'; c.fillRect(1, 1, 8, 10); c.fillStyle = '#333'; c.fillRect(2, 5, 2, 5); c.fillRect(6, 5, 2, 5); c.fillStyle = '#999'; c.fillRect(2, 3, 2, 2); c.fillRect(6, 3, 2, 2); }, 'framefr'), 1.2, -3.6, { y: 1.15, mask: 'tragedy', glow: true });
    R.inter('frame', 1.2, -2.6, { label: 'Рамка лицом к стене', mask: 'none', fn: async (G) => { await G.run(E.meiRoom); await G.run(E.meiPhotoNo); maskHint(G, 'eri_tr', 'Маска Трагедии (2) показывает спрятанное. Надень её и посмотри на рамку снова'); if (!G.flag('eri_tr_hint')) { G.set('eri_tr_hint', 1); await G.run(['erika: (из-за двери) Варя, у тебя ведь есть эти твои маски? Трагедия видит то, что спрятали. Попробуй.']); } } });
    R.inter('frameTr', 1.2, -2.6, { label: 'Перевёрнутая фотография', mask: 'tragedy', photo: 'Мэй и Лидия', fn: async (G) => { // фото-воспоминание: крупно, вспышка, и серое на миг теплеет
      const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('mask'); void camMove(G, { x: 1.2, z: -2.9, dist: 7.2, pitch: 0.4, yOff: 1.4 }, 1.2); await G.run(E.meiPhotoTr.slice(0, 1)); G.flash(0.3); G.sfx('note');
      void warmOn(G, { grade: { sat: 0.45, vig: 0.5 }, int: 10, dur: 1.4 }); await G.run(E.meiPhotoTr.slice(1)); await warmOff(G); await camBack(G, p0, y0); } });
    { const wt = canvasTex(28, 44, (c) => { px(c, 0, 0, 28, 44, '#1a1a1a'); px(c, 1, 1, 26, 42, '#6a6a66'); px(c, 1, 1, 26, 3, '#8a8a86'); for (const dx of [2, 15]) { px(c, dx, 6, 11, 34, '#4a4a48'); px(c, dx, 6, 11, 1, '#9a9a96'); px(c, dx, 39, 11, 1, '#2a2a28'); px(c, dx + 2, 9, 7, 12, '#5a5a58'); px(c, dx + 2, 24, 7, 12, '#5a5a58'); } px(c, 4, 10, 7, 26, '#a8a8a8'); px(c, 5, 11, 1, 24, '#e8e8e8'); px(c, 12, 20, 1, 4, '#d8d8c8'); px(c, 15, 20, 1, 4, '#d8d8c8'); px(c, 1, 41, 26, 2, '#2a2a28'); for (let i = 0; i < 30; i++) px(c, Math.floor(hsh(i, 81) * 28), Math.floor(hsh(i, 82) * 44), 1, 1, '#3a3a38'); }, 'nwardrobe');
      const wm = pbox(R, -5.4, -0.4, 2.2, 1.0, 3.4, wt, { side: 0x4a4a48, top: 0x5a5a58 }); wm.rotation.y = Math.PI / 2; R.box(-5.4, -0.4, 1.2, 2.4, 0.2, { tex: 'darkwood', tint: '#8a8a8a', y: 3.4, solid: false }); R.sprite('suitcase', -5.2, 1.6, { scale: 1.1 }); R.sprite(canvasTex(10, 8, (c) => { px(c, 0, 2, 10, 6, '#3a3a3a'); px(c, 1, 0, 8, 3, '#8a8a8a'); px(c, 2, 1, 6, 1, '#d8d8d8'); }, 'nhatbox'), -5.2, -2.0, { scale: 1.2 }); } costumeRack(R, 4.2, -1.6, 2.2, 7); screen3D(R, 4.0, 2.4, { ry: -0.5, col: '#9a9a9a' });
    R.sprite('flowerpot', 4.6, -3.8, { scale: 1.4 }); R.sprite('bouquet', -1.8, -3.9, { scale: 0.9, y: 0 }); R.sprite('chair', 0, -2.5, { scale: 1.1 });
    R.poster('МЭЙ', 'Синяя нота', { wall: 'e', at: 0.6, y: 3.2, w: 1.2, h: 1.7, face: '#d8d8d8' }); noirWindow(R, 0, { wall: 'w', at: 2.2, w: 1.4, h: 1.8 });
    R.door('out', -3, { label: 'В зал', z: -4.46, col: '#3a3a3a', fn: (G) => G.goto('eri_club', 'back') }); R.spawn('start', -3, -3);
  },
};

// ---------------- 5. киностудия ----------------
const studio: RoomDef = {
  name: 'Киностудия «Серебряный экран»', w: 26, d: 12, music: 'noir', amb: 'hum', step: 'wood', grade: NOIR, camDist: 19,
  build(R, G) {
    interior(R, G, 'concrete', 'stage', 3.2); spotC(R, -4, 8, 4, -4, -2, 0xffffff, 40, { angle: 0.32, cone: 0.025 }); R.light(6, 3, 0, 0xffffff, 9, 12); R.light(-8, 3.2, 2.6, 0xfff4e0, 8, 11); R.light(10, 3.4, -2.6, 0xffffff, 7, 9); R.light(0, 2.4, 4.6, 0xe8e8ff, 6, 10);
    // съёмочная площадка: рельсы операторской тележки, тележка с краном, выгородка «контора детектива», режиссёрские стулья, кабели в бухтах
    const rail = tile('nrail', 16, (c) => { px(c, 0, 0, 16, 16, 'rgba(0,0,0,0)'); for (let x = 1; x < 16; x += 5) px(c, x, 3, 3, 10, '#3a3028'); px(c, 0, 4, 16, 2, '#a8a8a8'); px(c, 0, 10, 16, 2, '#a8a8a8'); px(c, 0, 4, 16, 1, '#e8e8e8'); px(c, 0, 10, 16, 1, '#e8e8e8'); });
    plane(R, rail, -3, 0.03, 2.6, 12, 1.2, { rx: -Math.PI / 2, rep: [8, 1] });
    R.sprite(canvasTex(28, 30, (c) => { px(c, 2, 22, 24, 5, '#2a2a2a'); px(c, 2, 22, 24, 1, '#8a8a8a'); for (const wx of [5, 21]) { disc(c, wx, 27, 3, '#111'); disc(c, wx, 27, 1.5, '#8a8a8a'); } px(c, 12, 8, 3, 14, '#4a4a4a'); px(c, 4, 7, 22, 3, '#3a3a3a'); px(c, 18, 2, 8, 6, '#1a1a1a'); disc(c, 26, 5, 2.5, '#5a5a5a'); px(c, 19, 3, 2, 2, '#d8d8d8'); px(c, 6, 13, 6, 9, '#1a1a1a'); px(c, 7, 14, 4, 2, '#8a8a8a'); }, 'ndolly'), -5.6, 2.6, { scale: 1.5 });
    const flat = canvasTex(48, 40, (c) => { px(c, 0, 0, 48, 40, '#6a6a66'); for (let y = 0; y < 40; y += 4) px(c, 0, y, 48, 1, '#5e5e5a'); px(c, 0, 28, 48, 12, '#4a4a48'); px(c, 0, 28, 48, 1, '#8a8a86'); px(c, 6, 6, 14, 16, '#1a1a1a'); px(c, 7, 7, 12, 14, '#c8c8c0'); px(c, 13, 7, 1, 14, '#1a1a1a'); px(c, 7, 14, 12, 1, '#1a1a1a'); for (let k = 0; k < 6; k++) px(c, 7, 8 + k * 2, 12, 1, 'rgba(0,0,0,.35)'); px(c, 28, 4, 14, 24, '#3a3a38'); px(c, 29, 5, 12, 10, '#d8d8d0'); ptext(c, 'Д.ГРЕЙ', 35, 7, { size: 4, col: '#1a1a1a', align: 'center' }); px(c, 39, 17, 2, 2, '#d8d8c8'); px(c, 0, 0, 1, 40, '#2a2a2a'); px(c, 47, 0, 1, 40, '#2a2a2a'); }, 'nofficeflat');
    plane(R, flat, -9.8, 2.4, -4.0, 5.6, 4.8, {}); R.box(-12.6, -4.6, 0.12, 1.4, 4.4, { tex: 'wood', tint: '#8a8a86', solid: false }); R.box(-7.2, -4.6, 0.12, 1.4, 4.4, { tex: 'wood', tint: '#8a8a86', solid: false }); R.table(-9.8, -2.8, 2.2, 1.0, { tex: 'darkwood', tint: '#8a8a8a' }); R.sprite('lamp', -10.4, -2.8, { y: 1.15, scale: 0.6 }); R.sprite('book', -9.4, -2.8, { y: 1.15, scale: 0.8 });
    const dchair = canvasTex(14, 20, (c) => { px(c, 1, 2, 12, 6, '#1a1a1a'); px(c, 2, 3, 10, 4, '#d8d8d0'); ptext(c, 'РЕЖ.', 7, 3, { size: 3, col: '#1a1a1a', align: 'center' }); px(c, 1, 10, 12, 3, '#d8d8d0'); px(c, 1, 2, 1, 18, '#3a3028'); px(c, 12, 2, 1, 18, '#3a3028'); for (let i = 0; i < 6; i++) { px(c, 2 + i * 2, 13 + i, 1, 1, '#3a3028'); px(c, 11 - i * 2, 13 + i, 1, 1, '#3a3028'); } }, 'ndchair');
    R.sprite(dchair, 5.4, 2.6, { scale: 1.3, solid: 0.3 }); R.sprite(dchair, 6.8, 3.0, { scale: 1.3, solid: 0.3 });
    const coil = canvasTex(16, 8, (c) => { for (let r = 7; r > 2; r -= 1.5) { c.strokeStyle = r % 3 < 1.5 ? '#111' : '#2a2a2a'; c.lineWidth = 1; c.beginPath(); c.ellipse(8, 4, r, r / 2, 0, 0, 7); c.stroke(); } }, 'ncoil');
    for (const [x, z] of [[-1.6, 4.4], [9.6, 1.2], [-11.4, 1.6]]) plane(R, coil, x, 0.03, z, 1.4, 0.7, { rx: -Math.PI / 2 });
    R.sprite('stagelight', 11.6, 3.6, { scale: 2, y: 1.6 }); R.box(11.6, 3.6, 0.08, 0.08, 1.7, { tex: 'metal', solid: false }); plane(R, canvasTex(16, 16, (c) => { const g = c.createRadialGradient(8, 8, 0, 8, 8, 8); g.addColorStop(0, 'rgba(255,255,255,.7)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 16, 16); }, 'npool'), 1, 0.04, 0.8, 6, 5, { add: true, rx: -Math.PI / 2, opacity: 0.35 });
    // экран с проецируемым кадром: силуэт в шляпе в дверном проёме, перфорация, царапины (без пересвета)
    const frame = canvasTex(96, 48, (c) => { px(c, 0, 0, 96, 48, '#0a0a0a'); px(c, 8, 4, 80, 40, '#a8a8a4'); for (let y = 4; y < 44; y++) px(c, 8, y, 80, 1, `rgba(0,0,0,${(Math.abs(y - 24) / 40).toFixed(2)})`); px(c, 52, 10, 18, 34, '#e8e8e4'); px(c, 57, 18, 8, 26, '#141414'); disc(c, 61, 16, 3, '#141414'); px(c, 55, 14, 12, 2, '#141414'); px(c, 8, 38, 80, 6, '#5a5a5a'); for (let i = 0; i < 6; i++) px(c, 14 + i * 13, 4, 1, 40, 'rgba(255,255,255,.12)'); for (let y = 2; y < 48; y += 6) { px(c, 2, y, 3, 3, '#3a3a3a'); px(c, 91, y, 3, 3, '#3a3a3a'); } ptext(c, '«ПОЛНОЧНЫЙ ЭКСПРЕСС»', 30, 6, { size: 5, col: '#e8e8e4', align: 'center' }); }, 'nscreen');
    R.box(-4, -5.6, 8.4, 0.3, 4.6, { tex: 'darkwood', solid: false }); R.decal(frame, { x: -4, y: 2.7, z: -5.42, w: 8, h: 4, glow: true, color: 0x8e8e8e, noSlot: true });
    R.sprite('filmcam', 1, 0.6, { scale: 1.4, solid: 0.5 }); for (const [x, z] of [[-9, 0], [-0.4, -3.4]]) { R.sprite('stagelight', x, z, { scale: 2, y: 1.6 }); R.box(x, z, 0.08, 0.08, 1.7, { tex: 'metal', solid: false }); R.box(x, z, 0.9, 0.9, 0.06, { tex: 'metal', solid: false }); }
    R.sprite('chair', 3.6, 1.8, { scale: 1.2 }); R.table(7, -3, 2.6, 1.2); R.sprite('book', 7, -3, { y: 1.15 });
    R.sprite(canvasTex(14, 12, (c) => { px(c, 0, 4, 14, 8, '#1a1a1a'); px(c, 1, 5, 12, 6, '#2a2a2a'); ptext(c, 'СЦ.12', 7, 5, { size: 4, col: '#e8e8e8', align: 'center' }); c.save(); c.translate(0, 4); c.rotate(-0.3); for (let k = 0; k < 4; k++) px(c, k * 4, -3, 2, 3, k % 2 ? '#e8e8e8' : '#1a1a1a'); c.restore(); }, 'nclap'), 7.7, -3, { y: 1.15, scale: 0.7 });
    // декорации-задники: фасад с окном на подпорках, мешки с песком, кабели
    R.box(10.5, -4.6, 4.4, 0.2, 4.2, { tex: 'brick', tint: '#8a8a88', solid: false }); R.decal(canvasTex(16, 20, (c) => { px(c, 0, 0, 16, 20, '#1a1a1a'); px(c, 1, 1, 14, 18, '#7a7a80'); px(c, 7, 1, 1, 18, '#1a1a1a'); px(c, 1, 9, 14, 1, '#1a1a1a'); }, 'nflatwin'), { x: 10.5, y: 2.4, z: -4.48, w: 1.2, h: 1.5, noSlot: true }); for (const sx of [9, 12]) { const s = R.box(sx, -5.2, 0.1, 1.4, 3.2, { tex: 'wood', solid: false }); s.rotation.x = 0.45; }
    for (let i = 0; i < 4; i++) R.box(12 + (i % 2) * 0.6, -3.4 + Math.floor(i / 2) * 0.1, 0.6, 0.4, 0.3, { tex: 'paper', tint: '#8a8a80', y: Math.floor(i / 2) * 0.3, solid: i < 2 });
    for (const [x0, z0, x1, z1] of [[-9, 0.2, 1, 0.7], [-0.4, -3.2, -0.4, 0.6]]) { const len = Math.hypot(x1 - x0, z1 - z0); const cb = R.box((x0 + x1) / 2, (z0 + z1) / 2, len, 0.06, 0.04, { color: 0x111111, solid: false, cast: false }); cb.rotation.y = -Math.atan2(z1 - z0, x1 - x0); }
    R.decal(canvasTex(60, 14, (c) => { px(c, 0, 0, 60, 14, '#0a0a0a'); otext(c, 'ТИШИНА! СЪЁМКА', 30, 3, 8, '#ffffff', '#4a4a4a'); }, 'nsilence'), { x: 4, y: 4.8, w: 3.2, h: 0.75, glow: true, color: 0xc8c8c8 });
    witness(R, 'director', 3.6, 0.6, E.grey, 'eri_t3', G);
    R.inter('desk', 7, -2, { label: 'Стол режиссёра', fn: async (G) => { if (!G.has('e_contract')) await G.run(E.greyDesk); else await G.run(['~: Контракт уже у меня. Красная печать «ПЕРЕДАНО» никуда не делась.']); } });
    R.door('out', -11, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'studio') }); R.spawn('start', -11, -4.4);
  },
};

// ---------------- 6. кабинет коллекционера ----------------
const collector: RoomDef = {
  name: 'Кабинет коллекционера', w: 18, d: 10, music: 'noir', amb: 'rain', step: 'carpet', grade: NOIR, camDist: 18,
  build(R, G) {
    interior(R, G, 'woodwall', 'carpet', 2.7); R.light(0, 3.4, -1, 0xfff4e0, 10, 11, { flicker: 0.05 }); R.light(-4.5, 2.6, -2.6, 0xffffff, 7, 6); R.light(5.2, 2.2, 3.2, 0xe8eeff, 8, 8); R.light(-6.8, 2.6, 4.2, 0xffffff, 5, 6); noirWindow(R, 5, { shadow: true });
    const shelfT = canvasTex(26, 40, (c) => { px(c, 0, 0, 26, 40, '#1a1a1a'); px(c, 1, 1, 24, 38, '#5a5a56'); px(c, 2, 2, 22, 36, '#2a2a28'); for (const y of [11, 21, 31]) { px(c, 2, y, 22, 2, '#7a7a76'); px(c, 2, y, 22, 1, '#a8a8a4'); } px(c, 0, 0, 1, 40, '#8a8a86'); px(c, 1, 38, 24, 2, '#3a3a38'); }, 'nshelf');
    for (const x of [-6, -3]) { pbox(R, x, -4.3, 2.6, 0.8, 4, shelfT, { side: 0x4a4a48, top: 0x5a5a58 }); for (const y of [1.2, 2.2, 3.2]) R.box(x, -4.0, 2.5, 0.5, 0.06, { tex: 'darkwood', tint: '#8a8a8a', y, solid: false, cast: false }); R.sprite('masks', x, -3.9, { y: 2.25, scale: 1.2 }); R.sprite('bust', x + 0.6, -3.9, { y: 0.0 + 1.22, scale: 0.8 }); R.sprite('book', x - 0.6, -3.9, { y: 3.26 }); }
    R.look('shelf', -4.5, -3.2, 'Полка с реквизитом', E.weissShelf);
    R.table(2, -1.6, 3, 1.4, { tex: 'darkwood' }); R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#eee'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#888'; c.fillRect(2, 2, 6, 1); }, 'env2'), 2.6, -1.6, { y: 1.15 }); R.sprite('lamp', 1.1, -1.8, { y: 1.1, scale: 0.45 });
    R.inter('desk', 2.6, -0.4, { label: 'Конверт на столе', fn: async (G) => { if (!G.has('e_letter')) await G.run(E.weissDesk); else await G.run(['~: Записка у меня. «Увидимся у моря».']); } });
    witness(R, 'collector', -1, 1, E.weiss, 'eri_t4', G);
    // витрины со статуэтками, картины, кресло, статуя, ковёр
    rug(R, 0, 1.4, 6, 3.6, { col: '#2a2a2a', border: '#8a8a8a' });
    const glass = new THREE.MeshLambertMaterial({ color: 0xe8e8f0, transparent: true, opacity: 0.18, depthWrite: false });
    const stat = (k: number) => canvasTex(10, 16, (c) => { if (k === 0) { disc(c, 5, 3, 2.5, '#d8d8d0'); px(c, 3, 5, 4, 8, '#c8c8c0'); px(c, 1, 6, 2, 1, '#c8c8c0'); px(c, 7, 4, 2, 1, '#c8c8c0'); } else if (k === 1) { c.fillStyle = '#b8b8b0'; c.beginPath(); c.ellipse(5, 7, 4, 5, 0, 0, 7); c.fill(); px(c, 3, 6, 1, 1, '#1a1a1a'); px(c, 6, 6, 1, 1, '#1a1a1a'); px(c, 4, 9, 2, 1, '#1a1a1a'); } else { px(c, 2, 2, 6, 11, '#9a9a90'); px(c, 3, 0, 4, 3, '#b8b8b0'); } px(c, 1, 13, 8, 3, '#3a3a3a'); }, 'nstat' + k);
    for (const [x, z, k] of [[-6.8, 1.6, 0], [-6.8, 3.6, 1], [6.8, 2.0, 2], [6.8, -0.2, 0]]) { R.box(x, z, 1, 1, 1.0, { tex: 'darkwood' }); const gb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.0, 0.9), glass); gb.position.set(x, 1.5, z); R.room.group.add(gb); R.box(x, z, 0.94, 0.94, 0.06, { tex: 'gold', y: 2.0, solid: false, cast: false }); R.sprite(stat(k), x, z, { y: 1.0, scale: 0.9, thin: true }); }
    R.decal(painting(0), { wall: 'w', at: -1.6, y: 3.4, w: 2.2, h: 1.6 }); R.decal(painting(2), { wall: 'e', at: 1.0, y: 3.4, w: 2.0, h: 1.5 }); R.decal(painting(1), { x: 1.2, y: 4.4, w: 1.4, h: 1.1 });
    armchair(R, 3.8, 1.6, { col: 0x6a6a6a, ry: -0.6 }); statue(R, -7.6, -3.6, { pose: 'mask' });
    R.door('out', 6.6, { label: 'На улицу', z: -4.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'collector') }); R.spawn('start', 6.6, -3.4);
  },
};

// ---------------- 7. вокзал ----------------
const station: RoomDef = {
  name: 'Вокзал', w: 34, d: 12, music: 'noir', amb: 'rain', step: 'stone', grade: NOIR, camDist: 20,
  build(R, G) {
    const f = G.f; interior(R, G, 'stone', 'checker', 2.5); ground(R, tile('marble', 32, (c) => { for (let k = 0; k < 4; k++) { const x = (k % 2) * 16, y = Math.floor(k / 2) * 16; px(c, x, y, 16, 16, (k === 0 || k === 3) ? '#5e5c58' : '#2a2a2a'); px(c, x, y, 16, 1, 'rgba(255,255,255,.12)'); } for (let i = 0; i < 10; i++) px(c, Math.floor(hsh(i, 2) * 32), Math.floor(hsh(i, 3) * 32), 3, 1, 'rgba(200,200,200,.18)'); }), 0, 3.5, 34, 19, 2.2, 0.005); R.light(-6, 4, -1, 0xffffff, 10, 14); R.light(8, 4, -1, 0xffffff, 8, 12, { flicker: 0.1 });
    // табло отправления: 2× шрифт, широкое, в левой части зала (не под HUD)
    R.decal(canvasTex(176, 44, (c) => { px(c, 0, 0, 176, 44, '#0a0a0a'); c.strokeStyle = '#bbb'; c.lineWidth = 2; c.strokeRect(1, 1, 174, 42); ptext(c, 'ОТПРАВЛЕНИЕ', 88, 3, { size: 10, col: '#d8d8d8', align: 'center' }); px(c, 4, 15, 168, 1, '#5a5a5a'); ptext(c, 'К МОРЮ', 8, 18, { size: 14, col: '#ffffff' }); ptext(c, '00:00', 168, 18, { size: 14, col: '#ffffff', align: 'right' }); ptext(c, 'СЕВЕРНЫЙ  ·  ОТМЕНЁН', 8, 33, { size: 8, col: '#9a9a9a' }); }, 'depart2'), { x: -8, y: 4.8, w: 7, h: 1.75, glow: true, color: 0xc8c8c8 });
    R.box(-11, -4.2, 4, 1.2, 1.4, { tex: 'darkwood' }); R.box(-11, -4.75, 4, 0.1, 1.5, { tex: 'darkwood', y: 1.4, solid: false }); for (let i = 0; i < 9; i++) R.box(-12.6 + i * 0.4, -4.2, 0.03, 0.03, 1.4, { tex: 'gold', y: 1.4, solid: false, cast: false });
    R.decal(canvasTex(64, 20, (c) => { px(c, 0, 0, 64, 20, '#1a1a1a'); c.strokeStyle = '#ccc'; c.strokeRect(1, 1, 62, 18); ptext(c, 'КАССА', 32, 3, { size: 14, col: '#f0f0f0', align: 'center' }); }, 'kassa2'), { x: -11, y: 3.4, w: 2.6, h: 0.82 });
    witness(R, 'cashier', -11, -5.2, E.cashier, 'eri_t5', G);
    const lock = canvasTex(54, 42, (c) => { px(c, 0, 0, 54, 42, '#1a1a1a'); for (let r = 0; r < 4; r++) for (let k = 0; k < 6; k++) { px(c, 1 + k * 9, 1 + r * 10, 8, 9, '#7a7a7a'); px(c, 1 + k * 9, 1 + r * 10, 8, 1, '#a8a8a8'); px(c, 6 + k * 9, 4 + r * 10, 1, 3, '#2a2a2a'); ptext(c, String(r * 6 + k + 1), 3 + k * 9, 2 + r * 10, { size: 4, col: '#1a1a1a' }); } }, 'nlockers');
    pbox(R, 4, -4.6, 3.4, 0.8, 2.6, lock, { side: 0x5a5a5a }); R.inter('locker', 4, -3.6, { label: 'Камера хранения', fn: async (G) => { if (!G.has('e_ticket')) await G.run(E.locker); else await G.run(['~: Квитанция у меня. Чемодан Вронской ждёт свою хозяйку.']); } });
    // скамьи со спинками, часы, багаж, афиши, газетный киоск, арочное окно с дождём
    for (const x of [-4, 0]) { R.box(x, 2.6, 2.6, 0.7, 0.1, { tex: 'wood', y: 0.5 }); R.box(x, 2.95, 2.6, 0.1, 0.7, { tex: 'wood', y: 0.6, solid: false }); for (const sx of [-1.1, 1.1]) R.box(x + sx, 2.6, 0.1, 0.7, 0.5, { tex: 'metal', solid: false }); }
    for (const x of [-8, 8]) { R.box(x, 2.6, 2.6, 0.7, 0.1, { tex: 'wood', y: 0.5 }); R.box(x, 2.95, 2.6, 0.1, 0.7, { tex: 'wood', y: 0.6, solid: false }); }
    if (!G.has('e_matches')) { R.sprite(canvasTex(6, 4, (c) => { c.fillStyle = '#ddd'; c.fillRect(0, 0, 6, 4); c.fillStyle = '#333'; c.fillRect(1, 1, 4, 1); }, 'match'), -4, 2.6, { y: 0.62, glow: true, name: 'mspr' }); R.inter('matches', -4, 3.4, { label: 'Спичечный коробок', fn: async (G) => { await G.run(E.matches); G.room.named.mspr.visible = false; } }); }
    R.decal(canvasTex(40, 40, (c) => { disc(c, 20, 20, 19.5, '#111'); disc(c, 20, 20, 17, '#e8e8e0'); for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; px(c, 20 + Math.cos(a) * 14 - 1, 20 + Math.sin(a) * 14 - 1, 2, 3, '#111'); } c.strokeStyle = '#111'; c.lineWidth = 2; c.beginPath(); c.moveTo(20, 20); c.lineTo(20, 6); c.moveTo(20, 20); c.lineTo(21, 9); c.stroke(); }, 'nclock2'), { x: 9.2, y: 4.6, w: 1.6, h: 1.6 });
    for (const [x, z, s] of [[-8.6, 4.2, 1.3], [-8.0, 4.4, 1.0], [-7.4, 4.1, 1.2], [9.4, 4.4, 1.2], [14.4, -3.6, 1.1]]) R.sprite('suitcase', x, z, { scale: s });
    R.box(10.2, 4.2, 1.6, 0.9, 0.5, { tex: 'darkwood', tint: '#6a6a6a' }); R.box(10.2, 4.2, 1.6, 0.9, 0.1, { tex: 'gold', y: 0.5, solid: false });
    R.poster('К МОРЮ', 'полночный экспресс', { x: -0.4, y: 3.4, w: 1.3, h: 1.8, motif: 'moon' }); R.poster('ЭКСПРЕСС', 'Север · Юг', { x: 7, y: 3.4, w: 1.3, h: 1.8, motif: 'curtain' });
    noirWindow(R, 0, { wall: 'w', at: 0, w: 2, h: 3.2 }); noirWindow(R, 0, { wall: 'e', at: 1.6, w: 2, h: 3.2 });
    // пассажиры (вразброс, не шеренгой), тележка носильщика, газетный киоск, большое расписание
    for (const [i, [ch, x, z, d]] of ([['student2', -5.4, 0.4, 'r'], ['teacher', 3.4, -1.2, 'l'], ['usher', 11.6, 0.8, 'b'], ['courtier', -1.8, 4.6, 'f'], ['stagehand', 6.2, 2.2, 'l'], ['guard', 15.2, -2.6, 'f']] as [string, number, number, string][]).entries()) R.actor(ch, x, z, { dir: d, id: 'pax' + i });
    R.sprite(canvasTex(24, 22, (c) => { px(c, 2, 2, 2, 16, '#3a3a3a'); px(c, 2, 14, 20, 3, '#4a4a4a'); px(c, 2, 14, 20, 1, '#8a8a8a'); disc(c, 6, 19, 2.5, '#111'); disc(c, 18, 19, 2.5, '#111'); px(c, 5, 7, 12, 7, '#5a5a56'); px(c, 5, 7, 12, 1, '#9a9a96'); px(c, 8, 9, 6, 1, '#2a2a2a'); px(c, 7, 2, 9, 5, '#7a7a76'); px(c, 7, 2, 9, 1, '#b8b8b4'); px(c, 10, 1, 3, 1, '#2a2a2a'); }, 'ncart'), 4.6, 4.4, { scale: 1.5, solid: 0.6 });
    R.sprite(canvasTex(26, 36, (c) => { px(c, 0, 0, 26, 6, '#1a1a1a'); ptext(c, 'ГАЗЕТЫ', 13, 1, { size: 4, col: '#e8e8e8', align: 'center' }); px(c, 1, 6, 24, 30, '#4a4a48'); px(c, 2, 7, 22, 12, '#2a2a28'); for (let i = 0; i < 6; i++) { px(c, 3 + (i % 3) * 7, 8 + Math.floor(i / 3) * 6, 6, 5, '#d8d8d0'); px(c, 4 + (i % 3) * 7, 9 + Math.floor(i / 3) * 6, 4, 1, '#3a3a3a'); } px(c, 1, 20, 24, 2, '#8a8a86'); px(c, 2, 23, 22, 12, '#3a3a38'); }, 'nkiosk'), -14.4, 1.2, { scale: 1.6, solid: 0.8 });
    R.decal(canvasTex(120, 64, (c) => { px(c, 0, 0, 120, 64, '#0e0e0e'); c.strokeStyle = '#9a9a9a'; c.strokeRect(1, 1, 118, 62); ptext(c, 'РАСПИСАНИЕ ПОЕЗДОВ', 60, 3, { size: 8, col: '#e8e8e8', align: 'center' }); const rows = [['К МОРЮ', '00:00', '1'], ['СЕВЕРНЫЙ', '—', '—'], ['ПРИГОРОД', '23:15', '3'], ['ЭКСПРЕСС', '01:40', '2'], ['ПОЧТОВЫЙ', '04:05', '4']]; rows.forEach((r, k) => { const y = 15 + k * 9; px(c, 4, y + 7, 112, 1, '#2a2a2a'); ptext(c, r[0], 6, y, { size: 7, col: k === 1 ? '#7a7a7a' : '#f0f0f0' }); ptext(c, r[1], 92, y, { size: 7, col: '#f0f0f0', align: 'right' }); ptext(c, r[2], 112, y, { size: 7, col: '#c8c8c8', align: 'right' }); }); }, 'ntimetable'), { x: 3.4, y: 4.6, w: 4.4, h: 2.35, glow: true, color: 0xc0c0c0 });
    R.door('platform', 13, { label: 'На перрон', z: -5.96, col: '#2a2a2a', cond: () => !!f.eri_board, locked: E.platformLocked, fn: (G) => G.goto('eri_platform', 'start', { fade: 'fade' }) }); R.decal(sign('ПЕРРОН', 44), { x: 13, y: 4.0, z: -5.9, w: 2.0, h: 0.45, glow: true, color: 0xcccccc });
    R.door('out', -15, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'station') }); R.spawn('start', -15, -4.4);
  },
};

// ---------------- 8. перрон: кульминация ----------------
const platform: RoomDef = {
  name: 'Перрон', w: 34, d: 10, music: 'noir', amb: 'rain', step: 'stone', grade: { ...NOIR, vig: 0.8 }, camDist: 21,
  build(R, G) {
    R.room.group.userData.bg = 0x050505; fog(R, 0x0c0c0c, 16, 44); R.ambient(0x4a4a4a, 2.6, 0xd0d0d0); rainy(R, G); noirRim(R, G, 5);
    // платформа (плиты), край с жёлтой линией, ниже — путь: щебень, шпалы, рельсы
    const slab = tile('pslab', 32, (c) => { px(c, 0, 0, 32, 32, '#2a2a2c'); for (const [x, y] of [[0, 0], [16, 0], [0, 16], [16, 16]]) { px(c, x + 1, y + 1, 15, 15, hsh(x * 3 + y, 2) > 0.5 ? '#5a5a5e' : '#525256'); px(c, x + 1, y + 1, 15, 1, '#6e6e72'); } });
    ground(R, slab, 0, 7, 140, 20, 2, 0); R.box(0, -3.0, 140, 0.4, 1.3, { tex: 'concrete', tint: '#8a8a88', y: -1.3, solid: false }); R.box(0, -2.62, 140, 0.36, 0.02, { color: 0xe8c840, solid: false, cast: false });
    for (let x = -66; x <= 66; x += 1.2) R.box(x, -2.86, 0.5, 0.1, 0.02, { color: 0xe8e8e0, solid: false, cast: false });
    ground(R, tile('ballast', 32, (c) => { px(c, 0, 0, 32, 32, '#1e1e1e'); for (let i = 0; i < 80; i++) px(c, Math.floor(hsh(i, 1) * 32), Math.floor(hsh(i, 2) * 32), 2, 1, hsh(i, 3) > 0.5 ? '#4a4a4a' : '#333'); for (let y = 0; y < 32; y += 8) px(c, 0, y, 32, 3, '#3a2e26'); }), 0, -9, 140, 12, 2, -1.3);
    for (const z of [-4.1, -5.6]) R.box(0, z, 140, 0.12, 0.14, { tex: 'metal', tint: '#9a9a9a', y: -1.3, solid: false, cast: false });
    R.collider(-17, -6, 17, -2.9);
    // поезд: вагоны с освещёнными окнами, дверь в середине (туда уйдёт Лидия), крыша, тележки; паровоз справа
    const carT = canvasTex(176, 68, (c) => { px(c, 0, 0, 176, 68, '#5a5a5e'); for (let x = 0; x < 176; x += 22) { px(c, x, 3, 1, 47, '#3a3a3e'); px(c, x + 1, 3, 1, 47, '#7a7a7e'); } for (let x = 3; x < 176; x += 4) { px(c, x, 5, 1, 1, '#8a8a8e'); px(c, x, 47, 1, 1, '#8a8a8e'); } px(c, 0, 36, 176, 2, '#8a8a8a'); px(c, 0, 0, 176, 3, '#9a9a9e'); px(c, 0, 50, 176, 3, '#d8d8d0'); px(c, 0, 53, 176, 15, '#1a1a1c'); for (let x = 4; x < 172; x += 6) px(c, x, 55, 1, 1, '#5a5a5a'); for (let k = 0; k < 6; k++) { const wx = 12 + k * 26 + (k > 2 ? 14 : 0); if (k === 3) continue; px(c, wx - 1, 13, 20, 20, '#111'); px(c, wx, 14, 18, 18, '#d8d4c4'); px(c, wx, 14, 18, 4, '#f0ece0'); px(c, wx + 3, 22, 5, 10, '#5a5a56'); px(c, wx + 11, 20, 4, 12, '#7a7a76'); } px(c, 80, 10, 18, 40, '#111'); px(c, 82, 12, 14, 36, '#9a9890'); px(c, 82, 12, 14, 14, '#d8d4c4'); px(c, 88, 12, 1, 36, '#111'); ptext(c, '1', 160, 38, { size: 8, col: '#d8d8d0' }); }, 'ncar2');
    const carMat = new THREE.MeshBasicMaterial({ map: (() => { const t = carT.clone(); t.wrapS = THREE.RepeatWrapping; t.repeat.set(60 / 11, 1); t.needsUpdate = true; return t; })(), color: 0xb0b0b0 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(60, 4.2, 2.8), [L(0x4a4a4e), L(0x4a4a4e), L(0x6a6a6e), L(0x111111), carMat, L(0x4a4a4e)]); body.position.set(-3.6, 0.8, -4.85); body.castShadow = true; R.room.group.add(body);
    const roofM = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 60, 12), new THREE.MeshLambertMaterial({ map: tex('metal', '#4a4a4e') })); roofM.rotation.z = Math.PI / 2; roofM.scale.set(0.35, 1, 1); roofM.position.set(body.position.x, 2.9, -4.85); R.room.group.add(roofM);
    const whT = canvasTex(16, 16, (c) => { disc(c, 8, 8, 7.5, '#111'); disc(c, 8, 8, 6.5, '#6a6a6a'); disc(c, 8, 8, 5.5, '#2a2a2a'); for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2; for (let r = 1; r < 6; r++) px(c, 8 + Math.cos(a) * r, 8 + Math.sin(a) * r, 1, 1, '#8a8a8a'); } disc(c, 8, 8, 1.5, '#b8b8b8'); }, 'nwheel');
    for (let x = -28; x <= 22; x += 11) { R.box(x, -3.55, 3.4, 0.3, 0.7, { tex: 'metal', tint: '#3a3a3a', y: -1.25, solid: false, cast: false }); for (const dx of [-1.2, 1.2]) plane(R, whT, x + dx, -1.15, -3.38, 1.1, 1.1, {}); }
    R.box(-3.6, -3.42, 60, 0.12, 0.25, { tex: 'metal', tint: '#2a2a2a', y: -1.25, solid: false, cast: false });
    for (let x = -30; x <= 24; x += 11) R.box(x + 5.5, -4.85, 0.5, 2.6, 3.6, { tex: 'metal', tint: '#1e1e1e', y: -1.0, solid: false, cast: false });
    for (const x of [-12, 0, 12]) R.light(x, 1.6, -2.2, 0xffffff, 5, 7);
    plane(R, canvasTex(16, 32, (c) => { const g = c.createLinearGradient(0, 0, 0, 32); g.addColorStop(0, 'rgba(255,250,230,.5)'); g.addColorStop(1, 'rgba(255,250,230,0)'); c.fillStyle = g; c.fillRect(0, 0, 16, 32); }, 'ndoorlight'), 16, 0.02, -1.6, 1.4, 2.4, { add: true, rx: -Math.PI / 2, opacity: 0.5 });
    // паровоз (справа, частично в кадре): котёл, труба, прожектор, пар
    const loco = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 9, 14), new THREE.MeshLambertMaterial({ map: tex('metal', '#3a3a3a') })); loco.rotation.z = Math.PI / 2; loco.position.set(31.4, 1.4, -4.85); R.room.group.add(loco);
    R.box(31.4, -4.85, 9, 2.6, 1.4, { tex: 'metal', tint: '#2a2a2a', y: -1.0, solid: false }); R.box(34, -4.85, 0.7, 0.7, 1.6, { tex: 'metal', tint: '#2a2a2a', y: 2.6, solid: false });
    steam(R, 34, -4.85, 6, 1.6); steam(R, 27, -3.4, 5, 0.8); steam(R, -6, -3.3, 5, 0.7);
    // фонарные столбы с конусами света, скамьи, багаж, вывеска пути, часы
    for (const x of [-9, 3, 14]) lampPost(R, x, 1.8);
    for (const x of [-4.5, 9.5]) { R.box(x, 3.4, 2.4, 0.6, 0.1, { tex: 'wood', y: 0.5 }); R.box(x, 3.7, 2.4, 0.1, 0.6, { tex: 'wood', y: 0.6, solid: false }); for (const sx of [-1, 1]) R.box(x + sx, 3.4, 0.1, 0.6, 0.5, { tex: 'metal', solid: false }); }
    R.box(-12, 3.8, 1.8, 1.0, 0.6, { tex: 'darkwood', tint: '#6a6a6a' }); R.box(-12, 3.8, 1.4, 0.8, 0.5, { tex: 'paper', tint: '#7a7a72', y: 0.6, solid: false }); R.sprite('suitcase', -10.8, 4.0, { scale: 1.1 });
    const ps = canvasTex(200, 28, (c) => { px(c, 0, 0, 200, 28, '#111'); c.strokeStyle = '#ccc'; c.lineWidth = 2; c.strokeRect(1, 1, 198, 26); ptext(c, 'ПУТЬ 1 · К МОРЮ · 00:00', 100, 6, { size: 15, col: '#f0f0f0', align: 'center' }); }, 'npath2'); plane(R, ps, -2, 4.3, 1.8, 4.2, 0.9, { basic: true, col: 0xc8c8c8 }); for (const sx of [-3.8, -0.2]) R.box(sx, 1.8, 0.05, 0.05, 1.0, { tex: 'metal', y: 4.75, solid: false, cast: false });
    R.particles('dust', { count: 140, top: 5, color: 0xffffff, name: 'steam' });
    // кино: контровой свет из вагона за Лидией (силуэт) и тёплый ключ для прощания
    { const gl = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ map: canvasTex(64, 64, (c) => { const g = c.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(255,250,235,1)'); g.addColorStop(0.35, 'rgba(255,245,225,.45)'); g.addColorStop(1, 'rgba(255,240,220,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); }, 'eriBackGlow'), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      gl.position.set(8.8, 2.2, -2.6); R.room.group.add(gl); R.room.named.lydGlow = gl; R.light(9.4, 2.4, -3.2, 0xfff4e0, 0, 8, { name: 'lydBack', force: true }); }
    warmRig(R, 6.6, -1.6, { col: 0xffb868, count: 110, y: 3 });
    R.actor('lydia', 8.4, -1.8, { id: 'lydia', dir: 'l' }); R.sprite('suitcase', 9.2, -1.6, { scale: 1.2 });
    const er = R.actor('erika_noir', -12, 1, { id: 'erika' }); G.follow(er);
    R.trigger(2, -5, 6, 5, platformScene); R.spawn('start', -14, 1, 'r');
  },
};
async function platformScene(G: any) {
  const ly = G.actor('lydia'), er = G.actor('erika'), nm = G.room.named, glow = nm.lydGlow, back = nm.lydBack, lm = ly.mesh.material as THREE.MeshLambertMaterial; G.unfollow(er);
  // кадр 1: низкий широкий план, Лидия силуэтом на фоне света из вагона
  G.grade({ vig: 0.9, contrast: 1.25 }); void camMove(G, { x: 4, z: -1.2, dist: 19, pitch: 0.3, yOff: 2.2 }, 1.6);
  void tween(G, 2.4, (k) => { if (glow) glow.material.opacity = 0.85 * k; if (back) back.intensity = 14 * k; lm.color.setScalar(1 - 0.62 * k); });
  await er.walkTo(5.6, -1.4, 3); er.face(ly.x, ly.z); G.player.face(ly.x, ly.z);
  // кадр 2: медленный наезд, пока Лидия рассказывает
  void camMove(G, { x: 7, z: -1.6, dist: 10.5 }, 10); await G.run(E.platform); await G.run(E.platformMask); await G.run(E.choice.slice(0, 1));
  await camMove(G, { x: 7.4, z: -1.7, dist: 8.2, pitch: 0.36, yOff: 1.9 }, 1.4); await G.run(E.choice.slice(1, 2)); await G.wait(0.9);
  // «…Спасибо»: силуэт оживает, в серый перрон приходит тёплый свет
  void tween(G, 2.2, (k) => { lm.color.setScalar(0.38 + 0.62 * k); if (glow) glow.material.opacity = 0.85 - 0.45 * k; }); void warmOn(G, { grade: { sat: 0.7, vig: 0.55, contrast: 1.08, bloom: 0.6 }, int: 14, dur: 2.6, music: 'morning' });
  await G.run(E.choice.slice(2, 4));
  // кадр 3: поезд уходит, камера медленно отъезжает
  G.sfx('bell'); void camMove(G, { x: 9, z: -1.8, dist: 17, pitch: 0.44, yOff: 1.6 }, 4.5); await ly.walkTo(16, -2.6, 2); ly.hidden = true; G.sfx('engine'); G.shake(0.2); G.flash(0.18);
  await G.run(E.choice.slice(4)); await G.wait(0.7); await G.run(G.f.eri_false ? E.endFalse : E.endTrue); await camBack(G, 0.56, 1.2, 1.4);
  G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'erika', [['THE CITY NEVER SLEEPS', 'act'], 'Эрика закрыла дело по-своему.', ['Иногда пропавший человек просто нашёл выход.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { eri_office: office, eri_street: street, eri_club: club, eri_dressing: meiRoom, eri_studio: studio, eri_collector: collector, eri_station: station, eri_platform: platform };
