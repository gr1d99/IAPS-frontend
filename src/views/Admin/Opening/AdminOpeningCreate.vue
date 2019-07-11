<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6 create-opening">
        <h5 class="text-center">New Opening</h5>
        <hr/>
        <AdminOpeningCreateForm :has-errors="hasErrors"
                                :errors="errors"
                                v-on:form-submitted="submitData"/>
        <hr/>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  BAD_REQUEST_MESSAGE,
  OPENING_CREATED,
} from '../../../constants/messages';

import AdminOpeningCreateForm from '@/components/Admin/Opening/AdminOpeningCreateForm.vue';

import axiosConfig from '@/mixins/axiosConfig';

export default {
  name: 'CreateOpening',
  data() {
    return {
      opening: {
        title: '',
        company: '',
        location: '',
        description: '',
        qualifications: '',
        start_date: '',
        end_date: '',
      },
    };
  },
  components: {
    AdminOpeningCreateForm,
  },
  computed: {
    ...mapGetters({
      errors: 'openings/errors',
    }),
    hasErrors() {
      return this.errors.length > 0;
    },
  },
  methods: {
    submitData(form) {
      const formData = this.setupData(form);
      const openingData = {
        opening: formData,
      };

      this.$store.dispatch(
        'openings/createOpening',
        openingData,
      ).then((response) => {
        this.$store.dispatch('openings/clearErrors');

        this.clearFormData();

        const { id } = response.data.data;

        this.$router.push({ name: 'show-opening', params: { id } });

        this.$store.dispatch('addNotification', [OPENING_CREATED]);
      }).catch((error) => {
        switch (error.response.status) {
          case 400:
            this.$store.dispatch('addErrors', [BAD_REQUEST_MESSAGE]);
            break;
          case 422:
            this.$store.dispatch('openings/addErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
    },

    setupData(form) {
      const openingData = {};

      openingData.title = form.title.value;
      openingData.company = form.company.value;
      openingData.location = form.location.value;
      openingData.description = form.description.value;
      openingData.qualifications = form.qualifications.value;
      openingData.start_date = form.start_date.value;
      openingData.end_date = form.end_date.value;

      return openingData;
    },

    createOpening() {
      this.$store.dispatch(
        'openings/createOpening',
        this.opening,
      ).then(() => {
        this.$store.dispatch('openings/clearErrors');

        this.clearFormData();

        this.$router.push({ name: 'Home' });

        this.$store.dispatch('addNotification', [OPENING_CREATED]);
      }).catch((error) => {
        switch (error.response.status) {
          case 400:
            this.$store.dispatch('addErrors', [BAD_REQUEST_MESSAGE]);
            break;
          case 422:
            this.$store.dispatch('openings/addErrors', error.response.data.errors);
            break;
          default:
            break;
        }
      });
    },
    clearFormData() {
      this.opening.title = '';
      this.opening.company = '';
      this.opening.location = '';
      this.opening.description = '';
      this.opening.qualifications = '';
      this.opening.start_date = '';
      this.opening.end_date = '';
    },
  },
  mixins: [
    axiosConfig,
  ],
};
</script>

<style lang="scss" scoped>
div.create-opening {
  margin-top: 100px;
}
</style>
