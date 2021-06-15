import axios from 'axios';

const baseURLDevelopment = 'https://localhost:44365/api';
// const baseURLProduction = 'https://studentify20210330221435.azurewebsites.net/api';

const instance = axios.create({ baseURL: baseURLDevelopment });

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default instance;