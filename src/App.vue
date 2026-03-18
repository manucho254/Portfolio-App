<template>
  <div class="min-h-screen bg-dark-900">
    <NavBar />
    <main>
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SiteFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { NavBar, SiteFooter },
};
</script>
