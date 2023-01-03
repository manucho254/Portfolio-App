<script>
export default {
  name: "ProjectsView",
  data: () => {
    return {
      projects: [
        { image: require("../assets/images/coding2.jpg"), link: "" },
        { image: "some image", link: "" },
        { image: "some image", link: "" },
        { image: "some image", link: "" },
        { image: "some image", link: "" },
        { image: "some image", link: "" },
      ],
    };
  },
};
</script>

<template>
  <section id="projects" class="d-flex flex-column gap-4 mt-5">
    <div class="d-flex justify-content-space-around gap-3 flex-wrap mb-4">
      <div class="d-flex text-center flex-column align-items-center gap-3">
        <div class="d-flex flex-column gap-3">
          <span
            class="section-title text-pink-red animate__animated animate__fadeInDown"
          >
            PRO<span class="text-light">JECTS</span>
          </span>
          <span class="horizontal-line w-300"></span>
        </div>
        <p>
          I thrive at building software and problem solving , below are some of
          my works.
        </p>
      </div>
    </div>
    <div
      class="d-flex flex-wrap justify-content-center align-items-center gap-1"
    >
      <div class="card" v-for="(project, index) in projects" :key="index + 1">
        <a
          :href="project.link"
          class="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="image" :src="project.image" alt="project image" />
        </a>
      </div>
    </div>
  </section>
</template>
