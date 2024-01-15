/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 15:15:27
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-11 16:52:52
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/index.tsx
 * @Description: 业务路由主页
 */


import { defineComponent, KeepAlive } from 'vue'
export default defineComponent({
  name: 'Main',
  setup() {
    return () => (
<div id="main-view">
        <router-view>
          {
            ({ Component }) => {
              return (
                <KeepAlive>
                  <Component />
                </KeepAlive>
              )}
          }
        </router-view>
      </div>
    )
  }
})
