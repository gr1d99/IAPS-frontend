export default {
  setCvData(state, data) {
    Object.assign(state, { cvData: data });
  },
  setResumeData(state, data) {
    Object.assign(state, { resumeData: data });
  },
  removeCvData(state) {
    Object.assign(state, { cvData: null });
  },
  removeResumeData(state) {
    Object.assign(state, { resumeData: null });
  },
};
