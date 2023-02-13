import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// css imports
import "@/assets/css/styles.css";

// third party css imports
import "animate.css";

const app = createApp(App);

// setting the page title 
router.beforeEach((to) => {
  document.title = `Manucho || ${to.name}`;
});

app.use(store);
app.use(router);
app.mount("#app");
