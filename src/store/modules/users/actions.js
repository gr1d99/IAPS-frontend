import Users from '../../../services/users';
import { BAD_REQUEST_MESSAGE } from '../../../constants/messages';
import { DONE_TYPE, WAITING_TYPE } from '../../../constants/async_types';

const actions = {
  createUser: ({ commit }, data) => {
    commit('setLoading', WAITING_TYPE);
    Users.create(data).then((response) => {
      const accessToken = response.headers['x-access-token'];
      window.$cookies.set('jwt-token', accessToken);
      commit('userCreated');
    }).catch((error) => {
      commit('setLoading', DONE_TYPE);
      switch (error.response.status) {
        case 400:
          commit('addErrors', [BAD_REQUEST_MESSAGE]);
          break;
        case 422:
          commit('addValidationErrors', error.response.data.errors);
          break;
        default:
          break;
      }
    });
  },
  resetErrors: ({ commit }) => {
    commit('resetErrors');
  },
  resetValidationErrors: ({ commit }) => {
    commit('resetValidationErrors');
  },
  resetUserCreated: ({ commit }) => {
    commit('resetUserCreated');
  },
};

export default actions;
