import { DONE_TYPE, WAITING_TYPE } from '../../../../constants/async_types';
import Users from '../../../../services/users';
import { BAD_REQUEST_MESSAGE, REGISTRATION_SUCCESS } from '../../../../constants/messages';

const mixin = {
  methods: {
    createUser() {
      this.$root.$emit('reset-app-wide-errors-and-messages');

      this.$store.dispatch('users/resetErrors');

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

        this.$store.commit('addNotifications', [REGISTRATION_SUCCESS]);

        this.$root.$emit('user-logged-in');

        this.$router.push('/');
      }).catch((error) => {
        this.$store.commit('setLoading', DONE_TYPE);

        switch (error.response.status) {
          case 400:
            this.$store.commit('addErrors', [BAD_REQUEST_MESSAGE]);
            break;
          case 422:
            this.$store.commit('users/addErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
    },
  },
};

export default mixin;
