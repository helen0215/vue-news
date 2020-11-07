<template>
  <div>
    <p>name : {{user.id}}</p>
    <p>karma : {{user.karma}}</p>
    <p>created : {{user.created}}</p>
  </div>
</template>

<script>
import { SET_USER } from '../constants/actions';

export default {
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch(SET_USER, userName);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
