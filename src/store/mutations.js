import {
  SET_NEWS, SET_ASK, SET_JOBS, SET_USER, SET_ITEM,
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
  [SET_ITEM](state, item) {
    state.item = item;
  },
};
