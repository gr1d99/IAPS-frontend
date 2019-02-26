const mutations = {
  addErrors: (state, errors) => (Object.assign(state, { errors })),
  resetErrors: state => (Object.assign(state, { errors: [] })),
};

export default mutations;
