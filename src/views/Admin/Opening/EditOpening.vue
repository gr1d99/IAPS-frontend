<template>
  <div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
      <h5 class="text-center pt-4">Edit Opening</h5>

      <form class="bg-primary mt-4 p-4" id="new-opening-form" @submit.prevent="submitEdit">

        <div class="alert alert-danger opening-error-box"
             role="alert"
             v-show="hasErrors">
          <ul class="errors">
            <li class="error-item"
                v-for="(error, index) in errors"
                :key="index">{{error}}</li>
          </ul>
        </div>

        <div class="controls">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="id_title">Title</label>
                <input id="id_title"
                       type="text"
                       class="form-control"
                       placeholder="Title of opening"
                       required="required"
                       v-model="opening.title">
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="id_company">Company</label>
                <input id="id_company"
                       type="text"
                       class="form-control"
                       placeholder="Name of company"
                       required="required"
                       v-model="opening.company">
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="id_location">Location</label>
                <input id="id_location"
                       type="text"
                       class="form-control"
                       placeholder="Company location"
                       v-model="opening.location">
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="id_description">Description</label>
              <textarea id="id_description"
                        class="form-control"
                        placeholder="Description of opening"
                        rows="4"
                        required="required"
                        v-model="opening.description">
                </textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="id_description">Qualifications</label>
              <textarea id="id_qualifications"
                        class="form-control"
                        placeholder="List of qualifications"
                        rows="4"
                        required="required"
                        v-model="opening.qualifications">
                </textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Start Date</label>
              <date-picker class="start-date" v-model="opening.start_date"></date-picker>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label>End Date</label>
              <date-picker v-model="opening.end_date"></date-picker>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <input type="submit"
                   class="btn btn-warning btn-send new-opening-form-btn"
                   value="Submit">
          </div>
        </div>
      </form>
    </div>
    <div class="col-lg-3"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import DatePicker from 'vuejs-datepicker';

export default {
  name: 'EditOpening',
  components: {
    DatePicker,
  },
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
      data_set: false,
    };
  },
  created() {
    this.$store.dispatch('openings/clearErrors');
    this.$store.dispatch('openings/fetchOpening', this.$route.params.id);
    this.setOpeningData();
  },
  computed: {
    ...mapGetters('openings', ['openingData']),
    errors() {
      return this.$store.getters['openings/errors'];
    },
    hasErrors() {
      return this.errors.length > 0;
    },
  },
  methods: {
    setOpeningData() {
      this.opening.title = this.openingData.data.attributes.title;
      this.opening.company = this.openingData.data.attributes.company;
      this.opening.location = this.openingData.data.attributes.location;
      this.opening.description = this.openingData.data.attributes.description;
      this.opening.qualifications = this.openingData.data.attributes.qualifications;
      this.opening.start_date = this.openingData.data.attributes['start-date'];
      this.opening.end_date = this.openingData.data.attributes['end-date'];
    },
    submitEdit() {
      this.$store.dispatch('openings/editOpening',
        {
          openingId: this.$route.params.id,
          opening: this.opening,
        });
    },
  },
};
</script>

<style scoped>
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
