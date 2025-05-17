import axios from "axios";

const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5156/api",
  TIMEOUT: 3000,
  WITH_CREDENTIALS: true,
  SIMULATE_DELAY: false, 
  DELAY_MS: 300 
};

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  withCredentials: API_CONFIG.WITH_CREDENTIALS,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (API_CONFIG.SIMULATE_DELAY) {
      return new Promise(resolve => {
        setTimeout(() => resolve(response), API_CONFIG.DELAY_MS);
      });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized access. Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export const axios_config = axiosInstance;