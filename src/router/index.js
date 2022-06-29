import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import page2 from '../views/page2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
