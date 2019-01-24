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
            <input id="id_email" type="email" class="form-control" placeholder="you@example.com" />
          </div>

          <div class="form-group">
            <label for="id_password">Password</label>
            <input id="id_password" type="password" class="form-control" />
          </div>

          <div class="form-group">
            <label for="id_password_confirm">Confirm</label>
            <input id="id_password_confirm" type="password" class="form-control" />
          </div>

          <div class="signup-form-button">
            <button type="submit" class="btn btn-default bg-dark text-uppercase">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
};
</script>

<style lang="scss" scoped>
@import "./assets/signup_page";
</style>
