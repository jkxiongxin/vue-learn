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
