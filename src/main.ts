import '@fontsource/lora/cyrillic-400.css'; import '@fontsource/lora/cyrillic-400-italic.css'; import '@fontsource/lora/cyrillic-700.css'; import '@fontsource/lora/latin-400.css';
import '@fontsource/playfair-display/cyrillic-400.css'; import '@fontsource/playfair-display/cyrillic-700.css'; import '@fontsource/playfair-display/latin-400.css'; import '@fontsource/playfair-display/cyrillic-400-italic.css';
import '@fontsource/marck-script/cyrillic-400.css'; import '@fontsource/marck-script/latin-400.css';
import '@fontsource/pixelify-sans/cyrillic-400.css'; import '@fontsource/pixelify-sans/latin-400.css';
import '@fontsource/caveat/cyrillic-400.css'; import '@fontsource/bad-script/cyrillic-400.css'; import '@fontsource/neucha/cyrillic-400.css'; import '@fontsource/amatic-sc/cyrillic-700.css';
import './styles.css';
import { G } from './world/game';
import { ui } from './ui/ui';
import { audio } from './core/audio';

async function boot() {
  const bootEl = document.getElementById('boot')!, st = document.getElementById('boot-s')!;
  try {
    // шрифты нужны до генерации пиксельных текстур с текстом
    await Promise.all(['8px "Pixelify Sans"', '16px Lora', '16px "Playfair Display"', '16px "Marck Script"', '16px Aurelia', '16px Cintarini', '16px Highcrest', '16px Lombardina', '16px Caveat', '16px "Bad Script"', '16px Neucha', '700 16px "Amatic SC"'].map((f) => document.fonts.load(f, 'AБя').catch((e) => console.warn('[fonts]', f, e))));
    ui.init(); G.boot(document.getElementById('game') as HTMLCanvasElement);
    const unlock = () => { audio.init(); }; window.addEventListener('pointerdown', unlock); window.addEventListener('keydown', unlock);
    // Вход: один жест пользователя включает звук и полноэкранный режим (браузеры не позволяют сделать это автоматически).
    st.innerHTML = '<span class="boot-enter">нажмите, чтобы войти в театр</span>'; bootEl.classList.add('ready');
    await new Promise<void>((res) => { const go = () => { window.removeEventListener('keydown', go, true); bootEl.removeEventListener('pointerdown', go); audio.init(); const de: any = document.documentElement; try { const r = (de.requestFullscreen || de.webkitRequestFullscreen)?.call(de, { navigationUI: 'hide' }); if (r && r.catch) r.catch((e: any) => console.warn('[fullscreen]', e)); } catch (e) { console.warn('[fullscreen] недоступен', e); } res(); }; window.addEventListener('keydown', go, true); bootEl.addEventListener('pointerdown', go); });
    await ui.mainMenu(); bootEl.style.opacity = '0'; setTimeout(() => bootEl.remove(), 700);
  } catch (e: any) {
    console.error('[boot] игра не запустилась', e); st.textContent = 'Не удалось запустить игру: ' + (e?.message || e) + '. Проверьте, что браузер поддерживает WebGL, и обновите страницу.';
  }
}
boot();
