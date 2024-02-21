<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-15 09:56:02
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 16:40:57
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/index.vue
 * @Description: 登录页
-->
<template>
  <div class="login-view relative w-full h-full overflow-hidden px-4">
    <div class="container relative h-full py-2 mx-auto sm:px-10">
      <div class="flex h-full">
        <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
          <app-logo></app-logo>
          <div class="my-auto flex items-start flex-col">
            <img src="../../../assets/images/login-box-bg.svg" class="w-1/2 -mt-16" />
            <div class="mt-10 font-medium text-white description">{{ description }}</div>
          </div>
        </div>
        <div class="flex w-full h-full py-5 xl:h-auto xl:py-0  xl:my-0 xl:w-6/12 duration-200">
          <div
            class="login-form relative px-5 py-8 mx-auto my-auto rounded-md shadow-md  xl:bg-transparent xl:shadow-none w-[480px]">
            <login-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineOptions } from 'vue'
import AppLogo from '../../../components/i-application/src/app-logo.vue'
import { useGlobSetting } from '../../../hooks/setting/use-glob-setting'
import LoginForm from './components/login-form.vue'
defineOptions(
  {
    name: 'Login'
  }
)
// 描述
const { description } = useGlobSetting()
</script>
<style lang="less" scoped>
@dark-bg: #293146;

.login-view {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url("../../../assets/images/login-bg.svg");
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: auto 100%;

    @media (max-width: @screen-xl) {
      display: none;
    }
  }

  .description {
    font-size: 30px;
  }
}

@media (max-width: @screen-xl) {
  .login-view {
    background-color: @dark-bg;

    .login-form {
      background-color: #ffffff;
    }
  }
}
</style>
