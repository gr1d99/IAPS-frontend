<template>
  <div class="container-fluid" v-if="this.openings.meta">
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="openings-tab" data-toggle="tab" href="#openings" role="tab" aria-controls="home" aria-selected="true">Openings</a>
          </li>
        </ul>
        <div class="tab-content" id="adminTabContent">
          <div class="tab-pane fade show active" id="openings" role="tabpanel" aria-labelledby="openings-tab">
            <div class="openings-wrapper">
              <div class="all-openings-btn">
                <button type="button" class="btn btn-primary">
                  All <span class="badge badge-light">{{ this.openings.meta["total-count"] }}</span>
                </button>
              </div>

              <div class="d-flex justify-content-center openings-content">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Open</th>
                    <th scope="col">Location</th>
                  </tr>
                  </thead>
                  <OpeningRow :openings="this.openings.data"/>
                </table>
              </div>
              <OpeningsPagination
                :links="this.openings.links"
                :meta="this.openings.meta"
                @page-requested="fetchOpeningsByPage"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
</template>
<script>
import appLoadingMixin from '../../mixins/appLoadingMixin';
import OpeningRow from './OpeningRow.vue';
import OpeningsPagination from './OpeningsPagination.vue';

export default {
  name: 'AdminHomePage',
  components: {
    OpeningRow,
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
</style>
