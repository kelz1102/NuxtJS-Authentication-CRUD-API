export default ({ store, redirect }) => {
  if (store.state.authenticated) {
    redirect("/dashboard");
  }
};
