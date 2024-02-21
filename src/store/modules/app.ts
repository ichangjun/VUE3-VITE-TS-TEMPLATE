/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:32:25
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 17:47:05
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/modules/app.ts
 * @Description: 工程持久化数据
 */
import { ThemeEnum } from '@/enums/app-emuns';
import {AppStoreState} from '@/types/app'
export default {
  namespaced: true,
  state: ():AppStoreState =>( {
    loading: false, // 全局loading
    darkMode: ThemeEnum.LIGHT, // 暗黑模式
    menuCollapsed: false // 菜单栏是否展开
  }),
  mutations: {
    // 设置全局loading
    setLoading(state, value: boolean) {
      state.loading = value
    },
    // 设置主题模式
    setDarkMode(state, value: ThemeEnum) {
      state.darkMode = value
    },
    // 设置菜单栏的展开/折叠
    setMenuCollapsed(state, value: boolean) {
      state.menuCollapsed = value
    }
  },
  actions: {
    // 隐藏loading
    hideLoading({ commit }) {
      commit('setLoading', false)
    },
    // 显示loading
    showLoading({ commit }) {
      commit('setLoading', true)
    },
     // 设置主题模式
    setDarkMode({ commit }, value: ThemeEnum) {
      commit('setDarkMode', value)
    },
    // 设置菜单栏的展开/折叠
    setMenuCollapsed({ commit }, value: boolean) {
      commit('setMenuCollapsed', value)
    }
  }
}
