<template>
  <div class="main-container">
    <ul>
      <li>
        <div class="label">Date</div>
        <div class="value">Weight</div>
      </li>
      <li v-for="weight in weightData" :key="weight.id">
        <div class="label">{{ weight.date }}</div>
        <div class="value">{{ weight.weight }}kg</div>
      </li>
    </ul>
    <button type="button" class="primary-btn">Add weight</button>
  </div>
</template>

<script>
export default {
  name: "PetInfo",
  data() {
    return {
      weightData: this.$store.state.weightData,
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
.primary-btn {
  inline-size: calc(100% - 40px);
  margin-block-start: 20px;
  text-decoration: none;
}
</style>
