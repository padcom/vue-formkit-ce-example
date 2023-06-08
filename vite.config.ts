import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore because no types available for this library
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
  ],
})
