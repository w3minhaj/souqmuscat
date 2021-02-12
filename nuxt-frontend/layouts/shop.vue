<template>
  <div>
    <header-nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import Footer from "~/components/Footer";

export default {
  components: {
    Footer,
    HeaderNav,
  },
};
</script>

<style>
</style>
