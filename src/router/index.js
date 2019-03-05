import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';

import CreateUser from '../views/Users/Create/CreateUser.vue';

import CreateSession from '../views/Sessions/Create/CreateSession.vue';

import CreateOpening from '../views/Admin/Opening/CreateOpening.vue';


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
    {
      path: '/openings/create',
      name: 'CreateOpening',
      component: CreateOpening,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { requiresAuth } = to.meta;
  const { requiresAdmin } = to.meta;
  const authenticated = !!Vue.$jwt.decode();
  if (authenticated && requiresAuth === false) {
    next({ path: '/' });
  } else if (!authenticated && requiresAuth && requiresAdmin) {
    next({ path: '/sign_up' });
  } else {
    next();
  }
});

export default router;
