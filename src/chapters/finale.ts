// Акты V–VII. Гримёрка Аллы Евы → обрушение театра → мюзикл THE QUEEN'S LAST CURTAIN → эпилог.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { rug, chandelier, dressTex, clutterTex } from '../world/decor';
import { window3D, sofa } from '../world/decor3d';
import { F } from '../data/dialogue/finale';
import { fog } from './common';
import { rhythm, sequence } from '../ui/minigames';
import { ROLES, hallShell } from './hub';
import { pWardrobe, pxTex, rr, hsh, layer, settleTex } from './hubplus';
import { CHARS } from '../data/chars';

const FRIENDS = ['polina', 'ruben', 'matvey', 'erika', 'liza', 'angelina'];
const FCHAR: Record<string, string> = { polina: 'polina_coat', ruben: 'ruben', matvey: 'matvey', erika: 'erika', liza: 'liza_short', angelina: 'angelina' };
const FAMILY = ['natasha', 'sasha', 'maxim', 'nastya', 'vasya', 'sofa', 'katya'];
const TROUPE = ['vasilisa', 'dana', 'nina', 'anya', 'olya'];
const lyricRun = async (G: any, lines: { t: number; text: string; who?: string }[], total: number) => { let t = 0; for (const l of lines) { await G.wait(l.t - t); t = l.t; G.ui.lyric(l.text, l.who); } await G.wait(Math.max(0, total - t)); G.ui.lyric(null); };
const tween = (G: any, dur: number, fn: (k: number) => void) => new Promise<void>((res) => { if (G.fast) { fn(1); return res(); } let t = 0; const tick = () => { if (!G.paused) t += 1 / 60; const k = Math.min(1, t / dur); fn(k); if (k < 1) requestAnimationFrame(tick); else res(); }; tick(); });

