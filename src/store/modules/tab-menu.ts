/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:13:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 20:31:30
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/modules/tab-menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TabProps, TabBarState } from '@/types/tab-menu'

export default {
  namespaced: true,
  state: (): TabBarState => ({
    tabList: []
  }),
  mutations: {
    // 添加tab
    pushTab(state, tab: TabProps) {

    }
  }
}
