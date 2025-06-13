import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// ✅ Updated CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://note-stack-oi41.vercel.app"  // ✅ Replace if your frontend is deployed elsewhere
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// other middleware
app.use(express.json());
app.use(rateLimiter);

// routes
app.use("/api/notes", notesRoutes);

// frontend deployment (production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// DB connect + start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
