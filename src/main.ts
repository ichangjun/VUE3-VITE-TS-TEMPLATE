/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-11 16:18:52
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/main.ts
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import { install } from '@/components/index.ts'
import './styles/reset.css'
import App from './App.tsx'
import router from './router'
import store from './store'

const app = createApp(App)
install(app)
app.use(store).use(router).mount('#app')
