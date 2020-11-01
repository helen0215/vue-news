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
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => {
        this.newsList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>

</style>
