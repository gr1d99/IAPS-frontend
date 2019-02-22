<template>
  <div class="alert-dismissible fade show alert-box" :class="alertClass" role="alert">
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>

    <button type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="clearErrors">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: ['errors'],
  data() {
    return {};
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    },
    alertClass() {
      return this.hasErrors ? 'alert alert-warning' : 'alert alert-success';
    },
  },
  methods: {
    clearErrors() {
      this.$store.dispatch('users/resetErrors');
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
