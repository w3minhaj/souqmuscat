<template>
  <div>
    <div class="product-details-container">
      <h2 style="margin-bottom: 20px">Product details</h2>
      <vs-button :to="`/products/${product._id}`" primary relief>
        Go to Product Page
      </vs-button>
      <p style="margin-top: 10px">
        <span class="bold">Product ID: </span>{{ product._id }}
      </p>
      <p style="margin-top: 10px">
        <span class="bold">Name: </span>{{ product.name }}
      </p>
      <p style="margin-top: 10px">
        <span class="bold">Name in Arabic: </span>{{ product.nameInArabic }}
      </p>
      <p class="bold" style="margin-top: 10px">Description</p>
      <p>{{ product.description }}</p>
      <p class="bold" style="margin-top: 10px">Description in Arabic</p>
      <p>{{ product.descriptionInArabic }}</p>
      <p style="margin-top: 10px">
        <span class="bold">category: </span
        >{{ product.category && product.category.name }}
      </p>
      <p style="margin-top: 10px">
        <span class="bold">price: </span>{{ product.price }} OMR
      </p>
      <p style="margin-top: 10px">
        <span class="bold">featured: </span>{{ product.featured }}
      </p>
      <p class="bold" style="margin-top: 10px">Shipping Charges</p>
      <p
        v-for="(shippingCharge, i) in product.shippingCharge"
        :key="shippingCharge.area"
      >
        {{ i }}. {{ shippingCharge.area }} -> {{ shippingCharge.price }} OMR
      </p>
      <p class="bold" style="margin-top: 10px">Images</p>
      <vs-card-group>
        <vs-card type="4" v-for="image in product.images" :key="image">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img :src="`/api/uploads/${image}`" alt="" />
          </template>
        </vs-card>
      </vs-card-group>
    </div>
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
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    try {
    const res = await this.$axios.get(`/api/products/${this.$route.params.id}`);
    this.product = res.data;
    loading.close();
    } catch(e) {
      this.$router.push("/admin/products");
      loading.close()
  }
}}
</script>

<style>
.product-details-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.bold {
  font-weight: bold;
}
</style>
