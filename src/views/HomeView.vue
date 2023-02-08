<script>
import SkillsViewVue from "./SkillsView.vue";
import ProjectsViewVue from "./ProjectsView.vue";
import ContactViewVue from "./ContactView.vue";
import { mapMutations } from "vuex";

export default {
  name: "HomeView",
  components: { SkillsViewVue, ProjectsViewVue, ContactViewVue },
  methods: {
    ...mapMutations({ UpdateActiveLink: "UpdateActiveLink" }),
  },
};
</script>

<template>
  <div>
    <section
      id="home"
      class="section-home d-flex justify-content-space-between flex-wrap mb-3 pb-3"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-start flex-wrap gap-2 animate__animated animate__fadeInLeftBig"
      >
        <span class="title"
          >Emmanuel
          <span class="bg-gradient">Adero</span>
        </span>
        <p class="text-max">
          Hello, nice to meet you. Please take a look around! I am passionate
          about building excellent software that improves the lives of those
          around me. I specialize in creating software for clients ranging from
          individuals and small-businesses all the way to large enterprise
          corporations.
        </p>
        <div class="contact-me d-flex gap-4 align-items-center">
          <router-link to="contact" @click="UpdateActiveLink('contact')">
            <button>Contact me</button>
            <span class="p-3">Let's talk</span>
          </router-link>
        </div>
        <div class="socials">
          <a
            href="https://www.linkedin.com/in/emmanuel-adero-834253203/"
            target="_blank"
            rel="noopener noreferrer"
            ><img class="icon" src="@/assets/images/linkedin.svg"
          /></a>
          <a
            href="https://github.com/manucho254"
            target="_blank"
            rel="noopener noreferrer"
            ><img class="icon" src="@/assets/images/github.svg"
          /></a>
        </div>
      </div>
      <div class="image-container-1 animate__animated animate__fadeInDown">
        <img
          class="image"
          src="@/assets/images/manucho.jpg"
          alt="skills image"
        />
      </div>
    </section>
    <SkillsViewVue />
    <ProjectsViewVue />
    <ContactViewVue />
  </div>
</template>
