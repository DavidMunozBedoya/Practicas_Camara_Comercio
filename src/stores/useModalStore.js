import { create } from "zustand";

export const useModalStore = create((set) => ({
   isVisible: false,
   component: null,
   openModal: (component) => set({ isVisible: true, component }),
   closeModal: () => set({ isVisible: false, component: null })
}));