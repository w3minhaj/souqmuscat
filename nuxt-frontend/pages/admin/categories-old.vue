<template>
  <div class="p-5">
    <div class="leading-loose">
      <form class="m-4 p-10 bg-white rounded shadow-xl">
        <h2
          class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
        >
          Add a category
        </h2>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Category name</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Category name"
            aria-label="Name"
            v-model="categoryName"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Category name in Arabic</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Category name in Arabic"
            aria-label="Name"
            dir="rtl"
            v-model="categoryNameInArabic"
          />
        </div>

        <div class="mt-4">
          <button
            class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            @click.prevent="addCategory"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
    <!-- Table -->
    <div class="text-gray-900">
      <div class="p-4 flex">
        <h1 class="text-3xl">Users</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">Category Name</th>
              <th class="text-left p-3 px-5">Category Name(Arabic)</th>
              <th class="text-left p-3 px-5">Actions</th>
            </tr>
            <tr
              class="border-b hover:bg-orange-100 bg-gray-100"
              v-for="category in categories"
              :key="category.name"
            >
              <td class="p-3 px-5">{{ category.name }}</td>
              <td class="p-3 px-5">{{ category.nameInArabic }}</td>
              <td class="p-3 px-5 flex text-left">
                <button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="deleteCategory(category._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      categories: [],
      categoryName: "",
      categoryNameInArabic: "",
    };
  },
  created() {
    this.$axios.$get("/api/category").then((data) => (this.categories = data));
  },
  methods: {
    async addCategory() {
      if (this.categoryName && this.categoryNameInArabic) {
        const res = await this.$axios.$post(
          "api/category",
          { name: this.categoryName, nameInArabic: this.categoryNameInArabic },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$store.state.user.token}`,
            },
          }
        );
        this.$router.go();
      }
    },
    async deleteCategory(_id) {
      const res = await this.$axios.$delete(`api/category/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.user.token}`,
        },
      });
      this.$router.go();
    },
  },
};
</script>

<style>
</style>