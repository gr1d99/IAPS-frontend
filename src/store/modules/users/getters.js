const getters = {
  usersErrors: state => (state.errors),
  renderAlerts: state => (state.errors.length > 0 || state.created),
  userCreated: state => (state.created),
  validationErrors: state => (state.validationErrors),
};

export default getters;
