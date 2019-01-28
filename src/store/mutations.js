const mutations = {
  showAlertMessage(state, message) {
    Object.assign(state,
      { showAlertBox: true, alertMessage: message });
  },
  clearAlertMessage(state) {
    Object.assign(state,
      { showAlertBox: false, alertMessage: '' });
  },
};

export default mutations;
