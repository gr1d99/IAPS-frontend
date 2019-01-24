<template>
  <div id="iaas">
    <div class="header">
      <NavigationBar/>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'; // eslint-disable-line

export default {
  name: 'app',
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
