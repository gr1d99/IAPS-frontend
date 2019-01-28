<template>
  <div class="alert alert-success alert-dismissible fade show alert-box" role="alert">
    {{alertMessage}}
    <button type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="closeAlertBox">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  data() {
    return {};
  },
  computed: {
    alertMessage() {
      return this.$store.state.alertMessage;
    },
  },
  methods: {
    closeAlertBox() {
      this.$store.commit('clearAlertMessage');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/main";
.alert-box {
  margin-top: rem(18px);
}
</style>
