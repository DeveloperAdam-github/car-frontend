import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/Cars.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue'),
    },
    {
      path: '/view-car',
      name: 'single-car',
      component: () => import('../views/SingleCarView.vue'),
      props: true,
    },
    {
      path: '/view-car2',
      name: 'single-car2',
      component: () => import('../views/SingleCarView2.vue'),
    },
  ],
});

export default router;
