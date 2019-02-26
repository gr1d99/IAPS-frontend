const mutations = {
  userCreated: (state) => {
    Object.assign(state, { created: true });
  },
  addErrors: (state, errors) => {
    Object.assign(state, { errors });
  },
  resetUserCreated: (state) => {
    Object.assign(state, { created: false });
  },
  resetErrors: (state) => {
    Object.assign(state, { errors: [] });
  },
};

export default mutations;
