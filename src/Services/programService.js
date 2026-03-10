import api from "../utils/api";

const endpoint = "/program";

const programService = {
  getAll: async () => {
    const response = await api.get(`${endpoint}/`);
    return response.data;
  },
  create: async (data) => {
    // Assuming /program/create based on pattern
    const response = await api.post(`${endpoint}/create`, data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  },
  getByCategoryId: async (id) => {
    const response = await api.get(`${endpoint}?categoryId=${id}`);
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  },
};

export default programService;
