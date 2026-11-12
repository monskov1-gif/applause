// Иконки предметов инвентаря: пиксельные рисунки 32×32, кешируются в dataURL.
const cache = new Map<string, string>();
type C = CanvasRenderingContext2D;
const r = (c: C, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
const DRAW: Record<string, (c: C) => void> = {
  camera: (c) => { r(c, 4, 10, 24, 16, '#26262c'); r(c, 6, 7, 7, 3, '#34343c'); r(c, 22, 8, 4, 2, '#c8c8d0'); r(c, 11, 12, 11, 11, '#4a4a58'); r(c, 13, 14, 7, 7, '#7aa0c8'); r(c, 14, 15, 3, 2, '#d8f0ff'); r(c, 5, 12, 3, 2, '#c41e3a'); },
  marionette: (c) => { r(c, 6, 2, 20, 2, '#5a4029'); for (const x of [8, 16, 24]) r(c, x, 4, 1, 7, '#ddd'); r(c, 12, 10, 8, 7, '#e8d8c0'); r(c, 12, 10, 4, 7, '#f4ecd8'); r(c, 13, 12, 1, 1, '#111'); r(c, 18, 12, 1, 1, '#111'); r(c, 12, 17, 8, 7, '#a3122a'); r(c, 9, 17, 3, 7, '#e8d8c0'); r(c, 20, 17, 3, 7, '#e8d8c0'); r(c, 13, 24, 2, 6, '#333'); r(c, 17, 24, 2, 6, '#333'); },
  lantern: (c) => { r(c, 15, 2, 2, 4, '#333'); r(c, 9, 6, 14, 18, '#e84a6f'); r(c, 12, 8, 8, 14, '#ffd060'); r(c, 9, 10, 14, 1, '#b03050'); r(c, 9, 18, 14, 1, '#b03050'); r(c, 11, 24, 10, 2, '#333'); r(c, 14, 26, 4, 4, '#f2c230'); },
  archive_card: (c) => { r(c, 3, 7, 26, 18, '#efe3c4'); r(c, 3, 7, 26, 3, '#8e1830'); for (let i = 0; i < 4; i++) r(c, 6, 13 + i * 3, 18 - i * 3, 1, '#5a4029'); r(c, 22, 18, 4, 4, '#3a2a14'); },
  braid: (c) => { for (let y = 2; y < 30; y++) { const x = 13 + Math.sin(y / 2.2) * 4; r(c, x, y, 6, 1, y % 4 < 2 ? '#8c6a45' : '#6a4a2a'); } r(c, 12, 26, 8, 3, '#c41e3a'); },
  demo: (c) => { r(c, 3, 8, 26, 17, '#1a1420'); r(c, 6, 10, 20, 7, '#ff9ad8'); r(c, 9, 19, 14, 4, '#333'); r(c, 10, 20, 3, 2, '#aaa'); r(c, 19, 20, 3, 2, '#aaa'); r(c, 8, 12, 16, 1, '#fff'); },
  flashlight: (c) => { r(c, 6, 13, 16, 7, '#3a3a40'); r(c, 22, 11, 6, 11, '#5a5a62'); r(c, 23, 12, 4, 9, '#fff4c8'); r(c, 10, 11, 3, 2, '#c41e3a'); },
  porch_key: (c) => { r(c, 4, 10, 9, 10, '#b08a2c'); r(c, 6, 12, 5, 6, '#000'); r(c, 13, 14, 15, 3, '#b08a2c'); r(c, 22, 17, 2, 4, '#b08a2c'); r(c, 26, 17, 2, 3, '#b08a2c'); },
  tower_key: (c) => { r(c, 4, 9, 10, 12, '#d4ae48'); r(c, 6, 11, 6, 8, '#000'); r(c, 14, 14, 14, 3, '#d4ae48'); r(c, 21, 17, 2, 4, '#d4ae48'); r(c, 25, 17, 2, 5, '#d4ae48'); r(c, 7, 6, 4, 3, '#e84a6f'); },
  gear: (c) => { r(c, 8, 8, 16, 16, '#b08a2c'); r(c, 13, 3, 6, 26, '#b08a2c'); r(c, 3, 13, 26, 6, '#b08a2c'); r(c, 13, 13, 6, 6, '#3a2a14'); },
  weight: (c) => { r(c, 6, 11, 20, 18, '#484e59'); r(c, 10, 7, 12, 5, '#5e6673'); r(c, 13, 3, 6, 5, '#343841'); r(c, 8, 14, 3, 12, '#78818f'); },
  emp: (c) => { r(c, 6, 9, 20, 15, '#22303a'); r(c, 9, 12, 14, 6, '#40e0d0'); r(c, 13, 4, 2, 5, '#888'); r(c, 12, 20, 8, 2, '#ff4fa0'); },
  owner_mask: (c) => { r(c, 7, 4, 18, 22, '#e8e4d8'); r(c, 10, 10, 4, 4, '#111'); r(c, 18, 10, 4, 4, '#111'); r(c, 11, 19, 10, 2, '#111'); r(c, 9, 17, 2, 2, '#111'); r(c, 21, 17, 2, 2, '#111'); },
  e_photo: (c) => { r(c, 5, 5, 22, 24, '#eee'); r(c, 7, 7, 18, 15, '#666'); r(c, 10, 11, 4, 9, '#222'); r(c, 18, 11, 4, 9, '#222'); r(c, 11, 9, 3, 3, '#bbb'); r(c, 19, 9, 3, 3, '#bbb'); },
  e_contract: (c) => { r(c, 6, 3, 20, 26, '#ececec'); for (let i = 0; i < 6; i++) r(c, 9, 7 + i * 3, 14, 1, '#888'); r(c, 9, 23, 14, 4, '#c41e3a'); },
  e_letter: (c) => { r(c, 4, 8, 24, 17, '#e8e8e8'); r(c, 4, 8, 12, 9, '#cfcfcf'); r(c, 16, 8, 12, 9, '#d8d8d8'); r(c, 14, 15, 4, 3, '#555'); },
  e_ticket: (c) => { r(c, 4, 9, 24, 14, '#ddd'); r(c, 8, 9, 1, 14, '#999'); for (let i = 0; i < 3; i++) r(c, 11, 12 + i * 3, 14, 1, '#666'); },
  e_matches: (c) => { r(c, 6, 9, 20, 14, '#333'); r(c, 6, 9, 20, 3, '#6a8ad0'); for (let i = 0; i < 4; i++) { r(c, 9 + i * 4, 4, 2, 6, '#d8c8a0'); r(c, 9 + i * 4, 3, 2, 2, '#a3122a'); } },
};
export function itemIcon(id: string): string {
  const hit = cache.get(id); if (hit) return hit;
  const cv = document.createElement('canvas'); cv.width = cv.height = 32; const c = cv.getContext('2d')!;
  (DRAW[id] || ((c: C) => { r(c, 6, 6, 20, 20, '#8a7a5a'); r(c, 9, 9, 14, 14, '#d4ae48'); }))(c);
  // тёмная обводка, как у спрайтов
  const img = c.getImageData(0, 0, 32, 32), d = img.data, src = new Uint8ClampedArray(d); const op = (x: number, y: number) => x >= 0 && y >= 0 && x < 32 && y < 32 && src[(y * 32 + x) * 4 + 3] > 40;
  for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) if (!op(x, y) && (op(x - 1, y) || op(x + 1, y) || op(x, y - 1) || op(x, y + 1))) { const i = (y * 32 + x) * 4; d[i] = 22; d[i + 1] = 17; d[i + 2] = 20; d[i + 3] = 255; }
  c.putImageData(img, 0, 0); const u = cv.toDataURL(); cache.set(id, u); return u;
}
