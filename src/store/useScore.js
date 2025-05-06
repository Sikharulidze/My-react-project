import { create } from "zustand";

const useScore = create((set) => ({
  dark: false,
  user: 13,
  switchMode: () => set((state) => ({ dark: !state.dark })),
  
}));

export default useScore;
