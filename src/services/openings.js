import api from '../api';

const openings = {
  create(data) {
    return api.post('/openings', data);
  },
  all() { return api.get('/openings'); },
};

export default openings;
