<template>
  <div id="iaas">
    <div class="header">
      <NavigationBar/>
    </div>
    <div class="container-fluid">
      <HomePage/>
      <router-view />
    </div>
  </div>
</template>

<script>
import HomePage from './components/Pages/HomePage/HomePage'; // eslint-disable-line
import NavigationBar from './components/Navigation/NavigationBar'; // eslint-disable-line

export default {
  name: 'app',
  components: {
    HomePage,
    NavigationBar,
  },
};
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
