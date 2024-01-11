/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-11 15:48:49
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
 * @Description: 工程入口文件
 */
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app">
        <router-view />
      </div>
    )
  }
})

