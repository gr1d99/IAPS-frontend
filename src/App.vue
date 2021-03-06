<template>
  <div id="iaas">
    <NavigationBar :is-logged-in="isLoggedIn"
                   :is-admin="isAdmin"
                   :current-user="currentUser"
                   :current-user-name="currentUserName"
                   v-on:logout-user="logoutUser"/>
    <router-view :is-admin="isAdmin" :app-loading="appLoading"></router-view>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

import { mapGetters } from 'vuex';

import NavigationBar from '@/components/Navigation/NavigationBar.vue';

import api from '@/api';

import axiosConfig from '@/mixins/axiosConfig';

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
      Cookies.remove('jwt-token');

      delete api.defaults.headers.common['X-Access-Token'];

      this.$store.dispatch('authentication/userLoggedOut');

      this.redirectAfterLogout();
    },
    redirectAfterLogout() {
      const currentPath = this.$route.path;

      const whiteListedPaths = ['/sign_in', 'sign_up'];

      if (whiteListedPaths.indexOf(currentPath) < 0) {
        this.$router.push({
          name: 'home-page',
        });
      }
    },
  },
  mixins: [
    axiosConfig,
  ],
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
.btn {
  border-radius: .2rem;
}
.br-2 {
  border-radius: .2rem;
}
.app-loader {
  margin-top: 100px;
}
</style>
