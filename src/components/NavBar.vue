<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      activeLink: "",
    };
  },
  mounted: () => {},
  methods: {
    getActive(linkName) {
      this.activeLink = linkName;
    },
    showNavItems() {
      let navItemsList = document.querySelector(".nav-items");
      let arr = navItemsList.classList.value.split(" ");

      if (arr.includes("responsive-nav")) {
        navItemsList.classList.remove("responsive-nav");
      }else {
        navItemsList.classList.add("responsive-nav");
      }
    },
  },
};
</script>

<template>
  <div class="nav d-flex align-items-center justify-content-space-between">
    <div class="nav-header">ME</div>
    <div class="nav-items gap-3">
      <a
        href="#"
        class="nav-item"
        @click="getActive('home')"
        :class="{ active: activeLink === 'home' }"
        >Home</a
      >
      <a
        href="#skills"
        class="nav-item"
        @click="getActive('skills')"
        :class="{ active: activeLink === 'skills' }"
        >Skills</a
      >
      <a
        href="#projects"
        class="nav-item"
        @click="getActive('projects')"
        :class="{ active: activeLink === 'projects' }"
        >Projects</a
      >
      <a
        href="#contact"
        class="nav-item"
        @click="getActive('contact')"
        :class="{ active: activeLink === 'contact' }"
        >Contact</a
      >
    </div>
    <div class="nav-burger display-none" @click="showNavItems">
      <img src="@/assets/images/burger.svg" alt="burger-icon" />
    </div>
  </div>
</template>
