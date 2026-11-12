// Персонажи: внешность, единый источник для спрайтов и портретов. Описания героев и близких Вари заданы автором
// проекта и здесь не переосмысляются; жанровые персонажи (экипаж, свидетели, сказочные фигуры) придуманы для глав.
export interface CharDef {
  id: string; name: string; color: string; pitch: number;
  skin: string; hair: string; style: string; bangs?: boolean; eyes: string;
  h: number; build: 'thin' | 'mid' | 'strong' | 'big';
  top: string; bottom: string; skirt?: 'short' | 'long'; shoes?: string; trim?: string;
  acc?: string[]; brows?: 'soft' | 'strict' | 'arch'; lips?: string; shadow?: string;
  role?: string; bio?: string;
}
const TAN = '#d9a878', TAN2 = '#c08458', FAIR = '#f0cdb0', FAIR2 = '#eac4a4', OLIVE = '#d9a77e';
const C: CharDef[] = [
  { id: 'varya', name: 'Варя', color: '#5fd0c8', pitch: 520, skin: TAN, hair: '#5a341f', style: 'bob', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#c41e3a', bottom: '#2a2430', shoes: '#1c1620', brows: 'soft', acc: ['offshoulder'],
    role: 'Режиссёрка', bio: 'Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе, и очень не любит, когда что-то идёт не по плану.' },
  { id: 'alla', name: 'Алла Ева', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#a3122a', bottom: '#8a0f24', skirt: 'long', trim: '#e8c36a', shoes: '#3a0a12', acc: ['pearls'], brows: 'arch', lips: '#b3122e', shadow: '#6b2a55',
    role: 'Прима', bio: 'Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много.' },
  { id: 'kukolnik', name: 'Кукольник', color: '#d8b56a', pitch: 180, skin: '#000', hair: '#000', style: 'none', eyes: '#000', h: 38, build: 'mid', top: '#111', bottom: '#111',
    role: 'Художественный руководитель', bio: 'Его никто не видел. Он оставляет письма, пометки на полях и распоряжения, всегда вовремя.' },
  { id: 'polina', name: 'Полина', color: '#c9a7ff', pitch: 610, skin: FAIR, hair: '#f0d98a', style: 'fluffy', eyes: '#3f9b57', h: 32, build: 'thin', top: '#8f7fc4', bottom: '#3b4a6b', shoes: '#eeeeee', brows: 'soft',
    role: 'Подруга', bio: 'Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают.' },
  { id: 'ruben', name: 'Рубен', color: '#ffb057', pitch: 240, skin: TAN2, hair: '#1d1512', style: 'curlyMid', eyes: '#3b2416', h: 40, build: 'strong', top: '#26262e', bottom: '#2d3440', trim: '#ff9a3c', shoes: '#111', brows: 'strict', acc: ['glasses'],
    role: 'Друг', bio: 'Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать.' },
  { id: 'matvey', name: 'Матвей', color: '#ff8fd0', pitch: 400, skin: FAIR2, hair: '#6a4326', style: 'curlyShort', eyes: '#5b3a1e', h: 37, build: 'thin', top: '#f2c230', bottom: '#3a62c9', trim: '#e84a6f', shoes: '#e84a6f', acc: ['freckles', 'scarf', 'bracelets', 'pins'], brows: 'soft',
    role: 'Друг', bio: 'Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет.' },
  { id: 'erika', name: 'Эрика', color: '#9fc3e8', pitch: 430, skin: FAIR, hair: '#6b452a', style: 'ponytail', eyes: '#5b3a1e', h: 34, build: 'mid', top: '#8a7a5c', bottom: '#2b2f3a', shoes: '#22201f', brows: 'soft',
    role: 'Подруга', bio: 'Спокойная. Сначала слушает, потом задаёт один вопрос, обычно самый неудобный.' },
  { id: 'liza', name: 'Лиза', color: '#ffe27a', pitch: 640, skin: FAIR, hair: '#8c6a45', style: 'long', bangs: true, eyes: '#6b7f9a', h: 31, build: 'thin', top: '#7ec4a4', bottom: '#f3ead8', skirt: 'short', shoes: '#8a5a3a', brows: 'soft',
    role: 'Подруга', bio: 'Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит, кем.' },
  { id: 'liza_long', name: 'Лиза', color: '#ffe27a', pitch: 640, skin: FAIR, hair: '#8c6a45', style: 'rapunzel', bangs: true, eyes: '#6b7f9a', h: 31, build: 'thin', top: '#c9a0dc', bottom: '#b58ad0', skirt: 'long', shoes: '#8a5a3a', brows: 'soft' },
  { id: 'angelina', name: 'Ангелина', color: '#ff7ab8', pitch: 470, skin: OLIVE, hair: '#0f0d12', style: 'longStyled', eyes: '#2a1a14', h: 37, build: 'thin', top: '#16141c', bottom: '#5a1f3d', skirt: 'short', trim: '#d9d9e8', shoes: '#111', acc: ['earrings'], brows: 'arch', lips: '#b0405a',
    role: 'Подруга', bio: 'Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным,, и это не обсуждается.' },
  { id: 'artemiy', name: 'Артемий', color: '#9ab0c8', pitch: 260, skin: FAIR, hair: '#9a7450', style: 'short', eyes: '#2a1a14', h: 39, build: 'mid', top: '#2c3550', bottom: '#2a2a33', trim: '#f0f0f0', shoes: '#111', brows: 'strict',
    role: 'Одноклассник Матвея', bio: 'Выглядит так, будто сейчас сделает замечание. На деле подкармливает школьного кота.' },
  // ----- труппа театра (второй состав, на гастролях) -----
  { id: 'vasilisa', name: 'Василиса', color: '#ffb48a', pitch: 480, skin: FAIR, hair: '#c98a52', style: 'long', eyes: '#5b6b4a', h: 37, build: 'thin', top: '#3d5a4a', bottom: '#2c2c34', acc: ['camera'], brows: 'soft', role: 'Актриса труппы' },
  { id: 'dana', name: 'Дана', color: '#e8a0ff', pitch: 500, skin: TAN, hair: '#2a1a14', style: 'long', eyes: '#5b3a1e', h: 33, build: 'thin', top: '#c23a6a', bottom: '#18161c', skirt: 'short', trim: '#f2c230', acc: ['earrings'], brows: 'arch', lips: '#a8324a', role: 'Актриса труппы' },
  { id: 'nina', name: 'Нина', color: '#b8c0ff', pitch: 540, skin: FAIR, hair: '#121016', style: 'long', bangs: true, eyes: '#3b2a22', h: 33, build: 'thin', top: '#4a4a6a', bottom: '#23232c', brows: 'soft', role: 'Актриса труппы' },
  { id: 'anya', name: 'Аня', color: '#ffd0a0', pitch: 580, skin: FAIR, hair: '#7a6248', style: 'twin', eyes: '#6a5238', h: 33, build: 'mid', top: '#d88a4a', bottom: '#4a5a7a', skirt: 'short', brows: 'soft', role: 'Актриса труппы' },
  { id: 'olya', name: 'Оля', color: '#a0e0d0', pitch: 520, skin: FAIR, hair: '#2a1e1a', style: 'twin', bangs: true, eyes: '#3b2a22', h: 31, build: 'mid', top: '#2f4a5a', bottom: '#2a2a33', brows: 'strict', role: 'Актриса труппы' },
  // ----- семья и друзья (зрители, фотографии, эпилог) -----
  { id: 'natasha', name: 'Мама Наташа', color: '#ffd6c0', pitch: 420, skin: FAIR, hair: '#9a7a58', style: 'bob', eyes: '#2a1a14', h: 37, build: 'mid', top: '#7a9ab8', bottom: '#33384a', skirt: 'long', brows: 'soft' },
  { id: 'sasha', name: 'Саша', color: '#c0d6e8', pitch: 220, skin: FAIR, hair: '#9a7a58', style: 'short', eyes: '#4a5a6a', h: 39, build: 'mid', top: '#4a5a4a', bottom: '#2c2c34', brows: 'soft' },
  { id: 'maxim', name: 'Папа Максим', color: '#ffc070', pitch: 250, skin: TAN2, hair: '#1d1512', style: 'curlyMid', eyes: '#3b2416', h: 33, build: 'mid', top: '#c2452d', bottom: '#2d3440', brows: 'arch' },
  { id: 'nastya', name: 'Настя', color: '#d8c8e8', pitch: 440, skin: FAIR, hair: '#9a7a58', style: 'long', eyes: '#5b3a1e', h: 37, build: 'thin', top: '#b8a8c8', bottom: '#4a4458', skirt: 'long', brows: 'soft' },
  { id: 'vasya', name: 'Вася', color: '#a8e0ff', pitch: 620, skin: FAIR, hair: '#6a4630', style: 'bob', eyes: '#5b3a1e', h: 30, build: 'thin', top: '#e8884a', bottom: '#3a4a6a', brows: 'soft' },
  { id: 'sofa', name: 'Софа', color: '#ffc0e0', pitch: 540, skin: FAIR, hair: '#a88a5a', style: 'longStyled', eyes: '#5a6a7a', h: 33, build: 'thin', top: '#e8b0c8', bottom: '#f0e8e8', skirt: 'short', acc: ['earrings'], brows: 'arch', lips: '#c84a6a', shadow: '#b86a9a' },
  { id: 'katya', name: 'Катя', color: '#ffb090', pitch: 560, skin: FAIR, hair: '#c8602a', style: 'bobLong', eyes: '#5a7a5a', h: 37, build: 'big', top: '#6a9a7a', bottom: '#4a4a5a', brows: 'soft' },
  // ----- жанровые персонажи -----
  { id: 'owner', name: 'Хозяин', color: '#b0b0b0', pitch: 150, skin: '#e8e4d8', hair: '#111', style: 'none', eyes: '#111', h: 40, build: 'strong', top: '#3a2a22', bottom: '#1c1614', acc: ['maskface', 'hat', 'coat'], brows: 'strict' },
  { id: 'nol', name: 'Ноль', color: '#7af0ff', pitch: 560, skin: FAIR, hair: '#40e0d0', style: 'short', eyes: '#222', h: 33, build: 'thin', top: '#22303a', bottom: '#151a22', trim: '#40e0d0', acc: ['visor'], brows: 'soft' },
  { id: 'kasseta', name: 'Кассета', color: '#ff7ad0', pitch: 330, skin: TAN2, hair: '#ff4fa0', style: 'bob', eyes: '#222', h: 36, build: 'mid', top: '#5a2a6a', bottom: '#1a1a22', trim: '#ff4fa0', acc: ['headphones'], brows: 'arch' },
  { id: 'guard', name: 'Охранник', color: '#ff5050', pitch: 140, skin: '#8a94a0', hair: '#444', style: 'none', eyes: '#f33', h: 38, build: 'strong', top: '#39424e', bottom: '#252a33', trim: '#ff3030', acc: ['visor'], brows: 'strict' },
  { id: 'teacher', name: 'Руководительница драмкружка', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#44375a', bottom: '#2a2238', skirt: 'long', acc: ['glasses'], brows: 'arch', lips: '#b3122e' },
  { id: 'barman', name: 'Сол, бармен', color: '#cccccc', pitch: 200, skin: '#b8b8b8', hair: '#333', style: 'short', eyes: '#222', h: 38, build: 'big', top: '#e8e8e8', bottom: '#222', trim: '#111', brows: 'strict' },
  { id: 'singer', name: 'Мэй, певица', color: '#e8e8e8', pitch: 460, skin: '#d8d8d8', hair: '#1a1a1a', style: 'longStyled', eyes: '#222', h: 36, build: 'thin', top: '#bbbbbb', bottom: '#aaaaaa', skirt: 'long', acc: ['earrings'], brows: 'arch', lips: '#555' },
  { id: 'director', name: 'Грей, режиссёр', color: '#b0b0b0', pitch: 230, skin: '#c8c8c8', hair: '#888', style: 'short', eyes: '#222', h: 37, build: 'thin', top: '#555', bottom: '#333', acc: ['glasses', 'scarf'], brows: 'strict' },
  { id: 'collector', name: 'Аркадий Вейс', color: '#d0d0d0', pitch: 170, skin: '#cfcfcf', hair: '#ddd', style: 'short', eyes: '#222', h: 38, build: 'big', top: '#2a2a2a', bottom: '#1c1c1c', trim: '#999', brows: 'strict' },
  { id: 'lydia', name: 'Лидия Вронская', color: '#ffffff', pitch: 480, skin: '#e0e0e0', hair: '#2a2a2a', style: 'bob', eyes: '#222', h: 34, build: 'thin', top: '#777', bottom: '#444', acc: ['hat'], brows: 'soft', lips: '#555' },
  { id: 'cashier', name: 'Кассир', color: '#bbbbbb', pitch: 300, skin: '#c0c0c0', hair: '#555', style: 'short', eyes: '#222', h: 35, build: 'mid', top: '#444', bottom: '#333', acc: ['hat'], brows: 'soft' },
  { id: 'fairy', name: 'Фея-крёстная', color: '#c8a0ff', pitch: 600, skin: FAIR, hair: '#e8e0f0', style: 'bun', eyes: '#6a5a9a', h: 33, build: 'big', top: '#b89ae0', bottom: '#9a7ac8', skirt: 'long', acc: ['wings', 'glasses'], brows: 'arch' },
  { id: 'prince', name: 'Принц', color: '#8ab8ff', pitch: 280, skin: FAIR, hair: '#e0b860', style: 'bob', eyes: '#3a6ab0', h: 39, build: 'mid', top: '#3a6ab0', bottom: '#f0f0f0', trim: '#e8c36a', acc: ['crown', 'cape'], brows: 'soft' },
  { id: 'narrator', name: 'Рассказчик', color: '#e8d8a8', pitch: 190, skin: '#000', hair: '#000', style: 'none', eyes: '#000', h: 30, build: 'mid', top: '#000', bottom: '#000' },
  { id: 'glyants', name: 'Директор Глянц', color: '#ff9ad8', pitch: 210, skin: FAIR, hair: '#e8e8f0', style: 'short', eyes: '#3a3a4a', h: 38, build: 'thin', top: '#f0f0f8', bottom: '#f0f0f8', trim: '#ff4fa0', acc: ['glasses'], brows: 'arch' },
  { id: 'trainer', name: 'Тренер Ми', color: '#a0f0c0', pitch: 520, skin: OLIVE, hair: '#222', style: 'ponytail', eyes: '#222', h: 34, build: 'mid', top: '#30c090', bottom: '#222', brows: 'strict' },
  { id: 'stylist', name: 'Ассистентка', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#f0f0f8', bottom: '#ff4fa0', skirt: 'short', acc: ['pearls', 'visor'], brows: 'arch', lips: '#b3122e' },
  { id: 'hostess', name: 'Леди Фортуна', color: '#ff5d6c', pitch: 500, skin: TAN, hair: '#2a1512', style: 'curls', eyes: '#5b3a1e', h: 31, build: 'thin', top: '#e8c36a', bottom: '#c9a040', skirt: 'long', acc: ['pearls', 'maskhalf'], brows: 'arch', lips: '#b3122e' },
  { id: 'student', name: 'Школьник', color: '#cccccc', pitch: 400, skin: FAIR, hair: '#3a2a22', style: 'short', eyes: '#333', h: 34, build: 'mid', top: '#2c3550', bottom: '#2a2a33', trim: '#f0f0f0', brows: 'soft' },
  { id: 'student2', name: 'Школьница', color: '#cccccc', pitch: 560, skin: FAIR, hair: '#5a3a2a', style: 'twin', eyes: '#333', h: 32, build: 'thin', top: '#2c3550', bottom: '#8a2a3a', skirt: 'short', trim: '#f0f0f0', brows: 'soft' },
  { id: 'dancer', name: 'Трейни', color: '#cccccc', pitch: 500, skin: FAIR, hair: '#ffb0d8', style: 'bob', eyes: '#333', h: 33, build: 'thin', top: '#f0f0f8', bottom: '#ff9ad8', skirt: 'short', brows: 'soft' },
  { id: 'courtier', name: 'Придворный', color: '#cccccc', pitch: 300, skin: FAIR, hair: '#e8e8e8', style: 'bun', eyes: '#333', h: 35, build: 'mid', top: '#6a2a3a', bottom: '#3a1a22', trim: '#e8c36a', brows: 'soft' },
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
variant('ruben', 'ruben_heist', { top: '#16161c', bottom: '#1c2028', trim: '#40e0d0', acc: ['glasses'] });
variant('matvey', 'matvey_school', { top: '#2c3550', bottom: '#2a2a33', trim: '#f2c230', acc: ['freckles', 'scarf', 'bracelets', 'pins'] });
variant('angelina', 'angelina_idol', { top: '#f0f0f8', bottom: '#ff9ad8', trim: '#ff4fa0' });
variant('angelina', 'angelina_own', { top: '#1a1420', bottom: '#7a1f3d', trim: '#e8c36a' });
variant('alla', 'queen', { name: 'Королева', top: '#8a0f24', bottom: '#6a0a1a', trim: '#e8c36a', acc: ['pearls', 'crown', 'cape'] });
variant('varya', 'girl', { name: 'Молодая Девушка', top: '#f3ead8', bottom: '#e8dcc0', skirt: 'long', trim: '#5fd0c8', acc: [] });
variant('varya', 'varya_queen', { name: 'Варя', top: '#8a0f24', bottom: '#6a0a1a', skirt: 'long', trim: '#e8c36a', acc: [] });
variant('liza', 'liza_short', { style: 'bob' });
variant('polina', 'polina_coat', { top: '#e8c230', bottom: '#3b4a6b' });
variant('varya', 'varya_pj', { top: '#d8c8e8', bottom: '#b8a8d0', acc: [] });
