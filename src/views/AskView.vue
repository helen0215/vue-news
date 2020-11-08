<template>
  <div>
    <list-item
      :list="askList"
      :listType="listType"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem';
import { SET_ASK } from '../constants/actions';
import { LIST_TYPE } from '../constants/list-type';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      askList: 'fetchedAsk',
    }),
    listType() {
      return LIST_TYPE.ASK;
    },
  },
  created() {
    this.$store.dispatch(SET_ASK);
  },
};
</script>
