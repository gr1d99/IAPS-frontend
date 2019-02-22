const mutations = {
  addErrors: (state, errors) => {
    Object.assign(state, { errors });
  },
  setLoading: (state, status) => {
    switch (status) {
      case 'waiting':
        Object.assign(state, { loading: true });
        break;
      case 'done':
        Object.assign(state, { loading: false });
        break;
      default:
        Object.assign(state, { loading: true });
        break;
    }
  },
  resetErrors: (state) => {
    Object.assign(state, { errors: [] });
  },
};

export default mutations;
