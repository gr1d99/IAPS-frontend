import Vue from 'vue';
import Router from 'vue-router';

import EditOpening from '../views/Admin/Opening/EditOpening.vue';

const CreateSession = (/* webpackChunkName: "new-session" */) => import('../views/Sessions/Create/CreateSession.vue');
const CreateUser = (/* webpackChunkName: "user-registration" */) => import('../views/Users/Create/CreateUser.vue');
const HomePage = (/* webpackChunkName: "home-page" */) => import('../views/Home/HomePage.vue');
const ShowOpening = (/* webpackChunkName: "opening-detail" */) => import('../views/Opening/ShowOpening.vue');
const CreateApplication = (/* webpackChunkName: "create-application" */) => import('../views/Application/CreateApplication.vue');
const CreateOpening = (/* webpackChunkName: "create-opening" */) => import('../views/Admin/Opening/AdminOpeningCreate.vue');


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
      name: 'create-user',
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
      name: 'create-opening',
      component: CreateOpening,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: '/openings/:id',
      name: 'show-opening',
      component: ShowOpening,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/openings/:id/edit',
      name: 'EditOpening',
      component: EditOpening,
    },
    {
      path: '/openings/:id/applications',
      name: 'create-application',
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
