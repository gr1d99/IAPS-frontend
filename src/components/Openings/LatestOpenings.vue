<template>
<div class="row">
    <OpeningCard
      v-for="opening in openings"
      :key="opening.id"
      :title="opening.attributes.title"
      :description="opening.attributes.description"
      :openingId="opening.id"/>
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
  a.add-opening {
    text-decoration: none;
  }
</style>
