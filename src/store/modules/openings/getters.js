export default {
  errors: state => (Object.values(state.errors).flat()),
  openingsData: state => (state.openingsData),
};
