<template>
  <div class="main-container">
    <div class="pet-container">
      <div
        class="pet"
        v-for="pet in pets"
        :key="pet.id"
        @click="goToBrowse(pet.id)"
        :style="`background-image: url(${pet.image}) `"
      >
        <div class="pet-info">
          <p class="pet-name">{{ pet.name }}</p>
        </div>
      </div>
    </div>
    <a @click="goToAddPet()" class="primary-btn">Add pet</a>
  </div>
</template>

<script>
export default {
  name: "ChoosePet",
  computed: {
    pets() {
      return this.$store.state.pets;
    },
  },
  beforeMount() {
    this.$store.dispatch("getPets");
  },
  methods: {
    goToBrowse(id) {
      this.$store.dispatch("getPetData", id);
      this.$router.push({ name: "browse", params: { petId: id } });
    },
    goToAddPet() {
      this.$store.commit("clearPetData");
      this.$router.push({ name: "new" });
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 20px;
}
.pet-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  inline-size: 100%;
  column-gap: 20px;
  box-sizing: border-box;
  padding-inline: 20px;
  row-gap: 20px;
}
.pet {
  border: 2px solid #ff738c;
  border-radius: 4px;
  min-block-size: 150px;
  background-size: cover;
  position: relative;
  margin-block-end: 30px;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.pet-info {
  color: #ffffff;
  position: absolute;
  bottom: -30px;
  inline-size: 100%;
  background-color: #ff738c;
  text-transform: uppercase;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  outline: 2px solid #ff738c;
  border-radius: 0 0 4px 4px;
}
.pet-name {
  text-align: center;
}
.pet-link {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-decoration: none;
  color: #1b3038;
  inline-size: 100%;
}
.pet img {
  inline-size: 100px;
  block-size: 100px;
  margin-inline-end: 10px;
}
.primary-btn {
  inline-size: calc(100% - 70px);
  margin-block-start: 20px;
  text-decoration: none;
}
</style>
