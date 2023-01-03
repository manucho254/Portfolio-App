import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// css imports
import "@/assets/css/styles.css";

// third party css imports
import "animate.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
