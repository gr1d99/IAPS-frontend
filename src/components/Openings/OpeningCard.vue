<template>
  <div class="card h-100">
    <h4 class="card-header"><router-link :to="openingDetailUrl">{{ title }}</router-link></h4>
    <div class="card-body">
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer">
      <router-link :to="openingDetailUrl" class="btn btn-primary">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpeningCard',
  props: [
    'title',
    'description',
    'openingDetailUrl',
  ],
};
</script>

<style scoped>
  .card-header a {
    text-decoration: none;
  }
</style>
