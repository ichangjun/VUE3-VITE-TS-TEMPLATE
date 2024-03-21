<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:04:06
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-21 20:41:41
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/tab-menu/index.vue
 * @Description: tab菜单
-->
<template>
  <div class='tab-view-box w-full h-[32px] bg-white px-1 overflow-hidden flex'>
    <div class="more-tab-left">
      <CaretLeftOutlined class="cursor-pointer" style="font-size: 16px; color: #1677ff;"
        @click="handleShowMoreTabLeft" />
    </div>
    <div ref=tabListRef class="tab-view-content w-full h-full flex flex-nowrap items-center overflow-y-hidden scroll-">
      <template v-for="item in tabList" :key="item.path">
        <a-dropdown :trigger="['contextmenu']" placement="bottom" destroyPopupOnHide @click.prevent
          @openChange="onContextChange" :align="{
          offset: [40, 14]
        }">
          <div :ref="setItemRef">
            <a-tag :closable="item.canClose && item.isCurrent" :color="getTabColor(item)" :bordered="false"
              class="text-[12px] flex cursor-pointer" @click.stop="handleTab(item)" @close.stop="handleCloseTab(item)"
              @click.right.native="handleShoeContextMenu($event, item)">
              <template #icon>
                <i-svg-icon v-if="item.icon" :icon="item.icon" :color="getTabIconColor(item)" size="18px" />
              </template>
              {{ item.title }}
            </a-tag>
          </div>
          <template #overlay>
            <a-menu @click="handleContextMenu" :items="contextTab"></a-menu>
          </template>
        </a-dropdown>
      </template>
    </div>
    <div class="more-tab-right">
      <CaretRightOutlined class="cursor-pointer" style="font-size: 16px; color: #1677ff;"
        @click="handleShowMoreTabRight" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, computed, h, ref, watch, nextTick, onBeforeUpdate } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { TabProps } from '@/types/tab-menu'
import { Tag as ATag, notification, Menu as AMenu, Dropdown as ADropdown } from 'ant-design-vue'
import { CloseCircleOutlined, InfoCircleOutlined, CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons-vue'
import { useScroll } from '@vueuse/core'
defineOptions({
  name: 'TabView'
})
const store = useStore()
const tabListRef = ref()
const tabList = computed(() => {
  return store.getters.tabList
})
const contextTab = [
  {
    key: 'close-current',
    label: '关闭当前页签',
    icon: () => h(InfoCircleOutlined),
  },
  {
    key: 'close-other',
    label: '关闭其他页签',
    icon: () => h(InfoCircleOutlined),
  },
  {
    key: 'close-all',
    label: '关闭全部页签',
    icon: () => h(CloseCircleOutlined),
  }
]
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
// 当前激活右键菜单的tab
const activeContextTabPath = ref<TabProps>()
// 右键菜单
const handleShoeContextMenu = (e: MouseEvent, tab: TabProps) => {
  e.preventDefault()
  activeContextTabPath.value = tab
  store.dispatch('tabMenu/updateContextTab', tab.fullPath)
}
// 下拉菜单点击
const handleContextMenu = (e) => {
  console.log('key', e);
  switch (e.key) {
    // 关闭当前tab
    case 'close-current':
      handleCloseTab(activeContextTabPath.value)
      break
    // 关闭其他tab
    case 'close-other':
      store.dispatch('tabMenu/removeOtherTab', activeContextTabPath.value).then(() => {
        router.push(activeContextTabPath.value.fullPath)
      }).catch((err) => {
        notification.error({
          message: '关闭失败',
          description: err.message
        })
      })
      break
    // 关闭所有tab
    case 'close-all':
      store.dispatch('tabMenu/removeAllTab').then((prePath) => {
        router.push(prePath)
      }).catch((err) => {
        notification.error({
          message: '关闭失败',
          description: err.message
        })
      })
  }
  // store.dispatch('tabMenu/updateContextTab')
}
// 右侧加载更多
const handleShowMoreTabRight = () => {
  const { x: scrollLeft } = useScroll(tabListRef)
  // 当横向滚动条距左侧的距离 < 容器的宽度时，继续滚动；（每次滚动当前的 1/3），否则，不滚动
  if (scrollLeft.value < tabListRef.value.scrollWidth) {
    const left = parseInt((scrollLeft.value + tabListRef.value.clientWidth / 3).toString())
    tabListRef.value.scrollTo({
      left: left,
      behavior: 'smooth'
    })
  }
}
// 左侧加载更多
const handleShowMoreTabLeft = () => {
  const { x: scrollLeft } = useScroll(tabListRef)
  // // 当横向滚动条距左侧的距离  >0，继续滚动；（每次滚动当前的 1/3），否则，不滚动
  const left = parseInt((scrollLeft.value - tabListRef.value.clientWidth / 3).toString())
  if (scrollLeft.value > 0) {
    tabListRef.value.scrollTo({
      left: left,
      behavior: 'smooth'
    })
  }
}
// 获取所有的tab item元素
const itemRefList = ref([])
const setItemRef = (el) => {
  if (el) {
    itemRefList.value.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefList.value = []
})
// 监听当前路由，滚动当前节点至可见
watch(() => itemRefList, () => {
  try {
    // 获取当前tab下标
    const _itemIndex = tabList.value.findIndex((item) => item.isCurrent === true)
    const { x: scrollLeft } = useScroll(tabListRef)
    if (_itemIndex > 0) {
      nextTick(() => {
        const _item = itemRefList.value[_itemIndex]
        if (_item) {
          const { left, width } = _item.getBoundingClientRect()
          if (isNaN(left) || isNaN(width)) {
            throw new Error('Invalid bounding rectangle')
          }
          if (tabListRef.value) {
            tabListRef.value.scrollTo({
              left: left + scrollLeft.value,
              behavior: 'smooth'
            })
          }
        }
      })
    }
  } catch (error) {
    console.error('Error:', error);
  }
}, {
  deep: true,
  immediate: true
})
</script>
<style lang='less' scoped>
.tab-view-box {
  border-bottom: 1px solid rgb(229, 231, 235);
  border-top: 1px solid rgb(229, 230, 235);

  .tab-view-content {
    &::-webkit-scrollbar {
      display: none;
    }

  }

  .more-tab-left {
    flex: 0 0 24px;
    line-height: 31px;
    text-align: left;
  }

  .more-tab-right {
    flex: 0 0 24px;
    line-height: 31px;
    text-align: right;
  }
}

/deep/.ant-dropdown-menu-item-icon {
  svg {
    font-size: 13px;
    color: rgba(78, 89, 105, 0.88);
  }
}
</style>
