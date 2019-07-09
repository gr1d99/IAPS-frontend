<template>
<div class="text-center">
  <div v-if="isAdmin">
    <p class="mt-4">It looks like you have not created any openings yet, create some now!</p>
    <router-link class="btn btn-primary add-opening" :to="{ name: 'create-opening' }">
      <font-awesome-icon icon="plus" /> Add Opening
    </router-link>
  </div>
  <p class="mt-4" v-else>It looks like there are no openings yet, check again later</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
