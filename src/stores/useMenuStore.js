import { create } from "zustand";

export const useMenuStore = create((set) => ({
   isOpen: false,
   toggleOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))