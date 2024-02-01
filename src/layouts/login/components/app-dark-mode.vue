<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:12:08
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 18:13:24
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/components/app-dark-mode.vue
 * @Description: 主题切换
-->
<template>
  <div class="dark-switch-inner">
    <i-svg-icon icon='sun'></i-svg-icon>
    <i-svg-icon icon='moon'></i-svg-icon>
  </div>
</template>
<script lang='ts' setup>
import { defineOptions } from 'vue'
defineOptions({
  name: 'AppDarkMode',
})
</script>
<style lang='less' scoped>
.page {}
</style>
