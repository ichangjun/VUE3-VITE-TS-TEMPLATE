<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:04:06
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-16 17:15:16
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/tab-menu/index.vue
 * @Description: tab菜单
-->
<template>
  <div class='tab-view-view w-full h-[32px] bg-white px-4 flex flex-nowrap items-center'>
    <template v-for="item in tabList" :key="item.path">
      <a-dropdown :trigger="['contextmenu']" placement="bottom" destroyPopupOnHide @click.prevent
        @openChange="onContextChange" :align="{
      offset: [40, 14]
    }">
        <a-tag :closable="item.canClose && item.isCurrent" :color="getTabColor(item)" :bordered="false"
          class="text-[12px] flex cursor-pointer" @click.stop="handleTab(item)" @close.stop="handleCloseTab(item)"
          @click.right.native="handleShoeContextMenu($event, item)">
          <template #icon>
            <i-svg-icon v-if="item.icon" :icon="item.icon" :color="getTabIconColor(item)" size="18px" />
          </template>
          {{ item.title }}
        </a-tag>
        <template #overlay>
          <a-menu @click="handleContextMenu">
            <a-menu-item key="closeCurrent">
              <template #icon>
                <InfoCircleOutlined style="font-size: 13px; color: rgba(78, 89, 105, 0.88);" />
              </template>
              关闭当前
            </a-menu-item>
            <a-menu-item key="closeOther">
              <template #icon>
                <InfoCircleOutlined style="font-size: 13px; color: rgba(78, 89, 105, 0.88);" />
              </template>
              关闭其他
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="closeAll">
              <template #icon>
                <CloseCircleOutlined style="font-size: 13px; color: rgba(78, 89, 105, 0.88);" />
              </template>
              关闭全部
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { TabProps } from '@/types/tab-menu'
import { Tag as ATag, notification, Menu as AMenu, MenuItem as AMenuItem, Dropdown as ADropdown, MenuDivider as AMenuDivider } from 'ant-design-vue'
import { CloseCircleOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
defineOptions({
  name: 'TabView'
})
const store = useStore()
const tabList = computed(() => {
  return store.getters.tabList
})
// 处理tab点击事件
const router = useRouter()
const handleTab = (item: TabProps) => {
  router.push(item.fullPath)
}

// computed 处理 tab 的颜色
const getTabColor = computed(() => {
  return (tab: TabProps) => {
    return tab.isContext ? 'error' : tab.isCurrent ? 'processing' : 'default'
  }
})

const getTabIconColor = computed(() => {
  return (tab: TabProps) => {
    return tab.isContext ? '' : tab.isCurrent ? '#1677ff' : 'rgba(78, 89, 105, 0.88)'
  }
})

// 处理tab关闭事件
const handleCloseTab = (item: TabProps) => {
  store.dispatch('tabMenu/removeTab', item).then((prePath) => {
    router.push(prePath)
  }).catch((err) => {
    notification.error({
      message: '关闭失败',
      description: err.message
    })
  })
}
// 监听右键菜单是否打开
const onContextChange = (open: boolean) => {
  if (!open) {
    store.dispatch('tabMenu/updateContextTab')
  }
}
// 右键菜单
const handleShoeContextMenu = (e: MouseEvent, tab: TabProps) => {
  e.preventDefault()
  store.dispatch('tabMenu/updateContextTab', tab.fullPath)
}
// 下拉菜单点击
const handleContextMenu = (e) => {
  console.log('key', e);
  store.dispatch('tabMenu/updateContextTab')
}
</script>
<style lang='less' scoped>
.tab-view-view {
  border-bottom: 1px solid rgb(229, 231, 235);
  border-top: 1px solid rgb(229, 230, 235);
}
</style>
