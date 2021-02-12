<template>
  <div style="margin-top: 90px; padding 50px">
    <vs-row style="padding: 30px 50px 40px 50px">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
        <categories-sidebar />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="10">
        <products-list
          :productsHeading="`You Searched for &quot;${$route.query.q}&quot;`"
          :products="products"
        />
        <vs-pagination
          style="margin-top: 20px"
          color="primary"
          v-model="page"
          :length="pages"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CategoriesSidebar from "../../components/CategoriesSidebar.vue";
import ProductsList from "../../components/ProductsList.vue";
export default {
  components: { CategoriesSidebar, ProductsList },
  layout: "shop",
  data() {
    return {
      products: [],
      pages: 0,
      page: 1,
    };
  },
  async fetch() {
    const page = this.$route.query.page || 1;
    const res = await this.$axios.$get(
      `/api/products?q=${this.$route.query.q}&page=${page}`
    );
    this.products = res.products;
    this.pages = res.pages;
    this.page = res.page;
  },
  watch: {
    page: function () {
      this.$router.replace({ query: { q:this.$route.query.q, page: this.page} });
      this.fetch(this.page);
    },
  },
  methods: {
    async fetch(page) {
      const res = await this.$axios.$get(
        `/api/products?q=${this.$route.query.q}&page=${page}`
      );
      this.products = res.products;
    },
  },
};
</script>

<style></style>
