<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-03-22 18:56:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-22 19:02:51
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/views/error/403/index.vue
 * @Description: 异常页-403
-->
<template>
  <a-result status="403" title="403" sub-title="对不起，您没有访问该资源的权限。">
    <template #extra>
      <a-button type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
import { Result as AResult, Button as AButton } from 'ant-design-vue'
defineOptions({
  name: 'Error_403'
})
</script>
