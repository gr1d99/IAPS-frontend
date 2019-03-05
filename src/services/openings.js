import api from '../api';

const openings = {
  create(data) {
    return api.post('/openings', data);
  },
};

export default openings;
