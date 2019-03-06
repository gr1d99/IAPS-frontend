export default {
  addErrors(state, errors) {
    Object.assign(state, { errors });
  },
  clearErrors(state) {
    Object.assign(state, { errors: {} });
  },
  addOpenings(state, responseData) {
    Object.assign(state, { responseData });
  },
};
