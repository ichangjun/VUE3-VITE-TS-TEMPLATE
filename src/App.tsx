/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-12 14:27:31
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
 * @Description: 工程入口文件
 */
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { Spin } from 'ant-design-vue'
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const loading = computed(() => {
      return store.getters.loading
    })
    return () => (
      <div class="app-page-view">
        {loading.value && <div className={'loading-box'}><Spin spinning={loading.value} delay={ 200 } tip="loading..." class=""></Spin></div> }
        <router-view />
      </div>
    )
  }
})

