# vue-resource使用
1.添加vue-resource依赖，执行命令
```cmd
npm i vue-resource -S
```
2.项目中添加依赖，打开src下的main.js文件，写入一下内容
```js
import VueResource from 'vue-resource'
Vue.use(VueResource)
```
添加完之后的main.js如下
```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```
3.在src/components下添加vue组件MyResource.vue，写入以下内容：
```vue

```
4. 修改src/router/index.js，引入MyResource组件
```js
import MyResource from '@/components/MyResource'
```
5. routes中新增一个路由
```js
{
	path: '/resource',
	name: 'MyResource',
	component: MyResource
}
```
6. 修改后的index.js如下
```js
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Data from '@/components/Data'
import MyResource from '@/components/MyResource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/data',
      name: 'Data',
      component: Data
    }, {
      path: '/resource',
      name: 'MyResource',
      component: MyResource
    }
  ]
})

```
7. 在App.vue中新增菜单项
```html
<el-menu-item index="resource">resource</el-menu-item>
```