/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:21:45
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-20 22:00:14
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
  // 用户信息
  userInfo: (state) => state.auth.profile,
  token: (state) => state.auth.token,
  // 密码
  password: (state) => state.auth.password,
  // 菜单栏的展开折叠
  menuCollapsed: (state) => state.app.menuCollapsed,
  // 多标签页
  tabList: (state) => state.tabMenu.tabList
}
