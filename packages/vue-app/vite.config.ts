import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'vue-app': './src/index.ts'
      },
      external: ['vue', 'lodash.debounce'],
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      vue: 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    }
  }
})
