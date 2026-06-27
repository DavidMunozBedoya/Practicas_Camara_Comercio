import { create } from "zustand";

export const useLoaderStore = create((set) => ({
   isLoading: true,
   toggleLoading: (value) => set({ isLoading: value }),
   // changeStatus: (value) => {
   //     const store = get();

   //     const { isLoading, ...rest } = store;

   //     set((state) => ({ ...state, status: state.status + value }));

   //     return rest;
   // }
}));