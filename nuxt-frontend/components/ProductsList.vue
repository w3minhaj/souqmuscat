<template>
  <div>
    <h2 style="padding: 20px 0; margin-left: 15px">{{ productsHeading }}</h2>

    <div class="products-list-container">
      <vs-card
        style="min-width: 250px; padding: 0 5px; margin-top: 20px"
        v-for="product in products"
        :key="product._id"
      >
        <template #title>
          <h3>{{ product.name }}</h3>
        </template>
        <template #img>
          <img :src="`/api/uploads${product.images[0]}`" alt="" />
        </template>
        <template #text>
          <h4>{{ product.price }}</h4>
        </template>
        <template #interactions>
          <vs-button class="featured" shadow warn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              style="transform: ; -ms-filter: "
            >
              <path
                d="M21.947,9.179c-0.129-0.378-0.47-0.645-0.868-0.676L15.378,8.05l-2.467-5.461C12.75,2.23,12.393,2,12,2 s-0.75,0.23-0.911,0.588L8.622,8.05L2.921,8.503C2.53,8.534,2.193,8.791,2.06,9.16s-0.039,0.782,0.242,1.056l4.213,4.107 l-1.49,6.452c-0.092,0.399,0.069,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22c0.193,0,0.387-0.056,0.555-0.168L12,18.202 l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082l-1.829-6.4l4.536-4.082 C21.966,9.976,22.075,9.558,21.947,9.179z"
              ></path>
            </svg>
            <span class="span" style="margin-left: 5px"> Featured </span>
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productsHeading: String,
    products: Array
  },
};
</script>

<style>
.featured {
  background: rgba(var(--vs-warn));
  fill: rgba(var(--vs-primary));
  color: rgba(var(--vs-primary));
}

.products-list-container {
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>