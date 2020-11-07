<template>
  <div>
    <section class="header-container">
      <div class="user-container">
        <div>
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
          <div class="time">{{ item.time_ago }}</div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content" class="content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SET_ITEM } from '../constants/actions';

export default {
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch(SET_ITEM, id);
  },
  computed: {
    ...mapGetters({
      item: 'fetchedItem',
    }),
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
