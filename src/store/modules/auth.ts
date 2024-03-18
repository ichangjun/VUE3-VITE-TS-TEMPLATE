/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 14:28:34
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-18 17:32:32
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/modules/auth.ts
 * @Description: 用户登录信息存储
 */
import { Profile } from "@/types/services/account"
import { LoginParams } from "@/types/services/login"
import {notification} from 'ant-design-vue'

export default {
  namespaced: true,
  state: () => ({
    rememberMe: false,
    token: '',
    phone: '',
    password: '',
    profile: null
  }),
  mutations: {
    setRememberMe(state, value) {
      state.rememberMe = value
    },
    setToken(state, value) {
      state.token = value
    },
    // 当用户登录成功&用户勾选【记住我】后，将用户信息存储到vuex中
    setLoginInfo(state, info: LoginParams) {
      state.phone = info.phone
      state.password = info.password
    },
    setProfile(state, value: Profile) {
      state.profile = value
    }
  },
  actions: {
    setRememberMe({ commit }, value) {
      commit('setRememberMe', value)
    },
    setToken({ commit }, value) {
      commit('setToken', value)
    },
    setLoginInfo({ commit }, info: LoginParams) {
      commit('setLoginInfo', info)
    },
    setProfile({ commit }, value: Profile) {
      return new Promise((resolve) => {
        commit('setProfile', value)
          // 提示登录成功，跳转首页
      notification.success({
        message: '登录成功',
        description: `欢迎换来，${value.nickname}`,
        duration: 3
      })
        resolve('success')
      })
    }
  }
}
