<template>
  <div class="">
    <div>
      <main class="px-6">
        <section class="text-gray-600 body-font">
          <!-- search -->
          <div class="box pt-6">
            <div class="box-wrapper">
              <div
                class="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200"
              >
                <button @click="search" class="outline-none focus:outline-none">
                  <svg
                    class="w-5 text-gray-600 h-5 cursor-pointer"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <input
                  type="search"
                  name=""
                  id=""
                  @keydown.enter="search"
                  placeholder="search for products"
                  class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                  v-model="keyword"
                />
                <div class="select">
                  <select
                    name=""
                    id=""
                    v-model="category"
                    class="text-sm outline-none focus:outline-none bg-transparent"
                  >
                    <option value="" selected>All</option>
                    <option
                      v-for="category in categories"
                      :key="category._id"
                      :value="category._id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- /search -->
          <div class="container px-4 py-8 mx-auto">
            <div class="flex flex-wrap -m-4">
              <Product
                v-for="product of products"
                :key="product._id"
                :product="product"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  data() {
    return {
      products: [],
      categories: [],
      keyword: "",
      category: "",
    };
  },
  async fetch() {
    this.products = (
      await this.$axios.$get(
        `/api/products/?category=${this.$route.query.category}&keyword=${this.$route.query.keyword}`
      )
    ).products;

    this.categories = await this.$axios.$get("/api/category");
  },
  methods: {
    search() {
      this.$router.push(`/?category=${this.category}&keyword=${this.keyword}`);
    },
  },
  components: { Product },
  head: { title: "Souq" },
  layout: "shop",
};
</script>
