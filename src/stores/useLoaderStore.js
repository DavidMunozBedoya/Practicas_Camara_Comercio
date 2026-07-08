import { create } from "zustand";

export const useLoaderStore = create((set) => ({
   isLoading: true,
   toggleLoading: (value) => set({ isLoading: value }),   
}));