<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-black/20 border-b border-slate-800' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="#home"
          class="text-xl font-bold gradient-text tracking-tight"
          @click.prevent="scrollTo('home')"
        >
          EA<span class="text-slate-400">.</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="scrollTo(link.id)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="activeSection === link.id
              ? 'text-primary-400 bg-primary-500/10'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'"
          >
            {{ link.label }}
          </a>
          <button
            @click="toggleDark"
            class="ml-2 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-all duration-200"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-dark-800/98 backdrop-blur-sm border-b border-slate-700"
      >
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click.prevent="scrollTo(link.id); mobileOpen = false"
            class="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            :class="activeSection === link.id
              ? 'text-primary-400 bg-primary-500/10'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-700'"
          >
            {{ link.label }}
          </a>
          <button
            @click="toggleDark"
            class="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all duration-200"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      activeSection: 'home',
      isDark: true,
      navLinks: [
        { id: 'home',       label: 'Home' },
        { id: 'about',      label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects',   label: 'Projects' },
        { id: 'skills',     label: 'Skills' },
        { id: 'education',  label: 'Education' },
        { id: 'contact',    label: 'Contact' },
      ],
    };
  },
  mounted() {
    this.isDark = document.documentElement.classList.contains('dark');
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20;
      const sections = this.navLinks.map(l => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          this.activeSection = sections[i];
          break;
        }
      }
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 64;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    toggleDark() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle('dark', this.isDark);
    },
  },
};
</script>

