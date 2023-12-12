import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: API_URL,
});

// Intercept 401 and 403 errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      alert("Unauthorized");
    }
    if (error?.response?.status === 403) {
      alert("Forbidden");
    } else if (error?.response?.status > 499 && error?.response?.status < 600) {
      alert("Error Occured by the server");
    }
    console.log(error, "Error logged by developer !");

    return Promise.reject(error);
  }
);

export default api;
