<template>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <div class="bg-purple-100">
      <NuxtLink :to="`/products/${product._id}`">
        <div class="relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            :src="`/api/uploads${product.images[0]}`"
          />
        </div>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
            {{ product.category.name }}
          </h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">
            {{ product.name }}
          </h2>
          <p class="mt-1">
            ${{ product.priceInUSD }} OMR: {{ product.priceInOMR }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>