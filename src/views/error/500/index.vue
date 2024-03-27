<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-03-22 18:56:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-27 18:55:25
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/views/error/500/index.vue
 * @Description: 异常页-500
-->
<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器出了点问题～">
    <template #extra>
      <a-button type="primary">返回</a-button>
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
