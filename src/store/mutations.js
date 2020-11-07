import { SET_NEWS, SET_ASK, SET_JOBS } from '../constants/actions';

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
};
