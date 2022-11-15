export default {
  setUser(state, data) {
    state.user = data;
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
};
