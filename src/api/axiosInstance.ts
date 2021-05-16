import axios from 'axios';

const baseURL = 'https://localhost:44365/api';

const instance = axios.create({ baseURL });

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default instance;