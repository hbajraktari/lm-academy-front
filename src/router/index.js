import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: import ('@/views/Errors/NotFound.vue'),
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Auth/RegisterView.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Auth/LoginView.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'DashboardLayout',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/DashboardView.vue'),
        },
        {
          path: '/users-list',
          name: 'DashboardUserList',
          component: () => import('@/views/Dashboard/UsersList.vue'),
        },
      ],
    },
  ],
})

export default router
