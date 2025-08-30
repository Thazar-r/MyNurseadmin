import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://admin.service.mynurse.bookmynurse.co.uk',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
