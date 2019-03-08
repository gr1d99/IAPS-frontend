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
  fetchOpening({ commit, dispatch }, openingId) {
    dispatch('setAppLoading', WAITING_TYPE, { root: true });
    Openings.get(openingId)
      .then((response) => {
        dispatch('setAppLoading', DONE_TYPE, { root: true });
        dispatch('openingNotFound', false);
        commit('addOpening', response.data);
      })
      .catch((error) => {
        if (error.response.status) {
          dispatch('setAppLoading', DONE_TYPE, { root: true });
          dispatch('openingNotFound', true);
        }
      });
  },
  openingNotFound: ({ commit }, status) => {
    commit('openingNotFound', status);
  },
};
