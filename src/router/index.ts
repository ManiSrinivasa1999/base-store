import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const authenticated = (to: Route, from: Route, next: Function) => {
  if (store.state.auth().currentUser) {
    next();
  } else {
    next('/login');
  }
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authenticated,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
