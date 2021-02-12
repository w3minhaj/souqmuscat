<template>
  <div>
    <h1>Top Products</h1>
    <div class="all-top-products-container">
      <h2>All Top Products</h2>
      <vs-card-group>
        <vs-card
          v-for="{ product } in topProducts"
          :key="product._id"
          style="min-width: 300px"
        >
          <template #title>
            <h3>{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="`/api/uploads${product.images[0]}`" alt="" />
          </template>
          <template #text>
            <h4>{{ product.price }} OMR</h4>
          </template>
          <template #interactions>
            <vs-button class="featured" shadow warn v-if="product.featured">
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
            <vs-button
              danger
              icon
              relief
              @click="removeTopProduct(product._id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: white; transform: ; -ms-filter: "
              >
                <path
                  fill="none"
                  d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                ></path>
                <path
                  d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                ></path>
                <path
                  d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                ></path>
              </svg>
            </vs-button>
          </template>
        </vs-card>
      </vs-card-group>
    </div>
    <div class="add-top-products-container">
      <h2>Add New Top Product</h2>
      <div class="search-box">
        <div class="con-input" style="margin-top: 10px">
          <input
            aria-label="Search"
            autocomplete="off"
            spellcheck="false"
            class=""
            v-model="search"
            placeholder="Search products.."
            @keyup.enter="searchProducts"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="cursor: pointer"
            @click="searchProducts"
          >
            <path
              d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
            ></path>
          </svg>
        </div>
      </div>
      <!-- table  -->
      <div class="center" style="margin-top: 25px">
        <vs-table v-model="selectedProduct">
          <template #thead>
            <vs-tr>
              <vs-th> Product Name </vs-th>
              <vs-th> Category </vs-th>
              <vs-th> Price </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="product._id"
              v-for="product in products"
              :data="product"
              :is-selected="selectedProduct == product"
            >
              <vs-td>
                {{ product.name }}
              </vs-td>
              <vs-td>
                {{ product.category.name }}
              </vs-td>
              <vs-td>
                {{ product.price }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>

        <span class="data">
          <p v-if="selectedProduct" style="font-weight: bold; margin-top: 25px">
            Selected Product
          </p>
          <vs-card
            v-if="selectedProduct"
            style="min-width: 250px; padding: 0 5px; margin-top: 20px"
          >
            <template #title>
              <h3>{{ selectedProduct.name }}</h3>
            </template>
            <template #img>
              <img :src="`/api/uploads${selectedProduct.images[0]}`" alt="" />
            </template>
            <template #text>
              <h4>{{ selectedProduct.price }} OMR</h4>
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
          <p v-if="!selectedProduct">"Select an item in the table"</p>
        </span>
      </div>
      <vs-button relief style="margin-top: 25px" @click="addTopProduct">
        + Add As Top Product
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      topProducts: [],
      topProduct: "",
      search: "",
      products: [],
      selectedProduct: null,
    };
  },
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    const res = await this.$axios.$get("/api/top-products/");
    this.topProducts = res;
    loading.close();
  },
  methods: {
    async searchProducts() {
      const res = await this.$axios.$get(`/api/products?q=${this.search}`);
      this.products = res.products;
    },
    async addTopProduct(){
      if(this.selectedProduct) {
        const res = await this.$axios.$post(
          "/api/top-products",
          {
            product: this.selectedProduct._id
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.$router.go();
      }
    },
    async removeTopProduct(productId){
      this.topProducts.forEach((product)=>{
        if(product.product._id === productId) {
          this.$axios.$delete(`/api/top-products/${product._id}`).then(()=>{
            this.$router.go();
          })
        }
      })
    }
  },
};
</script>

<style scoped>
.all-top-products-container,
.add-top-products-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.full-input input {
  width: 100%;
}

.search-box {
  display: inline-block;
  margin-right: 0;
  position: relative;
}

.search-box .con-input {
  display: flex;
  align-items: center;
  position: relative;
}

.search-box input {
  cursor: text;
  width: 15rem;
  color: var(--vs-theme-color);
  display: inline-block;
  border-radius: 2rem;
  font-size: 0.85rem;
  line-height: 1.8rem;
  outline: none;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.05);
  background-size: 1rem;
  display: block;
  border-radius: 0;
  border: 0;
  padding: 4px 4px 4px 20px;
  opacity: 1;
  border-radius: 14px 14px 14px 14px;
  margin: 5px 0;
}

.search-box input:focus {
  width: 20rem;
}

.search-box svg {
  position: absolute;
  right: 10px;
  width: 20px;
  pointer-events: none;
  transition: all 0.2s ease;
  fill: var(--vs-theme-color);
  z-index: 9999;
  cursor: pointer;
}
</style>
