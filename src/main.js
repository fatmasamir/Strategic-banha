import { createApp, markRaw } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import i18n from "./plugins/i18n";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// pinia
import { createPinia } from "pinia";
//pinia
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
createApp(App)
  .use(store)
  .use(router)
  .use(pinia)
  .use(Toast)
  .use(VueSweetalert2)
  .use(SoftUIDashboard)
  .use(i18n)
  .mount("#app");
