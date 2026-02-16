import axios from "axios";
import actions from "../Redux/Reducer/auth/action";

let store;

export const injectStore = (_store) => {
  store = _store;
};

// Create Axios instance
const api = axios.create({
  baseURL: "https://shiksha-design-back.onrender.com/api",
  // ❌ DO NOT set default Content-Type here
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");

    if (store) {
      const state = store.getState();
      if (state?.auth?.token) {
        token = state.auth.token;
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 🔥 IMPORTANT FIX:
    // If sending FormData, let browser automatically set Content-Type
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized access - 401");
      logout();
    }
    return Promise.reject(error);
  },
);

export const logout = (navigate) => {
  if (store) {
    store.dispatch(actions.clearAllData());
  }
  localStorage.clear();
  navigate("/");
};

export default api;
