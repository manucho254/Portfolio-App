<script>
export default {
  name: "skillsView",
  data() {
    return {
      skills: [
        {
          text: "Attention to detail",
          color: "bg-blue",
          message:
            "This includes being able to analyze a problem, use a version control system to store your old work and employ thorough testing protocols in your code to ensure others can read it with ease.",
        },
        {
          text: "Problem solving",
          color: "bg-red",
          message:
            "Problem-solving is an essential skill in the workplace. It involves finding the source of a problem and developing an effective and efficient solution.",
        },
        {
          text: "Team player",
          color: "bg-yellow",
          message:
            "Teamwork involves discussing problems that arise with coworkers, being able to articulate the project's needs, having the ability to listen , accept criticism and having respect for other team members",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="skills" class="d-flex flex-column gap-4 mt-5">
    <div class="d-flex align-items-center flex-column gap-1">
      <span
        class="section-title text-pink-red animate__animated animate__fadeInDown"
        >My
        <span class="text-light">Skills</span>
      </span>
      <span class="horizontal-line w-200"></span>
    </div>
    <div class="d-flex justify-content-space-around flex-wrap mb-4">
      <div>
        <div class="d-flex flex-column">
          <span
            class="d-flex flex-column gap-1 mt-5 animate__animated animate__fadeInLeftBig"
          >
            <h3>
              Programming languages:
              <span class="text-pink-red">Python, Javascript, C</span>
            </h3>
            <h3>
              Frameworks:
              <span class="text-pink-red">Django, Vuejs, Bootstrap</span>
            </h3>
            <h3>
              Databases: <span class="text-pink-red">Postgres, Sqlite</span>
            </h3>
            <h3>
              Others:
              <span class="text-pink-red">Git, Postman, Docker, Html, Css</span>
            </h3>
          </span>
        </div>
      </div>
      <div class="image-container-2 mt-3 animate__animated animate__fadeInDown">
        <img
          class="image"
          src="@/assets/images/coding2.jpg"
          alt="skills image"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-space-around mt-3 mb-3">
      <div
        class="d-flex flex-column gap-2"
        v-for="(skill, index) in skills"
        :key="index + 1"
      >
        <span class="d-flex gap-1">
          <span class="text-lg"> 0{{ index + 1 }} </span>
          <span class="rectangle-shape" :class="skill.color">
            <span class="text-25 text-black text-bold">
              {{ skill.text }}
            </span>
          </span>
        </span>
        <span class="skill-message">{{ skill.message }}</span>
      </div>
    </div>
  </section>
</template>

<style>
.w-200 {
  width: 200px;
}
</style>
