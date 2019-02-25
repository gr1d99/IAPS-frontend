<template>
  <div id="iaas">
    <div class="header">
      <NavigationBar/>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <AlertBox v-show="renderAlerts"
                    :errors="errors"
                    :notification="notification"/>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'; // eslint-disable-line
import AlertBox from './components/Alert/AlertBox.vue';
import { REGISTRATION_SUCCESS } from './constants/messages';

export default {
  name: 'app',
  components: {
    NavigationBar,
    AlertBox,
  },
  computed: {
    errors() {
      return this.$store.getters['users/usersErrors'];
    },
    notification() {
      if (this.$store.getters['users/userCreated']) {
        return REGISTRATION_SUCCESS;
      }
      return '';
    },
    renderAlerts() {
      return this.$store.getters['users/renderAlerts'];
    },
  },
};
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
