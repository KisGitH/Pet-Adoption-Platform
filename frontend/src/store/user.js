import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null, // Current authenticated user
  setUser: (user) => set({ user }),

  register: async (userData) => {
    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    
    if (data.success) {
      set({ user: data.data });
      return true; // Registration successful
    }
    return false; // Registration failed
  },

  login: async (credentials) => {
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    
    if (data.success) {
      set({ user: data.data });
      return true; // Login successful
    }
    return false; // Login failed
  },

  logout: () => set({ user: null }),
}));
