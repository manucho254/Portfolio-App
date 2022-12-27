<template>
  <div>
    <section id="home" class="section-home d-flex justify-content-space-around flex-wrap mb-5 pb-5">
      <div class="d-flex flex-column justify-content-center align-items-start flex-wrap gap-2">
        <span class="title">Emmanuel
          <span class="bg-gradient">Adero</span>
        </span>
        <p class="text-max">
          Am a nerd, and you need good software built. You are in the right
          place, i do all things software development feel free to contact me.
        </p>
        <div class="contact-me d-flex gap-4 align-items-center">
          <button>Contact me</button>
          <span>Let's talk</span>
        </div>
        <div class="socials">
          <img class="icon" src="@/assets/images/linkedin.svg" />
          <img class="icon" src="@/assets/images/github.svg" />
        </div>
      </div>
      <div class="image-container-1">
        <img class="image" src="@/assets/images/short.png" alt="skills image" />
      </div>
    </section>
    <SkillsViewVue />
    <ProjectsViewVue />
    <ContactViewVue />
  </div>
</template>

<script>
import SkillsViewVue from "./SkillsView.vue";
import ProjectsViewVue from "./ProjectsView.vue";
import ContactViewVue from "./ContactView.vue";

export default {
  name: "HomeView",
  components: { SkillsViewVue, ProjectsViewVue, ContactViewVue },
};
</script>
