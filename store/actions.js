export default {
  registerForm({ commit }, data) {
    const { name, email, password } = data;
    this.$axios
      .post("register", {
        name,
        email,
        password,
      })
      .then((response) => {
        this.$router.push("/login");
      });
  },

  loginForm({ commit, state }, data) {
    const { email, password } = data;
    this.$axios
      .post("login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        commit("setUser", response.data.user);
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        if (err.response.status == 401) {
          commit("setLoginError", "Email and Password dont match");
        }
      });
  },

  logoutUser({ commit }) {
    this.$axios
      .post("logout")
      .then((res) => {
        localStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },

  fetchUser({ commit }) {
    this.$axios
      .get("user")
      .then((response) => {
        commit("setUser", response.data.user);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });
  },
};
