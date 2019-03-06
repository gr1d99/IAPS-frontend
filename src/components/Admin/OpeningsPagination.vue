<template>
  <div v-if="nextThreePagesAvailable">
    <nav aria-label="openings-navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item"
            :class="previousPageClass">
          <a class="page-link" href="#" tabindex="-1"
             @click="loadOpenings(meta['prev-page'])">Previous</a>
        </li>

        <li class="page-item"
            @click="loadOpenings(firstPaginationLink)">
          <a class="page-link"
             href="#">{{ firstPaginationLink }}</a>
        </li>

        <li class="page-item"
            v-if="nextThreePagesAvailable"
            @click="loadOpenings(secondPaginationLink)">
          <a class="page-link"
             href="#"> {{ secondPaginationLink }}</a>
        </li>

        <li class="page-item"
            v-if="nextThreePagesAvailable"
            @click="loadOpenings(thirdPaginationLink)">
          <a class="page-link"
             href="#">{{ thirdPaginationLink }}</a>
        </li>

        <li class="page-item"
            :class="nextPageClass">
          <a class="page-link"
             href="#"
             @click="loadOpenings(meta['next-page'])">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else>
    <nav aria-label="openings-navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="previousPageClass">
          <a class="page-link" href="#" tabindex="-1" @click="loadOpenings(meta['prev-page'])">Previous</a>
        </li>

        <li class="page-item" @click="loadOpenings(page)" v-for="(page, index) in remainingPages" :key="index">
          <a class="page-link" href="#" v-if="page !== meta['current-page']">{{ page }}</a>
        </li>

        <li class="page-item" :class="nextPageClass">
          <a class="page-link" href="#" @click="loadOpenings(meta['next-page'])">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'OpeningsPagination',
  props: ['links', 'meta'],
  data() {
    return {
      nextThreePagesAvailable: this.meta['current-page'] + 3 <= this.meta['total-pages'],
    };
  },
  computed: {
    remainingPages() {
      const currentPage = this.meta['current-page'];
      const totalPages = this.meta['total-pages'];
      const pages = [];
      for (let i = currentPage; i <= totalPages; i += 1) {
        pages.push(i);
      }
      return pages;
    },
    previousPageClass() {
      const prevPageExists = !!this.meta['prev-page'];
      return prevPageExists ? '' : 'disabled';
    },
    nextPageClass() {
      const nextPageExists = !!this.meta['next-page'];
      return nextPageExists ? '' : 'disabled';
    },
    firstPaginationLink() {
      return this.meta['next-page'] + 1;
    },
    secondPaginationLink() {
      return this.meta['next-page'] + 2;
    },
    thirdPaginationLink() {
      return this.meta['next-page'] + 3;
    },
  },
  methods: {
    loadOpenings(page) {
      this.$emit('page-requested', page);
    },
  },
};
</script>
<style lang="scss" scoped></style>
