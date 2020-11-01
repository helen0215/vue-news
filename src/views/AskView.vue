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
