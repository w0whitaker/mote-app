import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/m-box.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
