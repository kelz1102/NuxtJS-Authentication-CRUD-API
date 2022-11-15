export default {
  fetchAllPosts({ commit }) {
    this.$axios
      .get("posts")
      .then((response) => {
        commit("setAllPosts", response.data.posts);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },

  submitPost({ dispatch }, data) {
    const { title, body } = data;
    this.$axios
      .post("post", {
        title,
        body,
      })
      .then((response) => {
        dispatch("fetchAllPosts");
        this.$router.push("/posts");
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },

  editPost({ commit, dispatch }, data) {
    const { title, body, id } = data;
    this.$axios
      .put(`post/${id}`, {
        title,
        body,
      })
      .then((response) => {
        dispatch("fetchAllPosts");
        this.$router.push("/posts/user-post");
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },

  removePost({ commit }, id) {
    this.$axios
      .delete(`post/${id}`)
      .then((response) => {
        commit("deletePost", response.data.post.id);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },
};
