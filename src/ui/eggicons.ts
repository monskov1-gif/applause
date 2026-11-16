// Маленькие пиксельные рисунки к пасхалкам (24×24, рисуются на canvas и кешируются).
type C = CanvasRenderingContext2D;
const R = (c: C, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const frame = (c: C, col = '#86641c', fill = '#e8dcc0') => { R(c, 3, 2, 18, 20, col); R(c, 5, 4, 14, 16, fill); };
const poster = (c: C, bg: string, fg: string) => { R(c, 5, 2, 14, 20, '#2a1a14'); R(c, 6, 3, 12, 18, bg); R(c, 8, 5, 8, 2, fg); R(c, 9, 9, 6, 7, fg); R(c, 8, 18, 8, 1, fg); };
const DRAW: Record<string, (c: C) => void> = {
  family: (c) => { frame(c); for (const [x, col] of [[6, '#7a4a2a'], [10, '#3a2a1a'], [14, '#c88a4a']] as [number, string][]) { R(c, x, 8, 4, 4, '#e8b890'); R(c, x, 7, 4, 2, col); R(c, x - 1, 12, 6, 7, '#5a6a8a'); } },
  hat: (c) => { R(c, 3, 15, 18, 3, '#1a1a22'); R(c, 7, 5, 10, 11, '#24242c'); R(c, 7, 13, 10, 2, '#a3122a'); R(c, 9, 8, 2, 2, '#fff'); R(c, 13, 8, 2, 2, '#fff'); R(c, 10, 11, 4, 1, '#fff'); },
  plays1: (c) => poster(c, '#c84a3a', '#f4e8c8'),
  plays2: (c) => poster(c, '#3a6a4a', '#e8d070'),
  hamlet: (c) => { R(c, 7, 10, 10, 9, '#efe6d2'); R(c, 8, 8, 8, 4, '#efe6d2'); R(c, 9, 12, 2, 3, '#1a1414'); R(c, 13, 12, 2, 3, '#1a1414'); R(c, 11, 16, 2, 2, '#1a1414'); R(c, 5, 19, 14, 3, '#a3122a'); },
  closet: (c) => { R(c, 5, 2, 14, 21, '#5a3a24'); R(c, 6, 3, 12, 19, '#7a5232'); R(c, 15, 12, 2, 2, '#e8c060'); R(c, 7, 5, 10, 3, '#e8dcc0'); R(c, 8, 6, 8, 1, '#5a3a24'); },
  matias: (c) => { frame(c, '#d4ae48', '#3a2a2a'); R(c, 9, 6, 6, 6, '#e8b890'); R(c, 8, 5, 8, 2, '#c8c8c8'); R(c, 7, 12, 10, 7, '#1a1a22'); R(c, 11, 12, 2, 4, '#f4f0e8'); },
  cloak18: (c) => { R(c, 7, 3, 10, 18, '#d4ae48'); R(c, 8, 4, 8, 16, '#e8c86a'); R(c, 10, 5, 4, 3, '#5a4018'); R(c, 9, 11, 2, 6, '#3a2a14'); R(c, 13, 11, 2, 6, '#3a2a14'); R(c, 12, 11, 1, 1, '#3a2a14'); },
  guestbook: (c) => { R(c, 3, 5, 18, 14, '#7a1a22'); R(c, 4, 6, 7, 12, '#f4ecd8'); R(c, 13, 6, 7, 12, '#f4ecd8'); R(c, 11, 6, 2, 12, '#4a0a12'); for (let y = 8; y < 17; y += 2) { R(c, 5, y, 5, 1, '#8a7a6a'); R(c, 14, y, 5, 1, '#8a7a6a'); } },
  buffet: (c) => { R(c, 3, 14, 18, 3, '#e8dcc0'); R(c, 5, 10, 6, 4, '#d8a060'); R(c, 5, 9, 6, 1, '#7ac04a'); R(c, 13, 10, 6, 4, '#d8a060'); R(c, 13, 9, 6, 1, '#e84a4a'); R(c, 16, 3, 2, 7, '#c8e8f8'); R(c, 15, 2, 4, 2, '#f4e070'); },
  piano: (c) => { R(c, 2, 9, 20, 9, '#14121a'); for (let x = 3; x < 21; x += 2) R(c, x, 14, 1, 4, '#f4f0e8'); R(c, 3, 14, 18, 1, '#f4f0e8'); R(c, 15, 3, 2, 5, '#e8c060'); R(c, 17, 3, 3, 1, '#e8c060'); R(c, 14, 7, 3, 2, '#e8c060'); },
  boxview: (c) => { R(c, 2, 4, 20, 16, '#3a0810'); R(c, 4, 6, 16, 12, '#0a0606'); R(c, 10, 9, 4, 6, '#a3122a'); R(c, 11, 7, 2, 2, '#e8b890'); R(c, 2, 16, 20, 4, '#d4ae48'); for (let x = 4; x < 20; x += 3) R(c, x, 17, 1, 3, '#86641c'); },
  paint: (c) => { R(c, 3, 10, 8, 10, '#c41e3a'); R(c, 3, 8, 8, 2, '#8a8a92'); R(c, 13, 10, 8, 10, '#e8321e'); R(c, 13, 8, 8, 2, '#8a8a92'); R(c, 10, 4, 4, 3, '#f4e8c8'); R(c, 11, 7, 2, 2, '#f4e8c8'); },
  cat: (c) => { R(c, 6, 10, 12, 9, '#e8a050'); R(c, 6, 7, 3, 3, '#e8a050'); R(c, 15, 7, 3, 3, '#e8a050'); R(c, 8, 12, 2, 2, '#1a1414'); R(c, 14, 12, 2, 2, '#1a1414'); R(c, 11, 15, 2, 1, '#c84a5a'); R(c, 18, 15, 3, 2, '#e8a050'); },
  manga: (c) => { R(c, 4, 3, 16, 19, '#f4f0e8'); R(c, 4, 3, 16, 2, '#e84a6f'); R(c, 6, 7, 5, 6, '#2a2a2a'); R(c, 13, 7, 5, 6, '#2a2a2a'); R(c, 7, 8, 3, 4, '#ffd0e0'); R(c, 6, 15, 12, 1, '#8a8a8a'); R(c, 6, 17, 10, 1, '#8a8a8a'); R(c, 6, 19, 8, 1, '#8a8a8a'); },
  donut: (c) => { R(c, 5, 7, 14, 10, '#c88a4a'); R(c, 4, 9, 16, 6, '#c88a4a'); R(c, 5, 7, 14, 4, '#e84a8a'); R(c, 10, 10, 4, 4, '#2a1a14'); R(c, 7, 8, 1, 1, '#f4e070'); R(c, 15, 9, 1, 1, '#7ad0f0'); R(c, 12, 7, 1, 1, '#fff'); },
  clock13: (c) => { R(c, 6, 3, 12, 19, '#5a3a24'); R(c, 7, 4, 10, 10, '#f4ecd8'); R(c, 11, 5, 2, 4, '#1a1414'); R(c, 11, 9, 4, 1, '#1a1414'); R(c, 10, 15, 4, 6, '#e8c060'); R(c, 7, 4, 2, 1, '#a3122a'); },
  mirror_tale: (c) => { R(c, 7, 2, 10, 14, '#d4ae48'); R(c, 8, 3, 8, 12, '#c8e0f0'); R(c, 9, 4, 2, 8, '#ffffff'); R(c, 11, 16, 2, 6, '#d4ae48'); R(c, 9, 21, 6, 2, '#d4ae48'); R(c, 13, 7, 2, 2, '#a3122a'); },
};
const cache = new Map<string, string>();
export function eggIcon(id: string, found: boolean): string {
  const key = id + (found ? '1' : '0'); const hit = cache.get(key); if (hit) return hit;
  const cv = document.createElement('canvas'); cv.width = cv.height = 24; const c = cv.getContext('2d')!;
  if (found && DRAW[id]) DRAW[id](c); else { R(c, 4, 4, 16, 16, '#2a2228'); c.fillStyle = '#6a5a6a'; c.font = 'bold 14px monospace'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('?', 12, 13); }
  const u = cv.toDataURL(); cache.set(key, u); return u;
}
