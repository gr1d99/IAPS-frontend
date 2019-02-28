<template>
  <div class="iaas home-page">
    <div v-if="isAdmin">
      Admin
    </div>
    <div v-else>
      None Admin
    </div>
  </div>
</template>

<script>
import authenticationMixin from '../../mixins/authenticationMixin';

export default {
  name: 'HomePage',
  mounted() {
    this.$root.$on('user-logged-out', () => {
      this.isAdmin = this.checkAdmin();
    });
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss" scoped>
@import "assets/homepage";
</style>
