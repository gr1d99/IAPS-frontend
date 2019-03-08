export default {
  addErrors(state, errors) {
    Object.assign(state, { errors });
  },
  clearErrors(state) {
    Object.assign(state, { errors: {} });
  },
  addOpenings(state, responseData) {
    Object.assign(state, { openingsData: responseData });
  },
  addOpening(state, responseData) {
    Object.assign(state, { openingData: responseData });
  },
  openingNotFound: (state, status) => {
    Object.assign(state, { openingNotFound: status });
  },
};
