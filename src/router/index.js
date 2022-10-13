import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'login',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/signup',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
