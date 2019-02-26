export default {
  addErrors: ({ commit }, errors) => {
    commit('addErrors', errors);
  },
  addNotification: ({ commit }, notifications) => {
    commit('addNotifications', notifications);
  },
  resetErrors: ({ commit }) => {
    commit('resetErrors');
  },
  resetNotifications: ({ commit }) => {
    commit('resetNotifications');
  },
};
