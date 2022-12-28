<script>
import SkillsViewVue from "./SkillsView.vue";
import ProjectsViewVue from "./ProjectsView.vue";
import ContactViewVue from "./ContactView.vue";

export default {
  name: "HomeView",
  components: { SkillsViewVue, ProjectsViewVue, ContactViewVue },
};
</script>

<template>
  <div>
    <section
      id="home"
      class="section-home d-flex justify-content-space-around flex-wrap mb-5 pb-5"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-start flex-wrap gap-2"
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
          corporations. What would you do if you had a software expert available
          at your fingertips?
        </p>
        <div class="contact-me d-flex gap-4 align-items-center">
          <button>Contact me</button>
          <a href="#contact">
            <span>Let's talk</span>
          </a>
        </div>
        <div class="socials">
          <a
            href="https://www.linkedin.com/in/manucho-adero-834253203"
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
      <div class="image-container-1">
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
