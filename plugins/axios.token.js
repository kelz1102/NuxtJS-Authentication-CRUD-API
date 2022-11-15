export default ({ $axios }) => {
  $axios.interceptors.request.use((config) => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    )
      config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  });
};
