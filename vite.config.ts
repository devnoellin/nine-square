import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@css': resolve(__dirname, 'src/assets/css'),
    }
  },
})
