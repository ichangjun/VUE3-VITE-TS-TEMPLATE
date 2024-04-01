<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-01 19:11:49
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

#### 6. 引入组件库 antd-design-vue 和 tailwindcss 工具集

```shell
# 第一步：安装并配置 tailwindcss

# 安装插件包
yarn add tailwindcss
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

# 配置 tailwindcss，生成tailwind.config.js 文件
npx tailwindcss init --full
```

``` typescript
// 第二步：配置 tailwind.config.js，引入公共样式
// 注意，需要调整默认配置 tailwind.config.js，不然央视不生效，具体调整内容如下
export default {
  // 默认 content 为空，根据自己的项目配置，调整content作用区域
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}

// 在 main.ts 引入公共样式
import 'tailwindcss/tailwind.css'
```

``` typescript
// 第三步：安装 antd-design-vue 组件库，按需加载方式，比较简单，省略步骤
```

``` typescript
// 第四步：antd-degisn-vue 和 tailwindcss 样式冲突，解决方案如下：
// 修改tailwind.config.js文件配置，禁用默认的配置
export default {
  ...
  // =========================
  // 这是重点👇
  // =========================
 corePlugins: {
    preflight: false
  }
}

// 随后，拷贝preflight的样式，存入项目
// 在项目下 node_modules\tailwindcss\src\css 内的 preflight.css 文件拷贝出来，粘贴到你项目的样式文件夹中，如 src\style\preflight.css
```
``` css
// 删除会导致冲突的代码
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
```
```typescript
// 最后在main.ts中引入样式
import './style/preflight.css'

```

### 本地运行
```shell
npm run dev
```


### 性能优化

前端工程性能优化一直是前端工程师乐此不疲做的一件工作，这个工作是没有什么止境的，针对不同构件工具的优化方案也不一样，下面我们就针对当前工程，提供一份较为完整的性能优化方案，欢迎各位大佬指正。

#### vite 构建工具方面

##### 针对打包构建性能，禁用掉一些不必要的构建选项

```ts
export default defineConfig({
 build: {
    terserOptions: {
      // 禁用不必要的构建选项
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }
})
```
