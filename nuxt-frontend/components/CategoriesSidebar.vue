<template>
  <div class="hidden">
    <vs-sidebar relative v-model="active" open class="categories_sidebar">
      <template #logo style="width: unset">
        <h3 class="categories_heading">{{ $t("categories") }}</h3>
      </template>
      <vs-sidebar-item
        :id="category._id"
        class="sidebar_item"
        v-for="category in categories"
        :key="category._id"
        :to="`/category/${category._id}`"
      >
        {{ $i18n.locale == "en" ? category.name : category.nameInArabic }}
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      categories: []
    };
  },
  async fetch(){
    this.categories = await this.$axios.$get("/api/category")
  }
};
</script>

<style scoped>
.sidebar_item {
  margin: -5px 0;
}

.categories_sidebar {
  overflow-y: scroll;
  min-width: min-content;
  margin-right: 20px;
  left: 20px;
  top: 20px;
  border-radius: 25px;
}

.categories_sidebar::-webkit-scrollbar-track {
  background: #fbfbfb;
  opacity: 0;
}

.categories_heading {
  padding: 0 16px;
}

.sidebar_item:last-of-type {
  margin-bottom: 1rem;
}
</style>