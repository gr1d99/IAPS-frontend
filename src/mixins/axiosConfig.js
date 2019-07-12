import Cookies from 'js-cookie';
import api from '@/api';

export default {
  created() {
    api.defaults.headers.common['X-Access-Token'] = Cookies.get('jwt-token');
  },
};
