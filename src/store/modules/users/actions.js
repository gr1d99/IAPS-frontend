const actions = {
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
