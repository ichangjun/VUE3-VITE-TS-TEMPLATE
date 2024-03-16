/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:13:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-16 16:58:33
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/modules/tab-menu.ts
 * @Description: 多标签页持久化数据
 */
import { TabProps, TabBarState } from '@/types/tab-menu'
import { tabWhiteList } from '@/constants'


export default {
  namespaced: true,
  state: (): TabBarState => ({
    allTabMenu: [],
    tabList: []
  }),
  mutations: {

    // 初始化默认的tab-menu
    initTabDefault(state, list: TabProps[] = []) {
      state.allTabMenu = list
      state.tabList = list.filter((item: TabProps) => item.isShow)
    },
    // 更新tab
    updateTab(state, path: string) {
      if (state.tabList.some((item: TabProps) => item.fullPath === path)) {
        state.tabList = state.tabList.map((item: TabProps) => {
          item.isCurrent = item.fullPath === path
          return {...item, isCurrent: item.fullPath === path}
        })
      } else {
        const item = state.allTabMenu.find((item: TabProps) => item.fullPath === path)

        // 所有的置为非当前
        state.tabList = state.tabList.map((item: TabProps) => {
          return {...item, isCurrent: false}
        })
        // 添加新的tab
        state.tabList.push({...item, isCurrent: true, isShow: true})
      }
    },
    updateContextTab(state, path: string) {
      if (path) {
        state.tabList = state.tabList.map((item: TabProps) => {
          return { ...item, isContext: item.fullPath === path }
        })
      } else {
        state.tabList = state.tabList.map((item: TabProps) => {
          return { ...item, isContext: false }
        })
      }
    }
  },
  actions: {
    // 初始化tab-menu
    initTabDefault({ commit }, tabList: TabProps[]) {
      commit('initTabDefault', tabList)
    },
    // 更新tab
    updateTab({ commit }, path: string) {
      if (tabWhiteList.includes(path)) return
      commit('updateTab', path)
    },
    // 右键菜单状态监听
    updateContextTab({ commit }, path: string) {
      commit('updateContextTab', path)
    },
    // 删除tab
    removeTab({ state, commit }, tab: TabProps) {
      return new Promise((resolve, reject) => {
        try {
          const index = state.tabList.findIndex((item: TabProps) => item.fullPath === tab.fullPath)
          const preTab = state.tabList[index - 1]
          commit('updateTab', preTab.fullPath)
          state.tabList.splice(index, 1)
          resolve(preTab.fullPath)
        } catch (error) {
          reject('关闭当前tab标签失败!')
        }
      })
    }
  }
}
