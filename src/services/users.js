import api from '../api';

const users = {
  create(data) {
    return api.post('/users', data);
  },
};

export default users;
