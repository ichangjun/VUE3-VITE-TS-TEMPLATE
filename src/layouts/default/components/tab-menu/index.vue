<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:04:06
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 20:10:56
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/tab-menu/index.vue
 * @Description: tab菜单
-->
<template>
  <div class='tab-view-view w-full h-[32px] bg-white'>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
defineOptions({
  name: 'TabView'
})
</script>
<style lang='less' scoped>
.tab-view-view {
  border-bottom: 1px solid rgb(229, 231, 235);
  border-top: 1px solid rgb(229, 230, 235);
}
</style>
