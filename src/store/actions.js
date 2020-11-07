import {
  fetchNewsList, fetchAskList, fetchJobList, fetchUserInfo,
} from '../api';
import {
  SET_NEWS, SET_ASK, SET_JOBS, SET_USER, RESET_USER,
} from '../constants/actions';

export default {
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
    fetchJobList()
      .then((response) => {
        commit(SET_JOBS, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  [SET_USER]({ commit }, userName) {
    fetchUserInfo(userName)
      .then((response) => {
        commit(SET_USER, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  [RESET_USER]({ commit }) {
    commit(RESET_USER);
  },
};
