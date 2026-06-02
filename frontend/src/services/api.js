import axios from "axios";

const api = axios.create({
  baseURL: "https://inventory-order-management-i3ay.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;