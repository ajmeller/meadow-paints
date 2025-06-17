import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Fish from '../views/Fish.vue'
import Mitosis from '../views/Mitosis.vue'
import Paintings from '../views/Paintings.vue'

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
      component: () => About,
    },
    {
      path: '/abstract',
      name: 'Abstract',
      component: () => import('../views/Abstract.vue'),
    },
    {
      path: '/fish',
      name: 'Fish',
      component: Fish,
    },
    {
      path: '/highland',
      name: 'Highland',
      component: () => import('../views/Highland.vue'),
    },
    {
      path: '/mitosis',
      name: 'Mitosis',
      component: Mitosis,
    },
    {
      path: '/paintings',
      name: 'Paintings',
      component: Paintings,
    },
  ],
})

export default router
