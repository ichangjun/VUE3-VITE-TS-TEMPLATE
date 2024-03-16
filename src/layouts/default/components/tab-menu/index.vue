<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:04:06
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-16 15:42:42
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/tab-menu/index.vue
 * @Description: tab菜单
-->
<template>
  <div class='tab-view-view w-full h-[32px] bg-white px-4 flex flex-nowrap items-center'>
    <a-tag v-for="item in tabList" :key="item.fullPath" :closable="item.canClose && item.isCurrent"
      :color="item.isCurrent ? 'processing' : 'default'" :bordered="false" class="text-[12px] flex cursor-pointer"
      @click="handleTab(item)" @close="handleCloseTab(item)">{{ item.title
      }}</a-tag>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Tag as ATag, notification } from 'ant-design-vue'
defineOptions({
  name: 'TabView'
})
const store = useStore()
const tabList = computed(() => {
  return store.getters.tabList
})
// 处理tab点击事件
const router = useRouter()
const handleTab = (item: any) => {
  router.push(item.fullPath)
}
// 处理tab关闭事件
const handleCloseTab = (item: any) => {
  store.dispatch('tabMenu/removeTab', item).then((prePath) => {
    router.push(prePath)
  }).catch((err) => {
    notification.error({
      message: '关闭失败',
      description: err.message
    })
  })
}
</script>
<style lang='less' scoped>
.tab-view-view {
  border-bottom: 1px solid rgb(229, 231, 235);
  border-top: 1px solid rgb(229, 230, 235);
}
</style>
