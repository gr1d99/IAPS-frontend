import Vue from 'vue';
import Vuex from 'vuex';

// global
import state from './global/state';
import actions from './global/actions';
import getters from './global/getters';
import mutations from './global/mutations';

// modules
import users from './modules/users';
import sessions from './modules/sessions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    users,
    sessions,
  },
});
