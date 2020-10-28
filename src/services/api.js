import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.235.118.84:5000/api/v1/analytics',
});

export default api;
