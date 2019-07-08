<template>
<div class="col-lg-4 mb-4">
  <div class="card h-100">
    <h5 class="card-header">
      <router-link :to="{ name: 'show-opening', params: { id: openingId } }">{{ title }}
      </router-link>
    </h5>
    <div class="card-body">
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer">
      <router-link :to="{ name: 'show-opening', params: { id: openingId } }" class="btn btn-primary">
        Learn More
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'OpeningCard',
  props: [
    'title',
    'description',
    'openingId',
  ],
};
</script>

<style scoped>
  .card-header a {
    text-decoration: none;
  }
  h5.card-header {
    font-size: 15px;
  }
</style>
