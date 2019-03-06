export default {
  errors: state => (Object.values(state.errors).flat()),
  response: state => (state.responseData),
};
