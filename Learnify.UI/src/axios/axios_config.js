import axios from "axios";

// API configuration
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5156/api",
  TIMEOUT: 3000,
  WITH_CREDENTIALS: true,
  SIMULATE_DELAY: false, // Set to true to simulate API delay even with real APIs
  DELAY_MS: 300 // Delay in milliseconds
};

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  withCredentials: API_CONFIG.WITH_CREDENTIALS,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
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

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Simulate delay if configured
    if (API_CONFIG.SIMULATE_DELAY) {
      return new Promise(resolve => {
        setTimeout(() => resolve(response), API_CONFIG.DELAY_MS);
      });
    }
    return response;
  },
  (error) => {
    // Handle error responses
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.log("Unauthorized access. Redirecting to login...");
      // Implementation depends on your routing setup
    }
    return Promise.reject(error);
  }
);

export const axios_config = axiosInstance;