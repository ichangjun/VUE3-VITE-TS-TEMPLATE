/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-12 14:27:31
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
 * @Description: 工程入口文件
 */

<template>
  <div id="app" class="app-page-view">
    <spin :spinning="loading" tip="加载中"></spin>
    <router-view />
  </div>
</template>
<script lang='ts' setup>
import { defineOptions, computed } from 'vue'
import { Spin } from 'ant-design-vue'
import { useStore } from 'vuex'
defineOptions({
  name: 'App',
})
const store = useStore()
const loading = computed(() => {
  return store.getters.loading
})
</script>

