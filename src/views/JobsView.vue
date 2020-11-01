<template>
  <div>
    <div
      v-for="(jobs, index) in jobsList"
      :key="index"
    >
      {{ jobs.title }}
    </div>
  </div>
</template>

<script>
import { SET_JOBS } from '../constants/actions';

export default {
  computed: {
    jobsList() {
      return this.$store.state.jobsList;
    },
  },
  created() {
    this.$store.dispatch(SET_JOBS);
  },
};
</script>

<style>

</style>
