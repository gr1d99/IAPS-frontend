<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col col-lg-6">
        <div class="opening-card">
          <div class="card d-flex justify-content-center">
            <div v-if="!openingNotFound">
              <div class="card-body" v-if="openingData.data">
                <h4 class="card-title pl-2">{{ this.openingData.data.attributes.title }} <small class="float-right badge badge-pill" style="font-size: 70%" :class="open ? 'badge-success': 'badge-danger'">{{ open ? 'open': 'closed' }}</small></h4>
                <hr/>
                <div class="d-flex flex-column justify-content-start">
                  <span class="opening-company pt-2 pl-2"><strong class="company-header">Company:</strong> {{this.openingData.data.attributes.company}}</span>
                  <span class="opening-location pt-2 pl-2"><strong class="location-header">Location:</strong> {{this.openingData.data.attributes.location}}</span>
                  <span class="opening-start-date pt-2 pl-2"><strong class="start-date-header">Start Date:</strong> {{this.openingData.data.attributes['start-date']}}</span>
                  <span class="opening-end-date pb-2 pl-2"><strong class="end-date-header">End Date:</strong> {{this.openingData.data.attributes['end-date']}}</span>
                </div>
                <hr/>
                <div class="d-flex flex-column pl-2">
                  <strong class="opening-description">Description</strong>
                  <p>{{this.openingData.data.attributes.description }}</p>
                  <strong class="opening-description">Qualifications</strong>
                  <p class="card-text">{{ this.openingData.data.attributes.qualifications }}</p>
                </div>
                <div class="d-flex flex-column mt-3">
                  <span class="admin-action-buttons pl-2" v-if="isAdmin">
                    <router-link :to="{ name: 'EditOpening', params: { id: this.openingData.data.id }}" class="card-link btn-info badge">Edit</router-link>
                    <button class="card-link btn-warning badge" data-toggle="modal" data-target="#confirmDeleteModal">Delete</button>
                    <DeleteOpeningModal :title="this.openingData.data.attributes.title"/>
                  </span>
                </div>
              </div>
            </div>
            <div class="card-body" v-else>
              <h4>Oops!! It seems the opening you are looking for does not exist</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import appLoadingMixin from '../../mixins/appLoadingMixin';
import authenticationMixin from '../../mixins/authenticationMixin';
import DeleteOpeningModal from '../Modals/DeleteOpeningModal.vue';

export default {
  name: 'ShowOpening',
  mounted() {
    this.$store.dispatch('openings/fetchOpening', this.$route.params.id);
  },
  computed: {
    ...mapGetters('openings', ['openingData', 'openingNotFound']),
    open() {
      return this.openingData.data.attributes.open;
    },
  },
  mixins: [appLoadingMixin, authenticationMixin],
  components: {
    DeleteOpeningModal,
  },
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
.opening-company {
  background-color: #f8f5ff;
}
.location-header {
  padding-right: 20px;
}
.start-date-header {
  padding-right: 8px;
}
.end-date-header {
  padding-right: 17px;
}
</style>
