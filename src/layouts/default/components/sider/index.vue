<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-04 11:07:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 19:22:47
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/sider/index.vue
 * @Description: 左侧菜单栏
-->
<template>
  <Layout.Sider theme="light" class='layout-menu-view' v-model:collapsed="getCollapsed">
    <Menu theme='light' mode='inline' :selected-keys="selectedKeys" :open-keys="openKeys" :subMenuOpenDelay="0.5"
      :inline-indent="12" @click="handleMenuClick">
      <sider-menu :menu-list="menuList" />
    </Menu>
  </Layout.Sider>
</template>
<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { Layout, Menu } from 'ant-design-vue'
import { useStore } from 'vuex'
import { useLayoutMenu } from './useLayoutMenu'
import SiderMenu from './menu.vue'
defineOptions({
  name: 'LayoutSider'
})
const store = useStore()
const { selectedKeys, openKeys, menuList, handleMenuClick, initTabMenuList } = useLayoutMenu()
initTabMenuList()

const getCollapsed = computed(() => {
  return store.getters.menuCollapsed
})
</script>
