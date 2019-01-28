<template>
  <div class="col-md-4 offset-md-4">
    <div class="card signup-form-card">
      <div class="card-body">
        <div class="card-text">
          <h3 class="text-center text-uppercase">Sign up</h3>
        </div>
        <form class="signup-form" v-on:submit.prevent>
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

          <div class="form-group">
            <label for="id_password_confirm">Confirm</label>
            <input id="id_password_confirm"
                   type="password"
                   class="form-control"
                   v-model="confirm"/>
          </div>

          <div class="signup-form-button">
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
import { REGISTRATION_URL } from '../../../constants/api';

export default {
  name: 'UserSignup',
  data() {
    return {
      email: '',
      password: '',
      confirm: '',
    };
  },
  methods: {
    submitData() {
      const data = {
        email: this.email,
        password: this.password,
        confirm: this.confirm,
      };
      this.axios
        .post(REGISTRATION_URL,
          data)
        .then(response => (console.log(response)))
        .catch(error => (console.log(error.response.data)));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/signup_page";
</style>
