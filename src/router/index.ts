import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Highland from '../views/murals/Highland.vue'
import Mitosis from '../views/Mitosis.vue'
import Paintings from '../views/Paintings.vue'
import Murals from '../views/murals/Murals.vue'
import Available from '../views/Available.vue'
import Illustrations from '../views/Illustrations.vue'

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
      component: About,
    },
    {
      path: '/murals',
      name: 'Murals',
      component: Murals,
    },
    {
      path: '/highland',
      name: 'Highland',
      component: Highland,
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
    {
      path: '/available',
      name: 'Available',
      component: Available,
    },
    {
      path: '/illustration',
      name: 'Illustration',
      component: Illustrations,
    },
  ],
})

export default router
