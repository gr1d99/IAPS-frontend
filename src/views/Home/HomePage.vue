<template>
  <div class="iaas home-page">
    <div v-if="isAdmin">
      <AdminHomePage />
    </div>
    <div v-else>
      None Admin
    </div>
  </div>
</template>

<script>
import authenticationMixin from '../../mixins/authenticationMixin';
import AdminHomePage from '../../components/Admin/HomePage.vue';

export default {
  name: 'HomePage',
  components: {
    AdminHomePage,
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss" scoped>
@import "assets/homepage";
</style>
