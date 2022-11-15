<template>
  <div
    class="w-11/12 mx-auto mt-16 px-4 md:w-10/12 md:px-0 lg:w-5/12 lg:px-0 text-gray-400"
  >
    <h1 class="text-xl font-bold uppercase text-gray-500">User's Post</h1>
    <template v-for="post in postByUser">
      <div
        :key="post.id"
        class="mt-4 border relative bg-white border-gray-300 p-2 shadow-lg rounded-xl hover:shadow-none"
      >
        <div class="flex items-center">
          <span
            class="bg-red-400 text-xl py-2.5 m-2 uppercase text-center w-12 text-white rounded-full"
            >{{ post.user.name.charAt(0) }}</span
          >
          <div class="font-semibold text-gray-400">
            <p class="text-lg uppercase">{{ post.user.name }}</p>
            <p
              class="text-sm hover:underline hover:text-blue-300 cursor-pointer"
            >
              {{ post.user.email }}
            </p>
          </div>
        </div>
        <hr />
        <div class="mt-2 p-2 m-2">
          <div class="break-words">
            <span class="font-semibold">Title :</span>
            <h1 class="ml-1 inline">{{ post.title }}</h1>
          </div>
          <div class="h-auto break-words overflow-y-hidden">
            <p class="mt-2 mb-6">{{ post.body }}</p>
            <div class="absolute bottom-1 right-2 text-sm">
              <button @click="popupModal = post.id" class="mr-2">
                <i class="fa-sharp fa-solid fa-trash text-sm"></i>
              </button>
              <NuxtLink :to="`/posts/user-post/${post.id}`">
                <i class="fa-solid fa-pen-to-square text-sm"></i>
              </NuxtLink>
            </div>
            <div
              v-if="popupModal == post.id"
              ref="modal"
              class="p-6 text-center border rounded-lg bg-white border-gray-300 mx-32 mt-4 mb-6"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3
                class="mb-5 text-lg font-normal break-words text-gray-400 dark:text-gray-400"
              >
                Are you sure you want to delete this
                <span class="font-semibold text-xsm text-gray-500">{{
                  post.title
                }}</span>
              </h3>
              <button
                @click="submitDelete(post.id)"
                data-modal-toggle="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                @click="popupModal = false"
                data-modal-toggle="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
        <p class="text-xs mt-1 font-semibold absolute top-2 right-3">
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
      popupModal: "",
    };
  },
  methods: {
    submitDelete(id) {
      this.$store.dispatch("posts/removePost", id);
    },
  },
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
