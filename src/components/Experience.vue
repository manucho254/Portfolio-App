<template>
  <section id="experience" class="section-padding">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Career</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Work <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">
          A track record of delivering quality software solutions across diverse industries.
        </p>
      </div>

      <!-- Years of experience highlight -->
      <div class="flex justify-center mb-12">
        <div class="card px-8 py-6 text-center">
          <div class="text-5xl font-bold gradient-text mb-1">3+</div>
          <div class="text-slate-400 font-medium">Years of Professional Experience</div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Vertical line -->
        <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent hidden sm:block" aria-hidden="true"></div>

        <div class="space-y-8">
          <div
            v-for="(job, index) in experience"
            :key="index"
            class="relative sm:pl-20"
          >
            <!-- Timeline dot -->
            <div class="hidden sm:flex absolute left-0 top-6 w-16 items-center justify-center">
              <div class="w-4 h-4 rounded-full gradient-bg ring-4 ring-dark-900"></div>
            </div>

            <!-- Card -->
            <div class="card p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 class="text-lg font-bold text-slate-100">{{ job.role }}</h3>
                  <p class="text-primary-400 font-medium text-sm">{{ job.company }}</p>
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                    {{ job.period }}
                  </span>
                  <span class="text-xs text-slate-500">{{ job.type }}</span>
                </div>
              </div>
              <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ job.description }}</p>
              <ul class="space-y-1">
                <li
                  v-for="achievement in job.achievements"
                  :key="achievement"
                  class="flex items-start gap-2 text-slate-400 text-sm"
                >
                  <svg class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  {{ achievement }}
                </li>
              </ul>
              <!-- Tech tags -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tech in job.tech"
                  :key="tech"
                  class="px-2 py-0.5 text-xs rounded-md bg-slate-700/60 text-slate-400 border border-slate-600/50"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experience: [
        {
          role: 'Software Developer',
          company: 'My Bidhaa',
          period: '02/2025 – Present',
          type: 'Full-time',
          description: 'Design and develop scalable full-stack applications using Django and React, supporting both web and mobile platforms.',
          achievements: [
            'Architect and maintain RESTful APIs consumed by mobile applications, ensuring secure authentication and efficient data exchange',
            'Contribute to React Native mobile application development, integrating backend services and enhancing cross-platform performance',
            'Optimize backend systems and database queries to improve application speed, scalability, and reliability',
            'Collaborate with UI/UX designers to deliver intuitive, mobile-responsive solutions',
            'Implement best practices in security, testing, and deployment for high-quality software delivery',
          ],
          tech: ['Django', 'React', 'React Native', 'PostgreSQL', 'REST APIs', 'Docker'],
        },
        {
          role: 'Software Developer',
          company: 'Dasce Tech Solutions',
          period: '07/2023 – 02/2025',
          type: 'Full-time',
          description: 'Developed and maintained full-stack applications using Django and React, focusing on performance and scalability.',
          achievements: [
            'Designed and implemented RESTful APIs to support both web and mobile client applications',
            'Built responsive, mobile-first user interfaces, improving accessibility and usability across devices',
            'Integrated frontend applications with backend services, ensuring smooth data flow and system reliability',
            'Participated in debugging, testing, and deployment processes, improving system stability and maintainability',
          ],
          tech: ['Django', 'React', 'JavaScript', 'PostgreSQL', 'REST APIs', 'HTML5', 'CSS3'],
        },
      ],
    };
  },
};
</script>
