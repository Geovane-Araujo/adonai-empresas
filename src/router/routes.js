import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/detalhes',
        name: 'Detalhes',
        component: () => import('../views/Pages/Detalhes.vue')
      },
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: () => import('../views/Pages/DashBoard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../security/Login.vue')
  }
]
export default routes
