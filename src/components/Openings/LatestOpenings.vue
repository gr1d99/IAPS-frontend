<template>
<div class="row">
  <div class="col-lg-4 mb-4" v-for="opening in openings">
    <OpeningCard
      :title="opening.attributes.title"
      :description="opening.attributes.description"
      :openingId="opening.id"/>
  </div>
</div>
<!-- /.row -->
</template>

<script>
import OpeningCard from '@/components/Openings/OpeningCard.vue';

export default {
  name: 'LatestOpenings',
  props: ['openings'],
  components: {
    OpeningCard,
  },
};
</script>

<style scoped>

</style>
