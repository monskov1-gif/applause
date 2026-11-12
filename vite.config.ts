import { defineConfig } from 'vite';
// base './' — относительные пути: игра работает и в корне, и в /repository-name/ на GitHub Pages.
export default defineConfig({
  base: './',
  build: { outDir: 'dist', chunkSizeWarningLimit: 900, target: 'es2020' },
});
