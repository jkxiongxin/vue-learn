import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Publish from '@/components/Publish'
import Management from '@/components/Management'
import Note from '@/components/Note'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
    path: '/publish',
    name: 'Publish',
    component: Publish
  }, {
    path: '/management',
    name: 'Management',
    component: Management
  }, {
    path: '/note',
    name: 'Note',
    component: Note
  }, {
    path: '/result',
    name: 'Result',
    component: Result
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }
  ]
})
