<template>
  <div>
    <LandingPageHeader/>
    <PageContent/>
  </div>
</template>

<script>
import authenticationMixin from '../../mixins/authenticationMixin';
import LandingPageHeader from '@/components/LandingPageHeader.vue';
import PageContent from '@/components/PageContent.vue';

export default {
  name: 'HomePage',
  components: {
    LandingPageHeader,
    PageContent,
  },
  mixins: [authenticationMixin],
};
</script>

<style lang="scss" scoped></style>
