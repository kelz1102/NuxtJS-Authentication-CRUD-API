<template>
  <form
    class="w-96 mx-auto border mt-32 bg-white border-gray-300 rounded-lg px-4 md:w-8/12 md:px-8 lg:w-5/12 lg:px-12"
    @submit.prevent="submitForm"
  >
    <h1 class="text-2xl font-bold text-center text-gray-600 my-12">SIGN UP</h1>
    <div
      v-if="error"
      class="p-4 mb-4 text-sm inline-block text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <p class="font-medium">{{ error }}</p>
    </div>
    <div class="mb-6">
      <label
        for="name"
        class="block mb-2 text-xsm font-semibold text-gray-900 dark:text-gray-300"
        >Name</label
      >
      <input
        type="text"
        id="name"
        v-model="formValues.name"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
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
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          value=""
          class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <label
        for="terms"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I agree with the
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >terms and conditions</a
        ></label
      >
    </div>
    <button
      type="submit"
      class="text-gray-500 border border-gray-400 mb-20 bg-white hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  layout: "guest",
  data() {
    return {
      error: "",
      formValues: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.formValues.email || !this.formValues.password) {
        this.error = "Something went wrong";
        return;
      }
      this.$store.dispatch("registerForm", this.formValues);
    },
  },
};
</script>

<style scope></style>
