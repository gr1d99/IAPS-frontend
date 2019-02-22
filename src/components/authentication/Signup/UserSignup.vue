<template>
  <div class="col-md-4 offset-md-4">
    <div class="card signup-form-card">
      <div class="card-body">
        <div class="card-text">
          <h3 class="text-center text-uppercase">Sign up</h3>
        </div>
        <form class="signup-form" v-on:submit.prevent>

          <div class="alert alert-danger signup-error-box"
               role="alert"
               v-show="hasValidationErrors">
            <ul class="errors">
              <li class="error-item"
                  v-for="(error, index) in validationErrors"
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
export default {
  name: 'UserSignup',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    validationErrors() {
      return Object.values(this.$store.getters['users/validationErrors']).flat();
    },
    hasValidationErrors() {
      return this.validationErrors.length > 0;
    },
  },
  methods: {
    submitData() {
      this.$store.dispatch('users/resetErrors');
      this.$store.dispatch('users/resetValidationErrors');
      const data = {
        user: {
          email: this.email,
          password: this.password,
        },
      };
      this.$store.dispatch('users/createUser', data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/signup_page";
</style>
