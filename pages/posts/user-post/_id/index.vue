<template>
  <div class="w-11/12 mx-auto mt-28 px-4 md:w-10/12 md:px-8 lg:w-5/12 lg:px-12">
    <form
      @submit.prevent="updatePost"
      class="flex flex-col bg-white border border-gray-300 px-6 py-8 rounded-lg"
    >
      <h1 class="text-xl font-bold uppercase mb-8 text-center text-gray-500">
        Editing your Post
      </h1>
      <div
        v-if="error"
        class="py-4 px-6 mb-4 text-sm inline-block mr-auto text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        <p class="font-medium">{{ error }}</p>
      </div>
      <label
        for="id"
        class="text-gray-500 font-semibold uppercase text-xsm mb-1 mt-4"
        >Title</label
      >
      <input
        type="text"
        v-model="dataValues.title"
        id="title"
        required
        class="border border-gray-300 text-gray-500 p-4 rounded-lg mb-4"
      />
      <label
        for="body"
        class="text-gray-500 font-semibold uppercase text-xsm mb-1"
        >Body</label
      >
      <textarea
        id="body"
        cols="30"
        rows="10"
        v-model="dataValues.body"
        maxlength="255"
        required
        class="border border-gray-300 text-gray-500 p-4 rounded-lg mb-2.5"
      ></textarea>
      <button
        type="submit"
        class="text-center text-gray-500 text-sm font-medium uppercase border border-gray-400 hover:bg-blue-400 hover:text-white mt-2 rounded-md p-2.5"
      >
        Submit
      </button>
      <NuxtLink
        to="/posts/user-post"
        type="submit"
        class="text-center text-gray-500 text-sm font-medium uppercase border border-gray-400 hover:bg-blue-400 hover:text-white mt-2 rounded-md p-2.5"
      >
        Cancel
      </NuxtLink>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dataValues: {
        title: "",
        body: "",
        id: this.$route.params.id,
      },
      error: "",
    };
  },
  computed: {
    ...mapGetters({
      posts: "posts/getAllPosts",
    }),
  },
  watch: {
    posts(val) {
      let getPost = val.filter((post) => post.id == this.$route.params.id);
      this.dataValues.title = getPost.length >= 1 ? getPost[0].title : "";
      this.dataValues.body = getPost.length >= 1 ? getPost[0].body : "";
    },
  },
  created() {
    let getPost = this.posts.filter((post) => post.id == this.$route.params.id);
    this.dataValues.title = getPost.length >= 1 ? getPost[0].title : "";
    this.dataValues.body = getPost.length >= 1 ? getPost[0].body : "";
  },
  methods: {
    updatePost() {
      if (!this.dataValues.title || !this.dataValues.body) {
        this.error = "Something went wrong";
        return;
      }
      if (this.dataValues.body.length > 255) {
        this.error = "Body Field is too long";
        return;
      }
      this.$store.dispatch("posts/editPost", this.dataValues);
    },
  },
};
</script>

<style></style>
