<template>
  <div class="iaas home-page">
    <h2 class="text-lg-center text-uppercase">IAAS</h2>
    <AdminDashboard v-if="isAdmin"/>
    <div v-else>
      None Admin
    </div>
  </div>
</template>

<script>
import AdminDashboard from '../../components/Admin/Dashboard/AdminDashboard.vue';
import authenticationMixin from '../../mixins/authenticationMixin';

export default {
  name: 'HomePage',
  mounted() {
    this.$root.$on('user-logged-out', () => {
      this.isAdmin = this.checkAdmin();
    });
  },
  components: {
    AdminDashboard,
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss" scoped>
@import "assets/homepage";
</style>
