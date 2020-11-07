<template>
  <div>
    <p
      v-for="(news, index) in newsList"
      :key="index"
    >
      <a
        :href="news.url"
      >
        {{news.title}}
      </a>
      <small>
        {{news.time_ago}} by
        <router-link
          :to="`/user/${news.user}`">
          {{news.user}}
        </router-link>
      </small>
    </p>
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
