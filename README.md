<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-05 17:15:47
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

### 本地运行
```shell
npm run dev
```

