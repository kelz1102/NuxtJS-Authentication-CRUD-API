<template>
  <form
    @submit.prevent="handleLogin"
    class="w-96 mx-auto border mt-32 border-gray-300 bg-white rounded-lg px-4 md:w-8/12 md:px-8 lg:w-5/12 lg:px-12"
  >
    <h1 class="text-2xl font-bold text-center text-gray-600 my-12">SIGN IN</h1>
    <div
      v-if="loginError"
      class="p-4 mb-4 text-sm inline-block text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <p class="font-medium">{{ loginError }}</p>
    </div>
    <div
      v-else-if="error"
      class="p-4 mb-4 text-sm inline-block text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <p class="font-medium">{{ error }}</p>
    </div>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-xsm font-semibold text-gray-900 dark:text-gray-300"
        >Email</label
      >
      <input
        type="email"
        id="email"
        v-model="formValues.email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-xsm font-semibold text-gray-900 dark:text-gray-300"
        >Password</label
      >
      <input
        type="password"
        id="password"
        v-model="formValues.password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <label
        for="remember"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Remember me</label
      >
    </div>
    <button
      type="submit"
      class="text-gray-500 border border-gray-500 mb-20 bg-white hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "guest",
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    handleLogin() {
      if (!this.formValues.email || !this.formValues.password) {
        this.$store.commit("setLoginError", "");
        this.error = "Something went wrong";
        return;
      }
      this.$store.dispatch("loginForm", this.formValues);
    },
  },
  computed: {
    ...mapState({
      loginError: (state) => state.loginError,
    }),
  },
};
</script>

<style scope></style>
