<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <h1>Products</h1>
      <vs-button to="/admin/products/add-product" relief>
        + Add New Product
      </vs-button>
    </div>
    <div class="all-products-container">
      <h2>All Products</h2>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> Id </vs-th>
            <vs-th> Name </vs-th>
            <vs-th> Price </vs-th>
            <vs-th> Category </vs-th>
            <vs-th> Featured </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="product._id" v-for="product in products" :data="product">
            <vs-td>
              {{ product._id }}
            </vs-td>
            <vs-td>
              {{ product.name }}
            </vs-td>
            <vs-td>
              {{ product.price }}
            </vs-td>
            <vs-td>
              {{ product.category.name }}
            </vs-td>
            <vs-td>
              {{ product.featured }}
            </vs-td>
            <template #expand>
              <hr />
              <vs-row justify="space-between">
                <vs-button
                  @click="pushToProductDetails(product._id)"
                  primary
                  relief
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform: ; -ms-filter: "
                  >
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
                    ></path>
                    <path d="M11 11H13V17H11zM11 7H13V9H11z"></path>
                  </svg>
                  &nbsp;More Details
                </vs-button>
                <vs-button
                  @click="pushToProductEdit(product._id)"
                  success
                  relief
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform: ; -ms-filter: "
                  >
                    <path
                      d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586 c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"
                    ></path>
                    <path
                      d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5 h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"
                    ></path>
                  </svg>
                  &nbsp;Edit Product
                </vs-button>
                <vs-button
                  danger
                  relief
                  @click="deleteProduct(product._id)"
                  :loading="deleteLoading"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform: ; -ms-filter: "
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
                  &nbsp; Delete Product
                </vs-button>
              </vs-row>
            </template>
          </vs-tr>
        </template>
      </vs-table>
      <vs-pagination
        style="margin-top: 20px"
        color="primary"
        v-model="page"
        :length="20"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      products: [],
      page: 1,
      pages: 0,
      deleteLoading: false,
    };
  },
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    const res = await this.$axios.$get("/api/products/");
    this.products = res.products;
    this.page = res.page;
    this.pages = res.pages;
    loading.close();
  },
  methods: {
    pushToProductDetails(_id) {
      this.$router.push(`/admin/products/${_id}`);
    },
    pushToProductEdit(_id) {
      this.$router.push(`/admin/products/${_id}/edit`);
    },
    async deleteProduct(_id) {
      this.deleteLoading = true;
      const res = await this.$axios.$delete(`/api/products/${_id}`);
      if (res) {
        this.deleteLoading = false;
        this.$router.go();
      }
    },
  },
  watch: {
    page: async function () {
      const loading = this.$vs.loading({
        text: "Loading...",
      });
      const res = await this.$axios.$get(`/api/products?page=${this.page}`);
      this.products = res.products;
      this.page = res.page;
      this.pages = res.pages;
      loading.close();
    },
  },
};
</script>

<style>
.all-products-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}
</style>
