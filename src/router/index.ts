/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 14:39:48
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-12 15:35:21
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/router/index.ts
 * @Description: 工程路由文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 通过vite 的import.meta.glob读取src/views下的所有index.vue文件
const viewIndexModules = import.meta.glob('../views/**/index.tsx')
const layoutIndexModules = import.meta.glob('../layouts/**/index.tsx')
// 子路由
const childrenRoutes: Array<RouteRecordRaw> = []

Object.keys(viewIndexModules).forEach((path: string) => {
  // 判断是不是业务组件，如果是业务组件则不添加到路由中
  if (path.includes('/components')) return
// 使用正则表达式匹配文件夹名称
  const routeName = path.match(/\.\.\/views\/(.*)\.tsx$/)[1].split('/')[0];
  childrenRoutes.push({
    name: routeName,
    path: `/${routeName.toLowerCase()}`,
    component: viewIndexModules[path]
  })
})

const rootRoutes = Object.keys(layoutIndexModules).map((path: string) => {
  const routeName = path.match(/\.\.\/layouts\/(.*)\.tsx$/)[1].split('/')[0];
  console.log('routeName', routeName);

  if (routeName === 'index') {
    return {
      name: routeName,
      path: `/`,
      redirect: '/dashboard',
      component: layoutIndexModules[path],
      children: childrenRoutes
    }
  } else {
    return {
      name: routeName,
      path: `/${routeName.toLowerCase()}`,
      component: layoutIndexModules[path]
    }
  }
})

const routes: Array<RouteRecordRaw> = rootRoutes
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
