import Openings from '../../../services/openings';
import { DONE_TYPE, WAITING_TYPE } from '../../../constants/async_types';

export default {
  createOpening(_, payload) {
    return Openings.create({ openings: payload });
  },
  clearErrors({ commit }) {
    commit('clearErrors');
  },
  addErrors({ commit }, errors) {
    commit('addErrors', errors);
  },
  fetchAllOpenings({ commit, dispatch }) {
    dispatch('setAppLoading', WAITING_TYPE, { root: true });
    Openings.all()
      .then((response) => {
        commit('addOpenings', response.data);
        dispatch('setAppLoading', DONE_TYPE, { root: true });
      });
  },
};
