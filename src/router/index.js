import { createRouter, createWebHistory } from 'vue-router';

import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import DonationView from '../views/DonationView.vue'
import SignInView from '../views/SignInView.vue'
import DownloadView from '../views/DownloadView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/donation',
    name: 'donation',
    component: DonationView,
  },
  {
    path: '/init',
    name: 'init',
    component: SignInView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;