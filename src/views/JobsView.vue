<template>
  <div>
    <list-item
      :list="jobList"
      :listType="listType"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SET_JOBS } from '../constants/actions';
import ListItem from '../components/ListItem';
import { LIST_TYPE } from '../constants/list-type';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      jobList: 'fetchedJobs',
    }),
    listType() {
      return LIST_TYPE.JOBS;
    },
  },
  created() {
    this.$store.dispatch(SET_JOBS);
  },
};
</script>

<style>

</style>
