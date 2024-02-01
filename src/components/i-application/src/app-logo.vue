<template>
  <div :class='getAppLogoClass'>
    <img src="../../../assets/images/logo-1.svg" />
    <div class="ml-2 truncate md:opacity-100 text-white title" :class="getTitleClass" v-show="showTitle">{{ title }}</div>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, computed } from 'vue'
import { useGlobSetting } from '@/hooks/setting/use-glob-setting'
defineOptions({
  name: 'AppLogo'
})
const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true
  }, // 是否显示title
})
const getAppLogoClass = computed(() => [
  'app-logo-view flex ',
  {
    'app-logo-view--hide-title': !props.showTitle
  }
])
const getTitleClass = computed(() => [
  'truncate',
  {
    'xs:opacity-0': !props.showTitle
  }
])
const { title } = useGlobSetting()
</script>
<style lang='less' scoped>
.app-logo-view {
  height: 80px;

  img {
    height: 100%;
  }

  .title {
    font-size: 28px;
    line-height: 80px;
    font-family: "YouSheBiaoTiHei";
  }
}
</style>
