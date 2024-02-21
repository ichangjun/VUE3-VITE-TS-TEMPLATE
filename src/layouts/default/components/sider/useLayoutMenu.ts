/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 18:08:12
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-21 15:08:19
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/menu/useLayoutMenu.ts
 * @Description: 菜单栏数据
 */
import {ref, reactive, watch} from 'vue'
import { MenuItem } from '../../../../types/menu'
import { menus } from '../../../../mock/menu'
import { useRoute, useRouter } from 'vue-router'

export const useLayoutMenu = () => {
  const route = useRoute()
  const router = useRouter()
  const openKeys = ref<(string | number)[]>()
  const selectedKeys = ref<string[]>([route.path])
  const menuList = reactive<MenuItem[]>(menus)


  // 菜单点击
  const handleMenuClick = ({ key }) => {
    if (key) {
      router.push(key)
    }
  }

  watch(() => route.path, (val: string) => {
    const parentPathArray = getTreePath(menuList, (data: MenuItem) => data.path === val, [])
    if(parentPathArray && parentPathArray.length) {
      openKeys.value =  selectedKeys.value = parentPathArray
    }
   }, {
    immediate: true
  })
  return {
    openKeys,
    selectedKeys,
    menuList,
    handleMenuClick
  }
}

const getTreePath = (tree: Array<MenuItem>, func: any, path: Array<string>) => {
  if (!tree)
    return []
  for (const data of tree) {
    path.push(data.path)
    if (func(data))
      return [data.path]
    if (data.children) {
      const findChildren = getTreePath(data.children, func, path)
      if (findChildren.length)
        return [...findChildren, data.key]
    }
    path.pop()
  }
  return []
}
