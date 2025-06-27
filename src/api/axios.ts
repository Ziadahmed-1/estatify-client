// src/api/axios.ts
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // optional: sends cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add token to every request
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('TOKEN_KEY');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Optional: Handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // e.g., auto logout on 401
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
