// Оригинальные музыкальные темы игры в виде нотных данных для секвенсора (см. audio.ts).
// Запись: «нота:длительность» в шагах (1 шаг = 1/16), «.» — пауза, «a+c+e» — аккорд, «|» — декоративная тактовая черта.
// Сквозной лейтмотив «аплодисментов» (E–A–C–B–G#) проходит через театр, танго дивы, обвал и финал.
export interface Part { inst: string; seq: string; d?: number; vol?: number; tag?: string; }
export interface Track { bpm: number; swing?: number; vol?: number; once?: boolean; parts: Part[]; }

const MOTIF = 'e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12';
const MOTIF_MAJ = 'e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12';
const WALTZ_BASS = 'a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .';
const WALTZ_CH = '. a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .';
const WALTZ_BASS_MAJ = 'a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .';
const WALTZ_CH_MAJ = '. a3+c#4+e4 a3+c#4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c#4+e4 . | . a3+d4+f#4 a3+d4+f#4 | . a3+d4+f#4 . | . g#3+b3+e4 g#3+b3+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c#4+e4 .';

// ---- помощники записи (оркестровые партии длиной 16–32 такта) ----
/** Повтор фрагмента n раз. */
const rep = (s: string, n: number) => Array(n).fill(s).join(' | ');
/** Дробь (литавры, тремоло): n шагов по 1/16 с крещендо громкости v0→v1. */
const roll = (n: string, steps: number, v0: number, v1: number) => Array.from({ length: steps }, (_, i) => `${n}:1:${(v0 + (v1 - v0) * i / Math.max(1, steps - 1)).toFixed(2)}`).join(' ');
/** Фигурация по аккорду: шаблон индексов («0 1 2 1», «.» — пауза) раскладывает ноты аккорда «c3 e3 g3». */
const fig = (pat: string, ch: string) => { const n = ch.split(' '); return pat.split(' ').map((k) => k === '.' ? '.' : n[+k]).join(' '); };
/** Фигурация по списку аккордов, по одному такту на аккорд. */
const figs = (pat: string, chords: string[]) => chords.map((c) => fig(pat, c)).join(' | ');
/** Аккорды с одинаковой длительностью и общей динамикой (громкость по тактам). */
const held = (len: number, chords: string[], vel?: number[]) => chords.map((c, i) => `${c}:${len}${vel ? ':' + vel[i % vel.length] : ''}`).join(' | ');
/** Хабанера/танго в басу: «r:3 f r':2 f:2» на каждую половину такта. */
const hab = (...h: [string, string, string][]) => h.map(([r, f, u]) => `${r}:3 ${f}:1 ${u}:2 ${f}:2`).join(' ');
const DIVA_BASS = 'a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4';
const DIVA_CH = 'a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 .';

