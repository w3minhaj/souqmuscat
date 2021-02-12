<template>
  <div>
    <div class="add-product-container">
      <h2>Edit Product</h2>
      <vs-input
        v-model="name"
        label="Product Name"
        placeholder="Product Name"
        style="margin-top: 25px"
        class="full-input"
        state="dark"
      />
      <vs-input
        v-model="nameInArabic"
        label="Category Name In Arabic"
        placeholder="Category Name In Arabic"
        style="margin-top: 25px"
        class="full-input"
        dir="rtl"
        state="dark"
      />
      <!-- desc -->
      <div
        class="vs-input-parent full-input vs-input-parent--state-dark vs-input-content--has-label vs-component--primary"
        placeholder="Product Description"
        style="margin-top: 20px; margin-bottom: 20px"
      >
        <p style="font-size: 0.8rem; padding: 5px">
          Product Description In English
        </p>
        <div class="vs-input-content vs-input-content--has-label">
          <textarea
            id="desc1"
            rows="5"
            class="vs-input full-input"
            v-model="description"
          />
          <div class="vs-input__affects">
            <div class="vs-input__affects__1"></div>
            <div class="vs-input__affects__2"></div>
            <div class="vs-input__affects__3"></div>
            <div class="vs-input__affects__4"></div>
          </div>
        </div>
      </div>
      <!-- desc -->
      <!-- desc -->
      <div
        class="vs-input-parent full-input vs-input-parent--state-dark vs-input-content--has-label vs-component--primary"
        placeholder="Product Description In Arabic"
        dir="rtl"
        style="margin-top: 20px; margin-bottom: 25px"
      >
        <p style="font-size: 0.8rem; padding: 5px">
          Product Description In Arabic
        </p>
        <div class="vs-input-content vs-input-content--has-label">
          <textarea
            dir="rtl"
            id="desc2"
            rows="5"
            class="vs-input full-input"
            v-model="descriptionInArabic"
          />
          <div class="vs-input__affects">
            <div class="vs-input__affects__1"></div>
            <div class="vs-input__affects__2"></div>
            <div class="vs-input__affects__3"></div>
            <div class="vs-input__affects__4"></div>
          </div>
        </div>
      </div>
      <!-- /desc -->
      <p style="font-size: 0.8rem; padding: 5px">Category</p>
      <vs-select
        placeholder="Select A Category"
        v-model="selectedCategory"
        :key="categories.length"
        state="dark"
      >
        <vs-option
          v-for="category in categories"
          :key="category._id"
          :label="category.name"
          :value="category._id || selectedCategory"
        >
          {{ category.name }}
        </vs-option>
      </vs-select>
      <vs-input
        type="number"
        v-model="price"
        label="Price"
        style="margin-top: 25px"
        step="0.01"
        min="0"
      />
      <p style="font-size: 0.8rem; padding: 15px 5px">Images</p>
      <div>
        <dropzone
          id="dropzone"
          ref="el"
          :options="options"
          :destroyDropzone="true"
          @vdropzone-complete="uploadSuccess"
        ></dropzone>
      </div>
      <vs-card-group>
        <vs-card type="4" v-for="image in images" :key="image">
          <template #img>
            <img :src="`/api/uploads/${image}`" alt="" />
          </template>
          <template #interactions>
            <vs-button danger icon relief @click="removeImage(image)">
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
      <p style="font-size: 0.8rem; padding: 15px 5px">Featured</p>
      <vs-switch v-model="featured">
        <template #off> Not Featured </template>
        <template #on> Featured </template>
      </vs-switch>
      <p style="padding: 15px 5px">Shipping Charges</p>
      <vs-input
        v-for="area in areas"
        :key="area.name"
        type="number"
        v-model="area.price"
        :label="area.name"
        style="margin-top: 25px"
        step="0.01"
        min="0"
      />
      <vs-button
        relief
        style="margin-top: 25px"
        @click="updateProduct"
        :loading="updateProductLoading"
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
        &nbsp;Apply Edit</vs-button
      >
    </div>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";

export default {
  components: {
    Dropzone,
  },
  layout: "dashboard",
  data() {
    return {
      updateProductLoading: false,
      options: {
        url: "/api/upload",
        paramName: "image",
        maxFilesize: 0.1
      },
      categories: [],
      areas: [
        { area: "area 1", shippingCharge: 0 },
        { area: "area 2", shippingCharge: 0 },
        { area: "area 3", shippingCharge: 0 },
      ],
      name: "",
      nameInArabic: "",
      description: "",
      descriptionInArabic: "",
      selectedCategory: "",
      price: 0,
      images: [],
      featured: false,
    };
  },
  methods: {
    uploadSuccess(response) {
      if(response) {
        this.images.push(response.xhr.response);
      }
    },
    async updateProduct() {
      if (
        this.name &&
        this.nameInArabic &&
        this.description &&
        this.descriptionInArabic &&
        this.selectedCategory &&
        this.images.length > 0
      ) {
        this.updateProductLoading = true;
        const res = await this.$axios.$put(
          `/api/products/${this.$route.params.id}`,
          {
            name: this.name,
            nameInArabic: this.nameInArabic,
            description: this.description,
            descriptionInArabic: this.descriptionInArabic,
            category: this.selectedCategory,
            price: this.price,
            images: this.images,
            featured: this.featured,
            shippingCharge: this.areas,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.$router.push("/admin/products");
      }
    },
    removeImage(img) {
      this.images = this.images.filter((image) => image != img);
    },
  },
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    this.categories = await this.$axios.$get("/api/category/");
    const res = await this.$axios.$get(
      `/api/products/${this.$route.params.id}`
    );
    this.name = res.name;
    this.nameInArabic = res.nameInArabic;
    this.description = res.description;
    this.descriptionInArabic = res.descriptionInArabic;
    this.selectedCategory = res.category._id
    this.price = res.price;
    this.images = res.images;
    this.featured = res.featured;
    this.areas = res.shippingCharge;
    loading.close();
  },
  mounted() {
    const instance = this.$refs.el.dropzone;
  },
};
</script>

<style>
.add-product-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.full-input input {
  width: 100%;
}

textarea.full-input {
  width: 100%;
  resize: none;
}

.full-input label {
  padding-right: 20px;
}
</style>
