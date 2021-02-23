<template>
  <div>
    <h1>Limited Time Offer</h1>
    <div class="offer-product-container">
      <h2>Current Offer Product</h2>
      {{ offerProduct }}
    </div>
    <div class="add-offer-product-container">
      <h2>Add New Limited Offer Product</h2>
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
        label="Product Name In Arabic"
        placeholder="Product Name In Arabic"
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
          :value="category._id"
        >
          {{ category.name }}
        </vs-option>
      </vs-select>
      <vs-input
        type="number"
        v-model="expiry"
        label="Offer expiry time in hours"
        style="margin-top: 25px"
        step="1"
        min="0"
      />
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
      <p style="padding: 10px 5px">Shipping Charges</p>
      <vs-input
        v-for="area in areas"
        :key="area.area"
        type="number"
        v-model="area.price"
        :label="area.city + ' - ' + area.area"
        style="margin-top: 25px"
        step="0.01"
        min="0"
      />
      <vs-button relief style="margin-top: 25px" @click="addOfferProduct"
        >+ Add Product</vs-button
      >
    </div>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
import { addresses } from "../../../shippingAddresses";

export default {
  layout: "dashboard",
  components: {
    Dropzone,
  },
  data() {
    return {
      options: {
        url: "/api/upload",
        paramName: "image",
        maxFilesize: 0.1,
      },
      offerProduct: {},
      categories: [],
      name: "",
      nameInArabic: "",
      description: "",
      descriptionInArabic: "",
      selectedCategory: "",
      price: 0,
      images: [],
      featured: false,
      expiry: 1,
    };
  },
  created() {
    this.$axios.$get("/api/category").then((res) => (this.categories = res));
    this.$axios
      .$get("/api/offer-product/")
      .then((res) => (this.offerProduct = res));
  },
  mounted() {
    const instance = this.$refs.el.dropzone;
  },
  methods: {
    uploadSuccess(response) {
      if (response.xhr) {
        this.images.push(response.xhr.response);
      }
    },
    async addOfferProduct() {
      if (
        this.name &&
        this.nameInArabic &&
        this.description &&
        this.descriptionInArabic &&
        this.selectedCategory &&
        this.images.length > 0
      ) {
        const res = await this.$axios.$post(
          "/api/offer-product/",
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
            expireAt: new Date(
              new Date().getTime() + this.expiry * 60 * 60 * 1000
            ),
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
  },
  computed: {
    areas() {
      const areas = [];

      addresses.forEach((city) => {
        city.areas.forEach((area) =>
          areas.push({ area: area, city: city.city, price: 0 })
        );
      });

      return areas;
    },
  },
};
</script>

<style>
.offer-product-container,
.add-offer-product-container {
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
