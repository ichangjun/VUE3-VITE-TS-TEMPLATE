<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 16:51:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-02 18:14:58
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/header/index.vue
 * @Description: 头部
-->
<template>
  <Layout.Header class="layout-header-view">
    <div @click.stop="handleCollapsed()">
      <DoubleRightOutlined v-if="getCollapsed"></DoubleRightOutlined>
      <DoubleLeftOutlined v-else></DoubleLeftOutlined>
    </div>
  </Layout.Header>
</template>
<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { Layout } from 'ant-design-vue'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
defineOptions({
  name: 'LayoutHeader'
})
const store = useStore()
const getCollapsed = computed(() => {
  return store.getters.menuCollapsed
})
const handleCollapsed = () => {
  store.dispatch('app/setMenuCollapsed', !getCollapsed.value)
}
</script>
<style lang='less' scoped>
.layout-header-view {
  background-color: #fff;
}
</style>
