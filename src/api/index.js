import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/',
});

export const fetchNewsList = (page = 1) => instance.get(`/news/${page}.json`);
export const fetchAskList = (page = 1) => instance.get(`/ask/${page}.json`);
export const fetchJobList = (page = 1) => instance.get(`/jobs/${page}.json`);
export const fetchUserInfo = (userName) => instance.get(`/user/${userName}.json`);
export const fetchItem = (itemId) => instance.get(`/item/${itemId}.json`);
