export default {
  errors: state => (Object.values(state.errors).flat()),
  openingsData: state => (state.openingsData),
  openingData: state => (state.openingData),
};
