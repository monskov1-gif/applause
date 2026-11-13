// Theater Hub: Театр имени М. Ковалевского. Акты I–IV: гримёрка, коридор, сцена, закулисье, мастерская, архив, кабинет.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { D, PAPERS, REH } from '../data/dialogue/hub';
import { pick, board, timing } from '../ui/minigames';
import { CHARS } from '../data/chars';
import { balustrade } from '../world/decor';
import { mirror3D, window3D, wardrobe, bookshelf, sofa, armchair, screen3D, coatStand, desk, corkBoard, statue, palm } from '../world/decor3d';
import { sconce, rug, PROPTEX, theatreBox, chandelier, vanity, costumeRack, photoWall, column, clutterTex, photoTex as photoTexV, gear, windowBeam } from '../world/decor';
import { caseBoard, witness, caseFind, returnClue } from './casework';
import { CASE } from '../data/dialogue/case';
import { extraRooms, pWardrobe, coatStandTex, featherTex, pxTex, rr, hsh, pGear, pPalm, layer, crisp, settleTex, falloff } from './hubplus';

const FRIENDS = ['polina', 'ruben', 'matvey', 'erika', 'liza', 'angelina'];
export const ROLES: Record<string, [string, string]> = {
  polina: ['Фрейлина со свечой', 'Смотрительница маяка, которая всех выводит'], ruben: ['Капитан стражи', 'Механик сцены, которого наконец видно'],
  matvey: ['Придворный поэт (без слов)', 'Шут, который говорит правду'], erika: ['Советница Королевы', 'Летописец, который записывает как было'],
  liza: ['Дама в окне', 'Дама, которая вышла из окна'], angelina: ['Придворная певица', 'Голос, который поёт своё'],
};
const mirrorTex = (w = 48, h = 64, bulbs = true) => canvasTex(w, h, (c) => {
  c.fillStyle = '#86641c'; c.fillRect(0, 0, w, h); c.fillStyle = '#d4ae48'; c.fillRect(1, 1, w - 2, h - 2); c.fillStyle = '#9fb4c8'; c.fillRect(4, 4, w - 8, h - 8);
  c.fillStyle = '#c8d8e8'; for (let i = 0; i < w; i += 9) c.fillRect(4 + i, 4, 3, h - 8); c.fillStyle = '#e8f0f8'; c.fillRect(8, 6, 2, h - 14);
  if (bulbs) { c.fillStyle = '#fff4c8'; for (let y = 6; y < h - 4; y += 8) { c.fillRect(1, y, 3, 3); c.fillRect(w - 4, y, 3, 3); } }
}, 'mirror' + w + h + bulbs);
const figTex = (col: string, hair: string) => canvasTex(24, 44, (c) => { c.fillStyle = hair; c.fillRect(5, 0, 14, 22); c.fillStyle = col; c.fillRect(6, 12, 12, 30); c.fillRect(3, 30, 18, 14); c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(8, 3, 8, 8); }, 'fig' + col + hair);
const photoTex = (key: string, draw: (c: CanvasRenderingContext2D) => void) => canvasTex(28, 22, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 28, 22); c.fillStyle = '#d8ccb0'; c.fillRect(2, 2, 24, 18); draw(c); }, 'photo' + key);
const people = (c: CanvasRenderingContext2D, cols: string[], y = 9) => cols.forEach((col, i) => { const x = 4 + i * (20 / cols.length); c.fillStyle = col; c.fillRect(x, y + 3, 3, 7); c.fillStyle = '#d8a888'; c.fillRect(x, y, 3, 3); });

function dustAndBase(R: Builder, warm = true) { R.particles('dust', { count: 90, top: 6 }); R.ambient(warm ? 0x4a3830 : 0x30344a, 1.1, warm ? 0xffe6c8 : 0xc8d8ff); }

const dressing: RoomDef = {
  name: 'Гримёрка режиссёра', chapter: 'Акт I · Приглашение', w: 16, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.05, 0.98, 0.9], vig: 0.45 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('wallpaper', { h: 6, trim: 'darkwood' }); dustAndBase(R); rug(R, 0, 1, 9, 5);
    // диван, на котором просыпается Варя; окно с ночным городом; ширма и вешалка
    sofa(R, -5.4, -3.5, { w: 4.2, col: 0xcc4455 }); window3D(R, -0.5, { wall: 'w', y: 3.2, w: 1.8, h: 2.6 });
    R.look('bed', -5.4, -2.2, 'Осмотреть диван', D.bedLook, { quiet: true });
    // гримёрный столик: объёмное зеркало в лампочках
    R.table(-0.2, -4.1, 3.4, 1.2); mirror3D(R, -0.2, 3.3, -4.85, 2.6, 3.2, { bulbs: true });
    R.decal(figTex('#a3122a', '#2a1512'), { x: 0.4, y: 3.3, z: -4.7, w: 1.2, h: 2.4, mask: 'tragedy', opacity: 0.75 });
    R.inter('mirror', -0.2, -3.1, { label: 'Посмотреть в зеркало', mask: 'none', fn: async () => { await G.run(f.mirror_n ? D.mirror1 : D.mirror0); f.mirror_n = 1; } });
    R.inter('mirrorTr', -0.2, -3.1, { label: 'Зеркало', mask: 'tragedy', photo: 'Силуэт в зеркале', fn: () => G.run(D.mirrorTr) });
    R.decal(photoTex('family', (c) => people(c, ['#7a9ab8', '#4a5a4a', '#c2452d', '#b8a8c8', '#e8884a', '#e8b0c8', '#6a9a7a'])), { flat: false, x: -1.4, y: 1.5, z: -4.2, w: 0.8, h: 0.62, ry: 0, noSlot: true });
    R.look('family', -1.5, -3.1, 'Фотография в рамке', D.family, { r: 1.1, egg: 'family' });
    R.look('cardDr', 1.2, -3.1, 'Открытка', D.cardDr, { mask: 'drama', r: 1.2 });
    R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#fff8e8'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#e84a6f'; c.fillRect(2, 2, 6, 1); c.fillRect(2, 4, 4, 1); }, 'card'), 1.2, -4, { y: 1.15, mask: 'drama', glow: true });
    for (let i = 0; i < 4; i++) R.sprite(clutterTex(['bottle', 'powder', 'brushes', 'perfume'][i]), -0.6 + i * 0.5, -4.3 + (i % 2) * 0.2, { y: 1.15, scale: 0.85 });
    // стол с письмами
    R.table(6.6, 0.5, 1.4, 3.2);
    R.sprite(canvasTex(10, 8, (c) => { c.fillStyle = '#f4ecd4'; c.fillRect(0, 1, 10, 7); c.fillStyle = '#a3122a'; c.fillRect(4, 3, 2, 2); }, 'env'), 6.5, 0.2, { y: 1.15 });
    R.inter('invite', 5.6, 0.2, { label: 'Конверт «Варваре»', fn: async () => { await G.ui.paper(PAPERS.invite); if (!f.read_invite) await G.run(D.inviteAfter); } });
    R.inter('recs', 5.6, 1.4, { label: 'Рекомендательный лист', fn: async () => { await G.ui.paper(PAPERS.recs); if (!f.read_recs) { f.read_recs = 1; await G.run(D.recsAfter); } } });
    // шкаф, на нём камера Василисы
    pWardrobe(R, 4, -4.4, { w: 2, h: 2.6, d: 0.9, wood: '#b07a50' }); R.light(4, 2.4, -2.6, 0xffd8a8, 4, 5);
    if (!G.has('camera')) { R.sprite('cam', 4, -4.3, { y: 2.84, name: 'camSpr' }); R.inter('cam', 4, -3.6, { label: 'Фотоаппарат с запиской', fn: async () => { await G.ui.paper(PAPERS.camnote); await G.run(D.camAfter); G.toast('C: достать фотоаппарат, E: снимок', '◉'); G.room.named.camSpr.visible = false; G.room.inter('cam').enabled = false; G.ui.hud(); } }); }
    R.sprite(coatStandTex(), -7.2, 2.6, { scale: 1.05 }); R.collider(-7.6, 2.3, -6.8, 2.9);
    R.look('rack', -7.2, 3.1, 'Вешалка', ['~: Вешалка. Чужая шляпа и красный лонгслив без плеч. Мой. Матвей подарил на прошлый день рождения, и я в нём сейчас. Тогда чей этот?', '~: Бирка изнутри: «А. Е.». Ладно. Совпадение. Таких лонгсливов много.'], { mask: 'none', r: 1.3 });
    R.look('rackCom', -7.2, 3.1, 'Шляпа (она шевелится)', D.rackCom, { mask: 'comedy', r: 1.3, egg: 'hat' });
    R.sprite('plant', 7.3, -4.3, { solid: 0.3 }); R.sprite('lamp', -2.6, -4.4); R.light(-2.6, 2.6, -4, 0xffc890, 6, 8);
    screen3D(R, -6.9, 0.4, { ry: 0.5 }); for (let i = 0; i < 6; i++) { const fd = R.decal(featherTex(), { flat: true, x: 5.8 + hsh(i) * 1.6, z: 2.4 + hsh(i + 3) * 1.4, y: 0.03 + i * 0.002, w: 0.75, h: 0.25 }); fd.rotation.z = hsh(i + 7) * 3; } R.sprite(PROPTEX.feathers(), 7.1, 3.4, { scale: 0.7 });
    R.sprite(PROPTEX.hatbox(), 6.6, -2.8, { scale: 1 }); R.sprite(PROPTEX.hatbox(), 7.35, -2.5, { scale: 0.85 }); R.sprite(PROPTEX.hatbox(), 6.65, -2.78, { y: 1.08, scale: 0.75 }); R.collider(6.0, -3.2, 7.9, -2.2);
    photoWall(R, -4.6, 2.9, 6); R.light(-0.2, 2, -2.6, 0xffc070, 3, 6);
    R.poster('ЗАВТРА', 'премьера', { x: 2.4, y: 3.6, w: 1.5, h: 2.1 });
    R.inter('journal', 2.2, -4.0, { label: 'Журнал помрежа (сохранить)', y: 1.4, fn: () => G.ui.saveLoad('save') });
    R.sprite('book', 2.2, -4.5, { y: 0, scale: 1.4 });
    R.door('door', 6, { to: 'hub_corridor', spot: 'dressing', label: 'В коридор', cond: () => !!f.read_invite, locked: 'Сначала, конверт на столе. Не люблю выходить, не зная, куда.' });
    if (G.doneCount() >= 1) { caseBoard(R, G, -6.6, 1.7, 2.2); for (const sx of [-1, 1]) R.box(-6.6 + sx * 0.8, 2.15, 0.08, 0.08, 1.6, { tex: 'darkwood', solid: false }); R.collider(-7.8, 1.9, -5.4, 2.5); }
    R.spawn('start', -5.4, -2); R.spawn('door', 6, -3.4);
  },
  async enter(G) {
    const f = G.f; if (f.woke) return;
    const p = G.player; p.place(-5.4, -3.3); p.y = 0.9; p.pose = 'lie'; G.camSnap(); G.R.setGrade({ bright: 0, vig: 1 }, true);
    G.audio.music(null);
    G.sfx('knock', { n: 3 }); await G.wait(2.4); await G.ui.card([['АКТ I', 'act'], ['THE INVITATION', 'big'], ['Три удара в пол. Так начинают спектакли.', 'sm']]);
    G.audio.music('backstage'); G.applyGrade(); await G.wait(1.6);
    p.pose = null; p.y = 0; p.place(-5.4, -2, 'f'); await G.run(D.wake); f.woke = 1; G.toast('WASD / стрелки, ходить · E: действие · Esc, пауза', '✦');
  },
};

