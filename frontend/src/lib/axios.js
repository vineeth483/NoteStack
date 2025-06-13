import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5000"
<<<<<<< HEAD
  : "https://note-stack-oi41.vercel.app/api"; // your deployed backend URL
=======
  : "https://note-stack-oi41.vercel.app"; // your deployed backend URL
>>>>>>> 2b6054c8d26229f4a51a364eb8f4604f0086ec7a

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
