import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5000" // for local testing
  : "https://note-stack-oi41.vercel.app"; // 👈 your actual backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
