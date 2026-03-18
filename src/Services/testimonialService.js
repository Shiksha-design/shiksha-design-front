import api from "../utils/api";

const endpoint = "/testimonial";

const testimonialService = {
  getAll: async () => {
    const response = await api.get(`${endpoint}/get-all`);
    return response.data;
  },
  add: async (formData) => {
    const response = await api.post(`${endpoint}/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  edit: async (id, formData) => {
    const response = await api.put(`${endpoint}/edit/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
  remove: async (id) => {
    const response = await api.delete(`${endpoint}/remove/${id}`);
    return response.data;
  },
};

export default testimonialService;
