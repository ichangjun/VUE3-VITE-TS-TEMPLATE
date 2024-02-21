/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:21:45
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 16:03:01
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/getters.ts
 * @Description: getters 取数据
 */
export default {
  // 全局loading
  loading: (state) => state.app.loading,
  // 主题模式
  darkMode: (state) => state.app.darkMode,
  // 记住我
  rememberMe: (state) => state.auth.rememberMe,
  // 手机号
  phone: (state) => state.auth.phone,
  // 密码
  password: (state) => state.auth.password,
  // 菜单栏的展开折叠
  menuCollapsed: (state)=> state.app.menuCollapsed
}
