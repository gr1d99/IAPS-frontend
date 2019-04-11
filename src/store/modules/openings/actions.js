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
  fetchAllOpenings({ commit, dispatch }, page = 1) {
    dispatch('setAppLoading', WAITING_TYPE, { root: true });
    Openings.all(page)
      .then((response) => {
        commit('addOpenings', response.data);
        dispatch('setAppLoading', DONE_TYPE, { root: true });
      });
  },
  editOpening({ dispatch }, data) {
    dispatch('setAppLoading', WAITING_TYPE, { root: true });
    Openings.edit(data.openingId, { openings: data.opening })
      .then(() => {
        dispatch('setAppLoading', DONE_TYPE, { root: true });
      })
      .catch((error) => {
        dispatch('setAppLoading', DONE_TYPE, { root: true });
        switch (error.response.status) {
          case 422:
            dispatch('addErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
  },
  deleteOpening(_, openingId) {
    return Openings.delete(openingId);
  },
};
