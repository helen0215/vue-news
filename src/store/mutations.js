import {
  SET_NEWS, SET_ASK, SET_JOBS, SET_USER, RESET_USER,
} from '../constants/actions';

export default {
  [SET_NEWS](state, newsList) {
    state.newsList = newsList;
  },
  [SET_ASK](state, askList) {
    state.askList = askList;
  },
  [SET_JOBS](state, jobList) {
    state.jobList = jobList;
  },
  [SET_USER](state, user) {
    state.user = user;
  },
  [RESET_USER](state) {
    state.user = {};
  },
};
