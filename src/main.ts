/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 10:38:40
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/main.ts
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import { install } from '@/components/index.ts'
import 'tailwindcss/tailwind.css'
import '@/styles/preflight.css'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.less'
import 'virtual:svg-icons-register'
const app = createApp(App)
install(app)
app.use(store).use(router).mount('#app')
