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
                   :class="{'is-invalid': !fields['email']['valid']}"
                   placeholder="you@example.com"
                   v-model="email" />
            <div class="invalid-feedback">
              <span :key="index"
                    v-for="(error, index) in fields['email']['errors']">
                {{error}}</span>
            </div>

          </div>

          <div class="form-group">
            <label for="id_password">Password</label>
            <input id="id_password"
                   type="password"
                   class="form-control"
                   :class="{'is-invalid': !fields['password']['valid']}"
                   v-model="password" />
            <div class="invalid-feedback">
              <span :key="index"
                    v-for="(error, index) in fields['password']['errors']">
                {{error}}</span>
            </div>
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
import { REGISTRATION_SUCCESS } from '../../../constants/messages';

export default {
  name: 'UserSignup',
  data() {
    return {
      email: '',
      password: '',
      fields: {
        email: {
          valid: true,
          errors: [],
        },
        password: {
          valid: true,
          errors: [],
        },
      },
    };
  },
  methods: {
    submitData() {
      this.clearErrors();
      const data = {
        email: this.email,
        password: this.password,
      };
      this.axios
        .post(REGISTRATION_URL,
          data)
        .then((response) => {
          this.registrationSuccess();
        })
        .catch((error) => {
          const { data, status } = error.response;
          if (status === 422) {
            const { errors } = data;
            this.updateValidationErrors(errors);
          }
        });
    },
    registrationSuccess() {
      this.$store.commit('showAlertMessage', REGISTRATION_SUCCESS);
      this.$router.push('/');
    },
    updateValidationErrors(errors) {
      const formFields = ['email', 'password'];
      Object.entries(errors).forEach((entry) => {
        const field = entry[0];
        if (formFields.includes(field)) {
          const newErrors = {};
          newErrors[field] = { valid: false, errors: entry[1] };
          Object.assign(this.fields, newErrors);
        }
      });
    },
    clearErrors() {
      Object.entries(this.fields).forEach((field) => {
        const fieldProperty = {};
        fieldProperty[field[0]] = { valid: true, errors: [] };
        Object.assign(this.fields, fieldProperty);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/signup_page";
</style>
