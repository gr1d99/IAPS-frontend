import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import uppy from './uppy';
import './axios';
import './cookies';
import './jwt';
import './vue-truncate-filter';

Vue.config.productionTip = false;

const accessToken = Vue.$jwt.getToken();

const configureAxios = () => {
  if (accessToken) {
    Vue.axios.defaults.headers.common['X-Access-Token'] = accessToken;
  }
};

configureAxios();


new Vue({
  router,
  store,
  uppy,
  render: h => h(App),
}).$mount('#app');
