<template>
<div class="container">
  <h2 class="my-4 text-center">Latest openings</h2>
  <LatestOpenings/>

  <!--&lt;!&ndash; Portfolio Section &ndash;&gt;-->
  <!--<h2 class="text-center">Portfolio Heading</h2>-->

  <!--<IaasPortfolio/>-->

  <!-- Features Section -->
  <IaasFeatures/>

  <hr>

  <!-- Call to Action Section -->
  <div class="row mb-4">
    <div class="col-md-8">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
    </div>
    <div class="col-md-4">
      <a class="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
    </div>
  </div>
</div>
</template>

<script>
import LatestOpenings from '@/components/Openings/LatestOpenings.vue';
import IaasPortfolio from '@/components/IaasPortfolio.vue';
import IaasFeatures from '@/components/IaasFeatures.vue';

export default {
  name: 'PageContent',
  components: {
    IaasFeatures,
    IaasPortfolio,
    LatestOpenings,
  },
};
</script>

<style scoped></style>
