import { create } from 'zustand';

export const useFootbolLeagueStore = create((set) => ({
   league: 1,
   changeLeague: (value) => set({ league: value })
}));