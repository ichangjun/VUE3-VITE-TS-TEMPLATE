<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 20:17:34
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-18 17:32:58
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/components/login-form.vue
 * @Description: 登录表单
-->
<template>
  <div class="login-title mb-4 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">登录</div>
  <a-form :model="loginForm" name="basic" class="login-form-view p-4" autocomplete="off" @finish="handleLogin"
    @keypress.enter="handleLogin">
    <a-form-item name="phone" :rules="[{ required: true, message: '请输入您的手机号!' }]">
      <a-input size="large" v-model:value="loginForm.phone" placeholder="手机号" />
    </a-form-item>

    <a-form-item name="password" :rules="[{ required: true, message: '请输入您的密码!' }]">
      <a-input-password size="large" visibilityToggle v-model:value="loginForm.password" placeholder="密码" />
    </a-form-item>

    <a-row>
      <a-col :span="12">
        <a-form-item name="remember" valuePropName="checked">
          <a-check-box v-model:checked="rememberMe" size="small">记住我</a-check-box>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item name="remember" valuePropName="checked">
          <a-button type="link" size="small" class="float-right">忘记密码?</a-button>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item>
      <a-button size="large" block type="primary" html-type="submit" :loading="loginLoading">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang='ts'>
import { defineOptions, reactive, ref } from 'vue'
import { Form as AForm, FormItem as AFormItem, Input as AInput, InputPassword as AInputPassword, Button as AButton, notification, Row as ARow, Col as ACol, Checkbox as ACheckBox } from 'ant-design-vue'
import { LoginParams, LoginResponse } from '@/types/services/login';
import { login } from '@/services/login'
import { Md5 } from 'ts-md5'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'LoginForm'
})
const store = useStore()
const router = useRouter()
// 登录表单
const loginForm = reactive<LoginParams>({
  phone: '17714331167',
  password: 'Changjun@1992',
  md5_password: ''
})
const loginLoading = ref(false)
const rememberMe = ref(store.getters.rememberMe)
if (rememberMe.value) {
  loginForm.phone = store.getters.phone
  loginForm.password = store.getters.password
}
// 登录
const handleLogin = async () => {
  if (loginForm.phone === '') {
    notification.open({
      message: '提示',
      description: '请输入手机号',
      duration: 3
    })
    return
  }
  if (loginForm.password === '') {
    notification.open({
      message: '提示',
      description: '请输入密码',
      duration: 3
    })
    return
  }
  // 密码进行MD5加密，后端进行解密
  loginForm.md5_password = Md5.hashStr(loginForm.password).toString()
  try {
    loginLoading.value = true
    const res: LoginResponse = await login({
      phone: loginForm.phone,
      md5_password: loginForm.md5_password
    })
    if (res && res.code === 200) {
      await store.dispatch('auth/setToken', res.token)
      await store.dispatch('auth/setRememberMe', rememberMe.value)
      // 是否需要记住密码
      if (rememberMe.value) {
        await store.dispatch('auth/setLoginInfo', {
          phone: loginForm.phone,
          password: loginForm.password
        })
      }
      // 持久化用户信息
      await store.dispatch('auth/setProfile', res.profile)
      router.push('/dashboard')
    }

    loginLoading.value = false
  } catch (error) {
    loginLoading.value = false
  }
}
</script>
