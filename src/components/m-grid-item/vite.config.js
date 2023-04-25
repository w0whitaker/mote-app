import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/m-grid.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
      alias: {
        '@components': '/Users/william/development/mote-app/src/components/',
      },
    },
  },
});
