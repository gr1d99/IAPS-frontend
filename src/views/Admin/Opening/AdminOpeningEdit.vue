<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6 edit-opening">
        <h5 class="text-center">Edit Opening</h5>
        <hr/>
        <AdminOpeningEditForm v-on:form-submitted="handleFormSubmit"/>
        <hr/>
    </div>
    <div class="col-lg-3"></div>
  </div>
  </div>
</template>

<script>
import AdminOpeningEditForm from '@/components/Admin/Opening/AdminOpeningEditForm.vue';

export default {
  name: 'EditOpening',
  data() {
    return {};
  },
  components: {
    AdminOpeningEditForm,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchOpeningData();
      next();
    });
  },
  watch: {
    $route: 'fetchOpeningData',
  },
  methods: {
    fetchOpeningData() {
      this.$store.dispatch('openings/clearErrors');
      this.$store.dispatch('openings/fetchOpening', this.$route.params.id);
    },
    handleFormSubmit() {
      const { attributes } = this.$store.state.openings.openingData;
      const data = {
        title: attributes.title,
        location: attributes.location,
        company: attributes.company,
        description: attributes.description,
        qualifications: attributes.qualifications,
        start_date: attributes['start-date'],
        end_date: attributes['end-date'],
      };
      const openingId = this.$route.params.id;
      this.$store.dispatch(
        'openings/editOpening',
        { openingId, data },
      ).then(() => {
        this.$router.push({ name: 'show-opening', params: { id: openingId } });
      });
    },
  },
};
</script>

<style scoped>
div.edit-opening {
  margin-top: 100px;
}
.opening-error-box {
  padding-bottom: 0;
}
.errors {
  padding-left: 0;
}
.error-item {
  list-style: none;
  font-size: 12px;
}
</style>
