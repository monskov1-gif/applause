// Перед сборкой удаляем прошлые хешированные файлы, чтобы в корне не копился мусор.
import { rmSync } from 'fs';
rmSync(new URL('./assets', import.meta.url), { recursive: true, force: true });
