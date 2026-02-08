import api from "../utils/api";

const endpoint = "/staticPages";

const staticPageService = {
  getAll: async () => {
    const response = await api.get(`${endpoint}/`);
    return response.data;
  },
  create: async (formData) => {
    // formData must be an instance of FormData
    const response = await api.post(`${endpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  update: async (id, formData) => {
    const response = await api.put(`${endpoint}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  // Delete removed as per user request
};

export default staticPageService;
