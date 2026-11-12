// Core: состояние игры, настройки, версионированные сохранения (IndexedDB + запасной localStorage).
export const SAVE_VERSION = 3;
const DB_NAME = 'the-other-me-applause';
const STORE = 'saves';
const SETTINGS_KEY = 'tom-applause-settings';

export interface Photo { id: string; img: string; caption: string; subjects: string[]; room: string; }
export interface GameState {
  v: number;
  room: string; spot: string; px?: number; pz?: number;
  chapter: string;                 // подпись текущей главы для слота
  f: Record<string, any>;          // сюжетные флаги и выборы
  inv: string[];                   // предметы
  notes: string[];                 // открытые записи блокнота
  photos: Photo[];
  seen: Record<string, 1>;         // прочитанные реплики (для пропуска)
  mask: string | null;
  time: number;                    // секунды игры
  savedAt?: number;
}
export function newState(): GameState {
  return { v: SAVE_VERSION, room: 'hub_dressing', spot: 'start', chapter: 'Акт I · Приглашение', f: {}, inv: [], notes: [], photos: [], seen: {}, mask: null, time: 0 };
}

export interface Settings {
  music: number; sfx: number; voice: number;
  uiScale: number; quality: 'low' | 'med' | 'high';
  textSpeed: number;               // символов в секунду, 0 = мгновенно
  reduceFlash: boolean; reduceShake: boolean; contrast: boolean;
  rhythmEasy: boolean; rhythmOffset: number;   // мс
  touch: boolean;
}
export const defaultSettings: Settings = {
  music: 0.7, sfx: 0.8, voice: 0.6, uiScale: 1, quality: 'med', textSpeed: 45,
  reduceFlash: false, reduceShake: false, contrast: false, rhythmEasy: false, rhythmOffset: 0,
  touch: typeof window !== 'undefined' && ('ontouchstart' in window) && matchMedia('(pointer: coarse)').matches,
};
export const settings: Settings = loadSettings();
function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...defaultSettings, ...JSON.parse(raw) };
  } catch (e) { console.warn('[settings] не удалось прочитать настройки, используются значения по умолчанию', e); }
  return { ...defaultSettings };
}
export function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }
  catch (e) { console.warn('[settings] не удалось сохранить настройки', e); }
}

// ---------- хранилище ----------
let dbp: Promise<IDBDatabase | null> | null = null;
function db(): Promise<IDBDatabase | null> {
  if (dbp) return dbp;
  dbp = new Promise((res) => {
    try {
      const rq = indexedDB.open(DB_NAME, 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore(STORE);
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => { console.warn('[save] IndexedDB недоступна, используется localStorage', rq.error); res(null); };
    } catch (e) { console.warn('[save] IndexedDB недоступна, используется localStorage', e); res(null); }
  });
  return dbp;
}
async function put(key: string, val: string | null) {
  const d = await db();
  if (!d) { if (val === null) localStorage.removeItem('tom-save-' + key); else localStorage.setItem('tom-save-' + key, val); return; }
  return new Promise<void>((res, rej) => {
    const tx = d.transaction(STORE, 'readwrite');
    if (val === null) tx.objectStore(STORE).delete(key); else tx.objectStore(STORE).put(val, key);
    tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error);
  });
}
async function get(key: string): Promise<string | null> {
  const d = await db();
  if (!d) return localStorage.getItem('tom-save-' + key);
  return new Promise((res, rej) => {
    const rq = d.transaction(STORE).objectStore(STORE).get(key);
    rq.onsuccess = () => res(rq.result ?? null); rq.onerror = () => rej(rq.error);
  });
}

export const SLOTS = ['auto', 'slot1', 'slot2', 'slot3'];
export const SLOT_NAMES: Record<string, string> = { auto: 'Автосохранение', slot1: 'Слот I', slot2: 'Слот II', slot3: 'Слот III' };

/** Приводит сохранение к актуальной версии или возвращает null, если данные непригодны. */
export function migrate(raw: any): GameState | null {
  if (!raw || typeof raw !== 'object' || typeof raw.room !== 'string' || typeof raw.f !== 'object') return null;
  const s: GameState = { ...newState(), ...raw };
  if (!Array.isArray(s.inv)) s.inv = [];
  if (!Array.isArray(s.notes)) s.notes = [];
  if (!Array.isArray(s.photos)) s.photos = [];
  if (!s.seen || typeof s.seen !== 'object') s.seen = {};
  if ((raw.v | 0) > SAVE_VERSION) return null;        // сохранение из будущей версии
  s.v = SAVE_VERSION;
  return s;
}
export async function writeSave(slot: string, s: GameState) {
  s.savedAt = Date.now();
  await put(slot, JSON.stringify(s));
}
export async function readSave(slot: string): Promise<{ state: GameState | null; broken: boolean }> {
  const raw = await get(slot);
  if (!raw) return { state: null, broken: false };
  try {
    const st = migrate(JSON.parse(raw));
    return { state: st, broken: !st };
  } catch (e) {
    console.warn(`[save] слот ${slot} повреждён`, e);
    return { state: null, broken: true };
  }
}
export async function deleteSave(slot: string) { await put(slot, null); }
export function exportSave(s: GameState): string { return JSON.stringify(s); }
export function importSave(text: string): GameState | null {
  try { return migrate(JSON.parse(text)); } catch (e) { console.warn('[save] импорт: файл не является сохранением', e); return null; }
}
