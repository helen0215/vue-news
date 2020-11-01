<template>
  <div>
    <div
      v-for="(ask, index) in askList"
      :key="index"
    >
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { SET_ASK } from '../constants/actions';

export default {
  computed: {
    askList() {
      return this.$store.state.askList;
    },
  },
  created() {
    this.$store.dispatch(SET_ASK);
  },
};
</script>

<style>

</style>
