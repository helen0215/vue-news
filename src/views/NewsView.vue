<template>
  <div>
    <list-item
      :list="newsList"
      :listType="listType"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem';
import { SET_NEWS } from '../constants/actions';
import { LIST_TYPE } from '../constants/list-type';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      newsList: 'fetchedNews',
    }),
    listType() {
      return LIST_TYPE.NEWS;
    },
  },
  created() {
    this.$store.dispatch(SET_NEWS);
  },
};
</script>

<style scoped>
.news_list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #42b883
}

.news_title {
  margin: 0;
}

.link_text {
  color: #828282;
}
</style>
