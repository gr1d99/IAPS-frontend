<template>
  <tbody>
  <tr v-for="(opening) in this.openings" :key="opening.id">
    <th scope="row">{{ opening.id }}</th>
    <td>
      <a href="#">{{ opening.attributes.title }}</a>
    </td>
    <td>
      True
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
<style lang="scss" scoped></style>
