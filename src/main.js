import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";
import store from "./store/index.ts";
import { VueFire } from "vuefire";
import { firebaseApp } from "./firebaseInit";

const app = createApp(App)
  .use(VueFire, { firebaseApp })
  .use(store)
  .use(router)
  .mount("#app");

app.mount("#app");
