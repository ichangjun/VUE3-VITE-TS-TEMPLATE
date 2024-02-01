/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-15 15:44:17
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-30 22:36:25
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/components/app-dark-mode-toggle.tsx
 * @Description: 主题切换组件
 */
import { defineComponent } from 'vue'

export  default defineComponent({
  name: 'AppDarkModeToggle',
  setup(props, ctx) {
    return () => (
      <div class={'dark-switch-inner'}>
        <i-svg-icon icon='sun'></i-svg-icon>
        <i-svg-icon icon='moon'></i-svg-icon>
      </div>
    )
  },
})
