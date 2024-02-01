<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 20:17:34
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 21:19:07
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
      <a-button size="large" block type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang='ts'>
import { defineOptions, reactive, ref } from 'vue'
import { Form as AForm, FormItem as AFormItem, Input as AInput, InputPassword as AInputPassword, Button as AButton, notification, Row as ARow, Col as ACol, Checkbox as ACheckBox } from 'ant-design-vue'
import { LoginParams } from '@/types/services/login';
import { login } from '@/services/login'
defineOptions({
  name: 'LoginForm'
})
// 登录表单
const loginForm = reactive<LoginParams>({
  phone: '',
  password: '',
  md5_password: ''
})
const rememberMe = ref(false)
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
  try {
    const res = await login(loginForm)
    console.log('res', res)
  } catch (error) {
    console.log('error', error)
  }
}
</script>
<style lang='less' scoped>
.login-form-view {}
</style>
