export default {
  addErrors: ({ commit }, errors) => {
    commit('addErrors', errors);
  },
  resetErrors: ({ commit }, errors) => {
    commit('resetErrors');
  },
};
