export default {
  mounted() {
    this.$root.$on('user-logged-in', () => {
      this.isLoggedIn = this.checkLogin();
      this.isAdmin = this.checkAdmin();
    });

    this.$root.$on('user-logged-out', () => {
      this.isLoggedIn = this.checkLogin();
      this.isAdmin = this.checkAdmin();
      this.$router.push('/');
    });

    this.$root.$on('reset-app-wide-errors-and-messages', () => {
      this.$store.dispatch('resetErrors');
      this.$store.dispatch('resetNotifications');
    });
  },
  data() {
    return {
      isLoggedIn: this.checkLogin(),
      isAdmin: this.checkAdmin(),
    };
  },
  methods: {
    checkLogin() {
      return !!this.$jwt.decode();
    },
    checkAdmin() {
      this.isLoggedIn = this.checkLogin();

      if (!this.isLoggedIn) {
        return false;
      }

      if (this.isLoggedIn && !!this.$jwt.decode().role) {
        return this.$jwt.decode()
          .role
          .toString() === process.env.VUE_APP_ADMIN_ROLE_NAME.toString();
      }

      return false;
    },
  },
};
