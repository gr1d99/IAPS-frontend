<template>
  <div class="col-md-12">
    <div class="container py-3">

      <form class="bg-primary" id="new-opening-form" v-on:submit.prevent>

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
                   value="Send message" @click="createOpening">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';

import { OPENING_CREATED } from '../../../constants/messages';

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
      this.$store.dispatch('openings/createOpening', this.opening)
        .then(() => {
          this.clearFormData();
          this.$router.push({ name: 'Home' });
          console.log(OPENING_CREATED)
          this.$store.dispatch('addNotification', [OPENING_CREATED]);
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
#new-opening-form {
  margin-top: 50px;
  background-color: red;
}
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
