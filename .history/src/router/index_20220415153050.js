import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/topic',
    name: 'Topic',
    component: ()=> import("../views/Topic.vue")
  },{
    path: '/topic',
    name: 'Mine',
    component: ()=> import("../views/Mine.vue")
  },{
    path: '/topic',
    name: 'Search',
    component: ()=> import("../views/Search.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
