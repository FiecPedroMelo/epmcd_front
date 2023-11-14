import axios from "axios";

const api = axios.create({
  baseURL: "http://10.5.9.20:38000", // Defina a base URL de acordo com sua API
});

api.interceptors.request.use(
  (config) => {
    // Tente obter o token JWT do localStorage
    const token = localStorage.getItem("jwtToken");

    if (token) {
      // Adicione o token JWT ao cabeçalho de autorização
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Erro no interceptor de resposta:", error);
    if (error && error.response && error.response.status === 401) {
      location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
