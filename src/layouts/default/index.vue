<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:14:50
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-04 11:21:23
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/index.vue
 * @Description: 内容框架页面
-->
<template>
  <Layout id="main-view" class="w-full h-full">
    <LayoutSider />
    <Layout>
      <LayoutHeader />
      <LayoutContent />
    </Layout>
  </Layout>
</template>
<script lang='ts' setup>
import { defineOptions } from 'vue'
import { Layout } from 'ant-design-vue'
import LayoutHeader from './components/header/index.vue'
import LayoutContent from './components/content/index.vue'
import LayoutSider from './components/sider/index.vue'
defineOptions({
  name: 'Layouts'
})
</script>
<style lang='less' scoped>
</style>
