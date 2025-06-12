import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = { 
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }
};

export const recipeService = {
  getAllRecipes: () => api.get('/recipes'),
  getRecipeById: (id: number) => api.get(`/recipes/${id}`),
  createRecipe: (recipe: any) => api.post('/recipes', recipe),
  updateRecipe: (id: number, recipe: any) => api.put(`/recipes/${id}`, recipe),
  deleteRecipe: (id: number) => api.delete(`/recipes/${id}`),
};

export default api; 