<template>
  <div>
    <UserSignup/>
  </div>
</template>

<script>
import UserSignup from '../../components/authentication/Signup/UserSignup.vue';

export default {
  name: 'SignupPage',
  components: {
    UserSignup,
  },
};
</script>
