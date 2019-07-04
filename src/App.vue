<template>
  <div id="iaas">
    <NavigationBar :is-logged-in="isLoggedIn"
                   :is-admin="isAdmin"
                   :current-user="currentUser"
                   :current-user-name="currentUserName"
                   v-on:logout-user="logoutUser"/>
    <router-view :app-loading="appLoading"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavigationBar from '@/components/Navigation/NavigationBar.vue';

export default {
  name: 'app',
  created() {
    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          this.logoutUser();
        }
        return Promise.reject(error);
      },
    );
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
      isAdmin: 'authentication/isAdmin',
      currentUser: 'authentication/currentUser',
      currentUserName: 'authentication/currentUserName',
    }),
    ...mapGetters({
      appLoading: 'appLoading',
    }),
  },
  components: {
    NavigationBar,
  },
  methods: {
    logoutUser() {
      this.$cookies.remove('jwt-token');
      this.$store.commit('authentication/logoutSuccess');
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
</style>
