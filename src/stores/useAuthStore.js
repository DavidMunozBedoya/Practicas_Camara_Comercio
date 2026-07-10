import { create } from "zustand";

export const useAuthStore = create((set) => ({
   isAuth: false,
   toggleAuth: (value) => set({ isAuth: value }),
}));