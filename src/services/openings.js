import api from '../api';

const openings = {
  create(data) { return api.post('/openings', data); },
  all(page) { return api.get(`/openings?page[number]=${page}`); },
  get(openingId) { return api.get(`/openings/${openingId}`); },
  edit(openingId, data) { return api.put(`/openings/${openingId}`, data); },
  delete(openingId) { return api.delete(`/openings/${openingId}`); },
};

export default openings;
