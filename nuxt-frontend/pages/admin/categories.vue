<template>
  <div>
    <h1>Categories</h1>
    <div class="all-categories-container">
      <h2>All Categories</h2>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> Name </vs-th>
            <vs-th dir="rtl"> Name in Arabic </vs-th>
            <vs-th> No </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="category._id"
            v-for="(category, i) in categories"
            :data="category"
          >
            <vs-td>
              {{ category.name }}
            </vs-td>
            <vs-td dir="rtl">
              {{ category.nameInArabic }}
            </vs-td>
            <vs-td>
              {{ i }}
            </vs-td>
            <template #expand>
              <hr />
              <vs-row justify="space-between">
                <vs-col w="6">
                  <vs-row justify="space-between">
                    <vs-input
                      v-model="category.name"
                      label="Category Name"
                      placeholder="Category Name"
                      style="margin-top: 25px"
                      state="primary"
                    />
                    <vs-input
                      v-model="category.nameInArabic"
                      label="Category Name In Arabic"
                      placeholder="Category Name In Arabic"
                      style="margin-top: 25px"
                      state="primary"
                    />
                    <vs-button
                      relief
                      success
                      style="margin-top: 25px"
                      @click="
                        editCategory(
                          category._id,
                          category.name,
                          category.nameInArabic
                        )
                      "
                      :loading="editCategoryLoading"
                      ><svg
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
                  </vs-row>
                </vs-col>
                <vs-col w="2">
                  <vs-button
                    relief
                    danger
                    style="margin-top: 25px"
                    @click="deleteCategory(category._id)"
                    :loading="deleteCategoryLoading"
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
                    &nbsp;Delete</vs-button
                  >
                </vs-col>
              </vs-row>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <div class="add-category-container">
      <h2>Add New Category</h2>
      <vs-input
        v-model="addCategoryName"
        label="Category Name"
        placeholder="Category Name"
        style="margin-top: 25px"
        class="full-input"
        state="dark"
      />
      <vs-input
        v-model="addCategoryNameInArabic"
        label="Category Name In Arabic"
        placeholder="Category Name In Arabic"
        style="margin-top: 25px"
        class="full-input"
        dir="rtl"
        state="dark"
      />
      <vs-button
        relief
        style="margin-top: 25px"
        @click="addCategory"
        :loading="addCategoryLoading"
        >+ Add Category</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      categories: [],
      addCategoryName: "",
      addCategoryNameInArabic: "",
      addCategoryLoading: false,
      editCategoryLoading: false,
      deleteCategoryLoading: false,
    };
  },
  created: async function () {
    const loading = this.$vs.loading({
      text: "Loading...",
    });
    this.categories = await this.$axios.$get("/api/category/");
    loading.close();
  },
  methods: {
    async addCategory() {
      if (this.addCategoryName && this.addCategoryNameInArabic) {
        this.addCategoryLoading = true
        const res = await this.$axios.$post(
          "/api/category",
          {
            name: this.addCategoryName,
            nameInArabic: this.addCategoryNameInArabic,
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
    async editCategory(_id, name, nameInArabic) {
      try {
        this.editCategoryLoading = true
        await this.$axios.$put(
          `api/category/${_id}`,
          { name, nameInArabic },
          { headers: { "Content-Type": "application/json" } }
        );
        this.$router.go();
      } catch (e) {
        if (e.response.status === 401) {
          this.$store.commit("removeUser");
          this.$router.push("/admin/login");
        }
      }
    },
    async deleteCategory(_id) {
      try {
        this.deleteCategoryLoading = true
        await this.$axios.$delete(`api/category/${_id}`);
        this.$router.go();
      } catch (e) {
        if (e.response.status === 401) {
          this.$store.commit("removeUser");
          this.$router.push("/admin/login");
        }
      }
    },
  },
};
</script>

<style>
.add-category-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.all-categories-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 10px;
  margin: 20px 0;
}

.full-input input {
  width: 100%;
}

.full-input label {
  padding-right: 20px;
}
</style>
