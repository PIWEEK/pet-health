<template>
  <div class="main-container">
    <ul>
      <li>
        <div class="label">Name</div>
        <div class="value">{{ currentPet.name }}</div>
      </li>
      <li>
        <div class="label">Gender</div>
        <div class="value">{{ currentPet.gender }}</div>
      </li>
      <li>
        <div class="label">Animal</div>
        <div class="value">{{ currentPet.animalType }}</div>
      </li>
      <li>
        <div class="label">Breed</div>
        <div class="value">{{ currentPet.breed }}</div>
      </li>
      <li>
        <div class="label">Color</div>
        <div class="value">{{ currentPet.color }}</div>
      </li>
      <li>
        <div class="label">Weight</div>
        <div class="value">{{ currentPet.currentWeight }}kg</div>
      </li>
      <li>
        <div class="label">Chip number</div>
        <div class="value">{{ currentPet.chipNumber }}</div>
      </li>
      <li>
        <div class="label">Birthday</div>
        <div class="value">{{ currentPet.birthDate }}</div>
      </li>
    </ul>
    <router-link to="/new" class="primary-btn">Edit info</router-link>
  </div>
</template>

<script>
export default {
  name: "PetInfo",
  data() {
    return {
      currentPet: this.$store.state.currentPet,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  inline-size: 100%;
  padding-inline: 20px;
  box-sizing: border-box;
  margin: 0;
}
li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  block-size: 100%;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  margin-block-start: 10px;
}
.label {
  font-weight: bold;
}
</style>
