<template>
  <div :class="this.className"></div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
  },
};
</script>
<style></style>
