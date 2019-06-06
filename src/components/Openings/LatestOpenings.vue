<template>
<div class="row">
  <div class="col-lg-4 mb-4" v-for="n in 3">
    <OpeningCard
      title="Card Title"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
      openingDetailUrl="#"/>
  </div>
</div>
<!-- /.row -->
</template>

<script>
import OpeningCard from '@/components/Openings/OpeningCard.vue';

export default {
  name: 'LatestOpenings',
  components: {
    OpeningCard,
  },
};
</script>

<style scoped>

</style>
