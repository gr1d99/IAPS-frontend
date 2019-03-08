<template>
  <div class="container" v-if="openingData.data">
    <div class="row">
      <div class="col-2"></div>
      <div class="col">
        <div class="opening-card">
          <div class="card d-flex justify-content-center">
            <div class="card-body">
              <h4 class="card-title pl-2">{{ this.openingData.data.attributes.title }}</h4>
              <hr/>
              <div class="d-flex flex-column justify-content-start">
                <span class="opening-location pt-2 pl-2">Location: {{this.openingData.data.attributes.location}}</span>
                <span class="opening-start-date pt-2 pl-2">Start Date: {{this.openingData.data.attributes['start-date']}}</span>
                <span class="opening-end-date pb-2 pl-2">End Date: {{this.openingData.data.attributes['end-date']}}</span>
              </div>
              <hr/>
              <div class="d-flex flex-column pl-2">
                <p>{{this.openingData.data.attributes.qualifications }}</p>
                <p class="card-text">{{ this.openingData.data.attributes.qualifications }}</p>
              </div>
              <div class="d-flex flex-column mt-3">
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import appLoadingMixin from '../../mixins/appLoadingMixin';

export default {
  name: 'ShowOpening',
  mounted() {
    this.$store.dispatch('openings/fetchOpening', this.$route.params.id);
  },
  computed: {
    ...mapGetters('openings', ['openingData']),
  },
  mixins: [appLoadingMixin],
};
</script>

<style scoped>
.opening-card {
  padding-top: 50px;
}
.opening-start-date {
  background-color: whitesmoke;
}
.opening-end-date {
  background-color: whitesmoke;
}
.opening-location {
  background-color: ghostwhite;
}
</style>
