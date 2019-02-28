<template>
  <div id="iaas">
    <div class="header">
      <NavigationBar :isLoggedIn="this.isLoggedIn"
                     :isAdmin="this.isAdmin"/>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <AlertBox v-show="renderAlerts"
                    :errors="errors"
                    :notifications="notifications"/>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'; // eslint-disable-line
import AlertBox from './components/Alert/AlertBox.vue';
import authenticationMixin from './mixins/authenticationMixin';

export default {
  name: 'app',
  mounted() {
    this.$root.$on('user-logged-in', () => {
      this.isLoggedIn = this.checkLogin();
      this.isAdmin = this.checkAdmin();
    });

    this.$root.$on('user-logged-out', () => {
      this.isLoggedIn = this.checkLogin();
    });

    this.$root.$on('reset-app-wide-errors-and-messages', () => {
      this.$store.dispatch('resetErrors');
      this.$store.dispatch('resetNotifications');
    });
  },
  components: {
    NavigationBar,
    AlertBox,
  },
  computed: {
    errors() {
      return this.$store.getters.fetchErrors;
    },
    notifications() {
      return this.$store.getters.fetchNotifications;
    },
    renderAlerts() {
      return this.errors.length > 0 || this.notifications.length > 0;
    },
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
</style>
