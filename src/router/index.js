import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'
import Pictures from '@/components/Pictures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Movies
    },
    {
      path: '/movies',
      component: Movies
    },
    {
      path: '/pictures',
      component: Pictures
    }
  ]
})
