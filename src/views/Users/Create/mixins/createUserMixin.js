import { DONE_TYPE, WAITING_TYPE } from '../../../../constants/async_types';
import Users from '../../../../services/users';
import { BAD_REQUEST_MESSAGE, REGISTRATION_SUCCESS } from '../../../../constants/messages';

const mixin = {
  methods: {
    createUser() {
      const data = {
        user: {
          email: this.email,
          password: this.password,
        },
      };

      this.$store.commit('setLoading', WAITING_TYPE);

      Users.create(data).then((response) => {
        this.$store.commit('setLoading', DONE_TYPE);

        const accessToken = response.headers['x-access-token'];

        this.$cookies.set('jwt-token', accessToken);

        this.$store.dispatch('users/setUserRole');

        this.$store.commit('addNotifications', [REGISTRATION_SUCCESS]);

        this.$root.$emit('user-logged-in');

        this.$router.push('/');
      }).catch((error) => {
        this.$store.commit('setLoading', DONE_TYPE);
        const serverErrors = error.response.data.errors;
        const errorsMapper = (acc, curr) => (acc.concat(serverErrors[curr]));

        switch (error.response.status) {
          case 400:
            this.errors = [BAD_REQUEST_MESSAGE];
            break;
          case 422:
            this.errors = Object.keys(serverErrors).reduce(errorsMapper, []);
            break;
          default:
            break;
        }
      });
    },
  },
};

export default mixin;
