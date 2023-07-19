<template>
  <div class="main-container">
    <ul class="browse-options">
      <li>
        <router-link to="/info" class="option-link">
          <img alt="" class="icon" src="../assets/document.png" />
          <div class="title">Info</div>
        </router-link>
      </li>
      <li>
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
        <router-link to="/" class="option-link">
          <img alt="" class="icon" src="../assets/medical.png" />
          <div class="title">Medical records</div>
        </router-link>
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
};
</script>

<style scoped>
.browse-options {
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
  margin-block-start: 580px;
  color: #1b3038;

  & a {
    color: #ffffff;
    text-transform: lowercase;
  }
}
</style>
