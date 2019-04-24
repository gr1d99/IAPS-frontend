<template>
  <div id="iaas">
    <NavigationBar/>
    <LandingPageHeader/>
    <PageContent/>
    <PageFooter/>
  </div>
</template>

<script>
import NavigationBar from '@/components/Navigation/NavigationBar.vue';
import LandingPageHeader from '@/components/LandingPageHeader.vue';
import PageFooter from '@/components/Shared/PageFooter.vue';
import PageContent from '@/components/PageContent.vue';

export default {
  name: 'app',
  components: {
    PageContent,
    NavigationBar,
    LandingPageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootswatch/dist/yeti/variables';
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootswatch/dist/yeti/bootswatch';
body {
  padding-top: 56px;
}
</style>

<style scoped lang="scss">
nav {
  margin-bottom: 0;
}
</style>
