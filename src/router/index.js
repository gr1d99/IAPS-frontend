import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import CreateUser from '../views/Users/Create/CreateUser.vue';
import CreateSession from '../views/Sessions/Create/CreateSession.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/sign_up',
      name: 'CreateUser',
      component: CreateUser,
      meta: { requiresAuth: false },
    },
    {
      path: '/sign_in',
      name: 'CreateSession',
      component: CreateSession,
      meta: { requiresAuth: false },
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
