import { DONE_TYPE, WAITING_TYPE } from '../../../../constants/async_types';
import Users from '../../../../services/users';
import { BAD_REQUEST_MESSAGE } from '../../../../constants/messages';

const mixin = {
  methods: {
    createUser() {
      this.$store.dispatch('users/resetErrors');
      this.$store.dispatch('users/resetValidationErrors');
      const data = {
        user: {
          email: this.email,
          password: this.password,
        },
      };
      this.$store.commit('users/setLoading', WAITING_TYPE);
      Users.create(data).then((response) => {
        this.$store.commit('users/setLoading', DONE_TYPE);
        const accessToken = response.headers['x-access-token'];
        this.$cookies.set('jwt-token', accessToken);
        this.$store.commit('users/userCreated');
        this.$root.$emit('user-logged-in');
        this.$router.push('/');
        setTimeout(() => {
          this.$store.commit('users/resetUserCreated');
        }, process.env.VUE_APP_CLEAR_NOTIFICATION_MESSAGE_AFTER || 3000);
      }).catch((error) => {
        this.$store.commit('users/setLoading', DONE_TYPE);
        switch (error.response.status) {
          case 400:
            this.$store.commit('users/addErrors', [BAD_REQUEST_MESSAGE]);
            break;
          case 422:
            this.$store.commit('users/addValidationErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
    },
  },
};

export default mixin;
