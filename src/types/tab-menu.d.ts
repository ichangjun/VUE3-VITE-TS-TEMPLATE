/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-22 20:15:19
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-22 20:16:58
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/tab-menu.d.ts
 * @Description: tab菜单持久化数据
 */
export interface TabProps {
  title: string;
  name: string;
  fullPath: string;
  query?: any;
  ignoreCache?: boolean;
}

export interface TabBarState {
  tabList: TagProps[];
}
