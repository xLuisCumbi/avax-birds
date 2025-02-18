import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        birds: './birds.html',
        crush: './games/crush/index.html'
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  base: './',
  publicDir: 'public'
})