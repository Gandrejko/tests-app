import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response;
  },
  function (error) {
    if(error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
