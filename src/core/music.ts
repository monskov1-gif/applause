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

export const TRACKS: Record<string, Track> = {
  theater: { bpm: 92, parts: [
    { inst: 'box', d: 4, seq: MOTIF + ' | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12' },
    { inst: 'upright', d: 4, seq: WALTZ_BASS, vol: 0.8 },
    { inst: 'piano', d: 4, seq: WALTZ_CH, vol: 0.5 },
    { inst: 'drone', seq: 'a1:96 .:96', vol: 0.5 },
  ] },
  backstage: { bpm: 60, parts: [
    { inst: 'drone', seq: 'd2:40 .:24', vol: 0.7 },
    { inst: 'box', seq: 'a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30', vol: 0.7 },
    { inst: 'piano', seq: '.:50 d3:6 .:44 a2:6 .:21', vol: 0.5 },
  ] },
  horror: { bpm: 50, parts: [
    { inst: 'drone', seq: 'c2:48 c#2:16', vol: 0.9 },
    { inst: 'piano', seq: 'eb6:2 .:30 d6:2 .:14 f#5:2 .:53', vol: 0.5 },
    { inst: 'piano', seq: 'c2:4 .:75', vol: 0.8 },
    { inst: 'box', seq: '.:37 g5:1 gb5:1 f5:2 .:60', vol: 0.4 },
  ] },
  heist: { bpm: 118, parts: [
    { inst: 'drums', seq: 'k.h.s.h.k.h.s.hhk.h.s.h.k.khs.h.', vol: 0.8 },
    { inst: 'bass', d: 2, seq: 'd2 d2 d3 d2 d2 d3 d2 f2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 | f2 f2 f3 f2 f2 f3 f2 e2 | c2 c2 c3 c2 c2 c3 c2 c#2' },
    { inst: 'pluck', d: 1, vol: 0.55, seq: 'd4 f4 a4 d5 a4 f4 d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 | bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 | f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 | c4 e4 g4 c5 g4 e4 c4 e4 g4 c5 g4 e4 c4 e4 g4 c5' },
    { inst: 'lead', d: 2, vol: 0.8, seq: '.:64 | a5:4 . f5 d5:4 .:4 | d5 f5 g5:4 f5:8 | a5:4 . c6 a5:4 f5:4 | g5:6 e5 c5:8' },
    { inst: 'pad', seq: 'd3+a3:16 bb2+f3:16 f3+c4:16 c3+g3:16' },
  ] },
  chase: { bpm: 140, parts: [
    { inst: 'drums', seq: 'k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs', vol: 0.9 },
    { inst: 'bass', d: 1, seq: 'd2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2' },
    { inst: 'lead', d: 2, vol: 0.8, seq: 'd5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4' },
    { inst: 'pad', seq: 'd3+a3:32 bb2+f3:32' },
  ] },
  school: { bpm: 104, parts: [
    { inst: 'piano', d: 4, vol: 0.7, seq: 'c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 .' },
    { inst: 'upright', d: 8, vol: 0.7, seq: 'c3 c3 a2 a2 f2 f2 g2 g2' },
    { inst: 'pluck', d: 2, vol: 0.7, seq: 'e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8' },
    { inst: 'drums', seq: 'k...h...r...h.h.', vol: 0.4 },
  ] },
  school_soft: { bpm: 76, parts: [
    { inst: 'piano', d: 8, vol: 0.7, seq: 'c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4' },
    { inst: 'box', d: 4, vol: 0.7, seq: '.:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16' },
    { inst: 'pad', seq: 'c3+g3:32 f3+c4:16 g3+d4:16', vol: 0.8 },
  ] },
  noir: { bpm: 96, swing: 0.33, parts: [
    { inst: 'upright', d: 4, seq: 'd2 f2 a2 c3 | g2 bb2 d3 f3 | e2 g2 a2 c#3 | d3 a2 f2 a2 | d2 e2 f2 a2 | bb2 a2 g2 f2 | e2 bb2 a2 e2 | d2 a2 d2 .' },
    { inst: 'drums', seq: 'b..bb..bb..bb.rb', vol: 0.8 },
    { inst: 'piano', d: 1, vol: 0.6, seq: '.:6 f3+a3+c4+e4:2 .:8 | .:6 f3+bb3+d4:2 .:3 f3+bb3+d4:2 .:3 | .:6 g3+bb3+d4:2 .:2 g3+c#4+e4:2 .:4 | .:10 f3+a3+c4+e4:3 .:3' },
    { inst: 'sax', d: 2, vol: 0.8, seq: '.:8 a4:6 c5 | d5:8 .:4 f5 e5 | d5:4 c5 a4 g4:8 | a4:12 .:4 | .:4 d5 f5 a5:6 g5 | f5:4 d5:4 c5 d5:6 | e5:4 g5 f5 e5:4 c#5:4 | d5:12 .:4' },
  ] },
  fairy: { bpm: 92, parts: [
    { inst: 'box', d: 4, seq: 'c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12' },
    { inst: 'upright', d: 12, vol: 0.7, seq: 'f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2' },
    { inst: 'pluck', d: 2, vol: 0.5, seq: 'f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6' },
    { inst: 'strings', vol: 0.6, seq: '.:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12' },
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
  ] },
  diva: { bpm: 112, parts: [
    { inst: 'upright', d: 1, seq: 'a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4' },
    { inst: 'piano', d: 4, vol: 0.7, seq: 'a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 .' },
    { inst: 'strings', d: 2, seq: 'e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4' },
    { inst: 'drums', seq: 'r..r..r.r..r..r.', vol: 0.6 },
  ] },
  collapse: { bpm: 138, parts: [
    { inst: 'box', d: 3, seq: 'e5 a5 c6 b5 g#5 a5 e5 c5 d5' },
    { inst: 'bass', d: 7, seq: 'a1 d2 e2 c2' },
    { inst: 'drums', seq: 'k..k.s.k.h..s.kh', vol: 0.7 },
    { inst: 'drums', seq: '..h..h.h.t', vol: 0.5 },
    { inst: 'pad', seq: 'a2+eb3:32 bb2+e3:32' },
    { inst: 'sax', d: 5, vol: 0.4, seq: 'a4 . d5 . c#5 .' },
  ] },
  dressing: { bpm: 66, parts: [
    { inst: 'box', d: 4, seq: MOTIF, vol: 0.8 },
    { inst: 'pad', seq: 'a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12', vol: 0.9 },
  ] },
  // ---- финальный мюзикл THE QUEEN'S LAST CURTAIN ----
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
  fin_reveal: { bpm: 66, parts: [
    { inst: 'box', d: 4, seq: MOTIF_MAJ },
    { inst: 'pad', seq: '.:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12', vol: 0.9 },
    { inst: 'voice', d: 12, vol: 0.35, seq: '.:96 e4 e4 e4 f#4 f#4 e4 d4 c#4' },
  ] },
  fin_bows: { bpm: 120, parts: [
    { inst: 'drums', seq: 'k.h.s.h.k.k.s.hh', vol: 0.8 },
    { inst: 'bass', d: 2, seq: 'a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 .' },
    { inst: 'organ', seq: 'a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16' },
    { inst: 'lead', d: 2, seq: 'e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4' },
    { inst: 'strings', d: 4, vol: 0.8, seq: 'c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5' },
  ] },
  party: { bpm: 96, parts: [
    { inst: 'piano', d: 4, vol: 0.7, seq: 'c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 .' },
    { inst: 'upright', d: 8, vol: 0.7, seq: 'c3 e3 f2 a2 g2 b2 c3 g2' },
    { inst: 'box', d: 2, seq: 'g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4' },
    { inst: 'drums', seq: 'k...h...r...h.h.', vol: 0.4 },
  ] },
  morning: { bpm: 60, parts: [
    { inst: 'box', d: 4, seq: MOTIF_MAJ, vol: 0.7 },
    { inst: 'pad', seq: 'a2+e3:48 d3+a3:24 e3+b3:24', vol: 0.7 },
  ] },
};
