import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/atendimento',
        name: 'Atendimento',
        component: () => import('../views/Pages/Atendimento.vue')
      },
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('../views/Pages/DashBoard.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