// Служебный коридор: северная галерея гримёрок, центральный проход, южная галерея с лестницами.
// Между галереями два настоящих помещения (реквизиторская и склад-мастерская) с дверями.
const corridor: RoomDef = {
  name: 'Служебный коридор', floor: 'Партер', w: 44, d: 26, music: 'backstage', amb: 'hall', step: 'carpet', grade: { tint: [1.02, 0.96, 0.92], vig: 0.5 },
  build(R, G) {
    const f = G.f, n = G.doneCount(); R.floor('parquet'); R.walls('wallpaper', { h: 6, trim: 'darkwood', tint: '#c88870' }); R.ambient(0x5a4438, 1.5, 0xffe0c0); R.particles('dust', { count: 120, top: 6 });
    // ковровые дорожки (плитка текстуры без растяжения)
    R.floor('carpet', { w: 42, d: 2.6, z: -9.6, y: 0.015 }); R.floor('carpet', { w: 4, d: 10, z: -1.5, y: 0.015 }); R.floor('carpet', { w: 42, d: 2.6, z: 7.5, y: 0.015 });
    // массивы стен между галереями (в потолок, прозрачнеют, когда закрывают героиню)
    R.wall(-22, -7.2, -2.8, 3.6, { h: 4.4, tex: 'wallpaper', tint: '#c88870', wide: true, depth: 20 }); R.wall(2.8, -7.2, 22, 3.6, { h: 4.4, tex: 'wallpaper', tint: '#c88870', wide: true, depth: 20 });
    for (const [x0, x1] of [[-22, -2.8], [2.8, 22]]) { const cap = R.box((x0 + x1) / 2, -1.8, x1 - x0, 10.8, 0.06, { tex: 'black', y: 4.41, solid: false, cast: false }); (cap.material as THREE.MeshLambertMaterial).transparent = true; R.room.occluders.push({ mesh: cap as THREE.Mesh, x0: -22, x1: 22, z: 3.6, h: 4.4, depth: 20 } as any); }
    R.door('d_props', -12, { z: 3.65, to: 'hub_props', label: 'Реквизиторская', sign: 'РЕКВИЗИТ', col: '#3a2a1c' });
    R.door('d_work', 12, { z: 3.65, to: 'hub_workshop', label: 'Склад декораций и мастерская', sign: 'ЦЕХ', cond: () => G.done('polina'), locked: D.workshopLocked });
    const plaque = (text: string, x: number, z: number, key: string, y = 3.4) => { const cw = Math.ceil(text.length * 5.4 + 14); return R.decal(canvasTex(cw, 15, (c) => { c.fillStyle = '#2a1408'; c.fillRect(0, 0, cw, 15); c.strokeStyle = '#d4ae48'; c.strokeRect(0.5, 0.5, cw - 1, 14); ptext(c, text, cw / 2, 3, { size: 8, col: '#f0d478', align: 'center' }); }, key), { x, z, y, w: Math.min(cw * 0.05, 4.4), h: Math.min(cw * 0.05, 4.4) / cw * 15, noSlot: true }); };
    plaque('← ГРИМЁРКИ · КОСТЮМЕРНАЯ →', -5.1, 3.66, 'pl1'); plaque('СЦЕНА → · ← БЕЛЬЭТАЖ', 5.1, 3.66, 'pl2'); R.poster('ЧАЙКА', 'сезон 1998', { x: -14.6, y: 1.6, w: 1.2, h: 1.7, z: 3.66, motif: 'moon' }); R.poster('СИРАНО', 'бенефис', { x: 14.6, y: 1.6, w: 1.2, h: 1.7, z: 3.66, motif: 'rose', bg: '#e8d0c0' }); plaque('↓ ФОЙЕ · ТРЮМ · СЦЕНА ↓', -0.6, -12.95, 'pl3', 5.3);
    for (const [x, i] of [[-18, 0], [-9.6, 1], [9.6, 2], [18, 3]] as number[][]) { R.box(x, 3.62, 1.25, 0.06, 1.55, { tex: 'gold', y: 1.75, solid: false, cast: false }); R.decal(photoTexV(i), { x, z: 3.66, y: 2.52, w: 1.05, h: 1.3, noSlot: true }); }
    for (const x of [-20, -16, -8, 8, 16, 20]) sconce(R, x, 3.3, 3.66, {});
    // северная галерея: двери гримёрок и служебных помещений
    for (const x of [-19, -13, -6.5, 1, 7.5, 14, 19.5]) sconce(R, x, 3.4, -12.96, {}); for (const x of [-13, 7.5]) R.light(x, 3.4, -11.8, 0xffc880, 6, 9, { flicker: 0.05 });
    R.door('d_dress', -16, { to: 'hub_dressing', spot: 'door', label: 'Гримёрка режиссёра', sign: 'РЕЖИССЁР' });
    R.door('d_diva', -9.5, { label: 'Гримёрка примы', sign: 'АЛЛА ЕВА', col: '#721022', cond: () => !!f.act4, locked: D.divaDoorLocked, fn: (G) => G.goto('fin_diva', 'start', { fade: 'fade' }) });
    R.door('d_costume', -3, { to: 'hub_costume', label: 'Костюмерная', sign: 'КОСТЮМЫ', col: '#3a2a4a' });
    corkBoard(R, 4.2, 2.9, 3.2, 2.2, 1); R.inter('board', 4.2, -11.6, { label: 'Доска объявлений', fn: async (G) => { await G.ui.paper(PAPERS.board); G.note('troupe'); } });
    R.door('d_closet', 18, { label: 'Подсобка', sign: 'ИНВЕНТАРЬ', col: '#3a3a3a', fn: async (G) => { await G.run(['~: Подсобка. Вёдра, швабры и надпись мелом на двери изнутри: «Не забудь, что ты здесь уже была». Почерк знакомый.']); G.egg('closet'); } });
    R.poster('ВИШНЁВЫЙ САД', 'АЛЛА ЕВА', { x: -12.8, y: 2.7, w: 1.4, h: 2, face: '#d9a878' }); R.look('p1', -12.8, -11.6, 'Афиша', D.posterAlla, { photo: 'Афиша с Аллой Евой', r: 1.2 });
    R.poster('ГАМЛЕТ', 'все роли: АЛЛА ЕВА', { x: 10.8, y: 2.7, w: 1.4, h: 2, bg: '#d8c8a0', motif: 'crown' }); R.look('p2', 10.8, -11.6, 'Афиша', D.posterAlla2, { r: 1.2, egg: 'hamlet' });
    R.poster('ЛЮДИ ЛЮБЯТ', 'в ролях: Варвара', { x: 15.6, y: 2.7, w: 1.3, h: 1.9, bg: '#e8d0c0', motif: 'rose' }); R.look('play1', 15.6, -11.6, 'Афиша «Люди любят»', ['~: «Люди любят». Наш спектакль с театралки. Я там играла девушку, которая всех мирила и ни разу не сказала, чего хочет сама.', '~: Откуда здесь наша афиша? Её же печатали в одном экземпляре.'], { r: 1.1, egg: 'plays1' });
    if (G.done('matvey')) { R.poster('ШКОЛЬНЫЙ ФЕСТИВАЛЬ', 'драмкружок · 2-Б', { x: 13.2, y: 2.7, w: 1.2, h: 1.7, bg: '#ffe0ec', motif: 'rose' }); R.look('festPoster', 13.2, -11.6, 'Афиша школьного фестиваля', ['~: Матвей повесил афишу фестиваля. Внизу приклеена фотография: они с Арутеми смеются, не позируют.', '~: Лучший кадр той главы снимала не я. Он сам получился.'], { r: 1.0 }); }
    R.poster('СНЕЖНАЯ КОРОЛЕВА', 'гастроли', { x: -0.4, y: 2.9, w: 1.3, h: 1.9, bg: '#cfe0f0', fg: '#1a2a5a', motif: 'moon' }); R.look('p3', -0.4, -11.6, 'Афиша гастролей', ['~: «Снежная королева». Гастрольный состав: Василиса, Дана, Нина, Аня, Оля. На полях приписка Даны: «Вернёмся, и чтоб финал был с блёстками».'], { r: 1.1 });
    for (const x of [-21, 21]) R.sprite('plant', x, -11.8, { solid: 0.3 }); R.sprite(PROPTEX.trunk(), 9.4, -12, { scale: 1.2, solid: 0.7 }); armchair(R, -19.5, -11.4, { col: 0xcc5560 });
    // южная галерея: лестницы, выходы
    R.door('up', 7.5, { wall: 'w', to: 'hub_mezz', spot: 'stair', label: 'Служебная лестница на бельэтаж', sign: '↑ БЕЛЬЭТАЖ' });
    R.door('d_stage', 7.5, { wall: 'e', to: 'hub_stage', spot: 'corridor', label: 'В кулисы сцены', sign: 'СЦЕНА', col: '#5a4029', fade: 'curtain' });
    R.door('d_foyer', -8, { wall: 's', to: 'hub_foyer', spot: 'service', label: 'В фойе' });
    R.door('d_trap', 12, { wall: 's', to: 'hub_trap', spot: 'stairs', label: 'Вниз, в трюм', cond: () => !!f.act1, locked: ['~: Решётка на лестнице в трюм заперта. Табличка: «Только после первой репетиции».'] });
    for (const x of [-14, 14]) R.light(x, 3.6, 8, n >= 1 ? 0xffc880 : 0xc8b8a0, n >= 1 ? 7 : 4, 9, { flicker: n >= 1 ? 0.03 : 0.12 });
    R.sprite('chair', -20, 11.6, { solid: 0.4 }); R.sprite('flowerpot', 3.4, 10.4, { scale: 1.4 }); sofa(R, 1.2, -11.5, { w: 2.2, col: 0x8a3a3a }); R.sprite(PROPTEX.stool(), 20.5, 11.4, {}); R.box(-3.4, 10.4, 0.5, 0.5, 0.7, { color: 0x2a2a3a }); for (const [dx, col] of [[-0.1, 0xc41e3a], [0.1, 0x2f7f82]] as number[][]) R.box(-3.4 + dx, 10.4, 0.05, 0.05, 1.1, { color: col, y: 0.4, solid: false }); for (const sx of [-1, 1]) { R.table(sx * 5.1, 4.3, 2.4, 0.6); R.sprite('flowerpot', sx * 5.1 + 0.6, 4.3, { y: 1.15, scale: 0.8, thin: true }); R.sprite('book', sx * 5.1 - 0.5, 4.3, { y: 1.15, scale: 0.8 }); } R.light(0, 3.2, -1.5, 0xffc890, 8, 9); for (const [x0, x1] of [[-22, -2.8], [2.8, 22]]) for (const zz of [-7.2, 3.6]) R.box((x0 + x1) / 2, zz, x1 - x0, 0.12, 0.1, { tex: 'gold', y: 4.42, solid: false, cast: false }); sofa(R, -14, 11.2, { w: 2.6, col: 0x8a3a3a });
    if (G.done('matvey')) { for (let x = -20; x <= 20; x += 2.6) { R.sprite('lantern', x, -12.4, { y: 4.6 + Math.sin(x) * 0.2, glow: true }); R.box(x, -12.4, 0.03, 0.03, 0.27 - Math.sin(x) * 0.2, { color: 0x2a2018, y: 5.45 + Math.sin(x) * 0.2, solid: false, cast: false }); } R.box(0, -12.4, 41, 0.03, 0.03, { color: 0x2a2018, y: 5.7, solid: false, cast: false }); R.npc('matvey', -7, -10.4, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_matveyDr : D.h_matvey) }); }
    (R.room as any).cutFollow = R.room.group.children.filter((o) => o.position.z > 3.55 && o.position.z < 4.8 && Math.abs(o.position.x) > 2.9 && !(o as any).isLight);
    R.spawn('start', 0, -10); R.spawn('dressing', -16, -11.4); R.spawn('diva', -9.5, -11.4); R.spawn('costume', -3, -11.4); R.spawn('props', -12, 4.6, 'f'); R.spawn('work', 12, 4.6, 'f'); R.spawn('stage', 20.2, 7.5, 'l'); R.spawn('stair', -20.2, 7.5, 'r'); R.spawn('foyer', -8, 10.6, 'b'); R.spawn('trap', 12, 10.6, 'b');
  },
};
// Сцена и зрительный зал. Сцена глубокая, с поворотным кругом, кулисами-«ногами», колосниками и рампой;
// зал на 11 рядов с центральным и боковыми проходами, ложами и люстрами. Двери из фойе ведут в боковые проходы.
/** Зал главной сцены: кулисы, портал, рампа, яма, партер, ложи, люстры. Общий для hub_stage и премьеры. */
/** Партер: ступенчатые ряды (подступенки в ковре), кресла со спинками в бархате и латунными номерками, проходы с подсветкой ступеней. */
function stalls(R: Builder, z0: number, rows: number, dz: number, x0: number, x1: number, aisle: number) {
  const back = canvasTex(16, 22, (c) => { const r = (x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
    r(2, 1, 12, 14, '#5a0c18'); r(3, 0, 10, 2, '#5a0c18'); r(3, 2, 10, 12, '#8e1830'); r(4, 2, 3, 11, '#b23048'); r(11, 3, 2, 11, '#6a1020'); for (const x of [6, 9]) r(x, 3, 1, 10, '#721022'); r(2, 1, 1, 14, '#c89a3a'); r(13, 1, 1, 14, '#86641c'); r(3, 0, 10, 1, '#d4ae48');
    r(6, 10, 4, 2, '#d4ae48'); r(7, 10, 2, 1, '#fff0b0'); r(0, 12, 3, 4, '#3a2418'); r(13, 12, 3, 4, '#2a1a10'); r(0, 12, 3, 1, '#6a4a30'); r(13, 12, 3, 1, '#5a3a22'); r(2, 15, 12, 3, '#3a0810'); r(3, 18, 1, 4, '#1a1010'); r(12, 18, 1, 4, '#1a1010'); }, 'seatback2');
  const mat = new THREE.MeshLambertMaterial({ map: back, alphaTest: 0.3, side: THREE.DoubleSide }); const geo = new THREE.PlaneGeometry(1.0, 1.375); geo.translate(0, 0.69, 0);
  const pos: number[][] = []; for (let r2 = 0; r2 < rows; r2++) for (let x = x0; x <= x1; x += 1.05) { if (Math.abs(x + (r2 % 2) * 0.3) < aisle / 2 + 0.3) continue; pos.push([x + (r2 % 2) * 0.3, z0 + r2 * dz, r2]); }
  const im = new THREE.InstancedMesh(geo, mat, pos.length); const m4 = new THREE.Matrix4(); pos.forEach((p, i) => { m4.makeTranslation(p[0], p[2] * 0.16, p[1]); im.setMatrixAt(i, m4); }); im.castShadow = true; R.room.group.add(im);
  const riser = new THREE.MeshLambertMaterial({ map: tex('carpet'), color: 0xb08080 }), edge = new THREE.MeshLambertMaterial({ map: tex('gold') });
  for (let r2 = 1; r2 < rows; r2++) { const h = r2 * 0.16, z = z0 + r2 * dz; for (const sx of [-1, 1]) { const w = x1 - aisle / 2 + 0.6, cx = sx * (aisle / 2 + w / 2); const st = new THREE.Mesh(new THREE.BoxGeometry(w, h, dz), riser); st.position.set(cx, h / 2, z - 0.15); st.receiveShadow = true; R.room.group.add(st); const lip = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, 0.06), edge); lip.position.set(cx, h, z - 0.15 - dz / 2); R.room.group.add(lip); } }
  { const zb = z0 + (rows - 1) * dz - 0.15 + dz / 2 + 0.06, hb = (rows - 1) * 0.16 + 1.0; for (const sx of [-1, 1]) { const w = x1 - aisle / 2 + 0.6, cx = sx * (aisle / 2 + w / 2); R.box(cx, zb, w, 0.12, hb, { tex: 'woodwall', tint: '#b07a50', solid: false, cast: false }); R.box(cx, zb, w + 0.1, 0.22, 0.12, { tex: 'gold', y: hb, solid: false, cast: false }); for (let x = cx - w / 2 + 0.8; x < cx + w / 2; x += 2.2) R.box(x, zb + 0.07, 1.6, 0.03, hb * 0.6, { tex: 'velvet', y: hb * 0.2, solid: false, cast: false }); } }
  for (let r2 = 0; r2 < rows; r2++) { R.collider(x0 - 0.5, z0 + r2 * dz - 0.25, -aisle / 2, z0 + r2 * dz + 0.25); R.collider(aisle / 2, z0 + r2 * dz - 0.25, x1 + 0.5, z0 + r2 * dz + 0.25); }
  // центральная дорожка с золотой каймой и огоньками ступеней
  const run = canvasTex(16, 32, (c) => { c.fillStyle = '#7a1626'; c.fillRect(0, 0, 16, 32); c.fillStyle = '#d4ae48'; c.fillRect(1, 0, 1, 32); c.fillRect(14, 0, 1, 32); c.fillStyle = '#5a0c18'; for (let y = 0; y < 32; y += 4) c.fillRect(4 + (y % 8) / 2, y, 6, 1); }, 'aisleRun'); run.wrapT = THREE.RepeatWrapping; run.repeat.set(1, 6);
  const rm = new THREE.Mesh(new THREE.PlaneGeometry(aisle * 0.7, rows * dz + 4), new THREE.MeshLambertMaterial({ map: run })); rm.rotation.x = -Math.PI / 2; rm.position.set(0, 0.02, z0 + rows * dz / 2); R.room.group.add(rm);
  const dot = canvasTex(4, 3, (c) => { c.fillStyle = '#ffe0a0'; c.fillRect(0, 0, 4, 3); c.fillStyle = '#fff6d8'; c.fillRect(1, 0, 2, 1); }, 'aisleDot');
  for (let r2 = 0; r2 < rows; r2++) for (const sx of [-1, 1]) R.decal(dot, { flat: true, x: sx * (aisle * 0.35 + 0.12), z: z0 + r2 * dz, y: 0.03, w: 0.18, h: 0.14, glow: true });
}
/** Стены зрительного зала: бордовые обои, золотые пилястры, бра-декали (без настоящих источников). */
function hallWalls(R: Builder) {
  const sc = canvasTex(12, 18, (c) => { const r = (x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); }; r(5, 8, 2, 10, '#86641c'); r(1, 11, 10, 2, '#b08a2c'); for (const x of [1, 9]) { r(x, 4, 2, 6, '#fff4c8'); r(x, 2, 2, 2, '#ffd060'); r(x - 1, 10, 4, 1, '#d4ae48'); } r(5, 3, 2, 5, '#fff4c8'); r(5, 1, 2, 2, '#ffd060'); }, 'hsconce');
  const halo = canvasTex(32, 32, (c) => { const g = c.createRadialGradient(16, 16, 1, 16, 16, 16); g.addColorStop(0, 'rgba(255,200,120,.7)'); g.addColorStop(1, 'rgba(255,200,120,0)'); c.fillStyle = g; c.fillRect(0, 0, 32, 32); }, 'hhalo');
  for (const sx of [-1, 1]) {
    const wall = R.box(sx * 19.97, 12.5, 0.04, 25, 11, { tex: 'wallpaper', tint: '#7a2430', solid: false, cast: false }); void wall;
    R.box(sx * 19.97, 31, 0.04, 12, 11, { tex: 'wallpaper', tint: '#3a1418', solid: false, cast: false });
    for (let z = 1; z <= 35; z += 5.5) if (Math.abs(z - 19) > 2) R.box(sx * 19.8, z, 0.25, 0.7, 11, { tex: 'gold', tint: z > 24 ? '#5a4a2a' : undefined, solid: false, cast: false });
    R.box(sx * 19.85, 12.5, 0.2, 25, 0.3, { tex: 'darkwood', y: 1.1, solid: false, cast: false });
    for (const z of [6.8, 12.2, 24.5]) { const d = R.decal(sc, { x: sx * 19.62, y: 3.2, z, w: 0.75, h: 1.1, glow: true, noSlot: true }); d.rotation.y = -sx * Math.PI / 2; const h = R.decal(halo, { x: sx * 19.6, y: 3.4, z, w: 2.6, h: 2.6, glow: true, opacity: 0.55, noSlot: true }); h.rotation.y = -sx * Math.PI / 2; (h.material as THREE.MeshBasicMaterial).blending = THREE.AdditiveBlending; (h.material as THREE.MeshBasicMaterial).depthWrite = false; R.light(sx * 18.6, 3, z, 0xffc890, 4, 7, { pool: true }); }
  }
  R.floor('carpet', { d: 14, z: 30, w: 40, tint: '#5a2028' });
}
/** Зал главной сцены: кулисы, портал, рампа, яма, партер, ложи, люстры. Общий для hub_stage и премьеры. */
export function hallShell(R: Builder, o: { chandeliers?: boolean } = {}) {
    for (const z of [-21, -16, -11, -6]) for (const sx of [-1, 1]) R.curtain(sx * (z === -21 && sx > 0 ? 15.8 : 14.5), z, z === -21 && sx > 0 ? 1.6 : 2.6, 10, { solid: false });
    R.curtain(-3.4, -22.5, 27.2, 9, { folds: 16 }); R.curtain(15.4, -22.5, 3.2, 9, { folds: 2 }); // задник с проёмом: дверь «За кулисы» (x=12) видна for (let i = 0; i < 4; i++) R.box(0, -20 + i * 4, 30, 0.1, 0.1, { tex: 'metal', y: 10.2, solid: false, cast: false });
    R.box(0, -18.5, 27, 0.16, 0.16, { tex: 'metal', y: 10.2, solid: false, cast: false });
    for (const sx of [-1, 1]) { R.curtain(sx * 13.6, -2.6, 2.6, 9.4, { solid: false }); R.drape(sx * 13.6, -2.38, 2.8, 1.2, { y: 8.2, scallop: true, folds: 2 }); }
    R.box(0, -1.8, 36, 0.8, 2, { tex: 'gold', y: 9.6, solid: false }); for (const sx of [-1, 1]) R.box(sx * 16.5, -1.8, 3, 0.8, 11.6, { tex: 'gold' }); R.box(0, -1.76, 30, 0.1, 1.5, { color: 0x2a0608, y: 8.1, solid: false, cast: false }); R.drape(0, -1.66, 30, 1.5, { y: 8.1, scallop: true, folds: 14 });
    // рампа: тёплые, но не слепящие лампы-«раковины»; настоящий свет только у двух крайних и центральной
    const foot = canvasTex(10, 6, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 2, 10, 4); c.fillStyle = '#86641c'; c.fillRect(0, 2, 10, 1); c.fillStyle = '#ffe2a0'; c.fillRect(2, 0, 6, 3); c.fillStyle = '#fff4d0'; c.fillRect(3, 0, 3, 1); }, 'footlamp');
    for (let x = -13; x <= 13; x += 1.3) { const d = R.decal(foot, { x, y: 0.16, z: -1.18, w: 0.5, h: 0.3, glow: true, color: 0xd8c0a0, noSlot: true }); void d; }
    for (let x = -12; x <= 12; x += 4) R.light(x, 0.5, -1.4, 0xffc070, 2.5, 6, { pool: x !== 0 });
    R.box(0, -0.9, 30, 0.25, 0.14, { tex: 'gold', solid: false, cast: false });
    // оркестровая яма с ограждением
    R.box(0, 0.6, 22, 1.6, 0.05, { color: 0x0a0606, y: 0.02, solid: false }); balustrade(R, -11, 1.5, 11, 1.5, { h: 0.9 }); R.collider(-11, -0.2, 11, 1.4);
    for (const z of [19]) for (const sx of [-1, 1]) { const ex = R.decal(canvasTex(36, 12, (c) => { c.fillStyle = '#0e3a1e'; c.fillRect(0, 0, 36, 12); c.fillStyle = '#7dffb0'; ptext(c, 'ВЫХОД', 18, 2, { size: 8, col: '#b8ffd0', align: 'center' }); }, 'exitG'), { x: sx * 19.6, y: 4.5, z, w: 1.5, h: 0.5, glow: true, noSlot: true }); ex.rotation.y = -sx * Math.PI / 2; R.light(sx * 19, 4.4, z, 0x60ff90, 1.5, 3, { pool: true }); }
    // зрительный зал: 11 рядов, проходы, ложи, люстры
    hallWalls(R); stalls(R, 3.4, 11, 1.45, -13.4, 13.4, 2.4); R.light(0, 7, 12, 0xffd8b0, 16, 18);
    for (const z of [4, 9.5, 15]) { theatreBox(R, -18.8, z, 'w', 4); theatreBox(R, 18.8, z, 'e', 4); }
    const cy = o.chandeliers === false ? 18 : 15.2; chandelier(R, -7, cy, 9, 1.1, { light: 8 }); chandelier(R, 7, cy, 9, 1.1, { light: 8 }); chandelier(R, 0, cy + 0.4, 17, 1.3, { light: 10 });
}
const STZ = -12; // центр игровой части сцены
const stage: RoomDef = {
  name: 'Главная сцена', w: 40, d: 46, camDist: 23, music: 'theater', amb: 'hall', step: 'wood', grade: { vig: 0.5, bloom: 0.6 },
  build(R, G) {
    const f = G.f, n = G.doneCount();
    R.floor('stage', { d: 23, z: -11.5 }); R.floor('carpet', { d: 23, z: 11.5, apron: 7 }); R.walls('black', { h: 11 }); R.ambient(0x3a2c30, 1.5, 0x8a7480); R.particles('dust', { count: 180, top: 9 });
    // поворотный круг с двусторонней декорацией
    const turn = new THREE.Group(); turn.position.set(0, 0.03, -16); R.room.group.add(turn); R.room.named.turn = turn;
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6.5, 0.12, 48), new THREE.MeshLambertMaterial({ map: tex('stage') })); disc.receiveShadow = true; turn.add(disc);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.07, 6, 64), new THREE.MeshLambertMaterial({ map: tex('gold') })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.07; turn.add(ring);
    const flat = (w: number, h: number, z: number, col: string, key: string) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.25), new THREE.MeshLambertMaterial({ map: canvasTex(64, 40, (c) => { const pal = key === 'palace'; const g = c.createLinearGradient(0, 0, 0, 40); g.addColorStop(0, pal ? '#2a3a6a' : '#0c1430'); g.addColorStop(1, pal ? '#d89a6a' : '#2a4a5a'); c.fillStyle = g; c.fillRect(0, 0, 64, 40);
      if (pal) { c.fillStyle = '#e8d8b8'; c.fillRect(8, 16, 48, 24); c.beginPath(); c.arc(32, 16, 9, Math.PI, 0); c.fill(); c.fillStyle = '#c8b090'; for (let k = 0; k < 7; k++) c.fillRect(10 + k * 7, 20, 2, 20); c.fillStyle = '#5a2a3a'; for (let k = 0; k < 6; k++) { c.fillRect(13 + k * 7, 24, 3, 7); c.beginPath(); c.arc(14.5 + k * 7, 24, 1.5, Math.PI, 0); c.fill(); } c.fillStyle = '#d4ae48'; c.fillRect(6, 15, 52, 2); c.fillRect(31, 4, 2, 4); }
      else { c.fillStyle = '#f4ecd0'; c.beginPath(); c.arc(50, 8, 4, 0, 7); c.fill(); c.fillStyle = '#1e3a2a'; for (let k = 0; k < 6; k++) { c.beginPath(); c.arc(6 + k * 11, 26, 7, 0, 7); c.fill(); } c.fillStyle = '#2e5a3a'; c.fillRect(0, 30, 64, 10); c.fillStyle = '#c8d8e8'; c.fillRect(29, 24, 6, 8); c.fillRect(26, 31, 12, 2); c.fillStyle = '#ffd890'; for (let k = 0; k < 8; k++) c.fillRect(4 + k * 8, 12 + (k % 3) * 3, 1, 1); }
      c.fillStyle = '#d4ae48'; c.fillRect(0, 0, 64, 2); c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(0, 38, 64, 2); }, key) })); m.position.set(0, h / 2, z); m.castShadow = true; turn.add(m); return m; };
    flat(9, 5.5, -2, '#6a2a3a', 'palace'); flat(9, 5.5, 2, '#2a4a5a', 'garden');
    for (const sx of [-1, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 1.6), new THREE.MeshLambertMaterial({ map: tex('gold') })); st.position.set(sx * 3.5, 0.4, -3); turn.add(st); const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 4, 10), new THREE.MeshLambertMaterial({ map: tex('white') })); c2.position.set(sx * 3.5, 2.8, -3); turn.add(c2); }
    R.onUpdate((dt) => { if (!f.turnStop) turn.rotation.y += dt * 0.05; });
    // кулисы-ноги, колосники с подвешенным задником, портал, рампа
    hallShell(R);
    R.spot(0, 15, 2, 0, STZ, 0xffe2b0, 120, { angle: 0.6, cone: 0.05, pen: 0.8 }); R.spot(-10, 13, 0, -6, STZ, 0xffd0a0, 55, { angle: 0.45, shadow: false, cone: 0.035, pen: 0.9, name: 'spotL' }); R.spot(10, 13, 0, 6, STZ, 0xc0d0ff, 55, { angle: 0.45, shadow: false, cone: 0.035, pen: 0.9 });
    R.sprite('lamp', -4.2, -10.2); R.light(-4.2, 2.8, -9.7, 0xffe0a0, 3, 8, { flicker: 0.05 });
    // двери
    R.door('d_cor', STZ + 4, { wall: 'w', to: 'hub_corridor', spot: 'stage', label: 'В служебный коридор', col: '#2a1c14', fade: 'curtain' });
    R.door('d_foyer', 19, { wall: 'w', to: 'hub_foyer', spot: 'stalls', label: 'Двери в фойе', sign: 'ФОЙЕ', col: '#6a1a22' });
    R.door('d_foyer2', 19, { wall: 'e', to: 'hub_foyer', spot: 'stalls2', label: 'Двери в фойе', sign: 'ФОЙЕ', col: '#6a1a22' });
    R.door('d_back', 12, { to: 'hub_backstage', label: 'За кулисы', sign: 'ЗА КУЛИСЫ', col: '#4a2a1a', cond: () => !!f.act1, locked: 'Сначала разберусь с тем, что на сцене.' }); R.light(12, 4.4, -21.8, 0xffd890, 6, 6); sconce(R, 9.6, 4, -22.96, {}); sconce(R, 14.4, 4, -22.96, {});
    R.inter('hatch', 5.4, -7.2, { label: 'Люк в полу сцены', cond: () => !!f.act1, y: 1, fn: (G) => G.goto('hub_trap', 'hatch', { fade: 'fade' }) }); R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#1a120c'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#3a2a1a'; c.fillRect(1, 1, 14, 14); c.fillStyle = '#86641c'; c.fillRect(6, 7, 4, 2); }, 'hatchd'), { flat: true, x: 5.4, z: -7.6, y: 0.03, w: 1.6, h: 1.6 }); for (const [bx, bz, bw, bd] of [[5.4, -8.42, 1.8, 0.08], [5.4, -6.78, 1.8, 0.08], [4.52, -7.6, 0.08, 1.7], [6.28, -7.6, 0.08, 1.7]] as number[][]) R.box(bx, bz, bw, bd, 0.05, { color: 0xffd890, emissive: 0xc08a30, y: 0.01, solid: false, cast: false }); R.light(5.4, 0.8, -7.6, 0xffc870, 2.5, 3);
    // режиссёрский столик
    R.table(-10, -5.5, 2.6, 1.3); R.sprite('book', -10.3, -5.4, { y: 1.15 }); R.sprite('lamp', -9.1, -5.8, { y: 1.1, scale: 0.4 }); R.light(-9.7, 2.2, -5.3, 0xffd090, 6, 6);
    R.inter('script', -10, -4.4, { label: f.act1 ? 'Сценарий' : 'Изучить сценарий и начать репетицию', cond: () => !!f.met_cast, fn: async (G) => { if (!f.act1) return rehearsal(G); await G.ui.paper(PAPERS.script1); if (!f.read_script) { f.read_script = 1; await G.run(D.scriptAfter); } if (f.act4 || n >= 6) { await G.ui.paper(PAPERS.page8); G.note('page8'); } } });
    R.inter('casting', -8.6, -4.4, { label: 'Лист распределения ролей', cond: () => FRIENDS.some((x) => G.done(x) && !f['cast_' + x]), fn: casting });
    const kn = n >= 5 ? 5 : n >= 3 ? 3 : n >= 1 ? 1 : 0;
    if (kn && !f['kn' + kn]) { R.sprite(canvasTex(8, 6, (c) => { c.fillStyle = '#f4ecd4'; c.fillRect(0, 0, 8, 6); c.fillStyle = '#3a2a5a'; c.fillRect(1, 1, 5, 1); c.fillRect(1, 3, 4, 1); }, 'knote'), -10.9, -5.2, { y: 1.15, glow: true }); R.inter('knote', -11.3, -4.4, { label: 'Записка от К.', r: 1.3, fn: async (G) => { await G.ui.paper((D as any)['kNote' + kn]); f['kn' + kn] = 1; G.note('knotes'); await G.rebuild(); } }); }
    // зеркало на колёсах
    const mir = mirror3D(R, 5.2, 2.3, -15.2, 2.4, 3.6, {}); R.collider(3.8, -15.5, 6.6, -14.9); void mir;
    // следы исчезновения (после первой репетиции, пока Полина не вернулась)
    if (f.act1 && !G.done('polina')) {
      const ch = new THREE.Group(); ch.position.set(-2, 0, -9); ch.rotation.set(0, 0.6, Math.PI / 2 - 0.05); const cm = new THREE.MeshLambertMaterial({ map: tex('darkwood'), color: 0xd0a070 }); const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.9), cm); s1.position.y = 0.6; ch.add(s1); const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1, 0.1), cm); s2.position.set(0, 1.1, -0.45); ch.add(s2); for (const [x, z] of [[-0.4, -0.4], [0.4, -0.4], [-0.4, 0.4], [0.4, 0.4]]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.6, 0.08), new THREE.MeshLambertMaterial({ map: tex('gold') })); l.position.set(x, 0.3, z); ch.add(l); } ch.position.y = 0.45; R.room.group.add(ch);
      R.look('chair', -2, -7.8, 'Опрокинутый стул', ['~: Стул лежит на боку, будто его оттолкнули, вставая слишком резко.']);
      for (let i = 0; i < 14; i++) R.decal(canvasTex(8, 10, (c) => { c.fillStyle = '#f4ecd4'; c.fillRect(0, 0, 8, 10); c.fillStyle = '#5a5a6a'; for (let l = 0; l < 4; l++) c.fillRect(1, 2 + l * 2, 5, 1); }, 'page'), { flat: true, x: -8 + (i * 37) % 17, z: -14 + (i * 23) % 11, y: 0.035 + i * 0.001, w: 0.6, h: 0.75 });
      for (let i = 0; i < 18; i++) { const k = i / 17; R.decal(canvasTex(6, 8, (c) => { c.fillStyle = 'rgba(120,160,220,.7)'; c.fillRect(1, 0, 4, 5); c.fillRect(2, 6, 3, 2); }, 'wetstep'), { flat: true, x: -1 + k * 13 + (i % 2) * 0.35, z: -10 - k * 10, y: 0.04, w: 0.35, h: 0.45, glow: true, opacity: 0.6 }); }
      R.look('steps', 4, -14, 'Мокрые следы', ['~: Мокрые следы. Ведут к двери «За кулисы». Капли ещё не высохли.'], { photo: 'Мокрые следы на сцене' });
    }
    if (!f.met_cast || !f.act1) { const pos: any = { polina: [-6.5, -9], ruben: [-3.5, -12], matvey: [-1, -9.5], erika: [1.8, -12.5], liza: [4.6, -9.5], angelina: [7, -12] }; for (const id of FRIENDS) R.npc(id, pos[id][0], pos[id][1], { talk: (D as any)['t_' + id + '0'] }); }
    else {
      if (G.done('polina')) { R.npc('polina_coat', -4, -6, { id: 'polina', talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_polinaDr : D.h_polina) }); R.light(-3.2, 1.2, -5.2, 0xffd070, 2.5, 4, { flicker: 0.08 }); R.sprite('lantern', -3.2, -5.6); }
      if (G.done('angelina')) { R.npc('angelina', 4.5, -12.5, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_angelinaDr : D.h_angelina) }); R.sprite('mic', 5.4, -11.9); }
      if (!f.act4) { R.npc('alla', 8.8, -9.2, { dir: 'r', mask: 'none', talk: (G: any) => G.run((D as any)['alla' + Math.min(5, n)]) }); R.npc('alla', 8.8, -9.2, { id: 'allaDr', dir: 'r', mask: 'drama', talk: D.allaDr }); R.npc('alla', 8.8, -9.2, { id: 'allaX', dir: 'r', mask: 'comedy', talk: ['alla/smirk: Сними это. В Комедии у меня дрожит левая бровь, а я не давала согласия на бровь.'] }); R.npc('alla', 8.8, -9.2, { id: 'allaT', dir: 'r', mask: 'tragedy', talk: ['~: В маске Трагедии её почти не видно. Контур, как у декорации на просвет. И на полу под ней одна тень. Моя.', { note: 'one_shadow' }] }); }
    }
    if (G.doneCount() >= 1) { witness(R, G, 'prompter', -1.2, -2.6, { dir: 'f' }); caseFind(R, G, 'c_powder', 8.4, -7.6, 'Пудреница на полу', CASE.powder); }
    R.spawn('start', -16.8, -4.2, 'r'); R.spawn('corridor', -16.8, -4.2, 'r'); R.light(-17.6, 3.2, -4.8, 0xffd8a0, 6, 8); R.sprite('stagelight', -18.4, -5.4, { scale: 1.4 }); R.sprite(PROPTEX.coil(), -18.6, -3.4, { scale: 1.2 }); R.sprite(PROPTEX.sandbag(), -15.6, -7.4, { scale: 1.2 }); R.spawn('back', 12, -20.6); R.spawn('center', 0, -8); R.spawn('stalls', -16.6, 19, 'r'); R.spawn('stalls2', 16.6, 19, 'l'); R.spawn('hatch', 5.4, -6.4);
  },
  async enter(G, from) {
    const f = G.f;
    if (!f.met_cast) { G.focus(0, -10.5, 20); await G.wait(0.8); await G.run(D.stageFirst); G.unfocus(); return; }
    if (G.doneCount() >= 6 && !f.act4 && !f.ret && f.a_ledger && f.a_contract && f.know_k) return act4(G);
  },
};
const vanish = async (G: any, ids: string[]) => { G.sfx('buzz', { dur: 0.8 }); for (let k = 0; k < 4; k++) { G.grade({ bright: k % 2 ? 1 : 0.15 }, true); await G.wait(0.12); } for (const id of ids) { const a = G.actor(id); if (a) { a.hidden = true; } } G.grade({ bright: 1 }, true); G.sfx('whoosh'); };
async function rehearsal(G: any) {
  const f = G.f, p = G.player;
  // 1. изучение сценария: набросок первой сцены и сопоставление реплик
  await G.run(REH.study); await G.ui.paper(PAPERS.script1);
  const r = await pick(REH.studyPick as any); f.reh_pick = r; await G.run(REH.studyAfter(r.who));
  await G.run(REH.match);
  await board({ title: 'Реплики первой сцены', sub: 'кто что говорит', intro: 'Соедините реплику с персонажем, которому она принадлежит.', left: { title: 'Реплики', items: [{ id: 'l1', title: '«Хлопайте! Громче!»', text: 'с авансцены, в зал' }, { id: 'l2', title: '«Можно я спою?»', text: 'тихо, из-за кулис' }, { id: 'l3', title: '«Да, ваше величество»', text: 'хором, с поклоном' }] }, right: { title: 'Персонажи', items: [{ id: 'q', title: 'Королева', text: 'ей нужны аплодисменты' }, { id: 'g', title: 'Молодая Девушка', text: 'ей их пока не предлагали' }, { id: 'c', title: 'Двор', text: 'все остальные' }] }, pairs: [['l1', 'q', 'Это Королева.'], ['l2', 'g', 'Это Девушка.'], ['l3', 'c', 'Это двор.']], wrong: ['Не совсем. Перечитай ремарку.', 'Интонация другая.'], canLeave: false });
  await G.run(REH.matchAfter);
  // 2. разводка; первое мигание: исчезает Полина
  await p.walkTo(-6.5, -6, 4); p.face(0, -10); G.focus(0, -10, 20); G.audio.music('backstage');
  await G.run(REH.block1); await G.wait(0.6); await vanish(G, ['polina']);
  const B = new (await import('../world/room')).Builder(G.room, G); B.decal(canvasTex(12, 5, (c) => { c.fillStyle = '#c9a7ff'; c.fillRect(0, 1, 12, 3); c.fillStyle = '#8f7fc4'; c.fillRect(5, 0, 3, 5); }, 'scarf'), { flat: true, x: -6.5, z: -8.6, y: 0.05, w: 0.9, h: 0.4 });
  await G.run(REH.flicker1);
  // 3. появляется Алла Ева; круг уносит Лизу, Рубен уходит за кулису
  const alla = B.actor('alla', 0, 20, { dir: 'b', id: 'alla' }); G.audio.music('diva'); G.focus(0, 4, 26); await alla.walkTo(0, 2, 3); G.focus(0, -6, 22);
  await G.run(REH.allaIn); await alla.walkTo(8.8, -9.2, 3.2); alla.dir = 'l'; await G.run(REH.allaScript);
  const liza = G.actor('liza'); liza?.walkTo(2, -15, 3); G.sfx('gear'); f.turnStop = 0; const turn = G.room.named.turn; const t0 = turn.rotation.y;
  await new Promise<void>((res) => { let t = 0; const tick = () => { t += 1 / 60; turn.rotation.y = t0 + Math.min(1, t / 3) * Math.PI * 2; if (liza && t > 0.8) liza.hidden = true; if (t < 3 && !G.fast) requestAnimationFrame(tick); else res(); }; tick(); });
  const rub = G.actor('ruben'); await G.run(REH.flicker2.slice(0, 4)); if (rub) { await rub.walkTo(14, -16, 4); rub.hidden = true; } await G.run(REH.flicker2.slice(4));
  // 4. прогон: сигнал свету, темнота
  await G.run(REH.final); await timing({ title: 'Сигнал свету', sub: 'дай отмашку осветителю', zone: 0.22 });
  G.sfx('switch'); G.audio.music(null); G.R.setGrade({ bright: 0.02 }, true); G.sfx('crash'); await G.wait(0.8); G.sfx('paper'); await G.wait(0.4); G.sfx('laugh', { n: 4, vol: 0.12 }); await G.run(REH.blackout.slice(0, 1));
  f.act1 = 1; await G.rebuild(); G.player.place(-6.5, -6, 'f'); G.shake(0.3); G.sfx('spot');
  const B2 = new (await import('../world/room')).Builder(G.room, G); const al2 = B2.actor('alla', 8.8, -9.2, { dir: 'l', id: 'allaScene' }); const pages = B2.particles('confetti', { count: 50, color: 0xf4ecd4, top: 5 });
  G.focus(0, -11, 21); await G.run(REH.blackout.slice(1)); await G.wait(0.6); await G.run(REH.after); G.unfocus(); G.audio.music('theater'); pages.visible = false; al2.hidden = true;
}
async function casting(G: any) {
  const f = G.f; await G.run(D.castIntro);
  const todo = FRIENDS.filter((x) => G.done(x) && !f['cast_' + x]);
  const res = await pick({ title: 'Распределение ролей', sub: "The Queen's Last Curtain", intro: 'Напротив каждого имени, либо роль, которую ты выбрала сама, либо пометка «спросить».', rows: todo.map((x) => ({ id: x, label: CHARS[x].name, options: [{ id: 'assigned', text: `Вписать: «${ROLES[x][0]}»`, hint: 'я лучше знаю, где он(а) смотрится' }, { id: 'asked', text: 'Оставить пустым и спросить', hint: 'пусть выберет сам(а)' }] })), confirm: 'В работу' });
  let a = 0, q = 0; for (const x of todo) { f['cast_' + x] = res[x]; if (res[x] === 'asked') q++; else a++; }
  if (a) await G.run(D.cast_assigned); if (q) await G.run(D.cast_asked); G.note('casting');
}
async function act4(G: any) {
  const B = new (await import('../world/room')).Builder(G.room, G); const pos: any = { polina: [-5, -9], ruben: [-3, -11.4], matvey: [-0.8, -9.6], erika: [1.4, -11.6], liza: [3.4, -9.4], angelina: [5.4, -11.2] };
  for (const id of FRIENDS) { const a = G.room.actor(id); if (a) a.place(pos[id][0], pos[id][1], 'f'); else B.actor(id === 'polina' ? 'polina_coat' : id, pos[id][0], pos[id][1], { id }); }
  for (const id of ['alla', 'allaDr', 'allaX', 'allaT']) { const a = G.room.actor(id); if (a) a.hidden = true; }
  if (G.state.mask) G.setMask(G.state.mask);
  await G.ui.card([['АКТ V', 'act'], ['THE DIVA', 'big']]); const p = G.player; p.place(0, -6.5, 'b'); G.focus(0, -9.5, 21);
  const nodes = D.act4 as any[], k = nodes.findIndex((n) => n && n.sfx === 'spot');
  await G.run(nodes.slice(0, k)); G.audio.music('diva');
  const alla = B.actor('alla', 17.6, 5, { id: 'allaB', dir: 'l' }); alla.y = 4; B.spot(14, 12, 6, 17.6, 5, 0xffd0d0, 120, { angle: 0.3, cone: 0.08, shadow: false }); G.focus(8, 0, 28);
  await G.run(nodes.slice(k, nodes.length - 7)); alla.hidden = true; G.focus(0, -9.5, 21); await G.run(nodes.slice(nodes.length - 7)); G.unfocus(); G.audio.music('theater'); await G.save('auto'); await G.rebuild();
}

