import { create } from "zustand";
// this stores global states to be used anywhere

export const useTestStore = create(set => ({
    age: "",
    breed: "",
    sex: "",
    healthy: "",
    ocular: "",
    ophthalmic: "",
    aural: "",
    respiratory: "",
    cardio: "",
    lymphatic: "",
    muscleskel: "",
    neur: "",
    urogen: "",
    gastro: "",
    addcomm: "",
    firstName: "",
    lastName: "",
    DOB: "",
    examDate: "",

    setField: (key, value) => set({ [key]: value })
}));
