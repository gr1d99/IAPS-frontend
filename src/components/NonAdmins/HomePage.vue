<template>
  <div class="container-fluid" v-if="this.openings.meta">
    <div class="row">
      <div class="col-lg-12">
        <div class="openings-wrapper">
          <div class="d-flex justify-content-center openings-content">
            <div class="row">
              <div class="col-md-4" v-for="opening in openings.data" :key="opening.id">
                <div class="card p-2 mb-4 opening-card">
                  <h6 class="card-header">
                    <router-link
                      style="text-decoration: none"
                      :to="{ name: 'ShowOpening', params: { id: opening.id }}">
                      {{ opening.attributes.title }}
                    </router-link>
                  </h6>
                  <div class="card-body">
                    <span class="card-title">
                      <small class="bagde badge-pill" :class="opening.attributes.open ? 'badge-success': 'badge-danger'">{{ opening.attributes.open ? 'open': 'closed' }}</small>
                    </span>
                    <br/>
                    <p class="card-text">{{ opening.attributes.description | truncate(100)  }}</p>
                  </div>
                  <div class="card-footer" v-if="opening.attributes.open">
                    <router-link :to="{ name: 'ShowOpening', params: { id: opening.id }}" class="btn btn-primary">Apply now</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OpeningsPagination
            :links="this.openings.links"
            :meta="this.openings.meta"
            @page-requested="fetchOpeningsByPage"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appLoadingMixin from '../../mixins/appLoadingMixin';
import OpeningsPagination from '../Admin/OpeningsPagination.vue';

export default {
  name: 'AdminHomePage',
  components: {
    OpeningsPagination,
  },
  data() {
    return {
      opening: this.openings,
    };
  },
  created() {
    this.$store.dispatch('openings/fetchAllOpenings');
  },
  computed: {
    openings() {
      return this.$store.state.openings.openingsData;
    },
  },
  methods: {
    fetchOpeningsByPage(page) {
      this.$store.dispatch('openings/fetchAllOpenings', page);
    },
  },
  mixins: [appLoadingMixin],
};
</script>
<style lang="scss" scoped>
  .openings-wrapper {
    padding-top: 20px;
  }
  .openings-content {
    padding-top: 20px;
  }
  .opening-card {
    min-height: 220px;
  }
</style>
