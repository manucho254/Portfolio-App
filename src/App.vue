<template>
  <div>
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/NavBar.vue";

export default {
  components: { navBar,},
};
</script>
