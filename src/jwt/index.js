import Vue from 'vue';
import VueJWT from 'vuejs-jwt';

const options = {
  storage: 'cookie',
  keyName: 'jwt-token',
};

Vue.use(VueJWT, options);


export default Vue;
