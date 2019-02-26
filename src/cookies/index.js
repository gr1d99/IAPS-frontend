import Vue from 'vue';
import VueCookies from 'vue-cookies';

VueCookies.config(process.env.VUE_APP_JWT_TOKEN_COOKIE_EXPIRY);

window.$cookies = VueCookies;

Vue.use(VueCookies);
