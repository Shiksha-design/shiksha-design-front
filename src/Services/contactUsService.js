import api from "../utils/api";

const contactUsService = {
  getRegisteredCompany: async () => {
    const response = await api.get("/contactus/getRegisteredCompany");
    return response.data;
  },

  createRegisteredCompany: async (data) => {
    const response = await api.post("/contactus/createRegisteredCompany", data);
    return response.data;
  },

  updateRegisteredCompany: async (id, data) => {
    // If ID is provided, use it. Otherwise, fallback to generic update if backend supports it.
    const url = id
      ? `/contactus/updateRegisteredCompany/${id}`
      : "/contactus/updateRegisteredCompany";
    const response = await api.put(url, data);
    return response.data;
  },
};

export default contactUsService;
