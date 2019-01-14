<template>
  <div id="iaps">
    <HomePage/>
  </div>
</template>

<script>
/* eslint-disable import/extensions */
import HomePage from './components/HomePage';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
