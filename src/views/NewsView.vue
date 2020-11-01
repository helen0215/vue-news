<template>
  <div>
    <div
      v-for="(user, index) in users"
      :key="index"
    >
      {{ user }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

};
</script>

<style>

</style>
