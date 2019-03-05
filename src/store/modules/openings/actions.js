import Openings from '../../../services/openings';
import { BAD_REQUEST_MESSAGE } from '../../../constants/messages';

export default {
  createOpening({ commit }, payload) {
    Openings.create({ openings: payload })
      .then(() => {
        commit('clearErrors');
      }).catch((error) => {
        switch (error.response.status) {
          case 400:
            commit('addErrors', [BAD_REQUEST_MESSAGE]);
            break;
          case 422:
            commit('addErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
  },
};
