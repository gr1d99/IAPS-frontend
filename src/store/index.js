import Vue from 'vue';
import Vuex from 'vuex';

// global
import state from './modules/global/state';
import actions from './modules/global/actions';
import getters from './modules/global/getters';
import mutations from './modules/global/mutations';

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
