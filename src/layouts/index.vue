<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:14:50
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 18:20:32
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="main-view" class="w-full h-full">
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>
<script lang='ts' setup>
import { defineOptions, KeepAlive } from 'vue'
defineOptions({
  name: 'Layouts'
})
</script>
<style lang='less' scoped>
</style>
