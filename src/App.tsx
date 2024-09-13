/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-13 10:31:22
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
 * @Description: 工程入口文件
 */
import { defineComponent } from 'vue'
import Logo from '@/assets/images/logo.jpg'
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id='app'>
        <i-echarts />
        <i-svg-icon />
        <img src={Logo} />
        <h1>hello world</h1>
        <router-view />
      </div>
    )
  }
})
