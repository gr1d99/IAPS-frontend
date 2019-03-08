<template>
  <div id="iaas">
    <div class="header">
      <NavigationBar :isLoggedIn="this.isLoggedIn"
                     :isAdmin="this.isAdmin"/>
    </div>
    <PageNotFound v-if="!pageFound"/>
    <div class="container-fluid" v-else>
      <div class="row">
        <div class="col-md-12">
          <AlertBox v-show="renderAlerts"
                    :errors="errors"
                    :notifications="notifications"/>
        </div>
      </div>
      <AppLoading v-if="appLoading"/>
      <router-view v-show="!appLoading"/>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'; // eslint-disable-line
import AlertBox from './components/Alert/AlertBox.vue';
import AppLoading from './components/Loading/AppLoading.vue';
import PageNotFound from './components/Errors/PageNotFound.vue';
import authenticationMixin from './mixins/authenticationMixin';
import appLoadingMixin from './mixins/appLoadingMixin';
import errorsMixin from './mixins/errorsMixin';

export default {
  name: 'app',
  components: {
    NavigationBar,
    AlertBox,
    AppLoading,
    PageNotFound,
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
  mixins: [
    authenticationMixin,
    appLoadingMixin,
    errorsMixin,
  ],
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
</style>
