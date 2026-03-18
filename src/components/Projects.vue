<template>
  <section id="projects" class="section-padding bg-dark-800/30">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">
          A selection of projects I've built — from cross-platform mobile apps to full-stack web applications.
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          :class="activeFilter === filter
            ? 'gradient-bg text-white shadow-lg shadow-primary-500/20'
            : 'text-slate-400 bg-slate-800 hover:text-slate-100 hover:bg-slate-700 border border-slate-700'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :project="project"
        />
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16 text-slate-500">
        <svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>No projects found for this filter.</p>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectsSection',
  components: { ProjectCard },
  data() {
    return {
      activeFilter: 'All',
      filters: ['All', 'React Native', 'Vue.js', 'Full Stack', 'Frontend'],
      projects: [
        {
          name: 'Afrimechanix Mobile App',
          description: 'A cross-platform mobile application connecting users with nearby mechanics based on real-time location, with integrated service booking and a Django REST API backend.',
          image: require('@/assets/images/afrimechanix (1).png'),
          tech: ['React Native', 'Django REST API', 'PostgreSQL'],
          github: 'https://github.com/manucho254',
          demo: null,
          categories: ['React Native', 'Full Stack'],
          featured: true,
        },
        {
          name: 'Ecomvision Dashboard',
          description: 'A data visualization dashboard enabling users to simulate and analyze eCommerce data through interactive charts, with responsive design and a clean modern UI.',
          image: require('@/assets/images/ecomvision.png'),
          tech: ['Vue.js', 'JavaScript', 'CSS3'],
          github: 'https://github.com/manucho254',
          demo: 'https://ecomvisiondashboard.netlify.app/',
          categories: ['Vue.js', 'Full Stack', 'Frontend'],
          featured: true,
        },
        {
          name: 'Abba Brand Website',
          description: 'A responsive, mobile-optimized website showcasing branding and design services, with enhanced UI/UX, accessibility improvements, and integrated communication channels.',
          image: require('@/assets/images/barbola.png'),
          tech: ['React', 'HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/manucho254',
          demo: null,
          categories: ['Frontend'],
          featured: false,
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') return this.projects;
      return this.projects.filter(p => p.categories.includes(this.activeFilter));
    },
  },
};
</script>
