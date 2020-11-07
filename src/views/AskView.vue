<template>
  <div>
    <p
      v-for="(ask, index) in askList"
      :key="index"
    >
      <router-link
        :to="`/item/${ask.id}`"
      >
        {{ask.title}}
      </router-link>
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
