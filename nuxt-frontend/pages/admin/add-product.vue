<template>
  <div class="p-5">
    <div class="leading-loose">
      <form
        class="m-4 p-10 bg-white rounded shadow-xl"
        @submit.prevent="addProduct"
      >
        <h2
          class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
        >
          Add Product
        </h2>
        <!-- Name -->
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name">Name</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Product name"
            aria-label="Name"
            v-model.trim="name"
          />
        </div>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Name in Arabic</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Product name in Arabic"
            aria-label="Name"
            v-model.trim="nameInArabic"
          />
        </div>
        <!-- description -->
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Description</label
          >
          <textarea
            class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Product description"
            aria-label="Email"
            rows="5"
            v-model.trim="description"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Description in Arabic</label
          >
          <textarea
            class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Product description in Arabic"
            aria-label="Email"
            rows="5"
            v-model.trim="descriptionInArabic"
          />
        </div>
        <!-- category -->
        <div class="mt-2">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Category</label
          >
          <select v-model="category">
            <option disabled value="">Please select a category</option>
            <option
              v-for="category in categories"
              :key="category.name"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <!-- price -->
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Price</label
          >
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden text-sm text-gray-600" for="cus_email"
            >Price in dollar($)</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            step=".01"
            required="true"
            placeholder="Price in dollar($)"
            aria-label="Email"
            v-model.number="priceInUSD"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden text-sm text-gray-600" for="cus_email"
            >Price in Oman Riyal(OMR)</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            step=".01"
            required="true"
            placeholder="Price in Oman Riyal(OMR)"
            aria-label="Email"
            v-model="priceInOMR"
          />
        </div>
        <!-- images -->
        <label class="block text-sm text-gray-600 mt-2" for="cus_email"
          >Images</label
        >
        <div class="mt-2">
          <dropzone
            id="dropzone"
            ref="el"
            :options="options"
            :destroyDropzone="true"
            @vdropzone-complete="uploadSuccess"
          ></dropzone>
        </div>
        <!-- shipping -->
        <p class="mt-4 text-gray-800 font-medium">Shipping charge</p>

        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600" for="cus_email">
            area 1
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in dollar($)"
            aria-label="Email"
            v-model.number="area1ShippingPriceInUSD"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden text-sm text-gray-600" for="cus_email"
            >Shipping Price in Oman Riyal(OMR)</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in Oman Riyal(OMR)"
            aria-label="Email"
            v-model.number="area1ShippingPriceInOMR"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600" for="cus_email"
            >area 2</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in dollar($)"
            aria-label="Email"
            v-model.number="area2ShippingPriceInUSD"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden text-sm text-gray-600" for="cus_email"
            >Shipping Price in Oman Riyal(OMR)</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in Oman Riyal(OMR)"
            aria-label="Email"
            v-model.number="area2ShippingPriceInOMR"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="block text-sm text-gray-600" for="cus_email"
            >area 3</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in dollar($)"
            aria-label="Email"
            v-model.number="area3ShippingPriceInUSD"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden text-sm text-gray-600" for="cus_email"
            >Shipping Price in Oman Riyal(OMR)</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="number"
            required="true"
            step=".01"
            placeholder="Shipping Price in Oman Riyal(OMR)"
            aria-label="Email"
            v-model.number="area3ShippingPriceInOMR"
          />
        </div>
        <!-- Add product button -->
        <div class="mt-4">
          <button
            class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
          >
            Add product
          </button>
        </div>
      </form>
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
      options: {
        url: "/api/upload",
        paramName: "image",
      },
      categories: [],
      category: "",
      name: "",
      nameInArabic: "",
      description: "",
      descriptionInArabic: "",
      priceInUSD: 0,
      priceInOMR: 0,
      images: [],
      area1ShippingPriceInUSD: 0,
      area1ShippingPriceInOMR: 0,
      area2ShippingPriceInUSD: 0,
      area2ShippingPriceInOMR: 0,
      area3ShippingPriceInUSD: 0,
      area3ShippingPriceInOMR: 0,
    };
  },
  methods: {
    uploadSuccess(response) {
      this.images.push(response.xhr.response);
    },
    async addProduct() {
      const product = {
        name: this.name,
        nameInArabic: this.nameInArabic,
        description: this.description,
        descriptionInArabic: this.descriptionInArabic,
        category: this.category,
        priceInUSD: this.priceInUSD,
        priceInOMR: this.priceInOMR,
        images: this.images,
        shippingCharge: [
          {
            area: "area 1",
            priceInUSD: this.area1ShippingPriceInUSD,
            priceInOMR: this.area1ShippingPriceInOMR,
          },
          {
            area: "area 2",
            priceInUSD: this.area2ShippingPriceInUSD,
            priceInOMR: this.area2ShippingPriceInOMR,
          },
          {
            area: "area 3",
            priceInUSD: this.area3ShippingPriceInUSD,
            priceInOMR: this.area3ShippingPriceInOMR,
          },
        ],
      };

      const res = await this.$axios.$post(
        "/api/products",
        { ...product },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.user.token}`,
          },
        }
      );
      // this.$router.go();
    },
  },
  mounted() {
    const instance = this.$refs.el.dropzone;
  },
  created() {
    this.$axios.$get("/api/category").then((data) => (this.categories = data));
  },
};
</script>

<style>
</style>