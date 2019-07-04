<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home-page' }">IAAS</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" :to="{ name: 'create-session' }">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" :to="{ name: 'create-user' }">Sign Up</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isAdmin">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmins" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ currentUserName }}
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownAdmins">
              <router-link class="dropdown-item" :to="{ name: 'create-opening' }">Create Opening</router-link>
            </div>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <span class="nav-link" @click="logoutInitiated">Logout</span>
          </li>
          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="services.html">Services</a>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="contact.html">Contact</a>-->
          <!--</li>-->
          <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
              <!--Blog-->
            <!--</a>-->
            <!--<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">-->
              <!--<a class="dropdown-item" href="blog-home-1.html">Blog Home 1</a>-->
              <!--<a class="dropdown-item" href="blog-home-2.html">Blog Home 2</a>-->
              <!--<a class="dropdown-item" href="blog-post.html">Blog Post</a>-->
            <!--</div>-->
          <!--</li>-->
          <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
              <!--Other Pages-->
            <!--</a>-->
            <!--<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">-->
              <!--<a class="dropdown-item" href="full-width.html">Full Width Page</a>-->
              <!--<a class="dropdown-item" href="sidebar.html">Sidebar Page</a>-->
              <!--<a class="dropdown-item" href="faq.html">FAQ</a>-->
              <!--<a class="dropdown-item" href="404.html">404</a>-->
              <!--<a class="dropdown-item" href="pricing.html">Pricing Table</a>-->
            <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavigationBar',
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    currentUser: {
      required: true,
    },
    currentUserName: {
      type: String,
      required: true,
    },
  },
  methods: {
    logoutInitiated() {
      this.$emit('logout-user');
    },
  },
};
</script>

<style scoped></style>
