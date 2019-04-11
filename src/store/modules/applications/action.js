export default {
  cacheCvData(context, { data }) {
    context.commit('setCvData', data);
  },
  cacheResumeData(context, { data }) {
    context.commit('setResumeData', data);
  },
  resetCvData(context) {
    context.commit('removeCvData');
  },
  resetResumeData(context) {
    context.commit('removeResumeData');
  },
};
