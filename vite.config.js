import glob from 'glob';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { globalStylesOptions } from './global.styles';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      ViteImageOptimizer({
        exclude: /^sprite.svg$/,
        png: {
          quality: 60,
        },
        jpeg: {
          quality: 60,
        },
        jpg: {
          quality: 60,
        },
        webp: {
          quality: 60,
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: globalStylesOptions,
        },
      },
    },
  };
});
