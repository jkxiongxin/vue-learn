import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DubleData from '@/components/DubleData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/data',
      name: 'DubleData',
      component: DubleData
    }
  ]
})
