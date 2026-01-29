import type { UserConfig } from 'vite';
import path from 'path';

export default {
  root: './app',

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './app'),
      '@assets': path.resolve(__dirname, './app/assets'),
      '@helpers': path.resolve(__dirname, './app/ts/helpers'),
      '@scss': path.resolve(__dirname, './app/scss'),
      '@ts': path.resolve(__dirname, './app/ts'),
    },
  },

  assetsInclude: ['./app/assets/**/*.*'],

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'slash-div'],
        api: 'modern-compiler',
      },
    },
  },

  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, './dist'),
  },

  plugins: [],
} satisfies UserConfig;
