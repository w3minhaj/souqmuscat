<template>
  <div style="margin-top: 90px; padding: 50px">
    <!-- <h1 class="">Your Order has been placed successfully</h1> -->
    <vs-alert color="dark">
      <template #title>
        <h1 style="color: inherit">Your Order has been placed successfully</h1>
      </template>
      <h2 style="color: inherit">We will contact you soon at 9856 6562 9466</h2>
      <p style="font-weight: bold; margin-top: 15px">
        Order ID: jnjkd8u8kjvdnsdkvsd
      </p>
      <p style="font-weight: bold">Order Amount: 300 OMR</p>
      <template #footer>
        <vs-button square relief block dark to="/"> Go to Home </vs-button>
      </template>
    </vs-alert>
  </div>
</template>

<script>
export default {
  layout: "shop",
};
</script>

<style>
</style>