<template>
  <router-link class="header" to="/">
    <h1 class="name">PET HEALTH</h1>
  </router-link>
  <div class="subheader" v-if="$route && $route.name !== 'choose-pet'">
    <button
      v-if="$route.name !== 'choose-pet'"
      class="icon-btn"
      @click="$router.back()"
    >
      <img alt="icon" src="./assets/arrow-left.png" />
    </button>
    <p class="title-pet-name">{{ $store?.state?.currentPet?.name }}</p>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300;400;500&family=Questrial&display=swap");
html {
  background-color: #ffffff;
  font-family: "Barlow Semi Condensed", sans-serif;
  margin-inline: auto;
  max-block-size: 915px;
  max-inline-size: 412px;
  min-block-size: 100%;
}

body {
  background-color: #f3f3f3;
  min-block-size: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
}

#app {
  font-family: "Barlow Semi Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b3038;
  min-block-size: 100vh;
  background: linear-gradient(181deg, #ffd7ba, #fdd5db, #ff97a9);
}

.header {
  align-items: center;
  background-color: #ff738c;
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding-block: 10px;

  & .name {
    color: #ffffff;
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-inline-start: 10px;
    margin-block: 5px;
  }
}

p {
  margin: 0;
  text-align: left;
}

input,
select {
  border: 1px solid #ff738c;
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid #ff738c;
  }
}

.primary-btn {
  font-family: "Barlow Semi Condensed", sans-serif;
  background-color: #ff738c;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  padding: 0.5rem 1rem;
  color: white;
  text-transform: uppercase;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

.subheader {
  position: relative;
  align-items: center;
  margin-block-start: 20px;
  min-block-size: 24px;
}

.title-pet-name {
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
}

.icon-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  text-align: left;
  position: absolute;
  left: 20px;
  padding: 0;
}
</style>
