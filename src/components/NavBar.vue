<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      activeLink: "getActiveLink",
    }),
  },
  methods: {
    ...mapMutations({
      updateActiveLink: "updateActiveLink",
    }),
    getActive(linkName) {
      window.scrollTo(0, 0);
      this.updateActiveLink(linkName);
    },
    showNavItems() {
      let menu = document.querySelector(".nav-menu");

      if (menu.classList.contains("mx-height")) {
        menu.classList.remove("mx-height");
      } else {
        menu.classList.add("mx-height");
      }
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="nav-logo">
      <router-link to="/">Manucho</router-link>
    </div>
    <button class="nav-toggler" @click="showNavItems">
      <img src="@/assets/images/burger.svg" alt="burger-icon" />
    </button>
    <div class="nav-menu gap-3">
      <ul class="nav-items">
        <li
          @click="getActive('home')"
          :class="{ active: activeLink === 'home' }"
        >
          <a href="#" class="nav-item">Home</a>
        </li>
        <li
          @click="getActive('skills')"
          :class="{ active: activeLink === 'skills' }"
        >
          <a href="#skills" class="nav-item">Skills</a>
        </li>
        <li
          @click="getActive('projects')"
          :class="{ active: activeLink === 'projects' }"
        >
          <a href="#projects" class="nav-item">Projects</a>
        </li>
        <li
          @click="getActive('contact')"
          :class="{ active: activeLink === 'contact' }"
        >
          <a href="#contact" class="nav-item">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>
