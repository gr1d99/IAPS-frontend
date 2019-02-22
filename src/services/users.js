import api from '../api';

const user = {
  create(data) {
    return api.post('/users', data);
  },
};

export default user;
