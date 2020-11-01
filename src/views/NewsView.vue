<template>
  <div>
    <div
      v-for="(news, index) in newsList"
      :key="index"
    >
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { SET_NEWS } from '../constants/actions';

export default {
  computed: {
    newsList() {
      return this.$store.state.newsList;
    },
  },
  created() {
    this.$store.dispatch(SET_NEWS);
  },
};
</script>

<style>

</style>
