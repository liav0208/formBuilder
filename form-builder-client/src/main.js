import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BaseButton from "./components/UI/BaseButton.vue";
import Toasted from "@meforma/vue-toaster";

const app = createApp(App);

app.use(router);
app.use(Toasted, {
  position: "top-right",
});
app.component("base-button", BaseButton);

app.mount("#app");
