<template>
  <div class="alert-dismissible fade show alert-box" :class="alertClass" role="alert">
    <ul class="errors-alert" v-show="hasErrors">
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
    <ul class="notification-alert" v-show="hasNotifications">
      <li v-for="(notification, index) in notifications" :key="index">{{notification}}</li>
    </ul>

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
  name: 'AlertBox',
  props: ['errors', 'notifications'],
  data() {
    return {};
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    },
    hasNotifications() {
      return this.notifications.length > 0;
    },
    alertClass() {
      return this.hasErrors ? 'alert alert-warning' : 'alert alert-success';
    },
  },
  methods: {
    clearAlerts() {
      this.$root.$emit('reset-app-wide-errors-and-messages');
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
.errors-alert li, .notification-alert li {
  list-style: none;
}
</style>
