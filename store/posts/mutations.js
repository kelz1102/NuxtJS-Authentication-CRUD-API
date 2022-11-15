export default {
  setAllPosts(state, data) {
    state.posts = data;
  },
  setPost(state, data) {
    state.post = data;
  },
  deletePost(state, id) {
    state.posts = state.posts.filter((post) => post.id != id);
  },
};
