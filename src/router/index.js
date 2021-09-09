import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Landing-Page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mostpopular',
    name: 'MostPopular',
    component: () => import('../views/Most-Popular.vue')
  },
  {
    path: '/boxoffice',
    name: 'BoxOffice',
    component: () => import('../views/Box-Office.vue')
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: () => import('../views/Coming-Soon.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },{
    path: '/search/:name',
    name: 'Search',
    component: () => import('../views/Search-Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
