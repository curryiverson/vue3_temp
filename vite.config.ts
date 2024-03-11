import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
})
