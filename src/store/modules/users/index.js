import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const users = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default users;
