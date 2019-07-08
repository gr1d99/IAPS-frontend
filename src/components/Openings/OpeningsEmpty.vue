<template>
<div class="text-center">
  <p class="mt-4 text-warn">It looks like you have not created any openings yet, create some now!</p>
  <router-link class="btn btn-primary add-opening" :to="{ name: 'create-opening' }">
    <font-awesome-icon icon="plus" /> Add Opening
  </router-link>
  </div>
</template>

<script>
export default {};
</script>
