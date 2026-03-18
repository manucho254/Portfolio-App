<template>
  <section id="contact" class="section-padding">
    <div class="section-max-width">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">Get in touch</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-100">
          Let's <span class="gradient-text">Work Together</span>
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto">
          I'm available for freelance work and full-time positions. Have a project in mind? Let's talk!
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        <!-- Contact info -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4"
          >
            <div class="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
              <component :is="'span'" class="text-xl" aria-hidden="true">{{ info.icon }}</component>
            </div>
            <div>
              <p class="text-slate-500 text-sm">{{ info.label }}</p>
              <a
                :href="info.href"
                class="text-slate-200 font-medium hover:text-primary-400 transition-colors duration-200"
                :target="info.external ? '_blank' : '_self'"
                :rel="info.external ? 'noopener noreferrer' : ''"
              >
                {{ info.value }}
              </a>
            </div>
          </div>

          <!-- Social links -->
          <div class="pt-4">
            <p class="text-slate-500 text-sm mb-4">Find me on</p>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.name"
                class="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200"
              >
                <svg v-if="social.name === 'GitHub'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                <svg v-else-if="social.name === 'LinkedIn'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form
            @submit.prevent="submitForm"
            class="card p-8 space-y-5"
          >
            <!-- Success message -->
            <div
              v-if="submitted"
              class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2"
            >
              <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Message sent! I'll get back to you as soon as possible.
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="contact-name" class="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  required
                  class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                />
              </div>
              <div>
                <label for="contact-email" class="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label for="contact-subject" class="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                placeholder="Project Inquiry"
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
              />
            </div>

            <div>
              <label for="contact-message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg v-if="!sending" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      submitted: false,
      sending: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      contactInfo: [
        { icon: '📧', label: 'Email', value: 'manuchoadero@gmail.com', href: 'mailto:manuchoadero@gmail.com', external: false },
        { icon: '📍', label: 'Location', value: 'Nairobi, Kenya', href: '#', external: false },
        { icon: '💼', label: 'Status', value: 'Available for work', href: '#', external: false },
      ],
      socials: [
        { name: 'GitHub',   url: 'https://github.com/manucho254' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuel-adero-834253203/' },
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.sending) return;
      this.sending = true;
      // Simulate a brief sending delay then open mailto
      setTimeout(() => {
        const subject = encodeURIComponent(this.form.subject || 'Portfolio Contact');
        const body = encodeURIComponent(
          `Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`
        );
        window.open(`mailto:manuchoadero@gmail.com?subject=${subject}&body=${body}`);
        this.sending = false;
        this.submitted = true;
        this.form = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => { this.submitted = false; }, 6000);
      }, 600);
    },
  },
};
</script>
