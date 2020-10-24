import Vue from 'vue'
//引入  两种方法
import VueRouter from 'vue-router'
import Home from './../views/Home'
// import Test from './../views/Test'
import Test from '@/views/Test'
import Ivuex from '@/views/Vuex'
import A from './../views/A'
import B from './../views/B'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/home',
    component:Home,
    children:[
      {
        path:'aa',
        component:A
      },
      {
        path:'bb',
        component:B
      }
    ]
  },
  {
    path:'/test',
    component:Test,
    
  },
  {
    path:'/vuex',
    component:Ivuex,
    
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
