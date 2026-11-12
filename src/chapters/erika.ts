// Глава Эрики — THE CITY NEVER SLEEPS. Нуар 1940-х: монохром, дождь, джаз.
// Механики: опрос свидетелей, поиск улик (одна видна только в маске Трагедии), доска расследования —
// игрок сам связывает показание с противоречащей ему уликой; финальный выбор принадлежит Эрике.
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { E } from '../data/dialogue/erika';
import { board } from '../ui/minigames';
import { chapterIntro, finishChapter, rainy, fog } from './common';

const NOIR = { sat: 0.04, tint: [1.0, 0.98, 0.94], vig: 0.6, contrast: 1.12, bright: 1.15, bloom: 0.35 };
const EVID = ['e_photo', 'e_contract', 'e_letter', 'e_ticket', 'e_matches'];
const sign = (t: string, w = 72) => canvasTex(w, 14, (c) => { c.fillStyle = '#111'; c.fillRect(0, 0, w, 14); c.strokeStyle = '#ddd'; c.strokeRect(0.5, 0.5, w - 1, 13); ptext(c, t, w / 2, 3, { size: 8, col: '#f4f4f4', align: 'center' }); }, 'nsign' + t);
function interior(R: Builder, wall = 'wallpaper', floor = 'parquet') { R.room.group.userData.bg = 0x050505; R.floor(floor); R.walls(wall, { h: 6, trim: 'darkwood' }); R.ambient(0x606060, 2.8, 0xe0e0e0); R.particles('dust', { count: 60, top: 5, color: 0xdddddd }); }
function blinds(R: Builder, x: number) { R.decal(canvasTex(24, 32, (c) => { c.fillStyle = '#222'; c.fillRect(0, 0, 24, 32); for (let y = 2; y < 30; y += 3) { c.fillStyle = '#d8d8d8'; c.fillRect(2, y, 20, 2); } }, 'blinds'), { x, y: 3, w: 2.2, h: 2.9, glow: true }); R.spot(x, 4, -3.5, x + 2, 3, 0xe8e8ff, 50, { angle: 0.35, cone: 0.06, pen: 0.2 }); }
const witness = (R: Builder, ch: string, x: number, z: number, talk: any, flag: string, G: any) => R.npc(ch, x, z, { talk: async (G: any) => { await G.run(talk); G.flag(flag) && G.toast('Показание записано', '✎'); } });

