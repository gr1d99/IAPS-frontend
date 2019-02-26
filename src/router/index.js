import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import CreateUser from '../views/Users/Create/CreateUser.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/sign_up',
      name: 'CreateUser',
      component: CreateUser,
      meta: { requiresAuth: false },
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { requiresAuth } = to.meta;
  if (requiresAuth === false && !!Vue.$jwt.decode()) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;
