// Глава Лизы, THE TOWER IS NOT A HOME. Сказка, книжная фактура, иллюстрации тушью.
// Механики: волосы как верёвка (подъём), лассо (тайминг), мост через провал, перенос груза волосами,
// противовес-лифт с недостающей шестерней; Лиза сама решает уйти из башни. Принц опаздывает.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { L } from '../data/dialogue/lisa';
import { timing } from '../ui/minigames';
import { chapterIntro, finishChapter, actOf, fog } from './common';
import { window3D, armchair } from '../world/decor3d';
import { gear as gear3D, rug } from '../world/decor';

// ---------------- акварель ----------------
/** Акварельная текстура: мягкие полупрозрачные пятна поверх зерна бумаги. */
function wc(key: string, base: string, cols: string[], w = 64, h = 64, opts: { stroke?: boolean } = {}) {
  return canvasTex(w, h, (c) => { c.fillStyle = base; c.fillRect(0, 0, w, h); let seed = key.length * 97; const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 40; i++) { const g = c.createRadialGradient(0, 0, 0, 0, 0, 1); const col = cols[i % cols.length]; g.addColorStop(0, col + 'aa'); g.addColorStop(1, col + '00'); c.save(); c.translate(rnd() * w, rnd() * h); c.scale(6 + rnd() * 14, 4 + rnd() * 10); c.fillStyle = g; c.beginPath(); c.arc(0, 0, 1, 0, 7); c.fill(); c.restore(); }
    for (let i = 0; i < w * h / 6; i++) { c.fillStyle = `rgba(${rnd() > 0.5 ? '255,250,240' : '120,100,70'},${0.05 + rnd() * 0.06})`; c.fillRect(rnd() * w, rnd() * h, 1, 1); }
    if (opts.stroke) { c.strokeStyle = 'rgba(70,50,30,.35)'; c.lineWidth = 0.6; for (let i = 0; i < 8; i++) { c.beginPath(); c.moveTo(rnd() * w, rnd() * h); c.quadraticCurveTo(rnd() * w, rnd() * h, rnd() * w, rnd() * h); c.stroke(); } }
  }, 'wc' + key);
}
const wcMat = (t: THREE.Texture, o: any = {}) => new THREE.MeshLambertMaterial({ map: t, ...o });
/** Написанный акварелью задник: небо с облаками, далёкий замок, холмы. */
function paintedBackdrop(R: Builder, z: number, w: number) {
  const sky = canvasTex(256, 128, (c) => { const g = c.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#8ab0d8'); g.addColorStop(0.55, '#e8d0c0'); g.addColorStop(1, '#f0d8a8'); c.fillStyle = g; c.fillRect(0, 0, 256, 128);
    for (let i = 0; i < 14; i++) { const gr = c.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, 'rgba(255,250,245,.75)'); gr.addColorStop(1, 'rgba(255,250,245,0)'); c.save(); c.translate((i * 53) % 256, 14 + (i * 23) % 40); c.scale(26 + (i % 4) * 8, 9 + (i % 3) * 3); c.fillStyle = gr; c.beginPath(); c.arc(0, 0, 1, 0, 7); c.fill(); c.restore(); }
    c.fillStyle = 'rgba(200,170,200,.75)'; for (const [x, h] of [[188, 26], [200, 34], [212, 22]]) { c.fillRect(x, 92 - h, 8, h); c.beginPath(); c.moveTo(x - 2, 92 - h); c.lineTo(x + 4, 92 - h - 10); c.lineTo(x + 10, 92 - h); c.fill(); }
    for (const [col, y0, a] of [['rgba(150,170,130,.8)', 96, 9], ['rgba(110,140,100,.9)', 106, 7], ['rgba(90,120,80,1)', 116, 6]] as [string, number, number][]) { c.fillStyle = col; c.beginPath(); c.moveTo(0, 128); for (let x = 0; x <= 256; x += 8) c.lineTo(x, y0 + Math.sin(x / 23 + y0) * a); c.lineTo(256, 128); c.fill(); } }, 'wcsky');
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 2), new THREE.MeshBasicMaterial({ map: sky })); m.position.set(0, w / 4 - 6, z); R.room.group.add(m);
}
/** Нарисованное дерево: несколько акварельных «облаков» кроны на стволе. */
function wcTree(R: Builder, x: number, z: number, s = 1) {
  const g = new THREE.Group(); const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * s, 0.32 * s, 2.6 * s, 7), wcMat(wc('bark', '#6a4a30', ['#4a3020', '#8a6a48']))); trunk.position.y = 1.3 * s; g.add(trunk);
  const leaf = wcMat(wc('leaf', '#6a9a58', ['#8ab868', '#4a7a48', '#c8d890', '#d8a8c8']), { flatShading: true });
  for (let i = 0; i < 7; i++) { const b = new THREE.Mesh(new THREE.IcosahedronGeometry((0.8 + (i % 3) * 0.3) * s, 1), leaf); const a = i * 0.9; b.position.set(Math.cos(a) * 0.8 * s, (2.9 + (i % 3) * 0.4) * s, Math.sin(a) * 0.5 * s); b.castShadow = true; g.add(b); }
  g.position.set(x, 0, z); R.room.group.add(g); R.collider(x - 0.35 * s, z - 0.35 * s, x + 0.35 * s, z + 0.35 * s);
}
/** Коса: объёмная лента вдоль кривой, текстура плетения растягивается по всей длине. */
const braidTex = () => { const t = canvasTex(16, 32, (c) => { for (let y = 0; y < 32; y++) { const k = (y % 8) / 8; c.fillStyle = k < 0.5 ? '#9a7450' : '#7a5a38'; c.fillRect(0, y, 16, 1); c.fillStyle = 'rgba(255,230,180,.35)'; c.fillRect(4 + Math.round(Math.sin(y / 8 * Math.PI * 2) * 3), y, 3, 1); } c.fillStyle = 'rgba(40,20,10,.25)'; c.fillRect(0, 0, 2, 32); c.fillRect(14, 0, 2, 32); }, 'braid3d'); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
function braidTube(pts: THREE.Vector3[], r = 0.22) {
  const curve = new THREE.CatmullRomCurve3(pts); const len = curve.getLength(); const geo = new THREE.TubeGeometry(curve, Math.max(16, Math.round(len * 6)), r, 8, false);
  const t = braidTex().clone(); t.needsUpdate = true; t.repeat.set(len * 1.4, 1); const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: t })); m.castShadow = true; return m;
}
/** Длинная коса волочится за Лизой по полу: лента по следу её шагов. */
function hairTrail(R: Builder, G: any, id = 'liza') {
  const trail: THREE.Vector3[] = []; let mesh: THREE.Mesh | null = null; let acc = 0;
  R.onUpdate((dt) => { const a = G.actor(id); if (!a || a.charId !== 'liza_long' || a.hidden) { if (mesh) mesh.visible = false; return; } acc += dt;
    const head = new THREE.Vector3(a.x - 0.05, 1.25, a.z - 0.12); if (!trail.length || trail[0].distanceTo(new THREE.Vector3(a.x, 0.08, a.z)) > 0.35) { trail.unshift(new THREE.Vector3(a.x, 0.08, a.z - 0.05)); if (trail.length > 26) trail.pop(); }
    if (acc < 0.12) return; acc = 0; const pts = [head, new THREE.Vector3(a.x - 0.1, 0.45, a.z - 0.25), ...trail.slice(1).map((p, i) => new THREE.Vector3(p.x + Math.sin(i * 1.3) * 0.15, 0.08, p.z - 0.3))];
    if (pts.length < 3) pts.push(new THREE.Vector3(a.x - 0.8, 0.08, a.z - 0.6), new THREE.Vector3(a.x - 2, 0.08, a.z - 0.4));
    if (mesh) { R.room.group.remove(mesh); mesh.geometry.dispose(); } mesh = braidTube(pts, 0.16); R.room.group.add(mesh); });
}

