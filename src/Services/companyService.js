import api from "../utils/api";

const endpoint = "/company";

const companyService = {
  getAll: async () => {
    const response = await api.get(`${endpoint}/`);
    return response.data;
  },

  create: async (data) => {
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
};

export default companyService;
