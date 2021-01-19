<template>
  <div class="p-5">
    <Nuxt-link to="/admin/products">Go to all products</Nuxt-link>
    <br />
    {{ product }}
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.$axios
      .$get(`/api/products/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.user.token}`,
        },
      })
      .then((data) => {
        this.product = data;
      });
  },
};
</script>

<style>
</style>