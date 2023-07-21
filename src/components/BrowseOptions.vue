<template>
  <div
    class="main-container"
    :class="currentPet && checkBirthday() && 'additional'"
  >
    <div class="birthday-banner" v-if="currentPet && checkBirthday()">
      <p>Today is {{ $store?.state?.currentPet?.name }}'s birthday! 🥳</p>
    </div>
    <ul class="browse-options">
      <li>
        <router-link to="/info" class="option-link">
          <img alt="" class="icon" src="../assets/document.png" />
          <div class="title">Info</div>
        </router-link>
      </li>
      <li class="disabled">
        <router-link to="/" class="option-link">
          <img alt="" class="icon" src="../assets/shot.png" />
          <div class="title">Vaccines</div>
        </router-link>
      </li>
      <li>
        <router-link to="/weight" class="option-link">
          <img alt="" class="icon" src="../assets/weight.png" />
          <div class="title">Weight</div>
        </router-link>
      </li>
      <li>
        <a @click="goToMedicalRecords()" class="option-link">
          <img alt="" class="icon" src="../assets/medical.png" />
          <div class="title">Medical records</div>
        </a>
      </li>
    </ul>
    <div class="icons">
      Icons designed by
      <a href="https://www.flaticon.es/autores/soremba" title="Soremba"
        >Soremba</a
      >,
      <a href="https://www.flaticon.es/autores/travisavery" title="TravisAvery"
        >TravisAvery</a
      >,
      <a href="https://www.flaticon.es/autores/vinadbumi" title="vinadbumi"
        >vinadbumi</a
      >,
      <a
        href="https://www.flaticon.es/autores/shahid-mehmood"
        title="Shahid-Mehmood"
        >Shahid-Mehmood</a
      >
      and
      <a
        href="https://www.flaticon.es/autores/vectors-tank"
        title="Vectors Tank"
        >Vectors Tank</a
      >
      from
      <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseOptions",
  data() {
    return {
      birthdayBanner: false,
    };
  },
  computed: {
    currentPet() {
      return this.$store.state.currentPet;
    },
  },
  methods: {
    goToMedicalRecords() {
      this.$store.dispatch("getMedicalRecords");
      this.$router.push({ name: "medicalRecords" });
    },
    checkBirthday() {
      if (this.currentPet) {
        const birthday = new Date(
          this.currentPet.birthday
        ).toLocaleDateString();
        const today = new Date().toLocaleDateString();
        return birthday === today;
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  block-size: calc(100vh - 118px);
  display: grid;
  grid-template-rows: 1fr auto;
  justify-content: space-between;

  &.additional {
    grid-template-rows: auto 1fr auto;
  }
}
.browse-options {
  align-self: start;
  column-gap: 10px;
  row-gap: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding-inline: 20px;
  width: 100%;
}
.browse-options li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  block-size: 100%;
  border: 1px solid #ff738c;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ff738c;
    opacity: 0.8;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
}
.option-link {
  text-decoration: none;
  color: #1b3038;
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .icon {
    margin-block-end: 5px;
  }
}
.icons {
  color: #1b3038;
  margin-block-end: 25px;

  & a {
    color: #ffffff;
    text-transform: lowercase;
  }
}
.birthday-banner {
  background: #ff738c;
  color: #ffffff;
  margin-block: 10px 20px;
  inline-size: calc(100% - 40px);
  margin-inline: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & p {
    font-size: 18px;
  }
}
</style>
