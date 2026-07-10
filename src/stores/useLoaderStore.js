import { create } from "zustand";

export const useLoaderStore = create((set) => ({
   isLoading: false,
   toggleLoading: (value) => set({ isLoading: value }),
}));