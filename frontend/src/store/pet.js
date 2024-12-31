import { create } from "zustand";

export const usePetStore = create((set) => ({
    pets: [],
    setPets: (pets) => set({ pets }),

    fetchPets: async () => {
        const res = await fetch("/api/pets");
        const data = await res.json();
        set({ pets: data.data });
    },
}));