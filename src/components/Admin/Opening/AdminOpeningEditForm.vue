<template>
<form v-on:submit.prevent="handleFormSubmit">
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="id_title">Title</label>
      <input id="id_title"
             name="title"
             type="text"
             class="form-control"
             placeholder="Title"
             required
             v-model="openingTitle"/>
    </div>

    <div class="form-group col-md-4">
      <label for="id_company">Company</label>
      <input id="id_company"
             name="company"
             type="text"
             class="form-control"
             placeholder="Company Name"
             required
             v-model="openingCompany"/>
    </div>

    <div class="form-group col-md-4">
      <label for="id_location">Location</label>
      <input id="id_location"
             name="location"
             type="text"
             class="form-control"
             placeholder="Opening Location"
             required
             v-model="openingLocation"/>
    </div>
  </div>

  <div class="form-group">
    <label for="id_description">Description</label>
    <textarea id="id_description"
              name="description"
              class="form-control"
              rows="3"
              v-model="openingDescription">
          </textarea>
  </div>

  <div class="form-group">
    <label for="id_qualifications">Qualifications</label>
    <textarea id="id_qualifications"
              name="qualifications"
              class="form-control"
              rows="3"
              v-model="openingQualifications">
          </textarea>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="id_start_date">Start Date</label>
      <input id="id_start_date"
             name="start_date"
             type="date"
             class="form-control"
             required
             v-model="openingStartDate"/>
    </div>

    <div class="form-group col-md-6">
      <label for="id_end_date">Start Date</label>
      <input id="id_end_date"
             name="end_date"
             type="date"
             class="form-control"
             required
             v-model="openingEndDate"/>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-sm">Update</button>
</form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('openings', ['openingData']),
    errors() {
      return this.$store.getters['openings/errors'];
    },
    hasErrors() {
      return this.errors.length > 0;
    },
    openingTitle: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        const { title } = attributes;
        return title;
      },
      set(value) {
        this.$store.commit('openings/updateOpeningTitle', value);
      },
    },
    openingCompany: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        const { company } = attributes;
        return company;
      },
      set(value) {
        this.$store.commit('openings/updateOpeningCompany', value);
      },
    },
    openingLocation: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        const { location } = attributes;
        return location;
      },
      set(value) {
        this.$store.commit('openings/updateOpeningLocation', value);
      },
    },
    openingDescription: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        const { description } = attributes;
        return description;
      },
      set(value) {
        this.$store.commit('openings/updateOpeningDescription', value);
      },
    },
    openingQualifications: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        const { qualifications } = attributes;
        return qualifications;
      },
      set(value) {
        this.$store.commit('openings/updateOpeningQualifications', value);
      },
    },
    openingStartDate: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        return new Date(attributes['start-date']).toISOString().split('T')[0];
      },
      set(value) {
        this.$store.commit('openings/updateOpeningStartDate', value);
      },
    },
    openingEndDate: {
      get() {
        const { attributes } = this.$store.state.openings.openingData;
        return new Date(attributes['end-date']).toISOString().split('T')[0];
      },
      set(value) {
        this.$store.commit('openings/updateOpeningEndDate', value);
      },
    },
  },
  methods: {
    handleFormSubmit() {
      this.$emit('form-submitted');
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1em;
  padding-bottom: 0.5em;
  border-radius: 0.2em;
}
</style>
