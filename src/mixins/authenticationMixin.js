export default {
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
