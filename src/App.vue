<template>
  <div id="iaas">
    <NavigationBar :isLoggedIn="isLoggedIn" v-on:logout-user="logoutUser"/>
    <router-view></router-view>
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
