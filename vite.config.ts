/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 10:57:27
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/vite.config.ts
 * @Description: 工程配置文件
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#0960bd',
        },
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/reset.less')}";`,
        javascriptEnabled: true,
      }
    }
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
