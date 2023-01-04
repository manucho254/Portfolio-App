<template>
  <div>
    <div v-if="loading">
      <navBar />
      <router-view />
    </div>
    <div
      class="d-flex align-items-center justify-content-center"
      style="height: 100vh"
      v-else
    >
      <span class="page-loader"></span>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/NavBar.vue";

export default {
  components: { navBar },
  data: () => {
    return {
      loading: false,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.loading = !this.loading;
    });
  },
};
</script>

<style scoped>
.page-loader {
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  margin: -50px auto 0;
  position: relative;
  color: #fff;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: animloader 2s ease infinite;
}
.page-loader::after,
.page-loader::before {
  content: "";
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  color: #fff;
  position: absolute;
  left: 30px;
  top: 0;
  animation: animloader 2s 0.2s ease infinite;
}
.page-loader::before {
  animation-delay: 0.4s;
  left: 60px;
}

@keyframes animloader {
  0% {
    top: 0;
    color: white;
  }
  50% {
    top: 30px;
    color: rgba(255, 255, 255, 0.2);
  }
  100% {
    top: 0;
    color: white;
  }
}
</style>
