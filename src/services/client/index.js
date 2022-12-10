/* eslint-disable no-dupe-keys */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
const request = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const onSuccess = function (response) {
  // console.log(response);
  return response.data;
};

const onError = function (error) {
  console.log('Request Failed:', error);
  if (error.response) {
    console.log(error.response);
  }

  return Promise.reject({
    errMsg: !error?.response
      ? 'Network Issue!'
      : error?.response?.data?.error
      ? error?.response?.data?.error
      : 'Server Error',
    status: error?.response?.status,
  });
};

request.interceptors.response.use(onSuccess, onError);

request.interceptors.request.use(
  async config => {
    // console.log(JSON.stringify(config, null, 2));
    const user = await AsyncStorage.getItem('token');

    config.headers.Authorization = user ? `Bearer ${user}` : '';

    return config;
  },
  error => Promise.reject(error),
);
export default request;
