import api from "../utils/api";

const endpoint = "/category";

const categoryService = {
  getAll: async () => {
    // CURL example showed GET {{url}}/category/
    const response = await api.get(`${endpoint}/`);
    return response.data;
  },
  create: async (data) => {
    // CURL: {{url}}/category/create
    const response = await api.post(`${endpoint}/create`, data);
    return response.data;
  },
  update: async (id, data) => {
    // CURL: PUT {{url}}/category/:id
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    // CURL: DELETE {{url}}/Category/:id (Capital C in CURL, but likely case insensitive or assumed lowercase standard)
    // I will use /category/:id based on standard REST, but if backend is strict about "Category" vs "category", I might need to check.
    // The CURL showed "Category" for delete but "category" for create/update. I'll stick to "category" (lowercase) for consistency, assuming the CURL header was just a typo.
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  },
};

export default categoryService;
