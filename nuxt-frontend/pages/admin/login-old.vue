<template>
  <div class="grid place-content-center h-screen">
    <div class="shadow-xl p-10 bg-white max-w-xl rounded">
      <h1 class="text-4xl font-black mb-4">Login</h1>
      <form @submit.prevent="submit">
        <div class="mb-4 relative">
          <input
            class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="email"
            type="text"
            autofocus
            v-model="email"
          />
          <label
            for="email"
            class="label absolute mb-0 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
            >Email Address</label
          >
        </div>
        <div class="mb-4 relative">
          <input
            class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="password"
            type="password"
            autofocus
            v-model="password"
          />
          <label
            for="password"
            class="label absolute mb-0 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
            >Password</label
          >
        </div>
        <button
          class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit: function () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #667eea;
}

.label {
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}
</style>