const BOOK = { sat: 0.9, tint: [1.06, 1.0, 0.88], vig: 0.6, bright: 0.98, bloom: 0.25, contrast: 1.05 };
function bookRoom(R: Builder, wall = 'paperstone') { R.room.group.userData.bg = 0xe8dab0; R.floor('paper', { tint: '#c8b07a' }); R.walls(wall, { h: 7 }); R.ambient(0x7a6a50, 2.0, 0xfff0d0); R.particles('dust', { count: 60, top: 6, color: 0xb89858 }); wcRoom(R, wall === 'stone'); }
/** Акварельные слои поверх стен и пола: тёплая бумага, разводы, штрихи тушью. */
function wcRoom(R: Builder, cold = false, floor = true) {
  const W = R.room.def.w, Dd = R.room.def.d; const wall = wc(cold ? 'wallc' : 'wallw', cold ? '#c8bca8' : '#e8d8c0', cold ? ['#a89c88', '#d8ccb8', '#b8b0c8'] : ['#f0c8b8', '#d8c8a0', '#c8b8d8', '#f0e0c0'], 128, 64, { stroke: true });
  const n = new THREE.Mesh(new THREE.PlaneGeometry(W, 7), new THREE.MeshLambertMaterial({ map: wall })); n.position.set(0, 3.5, -Dd / 2 + 0.015); R.room.group.add(n);
  for (const sx of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(Dd, 7), new THREE.MeshLambertMaterial({ map: wall })); m.position.set(sx * (W / 2 - 0.015), 3.5, 0); m.rotation.y = -sx * Math.PI / 2; R.room.group.add(m); }
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(W, Dd + 7), new THREE.MeshLambertMaterial({ map: wc(cold ? 'floorc' : 'floorw', cold ? '#a89880' : '#c8a878', cold ? ['#8a7a68', '#b8a890'] : ['#a8885a', '#d8b888', '#b89868'], 128, 128, { stroke: true }) })); fl.rotation.x = -Math.PI / 2; fl.position.set(0, 0.012, 3.5); fl.receiveShadow = true; if (floor) R.room.group.add(fl);
}
const ink = (R: Builder, text: string, x: number, y: number, w = 6) => R.decal(canvasTex(Math.round(w * 16), 14, (c) => ptext(c, text, Math.round(w * 8), 2, { size: 9, col: '#3a2a14', align: 'center', font: '"Marck Script", cursive' }), 'ink' + text), { x, y, w, h: 0.9 });
const lizaNPC = (R: Builder, G: any, x: number, z: number) => { const a = R.actor('liza_long', x, z, { id: 'liza' }); G.follow(a); return a; };

