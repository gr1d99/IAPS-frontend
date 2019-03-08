<template>
  <tbody>
  <tr v-for="(opening) in this.openings" :key="opening.id">
    <td>
      <router-link class="opening-link" :to="{ name: 'ShowOpening', params: { id: opening.id }}">{{ opening.attributes.title }}</router-link>
    </td>
    <td>
      <small class="bagde badge-pill" :class="opening.attributes.open ? 'badge-success': 'badge-danger'">{{ opening.attributes.open ? 'open': 'closed' }}</small>
    </td>
    <td>{{ opening.attributes.location }}</td>
  </tr>
  </tbody>
</template>
<script>
export default {
  props: ['openings'],
};
</script>
<style lang="scss" scoped>
.opening-link {
  text-decoration: none;
}
</style>
