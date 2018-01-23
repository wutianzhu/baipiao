import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/search/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search/..',
      name: 'index',
      component: index
    }
  ]
})
