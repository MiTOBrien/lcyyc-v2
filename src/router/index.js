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
      path: '/lessons',
      name: 'lessons',
      component: () => import('../views/LessonsView.vue'),
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/LinksView.vue'),
    },
    {
      path: '/why',
      name: 'why',
      component: () => import('../views/WhyView.vue'),
    },
  ],
})

export default router
