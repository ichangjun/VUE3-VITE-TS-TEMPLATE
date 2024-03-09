<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 17:56:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 20:04:59
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/content/index.vue
 * @Description: 内容框架页面
-->
<template>
  <div class='layout-content-view w-full h-full'>
    <tab-menu></tab-menu>
    <div class="px-6 py-4">
      <router-view v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </router-view>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
import TabMenu from '../tab-menu/index.vue'
defineOptions({
  name: 'LayoutContent'
})
</script>
