<template>
  <div class="main-container">
    <ul v-if="medicalRecordsData">
      <li class="row" v-for="data in medicalRecordsData" :key="data.id">
        <div class="header">
          <p class="date">{{ data.date }}</p>
          <p v-if="data.place" class="place">{{ data.place }}</p>
        </div>
        <div class="content">
          <div class="title">{{ data.title }}</div>
          <div class="description">{{ data.description }}</div>
          <div v-if="data.prescription" class="prescription">
            <span class="bold">Prescription:</span> {{ data.prescription }}
          </div>
          <div v-if="data.vet" class="vet">
            <span class="bold">Vet:</span> {{ data.vet }}
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      <img alt="" class="empty-icon" src="../assets/medical-big.png" />
      <p>There aren't medical records yet</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalRecords",
  computed: {
    medicalRecordsData() {
      return this.$store.state.medicalRecords;
    },
  },
};
</script>

<style scoped>
.header {
  justify-content: space-between;
  padding-inline: 10px;
}
.date {
  font-size: 14px;
  font-weight: 500;
}
.place {
  font-size: 14px;
}
.title {
  font-weight: 500;
  font-size: 20px;
  margin-block: 5px;
}
.description {
  margin-block: 15px;
}
.prescription {
  margin-block: 10px;
}
.bold {
  font-weight: 500;
}
ul {
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline: 20px;
}
.row {
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-block-end: 20px;
  text-align: left;
}
.content {
  padding-inline: 10px;
  padding-block: 10px 15px;
}
</style>
