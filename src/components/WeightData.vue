<template>
  <div class="main-container">
    <ul v-if="weightData && weightData.length">
      <li>
        <div class="label">Date</div>
        <div class="label margin-right">Weight</div>
      </li>
      <li v-for="weight in weightData" :key="weight.id">
        <div class="value">{{ getDate(weight.date) }}</div>
        <div class="last">
          <div class="value">{{ weight.weight }}kg</div>
          <div class="delete" @click="deleteWeight(weight.id)">X</div>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      <img alt="" class="empty-icon" src="../assets/weight-big.png" />
      <p>There aren't weight records yet</p>
    </div>
    <form class="form" v-if="showForm">
      <div class="block">
        <label class="label hide" for="date">Date</label>
        <input type="date" name="date" v-model="form.date" />
      </div>
      <div class="block">
        <label class="label hide" for="weight">Weight *</label>
        <input type="number" name="weight" v-model="form.weight" required />
        <div v-if="error" class="error">
          <p>{{ error }}</p>
        </div>
      </div>
    </form>
    <button
      v-if="!showForm"
      type="button"
      class="primary-btn"
      @click="toggleForm()"
    >
      Add weight
    </button>
    <button
      v-if="showForm"
      type="button"
      class="primary-btn"
      @click="addWeight()"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "weightData",
  computed: {
    weightData() {
      return this.$store.state.currentPetWeight;
    },
  },
  data() {
    return {
      form: {
        date: new Date().toISOString().slice(0, 10),
        weight: "",
      },
      showForm: false,
      error: "",
    };
  },
  methods: {
    getDate(date) {
      return new Date(date).toLocaleDateString();
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    addWeight() {
      if (this.form.weight) {
        this.$store.dispatch("saveWeight", {
          date: this.form.date,
          weight: this.form.weight,
        });
        this.toggleForm();
        this.form.date = new Date().toISOString().slice(0, 10);
        this.form.weight = "";
      } else {
        this.error = "Weight is required";
      }
    },
    deleteWeight(id) {
      this.$store.dispatch("deleteWeight", id);
    },
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

  &.hide {
    position: absolute;
    top: -9999px;
  }
}
.form {
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  padding-inline: 20px;
  box-sizing: border-box;
  margin-block-start: 10px;
}
.primary-btn {
  inline-size: calc(100% - 40px);
  margin-block-start: 20px;
  text-decoration: none;
}
.last {
  display: flex;
}
.margin-right {
  margin-inline-end: 20px;
}
.delete {
  font-weight: 500;
  margin-inline-start: 15px;

  &:hover {
    cursor: pointer;
  }
}
</style>
