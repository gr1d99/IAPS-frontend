<template>
 <nav class="navbar navbar-expand-md navbar-dark bg-dark">
   <router-link
     class="navbar-brand"
     :to="{ name: 'Home' }">IAAS</router-link>
   <button class="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarText"
           aria-controls="navbarText"
           aria-expanded="false"
           aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarText">
     <ul class="navbar-nav ml-auto">
       <li class="nav-item active">
         <router-link
           class="nav-link"
           :to="{ name: 'CreateUser' }"
           v-if="!this.isLoggedIn">Sign up</router-link>
       </li>

       <li class="nav-item">
         <a class="nav-link"
           @click="logoutUser"
           v-if="this.isLoggedIn">Logout</a>
       </li>
     </ul>
   </div>
 </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: ['isLoggedIn'],
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
