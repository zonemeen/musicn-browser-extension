import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    Layouts(),
    Pages({
      extensions: ['vue']
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts'
    }),
    Inspect({
      enabled: false,
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ]
  },
})
