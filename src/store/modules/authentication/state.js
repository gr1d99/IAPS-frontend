import Cookies from 'js-cookie';

export default {
  token: Cookies.get('jwt-token'),
};
