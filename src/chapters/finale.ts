// Акты V–VII. Гримёрка Аллы Евы → обрушение театра → мюзикл THE QUEEN'S LAST CURTAIN → эпилог.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { F } from '../data/dialogue/finale';
import { rhythm, sequence } from '../ui/minigames';
import { ROLES } from './hub';
import { CHARS } from '../data/chars';

const FRIENDS = ['polina', 'ruben', 'matvey', 'erika', 'liza', 'angelina'];
const FCHAR: Record<string, string> = { polina: 'polina_coat', ruben: 'ruben', matvey: 'matvey', erika: 'erika', liza: 'liza_short', angelina: 'angelina' };
const FAMILY = ['natasha', 'sasha', 'maxim', 'nastya', 'vasya', 'sofa', 'katya'];
const TROUPE = ['vasilisa', 'dana', 'nina', 'anya', 'olya'];
const lyricRun = async (G: any, lines: { t: number; text: string; who?: string }[], total: number) => { let t = 0; for (const l of lines) { await G.wait(l.t - t); t = l.t; G.ui.lyric(l.text, l.who); } await G.wait(Math.max(0, total - t)); G.ui.lyric(null); };
const tween = (G: any, dur: number, fn: (k: number) => void) => new Promise<void>((res) => { if (G.fast) { fn(1); return res(); } let t = 0; const tick = () => { if (!G.paused) t += 1 / 60; const k = Math.min(1, t / dur); fn(k); if (k < 1) requestAnimationFrame(tick); else res(); }; tick(); });

