/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-10 18:26:06
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
 * @Description: 工程入口文件
 */
import { defineComponent } from 'vue';
import Logo from '@/assets/images/logo.jpg';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app">
        <i-echarts />
        <i-svg-icon />
        <img src={Logo} />
        <h1>hello world</h1>
        <router-view />
      </div>
    )
  }
})

