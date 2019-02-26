import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const sessions = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default sessions;
