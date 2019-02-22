import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAlertBox: false,
    alertMessage: '',
  },
  mutations,
  modules: {
    users,
  },
});
