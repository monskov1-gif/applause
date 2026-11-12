import '@fontsource/lora/cyrillic-400.css'; import '@fontsource/lora/cyrillic-400-italic.css'; import '@fontsource/lora/cyrillic-700.css'; import '@fontsource/lora/latin-400.css';
import '@fontsource/playfair-display/cyrillic-400.css'; import '@fontsource/playfair-display/cyrillic-700.css'; import '@fontsource/playfair-display/latin-400.css'; import '@fontsource/playfair-display/cyrillic-400-italic.css';
import '@fontsource/marck-script/cyrillic-400.css'; import '@fontsource/marck-script/latin-400.css';
import '@fontsource/pixelify-sans/cyrillic-400.css'; import '@fontsource/pixelify-sans/latin-400.css';
import './styles.css';
import { G } from './world/game';
import { ui } from './ui/ui';
import { audio } from './core/audio';

async function boot() {
  const bootEl = document.getElementById('boot')!, st = document.getElementById('boot-s')!;
  try {
    // шрифты нужны до генерации пиксельных текстур с текстом
    await Promise.all(['8px "Pixelify Sans"', '16px Lora', '16px "Playfair Display"', '16px "Marck Script"', '16px Aurelia', '16px Cintarini', '16px Highcrest', '16px Lombardina'].map((f) => document.fonts.load(f, 'AБя').catch((e) => console.warn('[fonts]', f, e))));
    ui.init(); G.boot(document.getElementById('game') as HTMLCanvasElement);
    const unlock = () => { audio.init(); }; window.addEventListener('pointerdown', unlock); window.addEventListener('keydown', unlock);
    await ui.mainMenu(); bootEl.style.opacity = '0'; setTimeout(() => bootEl.remove(), 700);
  } catch (e: any) {
    console.error('[boot] игра не запустилась', e); st.textContent = 'Не удалось запустить игру: ' + (e?.message || e) + '. Проверьте, что браузер поддерживает WebGL, и обновите страницу.';
  }
}
boot();
