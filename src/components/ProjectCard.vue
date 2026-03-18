<template>
  <div
    class="card overflow-hidden group hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
  >
    <!-- Project image -->
    <div class="relative overflow-hidden bg-slate-900 h-48">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <div class="text-center space-y-2">
          <div class="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto opacity-50">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span class="text-slate-500 text-sm">Coming Soon</span>
        </div>
      </div>
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Card content -->
    <div class="p-6 flex flex-col flex-1">
      <!-- Project name & status -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-lg font-bold text-slate-100 leading-tight">{{ project.name }}</h3>
        <span
          v-if="project.featured"
          class="px-2 py-0.5 text-xs rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20 flex-shrink-0"
        >
          Featured
        </span>
      </div>

      <!-- Description -->
      <p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{{ project.description }}</p>

      <!-- Tech stack badges -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-1 text-xs rounded-md bg-slate-700/60 text-slate-300 border border-slate-600/50 font-medium"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/50">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200"
          aria-label="View source on GitHub"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
          Code
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors duration-200 ml-auto"
          aria-label="View live demo"
        >
          Live Demo
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
