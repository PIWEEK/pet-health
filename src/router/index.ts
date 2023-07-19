import { createRouter, createWebHistory } from "vue-router";
import ChoosePet from "../components/ChoosePet.vue";
import PetInfo from "../components/PetInfo.vue";
import BrowseOptions from "../components/BrowseOptions.vue";
import NewPet from "../components/NewPet.vue";
import WeightData from "../components/WeightData.vue";

const routes = [
  {
    path: "/",
    name: "choose-pet",
    component: ChoosePet,
  },
  {
    path: "/browse-options/:petId",
    name: "browse",
    component: BrowseOptions,
  },
  {
    path: "/info/",
    name: "info",
    component: PetInfo,
  },
  {
    path: "/new",
    name: "new",
    component: NewPet,
  },
  {
    path: "/weight",
    name: "weight",
    component: WeightData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
