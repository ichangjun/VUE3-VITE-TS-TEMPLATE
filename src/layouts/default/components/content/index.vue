<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 17:56:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-27 20:36:44
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/content/index.vue
 * @Description: 内容框架页面
-->
<template>
  <div class='layout-content-view w-full h-full'>
    <tab-menu></tab-menu>
    <div class="layout-content-section p-4 w-full h-full">
      <section class="bg-white w-full h-full rounded-lg p-4  overflow-y-auto">
        <router-view v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </router-view>
      </section>
    </div>
    <footer class="layout-content-footer">开箱即用的中后台管理系统</footer>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
import TabMenu from '../tab-menu/index.vue'
defineOptions({
  name: 'LayoutContent'
})
</script>
<style lang="less" scoped>
.layout-content-view {
  display: flex;
  flex-direction: column;

  .layout-content-section {
    flex: 0 0 1;
  }

  .layout-content-footer {
    flex: 0 0 32px;
    text-align: center;
    line-height: 32px;
    color: rgb(78, 89, 105);
    font-size: 12px;
  }
}
</style>
