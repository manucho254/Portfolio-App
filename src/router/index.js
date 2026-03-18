import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  // Legacy routes — redirect to home (all sections are anchor-scrolled)
  { path: "/skills",   redirect: "/" },
  { path: "/projects", redirect: "/" },
  { path: "/contact",  redirect: "/" },
  // Catch-all
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
