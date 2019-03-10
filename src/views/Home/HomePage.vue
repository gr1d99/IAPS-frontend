<template>
  <div class="iaas home-page">
    <div v-if="isAdmin">
      <AdminHomePage />
    </div>
    <div v-else>
      <NonAdminHomePage />
    </div>
  </div>
</template>

<script>
import authenticationMixin from '../../mixins/authenticationMixin';
import AdminHomePage from '../../components/Admin/HomePage.vue';
import NonAdminHomePage from '../../components/NonAdmins/HomePage.vue';

export default {
  name: 'HomePage',
  components: {
    AdminHomePage,
    NonAdminHomePage,
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss" scoped>
@import "assets/homepage";
</style>