// ---------- АКТ V ----------
const diva: RoomDef = {
  name: 'Лучшая гримёрка', chapter: 'Акт V · Гримёрка', w: 16, d: 10, music: 'dressing', amb: 'hall', step: 'carpet', grade: { tint: [1.08, 0.94, 0.92], vig: 0.6, sat: 0.95 },
  build(R, G) {
    R.floor('carpet'); R.walls('velvet', { h: 6, trim: 'gold' }); R.ambient(0x4a3030, 1.8, 0xffd8c8); R.particles('dust', { count: 60, top: 5 });
    R.decal(canvasTex(24, 30, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 30); c.fillStyle = '#7ab0e8'; c.fillRect(2, 2, 20, 26); c.fillStyle = '#fff'; c.fillRect(4, 18, 16, 6); c.fillStyle = '#2a1c14'; c.fillRect(11, 2, 2, 26); }, 'paintwin'), { x: -5, y: 3, w: 2.4, h: 3 });
    R.table(1, -3.8, 4.4, 1.2); R.decal(canvasTex(64, 48, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 64, 48); c.fillStyle = '#b8c8d8'; c.fillRect(3, 3, 58, 42); for (let y = 4; y < 46; y += 7) { c.fillStyle = y % 14 ? '#fff4c8' : '#555'; c.fillRect(0, y, 3, 3); c.fillRect(61, y, 3, 3); } }, 'divamirror'), { x: 1, y: 3.4, w: 4.6, h: 3.4 });
    for (const dx of [-2, 2]) R.light(1 + dx, 3.4, -3.4, 0xffd9a0, 4, 7, { flicker: 0.1 });
    { const refl = R.actor('varya', 1.2, -4.85, { id: 'refl', dir: 'f' }); refl.alpha = 0.75; refl.y = 1.6; refl.shadow.visible = false; R.onUpdate(() => { const p = G.player; if (!p) return; refl.x = 1 + (p.x - 1) * 0.35; refl.moving = p.moving; refl.dir = p.dir === 'b' ? 'f' : p.dir === 'f' ? 'b' : p.dir; refl.y = 1.6; refl.shadow.visible = false; }); }
    R.sprite('bouquet', -1, -3.8, { y: 1.15, scale: 1.2 }); R.sprite('flowerpot', 6.6, -4.4, { scale: 1.6 });
    for (let i = 0; i < 5; i++) R.poster(['ЧАЙКА', 'ГАМЛЕТ', 'САД', 'ЛЕДИ', 'КОРОЛЕВА'][i], 'АЛЛА ЕВА', { x: -7.97, wall: 'w', at: -3 + i * 1.6, y: 3 + (i % 2) * 0.6, w: 1.2, h: 1.7 });
    R.actor('alla', 1, -2.8, { id: 'alla', dir: 'b', pose: 'sit' });
    R.spawn('start', -5, 3, 'b');
  },
  async enter(G) {
    if (G.f.diva_done) return; G.focus(0, -2, 15); await G.run(F.divaIn); const al = G.actor('alla'); al.pose = null; al.dir = 'f'; await G.run(F.diva1); await G.run(F.diva2);
    G.audio.music('dressing'); await G.run(F.diva3); await G.run(F.diva4.slice(0, 1)); G.note('n_diva');
    await G.run(F.diva4.slice(1, -3)); G.sfx('switch'); G.grade({ bright: 0.35 }); await G.run(F.diva4.slice(-3, -1)); G.shake(0.6); G.sfx('crash'); await G.run(F.diva4.slice(-1));
    G.f.diva_done = 1; G.unfocus(); if (G.state.mask) G.setMask(G.state.mask);
    await G.ui.card([['АКТ VI', 'act'], ['THE COLLAPSE', 'big']]); await G.goto('fin_collapse', 'start', { fade: 'glitch' });
  },
};
// ---------- АКТ VI ----------
const collapse: RoomDef = {
  name: 'Театр складывается', chapter: 'Акт VI · Обрушение', w: 62, d: 10, music: 'collapse', amb: 'wind', step: 'wood', grade: { wave: 0.35, glitch: 0.08, sat: 1.1, tint: [1.05, 0.95, 1.05], vig: 0.6 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a0610;
    const sec: [number, number, string, string][] = [[-31, -18, 'stage', 'brick'], [-12, -2, 'cobble', 'wallgreen'], [-2, 12, 'metal', 'neon'], [12, 31, 'schoolfloor', 'paperstone']];
    for (const [a, b, fl, wl] of sec) { R.floor(fl, { x: (a + b) / 2, w: b - a }); R.box((a + b) / 2, -5.2, b - a, 0.4, 6, { tex: wl, cast: false }); }
    R.box(0, 5.2, 62, 0.2, 0.2, { color: 0x000000, solid: false }); R.ambient(0x4a3a5a, 2.2, 0xd0b0ff);
    for (const x of [-26, -8, 6, 20]) R.light(x, 4, 0, [0xffd090, 0x80a0ff, 0xff4fa0, 0xfff0d0][(x + 26) / 14 | 0] ?? 0xffd090, 14, 14);
    rainSlice(R); R.particles('petals', { count: 60, top: 7 });
    // парящий реквизит
    const fl: THREE.Object3D[] = []; [['chair', -22], ['umbrella', -10], ['slot', 0], ['lantern', 8], ['typewriter', 16], ['book', 24], ['bust', -28], ['masks', 28], ['marionette', -4], ['cam', 12]].forEach(([k, x], i) => { const s = R.sprite(k as string, x as number, -3 + (i % 3) * 1.4, { y: 2 + (i % 4), scale: 1.3, glow: true }); fl.push(s); });
    R.onUpdate((dt, t) => fl.forEach((o, i) => { o.position.y = 2.4 + Math.sin(t * 0.8 + i) * 0.8 + (i % 3); o.rotation.z = Math.sin(t * 0.5 + i) * 0.4; }));
    // A: провал — мост из косы
    R.box(-15, 0, 4, 10, 0.1, { color: 0x05030a, y: -3, solid: false }); for (const x of [-17, -13]) R.box(x, 0, 0.1, 10, 3, { tex: 'black', y: -3, solid: false });
    const gapC = R.collider(-17, -5, -13, 5); gapC.on = !f.c_gap; if (f.c_gap) R.box(-15, 0, 4.4, 1.2, 0.18, { color: 0x8c6a45, y: 0.02, solid: false });
    R.trigger(-21, -5, -18, 5, async (G) => { if (f.c_gap) return; await G.run(F.gap); G.sfx('rope'); f.c_gap = 1; await G.rebuild(); }, true);
    // B: стена-декорация (видна без Трагедии)
    R.box(-4, 0, 0.4, 10, 5.6, { tex: 'wallgreen', mask: 'none' }); R.box(-4, 0, 0.1, 10, 5.6, { color: 0x6a8ad0, opacity: 0.25, mask: 'tragedy', solid: false });
    R.trigger(-9, -5, -6, 5, (G) => G.run(F.wall), true);
    // C: ленты-лазеры
    const hit = async (G: any) => { G.sfx('error'); G.flash(0.3); await G.run(['ruben: Не на «раз». Назад — и слушай.']); G.player.place(1, 0, 'r'); G.camSnap(); };
    [3.5, 6, 8.5].forEach((x, i) => R.laser(x, -4.6, x, 4.6, { period: 1.43, duty: 0.6, phase: i * 0.48, onHit: hit, color: 0xc8203c }));
    R.trigger(0, -5, 2.5, 5, (G) => G.run(F.lasers), true);
    // D: темнота, фонари Матвея, три двери
    if (f.c_lights) for (let x = 13; x < 30; x += 2.2) R.sprite('lantern', x, -4.4, { y: 4, glow: true });
    R.light(22, 3, 0, 0xffb070, f.c_lights ? 18 : 1, 16);
    R.trigger(11, -5, 13, 5, async (G) => { if (f.c_lights) return; await G.run(F.dark); f.c_lights = 1; await G.rebuild(); }, true);
    [[22, 'A'], [25.5, 'B'], [29, 'C']].forEach(([x, k]) => { R.door('c' + k, x as number, { label: 'Дверь', col: '#3a2a1c', fn: async (G) => { if (k !== 'B') { await G.run(F.doorWrong.slice(0, 1)); G.sfx('laugh', { n: 4 }); await G.run(F.doorWrong.slice(1)); G.player.place(14, 0, 'r'); G.camSnap(); return; } await G.run(F.final); if (!G.has('marionette')) return G.run(F.finalNeed); G.sfx('note'); await G.run(F.finalOpen); await G.goto('fin_backstage', 'start', { fade: 'curtain' }); } }); R.photo('door' + k, k === 'B' ? 'Дверь с тенью' : 'Дверь без тени', x as number, -4.6); });
    const order = ['polina', 'liza', 'ruben', 'matvey', 'erika', 'angelina'];
    order.forEach((id, i) => { const a = R.actor(FCHAR[id], -29 + i * 0.4, 2 + (i % 2) * 0.6, { id }); G.follow(a); });
    R.spawn('start', -28, 0, 'r');
  },
  async enter(G) { if (!G.f.c_in) { G.f.c_in = 1; await G.run(F.collapseIn); await G.run(F.callFriends); G.toast('Друзья идут за тобой. Маски, камера, коса Лизы — всё пригодится.', '✦'); } },
  async photo(G, subs) { if (subs.some((s) => s.startsWith('door'))) await G.run(F.doorsPhoto); },
};
function rainSlice(R: Builder) { const p = R.particles('rain', { count: 200, top: 8 }); R.onUpdate(() => { p.position.x = -24; p.scale.x = 0.25; }); }
// ---------- АКТ VII ----------
const backstage: RoomDef = {
  name: 'Кулисы. Премьера', chapter: 'Акт VII · Финальный спектакль', w: 20, d: 9, music: 'theater', amb: 'crowd', step: 'wood', grade: { tint: [1.05, 0.98, 0.92], vig: 0.5 },
  build(R, G) {
    R.floor('stage'); R.walls('brick', { h: 6 }); R.ambient(0x4a3830, 2.2, 0xffe0c8); R.light(0, 4, 0, 0xffd8a0, 14, 12); R.particles('dust', { count: 80, top: 5 });
    for (let x = -8; x <= 8; x += 2) R.box(x, -4.3, 0.06, 0.06, 6, { color: 0x8a7a5a, solid: false });
    TROUPE.forEach((id, i) => R.npc(id, -6 + i * 2, -1.6 + (i % 2) * 0.8, { talk: [`${id}: Ни пуха!`, 'varya/smile: К чёрту!'] }));
    R.curtain(8.6, 0, 1.4, 6, { solid: true });
    R.inter('go', 7, 1, { label: 'Выйти на сцену', fn: async (G) => { await G.goto('fin_musical', 'start', { fade: 'curtain' }); } });
    R.spawn('start', -8, 2, 'r');
  },
  async enter(G) { if (!G.f.pre_show) { G.f.pre_show = 1; await G.run(F.preShow); G.setPlayerChar('varya'); } },
};
const musical: RoomDef = {
  name: "THE QUEEN'S LAST CURTAIN", w: 34, d: 16, music: null, amb: 'crowd', step: 'wood', grade: { vig: 0.55, bloom: 0.8 }, noMasks: true, noCamera: true, camZMax: 1.5, camDist: 23,
  build(R, G) {
    R.room.group.userData.bg = 0x020102; R.floor('stage', { d: 10, z: -3 }); R.floor('carpet', { d: 6, z: 5 }); R.walls('black', { h: 10 }); R.ambient(0x2a2028, 1.2, 0x6a5870);
    // декорации дворца — группа, которая поднимется в финале
    const set = new THREE.Group(); R.room.group.add(set); R.room.named.set = set;
    const add = (o: THREE.Object3D) => { R.room.group.remove(o); set.add(o); return o; };
    add(R.box(0, -7.6, 26, 0.3, 8, { tex: 'gold', tint: '#c8a050', solid: false })); for (const x of [-10, -5, 5, 10]) add(R.box(x, -6.6, 0.8, 0.8, 7, { tex: 'gold', solid: false }));
    add(R.box(0, -6.2, 3, 1.4, 1.4, { tex: 'velvet', solid: false })); add(R.box(0, -6.8, 2.4, 0.4, 3.6, { tex: 'gold', solid: false }));
    for (const x of [-8, 8]) add(R.box(x, -5, 0.2, 3, 4.4, { tex: 'mirror', solid: false, name: 'mir' + x }));
    // занавес
    const cur = new THREE.Group(); R.room.group.add(cur); R.room.named.curtain = cur; for (let x = -16; x <= 16; x += 2) { const b = R.box(x, 1.6, 2.1, 0.3, 10, { tex: 'velvet', solid: false }); R.room.group.remove(b); cur.add(b); }
    R.box(0, 1.8, 34, 0.5, 1.4, { tex: 'gold', y: 8.6, solid: false });
    // свет
    R.spot(0, 14, 6, 0, -2, 0xffe2b0, 38, { angle: 0.4, cone: 0.06, name: 'key' }); R.spot(-10, 12, 4, -5, -2, 0xff6080, 30, { angle: 0.4, cone: 0.04, shadow: false, name: 'red' }); R.spot(10, 12, 4, 5, -2, 0x60d0d0, 30, { angle: 0.4, cone: 0.04, shadow: false, name: 'teal' });
    for (let x = -14; x <= 14; x += 2) R.light(x, 0.4, 2.1, 0xffc070, 1.2, 5);
    // зал: семья — первый ряд, труппа — третий
    FAMILY.forEach((id, i) => R.actor(id, -6 + i * 2, 4.6, { id: 'aud_' + id, dir: 'b' })); TROUPE.forEach((id, i) => R.actor(id, -4 + i * 2, 7.6, { id: 'aud_' + id, dir: 'b' }));
    R.actor('queen', -18, -2, { id: 'queen', hidden: true }); R.particles('confetti', { count: 120, top: 9, name: 'conf' }); R.room.named.conf.visible = false;
    R.spawn('start', 15, -2, 'l');
  },
  async enter(G) { await musicalShow(G); },
};
async function musicalShow(G: any) {
  const f = G.f, room = G.room, p = G.player, q = G.actor('queen'), cur = room.named.curtain, set = room.named.set;
  if (f.show_done) return; p.hidden = true; G.focus(0, 3, 26);
  await G.ui.card([['АКТ VII', 'act'], ['THE FINAL SHOW', 'big']]); await G.run(F.audience);
  // 1. Увертюра
  G.audio.music('fin_overture', { restart: true }); G.focus(0, -1, 22); const lift = tween(G, 6, (k) => { cur.position.y = k * 9; }); G.sfx('curtain');
  await lyricRun(G, F.lyrics_over, 13); await lift;
  // 2. Королева
  q.hidden = false; q.place(-14, -2, 'r'); G.audio.music('fin_queen', { restart: true }); await G.run(F.queenSpeech); await q.walkTo(0, -2.4, 3); q.dir = 'f'; q.pose = 'arms';
  G.toast('Королеве нужны аплодисменты: держи ритм', '♪');
  await rhythm({ track: 'fin_queen', part: 2, loops: 1, title: 'Хлопайте!', sub: 'зал хлопает в такт — D F J K или стрелки', lyrics: F.lyrics_queen as any, onBeat: (b) => { q.pose = b % 2 ? 'arms' : 'point'; if (b % 4 === 0) G.sfx('clap'); } });
  G.sfx('applause', { dur: 3 }); q.pose = null;
  // 3. Молодая Девушка — её играет Варя
  G.setPlayerChar('girl'); p.hidden = false; p.place(15, -2, 'l'); G.audio.music('fin_girl', { restart: true }); await G.run(F.girlEnter); await p.walkTo(4, -2.4, 2.4); p.dir = 'f'; q.face(p.x, p.z);
  await lyricRun(G, F.lyrics_girl, 19.5);
  // 4. Королева забирает всё
  G.audio.music('fin_queen'); await G.run(F.queenTakes.slice(0, 1)); await q.walkTo(3, -2.4, 2); q.pose = 'point'; G.sfx('whoosh'); p.setChar('varya_pj'); await G.wait(0.6); q.pose = null;
  await p.walkTo(8, -5, 2.4); p.dir = 'f'; await G.run(F.queenTakes.slice(1)); G.sfx('door'); room.named.key.intensity = 10; G.grade({ tint: [0.8, 0.9, 1.2], sat: 0.6 });
  // 5. Зеркальная хореография
  G.audio.music('fin_mirror', { restart: true }); room.named.key.intensity = 38; G.grade({ vig: 0.5, bloom: 0.9, sat: 1.2 }); p.setChar('girl'); await G.run(F.mirrorIntro); await p.walkTo(2, -2.4, 3); await q.walkTo(-2, -2.4, 3); p.dir = 'l'; q.dir = 'r';
  G.ui.lyric(F.lyrics_mirror[0].text, F.lyrics_mirror[0].who);
  await sequence({ title: 'Зеркальная хореография', sub: 'Королева ведёт. Ты — её отражение.', bpm: 126, mirror: [true, true, false], roundSub: ['Королева: смотри…', 'Быстрее. Смотри…', 'Теперь — не зеркально. Одинаково.'], rounds: [['left', 'up', 'right', 'down'], ['right', 'right', 'up', 'left', 'down', 'up'], ['up', 'left', 'left', 'down', 'right', 'up', 'down', 'up']],
    onShow: (d) => { q.pose = 'dance'; q.danceBeat++; G.sfx('hit', { f: 520 }); }, onInput: (d, ok) => { p.pose = 'dance'; p.danceBeat++; if (ok) { q.danceBeat = p.danceBeat; } } });
  G.ui.lyric(F.lyrics_mirror[1].text, F.lyrics_mirror[1].who); q.pose = 'arms'; p.pose = 'arms'; await G.wait(2.5); G.ui.lyric(null);
  // 6. Раскрытие
  G.audio.music('fin_reveal', { restart: true }); q.pose = null; p.pose = null; await G.run(F.reveal.slice(0, 1));
  const up = tween(G, 7, (k) => { set.position.y = k * 14; }); G.sfx('curtain'); await G.run(F.reveal.slice(1, 2)); await up;
  room.named.red.intensity = 0; room.named.teal.intensity = 0; G.focus(0, -2, 15); await q.walkTo(-0.3, -2.4, 1.2); await p.walkTo(0.3, -2.4, 1.2); q.dir = 'f'; p.dir = 'f';
  await G.run(F.reveal.slice(2)); const lr = lyricRun(G, F.lyrics_reveal, 13);
  await G.wait(2); await tween(G, 3.5, (k) => { q.x = -0.3 + k * 0.3; p.x = 0.3 - k * 0.3; q.alpha = 1 - k * 0.5; });
  G.flash(0.7); G.sfx('bell'); p.setChar('varya_queen'); q.setChar('varya'); await tween(G, 3, (k) => { q.alpha = 0.5 * (1 - k); }); q.hidden = true; await lr;
  // 7. Поклоны
  G.audio.music('fin_bows', { restart: true }); await G.run(F.bowsIntro); G.unfocus(); G.focus(0, -1, 22); room.named.conf.visible = true; G.sfx('applause', { dur: 6, dens: 60 });
  const B = new (await import('../world/room')).Builder(room, G); p.place(0, -1, 'f');
  for (const [i, id] of FRIENDS.entries()) { const a = B.actor(FCHAR[id], 16, -2.6, { id: 'bow_' + id }); a.walkTo(-10 + i * 3.4 + (i >= 3 ? 3.4 : 0), -2.6, 6); }
  await G.wait(2.6); for (const id of FRIENDS) { const a = G.actor('bow_' + id); a.pose = 'bow'; }
  for (const id of FRIENDS) { const own = f['cast_' + id] !== 'assigned'; const role = ROLES[id][own ? 1 : 0]; await G.run([`*: ${CHARS[id].name} — «${role}». ${own ? 'Эту роль ' + CHARS[id].name + ' выбирает сам' + (id === 'ruben' || id === 'matvey' ? '' : 'а') + '. Зал встаёт.' : 'Роль из листа распределения: сидит аккуратно, но не совсем по плечу. Хлопают вежливо.'}`]); if (own) G.sfx('applause', { dur: 2 }); }
  for (const id of FAMILY.concat(TROUPE)) { const a = G.actor('aud_' + id); if (a) a.pose = 'arms'; }
  await G.run(F.bowFinal); p.pose = 'bow'; G.sfx('applause', { dur: 6, dens: 90 }); G.flash(0.3); await G.wait(3);
  const down = tween(G, 3, (k) => { cur.position.y = 9 * (1 - k); }); G.sfx('curtain'); await down; f.show_done = 1;
  await G.ui.card([['ЗАНАВЕС', 'act'], 'Аплодисменты не смолкают ещё долго.']);
  G.setPlayerChar('varya'); await G.goto('fin_party', 'start', { fade: 'fade' });
}
// ---------- ЭПИЛОГ ----------
const party: RoomDef = {
  name: 'Буфет театра. После премьеры', chapter: 'Эпилог', w: 26, d: 12, music: 'party', amb: 'crowd', step: 'wood', grade: { tint: [1.08, 1.0, 0.92], vig: 0.35, bloom: 0.6, sat: 1.1 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('wallpaper', { h: 6, trim: 'gold' }); R.ambient(0x5a4838, 2.4, 0xffe8d0); R.particles('confetti', { count: 40, top: 6 });
    for (let x = -11; x <= 11; x += 2.2) { R.sprite(canvasTex(8, 14, (c) => { const col = ['#e84a6f', '#f2c230', '#5fd0c8', '#c9a7ff'][Math.abs(Math.round(x)) % 4]; c.fillStyle = col; c.fillRect(1, 0, 6, 8); c.fillRect(2, 8, 4, 1); c.fillStyle = '#fff'; c.fillRect(2, 1, 2, 2); c.fillStyle = '#888'; c.fillRect(4, 9, 1, 5); }, 'balloon' + Math.round(x)), x, -4.6, { y: 3.6 + Math.sin(x) * 0.3, scale: 1.4, glow: true }); }
    for (let x = -10; x <= 10; x += 5) R.light(x, 4, -1, 0xffd8a0, 9, 10);
    R.table(0, -2.4, 9, 1.6, { tex: 'paper' }); R.sprite(f.cake_out ? 'cakeout' : 'cake', 0, -2.4, { y: 1.15, scale: 1.4 }); R.sprite('bouquet', 3, -2.4, { y: 1.15, scale: 1.5 });
    if (!f.cake_out) R.light(0, 2.4, -1.6, 0xffc060, 1.5, 3, { flicker: 0.15 });
    R.inter('cake', 0, -1, { label: f.cake_out ? 'Торт (желание загадано)' : 'Торт с 18 свечами', fn: async (G) => { if (f.cake_out) return G.run(['~: Свечи погасли. Желание — моё. Даже себе не скажу.']); await G.run(F.cake); await G.run(F.cakeWish); G.sfx('candle'); f.cake_out = 1; await G.rebuild(); await G.run(F.cakeAfter); G.sfx('applause', { dur: 3 }); } });
    const fam: [string, number, number, any[]][] = [['maxim', -9, 1, ['maxim: А знаешь, почему у королевы был такой длинный шлейф? Чтобы никто не наступил ей на пятки! …Нет? Настя, скажи, что смешно.', 'nastya: (улыбаясь) Смешно.']], ['nastya', -7.8, 1.6, ['nastya: Ты очень выросла. Не ростом. Голосом.']], ['natasha', -5.4, 1.2, ['natasha: Я никогда не видела, чтобы ты так спокойно отпускала людей на сцене. Как будто доверяешь им больше, чем плану.']], ['sasha', -4, 2, ['sasha: Я так и не понял, чем кончилось. Но я хлопал. Громко. Это считается?']], ['vasya', 6, 1.4, ['vasya: Можно я тоже буду режиссёром? Я уже командую Катей.', 'katya: (тихо) Не командует.']], ['sofa', 8, 0.8, ['sofa: Можно я накрашу тебя на следующую премьеру? Я уже придумала. Это будет шедевр.', 'varya/smile: Если я буду похожа на себя.', 'sofa: Ты будешь похожа на себя, только громче.']], ['katya', 9.4, 1.6, ['katya: Можно… с тобой сфотографироваться? Если нельзя — ничего. Если можно — то я тут постою.']]];
    for (const [id, x, z, talk] of fam) R.npc(id, x, z, { talk });
    const echo: Record<string, () => string> = {
      polina: () => f.pol_cmd ? 'polina: И, Варь… спасибо, что потом перестала командовать. Я заметила.' : 'polina: Ты тогда спросила, что я вижу. Я до сих пор об этом думаю.',
      ruben: () => f.rub_insist ? 'ruben/smile: Свой поминутный план можешь оставить себе. Как сувенир.' : 'ruben: Ты тогда в хранилище промолчала. Я запомнил.',
      matvey: () => f.mat_last_try ? 'matvey: Твоя «идеальная фраза»… я её потом прочитал. Ужасная. Спасибо, что я её не сказал.' : 'matvey: Ты ушла на все сто. Я до сих пор не понимаю, как ты выдержала.',
      erika: () => f.eri_push ? 'erika: Ты хотела красивый финал для Вронской. Она прислала открытку с моря. Финал вышел красивый — просто не наш.' : 'erika: Вронская прислала открытку с моря. Тебе привет.',
      liza: () => f.liz_wait ? 'liza: Принц, кстати, написал. Спрашивал, можно ли ему дочитать монолог. Я сказала — башне.' : 'liza: Ножницы Феи я оставила себе. На память.',
      angelina: () => f.ang_cut === 'varya' ? 'angelina/smirk: В следующий раз — только по кивку. Я серьёзно. Почти.' : 'angelina/smile: Ты дождалась кивка. Я этого не забуду.',
    };
    FRIENDS.forEach((id, i) => R.npc(FCHAR[id], -10 + i * 1.6, -0.2 + (i % 2) * 0.4 + 3.6, { id, talk: (G: any) => G.run([...F.paths[id as keyof typeof F.paths], echo[id]()]) }));
    TROUPE.forEach((id, i) => R.npc(id, 5 + i * 1.4, 4.4, { talk: [`${id}: С днём рождения, Варя!`] }));
    R.photo('group', 'Общее фото', 0, 2.4);
    R.inter('end', 11.2, -4, { label: 'Закончить вечер', cond: () => !!f.cake_out && !!f.group_photo, fn: ending });
    R.door('d', 11.2, { label: 'Выход', col: '#5a4029', fn: async (G) => { if (!f.cake_out || !f.group_photo) return G.run(['~: Рано уходить. Ещё торт. И общее фото — Василиса не простит.']); await ending(G); } });
    R.spawn('start', 0, 3.6, 'b');
  },
  async enter(G) { if (!G.f.party0) { G.f.party0 = 1; await G.ui.card([['ЭПИЛОГ', 'act'], ['Восемнадцать', 'big']]); await G.run(F.party0); await G.run(F.groupPhoto); G.toast('Общее фото: C — фотоаппарат', '◉'); } },
  async photo(G, subs) { if (subs.includes('group') && !G.f.group_photo) { G.f.group_photo = 1; G.sfx('shutter'); await G.run(F.groupPhotoAfter); } },
};
async function ending(G: any) {
  G.audio.music('morning'); await G.ui.card([['', 'act'], '…']);
  await G.goto('fin_bedroom', 'start', { fade: 'fade' });
}
const bedroom: RoomDef = {
  name: 'Сидней. 07:00', chapter: 'Эпилог', w: 12, d: 9, music: 'morning', amb: null, step: 'carpet', grade: { tint: [1.08, 1.02, 0.96], bright: 1.05, vig: 0.4 }, noMasks: true,
  build(R, G) {
    R.floor('parquet'); R.walls('plaster', { h: 5, tint: '#d8c8b0' }); R.ambient(0x8a7a70, 2.4, 0xfff4e0); R.sun(0xfff0d0, 1.8, 6, 10, 6);
    R.decal(canvasTex(20, 24, (c) => { c.fillStyle = '#e8e0d0'; c.fillRect(0, 0, 20, 24); c.fillStyle = '#9cc2ee'; c.fillRect(2, 2, 16, 20); c.fillStyle = '#ffe0a0'; c.fillRect(12, 4, 4, 4); }, 'sydwin'), { x: -2.6, y: 2.8, w: 2.2, h: 2.6, glow: true });
    R.box(3.4, -2.6, 3, 2, 0.7, { tex: 'velvet', tint: '#8aa0c8' }); R.box(1.2, -3.6, 0.8, 0.8, 0.8, { tex: 'wood' }); R.sprite(canvasTex(12, 6, (c) => { c.fillStyle = '#d8ccb2'; c.fillRect(0, 0, 12, 6); c.fillStyle = '#a3122a'; c.fillRect(1, 1, 3, 4); }, 'ticketsm'), 1.2, -3.6, { y: 0.8, glow: true });
    R.inter('ticket', 1.2, -2.6, { label: 'Билет на тумбочке', fn: (G) => G.run(F.wake.slice(3, 4)) });
    R.decal(canvasTex(16, 28, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 16, 28); c.fillStyle = '#c8d8e8'; c.fillRect(2, 2, 12, 24); }, 'bedmirror'), { x: -5.96, wall: 'w', at: 0, y: 2.4, w: 1.4, h: 2.4 });
    R.inter('mirror', -5, 0, { label: 'Зеркало', fn: async (G) => { await G.run(F.wake.slice(4)); G.sfx('note'); await G.wait(1); await G.ui.card([['THE OTHER ME: APPLAUSE, PLEASE!', 'act'], ['Конец.', 'big'], ['Или начало. Тут уж как поставить.', 'sm']]); G.set('game_done', 1); await G.save('auto'); await G.ui.credits(true); G.stopToMenu(); G.ui.mainMenu(); } });
    R.spawn('start', 0, 1, 'f');
  },
  async enter(G) { if (!G.f.wake0) { G.f.wake0 = 1; G.sfx('bell'); await G.run(F.wake.slice(0, 3)); const w = G.f.wish; await G.run([w === 'near' ? '*: Телефон вибрирует. Шесть сообщений подряд: «С днём рождения!» — от Полины, Рубена, Матвея, Эрики, Лизы и Ангелины. Все — в 07:00 ровно.' : w === 'own' ? '*: Телефон вибрирует. Полина: «Записалась на фото!» Рубен: «Подал документы». Лиза: «Я уже в поезде». И ни одного «как ты хочешь, чтобы мы…».' : '*: Телефон молчит. Ещё рано. Это хорошая тишина — как в зале перед первым звонком.']); } },
};
export const rooms: Record<string, RoomDef> = { fin_diva: diva, fin_collapse: collapse, fin_backstage: backstage, fin_musical: musical, fin_party: party, fin_bedroom: bedroom };
