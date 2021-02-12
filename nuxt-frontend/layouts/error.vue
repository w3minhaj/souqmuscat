<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">
      <vs-button
        type="submit"
        role="button"
        primary
        relief
        style="margin: 0; margin-top: 15px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style=""
        >
          <path
            d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"
          ></path>
        </svg>
        &nbsp;Go back to Home
      </vs-button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "shop",
  mounted() {
    if (this.error.statusCode === 401) {
      console.log("called");
      this.$store.commit("removeUser")
      this.$router.push("/admin/login");
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 90px;
  padding: 50px;
}
</style>