// ---------- АКТ V ----------
const diva: RoomDef = {
  name: 'Гримёрка примы', chapter: 'Акт V · Гримёрка', w: 18, d: 11, music: 'dressing', amb: 'hall', step: 'carpet', grade: { tint: [1.08, 0.94, 0.92], vig: 0.45, sat: 0.95 },
  build(R, G) {
    R.floor('parquet', { tint: '#7a4a3a' }); R.walls('wallpaper', { h: 6.5, tint: '#8a2a34', trim: 'gold' }); R.ambient(0x4a3030, 2.0, 0xffd8c8); R.particles('dust', { count: 60, top: 5 });
    rug(R, 0, 0.6, 9, 5, { col: '#3a0a14', border: '#d4ae48' }); chandelier(R, -3, 5.9, 2.6, 0.8, { light: 9 });
    window3D(R, -6, { wall: 'n', y: 3.2, w: 2, h: 3, night: true, curtains: true }); pWardrobe(R, 6.8, -4.6, { w: 2.6, h: 3.2, d: 1.0, wood: '#a86a48', mirror: true });
    for (let i = 0; i < 6; i++) R.sprite(dressTex(i), 3.6 + i * 0.5, 3.8, { scale: 1.2 }); R.box(4.85, 3.8, 3.4, 0.08, 0.08, { tex: 'gold', y: 2.4, solid: false }); R.collider(3.2, 3.5, 6.6, 4.1);
    sofa(R, -5.8, 3.2, { w: 2.8, col: 0x8a1a2a, ry: Math.PI });
    // туалетный столик с зеркалом в лампочках; в зеркале настоящее отражение Вари
    const MX = 1, MY = 3.3, MW = 4.2, MH = 3.0, MZ = -5.38; R.table(MX, -4.6, 4.6, 1.0, { tex: 'darkwood' });
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(MW, MH), new THREE.MeshLambertMaterial({ map: pxTex(32, 24, (c) => { rr(c, 0, 0, 32, 24, '#7a8898'); for (let i = 0; i < 32; i += 6) rr(c, i, 0, 2, 24, '#8a98a8'); rr(c, 3, 0, 1, 24, '#c8d4e0'); rr(c, 22, 0, 3, 24, '#98a6b6'); rr(c, 0, 20, 32, 4, '#6a5a58'); }, 'divaGlass'), emissive: 0x3a3438 })); glass.position.set(MX, MY, MZ); R.room.group.add(glass);
    const gold = new THREE.MeshLambertMaterial({ map: tex('gold') }); for (const [w, h, x, y] of [[MW + 0.4, 0.2, MX, MY + MH / 2 + 0.1], [MW + 0.4, 0.2, MX, MY - MH / 2 - 0.1], [0.2, MH, MX - MW / 2 - 0.1, MY], [0.2, MH, MX + MW / 2 + 0.1, MY]] as number[][]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.12), gold); b.position.set(x, y, MZ + 0.04); R.room.group.add(b); }
    const bulb = new THREE.MeshBasicMaterial({ map: pxTex(6, 6, (c) => { rr(c, 1, 0, 4, 6, '#ffd890'); rr(c, 0, 1, 6, 4, '#ffd890'); rr(c, 1, 1, 3, 3, '#fff8e0'); rr(c, 2, 2, 1, 1, '#ffffff'); }, 'divaBulb'), transparent: true, alphaTest: 0.3 }); for (let k = 0; k < 7; k++) for (const sx of [-1, 1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), bulb); b.position.set(MX + sx * (MW / 2 + 0.1), MY - MH / 2 + 0.2 + k * (MH - 0.4) / 6, MZ + 0.12); R.room.group.add(b); }
    for (const dx of [-2, 2]) R.light(MX + dx, 3.4, -4.4, 0xffd9a0, 4, 7, { flicker: 0.1 });
    const clip = [new THREE.Plane(new THREE.Vector3(1, 0, 0), -(MX - MW / 2)), new THREE.Plane(new THREE.Vector3(-1, 0, 0), MX + MW / 2), new THREE.Plane(new THREE.Vector3(0, 1, 0), -(MY - MH / 2)), new THREE.Plane(new THREE.Vector3(0, -1, 0), MY + MH / 2)];
    const refl = R.actor(G.player?.charId || 'varya', MX, MZ + 0.03, { id: 'refl', dir: 'f' }); refl.shadow.visible = false; (refl.mesh.material as THREE.Material).clippingPlanes = clip;
    R.onUpdate(() => { const p = G.player; if (!p) return; if (refl.charId !== p.charId) { refl.setChar(p.charId); (refl.mesh.material as THREE.Material).clippingPlanes = clip; }
      const dist = Math.max(0.5, p.z - MZ); const sc = Math.max(0.55, 1 - dist * 0.04); refl.group.scale.setScalar(sc); refl.x = MX + (p.x - MX) * 0.85; refl.z = MZ + 0.03; refl.y = MY - MH / 2 - 0.4 + Math.min(1.2, dist * 0.08);
      refl.dir = p.dir === 'b' ? 'f' : p.dir === 'f' ? 'b' : p.dir === 'l' ? 'l' : 'r'; refl.moving = p.moving; refl.pose = p.pose; refl.hidden = p.hidden; refl.shadow.visible = false; });
    R.sprite('bouquet', -0.8, -4.6, { y: 1.15, scale: 1.2 }); for (let i = 0; i < 4; i++) R.sprite(clutterTex(['bottle', 'powder', 'brushes', 'perfume'][i]), 1.6 + i * 0.4, -4.7, { y: 1.15, scale: 0.85 });
    for (let i = 0; i < 5; i++) R.poster(['ЧАЙКА', 'ГАМЛЕТ', 'САД', 'ЛЕДИ', 'КОРОЛЕВА'][i], 'АЛЛА ЕВА', { x: -8.97, wall: 'w', at: -3.6 + i * 1.7, y: 3 + (i % 2) * 0.6, w: 1.2, h: 1.7 });
    R.actor('alla', 1, -3.3, { id: 'alla', dir: 'b', pose: 'sit' });
    R.spawn('start', -6, 3, 'b');
  },
  async enter(G) {
    if (G.f.diva_done) return; G.focus(0, -2, 15); await G.run(F.divaIn); const al = G.actor('alla'); al.pose = null; al.dir = 'f'; await G.run(F.diva1);
    // ссора: свет мигает, красные пульсации, сердцебиение, тревожная тема
    G.audio.music('fin_argue', { restart: true }); let argue = true; let pulse = 0; G.room.updaters.push((dt: number, t: number) => { if (!argue) return; pulse -= dt; for (const fl of G.room.flick) fl.l.intensity = fl.base * (0.4 + Math.abs(Math.sin(t * 9 + fl.base)) * (Math.random() < 0.06 ? 0 : 1)); if (pulse < 0) { pulse = 1.1 + Math.random(); G.sfx('heart'); G.grade({ tint: [1.35, 0.8, 0.82], vig: 0.9, contrast: 1.2, glitch: Math.random() < 0.3 ? 0.4 : 0 }); setTimeout(() => G.grade({ tint: [1.1, 0.9, 0.9], vig: 0.75, glitch: 0 }), 260); } });
    await G.run(F.diva2); G.shake(0.3); await G.run(F.diva3); argue = false; G.grade({ tint: [1.0, 0.94, 1.02], vig: 0.6, contrast: 1, glitch: 0 }); G.audio.music('dressing');
    await G.run(F.diva4.slice(0, 1)); G.note('n_diva');
    // ссора возвращается: Алла срывается и убегает, стена гримёрки отваливается в белую пустоту
    G.audio.music('fin_argue', { restart: true }); G.grade({ tint: [1.3, 0.82, 0.84], vig: 0.9, contrast: 1.2 }); await G.run(F.quarrel.slice(0, -2)); G.sfx('heart'); G.shake(0.4);
    await G.run(F.quarrel.slice(-2, -1)); await al.walkTo(-6, 4.4, 5); al.hidden = true; G.sfx('door'); G.shake(0.8); G.sfx('crash'); G.flash(0.9); await G.run(F.quarrel.slice(-1));
    G.f.diva_done = 1; G.unfocus(); if (G.state.mask) G.setMask(G.state.mask);
    await G.ui.card([['АКТ VI', 'act'], ['THE COLLAPSE', 'big'], ['без друзей · за ней одной', 'sm']]); await G.goto('fin_void', 'start', { fade: 'flash' });
  },
};
// ---------- АКТ VI: белая пустота за театром ----------
const PATH: [number, number][] = []; for (let x = -36; x <= 33; x += 1.5) PATH.push([x, Math.sin(x * 0.09) * 2.2 + Math.sin(x * 0.27) * 0.6]);
const voidRoom: RoomDef = {
  name: 'За театром', chapter: 'Акт VI · Обрушение', w: 84, d: 14, music: 'fin_argue', amb: 'wind', step: 'wood', grade: { sat: 0.7, tint: [0.95, 1.0, 1.08], vig: 0.15, bright: 1.12, bloom: 0.9, contrast: 0.95 }, noMasks: true, camDist: 22,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xdcebf8; fog(R, 0xe8f2fc, 18, 60); R.ambient(0xc8d8f0, 3.4, 0xffffff); R.sun(0xffffff, 1.4, 6, 18, 10); R.particles('dust', { count: 200, top: 10, color: 0xffffff });
    const wood = new THREE.MeshLambertMaterial({ map: tex('wood', '#c8a078') }); const planks: { m: THREE.Mesh; x: number; z: number; gone: boolean; vy: number }[] = [];
    for (const [x, z] of PATH) { const m = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.18, 2.4), wood); m.position.set(x, -0.09, z); m.rotation.y = (Math.sin(x * 3.7) * 0.05); m.receiveShadow = true; m.castShadow = true; R.room.group.add(m); planks.push({ m, x, z, gone: false, vy: 0 }); }
    // последний островок
    const isl = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.2, 0.3, 10), wood); isl.position.set(37.5, -0.15, 0); R.room.group.add(isl); R.box(38.6, -1, 0.7, 0.7, 0.5, { tex: 'velvet', solid: false }); R.box(36.4, -1.6, 0.2, 0.2, 2.6, { tex: 'metal', solid: false }); R.spot(36.4, 2.8, -1.6, 38, 0, 0xfff4e0, 30, { angle: 0.35, cone: 0.05, shadow: false });
    // обломки театра плывут вверх в пустоте
    const debris: THREE.Object3D[] = []; const kinds = ['chair', 'masks', 'bust', 'lantern', 'bouquet', 'book', 'umbrella', 'marionette'];
    for (let i = 0; i < 26; i++) { const sp = R.sprite(kinds[i % kinds.length], -38 + i * 3.1, (i % 2 ? -6 : 6) + Math.sin(i) * 1.5, { y: -3 + (i % 5), scale: 1.2, thin: true }); debris.push(sp); }
    for (let i = 0; i < 12; i++) { const fr = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), new THREE.MeshLambertMaterial({ map: pxTex(16, 22, (c) => { rr(c, 0, 0, 16, 22, '#b08a2c'); rr(c, 0, 0, 16, 1, '#f0d478'); rr(c, 0, 0, 1, 22, '#f0d478'); rr(c, 15, 0, 1, 22, '#6a4a14'); rr(c, 2, 2, 12, 18, ['#c8d8e8', '#3a2a3a', '#d8c8a0'][i % 3]); if (i % 3 === 1) { rr(c, 6, 5, 4, 4, '#d8a888'); rr(c, 5, 9, 6, 9, '#8e1830'); } if (i % 3 === 0) rr(c, 4, 3, 2, 15, '#ffffff'); if (i % 3 === 2) { rr(c, 2, 13, 12, 7, '#7aa86a'); rr(c, 9, 4, 3, 3, '#f4ecc0'); } }, 'voidFrame' + (i % 3)), side: THREE.DoubleSide, transparent: true, opacity: 0.9 })); fr.position.set(-34 + i * 6, -2 + (i % 3) * 2, i % 2 ? -7 : 7); R.room.group.add(fr); debris.push(fr); }
    let safe = { x: PATH[0][0], z: PATH[0][1] }; let cue = 0; let still = 0;
    const al = R.actor('alla', -28, PATH[5][1], { id: 'alla', dir: 'r' });
    R.onUpdate((dt, t) => {
      const p = G.player; if (!p) return;
      debris.forEach((d, i) => { d.position.y += dt * (0.25 + (i % 4) * 0.08); d.rotation.z += dt * 0.1 * (i % 2 ? 1 : -1); if (d.position.y > 9) d.position.y = -5; });
      // доски за спиной отрываются
      for (const pl of planks) { if (!pl.gone && pl.x < p.x - 4.5) { pl.gone = true; G.sfx('creak'); } if (pl.gone) { pl.vy -= dt * 6; pl.m.position.y += pl.vy * dt; pl.m.rotation.x += dt * 0.8; pl.m.rotation.z += dt * 0.4; if (pl.m.position.y < -30) pl.m.visible = false; } }
      // под ногами нет доски: падение, возврат на последнюю безопасную
      if (G.lock === 0 && !f.void_isl) { const on = planks.find((pl) => !pl.gone && Math.abs(p.x - pl.x) < 0.95 && Math.abs(p.z - pl.z) < 1.4) || (Math.hypot(p.x - 37.5, p.z) < 3.4); if (on) { if (typeof on === 'object') safe = { x: on.x, z: on.z }; } else { G.flash(0.6); G.sfx('whoosh'); p.place(safe.x, safe.z, 'r'); G.camSnap(); if (!f.void_fall) { f.void_fall = 1; G.cut(() => G.run(F.fall)); } } }
      // Алла бежит впереди, держа дистанцию, и всхлипывает на ходу
      if (!f.void_isl) { const tx = Math.min(36.8, Math.max(al.x, p.x + 9)); if (al.x < tx - 0.05) { al.x = Math.min(tx, al.x + dt * 4.2); const k = PATH.findIndex(([x]) => x >= al.x); al.z = k >= 0 ? PATH[k][1] : 0; al.moving = true; al.dir = 'r'; } else al.moving = false; al.pose = Math.sin(t * 3) > 0.7 ? 'fear' : null; }
      const n = Math.floor((p.x + 30) / 16); if (n > cue && n <= F.allaCries.length && G.lock === 0) { cue = n; G.toast(F.allaCries[n - 1].replace(/^alla: /, 'Алла Ева: '), '…'); G.sfx('gasp'); }
      if (p.x > 33.5 && !f.void_isl && G.lock === 0) { f.void_isl = 1; G.cut(() => islandScene(G)); }
      still = p.moving ? 0 : still + dt; void still;
    });
    R.spawn('start', -35, PATH[0][1], 'r');
  },
  async enter(G) { if (!G.f.void_in) { G.f.void_in = 1; await G.run(F.voidIn); G.toast('Бегите за Аллой. Доски за спиной отрываются, назад дороги нет', '→'); } },
};
async function islandScene(G: any) {
  const al = G.actor('alla'); al.place(38, 0.6, 'l'); al.pose = 'sit'; G.player.walkTo(36.6, 0.2, 3); G.focus(37.5, 0, 13); G.audio.music('fin_girl', { restart: true }); G.grade({ sat: 0.95, tint: [1.08, 1.0, 0.98], bright: 1.05, bloom: 1.0 });
  await G.run(F.island.slice(0, 3)); G.player.pose = 'sit'; await G.run(F.island.slice(3)); al.pose = null; G.player.pose = null; G.sfx('applause', { dur: 2 }); G.flash(1);
  G.unfocus(); G.f.diva_reconcile = 1; await G.ui.card([['АКТ VII', 'act'], ['THE FINAL SHOW', 'big'], ['премьера', 'sm']]); await G.goto('fin_backstage', 'start', { fade: 'curtain' });
}
// ---------- (старый маршрут обрушения оставлен для сохранений) ----------
const collapse: RoomDef = {
  name: 'Театр складывается', chapter: 'Акт VI · Обрушение', w: 62, d: 10, music: 'collapse', amb: 'wind', step: 'wood', grade: { wave: 0.35, glitch: 0.08, sat: 1.1, tint: [1.05, 0.95, 1.05], vig: 0.6 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a0610;
    const sec: [number, number, string, string][] = [[-31, -18, 'stage', 'brick'], [-12, -2, 'cobble', 'wallgreen'], [-2, 12, 'metal', 'neon'], [12, 31, 'schoolfloor', 'paperstone']];
    for (const [a, b, fl, wl] of sec) { R.floor(fl, { x: (a + b) / 2, w: b - a }); R.box((a + b) / 2, -5.2, b - a, 0.4, 6, { tex: wl, cast: false }); }
    R.ambient(0x4a3a5a, 2.2, 0xd0b0ff);
    for (const x of [-26, -8, 6, 20]) R.light(x, 4, 0, [0xffd090, 0x80a0ff, 0xff4fa0, 0xfff0d0][(x + 26) / 14 | 0] ?? 0xffd090, 14, 14);
    rainSlice(R); R.particles('petals', { count: 60, top: 7 });
    // парящий реквизит
    const fl: THREE.Object3D[] = []; [['chair', -22], ['umbrella', -10], ['slot', 0], ['lantern', 8], ['typewriter', 16], ['book', 24], ['bust', -28], ['masks', 28], ['marionette', -4], ['cam', 12]].forEach(([k, x], i) => { const s = R.sprite(k as string, x as number, -3 + (i % 3) * 1.4, { y: 2 + (i % 4), scale: 1.3, glow: true }); fl.push(s); });
    R.onUpdate((dt, t) => fl.forEach((o, i) => { o.position.y = 2.4 + Math.sin(t * 0.8 + i) * 0.8 + (i % 3); o.rotation.z = Math.sin(t * 0.5 + i) * 0.4; }));
    // A: провал, мост из косы
    R.box(-15, 0, 4, 10, 0.1, { color: 0x05030a, y: -3, solid: false }); for (const x of [-17, -13]) R.box(x, 0, 0.1, 10, 3, { tex: 'black', y: -3, solid: false });
    const gapC = R.collider(-17, -5, -13, 5); gapC.on = !f.c_gap; if (f.c_gap) R.box(-15, 0, 4.4, 1.2, 0.18, { color: 0x8c6a45, y: 0.02, solid: false });
    R.trigger(-21, -5, -18, 5, async (G) => { if (f.c_gap) return; await G.run(F.gap); G.sfx('rope'); f.c_gap = 1; await G.rebuild(); }, true);
    // B: стена-декорация (видна без Трагедии)
    R.box(-4, 0, 0.4, 10, 5.6, { tex: 'wallgreen', mask: 'none' }); R.box(-4, 0, 0.1, 10, 5.6, { color: 0x6a8ad0, opacity: 0.25, mask: 'tragedy', solid: false });
    R.trigger(-9, -5, -6, 5, (G) => G.run(F.wall), true);
    // C: ленты-лазеры
    const hit = async (G: any) => { G.sfx('error'); G.flash(0.3); await G.run(['ruben: Не на «раз». Назад, и слушай.']); G.player.place(1, 0, 'r'); G.camSnap(); };
    [3.5, 6, 8.5].forEach((x, i) => R.laser(x, -4.6, x, 4.6, { period: 1.43, duty: 0.6, phase: i * 0.48, onHit: hit, color: 0xc8203c }));
    R.trigger(0, -5, 2.5, 5, (G) => G.run(F.lasers), true);
    // D: темнота, фонари Матвея, три двери
    if (f.c_lights) for (let x = 13; x < 30; x += 2.2) R.sprite('lantern', x, -4.4, { y: 4, glow: true });
    R.light(22, 3, 0, 0xffb070, f.c_lights ? 18 : 1, 16);
    R.trigger(11, -5, 13, 5, async (G) => { if (f.c_lights) return; await G.run(F.dark); f.c_lights = 1; await G.rebuild(); }, true);
    [[22, 'A'], [25.5, 'B'], [29, 'C']].forEach(([x, k]) => { R.door('c' + k, x as number, { label: 'Дверь', col: '#3a2a1c', fn: async (G) => { if (k !== 'B') { await G.run(F.doorWrong.slice(0, 1)); G.sfx('laugh', { n: 4 }); await G.run(F.doorWrong.slice(1)); G.player.place(14, 0, 'r'); G.camSnap(); return; } await G.run(F.final); if (!G.has('marionette')) return G.run(F.finalNeed); G.sfx('note'); await G.run(F.finalOpen); await G.goto('fin_backstage', 'start', { fade: 'curtain' }); } }); R.photo('door' + k, k === 'B' ? 'Дверь с тенью' : 'Дверь без тени', x as number, -4.6); });
    const order = ['polina', 'liza', 'ruben', 'matvey', 'erika', 'angelina'];
    order.forEach((id, i) => { const a = R.actor(FCHAR[id], -30.5 + (i % 3) * 0.9, -2.6 + Math.floor(i / 3) * 4.6 + (i % 2) * 0.5, { id }); G.follow(a); });
    R.spawn('start', -28, 0, 'r');
  },
  async enter(G) { if (!G.f.c_in) { G.f.c_in = 1; await G.run(F.collapseIn); await G.run(F.callFriends); G.toast('Друзья идут за тобой. Маски, камера, коса Лизы, всё пригодится.', '✦'); } },
  async photo(G, subs) { if (subs.some((s) => s.startsWith('door'))) await G.run(F.doorsPhoto); },
};
function rainSlice(R: Builder) { const p = R.particles('rain', { count: 200, top: 8 }); R.onUpdate(() => { p.position.x = -24; p.scale.x = 0.25; }); }
// ---------- АКТ VII ----------
const backstage: RoomDef = {
  name: 'Кулисы. Премьера', chapter: 'Акт VII · Финальный спектакль', w: 20, d: 9, music: 'theater', amb: 'crowd', step: 'wood', grade: { tint: [1.05, 0.98, 0.92], vig: 0.5 },
  build(R, G) {
    R.floor('stage'); R.walls('brick', { h: 6 }); R.ambient(0x4a3830, 2.2, 0xffe0c8); R.light(0, 4, 0, 0xffd8a0, 14, 12); R.particles('dust', { count: 80, top: 5 });
    for (let x = -8; x <= 8; x += 2) R.box(x, -4.3, 0.06, 0.06, 6, { tex: 'metal', tint: '#a89070', solid: false });
    // закулисье премьеры: прислонённые декорации, стол реквизита, зеркало с лампами, пульт помрежа с сигнальной лампой, стремянка
    for (const [k, x] of [[0, -8.2], [1, -7.4]] as number[][]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.6), new THREE.MeshLambertMaterial({ map: pxTex(32, 36, (c) => { rr(c, 0, 0, 32, 36, '#8a6438'); rr(c, 1, 1, 30, 34, k ? '#d8c8e8' : '#4a8a5a'); for (let i = 0; i < 20; i++) rr(c, hsh(i + k * 9) * 28, hsh(i + 3) * 32, 4, 2, k ? '#b8a8d0' : '#2a6a3a'); if (k) { rr(c, 10, 14, 12, 21, '#c8b8d8'); rr(c, 13, 20, 6, 10, '#5a3a2a'); } }, 'fbflat' + k), side: THREE.DoubleSide })); m.position.set(x, 1.8, -4.1 + k * 0.3); m.rotation.x = -0.12; R.room.group.add(m); }
    R.table(3, -3.6, 2.4, 0.9); R.sprite('masks', 2.5, -3.6, { y: 1.15, scale: 0.8 }); R.sprite('bouquet', 3.6, -3.6, { y: 1.15, scale: 0.9 });
    R.box(-2.2, -4.25, 2.0, 0.15, 2.4, { tex: 'gold', y: 0.9, solid: false }); R.decal(pxTex(16, 20, (c) => { rr(c, 0, 0, 16, 20, '#7a8898'); rr(c, 3, 0, 1, 20, '#c8d4e0'); }, 'fbmir'), { x: -2.2, y: 2.1, z: -4.15, w: 1.7, h: 2.1, noSlot: true }); for (let k = 0; k < 5; k++) for (const sx of [-1, 1]) R.decal(pxTex(4, 4, (c) => { rr(c, 0, 0, 4, 4, '#ffe0a0'); rr(c, 1, 1, 2, 2, '#ffffff'); }, 'fbbulb'), { x: -2.2 + sx * 0.92, y: 1.2 + k * 0.45, z: -4.14, w: 0.16, h: 0.16, glow: true, noSlot: true }); R.light(-2.2, 2, -3.2, 0xffd8a0, 4, 5);
    R.box(7.6, -2.6, 0.9, 0.6, 1.1, { tex: 'darkwood' }); R.sprite(pxTex(8, 10, (c) => { rr(c, 3, 4, 2, 6, '#3a3a3a'); rr(c, 1, 0, 6, 5, '#c8203c'); rr(c, 2, 1, 3, 2, '#ff8080'); }, 'cue'), 7.6, -2.6, { y: 1.1, glow: true, scale: 1.1 }); R.light(7.6, 1.8, -2.2, 0xff4040, 2, 3, { flicker: 0.4 }); R.sprite('ladder', -9.3, -3.9, { scale: 1.2 });
    TROUPE.forEach((id, i) => R.npc(id, -6 + i * 2, -1.6 + (i % 2) * 0.8, { talk: async (G: any) => { await G.run((F.wishes as any)[id]); (G.f.wishes ||= {})[id] = 1; } })); R.actor('alla', 5, -2.6, { id: 'alla', dir: 'l' });
    R.curtain(8.6, 0, 1.4, 6, { solid: true });
    R.inter('go', 7, 1, { label: 'Выйти на сцену', fn: async (G) => { await G.goto('fin_musical', 'start', { fade: 'curtain' }); } });
    R.spawn('start', -8, 2, 'r');
  },
  async enter(G) { if (!G.f.pre_show) { G.f.pre_show = 1; await G.run(G.f.diva_reconcile ? F.troupeBack : F.preShow); G.setPlayerChar('varya'); G.toast('Девочки из труппы хотят пожелать удачи. Подойдите к каждой', '♡'); } },
};
// ---------- Премьера: тот же зал главной сцены, картонный замок ----------
type Shape = (c: CanvasRenderingContext2D, W: number, H: number) => void;
/** Плоская декорация, «нарисованная на картоне»: контур картона, мазки, распорка сзади. */
function cardFlat(R: Builder, parent: THREE.Object3D, key: string, w: number, h: number, shape: Shape, paint: Shape, x: number, z: number, o: { y?: number; holes?: Shape; brace?: boolean; pivot?: boolean } = {}) {
  const PX = 14, W = Math.round(w * PX), H = Math.round(h * PX);
  const t = canvasTex(W, H, (c) => {
    c.save(); shape(c, W, H); c.fillStyle = '#b8905c'; c.fill(); c.lineWidth = 3; c.strokeStyle = '#8a6438'; c.stroke(); c.clip(); paint(c, W, H);
    for (let i = 0; i < W * H / 60; i++) { c.fillStyle = `rgba(${Math.random() < 0.5 ? '255,250,230' : '40,20,10'},${0.04 + Math.random() * 0.05})`; c.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 6, 1); }
    c.restore(); c.save(); shape(c, W, H); c.lineWidth = 2; c.strokeStyle = 'rgba(120,84,44,.9)'; c.stroke(); c.restore();
    if (o.holes) { c.globalCompositeOperation = 'destination-out'; o.holes(c, W, H); c.globalCompositeOperation = 'source-over'; }
  }, 'card_' + key);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshLambertMaterial({ map: t, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide }));
  m.castShadow = true; m.receiveShadow = true; m.customDepthMaterial = new THREE.MeshDepthMaterial({ map: t, alphaTest: 0.5, depthPacking: THREE.RGBADepthPacking });
  const g = new THREE.Group(); g.position.set(x, o.y || 0, z); m.position.y = h / 2; g.add(m); parent.add(g);
  if (o.brace !== false) { const bm = new THREE.MeshLambertMaterial({ map: tex('wood') }); const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, h * 0.75, 0.12), bm); b.position.set(0, h * 0.33, -h * 0.22); b.rotation.x = -0.6; g.add(b); const bb = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.5), new THREE.MeshLambertMaterial({ color: 0x5a5a60 })); bb.position.set(0, 0.1, -h * 0.42); g.add(bb); }
  return g;
}
const crenel = (c: CanvasRenderingContext2D, x0: number, x1: number, y: number, s: number) => { for (let x = x0; x < x1; x += s * 2) { c.lineTo(x, y); c.lineTo(x, y - s); c.lineTo(Math.min(x1, x + s), y - s); c.lineTo(Math.min(x1, x + s), y); } };
const strokes = (c: CanvasRenderingContext2D, W: number, H: number, cols: string[], n = 40) => { for (let i = 0; i < n; i++) { c.fillStyle = cols[i % cols.length]; c.globalAlpha = 0.25; c.beginPath(); c.ellipse(Math.random() * W, Math.random() * H, 4 + Math.random() * 10, 1.5 + Math.random() * 2, Math.random() * 0.6 - 0.3, 0, 7); c.fill(); } c.globalAlpha = 1; };
function buildCastle(R: Builder, set: THREE.Group) {
  const N = R.room.named;
  // задники: ночь и день, крашеное полотно
  const sky = (key: string, night: boolean) => R.decal(canvasTex(180, 70, (c) => { const g = c.createLinearGradient(0, 0, 0, 70); if (night) { g.addColorStop(0, '#0a0c2a'); g.addColorStop(1, '#3a3a7a'); } else { g.addColorStop(0, '#6aa8e8'); g.addColorStop(1, '#f4d8a8'); } c.fillStyle = g; c.fillRect(0, 0, 180, 70); strokes(c, 180, 70, night ? ['#2a2a6a', '#50509a'] : ['#ffffff', '#a8d0f8'], 60); if (night) { c.fillStyle = '#fff4c8'; for (let i = 0; i < 70; i++) c.fillRect((i * 53) % 180, (i * 29) % 50, 1 + (i % 3 === 0 ? 1 : 0), 1); } c.fillStyle = night ? '#1a2a3a' : '#7aa86a'; c.beginPath(); c.moveTo(0, 70); for (let x = 0; x <= 180; x += 15) c.lineTo(x, 52 + Math.sin(x * 0.07) * 6); c.lineTo(180, 70); c.fill(); }, key), { x: 0, y: 5.6, z: -21.6, w: 30, h: 11.6, noSlot: true });
  N.skyN = sky('skyNight', true); N.skyD = sky('skyDay', false); N.skyD.visible = false;
  // главный замок
  cardFlat(R, set, 'castle', 15, 8.4, (c, W, H) => { c.beginPath(); c.moveTo(0, H); c.lineTo(0, 30); c.lineTo(10, 8); c.lineTo(20, 30); crenel(c, 20, 76, 50, 6); c.lineTo(76, 26); c.lineTo(105, 2); c.lineTo(134, 26); crenel(c, 134, W - 20, 50, 6); c.lineTo(W - 20, 30); c.lineTo(W - 10, 8); c.lineTo(W, 30); c.lineTo(W, H); c.closePath(); }, (c, W, H) => {
    c.fillStyle = '#d8c8e8'; c.fillRect(0, 0, W, H); c.strokeStyle = 'rgba(120,100,150,.5)'; c.lineWidth = 1; for (let y = 54; y < H; y += 8) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); for (let x = (y / 8) % 2 ? 0 : 7; x < W; x += 14) { c.beginPath(); c.moveTo(x, y); c.lineTo(x, y + 8); c.stroke(); } }
    c.fillStyle = '#c84a5a'; c.beginPath(); c.moveTo(0, 30); c.lineTo(10, 8); c.lineTo(20, 30); c.fill(); c.beginPath(); c.moveTo(W - 20, 30); c.lineTo(W - 10, 8); c.lineTo(W, 30); c.fill(); c.fillStyle = '#4a6ac8'; c.beginPath(); c.moveTo(76, 26); c.lineTo(105, 2); c.lineTo(134, 26); c.fill();
    c.fillStyle = '#c8b8d8'; c.fillRect(0, 30, 20, H); c.fillRect(W - 20, 30, 20, H); c.fillRect(80, 26, 50, H);
    c.fillStyle = '#ffd860'; for (const [x, y] of [[8, 44], [W - 12, 44], [96, 40], [110, 40], [40, 70], [64, 70], [150, 70], [174, 70]]) { c.fillRect(x, y, 5, 8); c.beginPath(); c.arc(x + 2.5, y, 2.5, Math.PI, 0); c.fill(); }
    c.fillStyle = '#5a3a2a'; c.fillRect(92, H - 40, 26, 40); c.beginPath(); c.arc(105, H - 40, 13, Math.PI, 0); c.fill(); c.strokeStyle = '#2a1a10'; for (let x = 96; x < 118; x += 5) { c.beginPath(); c.moveTo(x, H - 50); c.lineTo(x, H); c.stroke(); }
    c.fillStyle = '#e84a6f'; c.fillRect(104, -2, 1, 1); c.fillRect(105, 0, 8, 5); strokes(c, W, H, ['#ffffff', '#8a7aa8'], 80);
  }, 0, -14);
  // башня Дамы в окне, окно прорезано
  N.tower = cardFlat(R, set, 'tower', 3.6, 7.6, (c, W, H) => { c.beginPath(); c.moveTo(4, H); c.lineTo(4, 30); crenel(c, 0, W, 30, 5); c.lineTo(W - 4, 30); c.lineTo(W - 4, H); c.closePath(); }, (c, W, H) => { c.fillStyle = '#e8d8c0'; c.fillRect(0, 0, W, H); c.strokeStyle = 'rgba(140,110,80,.45)'; for (let y = 34; y < H; y += 7) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); } c.fillStyle = '#7a3a8a'; c.fillRect(14, 36, 22, 2); c.fillStyle = '#4aa860'; for (let i = 0; i < 12; i++) { c.beginPath(); c.arc(6 + (i * 13) % 40, 70 + (i * 17) % 30, 3, 0, 7); c.fill(); } c.fillStyle = '#e84a6f'; for (let i = 0; i < 6; i++) c.fillRect(8 + (i * 11) % 36, 72 + (i * 23) % 26, 2, 2); strokes(c, W, H, ['#fff', '#c8a888'], 20); },
    -7.5, -9.6, { holes: (c, W) => { c.beginPath(); c.moveTo(W / 2 - 10, 62); c.lineTo(W / 2 - 10, 46); c.arc(W / 2, 46, 10, Math.PI, 0); c.lineTo(W / 2 + 10, 62); c.fill(); } });
  // трон
  cardFlat(R, set, 'throne', 2.6, 3.4, (c, W, H) => { c.beginPath(); c.moveTo(4, H); c.lineTo(4, 14); c.lineTo(W / 2, 0); c.lineTo(W - 4, 14); c.lineTo(W - 4, H); c.closePath(); }, (c, W, H) => { c.fillStyle = '#d4ae48'; c.fillRect(0, 0, W, H); c.fillStyle = '#a3122a'; c.fillRect(9, 16, W - 18, H - 22); c.fillStyle = '#ffe890'; for (let i = 0; i < 5; i++) c.fillRect(8 + i * 5, 8, 2, 2); strokes(c, W, H, ['#fff6c0', '#8a6418'], 14); }, 0, -11.6);
  // деревья по бокам
  N.treeR = cardFlat(R, set, 'treeR', 3.2, 5.4, (c, W, H) => { c.beginPath(); c.moveTo(W / 2 - 4, H); c.lineTo(W / 2 - 4, H - 22); c.bezierCurveTo(-4, H - 20, 0, 4, W / 2, 2); c.bezierCurveTo(W, 4, W + 4, H - 20, W / 2 + 4, H - 22); c.lineTo(W / 2 + 4, H); c.closePath(); }, (c, W, H) => { c.fillStyle = '#4a9a5a'; c.fillRect(0, 0, W, H); strokes(c, W, H, ['#2a6a3a', '#8ad07a', '#3a8a4a'], 60); c.fillStyle = '#6a4a2a'; c.fillRect(W / 2 - 4, H - 24, 8, 24); }, 10.4, -7.4, { pivot: true });
  cardFlat(R, set, 'treeL', 3.2, 5.4, (c, W, H) => { c.beginPath(); c.moveTo(W / 2 - 4, H); c.lineTo(W / 2 - 4, H - 22); c.bezierCurveTo(-4, H - 20, 0, 4, W / 2, 2); c.bezierCurveTo(W, 4, W + 4, H - 20, W / 2 + 4, H - 22); c.lineTo(W / 2 + 4, H); c.closePath(); }, (c, W, H) => { c.fillStyle = '#5aa86a'; c.fillRect(0, 0, W, H); strokes(c, W, H, ['#2a6a3a', '#a8e08a', '#3a8a4a'], 60); c.fillStyle = '#6a4a2a'; c.fillRect(W / 2 - 4, H - 24, 8, 24); }, -11, -6.6);
  // дверь замка, которая падает на Шута (поворот вокруг нижнего края)
  N.door = cardFlat(R, set, 'door', 2.2, 3.4, (c, W, H) => { c.beginPath(); c.moveTo(0, H); c.lineTo(0, 14); c.arc(W / 2, 15, W / 2, Math.PI, 0); c.lineTo(W, H); c.closePath(); }, (c, W, H) => { c.fillStyle = '#8a5a34'; c.fillRect(0, 0, W, H); c.strokeStyle = '#4a2a14'; for (let x = 4; x < W; x += 6) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); } c.fillStyle = '#d4ae48'; c.fillRect(W - 9, H / 2, 4, 4); }, 2.4, -9.2, { brace: false });
  // зеркала в картонных рамах (спускаются к сцене зеркала)
  const mir = new THREE.Group(); mir.position.y = 13; set.add(mir); N.mirrors = mir;
  for (const sx of [-1, 1]) cardFlat(R, mir, 'mirror' + sx, 2.6, 4.2, (c, W, H) => { c.beginPath(); c.ellipse(W / 2, H / 2, W / 2 - 1, H / 2 - 1, 0, 0, 7); }, (c, W, H) => { c.fillStyle = '#d4ae48'; c.fillRect(0, 0, W, H); c.fillStyle = '#b8d0e8'; c.beginPath(); c.ellipse(W / 2, H / 2, W / 2 - 6, H / 2 - 6, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,255,.6)'; c.fillRect(W / 2 - 8, 12, 3, H - 30); c.fillRect(W / 2 - 3, 16, 2, H - 40); strokes(c, W, H, ['#fff6c0', '#8a6418'], 16); }, sx * 4.6, -10.8, { brace: false });
  // луна и солнце на палках, тучи на тросах
  const onStick = (key: string, col: string, sun: boolean) => { const g = new THREE.Group(); R.room.group.add(g); const fl = cardFlat(R, g, key, 2.2, 2.2, (c, W, H) => { c.beginPath(); if (sun) { for (let a = 0; a < 16; a++) { const r = a % 2 ? W / 2 - 1 : W / 2 - 6; c.lineTo(W / 2 + Math.cos(a / 16 * 6.283) * r, H / 2 + Math.sin(a / 16 * 6.283) * r); } c.closePath(); } else { c.arc(W / 2, H / 2, W / 2 - 1, 0.6, 5.7); c.arc(W / 2 + 9, H / 2, W / 2 - 5, 5.4, 0.9, true); c.closePath(); } }, (c, W, H) => { c.fillStyle = col; c.fillRect(0, 0, W, H); strokes(c, W, H, ['#ffffff', sun ? '#e89a30' : '#c8c0a0'], 16); c.fillStyle = 'rgba(60,40,20,.7)'; c.fillRect(W / 2 - 6, H / 2 - 2, 2, 2); c.fillRect(W / 2 + 2, H / 2 - 2, 2, 2); c.fillRect(W / 2 - 4, H / 2 + 5, 7, 1); }, 0, 0, { y: 3.4, brace: false }); void fl; const st = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.6, 0.1), new THREE.MeshLambertMaterial({ map: tex('wood') })); st.position.y = 2.3; g.add(st); g.position.set(6.4, -8, -10.4); return g; };
  N.moon = onStick('moon', '#f4ecc0', false); N.sun = onStick('sun', '#ffd040', true);
  N.clouds = [-5, 0.5, 6].map((x, i) => { const g = new THREE.Group(); R.room.group.add(g); cardFlat(R, g, 'cloud' + i, 4.2, 1.9, (c, W, H) => { c.beginPath(); c.moveTo(4, H - 2); for (let k = 0; k < 5; k++) c.arc(8 + k * 11, H - 10 - (k % 2) * 4, 9 + (k % 2) * 3, Math.PI, 0); c.lineTo(W - 2, H - 2); c.closePath(); }, (c, W, H) => { c.fillStyle = '#5a6078'; c.fillRect(0, 0, W, H); strokes(c, W, H, ['#8a90a8', '#3a4058'], 30); }, 0, 0, { brace: false }); const wire = new THREE.Mesh(new THREE.BoxGeometry(0.02, 8, 0.02), new THREE.MeshBasicMaterial({ color: 0x222222 })); wire.position.y = 5.8; g.add(wire); g.position.set(x, 13, -12.4 + i * 0.6); return g; });
}
const aim = (l: any, tx: number, tz: number) => { l.target.position.set(tx, 0, tz); if (l.cone) l.cone.lookAt(tx, 0, tz); };
const MARK: Record<string, [number, number]> = { erika: [-9, -5.6], polina: [-5.2, -6.6], angelina: [-2.4, -8.4], matvey: [2.4, -7.6], ruben: [6.4, -9.4], liza: [-7.5, -9.9] };
const AUD: [string, number, number][] = [['maxim', -8, 3.4], ['nastya', -6.6, 3.4], ['matvey_bro', -5.2, 3.4], ['vasya', -3.8, 3.4], ['sofa', -2.4, 3.4], ['katya', 2.4, 3.4], ['natasha', 3.8, 3.4], ['vanya', 5.2, 3.4], ['sasha', 6.6, 3.4],
  ['vasilisa', -5.2, 6.3], ['dana', -3.8, 6.3], ['nina', -2.4, 6.3], ['anya', 2.4, 6.3], ['olya', 3.8, 6.3]];
