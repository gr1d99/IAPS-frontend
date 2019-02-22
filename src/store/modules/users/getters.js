const getters = {
  usersErrors: state => (state.errors),
  appLoading: state => (state.loading),
  renderAlerts: state => (state.errors.length > 0),
};

export default getters;
