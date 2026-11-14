// Персонажи: внешность, единый источник для спрайтов и портретов. Описания героев и близких Вари заданы автором
// проекта и здесь не переосмысляются; жанровые персонажи (экипаж, свидетели, сказочные фигуры) придуманы для глав.
export interface CharDef {
  id: string; name: string; color: string; pitch: number;
  skin: string; hair: string; style: string; bangs?: boolean | 'curtain'; eyes: string;
  h: number; build: 'thin' | 'mid' | 'strong' | 'big';
  top: string; bottom: string; skirt?: 'short' | 'long'; shoes?: string; trim?: string;
  acc?: string[]; inner?: string; part?: 'center' | 'side'; brows?: 'soft' | 'strict' | 'arch'; lips?: string; shadow?: string;
  role?: string; bio?: string;
  /** Пиксельные спрайты: мужская фигура (без ресниц), рукава, своя маска причёски (pixelchars.ts). */
  male?: boolean; sleeve?: 'long' | 'short' | 'none'; hairMask?: string;
}
const TAN = '#d9a878', TAN2 = '#c08458', FAIR = '#f0cdb0', FAIR2 = '#eac4a4', OLIVE = '#d9a77e';
const C: CharDef[] = [
  { id: 'varya', name: 'Варя', color: '#5fd0c8', pitch: 520, skin: TAN, hair: '#7e3a20', style: 'bob', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#8a1830', bottom: '#1e1a22', shoes: '#1c1620', brows: 'soft', acc: ['offshoulder', 'buckle'],
    role: 'Режиссёрка', bio: 'Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе, и очень не любит, когда что-то идёт не по плану.' },
  { id: 'alla', sleeve: 'none', name: 'Алла Ева', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#7a2e16', style: 'wavy', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#a3122a', bottom: '#8a0f24', skirt: 'long', trim: '#e8c36a', shoes: '#3a0a12', acc: ['fur', 'gloves', 'necklace'], brows: 'arch', lips: '#b3122e', shadow: '#6b2a55',
    role: 'Прима', bio: 'Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много.' },
  { id: 'kukolnik', male: true, name: 'Кукольник', color: '#d8b56a', pitch: 180, skin: '#000', hair: '#000', style: 'none', eyes: '#000', h: 38, build: 'mid', top: '#111', bottom: '#111',
    role: 'Художественный руководитель', bio: 'Его никто не видел. Он оставляет письма, пометки на полях и распоряжения, всегда вовремя.' },
  { id: 'polina', acc: ['hoodie', 'collar', 'tie'], name: 'Полина', color: '#c9a7ff', pitch: 610, skin: FAIR, hair: '#b8632c', style: 'shag', eyes: '#5a7a6a', h: 32, build: 'thin', top: '#3a2620', bottom: '#2a2c3a', shoes: '#1a1416', brows: 'soft',
    role: 'Подруга', bio: 'Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают.' },
  { id: 'ruben', sleeve: 'short', male: true, name: 'Рубен', color: '#ffb057', pitch: 240, skin: TAN2, hair: '#3a2418', style: 'curlyBig', eyes: '#3b2416', h: 40, build: 'strong', top: '#d6c2a2', bottom: '#33333c', trim: '#ff9a3c', shoes: '#111', brows: 'strict', acc: ['necklace', 'pendant'],
    role: 'Друг', bio: 'Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать.' },
  { inner: '#b8c8dc', id: 'matvey', male: true, name: 'Матвей', color: '#ff8fd0', pitch: 400, skin: FAIR2, hair: '#64412a', style: 'mop', eyes: '#5b3a1e', h: 37, build: 'thin', top: '#e6dcc6', bottom: '#2c2a30', trim: '#e6dcc6', shoes: '#1a1416', acc: ['open', 'stripes', 'suspenders', 'necklace', 'bracelets'], brows: 'soft',
    role: 'Друг', bio: 'Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет.' },
  { acc: ['offshoulder', 'earrings'], id: 'erika', name: 'Эрика', color: '#9fc3e8', pitch: 430, skin: FAIR, hair: '#4a2a1a', style: 'wavy', eyes: '#5b3a1e', h: 34, build: 'mid', top: '#e8dcc8', bottom: '#2b2f3a', shoes: '#22201f', brows: 'soft',
    role: 'Подруга', bio: 'Спокойная. Сначала слушает, потом задаёт один вопрос, обычно самый неудобный.' },
  { id: 'liza', acc: ['pearls'], name: 'Лиза', color: '#ffe27a', pitch: 640, skin: FAIR, hair: '#8e5c32', style: 'halfup', bangs: true, eyes: '#6b7f9a', h: 31, build: 'thin', top: '#1a1418', bottom: '#f3ead8', skirt: 'short', shoes: '#8a5a3a', brows: 'soft',
    role: 'Подруга', bio: 'Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит, кем.' },
  { id: 'liza_long', hairMask: 'liza', name: 'Лиза', color: '#ffe27a', pitch: 640, skin: FAIR, hair: '#8e5c32', style: 'halfup', bangs: true, eyes: '#6b7f9a', h: 31, build: 'thin', top: '#c9a0dc', bottom: '#b58ad0', skirt: 'long', shoes: '#8a5a3a', brows: 'soft' },
  { id: 'angelina', sleeve: 'short', name: 'Ангелина', color: '#ff7ab8', pitch: 470, skin: OLIVE, hair: '#2e1c16', style: 'wavy', eyes: '#2a1a14', h: 37, build: 'thin', top: '#141216', bottom: '#5a1f3d', skirt: 'short', trim: '#d9d9e8', shoes: '#111', acc: ['cross', 'bracelets'], brows: 'arch', lips: '#b0405a',
    role: 'Подруга', bio: 'Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным,, и это не обсуждается.' },
  { id: 'artemiy', male: true, name: 'Арутеми', color: '#ffb48a', pitch: 270, skin: FAIR, hair: '#b0703c', style: 'curlyMid', eyes: '#2a1a14', h: 39, build: 'mid', top: '#2c3550', bottom: '#2a2a33', trim: '#f0f0f0', shoes: '#111', brows: 'soft', acc: ['freckles'],
    role: 'Одноклассник Матвея', bio: 'Чуть выше Матвея, светлые почти рыжие кудри. Шутит каждые полминуты и улыбается так, что школьный кот мурлычет.' },
  // ----- труппа театра (второй состав, на гастролях) -----
  { id: 'vasilisa', sleeve: 'none', name: 'Василиса', color: '#ffb48a', pitch: 480, skin: FAIR, hair: '#b4521e', style: 'wavy', eyes: '#5b6b4a', h: 37, build: 'thin', top: '#141216', bottom: '#2c2c34', acc: ['tank', 'cross', 'freckles', 'camera'], brows: 'soft', role: 'Актриса труппы' },
  { id: 'dana', sleeve: 'none', name: 'Дана', color: '#e8a0ff', pitch: 500, skin: TAN, hair: '#5a2e1c', style: 'wavy', eyes: '#5b3a1e', h: 33, build: 'thin', top: '#9a1a26', bottom: '#18161c', skirt: 'short', trim: '#9a1a26', acc: ['vneck', 'necklace', 'shadesup'], brows: 'arch', lips: '#a8324a', role: 'Актриса труппы' },
  { inner: '#ecebe6', id: 'nina', acc: ['open', 'stripes'], trim: '#4a2a1e', name: 'Нина', color: '#b8c0ff', pitch: 540, skin: FAIR, hair: '#3a2018', style: 'long', bangs: 'curtain', eyes: '#3b2a22', h: 33, build: 'thin', top: '#4a2a1e', bottom: '#23232c', brows: 'soft', role: 'Актриса труппы' },
  { acc: ['necklace'], id: 'anya', sleeve: 'short', name: 'Аня', color: '#ffd0a0', pitch: 580, skin: FAIR, hair: '#6a3420', style: 'longStraight', eyes: '#6a5238', h: 33, build: 'mid', top: '#18141a', bottom: '#2e3a52', skirt: 'short', brows: 'soft', role: 'Актриса труппы' },
  { id: 'olya', sleeve: 'short', name: 'Оля', color: '#a0e0d0', pitch: 520, skin: FAIR, hair: '#4a2216', style: 'shag', bangs: 'curtain', eyes: '#3b2a22', h: 31, build: 'mid', top: '#5a1a20', bottom: '#2a2a33', brows: 'strict', role: 'Актриса труппы' },
  // ----- семья и друзья (зрители, фотографии, эпилог) -----
  { id: 'natasha', name: 'Мама Наташа', color: '#ffd6c0', pitch: 420, skin: FAIR, hair: '#9a7a58', style: 'bob', eyes: '#2a1a14', h: 37, build: 'mid', top: '#7a9ab8', bottom: '#33384a', skirt: 'long', brows: 'soft' },
  { id: 'sasha', male: true, name: 'Саша', color: '#c0d6e8', pitch: 220, skin: FAIR, hair: '#9a7a58', style: 'short', eyes: '#4a5a6a', h: 39, build: 'mid', top: '#4a5a4a', bottom: '#2c2c34', brows: 'soft' },
  { id: 'maxim', male: true, name: 'Папа Максим', color: '#ffc070', pitch: 250, skin: TAN2, hair: '#1d1512', style: 'curlyMid', eyes: '#3b2416', h: 33, build: 'mid', top: '#c2452d', bottom: '#2d3440', brows: 'arch' },
  { id: 'nastya', name: 'Настя', color: '#d8c8e8', pitch: 440, skin: FAIR, hair: '#9a7a58', style: 'long', eyes: '#5b3a1e', h: 37, build: 'thin', top: '#b8a8c8', bottom: '#4a4458', skirt: 'long', brows: 'soft' },
  { id: 'matvey_bro', male: true, name: 'Матвейка', color: '#fff0b0', pitch: 760, skin: FAIR, hair: '#f0dca0', style: 'short', eyes: '#5b6b8a', h: 21, build: 'mid', top: '#a8d0f0', bottom: '#f0f0f0', brows: 'soft' },
  { id: 'vanya', male: true, name: 'Ваня', color: '#c8f0c0', pitch: 740, skin: FAIR, hair: '#9a7a58', style: 'short', eyes: '#4a5a6a', h: 21, build: 'mid', top: '#4a7a4a', bottom: '#2c3a5a', brows: 'soft' },
  { id: 'vasya', name: 'Вася', color: '#a8e0ff', pitch: 620, skin: FAIR, hair: '#6a4630', style: 'bob', eyes: '#5b3a1e', h: 30, build: 'thin', top: '#e8884a', bottom: '#3a4a6a', brows: 'soft' },
  { id: 'sofa', name: 'Софа', color: '#ffc0e0', pitch: 540, skin: FAIR, hair: '#a88a5a', style: 'longStyled', eyes: '#5a6a7a', h: 33, build: 'thin', top: '#e8b0c8', bottom: '#f0e8e8', skirt: 'short', acc: ['earrings'], brows: 'arch', lips: '#c84a6a', shadow: '#b86a9a' },
  { id: 'katya', name: 'Катя', color: '#ffb090', pitch: 560, skin: FAIR, hair: '#c8602a', style: 'bobLong', eyes: '#5a7a5a', h: 37, build: 'big', top: '#6a9a7a', bottom: '#4a4a5a', brows: 'soft' },
  // ----- жанровые персонажи -----
  { id: 'owner', male: true, name: 'Хозяин', color: '#b0b0b0', pitch: 150, skin: '#e8e4d8', hair: '#111', style: 'none', eyes: '#111', h: 40, build: 'strong', top: '#3a2a22', bottom: '#1c1614', acc: ['maskface', 'hat', 'coat'], brows: 'strict' },
  { id: 'nol', male: true, name: 'Ноль', color: '#7af0ff', pitch: 560, skin: FAIR, hair: '#40e0d0', style: 'short', eyes: '#222', h: 33, build: 'thin', top: '#22303a', bottom: '#151a22', trim: '#40e0d0', acc: ['visor'], brows: 'soft' },
  { id: 'kasseta', name: 'Кассета', color: '#ff7ad0', pitch: 330, skin: TAN2, hair: '#ff4fa0', style: 'bob', eyes: '#222', h: 36, build: 'mid', top: '#5a2a6a', bottom: '#1a1a22', trim: '#ff4fa0', acc: ['headphones'], brows: 'arch' },
  { id: 'guard', male: true, name: 'Охранник', color: '#ff5050', pitch: 140, skin: '#8a94a0', hair: '#444', style: 'none', eyes: '#f33', h: 38, build: 'strong', top: '#39424e', bottom: '#252a33', trim: '#ff3030', acc: ['visor'], brows: 'strict' },
  { id: 'usher', name: 'Зинаида Петровна', color: '#c8b0d0', pitch: 430, skin: '#ead0b8', hair: '#c8c4c8', style: 'bun', eyes: '#4a4a5a', h: 30, build: 'mid', top: '#5a2a3a', bottom: '#2a2228', skirt: 'long', acc: ['glasses', 'pearls'], brows: 'soft', role: 'Билетёрша' },
  { id: 'stagehand', name: 'Коля', color: '#a0c0a0', pitch: 210, skin: '#d8a880', hair: '#3a2a1e', style: 'short', eyes: '#3a2a1e', h: 37, build: 'strong', top: '#2a3a4a', bottom: '#1e2228', acc: ['headphones'], brows: 'strict', role: 'Машинист сцены' },
  { id: 'prompter', name: 'Суфлёр', color: '#b0b0c8', pitch: 300, skin: '#e0ccc0', hair: '#8a8a8a', style: 'short', eyes: '#2a2a3a', h: 32, build: 'thin', top: '#1e1e2a', bottom: '#1a1a22', acc: ['glasses', 'scarf'], trim: '#5a5a7a', brows: 'soft', role: 'Суфлёр' },
  { id: 'teacher', name: 'Алёна-сэнсэй', color: '#ff5d6c', pitch: 500, skin: FAIR, hair: '#a8865e', style: 'bobLong', eyes: '#5b3a1e', h: 33, build: 'thin', top: '#44375a', bottom: '#2a2238', skirt: 'long', acc: [], brows: 'arch', lips: '#c0405a', role: 'Руководительница драмкружка' },
  { id: 'barman', sleeve: 'short', male: true, name: 'Сол, бармен', color: '#cccccc', pitch: 200, skin: '#b8b8b8', hair: '#333', style: 'short', eyes: '#222', h: 38, build: 'big', top: '#e8e8e8', bottom: '#222', trim: '#111', brows: 'strict' },
  { id: 'singer', name: 'Клэр, певица', color: '#e8e8e8', pitch: 460, skin: '#d8d8d8', hair: '#1a1a1a', style: 'longStyled', eyes: '#222', h: 36, build: 'thin', top: '#bbbbbb', bottom: '#aaaaaa', skirt: 'long', acc: ['earrings'], brows: 'arch', lips: '#555' },
  { id: 'director', male: true, name: 'Грей, режиссёр', color: '#b0b0b0', pitch: 230, skin: '#c8c8c8', hair: '#888', style: 'short', eyes: '#222', h: 37, build: 'thin', top: '#555', bottom: '#333', acc: ['glasses', 'scarf'], brows: 'strict' },
  { id: 'collector', male: true, name: 'Марлоу, коллекционер', color: '#d0d0d0', pitch: 170, skin: '#cfcfcf', hair: '#ddd', style: 'short', eyes: '#222', h: 38, build: 'big', top: '#2a2a2a', bottom: '#1c1c1c', trim: '#999', brows: 'strict' },
  { id: 'lydia', name: 'Вивьен Лейн', color: '#ffffff', pitch: 480, skin: '#e0e0e0', hair: '#2a2a2a', style: 'bob', eyes: '#222', h: 34, build: 'thin', top: '#777', bottom: '#444', acc: ['hat'], brows: 'soft', lips: '#555' },
  { id: 'hart', male: true, name: 'Лейтенант Харт', color: '#c8c8c8', pitch: 150, skin: '#c4c4c4', hair: '#3a3a3a', style: 'short', eyes: '#222', h: 39, build: 'big', top: '#5a5a5a', bottom: '#2e2e2e', shoes: '#111', acc: ['hat', 'coat', 'tie'], brows: 'strict', role: 'Не продажный. Уставший' },
  { id: 'cashier', male: true, name: 'Кассир', color: '#bbbbbb', pitch: 300, skin: '#c0c0c0', hair: '#555', style: 'short', eyes: '#222', h: 35, build: 'mid', top: '#444', bottom: '#333', acc: ['hat'], brows: 'soft' },
  { id: 'fairy', name: 'Мадам Драп', color: '#c8a0ff', pitch: 420, skin: FAIR, hair: '#e8e0f0', style: 'bun', eyes: '#6a5a9a', h: 34, build: 'big', top: '#5a3a7a', bottom: '#3a2456', trim: '#d4ae48', skirt: 'long', acc: ['cape', 'glasses'], brows: 'arch' },
  { id: 'prince', male: true, name: 'Сэр Галахад', color: '#8ab8ff', pitch: 280, skin: FAIR, hair: '#6a4326', style: 'bob', eyes: '#5b3a1e', h: 39, build: 'mid', top: '#3a6ab0', bottom: '#f0f0f0', trim: '#e8c36a', acc: ['crown', 'cape'], brows: 'soft' },
  { id: 'narrator', male: true, name: 'Рассказчик', color: '#e8d8a8', pitch: 190, skin: '#000', hair: '#000', style: 'none', eyes: '#000', h: 30, build: 'mid', top: '#000', bottom: '#000' },
  { id: 'glyants', male: true, name: 'Директор Глянц', color: '#ff9ad8', pitch: 210, skin: FAIR, hair: '#e8e8f0', style: 'short', eyes: '#3a3a4a', h: 38, build: 'thin', top: '#f0f0f8', bottom: '#f0f0f8', trim: '#ff4fa0', acc: ['glasses'], brows: 'arch' },
  { id: 'trainer', sleeve: 'short', name: 'Тренер Ми', color: '#a0f0c0', pitch: 520, skin: OLIVE, hair: '#222', style: 'ponytail', eyes: '#222', h: 34, build: 'mid', top: '#30c090', bottom: '#222', brows: 'strict' },
  { id: 'stylist', name: 'Ассистентка', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#f0f0f8', bottom: '#ff4fa0', skirt: 'short', acc: ['pearls', 'visor'], brows: 'arch', lips: '#b3122e' },
  { id: 'zero', male: true, name: 'Ле Такки', color: '#f0d478', pitch: 180, skin: '#e8d8c8', hair: '#2a2420', style: 'short', eyes: '#6a7a8a', h: 36, build: 'mid', top: '#d4ae48', bottom: '#f0ece4', trim: '#ff4fa0', shoes: '#f0ece4', acc: ['tie', 'jacket'], brows: 'strict' },
  { id: 'croupier', male: true, name: 'Крупье', color: '#c8c0b0', pitch: 300, skin: FAIR, hair: '#2a1a14', style: 'short', eyes: '#3a2a1a', h: 35, build: 'mid', top: '#1a1a1e', bottom: '#1a1a1e', acc: ['bowtie'], brows: 'soft' },
  { id: 'ang_mom', name: 'Мама Ангелины', color: '#ffb8c8', pitch: 430, skin: OLIVE, hair: '#1a1214', style: 'bun', eyes: '#2a1a14', h: 35, build: 'mid', top: '#3a2a3a', bottom: '#2a2a33', acc: ['earrings'], brows: 'arch', lips: '#b0405a', role: 'Визажистка' },
  { id: 'lusine', sleeve: 'short', name: 'Лусинэ', color: '#ffd0a0', pitch: 620, skin: OLIVE, hair: '#2a1a14', style: 'ponytail', eyes: '#2a1a14', h: 29, build: 'mid', top: '#ff9ad8', bottom: '#3a4a6a', brows: 'soft', role: 'Соседка, фанатка Энджел' },
  { id: 'veronika', name: 'Вероника', color: '#40e0b0', pitch: 380, skin: FAIR, hair: '#7a2a1a', style: 'longStyled', eyes: '#2a5a4a', h: 34, build: 'thin', top: '#1f8a6a', bottom: '#176a52', skirt: 'long', acc: ['earrings'], brows: 'arch', lips: '#b3122e', role: 'Роковая женщина. Третья в списке' },
  { id: 'hostess', name: 'Леди Фортуна', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#e8c36a', bottom: '#c9a040', skirt: 'long', acc: ['pearls', 'maskhalf'], brows: 'arch', lips: '#b3122e' },
  { id: 'student', male: true, name: 'Школьник', color: '#cccccc', pitch: 400, skin: FAIR, hair: '#3a2a22', style: 'short', eyes: '#333', h: 34, build: 'mid', top: '#2c3550', bottom: '#2a2a33', trim: '#f0f0f0', brows: 'soft' },
  { id: 'student2', name: 'Школьница', color: '#cccccc', pitch: 560, skin: FAIR, hair: '#5a3a2a', style: 'twin', eyes: '#333', h: 32, build: 'thin', top: '#2c3550', bottom: '#8a2a3a', skirt: 'short', trim: '#f0f0f0', brows: 'soft' },
  { id: 'dancer', sleeve: 'short', name: 'Трейни', color: '#cccccc', pitch: 500, skin: FAIR, hair: '#ffb0d8', style: 'bob', eyes: '#333', h: 33, build: 'thin', top: '#f0f0f8', bottom: '#ff9ad8', skirt: 'short', brows: 'soft' },
  { id: 'courtier', male: true, name: 'Придворный', color: '#cccccc', pitch: 300, skin: FAIR, hair: '#e8e8e8', style: 'bun', eyes: '#333', h: 35, build: 'mid', top: '#6a2a3a', bottom: '#3a1a22', trim: '#e8c36a', brows: 'soft' },
];
export const CHARS: Record<string, CharDef> = {};
for (const c of C) CHARS[c.id] = c;
/** Вариант персонажа в другом костюме (жанровые главы, финал). */
export function variant(base: string, id: string, patch: Partial<CharDef>): CharDef {
  if (!CHARS[id]) CHARS[id] = { ...CHARS[base], ...patch, id };
  return CHARS[id];
}
variant('varya', 'varya_noir', { top: '#6a6a6a', bottom: '#2a2a2a', acc: ['hat'] });
variant('varya', 'varya_pjm', { top: '#d8c8e8', bottom: '#b8a8d0', acc: [] });
variant('erika', 'erika_noir', { top: '#9a9a8a', bottom: '#2a2a2a', acc: ['hat', 'coat'] });
variant('ruben', 'ruben_jacket', { top: '#141418', bottom: '#141418', trim: '#f4f0e8', acc: ['jacket'] });
variant('ruben', 'ruben_tux', { top: '#141418', bottom: '#141418', trim: '#f4f0e8', acc: ['bowtie', 'jacket'] });
variant('varya', 'varya_gown', { top: '#5a0c1c', bottom: '#4a0a18', skirt: 'long', acc: ['offshoulder', 'necklace'] });
variant('ruben', 'ruben_heist', { top: '#16161c', bottom: '#1c2028', trim: '#40e0d0', acc: [] });
variant('matvey', 'matvey_school', { top: '#2c3550', bottom: '#2a2a33', trim: '#f2c230', acc: ['freckles', 'scarf', 'bracelets', 'pins'] });
variant('angelina', 'angelina_idol', { top: '#f0f0f8', bottom: '#ff9ad8', trim: '#ff4fa0' });
variant('angelina', 'angelina_own', { top: '#1a1420', bottom: '#7a1f3d', trim: '#e8c36a' });
variant('alla', 'queen', { name: 'Королева', top: '#8a0f24', bottom: '#6a0a1a', trim: '#e8c36a', acc: ['pearls', 'crown', 'cape'] });
variant('varya', 'girl', { name: 'Молодая Девушка', top: '#f3ead8', bottom: '#e8dcc0', skirt: 'long', trim: '#5fd0c8', acc: [] });
variant('varya', 'varya_queen', { name: 'Варя', top: '#8a0f24', bottom: '#6a0a1a', skirt: 'long', trim: '#e8c36a', acc: [] });
variant('liza', 'liza_short', { style: 'bob', hairMask: 'bobLong' });
variant('polina', 'polina_coat', { top: '#e8c230', bottom: '#3b4a6b' });
variant('varya', 'varya_pj', { top: '#d8c8e8', bottom: '#b8a8d0', acc: [] });
