import api from '../api';

const applications = {
  create(openingId, data) {
    return api.post(`/openings/${openingId}/applications`, data);
  },
};

export default applications;
