<template>
  <div class="opening-form">
    <div class="alert alert-danger opening-error-box"
         role="alert"
         v-show="hasErrors">
      <ul class="errors">
        <li class="error-item"
            v-for="(error, index) in errors"
            :key="index">{{error}}</li>
      </ul>
    </div>

    <form v-on:submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="id_title">Title</label>
          <input id="id_title"
                 name="title"
                 type="text"
                 class="form-control"
                 placeholder="Title"
                 required
                 v-model="opening.title"/>
        </div>

        <div class="form-group col-md-4">
          <label for="id_company">Company</label>
          <input id="id_company"
                 name="company"
                 type="text"
                 class="form-control"
                 placeholder="Company Name"
                 required
                 v-model="opening.company"/>
        </div>

        <div class="form-group col-md-4">
          <label for="id_location">Location</label>
          <input id="id_location"
                 name="location"
                 type="text"
                 class="form-control"
                 placeholder="Opening Location"
                 required
                 v-model="opening.location" />
        </div>
      </div>

      <div class="form-group">
        <label for="id_description">Description</label>
        <textarea id="id_description"
                  name="description"
                  class="form-control"
                  rows="3"
                  v-model="opening.description">
      </textarea>
      </div>

      <div class="form-group">
        <label for="id_qualifications">Qualifications</label>
        <textarea id="id_qualifications"
                  name="qualifications"
                  class="form-control"
                  rows="3"
                  v-model="opening.qualifications">
      </textarea>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="id_start_date">Start Date</label>
          <input id="id_start_date"
                 name="start_date"
                 type="date"
                 :min="minStartDate"
                 class="form-control"
                 required
                 v-model="opening.start_date"/>
        </div>

        <div class="form-group col-md-6">
          <label for="id_end_date">Start Date</label>
          <input id="id_end_date"
                 name="end_date"
                 type="date"
                 :min="minEndDate"
                 class="form-control"
                 required
                 v-model="opening.end_date"/>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.minStartDate = this.handleMinStartDate();
    this.minEndDate = this.handleMinEndDate();
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
      minStartDate: '',
      minEndDate: '',
    };
  },
  props: {
    hasErrors: {
      type: Boolean,
      required: true,
    },
    errors: {},
  },
  methods: {
    handleSubmit(event) {
      this.$emit('form-submitted', event.target);
    },
    handleMinStartDate() {
      const currentDatetime = new Date();
      const date = currentDatetime.getDate();
      const month = currentDatetime.getMonth() + 1;

      const validationDate = date < 10 ? `0${date}` : date;
      const validationMonth = month < 10 ? `0${month}` : month;

      return `${currentDatetime.getFullYear()}-${validationMonth}-${validationDate}`;
    },
    handleMinEndDate() {
      const currentDatetime = new Date();

      const date = currentDatetime.getDate() + 1;
      const month = currentDatetime.getMonth() + 1;

      const validationDate = date < 10 ? `0${date}` : date;
      const validationMonth = month < 10 ? `0${month}` : month;

      return `${currentDatetime.getFullYear()}-${validationMonth}-${validationDate}`;
    },
  },
};
</script>
