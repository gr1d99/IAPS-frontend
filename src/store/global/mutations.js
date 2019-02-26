const mutations = {
  setLoading: (state, status) => {
    switch (status) {
      case 'waiting':
        Object.assign(state, { loading: true });
        break;
      case 'done':
        Object.assign(state, { loading: false });
        break;
      default:
        Object.assign(state, { loading: false });
        break;
    }
  },
  addErrors: (state, errors) => {
    Object.assign(state, { errors });
  },
  resetErrors: (state) => {
    Object.assign(state, { errors: [] });
  },
  addNotifications: (state, notifications) => {
    Object.assign(state, { notifications });
  },
  resetNotifications: (state) => {
    Object.assign(state, { notifications: [] });
  },
};

export default mutations;
