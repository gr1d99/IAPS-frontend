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
  resetValidationErrors: (state) => {
    Object.assign(state, { validationErrors: [] });
  },
};

export default mutations;
