<template>
  <div
    class="w-96 mt-32 mx-auto md:mt-56 md:w-10/12 lg:w-5/12 lg:mt-28 text-gray-400"
  >
    <div
      class="flex flex-col md:justify-between md:flex-row md:gap-x-2 lg:gap-x-6"
    >
      <NuxtLink
        to="/posts"
        class="bg-white md:w-6/12 py-12 border mt-24 lg:mt-40 border-gray-300 shadow-lg text-center rounded-lg"
      >
        <div class="mb-3 text-gray-500">
          <i class="fa-sharp fa-solid fa-bars text-xl"></i>

          <h1 class="uppercase text-sm font-medium mt-1">Total Posted</h1>
        </div>
        <p class="text-gray-500">{{ posts.length }}</p>
      </NuxtLink>
      <NuxtLink
        to="posts/user-post"
        class="bg-white md:w-6/12 py-12 border mt-6 md:mt-24 lg:mt-40 border-gray-300 shadow-lg text-center rounded-lg"
      >
        <div class="mb-3 text-gray-500">
          <i class="fa-solid fa-user-pen text-xl"></i>
          <h1 class="mt-1 font-medium text-sm uppercase mr-1">your post</h1>
        </div>
        <p class="mr-1 text-gray-500">
          {{ postByUser && postByUser.length }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      posts: "posts/getAllPosts",
      user: "user",
    }),
    postByUser() {
      return this.posts.filter((post) => post.user_id == this.user.id);
    },
  },
};
</script>

<style></style>
