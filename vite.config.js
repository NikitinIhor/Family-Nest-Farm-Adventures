import glob from 'glob';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    base: '/family-nest-farm-adventures/',
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
      assetsDir: 'assets',
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
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: globalStylesOptions,
      //   },
      // },
      preprocessorOptions: {
        scss: {},
      },
    },
  };
});
