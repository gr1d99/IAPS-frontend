const getters = {
  usersErrors: state => (state.errors),
  validationErrors: state => (state.validationErrors),
  appLoading: state => (state.loading),
  renderAlerts: state => (state.errors.length > 0),
};

export default getters;
