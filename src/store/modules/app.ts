/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:32:25
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-12 14:27:46
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/modules/app.ts
 * @Description: 工程持久化数据
 */
export default {
  namespaced: true,
  state: () => {
    return {
      loading: false // 全局loading
    }
  },
  mutations: {
    // 设置全局loading
    setLoading(state, value: boolean) {
      state.loading = value
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
    }
  }
}
