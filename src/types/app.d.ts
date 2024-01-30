/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-15 16:22:05
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-15 16:23:01
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/app.d.ts
 * @Description: app store state
 */
import { ThemeEnum } from '@/enums/app-emuns'
export interface AppStoreState {
  loading: boolean // 全局loading
  darkMode: ThemeEnum // 暗黑模式
}
