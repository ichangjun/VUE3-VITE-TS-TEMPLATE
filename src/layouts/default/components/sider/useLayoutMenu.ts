/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 18:08:12
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-16 15:21:16
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/menu/useLayoutMenu.ts
 * @Description: 菜单栏数据
 */
import {ref, reactive, watch} from 'vue'
import { MenuItem } from '../../../../types/menu'
import { menus } from '../../../../mock/menu'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store'
import { tabDefaultPage } from '@/constants'
import { TabProps } from '@/types/tab-menu'

export const useLayoutMenu = () => {
  const route = useRoute()
  const router = useRouter()
  const openKeys = ref<(string | number)[]>()
  const selectedKeys = ref<string[]>([route.path])
  const menuList = reactive<MenuItem[]>(menus)
  const flatMenuArray = flatMenuList(menus)

  /**
   * 初始化tabMenuList数据
   * 把全部菜单全部初始化为tab-menu，用于多标签页
   */
  const initTabMenuList = () => {
    const allTabMenu: TabProps[] = []

    flatMenuArray.forEach((item) => {
      allTabMenu.push({
        title: item.label,
        name: item.label,
        fullPath: item.path,
        canClose: item.path !== tabDefaultPage.fullPath,
        isShow: route.path === item.path || item.path === tabDefaultPage.fullPath,
        isCurrent: route.path === item.path
      })
    })
    store.dispatch('tabMenu/initTabDefault', allTabMenu)
  }
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
    handleMenuClick,
    initTabMenuList
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
/**
 * 抹平多维数组
 */
const flatMenuList = (list) => {
  return list.reduce((result, item) => {

    const { children,  title, label, key, path } = item
    result.push({
      key,
      label,
      title,
      path
    })
    if (children && children.length > 0) {
      result.push(...flatMenuList(children))
    }
    return result
  }, [])
}