export const TRACKS: Record<string, Track> = {
  // Театр: вальс с лейтмотивом; вторая половина — отвечающая фраза (F–Am–Dm–E), виолончель ведёт подголосок.
  theater: { bpm: 92, parts: [
    { inst: 'box', d: 4, seq: MOTIF + ' | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12' },
    { inst: 'upright', d: 4, seq: WALTZ_BASS + ' | f2 . . | a2 . . | d2 . . | e2 . . | a2 . . | f2 . . | e2 . . | a2 . .', vol: 0.8 },
    { inst: 'piano', d: 4, vol: 0.45, seq: WALTZ_CH + ' | . a3+c4+f4 a3+c4+f4 | . a3+c4+e4 a3+c4+e4 | . a3+d4+f4 . | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+c4+f4 a3+c4+f4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .' },
    { inst: 'cello', vol: 0.5, seq: 'e3:12 | d3:12 | c3:12 | d3:12 | f3:12 | g3:6 e3:6 | g#3:12 | a3:12 | c4:4 b3:4 a3:4 | e3:12 | d4:4 c4:4 a3:4 | b3:6 g#3:6 | a3:12 | f3:4 a3:4 c4:4 | d4:12 | c4:12' },
    { inst: 'drone', seq: 'a1:96 .:96', vol: 0.45 },
  ] },
  // Закулисье: пыльная тишина ре-минора. Органный пункт, «дышащие» струнные, пиццикато на цыпочках, челеста-шкатулка.
  backstage: { bpm: 60, parts: [
    { inst: 'drone', seq: 'd2:256', vol: 0.55 },
    { inst: 'swell', vol: 0.42, seq: 'd3+f3+a3+e4:32 bb2+d3+f3+a3:32 g2+bb2+d3+f3:32 a2+d3+e3+g3:16 a2+c#3+e3+g3:16 | d3+f3+a3:16 c3+f3+a3:16 bb2+d3+f3+a3:16 e3+g3+bb3+d4:16 bb2+d3+g3:16 g2+bb2+d3:16 a2+d3+e3:16 a2+c#3+e3:16' },
    { inst: 'pizz', d: 4, vol: 0.32, seq: 'd3 . a2 . | d3 . f3 e3 | bb2 . f3 . | bb2 . d3 c3 | g2 . d3 . | g2 . bb2 a2 | a2 . e3 . | a2 . c#3 e3 | d3 . a2 . | c3 . a2 . | bb2 . f3 . | e3 . bb2 . | bb2 . g2 . | g2 . d3 . | a2 . e3 . | a2 . c#3 .' },
    { inst: 'box', vol: 0.6, seq: 'a5:6 .:10 f5:4 .:12 d5:8 .:24 | bb5:6 .:10 g5:4 .:12 e5:2 f5:2 e5:4 .:24 | .:16 d6:4 c6:4 a5:8 .:16 f5:4 e5:4 d5:8 | .:8 g5:4 bb5:4 d6:16 e6:8 d6:8 c#6:16' },
  ] },
  // Хоррор: органный пункт на «до», виолончели спускаются ламенто-басом (C–B–B♭–A–A♭–G), тремоло скрипок малыми секундами,
  // одинокие «капли» рояля на тритонах; в середине — призрак лейтмотива; в конце литавры нагнетают к G7 над пунктом.
  horror: { bpm: 56, parts: [
    { inst: 'drone', seq: 'c2:192 db2:32 c2:32', vol: 0.8 },
    { inst: 'cello', vol: 0.65, seq: 'c3:32 b2:32 bb2:32 a2:32 ab2:48 g2:80' },
    { inst: 'trem', vol: 0.42, seq: '.:64 g4+ab4:64:0.7 f#4+g4+c5:64:0.9 ab4+d5:32 g4+b4+f5:32:1.2' },
    { inst: 'piano', vol: 0.45, seq: 'eb6:2 .:30 d6:2 .:14 f#5:2 .:14 | .:16 c6:2 .:14 b5:2 .:30 | eb6:2 .:14 d6:2 .:14 a5:2 .:30 | f#6:2 .:6 f6:2 .:6 e6:2 .:14 eb6:2 .:30' },
    { inst: 'pizz', vol: 0.5, seq: '.:64 | c3:4 .:8 g2:4 .:16 ab2:4 .:12 c3:2 .:14 | c3:4 .:8 g2:4 .:12 ab2:2 g2:2 .:4 f#2:4 .:8 c3:2 .:14 | c3:4 .:8 g2:4 .:12 ab2:2 g2:2 .:4 f#2:4 .:8 c3:2 .:14' },
    { inst: 'box', vol: 0.35, seq: '.:128 e5:4 a5:4 c6:4 b5:12 .:104' },
    { inst: 'timp', vol: 0.8, seq: '.:192 c2:4:0.5 .:12 c2:4:0.6 .:12 ' + roll('c2', 8, 0.3, 0.6) + ' .:8 ' + roll('g1', 16, 0.3, 1) },
  ] },
  // Шпионская тема казино (ми минор, 16 тактов): хроматическое остинато баса, пиццикато-«шаги», струнные аккорды с нарастанием,
  // медь ведёт тему с лидийской краской (фа-диез над до); литавры отмечают вторую часть и разворот на доминанту.
  heist: { bpm: 108, parts: [
    { inst: 'drums', seq: [0, 1, 2, 3].map((g) => (g === 2 ? 'x' : 'k') + '...h.s.k.h.s.h.k...h.s.k.h.s.h.k...h.s.k.h.s.h.' + (g === 3 ? 'k.k.s.s.kks.ssss' : 'k...h.s.k.hks.hh')).join('|'), vol: 0.5 },
    { inst: 'bass', d: 2, vol: 0.9, seq: ['e', 'e', 'c', 'b', 'e', 'e', 'a', 'b', 'c', 'c', 'a', 'a', 'f#', 'b', 'e', 'b'].map((r) => ({ e: 'e2 e2 f2 f2 f#2 f#2 f2 f2', c: 'c2 c2 c#2 c#2 d2 d2 c#2 c#2', b: 'b1 b1 c2 c2 c#2 c#2 c2 b1', a: 'a1 a1 bb1 bb1 b1 b1 bb1 bb1', 'f#': 'f#1 f#1 g1 g1 g#1 g#1 g1 g1' } as Record<string, string>)[r]).join(' | ') },
    { inst: 'pizz', d: 2, vol: 0.4, seq: ['b4 c5', 'b4 c5', 'e4 f4', 'a4 bb4', 'b4 c5', 'b4 c5', 'e4 f4', 'a4 bb4', 'e4 f4', 'e4 f4', 'e4 f4', 'e4 f4', 'a4 bb4', 'a4 bb4', 'b4 c5', 'a4 bb4'].map((c) => fig('. . 0 . . 0 1 0', c)).join(' | ') },
    { inst: 'strings', vol: 0.5, seq: held(16, ['e3+g3+b3', 'e3+g3+b3', 'e3+g3+c4', 'd#3+f#3+a3', 'e3+g3+b3', 'e3+g3+b3', 'e3+a3+c4', 'd#3+f#3+a3', 'e3+g3+c4', 'e3+g3+c4', 'e3+a3+c4', 'e3+a3+c4', 'e3+a3+c4', 'd#3+f#3+a3', 'e3+g3+b3', 'd#3+f#3+a3+b3'], [0.55, 0.55, 0.6, 0.6, 0.75, 0.75, 0.8, 0.85, 1, 1, 1, 1.05, 1.1, 1.15, 1.1, 1.2]) },
    { inst: 'brass', vol: 0.7, seq: '.:64 | e5:6 g5:2 f#5:8 | b4:6 e5:2 d#5:8 | c5:4 e5:4 a5:6 g5:2 | f#5:12 .:4 | g5:6 e5:2 c5:8 | e5:4 g5:2 f#5:2 e5:4 c5:4 | a5:6 c6:2 b5:8 | e5:4 a5:4 c6:4 e6:4 | c6:6 a5:2 f#5:8 | d#5:4 f#5:4 a5:4 b5:4 | g5:6 f#5:2 e5:8 | d#5:8 b4:8' },
    { inst: 'timp', vol: 0.7, seq: '.:128 c2:8:0.8 .:56 f#2:8:0.8 .:40 ' + roll('b1', 8, 0.4, 1) + ' b1:8:1' },
  ] },
  // Погоня — галоп 6/8 (12 шагов в такте) в си миноре, в духе «Полёта валькирий»: медь трубит фанфарный мотив
  // ритмом «длинная–короткая–средняя», струнные держат тремоло и вихрем гоняют арпеджио, басы скачут, тайко и литавры.
  chase: { bpm: 140, parts: [
    { inst: 'drums', vol: 0.7, seq: ('k.hh.hs.hh.h'.repeat(7) + 'k.hs.sTsTTTT').repeat(2) },
    { inst: 'drums', vol: 0.55, seq: ('T.....T.....' + 'T.....T..T..').repeat(8) },
    { inst: 'trem', vol: 0.4, seq: held(12, ['b3+d4+f#4', 'b3+d4+f#4', 'a3+d4+f#4', 'a3+d4+f#4', 'a#3+c#4+e4', 'a#3+c#4+e4', 'b3+d4+f#4', 'b3+d4+f#4', 'b3+d4+g4', 'b3+d4+g4', 'a3+d4+f#4', 'a3+d4+f#4', 'b3+e4+g4', 'a#3+c#4+e4', 'b3+d4+f#4', 'a#3+c#4+e4+f#4'], [0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 0.8, 0.85, 0.9, 1, 1.05, 1.1, 1.15, 1.2]) },
    { inst: 'spic', d: 1, vol: 0.55, seq: figs('0 1 2 3 2 1 0 1 2 3 2 1', ['b4 d5 f#5 b5', 'b4 d5 f#5 b5', 'a4 d5 f#5 a5', 'a4 d5 f#5 a5', 'a#4 c#5 e5 f#5', 'a#4 c#5 e5 f#5', 'b4 d5 f#5 b5', 'b4 d5 f#5 b5', 'b4 d5 g5 b5', 'b4 d5 g5 b5', 'a4 d5 f#5 a5', 'a4 d5 f#5 a5', 'b4 e5 g5 b5', 'a#4 c#5 e5 f#5', 'b4 d5 f#5 b5', 'a#4 c#5 e5 f#5']) },
    { inst: 'bass', seq: ['b1', 'b1', 'd2', 'd2', 'f#1', 'f#1', 'b1', 'b1', 'g1', 'g1', 'd2', 'd2', 'e2', 'f#1', 'b1', 'f#1'].map((r) => { const u = r.replace(/\d/, (o) => String(+o + 1)); return `${r}:3 ${r}:1 ${r}:2 ${u}:3 ${r}:1 ${r}:2`; }).join(' | ') },
    { inst: 'brass', vol: 0.8, seq: 'b4:3 c#5:1 d5:2 f#5:6 | e5:3 d5:1 c#5:2 b4:6 | a4:3 d5:1 f#5:2 a5:6 | g5:3 f#5:1 e5:2 d5:6 | c#5:3 e5:1 f#5:2 a#5:6 | c#6:3 b5:1 a#5:2 f#5:6 | d6:3 c#6:1 b5:2 f#5:6 | b5:12 | b4:3 d5:1 g5:2 b5:6 | a5:3 g5:1 f#5:2 d5:6 | f#5:3 a5:1 d6:2 f#6:6 | e6:3 d6:1 c#6:2 a5:6 | g5:3 b5:1 e6:2 g5:6 | a#5:3 c#6:1 e6:2 c#6:6 | d6:3 c#6:1 b5:2 f#5:6 | f#5:3 a#5:1 c#6:2 e6:6' },
    { inst: 'timp', vol: 0.7, seq: 'b1:12:0.8 .:72 ' + roll('f#1', 12, 0.3, 1) + ' g1:12:0.8 .:60 ' + roll('f#1', 24, 0.2, 1.1) },
  ] },
  school: { bpm: 104, parts: [
    { inst: 'piano', d: 4, vol: 0.7, seq: 'c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 .' },
    { inst: 'upright', d: 8, vol: 0.7, seq: 'c3 c3 a2 a2 f2 f2 g2 g2' },
    { inst: 'pluck', d: 2, vol: 0.7, seq: 'e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8' },
    { inst: 'drums', seq: 'k...h...r...h.h.', vol: 0.4 },
  ] },
  // Школа (лирика): «альбертиевы» басы рояля, музыкальная шкатулка, тенор виолончели; вторая половина — отвечающая фраза.
  school_soft: { bpm: 76, parts: [
    { inst: 'piano', d: 2, vol: 0.5, seq: figs('0 1 2 1 3 1 2 1', ['c3 g3 c4 e4', 'a2 e3 a3 c4', 'f2 c3 f3 a3', 'd3 a3 c4 f4', 'g2 d3 g3 b3', 'a2 e3 a3 c4', 'f2 c3 e3 a3', 'g2 d3 g3 b3', 'e2 g3 c4 e4', 'f2 c3 f3 a3', 'a2 e3 a3 c4', 'e2 b2 e3 g3', 'f2 c3 f3 a3', 'e2 g3 c4 e4', 'd3 a3 c4 f4', 'g2 d3 g3 b3']) },
    { inst: 'box', d: 4, vol: 0.7, seq: '.:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16 | e5 g5 c6 e6 | d6:8 c6 a5 | b5:8 a5 e5 | g5:16 | a5 g5 f5 a5 | g5:8 e5 c5 | f5:6 e5:2 d5:4 c5:4 | d5:16' },
    { inst: 'cello', vol: 0.42, seq: 'g3:8 e3:8 | c3:8 e3:8 | a3:8 f3:8 | a3:8 f3:8 | g3:8 b3:8 | c4:8 e3:8 | a3:8 c4:8 | b3:8 d4:8 | c4:8 g3:8 | a3:8 c4:8 | c4:8 a3:8 | b3:8 g3:8 | a3:8 c4:8 | g3:8 e3:8 | f3:8 a3:8 | b3:8 d4:8' },
    { inst: 'pad', vol: 0.4, seq: held(16, ['c3+g3', 'a2+e3', 'f2+c3', 'd3+a3', 'g2+d3', 'a2+e3', 'f2+c3', 'g2+d3', 'e3+c4', 'f2+c3', 'a2+e3', 'e3+b3', 'f2+c3', 'e3+c4', 'd3+a3', 'g2+d3']) },
  ] },
  // Нуар (16 тактов): A — минорный блюз под дождь; B — «разговор» по квинтовому кругу (Gm7–C7–F–B♭–Eø–A7♭9–Dm),
  // шагающий контрабас, щётки, джазовые аккорды, приглушённый сакс с блюзовыми нотами.
  noir: { bpm: 62, swing: 0.25, parts: [
    { inst: 'upright', d: 4, vol: 0.9, seq: 'd2 a1 d2 c2 | bb1 f2 bb1 a1 | g1 d2 g2 bb1 | a1 e2 a1 c#2 | d2 f2 a2 f2 | g1 bb1 d2 g2 | e2 bb1 a1 e2 | d2 a1 d2 . | g1 bb1 d2 f2 | c2 e2 g2 bb1 | f1 a1 c2 e2 | bb1 d2 f2 a1 | e2 g2 bb1 d2 | a1 c#2 e2 g2 | d2 f2 a2 c2 | a1 bb1 b1 c#2' },
    { inst: 'drums', seq: 'h.......s.......h.....h.s.....hh'.repeat(8), vol: 0.32 },
    { inst: 'piano', d: 16, vol: 0.42, seq: 'd3+f3+a3+c4+e4 | bb2+d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | a2+c#3+g3+bb3 | d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | e3+g3+bb3+d4 | a2+c#3+g3+f4 | g2+bb2+d3+f3 | bb2+c3+e3+g3 | f2+a2+c3+e3 | bb2+d3+f3+a3 | e2+g2+bb2+d3 | a2+c#3+g3+bb3 | d3+f3+a3+c4 | a2+c#3+f3+g3' },
    { inst: 'sax', vol: 0.75, seq: '.:8 a4:6 f4:2 | e4:10 d4:2 f4:4 | g4:6 ab4:2 g4:4 f4:2 d4:2 | c#4:12 .:4 | .:4 d5:4 f5:6 e5:2 | d5:8 c5:4 bb4:4 | a4:6 ab4:2 g4:6 e4:2 | d4:16 | .:4 d5:4 f5:4 bb5:4 | a5:8 g5:4 e5:4 | f5:6 e5:2 c5:8 | d5:12 .:4 | .:4 bb4:4 d5:4 g5:4 | f5:6 e5:2 c#5:8 | d5:6 c5:2 a4:8 | .:16' },
    { inst: 'pad', vol: 0.22, seq: 'd3+a3:64 g2+d3:32 a2+e3:32 | g2+d3:32 f2+c3:32 e2+bb2:16 a2+e3:16 d3+a3:16 a2+e3:16' },
  ] },
  // Сказка (фа мажор, вальс 16 тактов): шкатулка, арфа-переборы, струнный подголосок; вторая половина уходит в ре минор и обратно.
  fairy: { bpm: 92, parts: [
    { inst: 'box', d: 4, seq: 'c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12 | a5 d6 f6 | e6:8 c#6 | d6 bb5 f5 | a5:8 c6 | bb5 g5 d5 | e5:8 g5 | f5:4 d5:2 e5:6 | f5:12' },
    { inst: 'upright', d: 12, vol: 0.7, seq: 'f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2 | d2 a1 bb1 f2 g1 c2 bb1:6 c2:6 f2' },
    { inst: 'harp', d: 2, vol: 0.55, seq: 'f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6 | d3 f3 a3 d4 a3 f3 | a2 c#3 e3 g3 e3 c#3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | g2 bb2 d3 g3 d3 bb2 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 bb3 | f3 a3 c4 f4:6' },
    { inst: 'strings', vol: 0.45, seq: 'a4:12 | g4:12 | a4:12 | bb4:12 | a4:12 | g4:12 | f4:6 g4:6 | a4:12 | f4:12 | e4:12 | f4:12 | f4:12 | d4:12 | e4:12 | d4:6 e4:6 | f4+a4:12' },
  ] },
  idol_agency: { bpm: 128, parts: [
    { inst: 'drums', seq: 'k.h.k.h.k.h.k.h.', tag: 'drums' },
    { inst: 'drums', seq: '....c.......c...', tag: 'drums', vol: 0.8 },
    { inst: 'bass', d: 2, tag: 'bass', seq: 'c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1' },
    { inst: 'pad', tag: 'keys', seq: 'c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16' },
    { inst: 'lead', d: 2, tag: 'lead', seq: 'e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8' },
  ] },
  idol_own: { bpm: 122, parts: [
    { inst: 'drums', seq: 'k..hs.hk.khhs.h.', tag: 'drums' },
    { inst: 'bass', d: 2, tag: 'bass', seq: 'a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 .' },
    { inst: 'pad', tag: 'keys', seq: 'a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16' },
    { inst: 'pluck', d: 1, tag: 'arp', vol: 0.5, seq: 'a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5' },
    { inst: 'sax', d: 2, tag: 'lead', vol: 0.9, seq: 'a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8' },
    // струнный подголосок под сакс (включается вместе с «клавишами» на пульте)
    { inst: 'strings', tag: 'keys', vol: 0.4, seq: 'e4:16 | f4:16 | f4:16 | e4:8 g#4:8 | c5:16 | c5:16 | a4:16 | b4:16' },
  ] },
  // Танго дивы (ля минор, 16 тактов, форма A–A'–B–A''): хабанера в басу, рояль-«удары», скрипки ведут тему,
  // во втором проведении вступает виолончельный контрапункт, B уходит в субдоминанту и фа мажор.
  diva: { bpm: 112, parts: [
    { inst: 'upright', d: 1, seq: rep(DIVA_BASS, 2) + ' | ' + hab(['d2', 'a2', 'd3'], ['d2', 'a2', 'f3']) + ' | ' + hab(['a2', 'e3', 'a3'], ['a2', 'e3', 'a3']) + ' | ' + hab(['f2', 'c3', 'f3'], ['f2', 'c3', 'a3']) + ' | ' + hab(['e2', 'b2', 'e3'], ['e2', 'b2', 'd3']) + ' | ' + DIVA_BASS },
    { inst: 'piano', d: 4, vol: 0.6, seq: rep(DIVA_CH, 2) + ' | a3+d4+f4 . . a3+d4+f4 | a3+c4+e4 . . a3+c4+e4 | a3+c4+f4 . . a3+c4+f4 | g#3+b3+d4 . . g#3+b3+d4 | ' + DIVA_CH },
    { inst: 'strings', seq: 'e5:4 a5:4 c6:6 b5:2 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5:2 | a5:12 .:4 | e5:4 a5:4 c6:6 d6:2 | e6:8 d6:4 b5:4 | c6:4 a5:4 g#5:4 b5:4 | a5:12 .:4 | f5:6 e5:2 d5:4 a5:4 | e5:6 c5:2 a4:8 | c6:4 a5:4 f5:4 a5:4 | g#5:6 b5:2 d6:8 | e6:4 c6:4 a5:6 b5:2 | b5:8 g#5:4 e5:4 | f5:4 d6:4 g#5:6 b5:2 | a5:8 e5:4 a4:4' },
    { inst: 'cello', vol: 0.55, seq: '.:64 | c4:8 e4:8 | d4:8 b3:8 | a3:8 b3:8 | c4:8 e3:8 | a3:8 f3:8 | e3:8 a3:8 | a3:8 c4:8 | b3:8 g#3:8 | a3:16 | g#3:16 | f3:8 e3:8 | a3:8 e3:8' },
    { inst: 'drums', seq: 'r..r..r.r..r..r.'.repeat(8) + '|' + 'k..r..r.k..r..r.'.repeat(8), vol: 0.6 },
  ] },
  // Обвал (ля минор): лейтмотив «аплодисментов» у меди фортиссимо, тремоло струнных, спиккато восьмыми, ум. септаккорд,
  // неаполитанский B♭; вторая половина — отражённый мотив и спуск к E7; литавровые дроби на стыках фраз.
  collapse: { bpm: 138, parts: [
    { inst: 'brass', vol: 0.8, seq: 'e5:4 a5:4 c6:8 | b5:12 g#5:4 | a5:4 e5:4 c5:8 | d5:16 | d5:4 f5:4 a5:8 | g5:12 e5:4 | f5:4 d5:4 b4:8 | a4:16 | e6:4 c6:4 a5:8 | b5:12 g#5:4 | c6:4 b5:4 a5:8 | f5:16 | f5:4 e5:4 d5:8 | c5:12 b4:4 | d5:4 c5:4 b4:8 | g#4:8 b4:4 d5:4' },
    { inst: 'trem', vol: 0.5, seq: held(16, ['a3+c4+e4', 'g#3+b3+e4', 'a3+c4+e4', 'bb3+d4+f4', 'a3+d4+f4', 'g3+c4+e4', 'g#3+b3+d4+f4', 'a3+c4+e4', 'a3+c4+e4', 'g#3+b3+e4', 'a3+c4+f4', 'a3+d4+f4', 'a3+d4+f4', 'a3+c4+e4', 'g#3+b3+d4', 'g#3+b3+d4+e4'], [0.8, 0.8, 0.85, 0.9, 0.9, 0.95, 1, 1, 1.05, 1.05, 1.1, 1.1, 1.15, 1.15, 1.2, 1.25]) },
    { inst: 'spic', d: 2, vol: 0.55, seq: figs('0 1 2 1 0 1 2 1', ['a3 c4 e4', 'g#3 b3 e4', 'a3 c4 e4', 'bb3 d4 f4', 'a3 d4 f4', 'g3 c4 e4', 'g#3 b3 f4', 'a3 c4 e4', 'a3 c4 e4', 'g#3 b3 e4', 'a3 c4 f4', 'a3 d4 f4', 'a3 d4 f4', 'a3 c4 e4', 'g#3 b3 d4', 'g#3 b3 d4']) },
    { inst: 'bass', d: 2, seq: ['a1', 'g#1', 'a1', 'bb1', 'd2', 'e2', 'g#1', 'a1', 'a1', 'g#1', 'f1', 'd2', 'd2', 'e2', 'e2', 'e2'].map((r) => { const u = r.replace(/\d/, (o) => String(+o + 1)); return `${r} ${r} ${u} ${r} ${r} ${u} ${r} ${u}`; }).join(' | ') },
    { inst: 'drums', vol: 0.7, seq: 'x..k.s.k.h..s.kh|' + 'k..k.s.k.h..s.kh'.repeat(6) + '|k..k.s.kssssTTTT|x..k.s.k.h..s.kh|' + 'k..k.s.k.h..s.kh'.repeat(6) + '|k.k.s.s.TTTTTTTT' },
    { inst: 'timp', vol: 0.75, seq: '.:48 ' + roll('bb1', 16, 0.3, 1) + ' d2:4:1 .:44 ' + roll('e2', 16, 0.3, 1) + ' a1:4:1 .:44 ' + roll('d2', 16, 0.3, 1) + ' d2:4:1 .:28 ' + roll('e2', 32, 0.2, 1.2) },
  ] },
  dressing: { bpm: 66, parts: [
    { inst: 'box', d: 4, seq: MOTIF, vol: 0.8 },
    { inst: 'pad', seq: 'a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12', vol: 0.9 },
  ] },
  // ---- финальный мюзикл THE QUEEN'S LAST CURTAIN ----
  // Ссора с примой (ре, 16 тактов): спиккато-«пила» полутонами (в духе триллерных партитур Херрманна), органный пункт,
  // визг скрипок-кластеров учащается к концу, валторны глухо цитируют уменьшённый мотив, литавры — сердцебиение.
  fin_argue: { bpm: 84, parts: [
    { inst: 'spic', vol: 0.75, seq: [...Array(4).fill('d3 eb3'), ...Array(4).fill('f3 gb3'), ...Array(4).fill('d3 eb3'), 'ab2 a2', 'ab2 a2', 'c#3 d3', 'c#3 d3'].map((p, i) => { const [a, b] = p.split(' '); const v = (0.6 + 0.4 * i / 15).toFixed(2); return Array(8).fill(`${a}:1:${v} ${b}:1:${(+v * 0.65).toFixed(2)}`).join(' '); }).join(' | ') },
    { inst: 'cello', vol: 0.6, seq: 'd2:64 bb1:64 d2:64 ab1:32 a1:32' },
    { inst: 'organ', vol: 0.3, seq: 'd2+ab2+c#3:64 bb1+e2+a2:64 d2+ab2+c#3:64 ab1+d2+g2:32 a1+eb2+g2+c#3:32' },
    { inst: 'strings', vol: 0.6, seq: '.:12 f5+b5:2 .:18 g#5+d6:2 .:14 a5+eb6:2 .:14 | .:6 eb6+a6:2 .:22 d6+g#6:2 .:6 d6+g#6:2 .:24 | .:12 f5+b5:2 .:18 g#5+d6:2 .:14 a5+eb6:2 .:14 | .:4 f5+b5:2 .:6 g#5+d6:2 .:6 a5+eb6:2 .:4 a5+eb6:2 .:4 c6+f#6:2 .:2 c6+f#6:2 .:2 c#6+g6:2 c#6+g6:2 c#6+g6:2 c#6+g6:2 .:16' },
    { inst: 'brass', vol: 0.55, seq: '.:128 d4:8 f4:4 ab4:4 | g4:16 | f#4:8 eb4:8 | d4:16 | .:64' },
    { inst: 'timp', vol: 0.7, seq: ['d2', 'd2', 'd2', 'd2', 'bb1', 'bb1', 'bb1', 'bb1', 'd2', 'd2', 'd2', 'd2', 'ab1', 'ab1', 'a1', 'a1'].map((r, i) => `${r}:2:${(0.45 + i * 0.035).toFixed(2)} .:1 ${r}:2:${(0.3 + i * 0.025).toFixed(2)} .:11`).join(' | ') },
    { inst: 'drone', vol: 0.5, seq: 'd1:256' },
  ] },
  fin_overture: { bpm: 108, parts: [
    { inst: 'strings', d: 4, seq: MOTIF, vol: 1.2 },
    { inst: 'organ', d: 4, seq: WALTZ_CH, vol: 0.9 },
    { inst: 'upright', d: 4, seq: WALTZ_BASS },
    { inst: 'drums', seq: 't...h...h...', vol: 0.5 },
  ] },
  fin_queen: { bpm: 112, parts: [
    { inst: 'upright', d: 1, seq: 'a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4' },
    { inst: 'piano', d: 4, vol: 0.7, seq: 'a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 .' },
    { inst: 'voice', d: 2, vol: 0.9, seq: 'e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4' },
    { inst: 'strings', d: 16, vol: 0.8, seq: 'a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4' },
    { inst: 'drums', seq: 'r..r..r.r..r..r.k.......s.......', vol: 0.6 },
  ] },
  fin_girl: { bpm: 100, parts: [
    { inst: 'voice', d: 4, seq: MOTIF_MAJ, vol: 0.8 },
    { inst: 'pluck', d: 2, vol: 0.6, seq: 'a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6' },
    { inst: 'upright', d: 4, seq: WALTZ_BASS_MAJ, vol: 0.7 },
    { inst: 'strings', vol: 0.5, seq: '.:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12' },
  ] },
  fin_mirror: { bpm: 126, parts: [
    { inst: 'drums', seq: 'k..hs..hk.k.s.hh', vol: 0.9 },
    { inst: 'bass', d: 2, seq: 'a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3' },
    { inst: 'strings', d: 1, vol: 0.6, seq: 'a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 .' },
    { inst: 'lead', d: 2, seq: 'e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4' },
    { inst: 'voice', d: 16, vol: 0.5, seq: 'a4 b4 a4 g#4 c5 b4 d5 c#5' },
  ] },
  // Разоблачение: мажорный лейтмотив у шкатулки над арфой; во втором проведении тему берут скрипки, шкатулка отвечает, вступает хор.
  fin_reveal: { bpm: 66, vol: 1.2, parts: [
    { inst: 'box', d: 4, vol: 0.85, seq: MOTIF_MAJ + ' | c#6:12 | b5:12 | a5:12 | a5:12 | f#5:12 | e5:12 | d5:12 | c#5:12' },
    { inst: 'harp', d: 2, vol: 0.5, seq: rep(figs('0 1 2 3 2 1', ['a2 e3 a3 c#4', 'e2 b2 e3 g#3', 'a2 e3 a3 c#4', 'd2 a2 d3 f#3', 'd2 a2 d3 f#3', 'e2 b2 e3 g#3', 'e2 b2 d3 g#3', 'a2 e3 a3 c#4']), 2) },
    { inst: 'pad', vol: 0.6, seq: held(12, ['a2+e3+c#4', 'e2+b2+g#3', 'a2+e3+c#4', 'd3+a3+f#4', 'd3+a3+f#4', 'e3+b3+g#4', 'e3+b3+d4', 'a2+e3+c#4']) + ' | .:96' },
    { inst: 'strings', d: 4, vol: 0.8, seq: '.:96 | e4 a4 c#5 | b4:8 g#4 | a4 e4 c#4 | d4:12 | d4 f#4 a4 | g#4:8 e4 | f#4 d4 b3 | a3:12' },
    { inst: 'cello', vol: 0.5, seq: '.:96 a2:12 e2:12 a2:12 d2:12 d2:12 e2:12 e2:12 a2:12' },
    { inst: 'voice', d: 12, vol: 0.35, seq: '.:96 e4 e4 e4 f#4 f#4 e4 d4 c#4' },
  ] },
  fin_minuet: { bpm: 112, parts: [
    { inst: 'pluck', d: 2, vol: 0.7, seq: 'g4 d4 g4 a4 b4 c5 | d5:4 g4:4 g4:4 | e5 c5 d5 e5 f#5 g5 | g4:4 g4:4 . . | c5 d5 c5 b4 a4 b4 | c5:4 b4 a4 b4 g4 | a4 b4 a4 g4 f#4 g4 | a4:12' },
    { inst: 'upright', d: 4, vol: 0.6, seq: 'g2 b2 d3 | b2 d3 g3 | c3 e3 g3 | b2 d3 g3 | a2 c3 e3 | g2 b2 d3 | d3 f#3 a3 | d2 f#2 a2' },
    { inst: 'strings', vol: 0.45, seq: 'g3+b3+d4:12 g3+b3+d4:12 c4+e4+g4:12 g3+b3+d4:12 a3+c4+e4:12 g3+b3+d4:12 d4+f#4+a4:12 d4+f#4+a4:12' },
  ] },
  // Буря (ре минор, «вивальдиевская»): тремоло шестнадцатыми с крещендо в каждой фразе и взлетающими гаммами,
  // хор над бурей, валторны спускаются басовой линией, литавровые раскаты, гром в барабанах.
  fin_storm: { bpm: 76, parts: [
    { inst: 'drone', seq: 'd2:256', vol: 0.5 },
    { inst: 'spic', d: 1, vol: 0.7, seq: (['d4 f4', 'd4 f4', 'd4 g4', 'RUN1', 'f4 bb4', 'g4 bb4', 'c#4 e4', 'RUN2', 'd4 f4', 'e4 g4', 'f4 bb4', 'RUN3', 'g4 bb4', 'c#4 e4', 'd4 f4', 'RUN4'] as string[]).map((p, i) => { const runs: Record<string, string> = { RUN1: 'd4 e4 f4 g4 a4 bb4 c#5 d5 e5 f5 g5 a5 bb5 a5 g5 f5', RUN2: 'a3 b3 c#4 d4 e4 f4 g4 a4 bb4 a4 g4 f4 e4 d4 c#4 e4', RUN3: 'e4 f4 g4 a4 bb4 c#5 d5 e5 f5 e5 d5 c#5 bb4 a4 g4 e4', RUN4: 'a4 g4 f4 e4 d4 c#4 bb3 a3 g3 a3 bb3 c#4 d4 e4 f4 e4' }; const v = [0.55, 0.7, 0.85, 1.05][i % 4]; return (runs[p] || Array(8).fill(p).join(' ')).split(' ').map((n) => `${n}:1:${v}`).join(' '); }).join(' | ') },
    { inst: 'cello', d: 4, vol: 0.6, seq: ['d2', 'd2', 'd2', 'd2', 'bb1', 'g1', 'a1', 'a1', 'd2', 'c2', 'bb1', 'a1', 'g1', 'a1', 'd2', 'a1'].map((r) => Array(4).fill(r).join(' ')).join(' | ') },
    { inst: 'voice', vol: 0.45, seq: 'a4:32 | bb4:16 a4:16 | d5:16 bb4:16 | c#5:16 e5:16 | f5:16 e5:8 d5:8 | d5:16 c#5:16 | d5:16 bb4:8 a4:8 | a4:16 c#5:16' },
    { inst: 'brass', vol: 0.5, seq: '.:128 d4:16 c4:16 bb3:16 a3:16 g3:16 a3:16 d4:16 c#4:16' },
    { inst: 'timp', vol: 0.75, seq: [['d2', 'd2'], ['bb1', 'a1'], ['d2', 'a1'], ['g1', 'a1']].map(([a, r]) => `${a}:4:0.8 .:28 ${a}:4:0.6 .:12 ` + roll(r, 16, 0.3, 1)).join(' | ') },
    { inst: 'drums', seq: 'x.......k..k....|' + 'k.......k..k....'.repeat(7) + '|x.......k..k....|' + 'k.......k..k....'.repeat(7), vol: 0.5 },
  ] },
  // Поклоны (ля мажор, 16 тактов): дважды бодрый рефрен, затем медь торжественно проводит мажорный лейтмотив,
  // струнные держат верх, литавры и тарелка на кульминации.
  fin_bows: { bpm: 120, parts: [
    { inst: 'drums', seq: 'k.h.s.h.k.k.s.hh'.repeat(7) + '|k.k.s.s.ssssTTTT|x.h.s.h.k.k.s.hh|' + 'k.h.s.h.k.k.s.hh'.repeat(6) + '|k.k.s.s.TTTTssss', vol: 0.8 },
    { inst: 'bass', d: 2, seq: rep('a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 .', 2) + ' | a1 a2 a1 a2 a1 a2 c#2 e2 | e1 e2 e1 e2 e1 e2 g#1 b1 | a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | e2 e3 e2 e3 e2 e3 d2 e2 | a1 a2 a1 a2 a1 e2 a2 .' },
    { inst: 'organ', seq: rep('a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16', 2) + ' | ' + held(16, ['a3+c#4+e4', 'g#3+b3+e4', 'a3+c#4+e4', 'a3+d4+f#4', 'a3+d4+f#4', 'g#3+b3+e4', 'a3+b3+d4+f#4', 'a3+c#4+e4']) },
    { inst: 'lead', d: 2, seq: rep('e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4', 2) + ' | .:128' },
    { inst: 'strings', d: 4, vol: 0.8, seq: 'c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5 | e5 a5 c#6 a5 | f#5 a5 d6 a5 | e5 g#5 b5 g#5 | e5 a5 c#6 e6 | c#6:16 | b5:16 | c#6:16 | a5:16 | f#5:16 | g#5:16 | a5:16 | e6:16' },
    { inst: 'brass', vol: 0.9, seq: '.:128 e5:4 a5:4 c#6:8 | b5:12 g#5:4 | a5:4 e5:4 c#5:8 | d5:16 | d5:4 f#5:4 a5:8 | g#5:12 e5:4 | f#5:4 d5:4 b4:8 | a4:16' },
    { inst: 'timp', vol: 0.7, seq: '.:128 a1:4:1 .:108 ' + roll('e2', 16, 0.3, 1) },
  ] },
  // Вечеринка — венский вальс в духе опереточной увертюры Штрауса (ля мажор → трио в ре мажоре, 32 такта):
  // «ум-ца-ца» басов и струнных, скрипки ведут тему, флейта подхватывает, треугольник на сильных долях.
  party: { bpm: 168, parts: [
    { inst: 'upright', d: 4, vol: 0.8, seq: ['a2', 'e2', 'e2', 'e2', 'e2', 'b1', 'a2', 'e2', 'a2', 'e2', 'd2', 'a2', 'e2', 'e2', 'a2', 'e2', 'd2', 'a1', 'a2', 'e2', 'a2', 'e2', 'd2', 'a1', 'g2', 'd2', 'f#2', 'b1', 'e2', 'a1', 'd2', 'e2'].map((r) => `${r} . .`).join(' | ') },
    { inst: 'spic', d: 4, vol: 0.55, seq: ['a3+c#4+e4', 'a3+c#4+e4', 'g#3+b3+d4', 'g#3+b3+d4', 'g#3+b3+d4', 'g#3+b3+d4', 'a3+c#4+e4', 'a3+c#4+e4', 'a3+c#4+e4', 'a3+c#4+e4', 'a3+d4+f#4', 'a3+d4+f#4', 'a3+c#4+e4', 'g#3+b3+d4', 'a3+c#4+e4', 'a3+c#4+e4', 'a3+d4+f#4', 'a3+d4+f#4', 'g3+a3+c#4+e4', 'g3+a3+c#4+e4', 'g3+a3+c#4+e4', 'g3+a3+c#4+e4', 'a3+d4+f#4', 'a3+d4+f#4', 'g3+b3+d4', 'g3+b3+d4', 'a3+d4+f#4', 'a3+d#4+f#4', 'g3+b3+e4', 'g3+a3+c#4', 'a3+d4+f#4', 'g#3+b3+d4+e4'].map((c) => `. ${c} ${c}`).join(' | ') },
    { inst: 'strings', vol: 0.9, seq: 'c#5:4 e5:4 a5:4 | c#6:8 b5:4 | b5:4 a5:4 g#5:4 | d6:8 .:4 | b4:4 d5:4 g#5:4 | b5:8 a5:4 | a5:4 g#5:4 a5:4 | e5:8 .:4 | c#5:4 e5:4 a5:4 | e6:8 c#6:4 | d6:4 f#5:4 a5:4 | f#6:8 d6:4 | c#6:4 e6:4 c#6:4 | b5:4 d6:4 g#5:4 | a5:4 e5:4 c#5:4 | a4:8 .:4 | f#5:8 a5:4 | d6:12 | c#6:4 b5:4 a5:4 | g5:8 e5:4 | e5:4 g5:4 c#6:4 | e6:12 | d6:4 c#6:4 d6:4 | a5:8 f#5:4 | g5:4 b5:4 d6:4 | g6:8 e6:4 | f#6:4 e6:4 d6:4 | d#6:8 a5:4 | g5:4 b5:4 e6:4 | c#6:8 g5:4 | f#5:4 a5:4 d6:4 | g#5:4 b5:4 d6:4' },
    { inst: 'flute', vol: 0.55, seq: '.:96 | c#6:4 e6:4 a6:4 | e6:8 c#6:4 | d6:4 f#6:4 a6:4 | f#6:8 d6:4 | e6:12 | d6:12 | c#6:4 e6:4 a6:4 | a6:8 .:4 | a5:12 | f#5:12 | g5:12 | a5:12 | g5:12 | a5:12 | f#5:12 | d5:12 | d5:12 | b5:12 | a5:12 | a5:12 | g5:12 | e5:12 | f#5:12 | e5:12' },
    { inst: 'drums', vol: 0.45, seq: 'x...........' + 'b...........'.repeat(15) + 'x...........' + 'b...........'.repeat(15) },
    { inst: 'timp', vol: 0.5, seq: 'a1:12:0.8 .:168 ' + roll('a1', 12, 0.3, 0.9) + ' d2:12:0.8 .:180' },
  ] },
  // Музыкальная шкатулка главного меню: припев целиком (1:05–1:42), снят с отделённого вокала; D♭ мажор, легато, 24 такта по кругу (последний такт на A♭ ведёт обратно в D♭)
  menu_box: { bpm: 132, vol: 0.85, parts: [
    { inst: 'box', d: 1, seq: '.:11 g#4:13 f#4:3 f4:3 f#4:3 g#4:6 f#4:4 f4:2 f#4:4 g#4:6 f#4:4 f4:2 f#4:3 g#4:8 .:3 f4:2 f#4:4 g#4:6 f#4:4 f4:2 f#4:4 f4:7 c#4:3 f4:3 f#4:3 f4:6 f#4:3 f4:5 f#4:3 d#4:5 c#4:4 f4:3 f#4:3 g#4:6 f#4:5 f4:2 f#4:3 g#4:6 f#4:10 g#4:6 c#5:3 c5:4 c#5:3 f#4:2 f4:5 d#4:2 c#4:3 d#4:6 f4:4 f#4:2 f4:6 f#4:2 f4:5 a#3:2 g#3:5 a#3:2 g#3:8 a#3:5 .:6 g#3:3 d#4:5 c#4:16 c#4:15 .:16 .:6 c4:2 g#3:4 d#4:5 c#4:16 c#4:12 d#4:5 c#4:3 .:16 . .' },
    { inst: 'box', d: 4, vol: 0.3, seq: 'c#3:4 g#3:4 f4:4 g#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | f#3:4 c#4:4 a#4:4 c#4:4 | f#3:4 c#4:4 a#4:4 c#4:4 | c#3:4 g#3:4 f4:4 g#3:4 | c#3:4 g#3:4 f4:4 g#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | f#3:4 c#4:4 a#4:4 c#4:4 | f#3:4 c#4:4 a#4:4 c#4:4 | c#3:4 g#3:4 f4:4 g#3:4 | c#3:4 g#3:4 f4:4 g#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | f#3:4 c#4:4 a#4:4 c#4:4 | f#3:4 c#4:4 a#4:4 c#4:4 | c#3:4 g#3:4 f4:4 g#3:4 | c#3:4 g#3:4 f4:4 g#3:4 | g#2:4 d#3:4 c4:4 d#3:4' },
    { inst: 'pad', d: 16, vol: 0.16, seq: 'c#3+f3+g#3:16 d#3+f#3+a#3:16 d#3+f#3+a#3:16 f#3+a#3+c#4:16 f#3+a#3+c#4:16 c#3+f3+g#3:16 c#3+f3+g#3:16 g#2+c3+d#3:16 g#2+c3+d#3:16 d#3+f#3+a#3:16 d#3+f#3+a#3:16 f#3+a#3+c#4:16 f#3+a#3+c#4:16 c#3+f3+g#3:16 c#3+f3+g#3:16 g#2+c3+d#3:16 g#2+c3+d#3:16 d#3+f#3+a#3:16 d#3+f#3+a#3:16 f#3+a#3+c#4:16 f#3+a#3+c#4:16 c#3+f3+g#3:16 c#3+f3+g#3:16 g#2+c3+d#3:16' },
  ] },
  musicbox: { bpm: 70, swing: 0.12, vol: 0.9, parts: [
    { inst: 'box', d: 4, seq: MOTIF + ' | .:12 | e6:4 c6:4 a5:4 | b5:8 g#5:4 | e5:12 | .:24' },
    { inst: 'box', d: 4, vol: 0.45, seq: 'a3 . e4 | e3 . b3 | a3 . e4 | d3 . a3 | d3 . f3 | c3 . g3 | e3 . g#3 | a3 . c4 | a3 . e4 | a3 . e4 | e3 . b3 | e3 . g#3 | a3 . e4 | a3 . . | .:12' },
    { inst: 'pad', seq: 'a2+e3:96 .:96', vol: 0.35 },
  ] },
  // Утро: мажорный лейтмотив у шкатулки над тихими переборами рояля; во втором проведении тему поёт виолончель, шкатулка отвечает.
  morning: { bpm: 60, vol: 1.2, parts: [
    { inst: 'box', d: 4, vol: 0.7, seq: MOTIF_MAJ + ' | c#6:12 | b5:12 | a5:6 c#6:6 | f#5:12 | a5:12 | b5:6 g#5:6 | e5:6 d5:6 | c#5:12' },
    { inst: 'piano', d: 2, vol: 0.3, seq: rep(figs('0 1 2 3 2 1', ['a2 e3 a3 c#4', 'e2 b2 e3 g#3', 'a2 e3 a3 c#4', 'd2 a2 d3 f#3', 'd2 a2 d3 f#3', 'e2 b2 e3 g#3', 'e2 b2 d3 g#3', 'a2 e3 a3 c#4']), 2) },
    { inst: 'cello', d: 4, vol: 0.55, seq: '.:96 | e3 a3 c#4 | b3:8 g#3 | a3 e3 c#3 | d3:12 | d3 f#3 a3 | g#3:8 e3 | f#3 d3 b2 | a2:12' },
    { inst: 'pad', vol: 0.4, seq: rep('a2+e3:12 b2+e3:12 a2+e3:12 d3+a3:24 e3+b3:24 a2+e3:12', 2) },
  ] },
  // Напряжение (расследования): тихое пиццикато-«часы», виолончельный бас D–B♭–G–A, неаполитанский E♭, тремоло-шёпот наверху.
  tension: { bpm: 72, vol: 1.5, parts: [
    { inst: 'pizz', d: 2, vol: 0.45, seq: figs('0 . 1 . 2 . 1 .', ['d3 a3 f3', 'd3 a3 f3']) + ' | ' + figs('0 . 1 2 . 1 . .', ['bb2 f3 d3', 'bb2 f3 d3']) + ' | ' + figs('0 . 1 . 2 . 1 .', ['g2 d3 bb2', 'g2 d3 bb2', 'a2 e3 c#3', 'a2 e3 c#3', 'd3 a3 f3', 'd3 a3 f3']) + ' | ' + figs('0 . 1 2 . 1 . .', ['eb3 bb3 g3', 'eb3 bb3 g3', 'bb2 g3 d3', 'e3 bb3 g3', 'a2 g3 c#3', 'a2 g3 e3']) },
    { inst: 'cello', vol: 0.55, seq: 'd2:32 bb1:32 g1:32 a1:32 d2:32 eb2:32 bb1:16 e2:16 a1:32' },
    { inst: 'trem', vol: 0.32, seq: '.:32 a4:32:0.6 bb4:32:0.7 a4+c#5:32:0.85 .:32 bb4+g5:32:0.7 g4+d5:16:0.8 g4+bb4:16:0.9 g4+c#5+e5:32:1' },
    { inst: 'piano', vol: 0.35, seq: '.:128 f5:4 e5:12 .:16 g5:4 f5:12 .:16 bb4:4 a4:12 .:16 c#5:4 e5:4 a4:8 .:16' },
    { inst: 'timp', vol: 0.6, seq: 'd2:4:0.5 .:60 g1:4:0.5 .:60 d2:4:0.5 .:60 bb1:4:0.5 .:28 a1:2:0.4 a1:2:0.6 .:28' },
    { inst: 'drums', vol: 0.12, seq: '....h.......h...'.repeat(16) },
  ] },
  // Нежность (новая тема для примирений и объятий): фа мажор, медленно. Рояль переливается арпеджио, сначала поёт сам,
  // затем мелодию берут скрипки; виолончель ведёт тёплый тенор, в 14-м такте — «слёзная» минорная субдоминанта (B♭m6).
  tender: { bpm: 66, parts: [
    { inst: 'piano', d: 2, vol: 0.4, seq: figs('0 1 2 3 4 3 2 1', ['f2 c3 a3 c4 f4', 'e2 c3 g3 c4 e4', 'd2 a2 f3 a3 c4', 'bb1 f2 d3 f3 a3', 'a1 f2 c3 f3 a3', 'g1 d2 bb2 f3 bb3', 'c2 g2 c3 f3 g3', 'c2 g2 bb2 e3 g3', 'd2 a2 d3 f3 a3', 'c#2 a2 e3 g3 a3', 'bb1 f2 bb2 d3 f3', 'a1 f2 c3 f3 a3', 'g1 d2 bb2 f3 bb3', 'bb1 f2 db3 g3 bb3', 'c2 a2 c3 f3 a3', 'c2 g2 bb2 e3 g3']) },
    { inst: 'piano', vol: 0.6, seq: 'a4:6 g4:2 f4:4 c5:4 | c5:8 bb4:4 g4:4 | a4:6 g4:2 f4:4 a4:4 | d5:12 c5:4 | c5:6 a4:2 f5:8 | f5:6 d5:2 bb4:8 | g5:8 f5:8 | e5:12 .:4 | .:128' },
    { inst: 'strings', vol: 0.7, seq: '.:128 | a5:6 g5:2 f5:4 d5:4 | e5:8 c#5:4 a4:4 | d5:6 c5:2 bb4:4 f5:4 | a5:8 g5:4 f5:4 | bb5:6 a5:2 g5:4 f5:4 | f5:8 db5:4 bb4:4 | a4:4 c5:4 f5:8 | e5:8 g5:4 bb4:4' },
    { inst: 'cello', vol: 0.5, seq: 'a3:16 | g3:16 | f3:8 a3:8 | f3:16 | c4:16 | bb3:8 d4:8 | c4:16 | bb3:16 | f3:8 a3:8 | g3:8 e3:8 | f3:8 d3:8 | c4:8 a3:8 | bb3:8 d4:8 | db4:8 bb3:8 | a3:8 c4:8 | bb3:8 g3:8' },
    { inst: 'swell', vol: 0.22, seq: held(16, ['f3+a3+c4', 'e3+g3+c4', 'f3+a3+c4', 'f3+a3+d4', 'f3+a3+c4', 'f3+bb3+d4', 'f3+g3+c4', 'e3+g3+bb3', 'f3+a3+d4', 'e3+g3+c#4', 'f3+bb3+d4', 'f3+a3+c4', 'f3+bb3+d4', 'f3+g3+db4', 'f3+a3+c4', 'e3+g3+bb3']) },
  ] },
  // Проделка (новая тема для хаба, комедии, сцен Матвея и Лизы) — в духе причудливых партитур Деспла:
  // тремоло балалаек остинато, сухое пиццикато, камерный орган, «челеста» с паузами-подмигиваниями, хор «а-а» во второй половине.
  caper: { bpm: 118, vol: 1.5, parts: [
    { inst: 'balalaika', d: 2, vol: 0.5, seq: figs('0 1 2 1 0 1 2 1', ['d4 f4 a4', 'd4 f4 a4', 'd4 g4 bb4', 'c#4 e4 a4', 'd4 f4 a4', 'd4 f4 bb4', 'e4 g4 bb4', 'c#4 e4 g4', 'd4 f4 a4', 'c4 e4 g4', 'd4 f4 bb4', 'c#4 e4 a4', 'd4 g4 bb4', 'd4 f4 a4', 'd4 e4 g#4', 'c#4 e4 g4']) },
    { inst: 'pizz', d: 4, vol: 0.55, seq: ['d2 a2', 'd2 a2', 'g2 d3', 'a2 e2', 'd2 a2', 'bb1 f2', 'g2 e2', 'a2 e2', 'd2 a2', 'c2 g2', 'bb1 f2', 'a1 e2', 'g2 d2', 'f2 a2', 'e2 b2', 'a2 c#3'].map((p) => { const [r, f] = p.split(' '); return `${r} . ${f} .`; }).join(' | ') },
    { inst: 'organ', vol: 0.35, seq: held(16, ['d3+f3+a3', 'd3+f3+a3', 'd3+g3+bb3', 'c#3+e3+g3', 'd3+f3+a3', 'd3+f3+bb3', 'e3+g3+bb3', 'c#3+e3+g3', 'd3+f3+a3', 'c3+e3+g3', 'd3+f3+bb3', 'c#3+e3+a3', 'd3+g3+bb3', 'd3+f3+a3', 'd3+e3+g#3', 'c#3+e3+g3']) },
    { inst: 'box', d: 2, vol: 0.75, seq: 'a4 . d5 . f5 e5 d5:4 | a5:4 .:4 a5 g#5 a5:4 | bb5 . g5 . d5 e5 f5:4 | e5:4 c#5:4 a4:8 | a4 . d5 . f5 e5 d5:4 | f5:4 .:4 f5 e5 f5:4 | e5 . g5 . bb5 a5 g5:4 | a5:8 .:8 | d6 . a5 . f5 . d5 . | e5 . g5 . c6 . e6 . | d6 . bb5 . f5 . d5 . | c#5 . e5 . a5 . c#6 . | bb5:4 a5:4 g5:4 d5:4 | f5:4 e5:4 d5:4 a4:4 | g#4:4 b4:4 d5:4 e5:4 | c#5:4 e5:4 g5:4 a5:4' },
    { inst: 'voice', vol: 0.4, seq: '.:128 a4:16 g4:16 f4:16 e4:16 d4:16 d4:16 d4:16 c#4:16' },
    { inst: 'drums', vol: 0.45, seq: 'k.r..hr.k.r.r.h.'.repeat(7) + 'k.r.r.r.rrrrk...' + 'k.r..hr.k.r.r.h.'.repeat(7) + 'k.r.r.r.rrrrk.k.' },
  ] },
};
