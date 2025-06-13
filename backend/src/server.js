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

<<<<<<< HEAD
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
=======
// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

>>>>>>> 2b6054c8d26229f4a51a364eb8f4604f0086ec7a
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

<<<<<<< HEAD
// DB connect + start server
=======
>>>>>>> 2b6054c8d26229f4a51a364eb8f4604f0086ec7a
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
