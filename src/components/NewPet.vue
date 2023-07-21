<template>
  <div class="main-container">
    <form class="form">
      <div class="block">
        <label class="label" for="name">Name *</label>
        <input type="text" name="name" v-model="form.name" required />
        <div v-if="error" class="error">
          <p>{{ error }}</p>
        </div>
      </div>
      <div class="block">
        <label class="label" for="gender">Gender</label>
        <select
          name="gender"
          v-model="form.gender"
          v-bind:class="{ empty: form.gender === null }"
        >
          <option disabled value="null">Choose one</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="block">
        <label class="label" for="animalType">Animal</label>
        <select
          name="animalType"
          v-model="form.animalType"
          v-bind:class="{ empty: form.gender === null }"
        >
          <option disabled value="null">Choose one</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
        </select>
      </div>
      <div class="block">
        <label class="label" for="breed">Breed</label>
        <input type="text" name="breed" v-model="form.breed" />
      </div>
      <div class="block">
        <label class="label" for="color">Color</label>
        <input type="text" name="color" v-model="form.color" />
      </div>
      <div class="block">
        <label class="label" for="weight">Weight (kg)</label>
        <input type="number" name="weight" v-model="form.weight" />
      </div>
      <div class="block">
        <label class="label" for="chipNumber">Chip number</label>
        <input type="text" name="chipNumber" v-model="form.chipNumber" />
      </div>
      <div class="block">
        <label class="label" for="birthday">Birthday</label>
        <input type="date" name="birthday" v-model="form.birthday" />
      </div>
      <div class="block">
        <label class="label" for="image">Image url</label>
        <input type="text" name="image" v-model="form.image" />
      </div>
      <button type="button" @click="checkForm" class="primary-btn">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPet",
  data() {
    return {
      form: {
        name: this.$store.state.currentPet
          ? this.$store.state.currentPet.name
          : "",
        gender: this.$store.state.currentPet
          ? this.$store.state.currentPet.gender
          : "",
        animalType: this.$store.state.currentPet
          ? this.$store.state.currentPet.animalType
          : "",
        breed: this.$store.state.currentPet
          ? this.$store.state.currentPet.breed
          : "",
        color: this.$store.state.currentPet
          ? this.$store.state.currentPet.color
          : "",
        weight: this.$store.state.currentPet
          ? this.$store.state.currentPet.weight
          : "",
        chipNumber: this.$store.state.currentPet
          ? this.$store.state.currentPet.chipNumber
          : "",
        birthday: this.$store.state.currentPet
          ? this.$store.state.currentPet.birthday
          : "",
        image: this.$store.state.currentPet
          ? this.$store.state.currentPet.image
          : "",
      },
      error: "",
    };
  },
  methods: {
    checkForm() {
      if (this.form.name) {
        this.error = "";
        this.$store.dispatch("savePet", this.form);
        this.$router.push({ name: "choose-pet" });
      } else {
        this.error = "Name is required.";
      }
    },
  },
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.label {
  margin-bottom: 5px;
}
.empty {
  border: 1px solid #ff738c;
}
.form {
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  box-sizing: border-box;
  inline-size: 100%;
  text-align: left;
}
.primary-btn {
  inline-size: 100%;
  margin-block-start: 10px;
}
.error {
  color: red;
}
</style>
