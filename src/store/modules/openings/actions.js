import Openings from '../../../services/openings';
// import { BAD_REQUEST_MESSAGE } from '../../../constants/messages';

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
};
