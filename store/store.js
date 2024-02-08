import { create } from "zustand";
// this stores global states to be used anywhere

export const useTestStore = create(set => ({
    ownerName: "",
    petName: "",
    species: "",
    reasonForVisit: "",
    additionalNotes: "",
    setField: (key, value) => set({ [key]: value })
}));
