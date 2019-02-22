import User from '../../../services/users';
import { BAD_REQUEST_MESSAGE } from '../../../constants/messages';
import { DONE_TYPE, WAITING_TYPE } from '../../../constants/async_types';

const actions = {
  createUser: ({ commit }, data) => {
    commit('setLoading', WAITING_TYPE);
    User.create(data).then((response) => {
      console.log(response);
    }).catch((error) => {
      commit('setLoading', DONE_TYPE);
      if (error.response.status === 400) {
        commit('addErrors', [BAD_REQUEST_MESSAGE]);
      }
    });
  },
  resetErrors: ({ commit }) => {
    commit('resetErrors');
  },
};

export default actions;
