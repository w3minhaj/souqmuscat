import en from "./locales/en.js";
import ar from "./locales/ar.js";

export default {
  server: {
    port: 3000, // default: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/main.css", "swiper/css/swiper.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/persistedState.client.js" },
    "~/plugins/vuesax.client.js",
    { src: "~/plugins/vue-awesome-swiper.js", mode: "client" },
    "~/plugins/vue-awesome-countdown.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // "@nuxtjs/tailwindcss",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "nuxt-i18n",
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US" },
      { code: "ar", iso: "ar-OM" },
    ],
    defaultLocale: "ar",
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "en",
      messages: { en, ar },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: "http://localhost:5000/api",
      pathRewrite: { "^/api/": "" },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
