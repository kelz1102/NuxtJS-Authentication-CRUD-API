<template>
  <nav
    class="flex justify-between items-center bg-white h-20 border-b text-gray-400 border-gray-300"
  >
    <div class="text-gray-500 ml-2 flex justify-center items-center">
      <span class="text-sm font-medium mr-1"
        >Michael Dave Sila <span class="text-normal font-normal">-</span></span
      >
      <div>
        <a href="https://www.facebook.com/michaeldave22/" target="_blank">
          <i
            class="fa-brands fa-facebook text-xl mr-2 transform hover:text-gray-200 hover:translate-x-0.5 hover:translate-y-0.5"
          ></i
        ></a>
        <a href="https://github.com/kelz1102" target="_blank">
          <i
            class="fa-brands fa-github text-xl mr-2 transform hover:text-gray-200 hover:translate-x-0.5 hover:translate-y-0.5"
          ></i
        ></a>

        <a href="https://twitter.com/ChaeLD11" target="_blank">
          <i
            class="fa-brands fa-twitter text-xl mr-2 transform hover:text-gray-200 hover:translate-x-0.5 hover:translate-y-0.5"
          ></i
        ></a>

        <a href="https://www.instagram.com/chael1102/" target="_blank">
          <i
            class="fa-brands fa-instagram text-xl transform hover:text-gray-200 hover:translate-x-0.5 hover:translate-y-0.5"
          ></i>
        </a>
      </div>
    </div>
    <div
      v-if="authenticated"
      class="flex justify-center mr-2 text-xs md:text-sm"
    >
      <div class="text-gray-500">
        <button
          class="transform hover:translate-x-0.5 hover:translate-y-0.5 border-b tracking-wide"
        >
          <NuxtLink to="/dashboard"> DASHBOARD </NuxtLink>
        </button>
      </div>
      <button
        @click="logoutUser"
        class="text-gray-500 mx-2 md:ml-3 transform hover:translate-x-0.5 hover:translate-y-0.5 border-b"
      >
        SIGN-OUT
      </button>
    </div>
    <div v-else class="text-sm font-thin mr-2 text-gray-500">
      <div class="flex justify-center items-center">
        <button
          class="mr-1 transform font-thin hover:translate-x-0.5 hover:translate-y-0.5 border-b tracking-wide"
        >
          <NuxtLink to="/login"> SIGN-IN </NuxtLink>
        </button>
        <button
          class="mx-2 md:mx-3 font-thin text- transform hover:translate-x-0.5 hover:translate-y-0.5 border-b tracking-wide"
        >
          <NuxtLink to="/register"> SIGN-UP </NuxtLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["authenticated"]),
    ...mapGetters(["user"]),
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>