const base: RoomDef = {
  card: (G) => G.f.intro_liz ? null : [[actOf(G), 'act'], ['THE TOWER IS NOT A HOME', 'big'], ['сказка · тушь и акварель · с мотивами «Рапунцель»', 'sm']],
  name: 'Подножие башни', chapter: 'Акт II · Лиза', w: 30, d: 12, music: 'fairy', amb: 'wind', step: 'grass', grade: BOOK,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xe8dab0; R.floor('grass', { tint: '#9ab060' }); R.floor('dirt', { w: 4, d: 12, x: 4, y: 0.01, tint: '#c8a070' }); R.ambient(0x6a6040, 1.6, 0xfff4d8); R.sun(0xfff0d0, 1.8, -6, 14, 8);
    R.particles('petals', { count: 50, top: 8, color: 0xd8b0d0 });
    { const twr = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.8, 15, 24), wcMat(wc('stone', '#d8c8b0', ['#b8a890', '#e8dcc8', '#a89880', '#c8b8d0'], 64, 64, { stroke: true }))); twr.position.set(4, 7.5, -3.6); twr.castShadow = true; R.room.group.add(twr); R.collider(1.4, -6.2, 6.6, -1.0);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(3.4, 4.2, 24), wcMat(wc('roof', '#5a7ab8', ['#4a6aa0', '#7a9ad0', '#3a5a90']))); roof.position.set(4, 17.1, -3.6); R.room.group.add(roof);
      const box = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 0.5), wcMat(wc('wood', '#8a6a48', ['#6a4a30', '#a8885a']))); box.position.set(4, 12.4, -1.1); R.room.group.add(box); for (let i = 0; i < 5; i++) { const fl = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 5), new THREE.MeshLambertMaterial({ color: [0xe84a6f, 0xf2c230, 0xd8a8f0][i % 3] })); fl.position.set(3.2 + i * 0.4, 12.75, -1.05); R.room.group.add(fl); }
      for (let i = 0; i < 6; i++) { const ivy = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), wcMat(wc('leaf', '#6a9a58', ['#8ab868', '#4a7a48', '#c8d890', '#d8a8c8']), { flatShading: true })); const a = -0.6 + i * 0.25; ivy.position.set(4 + Math.sin(a) * 2.6, 1 + i * 1.7, -3.6 + Math.cos(a) * 2.55); R.room.group.add(ivy); } }
    R.decal(canvasTex(16, 20, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 16, 20); c.fillStyle = '#f0d0a0'; c.fillRect(2, 2, 12, 16); c.fillStyle = '#3a2a14'; c.fillRect(7, 2, 2, 16); }, 'twin2'), { x: 4, y: 10, z: -1.55, w: 1.6, h: 2 });
    if (f.liz_hair) R.room.group.add(braidTube([new THREE.Vector3(4, 12.2, -1.0), new THREE.Vector3(4.3, 9, -0.8), new THREE.Vector3(4.1, 5, -0.7), new THREE.Vector3(4.4, 1.5, -0.6), new THREE.Vector3(4.8, 0.1, 0.4), new THREE.Vector3(5.8, 0.08, 1.2), new THREE.Vector3(7, 0.08, 0.8)], 0.3));
    fog(R, 0xf0e0c8, 40, 120); paintedBackdrop(R, -40, 140); { const mead = new THREE.Mesh(new THREE.PlaneGeometry(160, 60), new THREE.MeshLambertMaterial({ map: wc('meadow', '#7a9a50', ['#9ab868', '#6a9048', '#c8c880', '#c8a8c0', '#78a058'], 128, 128) })); (mead.material as any).map.repeat?.set(4, 2); mead.rotation.x = -Math.PI / 2; mead.position.set(0, 0.011, 4); mead.receiveShadow = true; R.room.group.add(mead); }
    
    R.decal(canvasTex(40, 30, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 40, 30); c.fillStyle = '#efe0b8'; c.fillRect(2, 2, 36, 26); ptext(c, 'Глава I', 20, 6, { size: 8, col: '#5a0c18', align: 'center', font: '"Marck Script", cursive' }); ptext(c, 'в которой ждут', 20, 17, { size: 6, col: '#3a2a14', align: 'center' }); }, 'chap1'), { x: -10, y: 4.2, z: -5.9, w: 3, h: 2.2 });
    for (const [x, z, s] of [[-12, -3, 1.2], [-9, 4.4, 1], [12, -3, 1.3], [13.4, 3.6, 1]] as any) wcTree(R, x, z, s);
    for (let i = 0; i < 40; i++) { const fl = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 4), new THREE.MeshLambertMaterial({ color: [0xf0e0f0, 0xe8a0c0, 0xf2d060, 0xa0c8f0][i % 4] })); fl.position.set(-14 + (i * 7.3) % 28, 0.12, -5 + (i * 3.1) % 10); R.room.group.add(fl); }
    ink(R, 'облака', -6, 8, 4); ink(R, 'башня (очень высокая)', 4, 15.4, 8);
    R.npc('fairy', -3, 1.4, { talk: ['fairy: Ждать, это искусство, милочка. Я жду принца для принцессы уже двести страниц. И ничего, держусь.'] });
    R.inter('call', 4, -0.6, { label: f.liz_hair ? 'Подняться по косе' : 'Позвать Лизу', fn: async (G) => { if (!f.liz_hair) { await G.run(L.call); f.liz_hair = 1; G.sfx('rope'); await G.rebuild(); return; } await G.run(L.climb); G.sfx('rope'); await G.goto('liz_top', 'start', { fade: 'page' }); } });
    R.spawn('start', -12, 3, 'r'); R.spawn('ground', 4, 1.4);
  },
  async enter(G) { if (!G.f.intro_liz) { G.f.intro_liz = 1; true } if (G.f.intro_liz === 1 && (G.f.intro_liz = 2)) await G.run(L.arrive); },
};
const top: RoomDef = {
  name: 'Покои принцессы', w: 16, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: BOOK,
  build(R, G) {
    const f = G.f; bookRoom(R); R.light(0, 5, 0, 0xfff0d0, 14, 12); R.light(-5, 3, -3, 0xffe0a0, 6, 8);
    R.decal(canvasTex(16, 22, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 16, 22); c.fillStyle = '#9cc2ee'; c.fillRect(2, 2, 12, 18); c.fillStyle = '#fff'; c.fillRect(4, 4, 4, 3); }, 'lwin'), { x: -4, y: 3.4, w: 2, h: 2.8, glow: true });
    hairTrail(R, G); rug(R, 0, 1, 7, 4, { col: '#6a4a7a', border: '#e8c36a' }); window3D(R, -4, { wall: 'n', y: 3.2, w: 2, h: 2.8, night: false, curtains: true }); armchair(R, -5.4, 1.8, { col: 0xb58ad0, ry: 0.5 });
    R.box(4.6, -3, 3, 2, 0.8, { tex: 'velvet', tint: '#b58ad0' }); R.box(4.6, -3.9, 3, 0.3, 2.2, { tex: 'darkwood' }); for (const sx of [3.2, 6.0]) R.box(sx, -2.1, 0.15, 0.15, 3.2, { tex: 'darkwood', solid: false }); R.box(4.6, -3, 3.2, 2.2, 0.1, { tex: 'velvet', tint: '#d8b8e8', y: 3.2, solid: false }); { const sp = new THREE.Group(); const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.05, 6, 20), new THREE.MeshLambertMaterial({ color: 0x8a6a48 })); wheel.position.y = 1.2; sp.add(wheel); const st = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.3), new THREE.MeshLambertMaterial({ color: 0x8a6a48 })); st.position.y = 0.25; sp.add(st); sp.position.set(6.4, 0, 2.6); R.room.group.add(sp); R.onUpdate((dt) => { wheel.rotation.z += dt * 0.8; }); R.collider(5.9, 2.3, 6.9, 2.9); }
    R.decal(canvasTex(18, 24, (c) => { c.fillStyle = '#d4ae48'; c.fillRect(0, 0, 18, 24); c.fillStyle = '#c8d8e8'; c.fillRect(2, 2, 14, 20); }, 'lmirror'), { x: 1, y: 2.6, w: 1.4, h: 1.9 });
    R.look('mirror', 1, -4, 'Зеркальце', L.mirror, { mask: 'none', egg: 'mirror_tale' }); R.look('mirrorC', 1, -4, 'Зеркальце', L.mirror, { mask: 'comedy', egg: 'mirror_tale' }); R.look('mirrorT', 1, -4, 'Зеркальце', L.mirror, { mask: 'tragedy' }); R.look('mirrorDr', 1, -4, 'Зеркальце', L.mirrorDr, { mask: 'drama' });
    // люстра с ключом
    R.box(-1, 0, 2.4, 2.4, 0.2, { tex: 'gold', y: 5.6, solid: false }); R.box(-1, 0, 0.1, 0.1, 1.2, { color: 0x86641c, y: 5.8, solid: false });
    for (const dx of [-1, 0, 1]) R.sprite('candle', -1 + dx, 0, { y: 5.8, glow: true });
    if (!G.has('tower_key')) R.sprite('key', -0.4, 0.4, { y: 5.0, scale: 1.4, name: 'keySpr', glow: true });
    R.inter('lasso', -1, 1.4, { label: 'Ключ на люстре', cond: () => !G.has('tower_key'), fn: async (G) => { await G.run(L.lassoAsk); const r = await timing({ title: 'Лассо из косы', sub: 'Лиза бросает, скажи «сейчас!»', zone: 0.2, speed: 1.1 }); if (r === 'miss') { G.sfx('crash'); return G.run(L.lassoMiss); } G.sfx('rope'); G.room.named.keySpr.visible = false; G.give('tower_key'); await G.run(L.lassoOk); } });
    R.door('down', 5.6, { label: 'Дверь вниз', z: -4.96, col: '#6a4a2a', cond: () => G.has('tower_key'), locked: ['~: Заперто. Ключ, на люстре.'], fn: async (G) => { await G.run(L.door); G.sfx('door'); await G.goto('liz_mid', 'start', { fade: 'page' }); } });
    lizaNPC(R, G, -2.6, 1.6); R.spawn('start', -4, 2.4, 'b');
  },
  async enter(G) { if (!G.f.liz_top) { G.f.liz_top = 1; await G.run(L.top); } },
};
const mid: RoomDef = {
  name: 'Механизм башни', w: 28, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: { ...BOOK, tint: [1.02, 0.98, 0.9] },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x1a1208; R.floor('paper', { tint: '#c8b07a', x: -8.5, w: 11 }); R.floor('paper', { tint: '#c8b07a', x: 7.5, w: 13 }); R.walls('stone', { h: 7 }); R.ambient(0x7a6a50, 2.2, 0xfff0d0); wcRoom(R, true, false); R.particles('dust', { count: 60, top: 6, color: 0xb89858 }); R.light(-8, 4, -1, 0xffe0b0, 12, 12); R.light(8, 4, -1, 0xffe0b0, 12, 12);
    // провал
    R.box(-1, 0, 4, 10, 0.1, { color: 0x3a6aa0, emissive: 0x18304a, solid: false, y: -2.2 }); R.light(-1, -1, 0, 0x6aa0e0, 6, 5); for (const x of [-3, 1]) R.box(x, 0, 0.1, 10, 3, { tex: 'stone', y: -3, solid: false, cast: false }); R.collider(-3, -5, 1, -1.1); R.collider(-3, 1.1, 1, 5); const mid = R.collider(-3, -1.1, 1, 1.1); mid.on = !f.liz_bridge;
    R.box(1.4, -4.4, 0.3, 0.3, 0.3, { tex: 'metal', y: 2 }); R.sprite('hook', 1.5, -4.2, { y: 1.6, scale: 1.4 });
    if (f.liz_bridge) { R.room.group.add(braidTube([new THREE.Vector3(-3.4, 0.25, -0.3), new THREE.Vector3(-1, 0.05, -0.3), new THREE.Vector3(1.4, 0.25, -0.3)], 0.32)); R.room.group.add(braidTube([new THREE.Vector3(-3.4, 0.25, 0.4), new THREE.Vector3(-1, 0.05, 0.4), new THREE.Vector3(1.4, 0.25, 0.4)], 0.32)); }
    gear3D(R, -6, 4.2, -4.6, 1.6, { speed: 0.3 }); gear3D(R, -3.6, 5.2, -4.7, 1, { speed: -0.5, teeth: 10 }); gear3D(R, 4.4, 4.6, -4.6, 1.4, { speed: 0.2 }); hairTrail(R, G);
    R.inter('gap', -3.8, 0, { label: f.liz_bridge ? 'Мост из косы' : 'Провал', fn: async (G) => { if (f.liz_bridge) return G.run(['liza_long: Не наступай на пробор!']); await G.run(L.gap); await G.run(L.bridge); G.sfx('rope'); f.liz_bridge = 1; await G.rebuild(); } });
    // шестерня и гиря
    if (!G.has('gear') && !f.liz_gear) { R.sprite('gear', -9, -3, { scale: 1.3, name: 'gearSpr' }); R.inter('gear', -9, -2.2, { label: 'Груда шпилек', fn: async (G) => { await G.run(L.gearGot); G.give('gear'); G.room.named.gearSpr.visible = false; } }); }
    if (!G.has('weight') && !f.liz_weight) { R.sprite('weight', -11, 2, { scale: 1.6, name: 'wSpr' }); R.inter('weight', -11, 2.8, { label: 'Тяжёлая гиря', fn: async (G) => { await G.run(L.weightGot); G.give('weight'); G.room.named.wSpr.visible = false; } }); }
    // лифт
    R.box(8, -1, 4, 4, 0.3, { tex: 'wood', solid: false }); for (const [x, z] of [[6.2, -2.8], [9.8, -2.8]]) R.box(x, z, 0.2, 0.2, 6, { tex: 'darkwood' });
    R.sprite('wheel', 8, -2.9, { y: 4.4, scale: 1.8 }); R.box(11.6, -1, 1.2, 1.2, 0.4, { tex: 'metal' }); if (f.liz_weight) R.sprite('weight', 11.6, -1, { y: 0.4, scale: 1.4 });
    R.inter('lift', 8, 0.4, { label: 'Лифт-противовес', fn: async (G) => {
      if (G.has('gear')) { G.take('gear'); f.liz_gear = 1; G.sfx('gear'); } if (G.has('weight')) { G.take('weight'); f.liz_weight = 1; G.sfx('crash'); }
      if (!f.liz_gear || !f.liz_weight) { if (!f.liz_seen_lift) { f.liz_seen_lift = 1; await G.run(L.gearHole); } await G.rebuild(); return G.run(L.liftNeed(!!f.liz_gear, !!f.liz_weight)); }
      await G.run(L.liftReady); G.sfx('gear'); G.shake(0.2); await G.goto('liz_ground', 'start', { fade: 'page' }); } });
    lizaNPC(R, G, -10.8, -1); R.spawn('start', -12, -1, 'r');
  },
};
const ground: RoomDef = {
  name: 'Нижний ярус', w: 26, d: 11, music: 'fairy', amb: 'wind', step: 'stone', grade: BOOK,
  build(R, G) {
    const f = G.f; bookRoom(R, 'stone'); R.light(0, 4, 0, 0xfff0d0, 16, 14); hairTrail(R, G); rug(R, 0, 1.4, 8, 4, { col: '#5a3a5a', border: '#e8c36a' });
    R.door('exit', 0, { label: f.liz_cut ? 'Наружу' : 'Дверь «Только принцам»', col: '#6a4a2a', w: 3.2, h: 4.4, sign: 'ПРИНЦАМ', cond: () => !!f.liz_cut, locked: ['liza_long: С этими волосами я не пролезу. Но сначала, поговорим с Феей.'], fn: outside });
    ink(R, 'ВЫХОД ТОЛЬКО ПРИНЦАМ', 0, 5.5, 8);
    R.npc('fairy', 4, -1.4, { talk: async (G: any) => { if (f.liz_cut) return G.run(['fairy/worried: Ох. Ох-ох. Двести страниц ожидания, и ради чего? Ради… ради прекрасной стрижки, вообще-то. Тебе идёт.']); await groundScene(G); } });
    R.sprite('basket', 5, -0.6, { scale: 1.2 });
    if (f.liz_cut) R.box(-2, -3, 3, 1.4, 0.3, { color: 0x8c6a45, solid: false });
    const lz = R.actor(f.liz_cut ? 'liza_short' : 'liza_long', -2, 1, { id: 'liza' }); G.follow(lz); R.spawn('start', -6, 2, 'r');
  },
  async enter(G) { if (!G.f.liz_gr) { G.f.liz_gr = 1; await groundScene(G); } },
};
async function groundScene(G: any) {
  if (G.f.liz_cut) return; await G.run(L.ground); await G.run(L.choice); G.sfx('snip'); await G.run(L.cut.slice(0, 1)); G.f.liz_cut = 1; G.actor('liza').setChar('liza_short'); G.sfx('snip'); await G.run(L.cut.slice(1)); await G.rebuild();
}
async function outside(G: any) {
  await G.goto('liz_base', 'ground', { fade: 'page' }); const B = new (await import('../world/room')).Builder(G.room, G);
  const lz = B.actor('liza_short', 5.4, 1.6, { id: 'liza2' }); lz.face(-10, 2); G.room.actors.find((a: any) => a.id === 'fairy')!.hidden = true;
  const horse = B.sprite('horse', -18, 3, { scale: 1.6 }); const pr = B.actor('prince', -18, 3.2, { id: 'prince' }); pr.y = 0.9; G.focus(-2, 2, 22);
  await G.wait(0.4); G.sfx('engine'); const t0 = performance.now();
  await new Promise<void>((res) => { const tick = () => { const k = Math.min(1, (performance.now() - t0) / 1800); horse.position.x = -18 + k * 16; pr.x = horse.position.x; if (k < 1) requestAnimationFrame(tick); else res(); }; tick(); });
  pr.face(lz.x, lz.z); await G.run(L.prince); G.unfocus(); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'liza', [['THE TOWER IS NOT A HOME', 'act'], 'Лиза вышла сама. Принц опоздал, спасать было некого.', ['Не всякая башня, дом. Даже если она очень красивая.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { liz_base: base, liz_top: top, liz_mid: mid, liz_ground: ground };