const DOORS: { id: string; x: number; to: string; label: string; col: string; sign: string; fade: string; glow?: number; ask: string }[] = [
  { id: 'polina', x: 1.5, to: 'pol_road', label: 'Мокрая дверь', col: '#2a3a34', sign: '', fade: 'fade', ask: '' },
  { id: 'ruben', x: 5.5, to: 'rub_terrace', label: 'Двери с золотой рамкой и запахом озера', col: '#1c1418', sign: 'CASINO', fade: 'fade', glow: 0xe8c36a, ask: 'За дверью слышно, как стучит шарик рулетки и где-то шепчут: «ставки сделаны». На ручке висит галстук-бабочка.' },
  { id: 'matvey', x: 9.5, to: 'mat_yard', label: 'Раздвижная школьная дверь', col: '#c8aa78', sign: '2-Б', fade: 'flash', glow: 0xffc0dc, ask: 'За дверью звенит школьный звонок и падают лепестки. Слишком красиво падают. Как по команде.' },
  { id: 'erika', x: 13.5, to: 'eri_office', label: 'Дверь с матовым стеклом', col: '#3a3a3a', sign: 'СЫСК', fade: 'iris', ask: 'За стеклом, силуэт в шляпе и дождь. Цвета вокруг двери выцветают, как на старой плёнке.' },
  { id: 'liza', x: 17.5, to: 'liz_base', label: 'Огромная книга на подставке', col: '#b89858', sign: 'ЖИЛА-БЫЛА', fade: 'page', glow: 0xffe9a0, ask: 'Книга в рост человека. На обложке, башня. Страницы шелестят сами, будто их кто-то торопит.' },
  { id: 'angelina', x: 20.8, to: 'ang_home', label: 'Гримёрное зеркало с лампами', col: '#ff9ad8', sign: 'DEBUT', fade: 'mirror', glow: 0xff80c0, ask: 'В зеркале вместо отражения, коридор агентства. Белый, глянцевый, с экранами. На каждом, одно и то же улыбающееся лицо. Не Ангелины.' },
];
const backstage: RoomDef = {
  name: 'Карман сцены', w: 46, d: 12, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [0.92, 0.96, 1.08], vig: 0.6 },
  build(R, G) {
    const f = G.f;
    R.floor('stage', { x: -14.5, w: 17 }); R.floor('stage', { x: 10.5, w: 25 }); R.walls('brick', { h: 8 }); R.ambient(0x3a3c50, 3.1, 0xa0a8c8); R.light(-14, 6.5, -4.5, 0xffd8a0, 10, 12); R.light(14, 6.5, -4.5, 0xffd8a0, 10, 12); R.light(2, 6.5, -4.5, 0xc0ccff, 8, 10); R.particles('dust', { count: 110, top: 7 });
    const voidP = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 12), new THREE.MeshBasicMaterial({ color: 0x141c30 })); voidP.rotation.x = -Math.PI / 2; voidP.position.set(-4, -3, 0); R.room.group.add(voidP);
    for (const [x, z] of [[-6, 0], [-2, 0]]) R.box(x, z, 0.12, 12, 3, { tex: 'brick', tint: '#4a3a40', y: -3, solid: false, cast: false });
    R.collider(-6, -6, -2, -1.1); R.collider(-6, 1.1, -2, 6); for (const ex of [-6.05, -1.95]) for (const [z0, z1] of [[-5.8, -1.5], [1.5, 5.8]]) { R.box(ex, (z0 + z1) / 2, 0.07, z1 - z0, 0.07, { tex: 'gold', y: 0.95, solid: false, cast: false }); for (let zz = z0; zz <= z1 + 0.01; zz += (z1 - z0) / 3) R.box(ex, zz, 0.08, 0.08, 0.95, { tex: 'metal', solid: false, cast: false }); } R.sprite('ladder', -4, -5.4, { y: -2.6, scale: 1.4, thin: true }); R.light(-4, -1.5, 0, 0x6080c0, 6, 6); const mid = R.collider(-6, -1.1, -2, 1.1); mid.on = !f.bridge;
    const shadow = R.decal(canvasTex(64, 34, (c) => { c.fillStyle = 'rgba(4,3,8,0.92)'; c.fillRect(0, 8, 64, 20); for (let i = 0; i < 8; i++) c.fillRect(2 + i * 8, 0, 3, 34); c.fillRect(0, 0, 64, 3); c.fillRect(0, 31, 64, 3); }, 'shadowbridge'), { flat: true, x: -4, z: 0, y: 0.02, w: 4.4, h: 2.3, glow: true }); shadow.visible = !!f.bridge && G.state.mask === 'tragedy'; R.room.named.shadow = shadow; R.room.named.mid = mid; R.onUpdate(() => { const on = !!f.bridge && G.state.mask === 'tragedy'; shadow.visible = on; mid.on = !on; }); // мост из тени существует только в маске Трагедии
    for (let x = -20; x <= 20; x += 4.4) R.box(x, -5.6, 0.1, 0.1, 8, { tex: 'metal', tint: '#a89070', solid: false, cast: false });
    // восточная половина: штанкет со скатанным задником, рейка с верёвками, прислонённые декорации, мешки, рабочий свет
    R.box(11, -3.2, 20, 0.14, 0.14, { tex: 'metal', y: 6.9, solid: false, cast: false }); { const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 18, 8), new THREE.MeshLambertMaterial({ map: tex('paper', '#c8b8a0') })); roll.rotation.z = Math.PI / 2; roll.position.set(11, 6.5, -3.2); R.room.group.add(roll); for (const x of [3, 11, 19]) R.box(x, -3.2, 0.03, 0.03, 1.2, { tex: 'metal', y: 6.9, solid: false, cast: false }); }
    R.box(22.75, 0, 0.3, 7, 0.25, { tex: 'darkwood', y: 1.3, solid: false }); for (let z = -3; z <= 3; z += 0.6) { R.box(22.7, z, 0.06, 0.06, 6.6, { tex: 'paper', tint: '#b8a070', y: 1.4, solid: false, cast: false }); R.box(22.6, z, 0.1, 0.1, 0.45, { tex: 'gold', y: 1.1, solid: false, cast: false }); }
    const flatT = (k: number) => pxTex(40, 32, (c) => { rr(c, 0, 0, 40, 32, '#8a6438'); rr(c, 1, 1, 38, 30, ['#3a5a8a', '#4a7a4a', '#c8a080'][k]); if (k === 0) { for (let i = 0; i < 12; i++) rr(c, hsh(i) * 36, hsh(i + 1) * 14, 1, 1, '#fff4c8'); rr(c, 26, 4, 5, 5, '#f4ecc0'); } if (k === 1) for (let i = 0; i < 8; i++) { c.fillStyle = ['#2a5a2a', '#5a9a4a'][i % 2]; c.beginPath(); c.arc(4 + i * 5, 18 + (i % 3) * 3, 6, 0, 7); c.fill(); } if (k === 2) { rr(c, 6, 12, 28, 19, '#e8d8b8'); for (let i = 0; i < 5; i++) rr(c, 8 + i * 6, 16, 3, 10, '#5a2a3a'); rr(c, 4, 10, 32, 2, '#d4ae48'); } rr(c, 1, 29, 38, 2, 'rgba(0,0,0,.3)'); }, 'bflat' + k);
    [0, 1, 2].forEach((k) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(5, 4), new THREE.MeshLambertMaterial({ map: flatT(k), side: THREE.DoubleSide })); m.position.set(22.3 - k * 0.35, 2, 1.2 + k * 0.4); m.rotation.y = -Math.PI / 2; m.rotation.x = 0; m.rotateX(0); m.rotation.z = 0; m.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0); R.room.group.add(m); }); R.collider(21, -1.4, 23, 3.8);
    for (const [x, z] of [[5.6, 4.6], [6.3, 4.8], [13.8, 4.6]]) R.sprite(PROPTEX.sandbag(), x, z, { scale: 1.2 }); R.sprite('stagelight', 18.4, 3.6, { scale: 1.6 }); R.box(18.4, 3.6, 0.1, 0.1, 1.1, { tex: 'metal', solid: false }); R.light(18, 2.4, 2.6, 0xffd8a0, 8, 9);
    for (const x of [-19.4, 8, 16]) R.box(x, 3.8, 1.6, 1.4, 1.4, { tex: 'wood' }); R.box(-19.4, 3.8, 1.2, 1, 1, { tex: 'wood', y: 1.4, solid: false });
    for (const ex of [-6, -2]) for (let k = 0; k < 12; k++) R.box(ex + (ex < -4 ? 0.12 : -0.12), -5.5 + k + 0.25, 0.22, 0.5, 0.02, { color: k % 2 ? 0x1a1a1a : 0xe8c230, y: 0.01, solid: false, cast: false });
    R.sprite('ladder', 21, -5.3, { scale: 1.3 }); R.sprite(PROPTEX.coil(), -9.6, -2.4, { scale: 1.4 }); for (const [x, z] of [[-8.6, -2.8], [-8.2, -2.2]]) R.sprite(PROPTEX.sandbag(), x, z, { scale: 1.2 }); R.light(-12.6, 2.2, 5, 0xffd8a0, 5, 6); R.sprite('tree', -20.6, -4.6, { scale: 0.9 });
    R.light(-14, 5, -2, 0xffc890, 22, 16, { flicker: 0.05 }); R.light(10, 5.5, -2, 0x90a8ff, 16, 22);
    R.door('d_stage', -20, { to: 'hub_stage', spot: 'back', label: 'На сцену', col: '#2a1c14' });
    // реквизиторский стол с масками
    R.table(-12.5, -4.3, 3, 1.2);
    if (!f.masks) { R.sprite('masks', -12.5, -4.2, { y: 1.15, name: 'masksSpr' }); R.inter('masks', -12.5, -3.2, { label: 'Три маски и записка', fn: async (G) => { await G.run(D.masksGet); await G.ui.paper(PAPERS.masks); await G.run(D.masksAfter); G.room.named.masksSpr.visible = false; G.room.inter('masks').enabled = false; G.ui.hud(); } }); }
    else R.look('ptable', -12.5, -3.2, 'Реквизиторский стол', ['~: Стол реквизитора. Всё подписано: «кинжал (не настоящий)», «яд (чай)», «корона (не трогать, Алла Ева)».'], { quiet: true });
    R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'none', solid: 0.5 }); R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'tragedy' }); R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'drama' }); R.sprite('bustfun', -9.2, -4.8, { scale: 1.5, mask: 'comedy' });
    R.look('bust', -9.2, -3.8, 'Бюст основателя', D.bust, { mask: 'none' }); R.look('bustCom', -9.2, -3.8, 'Бюст (он подмигивает)', D.bustCom, { mask: 'comedy' });
    R.decal(canvasTex(72, 20, (c) => { ptext(c, 'Тени здесь держат.', 2, 1, { size: 8, col: '#cfe0ff' }); ptext(c, 'Проверено., К.', 2, 10, { size: 8, col: '#cfe0ff' }); }, 'chalk'), { x: -7.2, y: 2.6, w: 4.5, h: 1.25, mask: 'tragedy', glow: true });
    R.decal(canvasTex(48, 12, (c) => { c.fillStyle = '#9ad0ff'; for (let i = 0; i < 6; i++) { c.fillRect(2 + i * 8, i % 2 ? 2 : 7, 4, 2); c.fillRect(2 + i * 8, i % 2 ? 5 : 10, 2, 1); } }, 'steps'), { flat: true, x: -4.6, z: 0, y: 0.04, w: 4.6, h: 1.1, mask: 'tragedy', glow: true });
    R.look('wallTr', -6.9, -1.6, 'Надпись мелом и следы', D.wallTr, { mask: 'tragedy', photo: 'Следы на тени' });
    R.sprite(canvasTex(12, 5, (c) => { c.fillStyle = '#c9a7ff'; c.fillRect(0, 1, 12, 3); c.fillStyle = '#8f7fc4'; c.fillRect(5, 0, 3, 5); }, 'scarf'), -7.3, 3.4, { mask: 'drama', glow: true, y: 0.1 }); R.look('scarf', -7.3, 3.6, 'Шарф', D.scarfDr, { mask: 'drama', r: 1.3 });
    // головоломка: тень-мост
    const cutPos = [[-12.6, 4.2], [-8.4, 0]], cp = cutPos[f.cut ? 1 : 0];
    const cut = R.sprite('bridgecut', cp[0], cp[1], { scale: 0.75, solid: 1.2 }); R.room.named.cut = cut;
    const cutI = R.inter('cut', cp[0], cp[1] + 0.8, { label: 'Фанерный мостик на колёсах (катить)', cond: () => !f.bridge, fn: async (G) => { if (!f.cut_seen) { f.cut_seen = 1; await G.run(D.cutMove); } f.cut = f.cut ? 0 : 1; G.sfx('gear'); f.spot = 0; await G.rebuild(); } });
    R.box(-15.6, -1.4, 0.16, 0.16, 2.2, { tex: 'metal' }); for (let k = 0; k < 3; k++) { const leg = R.box(-15.6 + Math.cos(k * 2.1) * 0.35, -1.4 + Math.sin(k * 2.1) * 0.35, 0.06, 0.06, 1.0, { tex: 'metal', solid: false }); leg.rotation.set(Math.sin(k * 2.1) * 0.5, 0, -Math.cos(k * 2.1) * 0.5); } 
    const aims = [[-11.8, -5], [-14, -4], [-2, 0]]; const aim = aims[f.spot || 0];
    { const head = new THREE.Group(); head.position.set(-15.6, 2.55, -1.4); const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 0.9, 8), new THREE.MeshLambertMaterial({ map: pxTex(16, 16, (c) => { rr(c, 0, 0, 16, 16, '#26282e'); rr(c, 0, 0, 16, 2, '#4a4e58'); rr(c, 0, 7, 16, 1, '#5a5e68'); for (let x = 1; x < 16; x += 4) { rr(c, x, 3, 1, 1, '#8a8e98'); rr(c, x, 12, 1, 1, '#8a8e98'); } rr(c, 0, 14, 16, 2, '#14161a'); for (let x = 2; x < 16; x += 3) rr(c, x, 9, 2, 2, '#14161a'); }, 'spothead') })); body.rotation.x = Math.PI / 2; head.add(body); const lens = new THREE.Mesh(new THREE.CircleGeometry(0.36, 16), new THREE.MeshBasicMaterial({ color: 0xfff4d0 })); lens.position.z = 0.46; head.add(lens); const yoke = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.04, 6, 16, Math.PI), new THREE.MeshLambertMaterial({ color: 0x3a3a40 })); yoke.rotation.z = Math.PI; head.add(yoke); R.room.group.add(head); head.lookAt(aim[0], 0, aim[1]);
      R.spot(-15.6 + (aim[0] + 15.6) * 0.04, 2.55, -1.4 + (aim[1] + 1.4) * 0.04, aim[0], aim[1], 0xfff0d0, 140, { angle: 0.3, pen: 0.35, cone: 0.06 }); }
    R.inter('spot', -15.6, -0.4, { label: 'Прожектор (повернуть)', cond: () => !f.bridge, fn: async (G) => { f.spot = ((f.spot || 0) + 1) % 3; G.sfx('spot'); await G.rebuild(); if (f.spot === 0) await G.run(D.spotAim0); else if (f.spot === 1) await G.run(D.bridgeWrong); else if (!f.cut) await G.run(D.bridgeNoCut); else { G.focus(-4, 0, 16); await G.wait(0.8); await G.run(D.bridgeOn); G.unfocus(); await G.rebuild(); } } });
    // зеркальная рама под колосниками (после главы Лизы)
    if (G.done('liza')) {
      R.npc('liza_short', -15.5, 2.6, { id: 'liza', talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_lizaDr : D.h_liza) });
      if (!f.braid_used) { R.decal(mirrorTex(64, 80, false), { x: -16.5, y: 9.5, w: 4, h: 5 }); R.sprite('hook', -18.2, -5.2, { y: 2, scale: 1.4 }); R.inter('block', -18.2, -4.4, { label: 'Блок и гнилой трос', fn: async (G) => { await G.run(D.frameDown); G.sfx('rope'); G.shake(0.2); await G.rebuild(); } }); }
      else { R.decal(mirrorTex(64, 80, false), { x: -16.5, y: 2.6, w: 4, h: 5 }); R.inter('frame', -16.5, -4.4, { label: 'Репетиционное зеркало', photo: 'Зеркало: одинаковые позы', fn: (G) => G.run(D.frameLook) }); }
    }
    // двери жанровых миров
    for (const d of DOORS) {
      if (d.id !== 'polina' && !G.done('polina')) continue; const done = G.done(d.id);
      R.door('w_' + d.id, d.x, { label: done ? d.label + ' (история сыграна)' : d.label, col: d.col, sign: d.sign, glow: undefined, fn: async (G) => {
        if (done) return G.run(['~: Эта история сыграна. Дверь тёплая на ощупь и больше не открывается, как книга, которую дочитали.']);
        if (d.id === 'polina') { await G.run(D.polinaDoor); if (!f.go) return; } else { await G.run(['~: ' + d.ask, { c: [['Войти', [{ set: { go: 1 } }]], ['Позже', [{ set: { go: 0 } }]]] }]); if (!f.go) return; }
        if (G.state.mask) G.setMask(G.state.mask); G.sfx(d.id === 'polina' ? 'thunder' : 'door');
        try { await G.goto(d.to, 'start', { fade: d.fade }); } catch (e) { console.warn('[hub] глава ещё не собрана', d.id, e); await G.run(['~: Ручка поворачивается, но дверь не поддаётся. Изнутри слышно, как кто-то торопливо двигает декорации.', '~: За этой дверью ещё репетируют.']); } } });
      if (d.glow && !done) R.light(d.x, 2.5, -4.6, d.glow, 12, 7, { flicker: 0.1 }); if (d.id === 'polina' && !done) { R.light(d.x, 2.5, -4.6, 0x6080c0, 10, 7, { flicker: 0.3 }); R.decal(canvasTex(32, 16, (c) => { c.fillStyle = 'rgba(120,160,220,0.5)'; c.fillRect(4, 2, 24, 12); c.fillRect(0, 6, 32, 5); }, 'puddle'), { flat: true, x: d.x, z: -4.6, y: 0.03, w: 3, h: 1.5 }); }
      R.spawn('ret_' + d.id, d.x, -3.4);
    }
    R.spawn('start', -20, -3.6);
  },
  async enter(G, from) {
    const f = G.f;
    if (!f.back_seen) { f.back_seen = 1; G.focus(-4, 0, 22); await G.wait(1); await G.run(D.backstageFirst); G.unfocus(); return; }
    if (f.ret) { const who = f.ret; delete f.ret; G.audio.music('theater'); await G.wait(0.5); await G.run((D as any)['ret_' + who]); await returnClue(G, who); const nd = G.doneCount(); if (nd >= 2 && !f.act3) { f.act3 = 1; await G.ui.card([['АКТ III', 'act'], ['THE SCRIPT KNOWS', 'big'], ['Кто-то пишет этот сценарий заранее. Пора узнать кто.', 'sm']]); } if (nd >= 4 && !f.act4b) { f.act4b = 1; await G.ui.card([['АКТ IV', 'act'], ['BEHIND THE CURTAIN', 'big'], ['У каждого спектакля есть тот, кто дёргает за ниточки.', 'sm']]); } if (nd >= 6) await G.run(D.preAct4); else if (!f.afterRet) { f.afterRet = 1; await G.run(D.afterRet); } G.audio.music('backstage'); await G.save('auto'); await G.rebuild(); }
  },
};

