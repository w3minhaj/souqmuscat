<template>
  <div>
    <top-swiper />
    <top-products />
    <!-- two columns -->
    <div class="center grid">
      <vs-row style="padding: 30px 50px 40px 50px">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <categories-sidebar />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="10">
          <products-list
            :productsHeading="$t('all_products')"
            :products="products"
            :offerProduct="offerProduct"
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
    <!-- two columns/end -->
  </div>
</template>

<script>
import CategoriesSidebar from "../components/CategoriesSidebar.vue";
import Footer from "../components/Footer.vue";
import HeaderNav from "../components/HeaderNav.vue";
import ProductsList from "../components/ProductsList.vue";
import TopProducts from "../components/TopProducts.vue";
import TopSwiper from "../components/TopSwiper.vue";
export default {
  components: {
    TopSwiper,
    HeaderNav,
    TopProducts,
    CategoriesSidebar,
    Footer,
    ProductsList,
  },
  data() {
    return {
      products: [],
      pages: 0,
      page: 1,
      offerProduct: {},
    };
  },
  layout: "shop",
  async fetch() {
    const page = this.$route.query.page || 1;
    const res = await this.$axios.$get(`/api/products?page=${page}`);
    this.products = res.products;
    this.pages = res.pages;
    this.page = res.page;
  },
  watch: {
    page: function () {
      this.$router.replace({ query: { page: this.page } });
      this.fetch(this.page);
    },
  },
  methods: {
    async fetch(page) {
      const res = await this.$axios.$get(`/api/products?page=${page}`);
      this.products = res.products;
    },
  },
  created() {
    if (this.page == 1 || this.$route.query.page == 1) {
      this.$axios.$get(`/api/offer-product`).then((data) => {
        if (data) {
          this.offerProduct = data;
        }
      });
    }
  },
};
</script>

<style></style>
