<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">IAAS</router-link>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#iaasCollapse"
            aria-controls="iaasCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="iaasCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link
            class="nav-link"
            :to="{ name: 'Home' }">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item" v-if="this.isLoggedIn && this.isAdmin">
          <a href="#" class="nav-link">Openings</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="this.isLoggedIn">
          <a class="nav-link"
             href="#"
             @click="logoutUser">Logout</a>
        </li>

        <!--# TODO --start-- move this to its own component-->
        <li class="nav-item" v-if="!this.isLoggedIn">
          <router-link
            class="nav-link"
            :to="{ name: 'CreateUser' }">Signup</router-link>
        </li>

        <li class="nav-item" v-if="!this.isLoggedIn">
          <router-link
            class="nav-link"
            :to="{ name: 'CreateSession' }">Login</router-link>
        </li>
        <!--# TODO --end-- -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: ['isLoggedIn', 'isAdmin'],
  data() { return {}; },
  methods: {
    logoutUser() {
      this.$cookies.remove('jwt-token');
      this.$root.$emit('user-logged-out');
    },
  },
};
</script>

<style scoped>

</style>
