import { createStore } from "vuex";

export default createStore({
  state: {
    currentPetId: null,
    currentPet: null,
    pets: [
      {
        id: 1,
        name: "Kabocha",
        image:
          "https://i.pinimg.com/600x315/32/df/5c/32df5c0beea813e4e90050c6c4d37146.jpg",
        gender: "Female",
        animalType: "Rabbit",
        breed: "Mini lop",
        color: "Orange",
        currentWeight: 1.5,
        chipNumber: "A123456789",
        birthDate: "2023-01-18",
      },
      {
        id: 2,
        name: "Taro",
        image:
          "https://i.pinimg.com/736x/e0/1a/f8/e01af83ed7744ca526a81da41972a997.jpg",
        gender: "Male",
        animalType: "Rabbit",
        breed: "Netherland dwarf",
        color: "Smoke grey",
        currentWeight: 1,
        chipNumber: "A123456569",
        birthDate: "2023-02-03",
      },
    ],
    info: null,
    vaccines: null,
    medicalRecords: null,
    weightData: [
      { date: "2023-01-18", weight: 0.5 },
      { date: "2023-01-25", weight: 0.6 },
      { date: "2023-02-03", weight: 0.7 },
      { date: "2023-03-13", weight: 0.9 },
      { date: "2023-04-20", weight: 1.2 },
      { date: "2023-05-05", weight: 1.3 },
      { date: "2023-06-25", weight: 1.5 },
      { date: "2023-07-18", weight: 1.6 },
    ],
  },
  mutations: {
    setPetId(state, id) {
      state.currentPetId = id;
      state.currentPet = state.pets.find((pet) => pet.id === id);
    },
    clearPetId(state) {
      state.currentPetId = null;
      state.currentPet = null;
    },
  },
  actions: {},
  modules: {},
});
