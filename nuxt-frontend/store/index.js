export const state = () => ({
  cart: [],
  user: {},
});

export const actions = {
  addToCart({ commit }, payload) {
    if (payload.qty < 1) {
      return commit("removeFromCart", payload.product);
    }
    commit("addToCart", payload);
  },
  removeFromCart({ commit }, product) {
    commit("removeFromCart", product);
  },
  // async login({ commit }, { email, password }) {
  //   const res = await this.$axios.$post(
  //     "/api/users/login",
  //     { email, password },
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  //   commit("addUser", res);
  //   this.$router.push("/admin/orders");
  // },
  // logout({ commit }) {
  //   commit("removeUser");
  //   this.$router.push("/admin/login");
  // },
};

export const mutations = {
  addToCart(state, payload) {
    const newProduct = { ...payload.product, qty: payload.qty };
    const duplicate = state.cart.find((item) => item._id === newProduct._id);
    if (duplicate) {
      duplicate.qty = newProduct.qty;
    } else {
      state.cart.unshift(newProduct);
    }
  },
  removeFromCart(state, product) {
    const productInCart = state.cart.find((item) => item._id === product._id);
    state.cart.splice(state.cart.indexOf(productInCart), 1);
  },
  addUser(state, user) {
    state.user = user;
  },
  removeUser(state) {
    state.user = {};
  },
};

export const getters = {};
