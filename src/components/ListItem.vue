<template>
  <ul class="news_list">
    <li
      v-for="(contentItem, index) in list"
      :key="index"
      class="post"
    >
      <div v-if="showsPoints" class="points">
        {{contentItem.points}}
      </div>
      <div>
        <p class="news_title">
          <router-link v-if="isAsk"
            :to="`/item/${contentItem.id}`"
          >
            {{contentItem.title}}
          </router-link>
          <a v-else
            :href="contentItem.url"
            target="_blank"
          >
            {{contentItem.title}}
          </a>
        </p>
        <small class="link_text">
          {{contentItem.time_ago}} by
          <router-link
            :to="`/user/${contentItem.user}`"
            class="link_text"
          >
            {{contentItem.user}}
          </router-link>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { LIST_TYPE } from '../constants/list-type';

export default {
  props: {
    list: Array,
    listType: String,
  },
  computed: {
    isAsk() {
      return this.listType === LIST_TYPE.ASK;
    },
    showsPoints() {
      return this.listType !== LIST_TYPE.JOBS;
    },
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
