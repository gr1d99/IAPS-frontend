import axios from 'axios';
import VueCookies from 'vue-cookies';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});


api.defaults.headers.common['X-Access-Token'] = VueCookies.get('jwt-token');

export default api;
