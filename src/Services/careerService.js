import api from "../utils/api";

const careerService = {
  getAll: async () => {
    const response = await api.get("/career/getAllJobPostings");
    return response.data;
  },

  create: async (data) => {
    const response = await api.post("/career/addJobPosting", data);
    return response.data;
  },

  update: async (id, data) => {
    console.log("careerService.update called with id:", id);
    const response = await api.put(`/career/updateJobPosting/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/career/deleteJobPosting/${id}`);
    return response.data;
  },
};

export default careerService;
