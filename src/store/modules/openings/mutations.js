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
  addOpening(state, data) {
    Object.assign(state, { openingData: data });
  },
  updateOpeningTitle(state, value) {
    Object.assign(state.openingData.attributes, { title: value });
  },
  updateOpeningCompany(state, value) {
    Object.assign(state.openingData.attributes, { company: value });
  },
  updateOpeningLocation(state, value) {
    Object.assign(state.openingData.attributes, { location: value });
  },
  updateOpeningDescription(state, value) {
    Object.assign(state.openingData.attributes, { description: value });
  },
  updateOpeningQualifications(state, value) {
    Object.assign(state.openingData.attributes, { qualifications: value });
  },
  updateOpeningStartDate(state, value) {
    Object.assign(state.openingData.attributes, { 'start-date': value });
  },
  updateOpeningEndDate(state, value) {
    Object.assign(state.openingData.attributes, { 'end-date': value });
  },
};
