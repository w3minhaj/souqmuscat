<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <button
        class="flex ml-10 -mt-20 mr-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
        @click="goBack"
      >
        Go back
      </button>
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          v-if="product.images"
          :src="`/api/uploads/${product.images[0]}`"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2
            class="text-sm title-font text-gray-500 tracking-widest"
            v-if="product.category"
          >
            {{ product.category.name.toUpperCase() }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ product.name }}
          </h1>

          <p class="leading-relaxed">
            {{ product.description }}
          </p>

          <div class="flex mt-10 items-center">
            <span class="title-font font-medium text-2xl text-gray-900"
              >${{ product.price }}</span
            >
            <div class="custom-number-input h-10 w-32">
              <div
                class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
              >
                <button
                  @click="qty > 1 && qty--"
                  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700"
                  name="custom-input-number"
                  v-model="qty"
                />
                <button
                  @click="qty++"
                  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <button
              class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              @click="addToCart"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>

<script>
export default {
  layout: "shop",
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  async fetch() {
    this.product = await this.$axios.$get(
      `/api/products/${this.$route.params.id}`
    );
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    addToCart: function () {
      this.$store.dispatch("addToCart", {
        product: this.product,
        qty: this.qty,
      });
      this.$router.push("/cart");
    },
  },
};
</script>