import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    common: {
      'X-Access-Token': Cookies.get('jwt-token'),
    },
  },
});

export default api;
