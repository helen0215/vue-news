<template>
  <div>
    <p
      v-for="(ask, index) in askList"
      :key="index"
    >
      <a
      :href="ask.url">
        {{ask.title}}
      </a>
      <small>{{ask.time_ago}}, {{ask.domain}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SET_ASK } from '../constants/actions';

export default {
  computed: {
    ...mapGetters({
      askList: 'fetchedAsk',
    }),
    // ...mapGetters([
    //   'fetchedAsk',
    // ]),
  },
  created() {
    this.$store.dispatch(SET_ASK);
  },
};
</script>

<style>

</style>
