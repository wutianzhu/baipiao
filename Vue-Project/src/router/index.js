import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/search/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/search",
      component: index,
      redirect: "/search/index",
      // children: [
      //   {
      //     path: "index",
      //     component: index
      //   }
      // ]
    }
  ]
});

