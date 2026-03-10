import api from "../utils/api";

const userService = {
  getProfile: async () => {
    const response = await api.get("/user/me");
    return response.data;
  },
  updateProfile: async (data) => {
    const response = await api.put("/user/update", data);
    return response.data;
  },
  getAllUsers: async () => {
    const response = await api.get("/user/all");
    return response.data;
  },
  createUser: async (data) => {
    const response = await api.post("/user/create", data);
    return response.data;
  },
};

export default userService;
