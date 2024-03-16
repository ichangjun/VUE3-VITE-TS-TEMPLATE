import { Profile } from "@/types/services/account"
import { LoginParams } from "@/types/services/login"

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
      commit('setProfile', value)
    }
  }
}
