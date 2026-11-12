// Здание театра: фойе с парадной лестницей, бельэтаж с ложами, репетиционный зал, костюмерная, трюм под сценой.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { T } from '../data/dialogue/theater';
import { D } from '../data/dialogue/hub';
import { column, chandelier, sconce, balustrade, rug, PROPTEX, piano, gear, windowBeam, photoWall, costumeRack, vanity, theatreBox } from '../world/decor';

const WARM = { tint: [1.05, 0.98, 0.9], vig: 0.45 };
const base = (R: Builder, amb = 1.6) => { R.ambient(0x4a3830, amb, 0xffe6c8); R.particles('dust', { count: 110, top: 7 }); };
const portrait = (title: string, i: number) => canvasTex(24, 32, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 32); c.fillStyle = '#2a1c14'; c.fillRect(2, 2, 20, 24); c.fillStyle = ['#3a2a3a', '#2a3a3a', '#3a3a2a', '#3a2a2a'][i % 4]; c.fillRect(3, 3, 18, 22); c.fillStyle = '#a3122a'; c.fillRect(10, 9, 5, 13); c.fillStyle = 'rgba(200,180,160,.6)'; c.fillRect(11, 5, 3, 4); for (let k = 0; k < 4; k++) { c.fillStyle = '#5a4a3a'; c.fillRect(4 + k * 5, 15 + (k % 2) * 2, 3, 9); } c.fillStyle = '#e8dcc0'; c.fillRect(3, 27, 18, 4); ptext(c, title, 12, 27, { size: 4, col: '#3a2a14', align: 'center' }); }, 'prt' + title);

