// Ví dụ nội dung authAPI.js
import axios from 'axios';

export const login = async (credentials) => {
  return axios.post('http://localhost:5000/api/login', credentials);
};

export const logout = async () => {
  return axios.post('http://localhost:5000/api/logout');
};