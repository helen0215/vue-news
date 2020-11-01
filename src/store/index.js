import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';
import { SET_NEWS, SET_ASK, SET_JOBS } from '../constants/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsList: [],
    askList: [],
    jobsList: [],
  },
  actions: {
    [SET_NEWS]({ commit }) {
      fetchNewsList()
        .then((response) => {
          commit(SET_NEWS, response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [SET_ASK]({ commit }) {
      fetchAskList()
        .then((response) => {
          commit(SET_ASK, response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [SET_JOBS]({ commit }) {
      fetchJobsList()
        .then((response) => {
          commit(SET_JOBS, response.data);
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
    [SET_ASK](state, askList) {
      state.askList = askList;
    },
    [SET_JOBS](state, jobsList) {
      state.jobsList = jobsList;
    },
  },
  getters: {
    fetchedAsk: (state) => state.askList,
  },
});
