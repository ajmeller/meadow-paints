import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/abstract',
      name: 'Abstract',
      component: () => import('../views/Abstract.vue'),
    },
    {
      path: '/fish',
      name: 'Fish',
      component: () => import('../views/Fish.vue'),
    },
    {
      path: '/highland',
      name: 'Highland',
      component: () => import('../views/Highland.vue'),
    },
    {
      path: '/mitosis',
      name: 'Mitosis',
      component: () => import('../views/Mitosis.vue'),
    },
    {
      path: '/paintings',
      name: 'Paintings',
      component: () => import('../views/Paintings.vue'),
    },
  ],
})

export default router
