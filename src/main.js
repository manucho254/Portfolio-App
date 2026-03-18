import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Tailwind CSS
import "@/assets/css/styles.css";

const app = createApp(App);

router.beforeEach((to) => {
  document.title = `Emmanuel Adero | ${to.name || 'Portfolio'}`;
});

app.use(store);
app.use(router);
app.mount("#app");
