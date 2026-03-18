<template>
  <div>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </div>
</template>

<script>
import Hero       from '@/components/Hero.vue';
import About      from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects   from '@/components/Projects.vue';
import Skills     from '@/components/Skills.vue';
import Education  from '@/components/Education.vue';
import Contact    from '@/components/Contact.vue';

export default {
  name: 'HomeView',
  components: { Hero, About, Experience, Projects, Skills, Education, Contact },
};
</script>
