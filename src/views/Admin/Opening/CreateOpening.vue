<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">

        <h5 class="text-center pt-5">New Opening</h5>

        <form class="bg-primary mt-4" id="new-opening-form" v-on:submit.prevent>

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
                     value="Submit"
                     @click="createOpening">
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

import {
  BAD_REQUEST_MESSAGE,
  OPENING_CREATED,
} from '../../../constants/messages';

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
  components: { DatePicker },
  computed: {
    errors() {
      return this.$store.getters['openings/errors'];
    },
    hasErrors() {
      return this.errors.length > 0;
    },
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
.form-group {
  padding: 10px 30px 0 30px;
}
.new-opening-form-btn {
  margin-left: 30px;
  margin-bottom: 30px;
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
