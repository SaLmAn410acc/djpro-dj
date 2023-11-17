//store/modules/auth.js
import axios from "@axios";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isUserLoggedIn: false,
    isUserLoading: false,
  }),
  actions: {
    async login({ email, password }) {
      // this.isUserLoading = true;
      const response = await axios.post("/Authentication/login", {
        email,
        password,
      });
      // this.user = response.data.user;
      // this.token = response.data.token;
      // this.isUserLoggedIn = true;
      // this.isUserLoading = false;
      return response;
    },
    async register({ name, email, password }) {
      this.isUserLoading = true;
      const response = await axios.post("/Authentication/register", {
        name,
        email,
        password,
      });
      this.user = response.data.user;
      this.token = response.data.token;
      this.isUserLoggedIn = true;
      this.isUserLoading = false;
      return response;
    },
    async logout() {
      this.isUserLoading = true;
      const response = await axios.post("/Authentication/logout");
      this.user = null;
      this.token = null;
      this.isUserLoggedIn = false;
      this.isUserLoading = false;
      return response;
    },
    async fetchUser() {
      this.isUserLoading = true;
      const response = await axios.get("/Authentication/user");
      this.user = response.data.user;
      this.token = response.data.token;
      this.isUserLoggedIn = true;
      this.isUserLoading = false;
      return response;
    },
  },
});
