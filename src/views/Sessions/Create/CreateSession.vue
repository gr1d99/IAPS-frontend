<template>
  <div class="col-md-4 offset-md-4">
    <div class="card signin-form-card">
      <div class="card-body">
        <div class="card-text">
          <h3 class="text-center text-uppercase">Sign in</h3>
        </div>
        <form class="signin-form" v-on:submit.prevent>

          <div class="alert alert-danger signin-error-box"
               role="alert"
               v-show="hasSessionErrors">
            <ul class="errors">
              <li class="error-item"
                  v-for="(error, index) in sessionErrors"
                  :key="index">{{error}}</li>
            </ul>
          </div>

          <div class="form-group">
            <label for="id_email">Email</label>
            <input id="id_email"
                   type="email"
                   class="form-control"
                   placeholder="you@example.com"
                   v-model="email" />
          </div>

          <div class="form-group">
            <label for="id_password">Password</label>
            <input id="id_password"
                   type="password"
                   class="form-control"
                   v-model="password" />
          </div>

          <div class="signin-form-button">
            <button type="submit"
                    class="btn btn-default bg-dark text-uppercase"
                    @click="submitData">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { BAD_REQUEST_MESSAGE } from '../../../constants/messages';
import { DONE_TYPE, WAITING_TYPE } from '../../../constants/async_types';
import Sessions from '../../../services/sessions';

export default {
  name: 'CreateSession',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    sessionErrors() {
      return this.$store.getters['sessions/sessionErrors'];
    },
    hasSessionErrors() {
      return this.sessionErrors.length > 0;
    },
  },
  methods: {
    submitData() {
      const data = {
        sessions: {
          email: this.email,
          password: this.password,
        },
      };
      this.$root.$emit('reset-all-messages');

      this.$store.dispatch('sessions/resetErrors');

      this.$store.commit('setLoading', WAITING_TYPE);

      Sessions.create(data)
        .then((response) => {
          this.$store.commit('setLoading', DONE_TYPE);
          const accessToken = response.headers['x-access-token'];

          this.$cookies.set('jwt-token', accessToken);

          this.$root.$emit('user-logged-in');

          this.$router.push('/');
        })
        .catch((error) => {
          this.$store.commit('setLoading', DONE_TYPE);

          switch (error.response.status) {
            case 400:
              this.$store.dispatch('addErrors', [BAD_REQUEST_MESSAGE]);
              break;
            case 401:
              this.$store.dispatch('sessions/addErrors', error.response.data.errors);
              break;
            default:
              break;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/create_session";
</style>