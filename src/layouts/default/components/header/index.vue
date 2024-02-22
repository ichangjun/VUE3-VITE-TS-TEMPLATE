<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 16:51:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 19:17:27
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/header/index.vue
 * @Description: 头部
-->
<template>
  <Layout.Header class="layout-header-view" style="padding-inline: 24px;">
    <div class="flex">
      <div class="left pr-4" @click.stop="handleCollapsed()">
        <MenuUnfoldOutlined v-if="getCollapsed"></MenuUnfoldOutlined>
        <MenuFoldOutlined v-else></MenuFoldOutlined>
      </div>
      <div class="right flex-1">
        <div class="flex justify-end items-center space-x-4 h-full">
          <a-tooltip title="搜索">
            <a-button shape="circle" size="small" class="flex items-center justify-center">
              <template #icon>
                <i-svg-icon icon="search" size="16" color="rgb(78, 89, 105)"></i-svg-icon>
              </template>
            </a-button>
          </a-tooltip>
          <a-tooltip title="点击切换为暗黑模式">
            <a-button shape="circle" size="small" class="flex items-center justify-center">
              <template #icon>
                <i-svg-icon icon="sun" size="15"></i-svg-icon>
              </template>
            </a-button>
          </a-tooltip>
          <a-tooltip title="消息通知" class="flex items-center justify-center">
            <a-button shape="circle" size="small">
              <template #icon>
                <i-svg-icon icon="distance" size="20" color="rgb(78, 89, 105)"></i-svg-icon>
              </template>
            </a-button>
          </a-tooltip>
          <a-tooltip title="全屏">
            <a-button shape="circle" size="small" class="flex items-center justify-center">
              <template #icon>
                <i-svg-icon icon="full-screen" size="12" color="rgb(78, 89, 105)"></i-svg-icon>
              </template>
            </a-button>
          </a-tooltip>
          <a-space class="pl-2">
            <a-dropdown placement="bottomLeft" :arrow="{ pointAtCenter: true }">
              <span class="flex">
                <avatar :src="userInfo.avatarUrl"></avatar>
              </span>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1">
                    <span class="flex items-center justify-start"><i-svg-icon icon="user" size="20"></i-svg-icon><span
                        class="pl-1 text-[13px]">用户中心</span></span>
                  </a-menu-item>
                  <a-menu-item key="2"> <span class="flex items-center justify-start"><i-svg-icon icon="save"
                        size="20"></i-svg-icon><span class="pl-1 text-[13px]">用户设置</span></span></a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3"> <span class="flex items-center justify-start"><i-svg-icon icon="warning"
                        size="20"></i-svg-icon><span class="pl-1 text-[13px]">退出登录</span></span></a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-space>
        </div>
      </div>
    </div>
  </Layout.Header>
</template>
<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { Layout, Button as AButton, Tooltip as ATooltip, Dropdown as ADropdown, Space as ASpace, Avatar, Menu as AMenu, MenuItem as AMenuItem, MenuDivider as AMenuDivider } from 'ant-design-vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
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
const userInfo = computed(() => {
  return store.getters.userInfo
})
console.log('userInfo', userInfo.value);

</script>
<style lang='less' scoped>
.layout-header-view {
  background-color: #fff;
}
</style>
