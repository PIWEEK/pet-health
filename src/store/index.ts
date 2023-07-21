import { createStore } from "vuex";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  update,
  remove,
} from "firebase/database";

export default createStore({
  state: {
    pets: [],
    weight: [],
    currentPetId: null,
    currentPet: null,
    currentPetWeight: null,
    vaccines: null,
    medicalRecords: null,
  },
  mutations: {
    setPets(state, pets) {
      const keys = Object.keys(pets);
      state.pets = keys.map((key) => {
        return {
          id: key,
          ...pets[key],
        };
      });
    },
    clearPetData(state) {
      state.currentPetId = null;
      state.currentPet = null;
      state.currentPetWeight = null;
    },
    setPetData(state, data) {
      state.currentPetId = data.id;
      state.currentPet = state.pets.find((pet) => pet.id === data.id);
      state.weight = data.weightData;
      const currentPetWeights = data.weightData[data.id];
      if (currentPetWeights) {
        const keys = Object.keys(currentPetWeights);
        state.currentPetWeight = keys.map((key) => {
          return {
            id: key,
            ...currentPetWeights[key],
          };
        });
        state.currentPetWeight = state.currentPetWeight.sort((a,b) => {
          return new Date(a.date) - new Date(b.date);
        });
      } else {
        state.currentPetWeight = null;
      }
    },
    setMedicalRecords(state, data) {
      const currentPetMedicalRecords = data.medicalRecords[data.id];
      if (currentPetMedicalRecords) {
        const keys = Object.keys(currentPetMedicalRecords);
        state.medicalRecords = keys.map((key) => {
          return {
            id: key,
            ...currentPetMedicalRecords[key],
          };
        });
      } else {
        state.medicalRecords = null;
      }
    },
    updateWeight(state, weight) {
      state.currentPetWeight = state.currentPetWeight
        ? [...state.currentPetWeight, weight]
        : [weight];
    },
    setNewPet(state, pet) {
      state.pets = [...state.pets, pet];
    },
    updateDeletedWeight(state, id) {
      console.log(state.currentPetWeight);
      state.currentPetWeight = state.currentPetWeight.filter(
        (weight) => weight.id !== id
      );
    },
  },
  actions: {
    getPets({ commit }) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, "pets"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return commit("setPets", snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPetData({ commit }, id) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, "weight"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return commit("setPetData", {
              id: id,
              weightData: snapshot.val(),
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getMedicalRecords({ commit }) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, "medicalrecords"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            return commit("setMedicalRecords", {
              id: this.state.currentPetId,
              medicalRecords: snapshot.val(),
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    savePet({ commit }, pet) {
      commit("setNewPet", pet);

      const db = getDatabase();
      const newPetKey = this.state.currentPetId
        ? this.state.currentPetId
        : push(child(ref(db), "pets")).key;
      const updates = {};
      updates["/pets/" + newPetKey] = pet;

      return update(ref(db), updates);
    },
    saveWeight({ commit }, weight) {
      commit("updateWeight", weight);

      const db = getDatabase();
      const updates = {};
      const id = Math.floor(Math.random() * 1000000);
      updates[`/weight/${this.state.currentPetId}/${id}`] = weight;

      return update(ref(db), updates);
    },
    deleteWeight({ commit }, id) {
      commit("updateDeletedWeight", id);
      const db = getDatabase();
      // const updates = {};
      // updates[`/weight/${this.state.currentPetId}/${id}`] = null;

      // return update(ref(db), updates);
      remove(ref(db, `weight/${this.state.currentPetId}/${id}`));
    },
  },
  modules: {},
});
