<template>
  <section id="education" class="section-padding bg-dark-800/30">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Background</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Education &amp; <span class="gradient-text">Certifications</span>
        </h2>
      </div>

      <div class="max-w-2xl mx-auto">
        <!-- Formal Education -->
        <div>
          <h3 class="flex items-center gap-2 text-lg font-bold text-slate-200 mb-6">
            <span class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-sm">🎓</span>
            Formal Education
          </h3>
          <div class="space-y-4">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="card p-5 hover:border-primary-500/30 transition-all duration-300"
            >
              <div class="flex justify-between items-start gap-2 mb-1">
                <h4 class="font-bold text-slate-100 text-sm leading-snug">{{ edu.degree }}</h4>
                <span class="text-xs text-slate-500 flex-shrink-0">{{ edu.year }}</span>
              </div>
              <p class="text-primary-400 text-sm font-medium mb-2">{{ edu.institution }}</p>
              <p class="text-slate-500 text-xs leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data() {
    return {
      education: [
        {
          degree: 'Fullstack Software Engineering',
          institution: 'ALX Africa',
          year: '02/2023 – 04/2024',
          description: 'Intensive full-stack software engineering program covering backend, frontend, system design, and modern software development practices.',
        },
      ],
    };
  },
};
</script>
