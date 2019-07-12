<template>
  <div>
    <LandingPageHeader/>

    <PageContent
      :is-admin="isAdmin"
      :app-loading="appLoading"
      :openings-data="openings.data"
      v-if="dataFetched"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import axiosConfig from '@/mixins/axiosConfig';

import LandingPageHeader from '@/components/LandingPageHeader.vue';
import PageContent from '@/components/PageContent.vue';

export default {
  name: 'HomePage',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchOpenings();
      next();
    });
  },
  props: {
    appLoading: {
      type: Boolean,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    LandingPageHeader,
    PageContent,
  },
  computed: {
    ...mapGetters({
      openings: 'openings/openingsData',
    }),
    dataFetched() {
      return !!(this.openings && this.openings.data);
    },
  },
  methods: {
    fetchOpenings() {
      this.$store.dispatch('openings/fetchAllOpenings');
    },
  },
  mixins: [
    axiosConfig,
  ],
};
</script>

<style lang="scss" scoped></style>
