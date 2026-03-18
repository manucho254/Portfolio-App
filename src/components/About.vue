<template>
  <section id="about" class="section-padding bg-dark-800/30">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Turning ideas into
          <span class="gradient-text">real products</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="@/assets/images/coding2.jpg"
              alt="Coding workspace"
              class="w-full h-80 object-cover"
            />
          </div>
          <!-- Stats card overlay -->
          <div class="absolute -bottom-6 -right-6 bg-dark-800 border border-slate-700 rounded-xl p-4 shadow-xl hidden sm:block">
            <div class="grid grid-cols-2 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold gradient-text">3+</div>
                <div class="text-xs text-slate-500">Years Exp.</div>
              </div>
              <div>
                <div class="text-2xl font-bold gradient-text">10+</div>
                <div class="text-xs text-slate-500">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6 lg:pl-6">
          <h3 class="text-2xl font-bold text-slate-100">
            Hi, I'm Emmanuel Adero 👋
          </h3>
          <p class="text-slate-400 leading-relaxed">
            I'm a Full-Stack Software Engineer with strong experience designing, developing, and deploying
            scalable web and mobile applications. I'm passionate about clean code, performance, and
            delivering seamless user experiences.
          </p>
          <p class="text-slate-400 leading-relaxed">
            I specialize in React, Django, and React Native — building everything from RESTful APIs and
            web apps to cross-platform mobile solutions for clients ranging from startups to enterprises.
          </p>

          <!-- Key traits -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div
              v-for="trait in traits"
              :key="trait"
              class="flex items-center gap-2 text-slate-300 text-sm"
            >
              <div class="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {{ trait }}
            </div>
          </div>

          <!-- Resume button -->
          <div class="pt-2">
            <a
              href="#contact"
              @click.prevent="scrollTo('contact')"
              class="btn-primary inline-flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      traits: [
        'Attention to Detail',
        'Problem Solver',
        'Mobile Development',
        'Clean Code Advocate',
        'Agile Collaborator',
        'Performance Optimization',
      ],
    };
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
  },
};
</script>
