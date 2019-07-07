import Cookies from 'js-cookie';
import api from '@/api';

export default {
  mounted() {
    api.defaults.headers.common['X-Access-Token'] = Cookies.get('jwt-token');
  },
};
