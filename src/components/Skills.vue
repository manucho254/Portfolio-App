<template>
  <section id="skills" class="section-padding">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Skills &amp; <span class="gradient-text">Technologies</span>
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">
          A curated set of tools and technologies I work with to deliver quality solutions.
        </p>
      </div>

      <!-- Skill categories grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="card p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
              <span class="text-lg">{{ category.icon }}</span>
            </div>
            <h3 class="font-bold text-slate-100">{{ category.name }}</h3>
          </div>

          <!-- Skills list -->
          <div class="space-y-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="group"
            >
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm text-slate-300 font-medium">{{ skill.name }}</span>
                <span class="text-xs text-slate-500">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full gradient-bg transition-all duration-1000"
                  :style="{ width: (animated ? skill.level : 0) + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All tools / badges section -->
      <div class="mt-16">
        <h3 class="text-center text-lg font-semibold text-slate-300 mb-6">Also familiar with</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="tool in otherTools"
            :key="tool"
            class="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm font-medium hover:border-primary-500/40 hover:text-slate-200 transition-all duration-200"
          >
            {{ tool }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      animated: false,
      skillCategories: [
        {
          name: 'Mobile',
          icon: '📱',
          skills: [
            { name: 'React Native',    level: 80 },
            { name: 'Flutter',         level: 65 },
            { name: 'API Integration', level: 85 },
            { name: 'Mobile UI/UX',    level: 75 },
          ],
        },
        {
          name: 'Frontend',
          icon: '🎨',
          skills: [
            { name: 'React.js',        level: 80 },
            { name: 'Vue.js',          level: 85 },
            { name: 'JavaScript',      level: 80 },
            { name: 'HTML5 / CSS3',    level: 90 },
          ],
        },
        {
          name: 'Backend',
          icon: '⚙️',
          skills: [
            { name: 'Python / Django', level: 90 },
            { name: 'Flask',           level: 75 },
            { name: 'REST APIs',       level: 85 },
            { name: 'Auth & Security', level: 80 },
          ],
        },
        {
          name: 'Database',
          icon: '🗄️',
          skills: [
            { name: 'PostgreSQL',      level: 80 },
            { name: 'MySQL',           level: 75 },
            { name: 'SQLite',          level: 85 },
            { name: 'DB Design',       level: 80 },
          ],
        },
      ],
      otherTools: [
        'Docker', 'Nginx', 'Heroku', 'Git / GitHub', 'Postman', 'Linux',
        'Celery', 'Bootstrap', 'Figma', 'VSCode', 'Agile / Scrum',
      ],
    };
  },
  mounted() {
    const section = document.getElementById('skills');
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animated = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
  },
};
</script>
