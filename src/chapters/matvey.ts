// Глава Матвея — 100 STEPS TO THE INEVITABLE. Школьная дорама.
// Механики: постановка сцен (убрать зонты + тайминг дождя; записка с выбором фраз; расставить героев под аркой
// и поймать «идеальный кадр» камерой), растущая «фальшь» мира, кульминация — сто шагов назад (Варя уходит сама).
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { M } from '../data/dialogue/matvey';
import { pick, timing } from '../ui/minigames';
import { chapterIntro, finishChapter } from './common';

const fakeGrade = (n: number) => ({ sat: 1.05 + n * 0.18, tint: [1.04 + n * 0.03, 1.0, 1.02 + n * 0.04], vig: 0.25 + n * 0.08, bright: 0.98, bloom: 0.3 + n * 0.12, wave: n >= 3 ? 0.25 : 0 });
function schoolFacade(R: Builder, w: number) {
  R.box(0, -6.3, w, 0.8, 7, { tex: 'schoolwall' });
  for (let x = -w / 2 + 3; x < w / 2 - 2; x += 4) for (const y of [2.4, 5.2]) R.decal(canvasTex(20, 16, (c) => { c.fillStyle = '#d8d8e0'; c.fillRect(0, 0, 20, 16); c.fillStyle = '#9cc2ee'; c.fillRect(2, 2, 16, 12); c.fillStyle = '#d8d8e0'; c.fillRect(9, 2, 2, 12); c.fillStyle = '#f8f8ff'; c.fillRect(3, 3, 3, 5); }, 'swin'), { x, y, z: -5.88, w: 2, h: 1.6 });
  R.decal(canvasTex(48, 10, (c) => { c.fillStyle = '#2c3550'; c.fillRect(0, 0, 48, 10); ptext(c, 'ШКОЛА № 100', 24, 1, { size: 8, col: '#f0f0f0', align: 'center' }); }, 'schoolsign'), { x: -6, y: 6.1, z: -5.86, w: 4.8, h: 1 });
}
const yard: RoomDef = {
  card: (G) => G.f.intro_mat ? null : [['АКТ II · THE MISSING CAST', 'act'], ['100 STEPS TO THE INEVITABLE', 'big'], ['школьная дорама · по мотивам манги «100 шагов к неизбежному»', 'sm']],
  name: 'Школьный двор', chapter: 'Акт II · Матвей', w: 34, d: 14, music: 'school', amb: null, step: 'stone', grade: fakeGrade(0),
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x9cc2ee; R.floor('grass'); R.floor('schoolfloor', { w: 34, d: 4, z: -3.6, y: 0.01, tex: 'concrete' }); R.floor('concrete', { w: 4, d: 10, x: -6, z: 1, y: 0.012 });
    R.ambient(0x7a7a90, 1.7, 0xfff0f8); R.sun(0xfff0e0, 1.5, 8, 14, 10); schoolFacade(R, 34);
    R.particles('petals', { count: 110 + (f.mat_fake || 0) * 60, top: 8 }); R.sprite('sakura', 15, -2.4, { scale: 1.1, solid: 0.4 });
    const rain = R.particles('rain', { count: 400, top: 9, name: 'rain' }); rain.visible = false;
    for (const [x, z] of [[-14, 2], [-12, 5.2], [3, 4.6], [9, 3], [14, 5]]) R.sprite('sakura', x, z, { scale: 1.2, solid: 0.4 });
    // ворота
    for (const x of [11, 15]) R.box(x, -1, 0.5, 0.5, 2.6, { tex: 'concrete' }); R.box(13, -1, 4.5, 0.3, 0.3, { tex: 'metal', y: 2.6, solid: false });
    R.door('school', -6, { label: 'В школу', z: -5.86, col: '#c8aa78', sign: 'ВХОД', cond: () => !!f.mat_s1, locked: ['~: Сначала сцена у ворот. Порядок важен — я же режиссёр.'], fn: (G) => G.goto('mat_class') });
    R.door('fest', 13, { label: 'К фестивалю (вечер)', z: -1.2, col: '#e8888a', sign: 'МАЦУРИ', cond: () => !!f.mat_s2, locked: ['~: Фестиваль вечером. Сначала — кабинет литературы.'], fn: (G) => G.goto('mat_fest', 'start', { fade: 'iris' }) });
    // стойка с зонтами
    R.box(-2, -3.6, 1.2, 0.6, 1.1, { tex: 'metal' }); for (let i = 0; i < (f.mat_umb ? 1 : 4); i++) R.sprite('umbrella', -2.4 + i * 0.3, -3.5, { scale: 0.7, y: 0.4 });
    R.inter('umb', -2, -2.6, { label: f.mat_umb ? 'Стойка (один зонт)' : 'Стойка с зонтами', cond: () => !f.mat_s1, fn: async (G) => { if (!f.mat_intro1) { f.mat_intro1 = 1; await G.run(M.s1intro); } if (!f.mat_umb) { f.mat_umb = 1; await G.run(M.s1take); await G.rebuild(); } } });
    R.inter('signal', 13, 1.4, { label: 'Дать знак дождю', cond: () => !!f.mat_umb && !f.mat_s1, fn: rainScene });
    R.sprite(canvasTex(14, 10, (c) => { c.fillStyle = '#e88a3a'; c.fillRect(2, 3, 10, 6); c.fillRect(1, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(2, 2, 1, 1); c.fillStyle = '#e88a3a'; c.fillRect(11, 1, 2, 4); }, 'cat'), 6, -3, { scale: 1.2 }); R.look('cat', 6, -2.4, 'Кот', M.cat, { r: 1.2 });
    if (!f.mat_s1) { R.npc('artemiy', 15.6, 1.8, { dir: 'l', talk: M.artemiy0 }); }
    R.npc('matvey_school', -8.6, 2.4, { id: 'matvey', talk: (G: any) => G.run(f.mat_s1 ? ['matvey: Зонт был в горошек, Варя. В горошек.'] : ['matvey: Артемий у ворот. Он всегда уходит через ворота ровно в 15:40. Я не следил. Я просто… знаю.']) });
    R.npc('student2', 0, 4.6, { talk: ['student2: Ты из какого класса? А, неважно. У нас тут вечно какие-то случайные события. Вчера у ворот трижды шёл дождь. Над воротами.'] }); R.actor('student', -16, -2.6, { dir: 'r' });
    R.spawn('start', -10, 4, 'r'); R.spawn('back', -6, -3.6); R.spawn('gate', 13, 1);
  },
  async enter(G) { if (!G.f.intro_mat) { G.f.intro_mat = 1; true } if (G.f.intro_mat === 1 && (G.f.intro_mat = 2)) await G.run(M.arrive); },
};
async function rainScene(G: any) {
  const f = G.f, mat = G.actor('matvey'), art = G.actor('artemiy'); G.focus(13, 0.5, 18);
  mat.walkTo(11.8, 1.2, 2.5); await G.run(['~: Матвей идёт к воротам с розовым зонтом. Сейчас… сейчас…']);
  const r = await timing({ title: 'Сигнал дождю', sub: 'Щёлкни пальцами, когда Матвей поравняется с Артемием', zone: 0.2 });
  if (r === 'miss') { G.room.named.rain.visible = true; G.sfx('thunder'); await G.run(M.s1bad); G.room.named.rain.visible = false; mat.place(-8.6, 2.4); G.unfocus(); return; }
  G.room.named.rain.visible = true; G.audio.ambience('rain'); await mat.walkTo(14.6, 1.6, 2.5); art.face(mat.x, mat.z); mat.face(art.x, art.z);
  await G.run(M.s1rain.slice(0, 6)); await art.walkTo(18, 3, 2.4); art.hidden = true; G.room.named.rain.visible = false; G.audio.ambience(null);
  await G.run(M.s1rain.slice(6)); f.mat_s1 = 1; f.mat_fake = 1; G.grade(fakeGrade(1)); G.unfocus(); G.note('n_mat_fake');
}
const klass: RoomDef = {
  name: 'Кабинет литературы', w: 18, d: 11, music: 'school_soft', amb: null, step: 'wood', grade: fakeGrade(1),
  build(R, G) {
    const f = G.f; R.floor('schoolfloor'); R.walls('schoolwall', { h: 5.5, tint: '#e8e0d0' }); R.ambient(0x9a9ab0, 2.4, 0xfff0e0); R.sun(0xfff0d0, 2, 10, 12, 6);
    R.decal(canvasTex(80, 36, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 80, 36); c.fillStyle = '#2e5038'; c.fillRect(2, 2, 76, 32); ptext(c, 'Тема урока:', 6, 5, { size: 8, col: '#e8e8e8' }); ptext(c, '«Не всё, что поставлено, — правда»', 6, 16, { size: 7, col: '#e8e8e8', w: 70 }); }, 'board'), { x: 0, y: 2.7, w: 7, h: 3.1 });
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) R.table(-5.2 + c * 3.4, -1 + r * 2.2, 1.6, 0.9, { tex: 'wood' });
    R.table(-5, -4, 2.2, 1, { tex: 'darkwood' }); R.sprite('book', -5, -4, { y: 1.15 }); R.sprite('flowerpot', 7.6, -4.6, { scale: 1.4 });
    for (const x of [-8.9, 8.9]) R.light(x * 0.8, 3.2, -2, 0xfff4d8, 8, 10);
    R.inter('note', -5, -3, { label: 'Написать записку «от Матвея»', cond: () => !f.mat_s2, fn: noteScene });
    R.door('out', 6, { label: 'Во двор', z: -5.46, col: '#c8aa78', fn: (G) => G.goto('mat_yard', 'back') });
    R.spawn('start', 6, -4);
  },
  async enter(G) { if (!G.f.mat_cl) { G.f.mat_cl = 1; await G.run(M.s2intro); } },
};
async function noteScene(G: any) {
  const f = G.f; const r = await pick({ ...M.s2note, confirm: 'Подбросить в портфель' } as any); f.mat_note = r; G.sfx('pencil');
  const B = new (await import('../world/room')).Builder(G.room, G);
  await G.ui.card([['ПОСЛЕ ШЕСТОГО УРОКА', 'act']]);
  const mat = B.actor('matvey_school', 1.8, 0.2, { id: 'matvey' }); const art = B.actor('artemiy', 6, -4, { id: 'artemiy' }); G.player.place(7.6, 3.8, 'l'); G.player.hidden = true; G.focus(3, -1, 16);
  await art.walkTo(3.4, 0.2, 2.5); art.face(mat.x, mat.z); mat.face(art.x, art.z); G.sfx('door'); await G.run(M.s2lock.slice(0, 7));
  const tch = B.actor('teacher', 6, -4, { id: 'teacher' }); G.sfx('door'); await tch.walkTo(4.8, -2, 2.4); tch.face(mat.x, mat.z); await G.run(M.s2lock.slice(7));
  await tch.walkTo(6, -4.6, 3); tch.hidden = true; await art.walkTo(6, -4.6, 3); art.hidden = true; G.player.hidden = false; G.player.place(4.6, 1.6, 'l'); mat.face(G.player.x, G.player.z);
  await G.run(M.s2after); f.mat_s2 = 1; f.mat_fake = 2; G.grade(fakeGrade(2)); G.unfocus();
}
const fest: RoomDef = {
  name: 'Школьный фестиваль', w: 50, d: 14, music: 'school', amb: 'crowd', step: 'stone', grade: { ...fakeGrade(2), tint: [1.0, 0.9, 1.08], bright: 0.95, bloom: 0.7 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c0818; R.floor('concrete'); R.ambient(0x3a2c50, 1.9, 0x8070b0); schoolFacade(R, 50); for (const x of [-20, -12, -4, 6, 14]) R.light(x, 3, 3, 0xffa070, 6, 9);
    R.particles('petals', { count: 80, top: 8 });
    for (let x = -23; x <= 23; x += 2.4) { const on = !f.mat_arch_down || Math.abs(x - 2) > 4; if (on) R.sprite('lantern', x, -4.2, { y: 4.4 + Math.sin(x * 0.7) * 0.25, glow: true }); if (on && Math.round(x * 10) % 48 === 0) R.light(x, 4, -3, 0xff9a70, 6, 9); }
    for (const x of [-18, -10, 10]) { R.sprite('stall', x, -3.6, { scale: 1.3, solid: 1.6 }); R.light(x, 3, -2.6, 0xffb070, 10, 8); }
    // арка фонариков
    if (!f.mat_arch_down) { for (const x of [0, 4]) R.box(x, 0, 0.3, 0.3, 4, { tex: 'wood', tint: '#c03050' }); for (let i = 0; i < 7; i++) R.sprite('lantern', 0.4 + i * 0.55, 0, { y: 3.7 + Math.sin(i / 6 * Math.PI) * 0.5, glow: true }); R.light(2, 3.6, -0.6, 0xffa070, 7, 8); R.photo('pair', 'Двое под аркой', 2, 0, { cond: () => !!(f.mat_a1 && f.mat_a2) }); }
    else for (let i = 0; i < 5; i++) R.sprite('lantern', 0.4 + i * 0.9, 0.3 + (i % 2) * 0.6, { y: 0.1, glow: true, scale: 0.8 });
    // последний фонарь
    R.box(20, -1, 0.2, 0.2, 3.4, { tex: 'darkwood' }); R.sprite('lantern', 20, -1, { y: 3.4, scale: 1.4, glow: true }); R.light(20, 3, -0.4, 0xffc080, 12, 8, { name: 'last' });
    R.box(-14, 3, 6, 3, 0.5, { tex: 'stage', solid: false }); R.sprite('mic', -14, 2.8, { y: 0.5 });
    const arch = (who: string) => f[who === 'matvey' ? 'mat_a1' : 'mat_a2'];
    const mat = R.npc('matvey_school', arch('matvey') ? 1.2 : f.mat_arch_down ? 19.4 : -10, arch('matvey') && !f.mat_arch_down ? 0.4 : f.mat_arch_down ? 0.6 : -1.6, { id: 'matvey', label: 'Матвей', talk: async (G: any) => { if (f.mat_arch_down) return climax(G); if (!f.mat_a1) { await G.run(M.s3arrange('Матвею')); f.mat_a1 = 1; await G.rebuild(); await checkArch(G); } else await G.run(['matvey/worried: Я стою. Под аркой. Чувствую себя декорацией.']); } });
    if (f.mat_arch_down) mat.pose = 'sit';
    R.npc('artemiy', arch('artemiy') && !f.mat_arch_down ? 2.8 : f.mat_arch_down ? 16.4 : 12, arch('artemiy') && !f.mat_arch_down ? 0.4 : 0.6, { label: 'Артемий', talk: async (G: any) => { if (f.mat_arch_down) return G.run(['artemiy: Он злится не на тебя. Ну, на тебя. Но не только.']); if (!f.mat_a2) { await G.run(M.s3arrange('Артемию')); f.mat_a2 = 1; await G.rebuild(); await checkArch(G); } else await G.run(['artemiy: Мне сказали, что здесь ждут. Пока жду я.']); } });
    R.crowd(['student', 'student2', 'dancer', 'student', 'courtier'], -20, 4.2, 5, 4.2, 1.6, 'f');
    R.spawn('start', -22, 2, 'r');
  },
  async enter(G) { if (!G.f.mat_f) { G.f.mat_f = 1; await G.run(M.s3intro); } },
  async photo(G, subs) { const f = G.f; if (f.mat_arch_down) return; if (!subs.includes('pair')) { if (f.mat_a1 && f.mat_a2) await G.run(M.s3noShot); return; } await G.run(M.s3photo.slice(0, 2)); G.sfx('glitch'); G.grade(fakeGrade(3)); G.shake(0.4); await G.run(M.s3photo.slice(2, 4)); G.sfx('crash'); f.mat_arch_down = 1; await G.rebuild(); await G.run(M.s3photo.slice(4)); },
  update(G, dt) { if (G.f.mat_steps && !G.f.mat_steps_done) stepsTick(G, dt); },
};
async function checkArch(G: any) { if (G.f.mat_a1 && G.f.mat_a2 && !G.f.mat_both) { G.f.mat_both = 1; await G.run(M.s3both); } }
const ST = { start: 0, max: 0, n: 0, frozen: 0, mx0: 0 };
async function climax(G: any) {
  const f = G.f; if (f.mat_steps) return; G.focus(19, 0, 16); await G.run(M.climax); await G.run(M.climaxChoice); G.unfocus();
  const mat = G.actor('matvey'); mat.pose = null; f.mat_steps = 1; ST.start = G.player.x; ST.max = 0; ST.n = 0; ST.mx0 = mat.x; G.grade({ ...fakeGrade(0), tint: [1.05, 0.98, 1.05], sat: 0.9, vig: 0.5 }); G.audio.music('school_soft');
}
function stepsTick(G: any, dt: number) {
  const p = G.player, mat = G.actor('matvey'), art = G.actor('artemiy'); const away = ST.start - p.x;
  if (away > ST.max) ST.max = away; const n = Math.max(0, Math.min(100, Math.floor(ST.max / 0.38)));
  if (n !== ST.n) { ST.n = n; G.ui.lyric(`${n} / 100`, 'шаги назад'); if (n % 10 === 0 && n) G.sfx('hit', { f: 400 + n * 4 }); }
  const back = ST.max - away > 1.2; if (back && !ST.frozen) { ST.frozen = 1; G.cut(() => G.run(M.stepsFreeze)); } if (!back) ST.frozen = 0;
  if (!back) { const tx = ST.mx0 + (art.x - 1.2 - ST.mx0) * (n / 100); if (Math.abs(mat.x - tx) > 0.05) { mat.x += Math.sign(tx - mat.x) * Math.min(Math.abs(tx - mat.x), dt * 2); mat.moving = true; mat.face(art.x, art.z); } else mat.moving = false; }
  if (n >= 100 && !G.f.mat_steps_done) { G.f.mat_steps_done = 1; G.ui.lyric(null); G.cut(() => stepsEnd(G)); }
}
async function stepsEnd(G: any) {
  const mat = G.actor('matvey'), art = G.actor('artemiy'); G.player.dir = 'r'; G.focus(17, 0, 30); mat.face(art.x, art.z); art.face(mat.x, mat.z); await G.wait(1);
  await G.run(M.stepsDone.slice(0, 2)); mat.pose = 'point'; await G.wait(0.6); mat.pose = null; await G.run(M.stepsDone.slice(2, 3)); G.sfx('pickup'); await G.run(M.stepsDone.slice(3));
  G.unfocus(); await mat.walkTo(G.player.x + 1.4, G.player.z, 5); mat.face(G.player.x, G.player.z); G.player.face(mat.x, mat.z);
  G.audio.music('school'); await G.run(M.end); G.give('lantern', true); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'matvey', [['100 STEPS TO THE INEVITABLE', 'act'], 'Матвей сделал шаг сам. Варя — сто шагов назад.', ['Иногда лучшая режиссура — уйти из кадра.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { mat_yard: yard, mat_class: klass, mat_fest: fest };
