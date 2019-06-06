export default {
  authSuccess: (state, token) => {
    state.token = token;
  },
  logoutSuccess: (state) => {
    state.token = null;
  },
};
