import Vue from 'vue';
import Router from 'vue-router';

import SignupPage from '../components/Pages/SignupPage/SignupPage';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/sign_up',
      name: 'Signup',
      component: SignupPage,
    },
  ],
});

export default router;
