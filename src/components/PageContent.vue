<template>
<div class="container">
  <h2 class="my-4 text-center">Latest openings</h2>
  <LatestOpenings :openings="openingsData.slice(0, 3)" v-if="openingsData.length > 0" />
  <OpeningsEmpty :is-admin="isAdmin" v-else />
  <hr>
</div>
</template>

<script>
import LatestOpenings from '@/components/Openings/LatestOpenings.vue';
import OpeningsEmpty from '@/components/Openings/OpeningsEmpty.vue';

export default {
  name: 'PageContent',
  props: {
    appLoading: {
      type: Boolean,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    openingsData: {
      type: Array,
      required: true,
    },
  },
  components: {
    LatestOpenings,
    OpeningsEmpty,
  },
};
</script>

<style scoped></style>
