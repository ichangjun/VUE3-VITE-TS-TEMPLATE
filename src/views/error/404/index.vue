<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-03-22 18:56:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-27 18:55:21
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/views/error/404/index.vue
 * @Description: 异常页-404
-->
<template>
  <a-result status="404" title="404" sub-title="抱歉，页面不见了～">
    <template #extra>
      <a-button type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
import { Result as AResult, Button as AButton } from 'ant-design-vue'
defineOptions({
  name: 'Error_404'
})
</script>
