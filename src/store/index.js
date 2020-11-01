import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api';
import { SET_NEWS } from '../constants/actions';

Vue.use(Vuex);

// action name

export default new Vuex.Store({
  state: {
    newsList: [],
  },
  actions: {
    [SET_NEWS](context) {
      fetchNewsList()
        .then((response) => {
          context.commit(SET_NEWS, response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    [SET_NEWS](state, newsList) {
      state.newsList = newsList;
    },
  },
  // getters,
});
