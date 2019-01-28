import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAlertBox: false,
    alertMessage: '',
  },
  mutations: {
    showAlertMessage(state, message) {
      Object.assign(state,
        { showAlertBox: true, alertMessage: message });
    },
    clearAlertMessage(state) {
      Object.assign(state,
        { showAlertBox: false, alertMessage: '' });
    },
  },
});
