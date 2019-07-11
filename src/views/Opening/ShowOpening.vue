<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col col-lg-6">
        <div class="opening-card">
          <div class="card d-flex justify-content-center">
            <div v-if="openingFound">
              <div v-if="opening.id">
                <div class="card-body">
                  <h4 class="card-title pl-2">{{ opening.attributes.title }} <small class="float-right badge badge-pill opening-status-badge" style="font-size: 70%" :class="opening.attributes.open ? 'badge-success': 'badge-danger'">{{ opening.attributes.open ? 'open': 'closed' }}</small></h4>
                  <hr/>
                  <div class="d-flex flex-column justify-content-start">
                    <span class="opening-company pt-2 pl-2"><strong class="company-header">Company:</strong> {{opening.attributes.company}}</span>
                    <span class="opening-location pt-2 pl-2"><strong class="location-header">Location:</strong> {{opening.attributes.location}}</span>
                    <span class="opening-start-date pt-2 pl-2"><strong class="start-date-header">Start Date:</strong> {{opening.attributes['start-date']}}</span>
                    <span class="opening-end-date pb-2 pl-2"><strong class="end-date-header">End Date:</strong> {{opening.attributes['end-date']}}</span>
                  </div>
                  <hr/>
                  <div class="d-flex flex-column pl-2">
                    <strong class="opening-description">Description</strong>
                    <p>{{opening.attributes.description }}</p>
                    <strong class="opening-description">Qualifications</strong>
                    <p class="card-text">{{ opening.attributes.qualifications }}</p>
                  </div>
                  <div class="d-flex flex-column mt-3">
                  <span class="admin-action-buttons pl-2" v-if="isAdmin">
                    <hr>
                    <router-link :to="{ name: 'edit-opening', params: { id: opening.id }}" class="card-link btn btn-info btn-sm">Edit</router-link>
                    <a class="card-link btn btn-warning btn-sm delete-opening" data-toggle="modal" data-target="#confirmDeleteModal">Delete</a>
                    <DeleteOpeningModal :title="opening.attributes.title"/>
                  </span>
                  </div>
                </div>
                <div class="card-footer" v-if="!isAdmin && opening.attributes.open">
                  <router-link :to="{ name: 'create-application', params: { id: opening.id }}" class="btn btn-primary">Apply now</router-link>
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

import { DONE_TYPE, WAITING_TYPE } from '@/constants/async_types';

import appLoadingMixin from '../../mixins/appLoadingMixin';
import authenticationMixin from '../../mixins/authenticationMixin';
import DeleteOpeningModal from '../../components/Modals/DeleteOpeningModal.vue';

import Opening from '@/services/openings';

export default {
  name: 'ShowOpening',
  mounted() {
    this.fetchOpening();
  },
  data() {
    return {
      opening: {},
      openingFound: false,
    };
  },
  methods: {
    fetchOpening() {
      this.$store.dispatch('setAppLoading', WAITING_TYPE);
      Opening.get(this.$route.params.id).then((response) => {
        this.$store.dispatch('setAppLoading', DONE_TYPE);
        this.openingFound = true;
        this.opening = response.data.data;
      }).catch((error) => {
        if (error.response.status) {
          const { status } = error.response;
          if (status === 404) {
            this.$store.dispatch('setAppLoading', DONE_TYPE);
          }
        }
      });
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
  padding-top: 100px;
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
a.delete-opening {
  color: #fff;
}
a.delete-opening:hover {
  cursor: pointer;
  color: #fff;
}
.opening-status-badge {
  padding-right: 0.8em;
  padding-left: 0.8em;
  padding-bottom: 0.4em;
  border-radius: 0.7em;
}
small.opening-status-badge {
  font-size: 50% !important;
}
</style>