const workshop: RoomDef = {
  name: 'Мастерская декораций', w: 18, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.04, 1, 0.92], vig: 0.6 },
  build(R, G) {
    const f = G.f; R.floor('floor'); R.walls('plaster', { h: 6, tint: '#b8a888' }); dustAndBase(R); R.light(0, 4.2, -0.6, 0xffe0b0, 12, 14); R.light(-6, 3, 2, 0xffc080, 8, 9);
    // обшивка стен, подвесная лампа над макетом, опилки
    R.box(0, -4.88, 18, 0.12, 1.6, { tex: 'woodwall', tint: '#9a6a44', solid: false, cast: false }); R.box(0, -4.8, 18, 0.2, 0.12, { tex: 'darkwood', y: 1.6, solid: false, cast: false }); for (const sx of [-1, 1]) R.box(sx * 8.88, 0, 0.12, 10, 1.6, { tex: 'woodwall', tint: '#9a6a44', solid: false, cast: false });
    R.box(0, -0.6, 0.03, 0.03, 1.4, { tex: 'black', y: 4.7, solid: false, cast: false }); R.sprite(pxTex(16, 10, (c) => { rr(c, 2, 0, 12, 6, '#2e5a3a'); rr(c, 0, 5, 16, 2, '#1e3a2a'); rr(c, 3, 1, 4, 3, '#4a8a5a'); rr(c, 5, 7, 6, 3, '#fff0c0'); rr(c, 6, 7, 3, 1, '#ffffff'); }, 'pendant'), 0, -0.6, { y: 4.05, glow: true, scale: 1.2 });
    const dust = pxTex(32, 20, (c) => { for (let i = 0; i < 120; i++) { const a = hsh(i) * 6.28, r = Math.sqrt(hsh(i + 1)) * 14; rr(c, 16 + Math.cos(a) * r, 10 + Math.sin(a) * r * 0.6, 1, 1, ['#d8b880', '#c8a060', '#e8d0a0'][i % 3]); } }, 'sawdust'); for (const [x, z] of [[-3.2, 2.6], [2.4, 2.2], [-5.6, 3.6], [5.4, 0.6]]) R.decal(dust, { flat: true, x, z, y: 0.025, w: 2.4, h: 1.5 });
    R.door('door', -6.5, { to: 'hub_corridor', spot: 'work', label: 'В коридор' });
    R.table(0, -0.5, 4, 2.4, { tex: 'wood' });
    R.box(0, -0.5, 2.6, 1.5, 0.5, { tex: 'stage', y: 1.15, solid: false }); for (let i = 0; i < 6; i++) { const col = ['#e8c230', '#40e0d0', '#2c3550', '#888888', '#c9a0dc', '#ff9ad8'][i]; R.sprite(pxTex(8, 12, (c) => { rr(c, 0, 10, 8, 2, '#8a6a42'); rr(c, 2, 1, 4, 3, '#e8d0b0'); rr(c, 1, 4, 6, 6, col); rr(c, 1, 4, 2, 6, 'rgba(255,255,255,.3)'); rr(c, 3, 2, 1, 1, '#2a1a10'); rr(c, 2, 0, 4, 1, '#5a3a20'); }, 'maqfig' + i), -1.5 + i * 0.6, 0.35, { y: 1.15, scale: 0.75 }); }
    R.sprite(pxTex(36, 20, (c) => { rr(c, 0, 0, 36, 20, '#b08a2c'); rr(c, 3, 4, 30, 16, '#1a1210'); rr(c, 3, 4, 7, 16, '#8e1830'); rr(c, 26, 4, 7, 16, '#8e1830'); rr(c, 3, 4, 30, 3, '#721022'); rr(c, 0, 0, 36, 1, '#f0d478'); rr(c, 14, 1, 8, 2, '#f0d478'); }, 'maqarch'), 0, -1.1, { y: 1.65, scale: 1.0, thin: true });
    R.sprite(pxTex(10, 12, (c) => { rr(c, 0, 10, 10, 2, '#8a6a42'); rr(c, 1, 1, 3, 3, '#e8d0b0'); rr(c, 0, 4, 5, 6, '#a3122a'); rr(c, 6, 1, 3, 3, '#e8d0b0'); rr(c, 5, 4, 5, 6, '#2f7f82'); rr(c, 4, 6, 2, 2, '#f4ecd8'); }, 'maqglue'), 0.07, -0.6, { y: 1.65, scale: 0.75, mask: 'tragedy' });
    R.inter('maq', 0, 1.2, { label: 'Макет сцены', mask: 'none', photo: 'Макет с шестью коробочками', fn: async (G) => { await G.run(D.maquette); if (!f.clock) { f.clock = 1; await G.wait(0.5); G.sfx('bell'); await G.run(D.clock); } } });
    R.inter('maqTr', 0, 1.2, { label: 'Макет: след от клея', mask: 'tragedy', photo: 'Две склеенные фигурки', fn: (G) => G.run(D.maquetteTr) });
    R.look('maqO', 0, 1.2, 'Макет сцены', D.maquette, { mask: 'drama' }); R.look('maqC', 0, 1.2, 'Макет сцены', ['varya=Макет: Меня никто не спрашивал, хочу ли я быть в масштабе один к двадцати. Я хотел быть настоящим залом.'], { mask: 'comedy' });
    for (const [i, col] of ['#a3122a', '#2f7f82', '#e8c36a'].entries()) R.sprite(pxTex(12, 14, (c) => { rr(c, 1, 2, 10, 12, '#8a8e98'); rr(c, 1, 2, 3, 12, '#b8bcc4'); rr(c, 9, 2, 2, 12, '#5a5e68'); rr(c, 0, 1, 12, 2, '#6a6e78'); rr(c, 2, 5, 8, 6, '#e8e0c8'); rr(c, 3, 6, 6, 3, col); rr(c, 1, 0, 6, 1, col); rr(c, 2, 2, 2, 5, col); rr(c, 3, 11, 2, 3, col); }, 'can' + col), 6 + i * 0.7, -4 + (i % 2) * 0.2, { scale: 1.1 }); R.collider(5.6, -4.3, 7.8, -3.7); R.look('paint', 6.7, -3.2, 'Банки с краской', ['~: Красная, бирюзовая, золотая. Красной израсходовано втрое больше.'], { mask: 'none' }); R.look('paintC', 6.7, -3.2, 'Банки (спорят)', D.paintCom, { mask: 'comedy', egg: 'paint' });
    R.sprite(pxTex(40, 56, (c) => { c.fillStyle = '#c8a070'; c.beginPath(); c.moveTo(17, 56); c.lineTo(17, 36); c.bezierCurveTo(-2, 38, -2, 6, 20, 2); c.bezierCurveTo(42, 6, 42, 38, 23, 36); c.lineTo(23, 56); c.closePath(); c.fill(); crisp(c, 40, 56); c.globalCompositeOperation = 'source-atop'; rr(c, 0, 0, 40, 40, '#4a8a4a'); for (let i = 0; i < 50; i++) { c.fillStyle = ['#2e6a3a', '#7ac06a', '#3a7a40'][i % 3]; c.beginPath(); c.ellipse(4 + hsh(i) * 32, 4 + hsh(i + 1) * 32, 3, 1.5, hsh(i + 2), 0, 7); c.fill(); } rr(c, 16, 36, 8, 20, '#7a5230'); rr(c, 17, 36, 2, 20, '#9a7248'); for (let x = 0; x < 40; x += 2) if (hsh(x) > 0.5) rr(c, x, 0, 1, 56, 'rgba(200,160,112,.25)'); c.globalCompositeOperation = 'source-over'; }, 'plyTree'), -1.6, -4.4, { scale: 1.0 }); R.box(-1.6, -4.85, 0.1, 0.1, 2.4, { tex: 'wood', solid: false }).rotation.x = -0.4; R.box(-1.6, -4.4, 1.4, 0.5, 0.15, { tex: 'wood', tint: '#a07a50' }); for (const dx of [-0.7, 0.7]) R.box(4.6 + dx, 3.2, 0.12, 0.7, 0.9, { tex: 'wood', solid: false }); R.box(4.6, 3.2, 1.8, 0.2, 0.12, { tex: 'wood', y: 0.9 }); for (let k = 0; k < 4; k++) R.box(-3.2 + (k % 2) * 0.1, 3.6 + k * 0.04, 3.2, 0.32, 0.14, { tex: 'wood', tint: '#d8b080', y: k * 0.14, solid: k === 0 }); R.box(7, -4.85, 3.2, 0.12, 3.2, { tex: 'wood', tint: '#a08060', y: 0.4, solid: false }); R.sprite(pxTex(28, 52, (c) => { c.fillStyle = '#c8a070'; c.beginPath(); c.moveTo(14, 0); c.lineTo(27, 42); c.lineTo(17, 42); c.lineTo(17, 52); c.lineTo(11, 52); c.lineTo(11, 42); c.lineTo(1, 42); c.closePath(); c.fill(); crisp(c, 28, 52); c.globalCompositeOperation = 'source-atop'; rr(c, 0, 0, 28, 42, '#3a6a44'); for (let y = 6; y < 42; y += 6) { rr(c, 0, y, 28, 2, '#2a5034'); rr(c, 4, y - 2, 20, 1, '#6aa070'); } rr(c, 11, 42, 6, 10, '#7a5230'); c.globalCompositeOperation = 'source-over'; rr(c, 14, 10, 6, 4, 'rgba(255,255,255,.0)'); }, 'plyPine'), 7.6, 1, { scale: 0.95 }); R.light(6.2, 3.2, 2.6, 0xffe0b0, 7, 7); R.sprite('ladder', 4, -4.6); R.sprite('wheel', -4, -4.6, { scale: 1.6 }); R.box(-7, 2.5, 2, 1.6, 1.2, { tex: 'wood' });
    // верстаки, инструменты, висящие задники, шестерни механики поворотного круга
    R.table(-5.5, 1.8, 3, 1.3, { tex: 'wood' }); for (let i = 0; i < 4; i++) R.sprite(['gear', 'key', 'candle', 'book'][i], -6.6 + i * 0.7, 1.8, { y: 1.15, scale: 1.1 });
    for (const [x, col] of [[-3, '#5a7a4a'], [0, '#4a5a8a'], [3, '#8a5a3a']] as [number, string][]) R.decal(canvasTex(48, 32, (c) => { c.fillStyle = col; c.fillRect(0, 0, 48, 32); c.fillStyle = 'rgba(255,255,255,.15)'; for (let k = 0; k < 6; k++) c.fillRect(k * 8, 18 + (k % 2) * 4, 6, 14); c.fillStyle = '#2a1c14'; c.fillRect(0, 0, 48, 2); }, 'drop' + x), { x, y: 4.8, z: -4.7, w: 3.2, h: 2 });
    pGear(R, 6.4, 2.6, -4.7, 1.2, { speed: 0.2 }); pGear(R, 7.6, 1.5, -4.6, 0.7, { teeth: 10, speed: -0.34, tone: 1 });
    R.sprite(PROPTEX.coil(), 2, 3.6, { scale: 1.5 }); R.sprite(PROPTEX.sandbag(), 5, 3.8, { scale: 1.3 }); R.sprite(PROPTEX.sandbag(), 5.5, 4, { scale: 1.2 });
    R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#e8e0c8'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#111'; c.fillRect(7, 3, 2, 6); c.fillRect(7, 8, 5, 2); c.strokeStyle = '#3a2a14'; c.strokeRect(0.5, 0.5, 15, 15); }, 'clock'), { x: -3.5, y: 4.6, w: 1, h: 1 });
    if (G.done('ruben')) R.npc('ruben', 3.6, 1.6, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_rubenDr : D.h_ruben) });
    witness(R, G, 'stagehand', 9.2, -1.6, { dir: 'l' });
    R.spawn('start', -6.5, -3.4);
  },
};
const archive: RoomDef = {
  name: 'Архив театра', chapter: 'Акт III · Сценарий знает', w: 18, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [0.96, 0.98, 1.06], vig: 0.6 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('woodwall', { h: 6 }); dustAndBase(R, false); R.light(0, 4, 0.6, 0xfff0d0, 13, 10, { flicker: 0.04 }); R.light(-6, 3, -2, 0x90a8ff, 6, 8);
    R.door('door', 7, { to: 'hub_mezz', spot: 'arch', label: 'На бельэтаж' }); caseFind(R, G, 'c_poster', -2.6, -3.6, 'Старая афиша на стеллаже', CASE.poster);
    for (const x of [-7, -3.4, 0.2]) bookshelf(R, x, -4.6, { w: 3, h: 4.6, shelves: 6 });
    R.ambient(0x3a3430, 1.2, 0xc8c0b0); rug(R, 0, 1.2, 6.4, 3.6, { col: '#3a2430', border: '#a08850' }); falloff(R, 0, 0, 22, 14, 0.026, 'rgba(8,6,10,0.75)');
    // висячая лампочка, банкирская лампа, картотека, лестница, разбросанные бумаги
    R.box(-4, 0.5, 0.03, 0.03, 1.9, { color: 0x1a1a1a, y: 4.1, solid: false, cast: false }); R.box(-4, 0.5, 0.26, 0.26, 0.32, { color: 0xffe8b0, emissive: 0xffd080, y: 3.8, solid: false, cast: false }); R.light(-4, 3.6, 0.5, 0xffd890, 9, 10);
    R.box(2.2, 0.75, 0.5, 0.28, 0.24, { color: 0x1f5a34, emissive: 0x0a2a14, y: 1.42, solid: false, cast: false }); R.box(2.2, 0.75, 0.06, 0.06, 0.3, { tex: 'gold', y: 1.12, solid: false }); R.light(2.2, 1.6, 1.0, 0xb8ffb0, 4, 6);
    for (let i = 0; i < 2; i++) { R.box(2.6 + i * 1.25, -4.5, 1.15, 0.9, 1.7, { tex: 'metal', tint: '#8a8a70' }); for (let k = 0; k < 2; k++) { R.box(2.6 + i * 1.25, -4.04, 0.95, 0.04, 0.66, { tex: 'metal', tint: '#a8a890', y: 0.18 + k * 0.78, solid: false, cast: false }); R.box(2.6 + i * 1.25, -4.0, 0.3, 0.05, 0.1, { tex: 'gold', y: 0.62 + k * 0.78, solid: false, cast: false }); R.decal(pxTex(16, 6, (c) => { rr(c, 0, 0, 16, 6, '#e8dcc0'); rr(c, 0, 0, 16, 1, '#b08a2c'); rr(c, 0, 5, 16, 1, '#b08a2c'); rr(c, 2, 2, 5 + ((i + k) % 3) * 2, 1, '#3a2a1a'); rr(c, 2, 4, 4, 1, '#8e1830'); }, 'cablabel' + i + k), { x: 2.6 + i * 1.25, y: 0.86 + k * 0.78, z: -3.97, w: 0.5, h: 0.19, noSlot: true }); } }
    R.sprite('ladder', -8.4, -3.9, { scale: 1.2 });
    const sheet = (k: number) => pxTex(10, 13, (c) => { rr(c, 0, 0, 10, 13, k % 2 ? '#b8a888' : '#a8987a'); rr(c, 0, 0, 10, 1, '#c8b898'); for (let y = 2; y < 12; y += 2) rr(c, 1, y, 3 + hsh(y + k) * 6, 1, '#5a5048'); if (k % 3 === 0) rr(c, 6, 9, 3, 3, '#8e1830'); rr(c, 9, 1, 1, 12, '#8a7a60'); }, 'sheet' + k);
    for (let i = 0; i < 9; i++) { const pp = R.decal(sheet(i % 4), { flat: true, x: -6 + i * 1.5 + (i % 2) * 0.4, z: 2.2 + ((i * 7) % 5) * 0.45, y: 0.025 + i * 0.001, w: 0.55, h: 0.72 }); pp.rotation.z = i * 0.7; }
    R.sprite(pxTex(22, 14, (c) => { for (let k = 0; k < 6; k++) { const y = 12 - k * 2, x = 2 + (k % 3); rr(c, x, y, 16 - (k % 2) * 3, 2, ['#5a1a22', '#2a3a5a', '#3a4a2a', '#6a4a2a'][k % 4]); rr(c, x, y, 16 - (k % 2) * 3, 1, 'rgba(255,240,200,.25)'); rr(c, x + 1, y + 1, 1, 1, '#d4ae48'); } }, 'bookpile'), 5.6, 3.4, { scale: 1.2 }); R.collider(4.9, 3.1, 6.3, 3.7);
    R.sprite(pxTex(24, 16, (c) => { rr(c, 2, 4, 18, 12, '#8a6a42'); rr(c, 2, 4, 18, 2, '#a88a5a'); rr(c, 20, 6, 3, 10, '#6a4a2a'); rr(c, 6, 8, 8, 4, '#d8c8a0'); rr(c, 7, 9, 6, 1, '#5a4a3a'); for (let k = 0; k < 4; k++) rr(c, 4 + k * 4, 1 + (k % 2), 4, 4, '#c8b898'); rr(c, 0, 14, 6, 2, '#b8a888'); }, 'fallenbox'), 3.4, 3.9, { scale: 1.1 });
    for (let i = 0; i < 4; i++) R.box(-8 + i * 0.7, 3.4, 0.6, 0.45, 0.4 - i * 0.05, { tex: 'paper', tint: '#8a7858', y: 0, solid: false }); R.collider(-8.3, 3.15, -5.6, 3.65);
    R.light(7, 4.4, -3.6, 0xffd090, 9, 7);
    corkBoard(R, 3.2, 2.8, 2.8, 2, 4, { wall: 'w', at: -1 });
    R.table(0, 1, 4.4, 1.8); R.sprite('lamp', 1.8, 0.7, { y: 1.1, scale: 0.45 }); R.sprite('typewriter', -1.4, 0.9, { y: 1.15 });
    const doc = (id: string, x: number, z: number, label: string, paper: any, after: any[], note: string) => R.inter(id, x, z, { label, fn: async (G) => { await G.ui.paper(paper); if (!f['a_' + id]) { f['a_' + id] = 1; await G.run(after); G.note(note); } } });
    doc('ledger', -0.6, 2.1, 'Протокол собрания труппы', PAPERS.ledger, ['varya/worried: «Не могу голосовать за себя».', '~: Худрук воздержался, потому что голосовали… за него? За неё?', '~: Оля не поняла шутку. Кажется, я тоже не хочу её понимать.'], 'ledger');
    doc('contract', 1.2, 2.1, 'Ангажемент Аллы Евы', PAPERS.contract, ['~: Две подписи. Размашистая «Алла Ева» и скромная «К.».', '~: Чернила одни. Нажим один. Наклон один. Разные только росчерки, как если бы человек расписался дважды, очень стараясь, чтобы было непохоже.'], 'contract');
    doc('program', -7, -3.3, 'Программка', PAPERS.program, ['varya/scared: «На сцене стоит один человек».', '~: Программка завтрашней премьеры. С финалом, который я ещё не поставила.'], 'program');
    doc('seating', -3.4, -3.3, 'Папка «Утренники»', PAPERS.seating, ['varya/sad: «Рот открывать, звук не давать».', '~: Я помню, кто это сказал. Не со зла. Просто чтобы хор звучал ровнее.', '~: Дальше не помню. Как будто кто-то вырезал кусок плёнки.'], 'seating');
    R.decal(photoTex('choir', (c) => { for (let r = 0; r < 3; r++) people(c, ['#fff', '#fff', '#fff', '#fff', r === 2 ? '#2f7f82' : '#fff'], 3 + r * 5); }), { x: 3.4, y: 2.6, w: 1.6, h: 1.25 }); R.look('choir', 3.4, -3.6, 'Школьная фотография', D.archPhoto, { photo: 'Хор: третий ряд' });
    if (G.done('polina')) { R.decal(photoTex('mansion', (c) => { c.fillStyle = '#1a2238'; c.fillRect(2, 2, 24, 18); people(c, ['#2f7f82', '#e8c230'], 8); }), { x: 5, y: 2.6, w: 1.4, h: 1.1 }); R.look('polph', 5, -3.6, 'Снимок из особняка', D.archPolina); }
    R.npc('erika', -5.6, 1.4, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_erikaDr : D.h_erika) });
    if (G.done('matvey')) { R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#ff9ac0'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#fff'; c.fillRect(2, 2, 6, 1); }, 'pinkbook'), 1.6, 0.6, { y: 1.15, glow: true, thin: true }); R.inter('notebook100', 1.6, 1.9, { label: 'Тетрадь «100 шагов к неизбежному»', fn: async (G) => { await G.ui.paper({ title: '100 ШАГОВ К НЕИЗБЕЖНОМУ', cls: 'hand', body: '<p>Шаг 12. Один зонт. ✓ (зонт сломан)</p><p>Шаг 27. Закрытый класс. ✓ (шпилька)</p><p>Шаг 61. Бэнто. ✓ (пересолено!! он попросил рецепт)</p><p>Шаг 100. Крыша. ✗</p><p class="hn h4">Сцена фестиваля: героиня не вмешивается. Финал: дверь в кабинет драмкружка приоткрыта, свет из коридора. Девушка за дверью молчит. Так и оставить.</p>', sign: 'почерк на последней странице аккуратный, с петлёй на «р»' }); await G.run(['~: Последняя страница написана не Матвеем. Аккуратно, с петлёй на «р». Как у меня.', '~: Я этого не писала. Я бы запомнила.']); G.note('n_mat_book'); } }); }
    R.spawn('start', 7, -3.4);
  },
  card: (G) => G.f.arch0 ? null : (G.f.arch0 = 1, [['АРХИВ ТЕАТРА', 'act'], ['то, что уже было сыграно', 'sm']]),
};
// Кабинет худрука: дорогой кабинет. Письменный стол с бумагами, книжные стеллажи, доска мыслей с нитками,
// камин, кресла, кукольный театр, завешенное зеркало.
const office: RoomDef = {
  name: 'Кабинет худрука', floor: 'Бельэтаж', w: 18, d: 12, music: 'dressing', amb: 'hall', step: 'carpet', grade: { tint: [1.02, 0.95, 0.96], vig: 0.6, sat: 0.9 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('wallgreen', { h: 6.5, trim: 'gold' }); dustAndBase(R, false); R.ambient(0x40302a, 1.4, 0xffe0c8); rug(R, -0.5, 0.8, 9, 5.5, { col: '#2a1a3a', border: '#b89858' });
    desk(R, -1, -1.8, 3.6);
    R.inter('desk', -1, -0.6, { label: 'Стол: черновики', fn: async (G) => { await G.run(D.officeDesk); await G.ui.paper(PAPERS.drafts); if (!f.o_desk) { f.o_desk = 1; await G.run(D.officeAfter); } } });
    armchair(R, -1, -3.4, { col: 0x6a2a3a }); R.look('chair', -2.6, -3.4, 'Кресло с жакетом', D.officeChair, { r: 1.4 });
    const chairBack = (col: string, hi: string, dk: string) => pxTex(24, 26, (c) => { rr(c, 2, 0, 20, 4, dk); rr(c, 1, 2, 22, 18, dk); rr(c, 3, 2, 18, 16, col); rr(c, 4, 3, 6, 14, hi); rr(c, 0, 8, 4, 12, col); rr(c, 20, 8, 4, 12, dk); rr(c, 3, 1, 18, 1, '#d4ae48'); rr(c, 1, 19, 22, 2, '#86641c'); rr(c, 1, 19, 22, 1, '#d4ae48'); for (let y = 5; y < 17; y += 4) for (let x = 7; x < 20; x += 5) rr(c, x, y, 1, 1, dk); rr(c, 3, 21, 2, 5, '#3a2414'); rr(c, 19, 21, 2, 5, '#3a2414'); rr(c, 3, 21, 1, 5, '#6a4a30'); }, 'chairback' + col); R.sprite(chairBack('#a85a48', '#c87a62', '#5a2a20'), -2.6, 2.4, { scale: 1.1 }); R.sprite(chairBack('#a85a48', '#c87a62', '#5a2a20'), 1.2, 2.4, { scale: 1.1, flipX: true }); R.collider(-3.4, 2.0, -1.8, 2.8); R.collider(0.4, 2.0, 2.0, 2.8);
    bookshelf(R, -7.6, -5.3, { w: 2.6, h: 4.6 }); bookshelf(R, -4.6, -5.3, { w: 2.6, h: 4.6 }); bookshelf(R, 7.9, -1, { w: 3, h: 4.6, ry: -Math.PI / 2 });
    // доска мыслей: записки, фото и нитки
    corkBoard(R, 0, 3.1, 3.4, 2.4, 7, { wall: 'e', at: 3 }); R.look('thoughts', 7.6, 3, 'Доска с записками', ['~: Доска худрука. Фотографии шестерых, под каждой записка: «дом», «хранилище», «школа», «город», «башня», «агентство».', '~: Красные нитки тянутся от каждой фотографии к одной в центре. Центральная перевёрнута лицом к доске.', '~: Я не переворачиваю. Пока.']);
    // камин с часами
    const fp = new THREE.Group(); const marble = new THREE.MeshLambertMaterial({ map: tex('paperstone') }); const add = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); fp.add(b); };
    add(2.8, 0.3, 0.8, 0, 2, 0, marble); add(0.4, 2, 0.6, -1.2, 1, 0, marble); add(0.4, 2, 0.6, 1.2, 1, 0, marble); add(2, 1.4, 0.06, 0, 0.7, -0.45, new THREE.MeshLambertMaterial({ map: tex('brick', '#5a2a1a'), emissive: 0x2a0a02 })); for (const sx of [-1, 1]) add(0.06, 1.4, 0.5, sx * 0.97, 0.7, -0.2, new THREE.MeshLambertMaterial({ map: tex('brick', '#4a2418') })); add(2, 0.06, 0.5, 0, 1.4, -0.2, new THREE.MeshBasicMaterial({ color: 0x0e0604 })); add(1.4, 0.08, 0.3, 0, 0.12, -0.1, new THREE.MeshLambertMaterial({ map: tex('metal') })); add(3.0, 0.12, 0.9, 0, 0.06, 0.1, marble);
    const fireT = pxTex(64, 16, (c) => { for (let f = 0; f < 4; f++) { const ox = f * 16; rr(c, ox + 2, 13, 12, 3, '#3a1a0a'); rr(c, ox + 3, 12, 4, 2, '#5a2a10'); rr(c, ox + 9, 12, 4, 2, '#5a2a10'); for (let k = 0; k < 5; k++) { const h = 5 + hsh(f * 7 + k) * 7, x = ox + 2 + k * 2.5; rr(c, x, 13 - h, 3, h, '#ff6a18'); rr(c, x + 1, 14 - h * 0.7, 1, h * 0.7, '#ffc040'); } rr(c, ox + 6, 9, 4, 4, '#fff4c8'); } }, 'fire4'); fireT.repeat.set(0.25, 1); fireT.wrapS = THREE.RepeatWrapping;
    const fire = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: fireT, transparent: true, alphaTest: 0.1 })); fire.position.set(0, 0.8, -0.2); fp.add(fire); R.onUpdate((dt, t) => { fireT.offset.x = (Math.floor(t * 8) % 4) * 0.25; });
    fp.position.set(-8.6, 0, 2); fp.rotation.y = Math.PI / 2; R.room.group.add(fp); R.collider(-9, 0.6, -8, 3.4); R.light(-7.8, 1, 2, 0xff9a40, 8, 7, { flicker: 0.3 });
    R.sprite('candle', -8.5, 1.3, { y: 2.15 }); R.sprite('candle', -8.5, 2.7, { y: 2.15 });
    // кукольный театр
    R.box(5.4, -5.3, 2.6, 0.8, 1.2, { tex: 'darkwood' }); R.decal(pxTex(42, 34, (c) => { rr(c, 0, 0, 42, 34, '#5a3a20'); rr(c, 1, 0, 40, 4, '#d4ae48'); rr(c, 3, 4, 36, 18, '#1a1012'); rr(c, 3, 4, 9, 18, '#8e1830'); rr(c, 30, 4, 9, 18, '#8e1830'); for (let x = 4; x < 12; x += 2) rr(c, x, 4, 1, 18, '#a82840'); for (let x = 31; x < 39; x += 2) rr(c, x, 4, 1, 18, '#a82840'); for (let x = 3; x < 39; x += 4) rr(c, x, 4, 3, 3, '#721022'); rr(c, 0, 22, 42, 2, '#d4ae48'); rr(c, 2, 25, 38, 8, '#2e5038'); for (let k = 0; k < 5; k++) rr(c, 5 + k * 7, 27, 4, 4, '#d4ae48'); rr(c, 17, 0, 8, 3, '#f0d478'); rr(c, 20, 1, 2, 1, '#8e1830'); c.clearRect(12, 7, 18, 15); }, 'puppetStage'), { x: 5.4, y: 1.6, z: -4.88, w: 2.6, h: 2.1, noSlot: true }); for (let i = 0; i < 6; i++) R.sprite('marionette', 4.4 + i * 0.42, -5.1, { y: 1.2, scale: 0.55 }); for (let i = 0; i < 6; i++) R.box(4.4 + i * 0.42, -5.1, 0.02, 0.02, 3.2, { color: 0xdddddd, y: 2.1, solid: false, cast: false });
    R.look('puppets', 5.4, -4.3, 'Кукольный театр', D.officePuppets, { photo: 'Шесть марионеток на одной ваге' });
    // зеркало под тканью
    mirror3D(R, 1.8, 2.8, -5.85, 2.2, 3.4, {});
    if (!f.know_k) R.box(1.8, -5.6, 2.6, 0.12, 3.8, { tex: 'velvet', tint: '#b8a8c8', y: 0.9, solid: false, name: 'cloth' });
    R.inter('omirror', 1.8, -4.6, { label: f.know_k ? 'Зеркало' : 'Зеркало под тканью', fn: async (G) => { if (f.know_k) return G.run(['~: Я. В жакете худрука. Он мне идёт. Это-то и пугает.']); await G.run(D.officeMirror); G.room.named.cloth.visible = false; G.sfx('curtain'); await G.ui.paper(D.kNoteMirror); await G.run(D.officeMirrorAfter); } });
    window3D(R, 5, { wall: 'n', y: 3.4, w: 1.6, h: 2.4 }); sconce(R, -2.6, 3.6, -5.96, {}); R.sprite('plant', 6.6, -5.2, { solid: 0.3 });
    R.door('door', 4, { wall: 's', to: 'hub_mezz', spot: 'office', label: 'На бельэтаж' }); R.spawn('start', 4, 4.4, 'b');
  },
};
export const rooms: Record<string, RoomDef> = { ...extraRooms, hub_dressing: dressing, hub_corridor: corridor, hub_stage: stage, hub_backstage: backstage, hub_workshop: workshop, hub_archive: archive, hub_office: office };
