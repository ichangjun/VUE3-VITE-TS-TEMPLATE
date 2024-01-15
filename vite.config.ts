/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-15 10:20:32
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/vite.config.ts
 * @Description: 工程配置文件
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // vue3 jsx

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8089,
    proxy: {
      '/musicApi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/musicApi/, ''),
      },
    }
  }
})
