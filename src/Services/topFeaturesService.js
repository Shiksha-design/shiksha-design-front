import api from "../utils/api";

const endpoint = "/topFeatures";

const topFeaturesService = {
  getAll: async () => {
    const response = await api.get(`${endpoint}`);
    return response.data;
  },
  create: async (data) => {
    const response = await api.post(`${endpoint}/create`, data);
    return response.data;
  },
  update: async (id, data) => {
    // Note: User CURL example showed PUT {{url}}/category/:id but CURL for topFeatures update was not explicitly shown with ID in URL path in the same way, but it is standard.
    // Assuming /topFeatures/update/:id based on "Add admin crud pages... crud for admin to each page"
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  },
};

export default topFeaturesService;
