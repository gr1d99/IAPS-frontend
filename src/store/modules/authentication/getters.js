import Vue from 'vue';

import { capitalizeFirstLetter } from '../../../utils/capitalizer';


export default {
  isLoggedIn: state => (!!state.token),

  currentUser: state => (Vue.$jwt.decode(state.token)),

  isAdmin: (state, getters) => {
    if (getters.currentUser) {
      return getters.currentUser.role === 'admin';
    }
    return false;
  },

  currentUserName: (state, getters) => {
    if (getters.currentUser) {
      const { email } = getters.currentUser;
      return capitalizeFirstLetter(email.slice(0, email.indexOf('@')));
    }
    return '';
  },
};
