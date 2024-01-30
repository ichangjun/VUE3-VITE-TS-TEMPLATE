/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-07 19:20:16
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-19 11:08:46
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/components/i-echarts/index.tsx
 * @Description: svg 图标组件
 */
import {  defineComponent, defineProps, computed  } from 'vue'
export default defineComponent({
  name: 'ISvgIcon',
  setup() {
    const props = defineProps({
      className: {
        type: String,
        default: ''
      }, // svg 类名
      icon: {
        type: String,
        required: true
      }, // svg 名称
      color: {
        type: String,
        default: '#333333'
      },
      width: {
        type: String,
        default: '14px'
      }, // svg 宽度
      height: {
        type: String,
        default: '14px'
      }, // svg 高度
    })
    // svg 类名
    const classList = computed(() => {
      return [`icon-${props.className}`]
    })
    // svg 内联样式
    const styleObj = computed(() => {
      return {
        width: props.width,
        height: props.height,
        position: 'relative',
      }
    })
    return () => (
      <svg class={classList} aria-hidden={true} style={ styleObj }>
        <use xlink:href={props.icon} fill={ props.color }></use>
      </svg>
    )
  }
})