const foyer: RoomDef = {
  name: 'Фойе', floor: 'Партер', w: 38, d: 20, music: 'theater', amb: 'hall', step: 'stone', grade: { ...WARM, bloom: 0.6 },
  build(R, G) {
    R.floor('checker'); R.walls('wallpaper', { h: 8, trim: 'gold' }); base(R, 1.7);
    rug(R, 0, 3, 5, 12, { col: '#6a0c18' }); rug(R, 0, -5.5, 9, 4, { col: '#5a0c18' });
    for (const x of [-12, -6, 6, 12]) for (const z of [-2, 5]) column(R, x, z, 7.6);
    chandelier(R, -9, 6.6, 1.5, 1.2, { light: 14 }); chandelier(R, 9, 6.6, 1.5, 1.2, { light: 14 });
    // парадная лестница на бельэтаж
    R.stairs(0, -2.4, 6, 9); balustrade(R, -3.2, -2.4, -3.2, -7.2, { solid: false }); balustrade(R, 3.2, -2.4, 3.2, -7.2, { solid: false });
    R.inter('up', 0, -1.6, { label: 'Парадная лестница — на бельэтаж', fn: (G) => G.goto('hub_mezz', 'stairs', { fade: 'fade' }) });
    for (const x of [-16, -12.5, 12.5, 16]) sconce(R, x, 3.6, -9.96, { light: 6 });
    // двери в партер, служебный вход, гардероб, касса, буфет
    R.door('d_stalls', -9, { to: 'hub_stage', spot: 'stalls', label: 'Двери в партер', sign: 'ПАРТЕР', col: '#6a1a22', w: 2.6, h: 3.8, fade: 'curtain' });
    R.door('d_stalls2', 9, { to: 'hub_stage', spot: 'stalls', label: 'Двери в партер', sign: 'ПАРТЕР', col: '#6a1a22', w: 2.6, h: 3.8, fade: 'curtain' });
    R.door('d_service', 6, { wall: 'w', to: 'hub_corridor', spot: 'foyer', label: 'Служебный вход «Только для артистов»', sign: 'СЛУЖЕБНЫЙ', col: '#3a2a1c' });
    R.door('d_exit', 0, { wall: 's', label: 'Парадный выход', fn: (G) => G.run(T.exitLocked) });
    R.sprite(PROPTEX.kassa(), 16.4, -6.6, { scale: 1.6, solid: 1 }); R.look('kassa', 16.4, -5.4, 'Касса', T.kassa);
    R.sprite(PROPTEX.coats(), 16.6, 1.6, { scale: 1.6, solid: 1.2 }); R.look('coats', 16.4, 3, 'Гардероб', T.coats, { photo: 'Номерок № 18' });
    R.sprite(PROPTEX.bar(), -15.8, -6.4, { scale: 1.8, solid: 1.4 }); R.look('bar', -15.8, -5, 'Буфет', T.bar);
    R.sprite('bookstand', -15.6, 2.4, { scale: 1.4, solid: 0.4 }); R.look('guest', -15.6, 3.4, 'Книга отзывов', T.guestbook);
    for (const [i, x] of [-17, 17].entries()) R.sprite('plant', x, 8.6, { scale: 1.3, solid: 0.4 });
    for (let i = 0; i < 3; i++) R.poster(['КОРОЛЕВА', 'ЧАЙКА', 'САЛОМЕЯ'][i], 'АЛЛА ЕВА', { wall: 'e', at: -6 + i * 3.5, x: 0, y: 3.4, w: 1.6, h: 2.3, face: '#b9794f' });
    R.spawn('start', 0, 6, 'b'); R.spawn('service', -17.2, 6, 'r'); R.spawn('stalls', -9, -8.2); R.spawn('stairs', 0, -1.2);
  },
  async enter(G) { if (!G.f.foyer0) { G.f.foyer0 = 1; await G.run(T.foyerFirst); } },
};
const mezz: RoomDef = {
  name: 'Бельэтаж', floor: 'Бельэтаж', w: 38, d: 16, music: 'theater', amb: 'hall', step: 'carpet', grade: WARM,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a0606; R.floor('carpet', { d: 11, z: -2.5 }); R.walls('wallgreen', { h: 6.5, trim: 'gold' }); base(R, 1.6);
    // проём над фойе: балюстрада и люстра внизу
    balustrade(R, -19, 3, -4, 3); balustrade(R, 4, 3, 19, 3); const pit = R.box(0, 6, 38, 6, 0.1, { tex: 'checker', y: -4, solid: false }); R.light(0, -1, 6, 0xffd8a0, 10, 10); for (const x of [-12, -6, 6, 12]) R.box(x, 6, 0.8, 0.8, 4, { tex: 'white', tint: '#e8d8c8', y: -4, solid: false }); R.collider(-19, 3.2, 19, 8);
    chandelier(R, -9, -0.6, 6, 1.1, { light: 8 }); chandelier(R, 9, -0.6, 6, 1.1, { light: 8 });
    R.inter('down', 0, 2.2, { label: 'Парадная лестница — вниз, в фойе', fn: (G) => G.goto('hub_foyer', 'stairs', { fade: 'fade' }) }); R.stairs(0, 5.4, 6, 4, { runner: true }).position.y = -1.2;
    // портреты постановок и бюст основателя
    ['ЧАЙКА', 'ГАМЛЕТ', 'СИРАНО', 'САД'].forEach((t, i) => R.decal(portrait(t, i), { x: -15 + i * 2.2, y: 3.4, w: 1.7, h: 2.3 }));
    R.look('portraits', -11.7, -6.6, 'Портреты постановок', T.portraits); R.sprite('bust', 15, -6.4, { scale: 1.6, solid: 0.5 }); R.look('bust2', 15, -5.4, 'Бюст основателя', T.bust);
    for (const x of [-17.5, -6, 6, 17.5]) sconce(R, x, 3.6, -7.96, { light: 5.5 });
    R.door('d_reh', -5.5, { to: 'hub_rehearsal', label: 'Репетиционный зал', sign: 'РЕПЕТИЦИИ', col: '#3a2a1c' });
    R.door('d_arch', 1, { to: 'hub_archive', label: 'Архив', sign: 'АРХИВ', cond: () => G.has('archive_card'), locked: D.archiveLocked });
    R.door('d_box', 9.5, { to: 'hub_box', label: 'Ложа для режиссёра', sign: 'ЛОЖА 3', col: '#6a1a22', fn: async (G) => { await G.run(T.boxDoor); await G.goto('hub_box'); } });
    R.door('stair', 0, { wall: 'e', to: 'hub_corridor', spot: 'stair', label: 'Служебная лестница — вниз', sign: '↓ 1' });
    // кабинет худрука за гобеленом (западная стена)
    if (f.office_open) R.door('d_office', -2, { wall: 'w', to: 'hub_office', label: 'Кабинет худрука', sign: 'К.', col: '#2a1c14' });
    else {
      R.decal(canvasTex(40, 60, (c) => { c.fillStyle = '#5a4010'; c.fillRect(0, 0, 40, 60); c.fillStyle = '#3a6244'; c.fillRect(2, 2, 36, 56); c.fillStyle = '#d4ae48'; for (let i = 0; i < 6; i++) c.fillRect(6 + (i % 2) * 14, 6 + i * 9, 14, 3); c.fillStyle = '#8e1830'; c.fillRect(14, 22, 12, 18); }, 'tapestry'), { wall: 'w', at: -2, y: 2.6, w: 2.6, h: 3.9, mask: 'none' });
      R.decal(canvasTex(40, 60, (c) => { c.fillStyle = '#0c0808'; c.fillRect(0, 0, 40, 60); c.strokeStyle = '#6a8ad0'; c.strokeRect(2.5, 2.5, 35, 57); c.fillStyle = '#6a8ad0'; c.fillRect(17, 28, 6, 9); c.fillRect(15, 30, 10, 3); }, 'officedoor'), { wall: 'w', at: -2, y: 2.6, w: 2.6, h: 3.9, mask: 'tragedy', glow: true });
      R.look('tap', -18.1, -2, 'Гобелен', ['~: Гобелен. Охота, олень, все довольны, кроме оленя. Висит немного криво — будто его часто отодвигают.'], { mask: 'none' });
      R.inter('officeTr', -18.1, -2, { label: 'Дверь за гобеленом', mask: 'tragedy', fn: async (G) => { await G.run(D.officeFind); if (!G.has('marionette')) return G.run(D.officeNoKey); await G.run(D.officeOpen); f.office_open = 1; await G.goto('hub_office'); } });
    }
    for (const x of [-14, 13]) { R.box(x, -6.6, 3, 0.8, 0.9, { tex: 'velvet' }); }
    R.spawn('start', 0, 0.8, 'b'); R.spawn('stairs', 0, 1.2, 'b'); R.spawn('stair', 17.2, 0, 'l'); R.spawn('arch', 1, -6.2); R.spawn('office', -17.2, -2, 'r'); R.spawn('reh', -5.5, -6.2); R.spawn('box', 9.5, -6.2);
  },
  async enter(G) { if (!G.f.mezz0) { G.f.mezz0 = 1; await G.run(T.mezzFirst); } },
};
const box: RoomDef = {
  name: 'Ложа № 3', floor: 'Бельэтаж', w: 14, d: 8, music: 'theater', amb: 'hall', step: 'carpet', grade: { ...WARM, vig: 0.6 }, camDist: 20,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x050304; R.floor('carpet', { d: 5, z: -1.5 }); R.walls('velvet', { h: 5 }); R.ambient(0x3a2828, 1.4, 0xffd8c0);
    for (const x of [-3, -1, 1, 3]) R.sprite('chair', x, -1.6, { scale: 1.3 }); balustrade(R, -7, 1, 7, 1, { h: 1.2 });
    // вид вниз, на сцену
    const st = R.box(0, 6, 22, 8, 0.4, { tex: 'stage', y: -7, solid: false }); for (let x = -10; x <= 10; x += 2.4) R.box(x, 2.6, 2.3, 0.3, 8, { tex: 'velvet', y: -7, solid: false });
    R.spot(0, 2, 6, 0, 6, 0xffe2b0, 60, { angle: 0.3, shadow: false });
    if (!f.act4) { const a = R.actor('alla', 0, 6, { id: 'allaBelow', pose: 'bow' }); a.y = -6.6; R.onUpdate((dt, t) => { a.pose = Math.floor(t / 2) % 2 ? 'bow' : 'arms'; }); }
    R.collider(-7, 1.2, 7, 4); R.inter('view', 0, 0.2, { label: 'Посмотреть вниз, на сцену', fn: async (G) => { const y0 = G.cam.yOff; G.cam.yOff = -5; G.focus(0, 6, 16); await G.wait(1.2); await G.run(T.boxView); G.unfocus(); G.cam.yOff = y0; } });
    R.door('out', -4.5, { label: 'На бельэтаж', col: '#6a1a22', fn: (G) => G.goto('hub_mezz', 'box') }); R.spawn('start', -4.5, -3);
  },
};
const rehearsal: RoomDef = {
  name: 'Репетиционный зал', floor: 'Бельэтаж', w: 26, d: 13, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.06, 0.97, 0.88], vig: 0.5 },
  build(R, G) {
    R.floor('parquet', { tint: '#a87a4a' }); R.walls('woodwall', { h: 6 }); R.ambient(0x4a3828, 1.6, 0xffd8b0);
    for (let i = 0; i < 6; i++) R.decal(canvasTex(24, 40, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 40); c.fillStyle = '#4a3a30'; c.fillRect(1, 1, 22, 38); c.fillStyle = 'rgba(255,220,180,.18)'; c.fillRect(3, 2, 3, 36); c.fillRect(14, 2, 1, 36); }, 'rehmirror'), { x: -10 + i * 4, y: 2.6, w: 3.9, h: 4.2 }); R.particles('dust', { count: 120, top: 6 });
    R.light(-8, 4, 2, 0xffb070, 12, 14); R.light(8, 4, 2, 0xffb070, 12, 14); R.spot(-6, 7, 6, 0, 0, 0xffc890, 30, { angle: 0.5, cone: 0.04 });
    R.box(0, -6.1, 26, 0.12, 0.12, { tex: 'gold', y: 1.3, solid: false }); for (let x = -12; x <= 12; x += 4) R.box(x, -6.1, 0.1, 0.4, 1.3, { tex: 'metal', solid: false });
    piano(R, 8.6, 2.6, -0.4); R.look('piano', 8, 4.4, 'Рояль', T.piano); R.sprite('bookstand', 6.4, 3.6, { scale: 1.1 });
    for (let i = 0; i < 4; i++) R.sprite('chair', -11.5, 4 - i * 0.12, { y: i * 0.45, scale: 1.1 }); R.sprite(PROPTEX.screen(), -11.4, -2, { scale: 1.6, solid: 1 });
    const tape = canvasTex(64, 32, (c) => { const names = ['П', 'Р', 'М', 'Э', 'Л', 'А']; names.forEach((n, i) => { const x = 8 + i * 9, y = 10 + (i % 2) * 8; c.fillStyle = ['#c9a7ff', '#ffb057', '#ff8fd0', '#9fc3e8', '#ffe27a', '#ff7ab8'][i]; c.fillRect(x - 3, y, 7, 1); c.fillRect(x, y - 3, 1, 7); }); c.fillStyle = '#c8203c'; c.fillRect(29, 26, 7, 1); c.fillRect(32, 23, 1, 7); c.fillStyle = '#2f7f82'; c.fillRect(29, 27, 7, 1); c.fillRect(33, 23, 1, 7); }, 'tape');
    R.decal(tape, { flat: true, x: 0, z: 0, y: 0.03, w: 12, h: 6 }); R.look('tape', 0, 1.6, 'Разметка на полу', T.tape);
    R.look('mirror', -3, -5.2, 'Зеркальная стена', T.rehMirror, { mask: 'none' }); R.look('mirrorTr', -3, -5.2, 'Зеркальная стена', T.rehMirrorTr, { mask: 'tragedy', photo: 'Две фигуры у станка' });
    R.look('barre', 4, -5.2, 'Балетный станок', T.barre);
    R.door('out', 0, { wall: 's', to: 'hub_mezz', spot: 'reh', label: 'На бельэтаж' }); R.spawn('start', 0, 4.4, 'b');
  },
  async enter(G) { if (!G.f.reh0) { G.f.reh0 = 1; await G.run(T.rehFirst); } },
};
const costume: RoomDef = {
  name: 'Костюмерная', floor: 'Партер', w: 26, d: 14, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.04, 0.97, 0.94], vig: 0.5 },
  build(R, G) {
    R.floor('floor'); R.walls('wallpaper', { h: 6, trim: 'darkwood' }); base(R, 1.5);
    for (const x of [-8, 0, 8]) R.light(x, 4.4, -1, 0xffd8a8, 9, 10, { flicker: 0.03 });
    costumeRack(R, -6, -5.6, 7, 0); costumeRack(R, 6, -5.6, 7, 3); costumeRack(R, -7, -1.4, 5, 5); costumeRack(R, 7, -1.4, 5, 1);
    R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, 40, 10); ptext(c, 'АЛЛА ЕВА', 20, 2, { size: 6, col: '#8e1830', align: 'center' }); }, 'tagAlla'), { x: -9, y: 2.9, z: -5.6, w: 1.6, h: 0.4, glow: true });
    R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, 40, 10); ptext(c, 'ВАРЯ', 20, 2, { size: 6, col: '#2f7f82', align: 'center' }); }, 'tagVarya'), { x: -3, y: 2.9, z: -5.6, w: 1.6, h: 0.4, glow: true });
    R.look('rackAlla', -6, -4.6, 'Вешалки «Алла Ева» и «Варя»', T.rackAlla, { mask: 'none' }); R.look('rackAllaTr', -6, -4.6, 'Подкладка платьев', T.rackAllaTr, { mask: 'tragedy' });
    for (const [x, z] of [[-11, 3], [11, 3.4], [3, 4.4]]) R.sprite(PROPTEX.mannequin(), x, z, { scale: 1.4, solid: 0.4 });
    R.look('mann', 3, 5.2, 'Манекен Королевы', T.mannequin);
    for (const [x, z, n] of [[-11.6, -5.8, 3], [11.6, -5.8, 2], [-2.4, 5.6, 2]]) for (let i = 0; i < n; i++) R.sprite(PROPTEX.hatbox(), x + (i % 2) * 0.3, z, { y: i * 1.05, scale: 1.1 });
    R.sprite(PROPTEX.trunk(), 9.6, 5.4, { scale: 1.5, solid: 0.9 }); R.sprite(PROPTEX.feathers(), 10.2, 5.2, { y: 0.9, scale: 1.2 }); R.sprite(PROPTEX.boa(), -6, 5.6, { y: 0.4, scale: 1.4 });
    R.table(-3.6, 2.6, 3, 1.4); R.sprite(canvasTex(16, 12, (c) => { c.fillStyle = '#2a2a2e'; c.fillRect(2, 4, 12, 8); c.fillRect(10, 0, 4, 6); c.fillStyle = '#d4ae48'; c.fillRect(4, 6, 6, 1); c.fillStyle = '#2f7f82'; c.fillRect(0, 11, 16, 1); }, 'sew'), -4, 2.6, { y: 1.15, scale: 1.2 }); R.look('sew', -3.6, 3.8, 'Швейная машинка', T.sewing);
    vanity(R, 0, -5.8, { w: 3, clutter: 4, photos: 2 }); R.sprite(PROPTEX.screen(), 11.6, -1.2, { scale: 1.5 });
    R.door('out', 0, { wall: 's', to: 'hub_corridor', spot: 'costume', label: 'В коридор' }); R.spawn('start', 0, 5.6, 'b');
  },
  async enter(G) { if (!G.f.cost0) { G.f.cost0 = 1; await G.run(T.costumeFirst); } },
};
const trap: RoomDef = {
  name: 'Трюм', floor: 'Под сценой', w: 34, d: 16, music: 'backstage', amb: 'hum', step: 'metal', grade: { tint: [0.9, 0.95, 1.08], vig: 0.6, sat: 0.9 },
  build(R, G) {
    R.room.group.userData.bg = 0x050608; R.floor('metal'); R.walls('brick', { h: 7 }); R.ambient(0x40485a, 2.6, 0xa0b0d0); R.particles('dust', { count: 90, top: 6, color: 0xc8d8ff });
    gear(R, -6, 3.2, -6.6, 3, { speed: 0.12 }); gear(R, -1.4, 1.6, -6.4, 1.4, { teeth: 10, speed: -0.26 }); gear(R, 6, 3.4, -4.4, 3.2, { speed: 0.06, teeth: 24 }); gear(R, 1.6, 1.4, -5.8, 1.2, { teeth: 12, speed: -0.16 }); gear(R, 12, 2.4, -6.6, 2, { speed: -0.18 });
    R.collider(2.2, -5.8, 9.8, -3.2); R.spot(0, 7, 4, 0, 4, 0xffe8c0, 60, { angle: 0.22, cone: 0.12, pen: 0.2 }); R.box(0, 4, 2.4, 2.4, 0.1, { color: 0xfff0c8, emissive: 0x806030, y: 6.9, solid: false });
    for (let x = -15; x <= 15; x += 3) R.box(x, -6, 0.3, 4, 0.4, { tex: 'darkwood', y: 6.6, solid: false, cast: false }); for (const x of [-4, 4]) R.box(x, -2, 0.3, 0.3, 7, { tex: 'darkwood', solid: false });
    for (const x of [-12, -9, 14]) { R.box(x, -6.5, 0.3, 0.3, 7, { tex: 'metal' }); R.box(x, -6.5, 0.9, 0.9, 1.2, { tex: 'metal', y: 2 + (x % 3), solid: false }); R.box(x + 0.25, -6.3, 0.03, 0.03, 7, { color: 0xb8a070, solid: false }); }
    for (const [x, z] of [[-14, 4], [-13, 5.4], [15, 4.8]]) R.sprite(PROPTEX.sandbag(), x, z, { scale: 1.4 }); R.sprite(PROPTEX.coil(), -10, 5, { scale: 1.6 });
    for (const x of [-12, 0, 12]) { R.light(x, 3.4, 2, 0xffd890, 12, 12, { flicker: 0.08 }); R.sprite('lamp', x, 2.4, { y: 0.1, scale: 0.8 }); }
    R.light(-6, 5, -3, 0xffc070, 14, 12); R.light(8, 4, -3, 0xffc070, 10, 12);
    R.box(-10, 2, 3, 2, 1.4, { tex: 'wood' }); R.decal(canvasTex(16, 10, (c) => { c.fillStyle = '#6e5133'; c.fillRect(0, 0, 16, 10); ptext(c, 'К.', 8, 1, { size: 8, col: '#2a1c14', align: 'center' }); }, 'crateK'), { x: -10, y: 0.8, z: 3.02, w: 1.4, h: 0.9 });
    R.look('crate', -10, 3.6, 'Ящик «К.»', T.crate); R.look('gears', -6, -4.4, 'Шестерни поворотного круга', T.gears);
    R.box(0, 4, 2.4, 2.4, 0.3, { tex: 'metal', tint: '#8a7a6a' }); for (const dx of [-1.1, 1.1]) R.box(dx, 4, 0.15, 0.15, 6, { tex: 'metal', solid: false });
    R.look('lift', 0, 5.6, 'Подъёмник люка', T.lift);
    R.decal(canvasTex(48, 24, (c) => { for (let i = 0; i < 18; i++) { c.fillStyle = 'rgba(160,20,30,.75)'; c.fillRect(4 + i * 2.3, 12 + Math.sin(i * 0.8) * 6 + (i % 2) * 2, 2, 1.5); } }, 'paintsteps'), { flat: true, x: 9, z: 4.4, y: 0.03, w: 9, h: 4.5 }); R.look('paint', 9, 5.4, 'Следы красной краски', T.paint);
    R.inter('hatch', 0, 3, { label: 'Подъёмник — наверх, на сцену', fn: async (G) => { G.sfx('gear'); await G.goto('hub_stage', 'hatch', { fade: 'fade' }); } });
    R.door('stairs', 15, { wall: 's', to: 'hub_corridor', spot: 'trap', label: 'Лестница — наверх, в коридор' });
    R.spawn('start', 15, 6, 'b'); R.spawn('stairs', 15, 6, 'b'); R.spawn('hatch', 0, 5.6);
  },
  async enter(G) { if (!G.f.trap0) { G.f.trap0 = 1; await G.run(T.trapFirst); } },
};
export const extraRooms: Record<string, RoomDef> = { hub_foyer: foyer, hub_mezz: mezz, hub_box: box, hub_rehearsal: rehearsal, hub_costume: costume, hub_trap: trap };
