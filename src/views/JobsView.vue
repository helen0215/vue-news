<template>
  <div>
    <p
      v-for="(job, index) in jobList"
      :key="index"
    >
      <a
      :href="job.url">
        {{job.title}}
      </a>
      <small>{{job.time_ago}}, {{job.domain}}</small>
    </p>
  </div>
</template>

<script>
import { SET_JOBS } from '../constants/actions';

export default {
  computed: {
    jobList() {
      return this.$store.state.jobList;
    },
  },
  created() {
    this.$store.dispatch(SET_JOBS);
  },
};
</script>

<style>

</style>
