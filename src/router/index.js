import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import SignupPage from '../views/Signup/SignupPage.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignupPage,
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
  ],
});

export default router;
