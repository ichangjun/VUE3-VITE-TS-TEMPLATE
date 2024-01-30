/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:21:45
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-15 16:28:55
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/getters.ts
 * @Description: getters 取数据
 */
export default {
  // 全局loading
  loading: (state) => state.app.loading,
  // 主题模式
  darkMode: (state) => state.app.darkMode
}
