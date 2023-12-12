import { createContext, useState } from "react";
import PropTypes from "prop-types";
import api from "@services/apiService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  // Register user
  const register = async (formData) => {
    const config = {
      method: "post",
      url: "/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };
    await api.request(config).then((response) => {
      if (response.status === 200) {
        alert("registered successfully!");
      }
    });
  };

  // Login user
  const login = async (formData) => {
    const config = {
      method: "post",
      url: "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };
    await api.request(config).then((response) => {
      setUser(response.data.user);
      setToken(response.data.token);
    });
  };

  // Logout user
  const logout = async (event) => {
    event.preventDefault();
    const config = {
      method: "post",
      url: "/logout",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await api.request(config).then((response) => {
      console.log(response, "logoutttt");
      setUser("");
    });
  };

  // check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("check");
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, checkUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AuthContext;
