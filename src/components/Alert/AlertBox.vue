<template>
  <div class="alert-dismissible fade show alert-box" :class="alertClass" role="alert">
    <ul class="errors-alert" v-show="hasErrors">
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>

    <p class="text-center notification-alert" v-show="hasNotification">
      {{this.notification}}
    </p>

    <button type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="clearAlerts">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: ['errors', 'notification'],
  data() {
    return {};
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    },
    hasNotification() {
      return this.notification.length > 0;
    },
    alertClass() {
      return this.hasErrors ? 'alert alert-warning' : 'alert alert-success';
    },
  },
  methods: {
    clearAlerts() {
      this.$store.dispatch('users/resetErrors');
      this.$store.dispatch('users/resetUserCreated');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/main";
.alert-box {
  margin-top: rem(18px);
  padding-bottom: 0;
}
.errors-alert, .notification-alert {
  font-size: 12px;
}
</style>
