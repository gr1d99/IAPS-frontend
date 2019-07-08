<template>
  <div>
    <LandingPageHeader/>
    <PageContent
      :app-loading="appLoading"
      :openings-data="openings.data"
      v-if="dataFetched"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import authenticationMixin from '@/mixins/authenticationMixin';
import axiosConfig from '@/mixins/axiosConfig';

import LandingPageHeader from '@/components/LandingPageHeader.vue';
import PageContent from '@/components/PageContent.vue';

export default {
  name: 'HomePage',
  mounted() {
    this.$store.dispatch('openings/fetchAllOpenings');
  },
  props: {
    appLoading: {
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
  mixins: [
    authenticationMixin,
    axiosConfig
  ],
};
</script>

<style lang="scss" scoped></style>
