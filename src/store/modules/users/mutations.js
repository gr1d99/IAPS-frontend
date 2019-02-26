const mutations = {
  userCreated: (state) => {
    Object.assign(state, { created: true });
  },
  addErrors: (state, errors) => {
    Object.assign(state, { errors });
  },
  addValidationErrors: (state, errors) => {
    Object.assign(state, { validationErrors: errors });
  },
  resetUserCreated: (state) => {
    Object.assign(state, { created: false });
  },
  resetErrors: (state) => {
    Object.assign(state, { errors: [] });
  },
  resetValidationErrors: (state) => {
    Object.assign(state, { validationErrors: [] });
  },
};

export default mutations;
