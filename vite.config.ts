import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin()],
  root: './src',
  build: {
    outDir: '../dist',
  },
});
