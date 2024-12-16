import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const useAuth = () => {
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  return { login, register };
};