const office: RoomDef = {
  name: 'Контора «Сыск и Ко»', chapter: 'Акт II · Эрика', w: 16, d: 10, music: 'noir', amb: 'rain', step: 'wood', grade: NOIR,
  build(R, G) {
    const f = G.f; interior(R, 'plaster'); blinds(R, -4); blinds(R, 1.5); R.light(4, 2.6, -2, 0xfff0d0, 10, 8, { flicker: 0.04 });
    R.table(4, -2.4, 3, 1.4, { tex: 'darkwood' }); R.sprite('typewriter', 3.4, -2.4, { y: 1.15 }); R.sprite('lamp', 5, -2.6, { y: 1.1, scale: 0.45 });
    R.decal(canvasTex(56, 40, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 56, 40); c.fillStyle = '#9a8a6a'; c.fillRect(2, 2, 52, 36); const n = EVID.filter((e) => G.has(e)).length; for (let i = 0; i < n; i++) { c.fillStyle = '#eee'; c.fillRect(6 + (i % 3) * 16, 6 + Math.floor(i / 3) * 16, 12, 10); c.fillStyle = '#a00'; c.fillRect(11 + (i % 3) * 16, 6 + Math.floor(i / 3) * 16, 2, 2); } c.fillStyle = '#ddd'; c.fillRect(22, 14, 12, 14); if (f.eri_board) { c.strokeStyle = '#c00'; c.beginPath(); c.moveTo(12, 10); c.lineTo(28, 20); c.lineTo(44, 10); c.lineTo(28, 30); c.stroke(); } }, 'eboard' + EVID.filter((e) => G.has(e)).length + !!f.eri_board), { x: -1.2, y: 3, w: 4.2, h: 3 });
    R.inter('board', -1.2, -4, { label: 'Доска расследования', fn: async (G) => {
      if (f.eri_board) return G.run(['erika: Нитки натянуты. Полночный поезд ждать не будет.']);
      if (!f.eri_b0) { f.eri_b0 = 1; await G.run(E.board0); }
      const n = EVID.filter((e) => G.has(e)).length, t = [1, 2, 3, 4, 5].filter((i) => f['eri_t' + i]).length; if (n < 5 || t < 5) return G.run([`erika: Показаний: ${t} из 5. Улик: ${n} из 5. Город ещё не всё рассказал.`]);
      const r = await board({ title: 'Доска расследования', sub: 'дело Вронской', intro: 'Свяжи ниткой показание и улику, которая ему противоречит. Не все показания лживы, и не все улики полезны.',
        left: { title: 'Показания', items: [{ id: 't1', title: 'Сол, бармен', text: '«Ушла в полночь, одна, в слезах».' }, { id: 't2', title: 'Мэй, певица', text: '«Мы не общались. Соперницы».' }, { id: 't3', title: 'Грей, режиссёр', text: '«В пятницу была счастлива — главная роль!»' }, { id: 't4', title: 'Вейс, коллекционер', text: '«Не был знаком лично».' }, { id: 't5', title: 'Кассир', text: '«На вокзале не появлялась».' }] },
        right: { title: 'Улики', items: [{ id: 'e1', title: 'Фото из гримёрки Мэй', text: '«Сестрёнке — от той, кто в третьем ряду. Л.»' }, { id: 'e2', title: 'Контракт', text: 'Роль «передана» в четверг.' }, { id: 'e3', title: 'Записка', text: '«Аркадий, спасибо за цветы… у моря. Л.»' }, { id: 'e4', title: 'Квитанция', text: 'Суббота. Чемодан. Сдала: Вронская Л.' }, { id: 'e5', title: 'Спички', text: 'Клуб «Синяя нота».' }] },
        pairs: [['t2', 'e1', 'Мэй и Лидия — подруги. Мэй прикрывает её.'], ['t3', 'e2', 'Роль отобрали до пятницы. «Счастлива» — заученная ложь.'], ['t4', 'e3', 'Вейс знал её и помогал ей.'], ['t5', 'e4', 'Чемодан на вокзале — значит, и она была там.']], wrong: E.wrong });
      if (r.done) { f.eri_board = 1; G.sfx('stamp'); await G.run(E.boardDone); await G.rebuild(); } } });
    R.npc('erika_noir', 2.2, 0.6, { id: 'erika', talk: (G: any) => G.run(f.eri_board ? ['erika: Вокзал. Полночь. Не опаздывай — поезда в этом городе ходят точнее людей.'] : ['erika: Опроси всех. Смотри на руки, а не на лица. Лица здесь давно научились врать.']) });
    R.box(-6.4, -4, 1.4, 1, 2.6, { tex: 'darkwood' }); R.sprite('suitcase', -6.4, -3.5, { y: 2.6 });
    R.door('out', 6.2, { label: 'На улицу', z: -4.96, col: '#3a3a3a', sign: 'СЫСК', fn: (G) => G.goto('eri_street', 'office') });
    R.spawn('start', 0, 2.4, 'b');
  },
  async enter(G) { if (await chapterIntro(G, 'eri', [['АКТ II · THE MISSING CAST', 'act'], ['THE CITY NEVER SLEEPS', 'big'], ['нуар · 1940-е · дождь, который всё помнит', 'sm']])) { G.setPlayerChar('varya_noir'); await G.run(E.arrive); } },
};
const street: RoomDef = {
  name: 'Улица под дождём', w: 46, d: 12, music: 'noir', amb: 'rain', step: 'stone', grade: NOIR, camDist: 25,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x060606; fog(R, 0x0a0a0a, 22, 48); R.floor('cobble'); R.floor('asphalt', { d: 4, z: 4, y: 0.01 });
    R.ambient(0x5a5a5a, 3.0, 0xd8d8d8); rainy(R, G, { thunder: true });
    R.box(0, -5.6, 46, 1, 8, { tex: 'brick', tint: '#8a8a8a' });
    const doors: [string, number, string, string][] = [['eri_office', -18, 'Контора «Сыск»', 'СЫСК'], ['eri_club', -7, 'Джаз-клуб «Синяя нота»', 'СИНЯЯ НОТА'], ['eri_studio', 4, 'Киностудия', 'СЕРЕБРЯНЫЙ ЭКРАН'], ['eri_collector', 13, 'Особняк коллекционера', 'ВЕЙС'], ['eri_station', 20.5, 'Вокзал', 'ВОКЗАЛ']];
    for (const [to, x, label, sg] of doors) { R.door('d_' + to, x, { label, z: -5.06, col: '#2a2a2a', fn: (G) => G.goto(to, 'start', { fade: 'iris' }) }); R.decal(sign(sg, sg.length * 6 + 12), { x, y: 4.4, z: -5.0, w: (sg.length * 6 + 12) / 16 * 1.2, h: 1.05, glow: true }); R.light(x, 4.4, -3.5, 0xf0f0f0, 7, 8, { flicker: x === 4 ? 0.3 : 0.05 }); }
    for (const x of [-12, 0, 9, 17]) { R.sprite('streetlamp', x, 1, { solid: 0.2, opacity: 0.9 }); R.light(x, 3.2, 1.6, 0xfff4e0, 16, 11); }
    R.decal(canvasTex(30, 40, (c) => { c.fillStyle = '#ddd'; c.fillRect(0, 0, 30, 40); c.fillStyle = '#222'; c.fillRect(8, 6, 14, 16); c.fillStyle = '#111'; c.fillRect(6, 4, 18, 6); ptext(c, 'АЛЛА ЕВА', 15, 26, { size: 6, col: '#111', align: 'center' }); ptext(c, 'сегодня', 15, 33, { size: 5, col: '#444', align: 'center' }); }, 'npost'), { x: -2.2, y: 2.6, z: -5.04, w: 1.6, h: 2.1 });
    R.look('poster', -2.2, -4, 'Афиша', ['~: «Алла Ева. Сегодня. Всегда». На месте лица — тень от полей шляпы. Только каре видно.'], { photo: 'Афиша без лица' });
    R.npc('erika_noir', -16, 1.6, { id: 'erika', talk: ['erika: Я держу улицу. Если кто-то выйдет из клуба с чемоданом — я замечу.'] });
    R.spawn('start', -18, -3.6); R.spawn('office', -18, -3.6); for (const [to, x] of doors) R.spawn(to.replace('eri_', ''), x, -3.6);
  },
  async enter(G, from) { if (!G.f.eri_st) { G.f.eri_st = 1; await G.run(E.street); } const sp = from.replace('eri_', ''); if (G.room.spawns[sp]) { const s = G.room.spawns[sp]; G.player.place(s.x, s.z, 'f'); G.camSnap(); } },
};
const club: RoomDef = {
  name: 'Джаз-клуб «Синяя нота»', w: 26, d: 12, music: 'noir', amb: 'crowd', step: 'carpet', grade: NOIR,
  build(R, G) {
    const f = G.f; interior(R, 'wallpaper', 'parquet'); R.light(-6, 3.5, -2, 0xffffff, 12, 10); R.spot(6, 9, 2, 6, -3.4, 0xffffff, 35, { angle: 0.22, cone: 0.07 });
    R.box(6, -4, 6, 3, 0.6, { tex: 'stage', solid: false }); R.sprite('mic', 6, -3.4, { y: 0.6 }); R.sprite('speaker', 3.4, -4.8, { y: 0.6 }); R.sprite('speaker', 8.6, -4.8, { y: 0.6 });
    R.box(-7, -3.2, 6, 1.2, 1.2, { tex: 'darkwood' }); for (let i = 0; i < 6; i++) R.box(-9.4 + i * 0.9, -5.4, 0.2, 0.2, 0.6, { color: 0x888888, y: 2.4, solid: false });
    for (const [x, z] of [[-2, 2], [2, 3.4], [-6, 3.6]]) { R.table(x, z, 1.4, 1.4); R.sprite('candle', x, z, { y: 1.15 }); }
    witness(R, 'barman', -7, -4.4, E.sol, 'eri_t1', G); witness(R, 'singer', 6, -3, E.mei, 'eri_t2', G);
    R.door('back', 11, { label: 'Гримёрка Мэй', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_dressing') });
    R.door('out', -11, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'club') });
    for (const [i, [x, z]] of [[-3, 1.4], [1, 2.8], [-7, 2.9]].entries()) R.actor(['student', 'cashier', 'courtier'][i], x + 0.9, z, { dir: 'l', id: 'patron' + i, pose: 'sit' });
    R.spawn('start', -11, -4.4); R.spawn('back', 11, -4.4);
  },
};
const meiRoom: RoomDef = {
  name: 'Гримёрка Мэй', w: 12, d: 9, music: 'noir', amb: 'crowd', step: 'carpet', grade: NOIR,
  build(R, G) {
    interior(R, 'wallpaper'); R.table(0, -3.6, 3, 1); R.decal(canvasTex(32, 40, (c) => { c.fillStyle = '#888'; c.fillRect(0, 0, 32, 40); c.fillStyle = '#ccc'; c.fillRect(3, 3, 26, 34); for (let y = 4; y < 38; y += 6) { c.fillStyle = '#fff'; c.fillRect(0, y, 2, 2); c.fillRect(30, y, 2, 2); } }, 'mmirror'), { x: 0, y: 3, w: 2.2, h: 2.8 });
    R.light(0, 3, -3.4, 0xffffff, 10, 7); R.sprite(canvasTex(10, 12, (c) => { c.fillStyle = '#3a3a3a'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#5a5a5a'; c.fillRect(1, 1, 8, 10); }, 'framebk'), 1.2, -3.6, { y: 1.15, mask: 'none' });
    R.sprite(canvasTex(10, 12, (c) => { c.fillStyle = '#3a3a3a'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#ddd'; c.fillRect(1, 1, 8, 10); c.fillStyle = '#333'; c.fillRect(2, 5, 2, 5); c.fillRect(6, 5, 2, 5); c.fillStyle = '#999'; c.fillRect(2, 3, 2, 2); c.fillRect(6, 3, 2, 2); }, 'framefr'), 1.2, -3.6, { y: 1.15, mask: 'tragedy', glow: true });
    R.inter('frame', 1.2, -2.6, { label: 'Рамка лицом к стене', mask: 'none', fn: async (G) => { await G.run(E.meiRoom); await G.run(E.meiPhotoNo); if (!G.flag('eri_tr_hint')) { G.set('eri_tr_hint', 1); await G.run(['erika: (из-за двери) Варя, у тебя ведь есть эти твои маски? Трагедия видит то, что спрятали. Попробуй.']); } } });
    R.inter('frameTr', 1.2, -2.6, { label: 'Перевёрнутая фотография', mask: 'tragedy', photo: 'Мэй и Лидия', fn: (G) => G.run(E.meiPhotoTr) });
    R.box(-4.4, -3.6, 1.4, 1, 2.6, { tex: 'darkwood' }); R.sprite('flowerpot', 4.4, -3.8, { scale: 1.4 });
    R.door('out', -3, { label: 'В зал', z: -4.46, col: '#3a3a3a', fn: (G) => G.goto('eri_club', 'back') }); R.spawn('start', -3, -3);
  },
};
const studio: RoomDef = {
  name: 'Киностудия «Серебряный экран»', w: 26, d: 12, music: 'noir', amb: 'hum', step: 'wood', grade: NOIR,
  build(R, G) {
    interior(R, 'concrete', 'stage'); R.spot(-4, 8, 3, -4, -2, 0xffffff, 140, { angle: 0.35, cone: 0.08 }); R.light(6, 3, 0, 0xffffff, 8, 10);
    R.box(-4, -4, 8, 0.4, 4, { tex: 'paper', solid: false }); R.sprite('filmcam', 1, 0.6, { scale: 1.4, solid: 0.5 }); R.sprite('stagelight', -9, 0, { scale: 2 });
    R.sprite('chair', 3.6, 1.8, { scale: 1.2 }); R.table(7, -3, 2.6, 1.2); R.sprite('book', 7, -3, { y: 1.15 });
    witness(R, 'director', 3.6, 0.6, E.grey, 'eri_t3', G);
    R.inter('desk', 7, -2, { label: 'Стол режиссёра', fn: async (G) => { if (!G.has('e_contract')) await G.run(E.greyDesk); else await G.run(['~: Контракт уже у меня. Красная печать «ПЕРЕДАНО» никуда не делась.']); } });
    R.door('out', -11, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'studio') }); R.spawn('start', -11, -4.4);
  },
};
const collector: RoomDef = {
  name: 'Кабинет коллекционера', w: 18, d: 10, music: 'noir', amb: 'rain', step: 'carpet', grade: NOIR,
  build(R, G) {
    interior(R, 'woodwall', 'carpet'); R.light(0, 3.4, -1, 0xffffff, 12, 10, { flicker: 0.05 }); blinds(R, 5);
    for (const x of [-6, -3]) { R.box(x, -4.3, 2.6, 0.8, 4, { tex: 'darkwood' }); R.sprite('masks', x, -3.9, { y: 2.2, scale: 1.2 }); R.sprite('bust', x + 0.6, -3.9, { y: 0.9 }); }
    R.look('shelf', -4.5, -3.2, 'Полка с реквизитом', E.weissShelf);
    R.table(2, -1.6, 3, 1.4, { tex: 'darkwood' }); R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#eee'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#888'; c.fillRect(2, 2, 6, 1); }, 'env2'), 2.6, -1.6, { y: 1.15 });
    R.inter('desk', 2.6, -0.4, { label: 'Конверт на столе', fn: async (G) => { if (!G.has('e_letter')) await G.run(E.weissDesk); else await G.run(['~: Записка у меня. «Увидимся у моря».']); } });
    witness(R, 'collector', -1, 1, E.weiss, 'eri_t4', G);
    R.door('out', 6.6, { label: 'На улицу', z: -4.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'collector') }); R.spawn('start', 6.6, -3.4);
  },
};
const station: RoomDef = {
  name: 'Вокзал', w: 34, d: 12, music: 'noir', amb: 'rain', step: 'stone', grade: NOIR,
  build(R, G) {
    const f = G.f; interior(R, 'stone', 'cobble'); R.light(-6, 4, -1, 0xffffff, 14, 14); R.light(8, 4, -1, 0xffffff, 10, 12, { flicker: 0.1 });
    R.decal(canvasTex(48, 16, (c) => { c.fillStyle = '#111'; c.fillRect(0, 0, 48, 16); ptext(c, 'К МОРЮ — 00:00', 24, 4, { size: 8, col: '#eee', align: 'center' }); }, 'depart'), { x: -2, y: 4.6, w: 5, h: 1.6, glow: true });
    R.box(-11, -4.2, 4, 1.2, 1.4, { tex: 'darkwood' }); R.decal(canvasTex(40, 12, (c) => { c.fillStyle = '#222'; c.fillRect(0, 0, 40, 12); ptext(c, 'КАССА', 20, 2, { size: 8, col: '#eee', align: 'center' }); }, 'kassa'), { x: -11, y: 3.2, w: 3, h: 0.9 });
    witness(R, 'cashier', -11, -5.2, E.cashier, 'eri_t5', G);
    R.box(4, -4.6, 3.4, 0.8, 2.6, { tex: 'metal', tint: '#aaa' }); R.inter('locker', 4, -3.6, { label: 'Камера хранения', fn: async (G) => { if (!G.has('e_ticket')) await G.run(E.locker); else await G.run(['~: Квитанция у меня. Чемодан Вронской ждёт свою хозяйку.']); } });
    for (const x of [-4, 0]) R.box(x, 2.6, 2.6, 0.7, 0.6, { tex: 'wood' }); if (!G.has('e_matches')) { R.sprite(canvasTex(6, 4, (c) => { c.fillStyle = '#ddd'; c.fillRect(0, 0, 6, 4); c.fillStyle = '#333'; c.fillRect(1, 1, 4, 1); }, 'match'), -4, 2.6, { y: 0.62, glow: true, name: 'mspr' }); R.inter('matches', -4, 3.4, { label: 'Спичечный коробок', fn: async (G) => { await G.run(E.matches); G.room.named.mspr.visible = false; } }); }
    R.door('platform', 13, { label: 'На перрон', z: -5.96, col: '#2a2a2a', sign: 'ПЕРРОН', cond: () => !!f.eri_board, locked: E.platformLocked, fn: (G) => G.goto('eri_platform', 'start', { fade: 'fade' }) });
    R.door('out', -15, { label: 'На улицу', z: -5.96, col: '#3a3a3a', fn: (G) => G.goto('eri_street', 'station') }); R.spawn('start', -15, -4.4);
  },
};
const platform: RoomDef = {
  name: 'Перрон', w: 34, d: 10, music: 'noir', amb: 'rain', step: 'stone', grade: { ...NOIR, vig: 0.85 }, camDist: 21,
  build(R, G) {
    R.room.group.userData.bg = 0x050505; fog(R, 0x101010, 14, 40); R.floor('cobble'); R.ambient(0x5a5a5a, 2.8, 0xd8d8d8); rainy(R, G);
    R.box(0, -4.4, 34, 2.6, 3.4, { tex: 'metal', tint: '#666' }); for (let x = -15; x < 16; x += 3.4) R.decal(canvasTex(16, 10, (c) => { c.fillStyle = '#222'; c.fillRect(0, 0, 16, 10); c.fillStyle = '#e8e0c8'; c.fillRect(2, 2, 12, 6); }, 'twin'), { x, y: 2.4, z: -3.08, w: 2, h: 1.2, glow: true });
    R.particles('dust', { count: 140, top: 5, color: 0xffffff, name: 'steam' });
    R.light(6, 3.4, 0, 0xfff4e0, 12, 10); R.sprite('streetlamp', 6, 0.4);
    R.actor('lydia', 8.4, -1.8, { id: 'lydia', dir: 'l' }); R.sprite('suitcase', 9.2, -1.6, { scale: 1.2 });
    const er = R.actor('erika_noir', -12, 1, { id: 'erika' }); G.follow(er);
    R.trigger(2, -5, 6, 5, platformScene); R.spawn('start', -14, 1, 'r');
  },
};
async function platformScene(G: any) {
  const ly = G.actor('lydia'), er = G.actor('erika'); G.unfollow(er); await er.walkTo(5.6, -1.4, 3); er.face(ly.x, ly.z); G.player.face(ly.x, ly.z); G.focus(6, -1.4, 16);
  await G.run(E.platform); await G.run(E.choice.slice(0, 1)); await G.run(E.choice.slice(1, 4));
  G.sfx('bell'); await ly.walkTo(16, -2.6, 2); ly.hidden = true; G.sfx('engine'); G.shake(0.2); await G.run(E.choice.slice(4)); G.unfocus();
  G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'erika', [['THE CITY NEVER SLEEPS', 'act'], 'Эрика закрыла дело по-своему.', ['Иногда пропавший человек просто нашёл выход.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { eri_office: office, eri_street: street, eri_club: club, eri_dressing: meiRoom, eri_studio: studio, eri_collector: collector, eri_station: station, eri_platform: platform };
