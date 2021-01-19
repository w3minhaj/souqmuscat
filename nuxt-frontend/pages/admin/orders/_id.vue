<template>
  <div class="p-5">
    <Nuxt-link to="/admin/orders">Go to all orders</Nuxt-link>
    <br />
    {{ order }}
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      order: {},
    };
  },
  mounted() {
    this.$axios
      .$get(`/api/orders/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.user.token}`,
        },
      })
      .then((data) => {
        this.order = data;
      });
  },
};
</script>

<style>
</style>