const musical: RoomDef = {
  name: "Премьера. THE QUEEN'S LAST CURTAIN", chapter: 'Акт VII · Премьера', w: 40, d: 46, music: null, amb: 'crowd', step: 'wood', grade: { vig: 0.5, bloom: 0.55 }, noMasks: true, noCamera: true, camDist: 23,
  build(R, G) {
    const N = R.room.named; R.floor('stage', { d: 23, z: -11.5 }); R.floor('carpet', { d: 23, z: 11.5, apron: 7 }); R.walls('black', { h: 11 }); N.amb = R.ambient(0x3a3038, 2.1, 0x8a7890); R.particles('dust', { count: 140, top: 9 });
    hallShell(R, { chandeliers: false });
    const set = new THREE.Group(); set.position.y = 12; R.room.group.add(set); N.set = set; buildCastle(R, set);
    // главный занавес за порталом
    const cur = new THREE.Group(); R.room.group.add(cur); N.curtain = cur; for (let x = -15; x <= 15; x += 2) { const b = R.box(x, -2.3, 2.1, 0.3, 10, { tex: 'velvet', solid: false }); R.room.group.remove(b); cur.add(b); }
    // свет: ключевой, цветные боковые, пушка из зала, фонарь Полины
    R.spot(0, 15, -1, 0, -7.5, 0xffe2b0, 90, { angle: 0.42, cone: 0.05, name: 'key' });
    R.spot(-12, 13, -2, -3, -8, 0xff6080, 36, { angle: 0.3, cone: 0.045, shadow: false, name: 'red' }); R.spot(12, 13, -2, 3, -8, 0x60d0d0, 36, { angle: 0.3, cone: 0.045, shadow: false, name: 'teal' });
    R.spot(0, 13, 20, 0, -6, 0xfff4e0, 0, { angle: 0.08, shadow: false, name: 'follow', dist: 60 });
    N.lantern = R.light(-5.2, 1.8, -6.2, 0xffc060, 0, 6);
    let follow: any = null; N.setFollow = (a: any) => { follow = a; N.follow.intensity = a ? 90 : 0; };
    N.sweep = 0; R.onUpdate((dt, t) => { if (follow) aim(N.follow, follow.x, follow.z); if (N.sweep) { aim(N.red, Math.sin(t * 1.3) * 7, -7 + Math.cos(t * 0.9) * 2); aim(N.teal, -Math.sin(t * 1.1) * 7, -7 - Math.cos(t * 1.4) * 2); } });
    N.setFollow(null);
    // зрители: семья в первом ряду, труппа в третьем
    for (const [id, x, z] of AUD) { const a = R.actor(id, x, z + 0.2, { id: 'aud_' + id, dir: 'b' }); a.pose = 'sit'; }
    // актёры за кулисами
    FRIENDS.forEach((id, i) => { const a = R.actor(FCHAR[id], i % 2 ? 15 : -15, -4.5 - i * 0.8, { id, hidden: true }); void a; });
    R.actor('queen', 15, -6, { id: 'alla', hidden: true });
    R.particles('confetti', { count: 160, top: 10, name: 'conf' }); N.conf.visible = false;
    R.spawn('start', -13, -4, 'r');
  },
  async enter(G) { try { await musicalShow(G); } catch (e: any) { console.error('SHOW', e?.message, e?.stack?.slice(0, 300)); throw e; } },
};
async function musicalShow(G: any) {
  const f = G.f, room = G.room, N = room.named, p = G.player, q = G.actor('alla'), cur = N.curtain, set = N.set;
  if (f.show_done) return;
  const P = F.play as any, A = (id: string) => G.actor(id), own = (id: string) => f['cast_' + id] !== 'assigned';
  const enterTo = async (id: string, sp = 3) => { const a = A(id), [x, z] = MARK[id]; a.hidden = false; a.place(x < 0 ? -15 : 15, z, x < 0 ? 'r' : 'l'); await a.walkTo(x, z, sp); a.dir = 'f'; };
  const lights = (k: number) => { N.key.intensity = 90 * k; N.red.intensity = 36 * k; N.teal.intensity = 36 * k; };
  // 0. За кулисой: обратная сторона сценария
  p.place(-13, -4, 'r'); G.focus(-10, -4, 13);
  await G.ui.card([['АКТ VII', 'act'], ['ПРЕМЬЕРА', 'big'], ['Главная сцена. Тот же зал, тот же скрипучий пол.', 'sm']]);
  await G.ui.paper(P.scriptBack); await G.run(P.backAfter);
  G.focus(0, 6, 26); await G.run(F.audience);
  // 1. Пролог перед занавесом
  G.focus(0, -2, 16); await p.walkTo(0, -1.1, 3); p.dir = 'f'; N.setFollow(p); await G.run(P.prologue); N.setFollow(null); await p.walkTo(-13, -4, 3.4); p.hidden = true;
  G.cam.pitch = 0.3; G.cam.yOff = 3.4;
  // 2. Увертюра: занавес вверх, замок прилетает с колосников, луна на палке
  G.audio.music('fin_overture', { restart: true }); G.focus(0, -8, 25); G.grade({ tint: [0.8, 0.86, 1.15], sat: 0.9 }); lights(0.5); G.sfx('curtain');
  const lyr = lyricRun(G, F.lyrics_over, 13); await tween(G, 4, (k) => { cur.position.y = k * 10; });
  await tween(G, 3, (k) => { set.position.y = 12 * (1 - k) * (1 - k); }); G.sfx('clunk');
  A('ruben').hidden = false; A('ruben').place(own('ruben') ? 6.4 : 4.6, -9.4, 'f'); if (own('ruben')) A('ruben').setChar('ruben_tux');
  await tween(G, 2.5, (k) => { N.moon.position.y = -8 + k * 7.6; }); await lyr;
  await G.run(own('ruben') ? P.moonOwn : P.moonAsg);
  // 3. Двор: летописец, шут, затемнение
  for (const id of ['erika', 'polina', 'angelina', 'matvey']) enterTo(id, 3.6); await G.wait(3.2);
  N.setFollow(A('erika')); await G.run(own('erika') ? P.chron1Own : P.chron1Asg);
  N.setFollow(A('matvey')); A('matvey').place(2.4, -7.9, 'f'); await G.run(own('matvey') ? P.jesterOwn.slice(0, 1) : P.jesterAsg.slice(0, 2));
  await tween(G, 0.7, (k) => { N.door.rotation.x = k * k * 1.5; }); G.sfx('crash'); A('matvey').hidden = true; G.flash(0.15);
  await G.run(own('matvey') ? P.jesterOwn.slice(1) : P.jesterAsg.slice(2)); A('matvey').hidden = false; N.door.rotation.x = 0; N.setFollow(null);
  G.sfx('switch'); G.grade({ bright: 0.18 }); lights(0); await G.run(own('polina') ? P.blackOwn.slice(0, 3) : P.blackAsg.slice(0, 2));
  if (own('polina')) { N.lantern.intensity = 14; G.grade({ bright: 0.5 }); await G.run(P.blackOwn.slice(3)); } else await G.run(P.blackAsg.slice(2));
  N.lantern.intensity = 0; G.sfx('lighton'); G.grade({ bright: 1 }); lights(1);
  // 4. Королева: хлопки в такт
  q.hidden = false; q.place(15, -6.6, 'l'); G.audio.music('fin_queen', { restart: true }); G.grade({ tint: [1.12, 0.92, 0.9], sat: 1.15 }); N.red.intensity = 70; N.setFollow(q);
  await G.run(F.queenSpeech); await q.walkTo(0, -7.4, 3); q.dir = 'f'; q.pose = 'arms'; await G.run(P.queenIn);
  G.toast('Королеве нужны аплодисменты: держи ритм', '♪');
  await rhythm({ track: 'fin_queen', part: 2, loops: 1, title: 'Хлопайте!', sub: 'зал хлопает в такт, D F J K или стрелки', lyrics: F.lyrics_queen as any, onBeat: (b) => { q.pose = b % 2 ? 'arms' : 'point'; if (b % 4 === 0) G.sfx('clap'); for (const id of FRIENDS) { const a = A(id); if (a && !a.hidden) { a.pose = 'dance'; a.danceBeat = b; } } } });
  G.sfx('applause', { dur: 3 }); q.pose = null; for (const id of FRIENDS) A(id).pose = null; N.setFollow(null); N.red.intensity = 36;
  // 5. Дама в окне
  const lz = A('liza'); lz.hidden = false; lz.place(-7.5, -9.9, 'f'); lz.y = 3.0; G.focus(-6, -8, 14); await G.run(own('liza') ? P.windowOwn.slice(0, 2) : P.windowAsg);
  if (own('liza')) { lz.z = -9.2; G.sfx('whoosh'); await tween(G, 2.2, (k) => { lz.y = 3 * (1 - k); N.tower.rotation.z = Math.sin(k * 9) * 0.05 * (1 - k); }); lz.y = 0; await lz.walkTo(-6.6, -7.2, 2); await G.run(P.windowOwn.slice(2)); }
  // 6. Девушка
  G.focus(0, -7.5, 22); G.setPlayerChar('girl'); p.hidden = false; p.place(15, -6.4, 'l'); G.audio.music('fin_girl', { restart: true }); G.grade({ tint: [1.02, 1.0, 1.04], sat: 1 }); N.setFollow(p);
  await G.run(F.girlEnter); await p.walkTo(4, -7.2, 2.4); p.dir = 'f'; q.face(p.x, p.z);
  await lyricRun(G, F.lyrics_girl, 19.5); N.setFollow(null);
  const an = A('angelina'); if (own('angelina')) { await an.walkTo(5.4, -7.2, 2.4); an.dir = 'f'; await G.run(P.duetOwn); } else { await an.walkTo(-1, -7, 2.4); an.dir = 'f'; await G.run(P.duetAsg); await an.walkTo(-2.4, -8.4, 2.4); }
  // 7. Менуэт: солнце встаёт, тёплый свет, весь двор танцует
  G.audio.music('fin_minuet', { restart: true }); N.skyN.visible = false; N.skyD.visible = true; G.sfx('whoosh'); await tween(G, 2, (k) => { N.moon.position.y = -0.4 - k * 7.6; N.sun.position.y = -8 + k * 8.2; });
  G.grade({ tint: [1.14, 1.02, 0.86], sat: 1.2, bloom: 1, vig: 0.4, bright: 1.05 }); N.key.color.set(0xffd090); N.sweep = 1; await G.run(P.minuetIn);
  const pairs: [string, number, number][] = [['alla', -1.2, -8], ['polina', -4.2, -6.4], ['ruben', -2.6, -6.4], ['matvey', 2.2, -6.4], ['erika', 3.8, -6.4], ['liza', -5.6, -8.4], ['angelina', 5.2, -8.4]];
  await Promise.all(pairs.map(([id, x, z]) => (id === 'alla' ? q : A(id)).walkTo(x, z, 3))); await p.walkTo(1.2, -8, 3);
  const all = () => [q, p, ...FRIENDS.map(A)].filter((a: any) => a && !a.hidden);
  await sequence({ title: 'Придворный менуэт', sub: 'Варя ведёт двор. Повтори шаги.', bpm: 112, mirror: [false, false], roundSub: ['Поклон, шаг, поворот…', 'Весь двор за тобой!'], rounds: [['left', 'right', 'up', 'down'], ['up', 'left', 'right', 'right', 'down', 'up']],
    onShow: () => { for (const a of all()) { if (a !== p) { a.pose = 'dance'; a.danceBeat++; } } G.sfx('hit', { f: 660 }); }, onInput: (d, ok) => { p.pose = 'dance'; p.danceBeat++; if (!ok) G.sfx('miss'); } });
  for (const a of all()) a.pose = null; N.sweep = 0; aim(N.red, -3, -8); aim(N.teal, 3, -8);
  await G.run(P.minuetAfter.slice(0, 1)); await tween(G, 0.8, (k) => { N.treeR.rotation.x = k * k * 1.5; }); G.sfx('crash'); await G.run(P.minuetAfter.slice(1)); N.treeR.rotation.x = 0;
  // 8. Королева забирает всё; гроза из картона
  G.audio.music('fin_queen'); G.grade({ tint: [1, 1, 1], sat: 1, bloom: 0.8, vig: 0.55, bright: 1 }); N.key.color.set(0xffe2b0);
  await G.run(F.queenTakes.slice(0, 1)); await q.walkTo(2.4, -7.6, 2); q.pose = 'point'; G.sfx('whoosh'); p.setChar('varya_pj'); await G.wait(0.6); q.pose = null;
  await p.walkTo(8, -10, 2.4); p.dir = 'f'; await G.run(F.queenTakes.slice(1)); G.sfx('door');
  G.audio.music('fin_storm', { restart: true }); N.skyD.visible = false; N.skyN.visible = true; N.sun.position.y = -8; G.grade({ tint: [0.74, 0.84, 1.22], sat: 0.55, vig: 0.7 }); lights(0.45);
  await Promise.all(N.clouds.map((c: any, i: number) => i === 1 ? tween(G, 3, (k) => { c.position.y = 13 - k * 4.4; }) : tween(G, 3, (k) => { c.position.y = 13 - k * 7.6; })));
  for (let i = 0; i < 3; i++) { G.flash(0.75); G.sfx('thunder'); await G.wait(0.9); }
  await G.run(P.storm); await G.run(own('erika') ? P.chron2Own : P.chron2Asg); G.flash(0.6); G.sfx('thunder');
  await G.run(P.cloudGag.slice(0, 3)); await tween(G, 1.6, (k) => { N.clouds[1].position.y = 8.6 + k * 4.4; }); await G.run(P.cloudGag.slice(3)); for (const c of N.clouds) c.position.y = 13;
  // 9. Зеркальная хореография: зеркала в картонных рамах
  G.audio.music('fin_mirror', { restart: true }); lights(1); G.grade({ tint: [0.95, 0.95, 1.08], vig: 0.5, bloom: 0.9, sat: 1.2 }); await tween(G, 2, (k) => { N.mirrors.position.y = 13 * (1 - k); });
  p.setChar('girl'); await G.run(F.mirrorIntro); await p.walkTo(1.6, -7.4, 3); await q.walkTo(-1.6, -7.4, 3); p.dir = 'l'; q.dir = 'r'; N.sweep = 1;
  G.ui.lyric(F.lyrics_mirror[0].text, F.lyrics_mirror[0].who);
  await sequence({ title: 'Зеркальная хореография', sub: 'Королева ведёт. Ты, её отражение.', bpm: 126, mirror: [true, true, false], roundSub: ['Королева: смотри…', 'Быстрее. Смотри…', 'Теперь, не зеркально. Одинаково.'], rounds: [['left', 'up', 'right', 'down'], ['right', 'right', 'up', 'left', 'down', 'up'], ['up', 'left', 'left', 'down', 'right', 'up', 'down', 'up']],
    onShow: () => { q.pose = 'dance'; q.danceBeat++; G.sfx('hit', { f: 520 }); }, onInput: (d, ok) => { p.pose = 'dance'; p.danceBeat++; if (ok) q.danceBeat = p.danceBeat; } });
  G.ui.lyric(F.lyrics_mirror[1].text, F.lyrics_mirror[1].who); q.pose = 'arms'; p.pose = 'arms'; await G.wait(2.5); G.ui.lyric(null); N.sweep = 0;
  // 10. Раскрытие: декорации уходят вверх, остаётся пустая сцена этого зала
  G.audio.music('fin_reveal', { restart: true }); q.pose = null; p.pose = null; for (const id of FRIENDS) await A(id).walkTo(MARK[id][0] < 0 ? -14 : 14, A(id).z, 4).then(() => { A(id).hidden = true; });
  await G.run(F.reveal.slice(0, 1)); const up = tween(G, 7, (k) => { set.position.y = k * 14; N.moon.position.y = -8; N.skyN.visible = k < 0.5; }); G.sfx('curtain'); await G.run(F.reveal.slice(1, 2)); await up;
  N.red.intensity = 0; N.teal.intensity = 0; N.key.intensity = 70; aim(N.key, 0, -7.4); G.grade({ tint: [1, 0.98, 0.96], sat: 0.8, vig: 0.75 }); G.focus(0, -7, 13);
  await q.walkTo(-0.4, -7.4, 1.2); await p.walkTo(0.4, -7.4, 1.2); q.dir = 'f'; p.dir = 'f';
  await G.run(F.reveal.slice(2)); await G.run(P.revealAfter); const lr = lyricRun(G, F.lyrics_reveal, 13);
  await G.wait(2); await tween(G, 3.5, (k) => { q.x = -0.4 + k * 0.4; p.x = 0.4 - k * 0.4; q.alpha = 1 - k * 0.5; });
  G.flash(0.7); G.sfx('bell'); p.setChar('varya_queen'); await tween(G, 3, (k) => { q.alpha = 0.5 * (1 - k); }); q.hidden = true; await lr;
  // 11. Финальный номер: тёплый свет, все шестеро выходят сами
  G.audio.music('fin_bows', { restart: true }); G.unfocus(); G.focus(0, -7, 22); G.grade({ tint: [1.16, 1.0, 0.84], sat: 1.15, bloom: 1.1, vig: 0.4, bright: 1.06 }); N.key.color.set(0xffc880); lights(1); N.sweep = 1;
  await G.run(P.ensemble); FRIENDS.forEach((id, i) => { const a = A(id); a.hidden = false; a.place(i < 3 ? -15 : 15, -6.4, i < 3 ? 'r' : 'l'); a.walkTo(-7.5 + i * 3 + (i >= 3 ? 3 : 0), -6.4, 5); });
  await G.wait(2.6); for (const id of FRIENDS) A(id).dir = 'f';
  let beat = 0; const dance = setInterval(() => { beat++; for (const a of [p, ...FRIENDS.map(A)]) { a.pose = 'dance'; a.danceBeat = beat + (a === p ? 1 : 0); } }, 500);
  N.conf.visible = true; G.sfx('firework'); await lyricRun(G, P.lyrics_final, 17); clearInterval(dance); for (const a of [p, ...FRIENDS.map(A)]) a.pose = null; N.sweep = 0;
  // 12. Поклоны и объятия режиссёрки
  await G.run(F.bowsIntro); G.sfx('applause', { dur: 6, dens: 60 });
  for (const id of FRIENDS) { const a = A(id), r = ROLES[id][own(id) ? 1 : 0]; a.pose = 'bow'; await G.run([`*: ${CHARS[id].name}, «${r}». ${own(id) ? 'Эту роль ' + CHARS[id].name + ' выбрал' + (id === 'ruben' || id === 'matvey' ? '' : 'а') + ' сам' + (id === 'ruben' || id === 'matvey' ? '' : 'а') + '. Зал встаёт.' : 'Роль из листа распределения: сидит аккуратно, но не совсем по плечу. Хлопают вежливо.'}`]); if (own(id)) G.sfx('applause', { dur: 2 }); a.pose = null; }
  await G.run(P.directorIn); G.setPlayerChar('varya');
  for (const id of FRIENDS) { const a = A(id); G.focus(a.x, a.z, 11); await p.walkTo(a.x + (a.x < 0 ? 1 : -1), a.z + 0.2, 4); p.face(a.x, a.z); a.face(p.x, p.z); p.pose = 'hug'; a.pose = 'hug'; G.sfx('heart'); await G.run(P.hugs[id]); p.pose = null; a.pose = null; a.dir = 'f'; }
  G.cam.pitch = 0.56; G.cam.yOff = 1.2; G.focus(0, 2, 26); await p.walkTo(0, -5, 4); p.dir = 'f';
  for (const [id] of AUD) { const a = G.actor('aud_' + id); if (a) { a.pose = 'arms'; } } await G.run(P.standing); p.pose = 'bow'; G.sfx('applause', { dur: 6, dens: 90 }); G.flash(0.3); await G.wait(3); p.pose = null;
  const down = tween(G, 3, (k) => { cur.position.y = 10 * (1 - k); }); G.sfx('curtain'); await down; f.show_done = 1;
  await G.ui.card([['ЗАНАВЕС', 'act'], 'Аплодисменты не смолкают ещё долго.']);
  G.cam.pitch = 0.56; G.cam.yOff = 1.2; G.setPlayerChar('varya'); await G.goto('fin_party', 'start', { fade: 'fade' });
}
// ---------- ЭПИЛОГ ----------
const party: RoomDef = {
  name: 'Буфет театра. После премьеры', chapter: 'Эпилог', w: 26, d: 12, music: 'party', amb: 'crowd', step: 'wood', grade: { tint: [1.08, 1.0, 0.92], vig: 0.35, bloom: 0.6, sat: 1.1 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('wallpaper', { h: 6, trim: 'gold' }); R.ambient(0x5a4838, 2.4, 0xffe8d0); R.particles('confetti', { count: 40, top: 6 });
    for (let x = -11; x <= 11; x += 2.2) { R.sprite(canvasTex(8, 14, (c) => { const col = ['#e84a6f', '#f2c230', '#5fd0c8', '#c9a7ff'][Math.abs(Math.round(x)) % 4]; c.fillStyle = col; c.fillRect(1, 0, 6, 8); c.fillRect(2, 8, 4, 1); c.fillStyle = '#fff'; c.fillRect(2, 1, 2, 2); c.fillStyle = '#888'; c.fillRect(4, 9, 1, 5); }, 'balloon' + Math.round(x)), x, -4.6, { y: 3.6 + Math.sin(x) * 0.3, scale: 1.4, glow: true }); }
    for (let x = -10; x <= 10; x += 5) R.light(x, 4, -1, 0xffd8a0, 9, 10);
    R.table(0, -2.4, 9, 1.6, { tex: 'white', tint: '#f0e4d4' }); R.decal(pxTex(72, 10, (c) => { rr(c, 0, 0, 72, 10, '#f4ece0'); for (let x = 0; x < 72; x += 6) { rr(c, x, 0, 2, 10, '#ffffff'); rr(c, x + 4, 0, 1, 10, '#d8ccbc'); } for (let x = 0; x < 72; x += 12) { rr(c, x, 7, 12, 1, '#e84a6f'); rr(c, x + 5, 8, 2, 2, '#e84a6f'); } c.clearRect(0, 9, 72, 1); for (let x = 0; x < 72; x += 6) rr(c, x + 1, 9, 4, 1, '#f4ece0'); }, 'tablecloth'), { x: 0, y: 0.6, z: -1.58, w: 9.1, h: 1.0, noSlot: true }); R.sprite(f.cake_out ? 'cakeout' : 'cake', 0, -2.4, { y: 1.15, scale: 1.4 }); R.sprite('bouquet', 3, -2.4, { y: 1.15, scale: 1.5 });
    if (!f.cake_out) R.light(0, 2.4, -1.6, 0xffc060, 1.5, 3, { flicker: 0.15 });
    R.inter('cake', 0, -1, { label: f.cake_out ? 'Торт (желание загадано)' : 'Торт с 18 свечами', fn: async (G) => { if (f.cake_out) return G.run(['~: Свечи погасли. Желание, моё. Даже себе не скажу.']); await G.run(F.cake); await G.run(F.cakeWish); G.sfx('candle'); f.cake_out = 1; await G.rebuild(); await G.run(F.cakeAfter); G.sfx('applause', { dur: 3 }); } });
    const fam: [string, number, number, any[]][] = [['matvey_bro', -8.4, 2.4, ['matvey_bro: …', '~: Матвейка молчит и держит меня за палец. Светлые кудряшки, серьёзные глаза. Самый красивый ребёнок на свете, и это не обсуждается.', 'nastya: Он весь вечер ждал, когда ты подойдёшь.']], ['vanya', -4.6, 2.8, ['vanya: Варя! А Рубен меня поднимет? А Матвей покажет фокус? А Полина ещё раз засмеётся?', '~: Ваня, маленькая копия Саши. Любит всех моих друзей сразу и Матвейку больше всех.', 'vanya: Матвейка, иди сюда! Тут торт!']], ['maxim', -9, 1, ['maxim: А знаешь, почему у королевы был такой длинный шлейф? Чтобы никто не наступил ей на пятки! …Нет? Настя, скажи, что смешно.', 'nastya: (улыбаясь) Смешно.']], ['nastya', -7.8, 1.6, ['nastya: Ты очень выросла. Не ростом. Голосом.']], ['natasha', -5.4, 1.2, ['natasha: Я никогда не видела, чтобы ты так спокойно отпускала людей на сцене. Как будто доверяешь им больше, чем плану.']], ['sasha', -4, 2, ['sasha: Я так и не понял, чем кончилось. Но я хлопал. Громко. Это считается?']], ['vasya', 6, 1.4, ['vasya: Можно я тоже буду режиссёром? Я уже командую Катей.', 'katya: (тихо) Не командует.']], ['sofa', 8, 0.8, ['sofa: Можно я накрашу тебя на следующую премьеру? Я уже придумала. Это будет шедевр.', 'varya/smile: Если я буду похожа на себя.', 'sofa: Ты будешь похожа на себя, только громче.']], ['katya', 9.4, 1.6, ['katya: Можно… с тобой сфотографироваться? Если нельзя, ничего. Если можно, то я тут постою.']]];
    for (const [id, x, z, talk] of fam) R.npc(id, x, z, { talk });
    const echo: Record<string, () => string> = {
      polina: () => f.pol_cmd ? 'polina: И, Варь… спасибо, что потом перестала командовать. Я заметила.' : 'polina: Ты тогда спросила, что я вижу. Я до сих пор об этом думаю.',
      ruben: () => f.rub_insist ? 'ruben/smile: Свой поминутный план можешь оставить себе. Как сувенир.' : 'ruben: Ты тогда в хранилище промолчала. Я запомнил.',
      matvey: () => f.mat_end === 'perfect' ? 'matvey: Твою идеальную реплику я сохранил. Как пример того, что красиво, это ещё не правда. Он, кстати, до сих пор просит рецепт онигири.' : f.mat_end === 'tear' ? 'matvey/laugh: Я до сих пор не верю, что порвал тот листок. Он тоже не верит. Мы оба каждый раз краснеем, когда вспоминаем.' : 'matvey/smile: Ты тогда стояла за дверью и молчала. Это было лучшее, что ты для меня поставила: ничего.',
      erika: () => f.eri_push ? 'erika: Ты хотела красивый финал для Вронской. Она прислала открытку с моря. Финал вышел красивый, просто не наш.' : 'erika: Вронская прислала открытку с моря. Тебе привет.',
      liza: () => f.liz_wait ? 'liza: Принц, кстати, написал. Спрашивал, можно ли ему дочитать монолог. Я сказала, башне.' : 'liza: Ножницы Феи я оставила себе. На память.',
      angelina: () => f.ang_cut === 'varya' ? 'angelina/smirk: В следующий раз, только по кивку. Я серьёзно. Почти.' : 'angelina/smile: Ты дождалась кивка. Я этого не забуду.',
    };
    FRIENDS.forEach((id, i) => R.npc(FCHAR[id], -10 + i * 1.6, -0.2 + (i % 2) * 0.4 + 3.6, { id, talk: (G: any) => G.run([...F.paths[id as keyof typeof F.paths], echo[id]()]) }));
    TROUPE.forEach((id, i) => R.npc(id, 5 + i * 1.4, 4.4, { talk: [`${id}: С днём рождения, Варя!`] }));
    R.photo('group', 'Общее фото', 0, 2.4, { any: true });
    R.inter('end', 11.2, -4, { label: 'Закончить вечер', cond: () => !!f.cake_out && !!f.group_photo, fn: ending });
    R.door('d', 11.2, { label: 'Выход', col: '#5a4029', fn: async (G) => { if (!f.cake_out || !f.group_photo) return G.run(['~: Рано уходить. Ещё торт. И общее фото, Василиса не простит.']); await ending(G); } });
    R.spawn('start', 0, 3.6, 'b');
  },
  async enter(G) { if (!G.f.party0) { G.f.party0 = 1; await G.ui.card([['ЭПИЛОГ', 'act'], ['Восемнадцать', 'big']]); await G.run(F.party0); await G.run(F.groupPhoto); await gather(G); G.toast('Общее фото: C поднимает камеру, E снимает', '◉'); } },
  async photo(G, subs) { if (subs.includes('group') && !G.f.group_photo) { G.f.group_photo = 1; G.sfx('shutter'); await G.run(F.groupPhotoAfter); } },
};
async function ending(G: any) {
  G.audio.music('morning'); await G.ui.card([['', 'act'], '…']);
  await G.goto('fin_bedroom', 'start', { fade: 'fade' });
}
const bedroom: RoomDef = {
  name: 'Сидней. 07:00', chapter: 'Эпилог', w: 12, d: 9, music: 'morning', amb: null, step: 'carpet', grade: { tint: [1.08, 1.02, 0.96], bright: 1.05, vig: 0.6 }, noMasks: true, camDist: 16,
  build(R, G) {
    const bed = (x: number, z: number, w: number, d: number, col: string, hi: string) => { R.box(x, z, w, d, 0.42, { tex: 'wood', tint: '#e0b888' });
      const quilt = pxTex(32, 24, (c) => { rr(c, 0, 0, 32, 24, col); for (let y = 0; y < 24; y += 6) for (let xx = 0; xx < 32; xx += 8) { rr(c, xx + ((y / 6) % 2) * 4, y, 4, 6, hi); rr(c, xx, y, 32, 1, 'rgba(0,0,0,.12)'); } rr(c, 0, 0, 32, 3, '#ffffff'); rr(c, 0, 3, 32, 1, 'rgba(0,0,0,.15)'); for (let xx = 0; xx < 32; xx += 3) rr(c, xx, 23, 2, 1, 'rgba(0,0,0,.25)'); }, 'quilt' + col);
      const m = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.26, d * 0.8), new THREE.MeshLambertMaterial({ map: quilt })); m.position.set(x, 0.55, z + d * 0.1); m.castShadow = true; R.room.group.add(m);
      const pil = new THREE.Mesh(new THREE.BoxGeometry(w * 0.7, 0.2, d * 0.22), new THREE.MeshLambertMaterial({ map: pxTex(16, 8, (c) => { rr(c, 0, 0, 16, 8, '#f8f4ec'); rr(c, 1, 1, 14, 2, '#ffffff'); rr(c, 0, 6, 16, 2, '#d8d0c4'); }, 'pillow') })); pil.position.set(x, 0.62, z - d * 0.38); R.room.group.add(pil); };
    R.floor('parquet'); R.walls('plaster', { h: 5, tint: '#d8c8b0' }); R.ambient(0x8a7a70, 2.0, 0xfff4e0); R.sun(0xfff0d0, 1.8, 6, 10, 6);
    R.decal(canvasTex(20, 24, (c) => { c.fillStyle = '#e8e0d0'; c.fillRect(0, 0, 20, 24); c.fillStyle = '#9cc2ee'; c.fillRect(2, 2, 16, 20); c.fillStyle = '#ffe0a0'; c.fillRect(12, 4, 4, 4); }, 'sydwin'), { x: -2.6, y: 2.8, w: 2.2, h: 2.6, glow: true });
    bed(3.4, -2.6, 3, 2, '#7a9ac8', '#c8d8f0'); rug(R, 0.6, 0.6, 5, 3, { col: '#4a6a8a', border: '#e8d8b0' });
    // комната Вари и Васи: постеры, полка, лампа, гирлянда фото; солнечный луч; передний план — косяк двери в тени
    R.poster('ЛЮДИ ЛЮБЯТ', 'театралка', { x: 4.6, y: 2.9, w: 1.2, h: 1.7, motif: 'rose', bg: '#e8d0c0' }); R.poster('ГЛУПЕЕ ДУРАКА', '', { x: -4.6, y: 3.0, w: 1.1, h: 1.6, motif: 'mask' });
    R.box(0.6, -4.3, 2.6, 0.4, 0.12, { tex: 'wood', y: 3.0, solid: false }); for (let i = 0; i < 7; i++) R.sprite('book', -0.4 + i * 0.32, -4.25, { y: 3.06, scale: 0.7 + (i % 2) * 0.1 }); R.sprite('flowerpot', 1.7, -4.25, { y: 3.06, scale: 0.8 });
    R.sprite('lamp', 5.4, -3.6, { scale: 0.9 }); R.light(5.4, 2.2, -3.2, 0xffd8a0, 3, 5);
    for (let i = 0; i < 6; i++) R.decal(pxTex(8, 7, (c) => { rr(c, 0, 0, 8, 7, '#f4f0e8'); rr(c, 1, 1, 6, 4, ['#e8a0b8', '#9cc2ee', '#f2c230'][i % 3]); }, 'bph' + (i % 3)), { x: -0.6 + i * 0.5, y: 4.0 - Math.sin(i / 5 * Math.PI) * 0.25, w: 0.4, h: 0.35, noSlot: true });
    const beam = R.decal(pxTex(16, 32, (c) => { const g = c.createLinearGradient(0, 0, 0, 32); g.addColorStop(0, 'rgba(255,230,170,.0)'); g.addColorStop(1, 'rgba(255,230,170,.45)'); c.fillStyle = g; c.fillRect(0, 0, 16, 32); }, 'sunbeam'), { flat: true, x: -2.6, z: -1.6, y: 0.03, w: 2.4, h: 4.6, glow: true }); (beam.material as THREE.MeshBasicMaterial).blending = THREE.AdditiveBlending;
    for (const sx of [-1, 1]) R.box(sx * 6.6, 5.4, 1.4, 1.6, 6, { tex: 'black', solid: false, cast: false }); R.box(1.2, -3.6, 0.8, 0.8, 0.8, { tex: 'wood' }); R.sprite(canvasTex(12, 6, (c) => { c.fillStyle = '#d8ccb2'; c.fillRect(0, 0, 12, 6); c.fillStyle = '#a3122a'; c.fillRect(1, 1, 3, 4); }, 'ticketsm'), 1.2, -3.6, { y: 0.8, glow: true });
    R.inter('ticket', 1.2, -2.6, { label: 'Билет на тумбочке', fn: (G) => G.run(F.wake.slice(3, 4)) }); bed(-2.2, -2.8, 2.6, 1.8, '#c88aa0', '#f4d8e4'); R.box(-2.2, -3.75, 2.7, 0.2, 1.4, { tex: 'wood', tint: '#e8c8a0', solid: false }); const sis = R.actor('vasya', -2.2, -2.8, { id: 'vasya' }); sis.pose = 'lie'; sis.y = 0.65; R.look('sis', -2.2, -1.4, 'Вася спит', ['~: Вася спит, натянув одеяло до носа. Мы делим комнату с тех пор, как я себя помню, и я ни разу не видела, чтобы она просыпалась раньше будильника.', '~: Сегодня можно не будить. Я сама.']);
    R.decal(canvasTex(16, 28, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 16, 28); c.fillStyle = '#c8d8e8'; c.fillRect(2, 2, 12, 24); }, 'bedmirror'), { x: -5.96, wall: 'w', at: 0, y: 2.4, w: 1.4, h: 2.4 });
    R.inter('mirror', -5, 0, { label: 'Зеркало', fn: async (G) => { await G.run(F.wake.slice(4)); G.sfx('note'); await G.wait(1); G.ui.black(true); await G.ui.card([['THE OTHER ME: APPLAUSE, PLEASE!', 'act'], ['Конец.', 'big'], ['Или начало. Тут уж как поставить.', 'sm']]); G.set('game_done', 1); await G.save('auto'); G.ui.black(true); await G.ui.credits(true); G.stopToMenu(); G.ui.mainMenu(); G.ui.black(false); } });
    R.spawn('start', 0, 1, 'f');
  },
  async enter(G) { if (!G.f.wake0) { G.f.wake0 = 1; G.sfx('bell'); await G.run(F.wake.slice(0, 3)); const w = G.f.wish; await G.run([w === 'near' ? '*: Телефон вибрирует. Шесть сообщений подряд: «С днём рождения!», от Полины, Рубена, Матвея, Эрики, Лизы и Ангелины. Все, в 07:00 ровно.' : w === 'own' ? '*: Телефон вибрирует. Полина: «Записалась на фото!» Рубен: «Подал документы». Лиза: «Я уже в поезде». И ни одного «как ты хочешь, чтобы мы…».' : '*: Телефон молчит. Ещё рано. Это хорошая тишина, как в зале перед первым звонком.']); } },
};
export const rooms: Record<string, RoomDef> = { fin_void: voidRoom, fin_diva: diva, fin_collapse: collapse, fin_backstage: backstage, fin_musical: musical, fin_party: party, fin_bedroom: bedroom };
/** Все гости собираются в одну группу перед тортом, лицом к камере, чтобы Варя сделала общее фото. */
async function gather(G: any) {
  const room = G.room; const ppl = room.actors.filter((a: any) => a !== G.player && !a.hidden); const n = ppl.length, per = Math.ceil(n / 3);
  const walks = ppl.map((a: any, i: number) => { const row = Math.floor(i / per), col = i % per, cols = Math.min(per, n - row * per); const x = (col - (cols - 1) / 2) * 1.25 + (row % 2) * 0.3, z = -0.4 + row * 1.1; a.box && (a.box.on = false); return a.walkTo(x, z, 3.2).then(() => { a.face(0, 9); if (a.box) { a.box.x0 = x - 0.4; a.box.x1 = x + 0.4; a.box.z0 = z - 0.25; a.box.z1 = z + 0.25; a.box.on = true; } const it = room.inters.find((q: any) => q.id === a.id); if (it) { it.x = x; it.z = z + 0.2; } }); });
  G.player.walkTo(0, 5.4, 3); await Promise.all(walks); G.player.face(0, 0);
}

