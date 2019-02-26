import api from '../api';

const sessions = {
  create(data) {
    return api.post('/sessions', data);
  },
};

export default sessions;
