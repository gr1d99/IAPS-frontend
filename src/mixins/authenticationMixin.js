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
      return !!(
        this.$jwt.decode() && this.$jwt.decode()
          .role
          .toString() === process.env.VUE_APP_ADMIN_ROLE_NAME.toString());
    },
  },
};
