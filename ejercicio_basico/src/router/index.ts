import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import List from '@/components/list.vue';
import Detail from '@/components/detail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/detail/:login',
    name: 'Detail',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;