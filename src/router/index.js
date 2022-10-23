import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useAuthUserStore} from "../stores/user";
import {useApiStore} from "../stores/api";

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
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/resumes',
      name: 'resumes',
      component: () => import('../views/ResumesView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/AddResumeView.vue')
    },
    {
      path: '/resume/:id',
      name: 'resume',
      component: () => import('../views/ResumesView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const apiStore = useApiStore()
  if ((to.path === '/account' || to.path === '/resumes') && !apiStore.jwt) next({ path: '/auth' })
  else if ((to.path === '/auth' || to.path === '/signup') && apiStore.jwt) next({ path: '/account' })
  else next()
})

export default router
