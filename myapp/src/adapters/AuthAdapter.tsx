/* This file serves as an Adapter that handles API requests from the 
backend (once established) */

import axios from "axios";

// sample API URL
const API_URL = "https://your-backend.com/api/auth"; // Replace with actual backend URL

const AuthAdapter = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);  // Store JWT token
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token"); // Check if token exists
  }
};

export default AuthAdapter;
