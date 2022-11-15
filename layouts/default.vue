<template>
  <div class="relative">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  middleware: "auth",
  mounted() {
    this.fetchUser();
    this.fetchAllPosts();
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser",
      fetchAllPosts: "posts/fetchAllPosts",
    }),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", "sans-serif";
}
body {
  overflow-x: hidden;
  background-color: rgb(248 250 252);
}
</style>
