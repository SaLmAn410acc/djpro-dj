import axios from "@axios";
import VueJwtDecode from "vue-jwt-decode";

const useAuth = () => {
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("/Authentication/Login", {
        email,
        password,
      });

      setToken(response?.data?.token);

      const user = await fetchUser();
      setUserData(user.data);

      return response;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };

  const register = async ({ email, password, confirmPassword }) => {
    const response = await axios.post("/Authentication/Register", {
      email,
      password,
      confirmPassword,
    });
    return response;
  };

  const logout = async () => {
    removeToken();
  };

  const fetchUser = async () => {
    let token = getToken();
    if (!token) {
      return null;
    }

    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }

    // decode jwt to get the id and token expiry date
    const { id, exp } = VueJwtDecode.decode(token);

    if (Date.now() >= exp * 1000) {
      removeToken();
      return null;
    }

    const response = await axios.get("/User/GetUser", {
      params: {
        id,
      },
    });
    return response;
  };

  const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  };

  const getToken = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      return null;
    }

    // decode jwt to get the id and token expiry date
    const { exp } = VueJwtDecode.decode(token);

    if (Date.now() >= exp * 1000) {
      removeToken();
      return null;
    }

    return token;
  };

  const removeToken = () => {
    axios.defaults.headers.common.Authorization = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  const setUserData = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const updateUserData = async (userData) => {
    const response = await axios.put("/User/UpdateInfo?id=" + userData.id, {
      ...userData,
    });
    return response;
  };

  return {
    login,
    register,
    logout,
    fetchUser,
    isAuthenticated,
    setUserData,
    getToken,
    setToken,
    removeToken,
    updateUserData,
  };
};

export default useAuth;
