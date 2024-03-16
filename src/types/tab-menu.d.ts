/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:15:19
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-16 15:47:35
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/tab-menu.d.ts
 * @Description: tab菜单持久化数据
 */
export interface TabProps {
  title: string; // tab标题
  name: string; // tab名称
  icon ?: string; // tab图标
  fullPath: string; // 完整路径
  query?: any; // 路由参数
  canClose?: boolean; // 是否可以关闭
  isShow?: boolean; // 是否显示
  isCurrent?: boolean; // 是否是当前tab
  ignoreCache?: boolean; // 是否忽略缓存
}

export interface TabBarState {
  allTabMenu: TabProps[];
  tabList: TagProps[];
}
