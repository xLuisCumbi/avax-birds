import { defineConfig } from 'vite';

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
        emptyOutDir: true,
        assetsInlineLimit: 4096, // 4KB
        assetsInclude: ['**/*.png', '**/*.jpg']
    },
    base: '/', // Use absolute base so paths begin with /
    publicDir: 'public'
});
