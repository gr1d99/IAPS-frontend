import Vue from 'vue';
import Router from 'vue-router';

import CreateUser from '../views/Users/Create/CreateUser.vue';

import CreateOpening from '../views/Admin/Opening/CreateOpening.vue';

import ShowOpening from '../components/Openings/ShowOpening.vue';

import CreateApplication from '../components/Openings/CreateApplication.vue';

import EditOpening from '../views/Admin/Opening/EditOpening.vue';

const CreateSession = () => import('../views/Sessions/Create/CreateSession.vue');
const HomePage = () => import('../views/Home/HomePage.vue');


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
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
      name: 'create-session',
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
    {
      path: '/openings/:id',
      name: 'ShowOpening',
      component: ShowOpening,
    },
    {
      path: '/openings/:id/edit',
      name: 'EditOpening',
      component: EditOpening,
    },
    {
      path: '/openings/:id/applications',
      name: 'CreateApplication',
      component: CreateApplication,
      meta: {
        requiresAuth: true,
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
  } else if (!authenticated && requiresAuth) {
    next({ path: '/sign_in' });
  } else {
    next();
  }
});

export default router;
