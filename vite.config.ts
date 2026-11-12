import { defineConfig } from 'vite';
import { resolve } from 'path';
// GitHub Pages публикует корень ветки main. Поэтому исходный HTML лежит в web/, а сборка
// кладёт index.html + assets/ + fonts/ прямо в корень репозитория. base './' — относительные пути,
// игра работает и по адресу /applause/, и локально.
export default defineConfig({
  root: resolve(__dirname, 'web'),
  publicDir: resolve(__dirname, 'public'),
  base: './',
  server: { fs: { allow: [resolve(__dirname)] } },
  build: { outDir: resolve(__dirname), emptyOutDir: false, assetsDir: 'assets', chunkSizeWarningLimit: 900, target: 'es2020' },
});
