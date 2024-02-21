<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 18:05:27
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-21 14:36:20
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/menu/index.vue
 * @Description: 左侧菜单
-->
<template>
  <template v-for="menuItem in menuList">
    <Menu.Item v-if="!hasChildren(menuItem)" :key="menuItem.path">
      <template #icon>
        <i-svg-icon v-if="menuItem.icon" :icon="menuItem.icon" color="rgba(255,255,255,.65)" size="22px" />
      </template>
      <span>{{ menuItem.title }}</span>
    </Menu.Item>
    <Menu.SubMenu v-else :title="menuItem.title" :key="menuItem.key">
      <template #icon>
        <i-svg-icon :icon="menuItem.icon" color="rgba(255,255,255,.65)" size="22px" />
      </template>
      <SiderMenu :menuList="menuItem.children" />
    </Menu.SubMenu>
  </template>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, PropType } from 'vue'
import { Menu } from 'ant-design-vue'
import { MenuItem } from '../../../../types/menu';
defineOptions({
  name: 'SiderMenu'
})
defineProps({
  menuList: {
    type: Array as PropType<MenuItem[]>
  }
})
const hasChildren = (item: MenuItem) => {
  return item?.children
}

</script>
