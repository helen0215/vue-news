<template>
  <div>
    <p>title : {{item.title}}</p>
    <p>points : {{item.points}}</p>
    <p>user : {{item.user}}</p>
    <p>time_ago : {{item.time_ago}}</p>
    <p v-html="item.content" />
  </div>
</template>

<script>
import { SET_ITEM } from '../constants/actions';

export default {
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch(SET_ITEM, id);
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
};
</script>

<style>

</style>
