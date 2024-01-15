<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-15 09:56:02
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-15 10:05:24
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/index.vue
 * @Description: 登录页
-->
<template>
  <div class="login-view relative w-full h-full overflow-hidden px-4">
    <a-form :model="loginForm" name="basic" :label-col="{ span: 2 }" :wrapper-col="{ span: 8 }" autocomplete="off"
      @finish="handleLogin">
      <a-form-item label="手机号" name="phone" :rules="[{ required: true, message: '请输入您的手机号!' }]">
        <a-input v-model:value="loginForm.phone" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入您的密码!' }]">
        <a-input-password v-model:value="loginForm.password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { LoginParams } from '@/types/services/login';
import { defineOptions, reactive } from 'vue'
import { Form as AForm, FormItem as AFormItem, Input as AInput, InputPassword as AInputPassword, Button as AButton, notification } from 'ant-design-vue'
import { login } from '@/services/login'
defineOptions(
  {
    name: 'Login'
  }
)
// 登录表单
const loginForm = reactive<LoginParams>({
  phone: '',
  password: '',
  md5_password: ''
})
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
