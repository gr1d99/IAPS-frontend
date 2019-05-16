<template>
  <div class="carousel-item active" :style="{'background-image': backgroundImageUrl}">
    <div class="carousel-caption d-none d-md-block">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPageCarousel',
  props: ['backgroundImageUrl', 'title', 'description'],
};
</script>

<style scoped>

</style>
