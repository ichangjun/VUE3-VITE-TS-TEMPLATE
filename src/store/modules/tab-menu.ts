/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:13:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-19 22:38:24
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
    // 追加&删除更新tab
    updateTab(state, path: string) {
      if (state.tabList.some((item: TabProps) => item.fullPath === path)) {
        state.tabList = state.tabList.map((item: TabProps) => {
          item.isCurrent = item.fullPath === path
          return {...item, isCurrent: item.fullPath === path}
        })
      } else {
        const item = state.allTabMenu.find((item: TabProps) => item.fullPath === path)
        // 所有的tab置为非当前
        state.tabList = state.tabList.map((item: TabProps) => {
          return {...item, isCurrent: false}
        })
        // 添加新的tab
        state.tabList.push({...item, isCurrent: true, isShow: true})
      }
    },
    // tab右键菜单状态监听
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
    },
    // 删除其他tab
    removeOtherTab({ state, commit }, path: string) {
      return new Promise((resolve, reject) => {
        try {
          const _newTabs = state.tabList.filter((item: TabProps) => item.fullPath === path || item.canClose === false)
          commit('updateTab', path)
          state.tabList = _newTabs
          resolve('关闭其他tab标签成功!')
        } catch (error) {
          reject('关闭其他tab标签失败!')
        }
      })
    },
    // 删除所有tab
    removeAllTab({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          const _newTabs = state.tabList.filter((item: TabProps) => item.canClose === false)
          commit('updateTab', state.tabList[0].fullPath)
          state.tabList = _newTabs
          resolve(state.tabList[0].fullPath)
        } catch (error) {
          reject('关闭所有tab标签失败!')
        }
      })
    }
  }
}
