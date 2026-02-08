import api from "../utils/api";

const authService = {
  login: async (email, password) => {
    // curl: {{url}}/auth/login
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },
  signup: async (userData) => {
    // curl: {{url}}/auth/signup
    const response = await api.post("/auth/signup", userData);
    return response.data;
  },
};

export default authService;
