export default {
  userLoggedOut({ commit, dispatch }) {
    commit('logoutSuccess');
    dispatch('openings/fetchAllOpenings', 1, { root: true });
  },
};
