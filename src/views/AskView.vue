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
import { fetchAskList } from '../api';

export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.askList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>

</style>
