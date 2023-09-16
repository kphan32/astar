import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user })),
}));

export default useAuthStore;
