export default () => ({
  user: {},
  authenticated: localStorage.getItem("token") ? true : false,
  loginError: "",
});
