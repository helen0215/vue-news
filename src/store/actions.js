import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';
import { SET_NEWS, SET_ASK, SET_JOBS } from '../constants/actions';

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
    fetchJobsList()
      .then((response) => {
        commit(SET_JOBS, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
