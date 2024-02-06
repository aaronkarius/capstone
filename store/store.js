import { create } from "zustand";

export const useTestStore = create(set => ({
    ownerName: "",
    petName: "",
    species: "",
    reasonForVisit: "",
    additionalNotes: "",
    setField: (key, value) => set({ [key]: value })
}));
