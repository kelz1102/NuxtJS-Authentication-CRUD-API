<template>
  <div class="w-11/12 mx-auto mt-16 px-4 lg:w-5/12 lg:px-0 text-gray-400">
    <div class="flex justify-between items-end uppercase">
      <h1 class="text-xl font-bold text-gray-500">Posts</h1>

      <NuxtLink to="/posts/add-post">
        <i class="fa-solid fa-plus text-2xl mr-1 text-gray-500"></i>
      </NuxtLink>
    </div>
    <template v-for="post in posts" class="my-4">
      <div
        :key="post.id"
        class="mt-4 border relative bg-white border-gray-300 p-2 shadow-lg rounded-xl hover:shadow-none"
      >
        <div class="flex items-center">
          <span
            class="bg-red-400 text-xl py-2.5 m-2 uppercase text-center w-12 text-white rounded-full"
            >{{ post.user.name.charAt(0) }}</span
          >
          <div class="font-semibold">
            <p class="text-lg uppercase">{{ post.user.name }}</p>
            <p
              class="text-sm hover:underline hover:text-blue-300 cursor-pointer"
            >
              {{ post.user.email }}
            </p>
          </div>
        </div>
        <hr />
        <div class="m-3">
          <div class="break-words">
            <span class="font-semibold">Title :</span>
            <h1 class="ml-1 inline">{{ post.title }}</h1>
          </div>
          <div class="h-auto break-words overflow-y-hidden my-3">
            <div v-if="showBodyById == post.id">
              <p>{{ post.body }}</p>
              <button
                @click="showBodyById = ''"
                class="absolute bottom-1 right-2 text-xs font-medium transform hover:-translate-x-1"
              >
                <i class="fa-solid fa-xmark text-sm mr-1"></i>
              </button>
            </div>
            <div v-else>
              <p class="mb-6">
                {{ post.body.substr(0, 65) }}
                <strong
                  v-show="post.body.length > 65"
                  class="text-gray-500 font-thin"
                  >. . . . .</strong
                >
              </p>
              <button
                v-show="post.body.length > 65"
                @click="showBodyById = post.id"
                class="absolute bottom-1 right-2 text-xs font-medium transform hover:-translate-x-1"
              >
                See more
              </button>
            </div>
          </div>
        </div>
        <p
          class="text-xs mt-1 font-semibold absolute top-1 right-2 lg:top-2 lg:right-3"
        >
          {{ `Date Posted : ${post.created_at.slice(0, 10)}` }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showBodyById: "",
    };
  },
  computed: {
    ...mapGetters({
      posts: "posts/getAllPosts",
    }),
  },
};
</script>

<style></style>
