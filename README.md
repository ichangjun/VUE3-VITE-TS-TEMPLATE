<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-11 16:42:02
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/README.md
 * @Description: 工程描述文档
-->
## 基于Vue3+版本、Typescript、TSX、VITE生态的前端项目脚手架

### 搭建过程

#### 1. 安装Typescript

```shell
yarn add typescript
```

#### 2. 改造模板语法为TSX语法
- 修改App.vue文件为APP.tsx

- 安装插件@vitejs/plugin-vue-jsx，解析tsx/jsx文件
```typescript
yarn add @vitejs/plugin-vue-jsx -D
```
- 在vite.config.ts 中引入插件
```typescript
import vueJsx from '@vitejs/plugin-vue-jsx' // vue3 jsx
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
```
- 注意，tsconfig.json文件中的设置项 noImplicitAny 要设置为false，不然会引起报错
```json
"noImplicitAny": false
```
#### 3. vite配置resolve.alias
```typescript
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```
因为使用了Typescript，所以需要在tsconfig.json中配置
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### 4. 安装vue-router, 实现自动注册加载路由
统一路由文件层级规范，views作为业务路由，layouts作为根路由；同时，业务路由作为layouts的子路由；具体实现逻辑如下：
```shell
#  第一步，安装 vue-router 插件
yarn add vue-router@next;
```
```typescript
// 第二步，使用vite的import.meta.glob动态加载业务路由文件
const viewIndexModules = import.meta.glob('../views/**/index.tsx')
// 循环业务路由文件，批量生成业务路由集合
// **注意，views下的路由集合，使用xx/index.tsx的结构
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
// 这样，就可以完成views下业务路由的批量生成
```
然后需要按照以上方式，注册根路由

``` typescript
// 同样，使用vite的import.meta.glob动态加载业务路由文件
const layoutIndexModules = import.meta.glob('../layouts/**/index.tsx')
// 不同的是，需要对根路由进行判断，因为根路由不止是一个

const rootRoutes = Object.keys(layoutIndexModules).map((path: string) => {
  const routeName = path.match(/\.\.\/layouts\/(.*)\.tsx$/)[1].split('/')[0];

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
      component: layoutIndexModules[path],
      children: childrenRoutes
    }
  }
})
```
具体完成代码，请参照 **routes/index.ts** 文件


#### 5. vuex 持久化数据

vuex状态管理工具是vue中实现多个组件中共享状态、响应式的状态管理；但是其无法实现持久化的状态保持，需要结合插件 **vuex-persistedstate** ，效果为浏览器刷新后，其数据依然存在且具备响应式，一般用来持久化全局的状态数据：用户登录状态&用户信息、购物车数据等等；具体实现比较简单，可以参考 **store/index.ts中的配置**；
需要注意的是对于vuex的使用方式，按照模块化的方式配置，可以有效的做到状态数据隔离，互不干扰。

### 本地运行
```shell
npm run dev
```

