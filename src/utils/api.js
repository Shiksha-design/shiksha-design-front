import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

// Create an Axios instance
const api = axios.create({
  baseURL: "https://shiksha-design-back.onrender.com/api", // Your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (store) {
      const state = store.getState();
      if (state.auth && state.auth.token) {
        token = state.auth.token;
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor (optional: handle 401 errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., logout user, redirect to login)
      // You might want to dispatch a logout action here
      // store.dispatch(logout());
      console.warn("Unauthorized access - 401");
    }
    return Promise.reject(error);
  },
);

export default api;
