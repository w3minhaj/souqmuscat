<template>
  <client-only>
    <div class="hidden" v-show="isAdmin">
      <vs-sidebar
        absolute
        v-model="routeName"
        square
        open
        class="dashboard-sidebar"
      >
        <template #logo>
          <logo style="width: 80%" />
        </template>
        <vs-sidebar-item id="orders" to="/admin/orders">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=""
            >
              <path
                d="M4 6H6V8H4zM4 11H6V13H4zM4 16H6V18H4zM20 8L20 6 18.8 6 9.2 6 8.023 6 8.023 8 9.2 8 18.8 8zM8 11H20V13H8zM8 16H20V18H8z"
              ></path>
            </svg>
          </template>
          Orders
        </vs-sidebar-item>
        <vs-sidebar-item id="products" to="/admin/products">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=""
            >
              <path
                d="M21.822,7.431C21.635,7.161,21.328,7,21,7H7.333L6.179,4.23C5.867,3.482,5.143,3,4.333,3H2v2h2.333l4.744,11.385 C9.232,16.757,9.596,17,10,17h8c0.417,0,0.79-0.259,0.937-0.648l3-8C22.052,8.044,22.009,7.7,21.822,7.431z M17.307,15h-6.64 l-2.5-6h11.39L17.307,15z"
              ></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </template>
          Products
        </vs-sidebar-item>
        <vs-sidebar-item id="categories" to="/admin/categories">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=""
            >
              <path
                d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM9 9H5V5h4V9zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM19 19h-4v-4h4V19zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM17 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S18.103 9 17 9zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13zM7 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S8.103 19 7 19z"
              ></path>
            </svg>
          </template>
          Categories
        </vs-sidebar-item>
        <vs-sidebar-item id="top" to="/admin/top-products">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=""
            >
              <path
                fill="none"
                d="M12 11.222L14.667 13 13.777 9.889 16 8 13.333 7.667 12 5 10.667 7.667 8 8 10.223 9.889 9.333 13z"
              ></path>
              <path
                d="M19,21.723V10V9V4c0-1.104-0.896-2-2-2H7C5.896,2,5,2.896,5,4v5v1v11.723l7-4.571L19,21.723z M8,8l2.667-0.333L12,5 l1.333,2.667L16,8l-2.223,1.889L14.667,13L12,11.222L9.333,13l0.89-3.111L8,8z"
              ></path>
            </svg>
          </template>
          Top Products
        </vs-sidebar-item>
        <vs-sidebar-item id="slider" to="/admin/slider">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style=""
            >
              <path
                d="M20,3H4C2.897,3,2,3.897,2,5v10c0,1.103,0.897,2,2,2h7v3H8v2h3h2h3v-2h-3v-3h7c1.103,0,2-0.897,2-2V5 C22,3.897,21.103,3,20,3z M4,15V5h16l0.001,10H4z"
              ></path>
              <path d="M10 13L15 10 10 7z"></path>
            </svg>
          </template>
          Top Slider
        </vs-sidebar-item>
        <vs-sidebar-item id="limited" to="/admin/limited-offer">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="transform: ; -ms-filter: "
            >
              <path
                d="M20.145,8.27l1.563-1.563l-1.414-1.414L18.586,7c-1.05-0.63-2.274-1-3.586-1c-3.859,0-7,3.14-7,7s3.141,7,7,7s7-3.14,7-7 C22,11.175,21.292,9.517,20.145,8.27z M15,18c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S17.757,18,15,18z"
              ></path>
              <path
                d="M14 10H16V14H14zM13 3H17V5H13zM3 8H7V10H3zM3 16H7V18H3zM2 12H5.99V14H2z"
              ></path>
            </svg>
          </template>
          Limited Time Offer
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar
              warn
              style="cursor: pointer"
              :loading="refreshLoading"
              @click="refresh"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: #042867"
              >
                <path
                  d="M10 11H7.101c0-.003 0-.006.001-.009.065-.319.163-.634.291-.937.126-.297.281-.583.461-.85.178-.264.384-.513.61-.74C8.691 8.238 8.94 8.032 9.206 7.853c.266-.18.551-.334.848-.46.302-.128.617-.226.938-.291.658-.135 1.357-.135 2.018 0 .318.065.634.163.937.291.296.125.581.281.85.461.266.179.514.384.738.609l1.416-1.412c-.314-.316-.664-.604-1.036-.855-.373-.252-.773-.47-1.188-.646-.425-.18-.868-.317-1.315-.408-.923-.189-1.899-.189-2.819 0-.449.092-.892.229-1.316.409C8.858 5.727 8.458 5.944 8.086 6.196 7.716 6.445 7.368 6.733 7.05 7.05S6.445 7.716 6.197 8.085c-.252.373-.47.773-.646 1.19-.18.424-.317.867-.408 1.315C5.115 10.725 5.1 10.863 5.08 11H2l4 4L10 11zM14 13h2.899c-.001.003 0 .006-.001.008-.066.324-.164.639-.292.938-.123.293-.278.579-.459.848-.179.264-.385.514-.613.742-.225.225-.473.43-.739.61-.268.18-.553.335-.849.461-.303.128-.618.226-.938.291-.657.135-1.357.135-2.017 0-.319-.065-.634-.163-.937-.291-.297-.126-.583-.281-.85-.461-.264-.178-.513-.384-.74-.61L7.05 16.95c.317.317.666.605 1.035.854.373.252.773.47 1.19.646.424.18.867.317 1.315.408C11.051 18.952 11.525 19 12 19s.949-.048 1.408-.142c.449-.091.893-.229 1.317-.409.415-.176.815-.393 1.188-.645.372-.251.722-.54 1.035-.854.317-.317.605-.666.855-1.037.254-.377.472-.777.645-1.187.178-.42.315-.863.408-1.316.027-.135.043-.273.063-.41H22l-4-4L14 13z"
                ></path>
              </svg>
            </vs-avatar>

            <vs-button
              color="#042867"
              style="color: #d59c04; font-weight: bold"
              @click="logout"
              :loading="logoutLoading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: #d59c04"
              >
                <path d="M2 12L7 16 7 13 16 13 16 11 7 11 7 8z"></path>
                <path
                  d="M13.001,2.999c-2.405,0-4.665,0.937-6.364,2.637L8.051,7.05c1.322-1.322,3.08-2.051,4.95-2.051s3.628,0.729,4.95,2.051 s2.051,3.08,2.051,4.95s-0.729,3.628-2.051,4.95s-3.08,2.051-4.95,2.051s-3.628-0.729-4.95-2.051l-1.414,1.414 c1.699,1.7,3.959,2.637,6.364,2.637s4.665-0.937,6.364-2.637c1.7-1.699,2.637-3.959,2.637-6.364s-0.937-4.665-2.637-6.364 C17.666,3.936,15.406,2.999,13.001,2.999z"
                ></path>
              </svg>
              &nbsp;&nbsp;<span style="color: #d59c04">Logout</span>
            </vs-button>
          </vs-row>
        </template>
      </vs-sidebar>
      <div class="dashboard-content">
        <Nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
import logo from "../pages/admin/logo.vue";
export default {
  components: { logo },
  data() {
    return {
      routeName: "",
      logoutLoading: false,
      refreshLoading: false,
    };
  },
  watch: {
    $route: {
      handler: function () {
        console.log(this.$route.path.split("/")[2])
        this.routeName = this.$route.path.split("/")[2].split("-")[0]
      },
      immediate: true,
    },
  },
  mounted() {
    if (!this.isAdmin) {
      console.log(this.isAdmin);
      this.$router.push("/admin/login");
    }
  },
  computed: {
    isAdmin: function () {
      return this.$store.state.user?.isAdmin;
    },
  },
  methods: {
    async logout() {
      this.logoutLoading = true;
      await this.$axios.$post("/api/users/logout");
      this.$store.commit("removeUser");
      this.$router.push("/admin/login");
    },
    refresh() {
      this.refreshLoading = true;
      this.$router.go();
    },
  },
};
</script>

<style>
.dashboard-content {
  margin-left: 280px;
  padding: 50px;
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
