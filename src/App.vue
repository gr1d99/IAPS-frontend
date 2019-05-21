<template>
  <div id="iaas">
    <NavigationBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/Navigation/NavigationBar.vue';

export default {
  name: 'app',
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
</style>
