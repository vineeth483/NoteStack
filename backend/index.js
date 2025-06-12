import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Add this

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("❌ Error connecting to MONGODB:", error);
    process.exit(1);
  }
};

connectDB();

const app = express();

// ✅ Add CORS middleware here
app.use(cors({
  origin: "https://note-stack-yauehgm1s-vineethbammidis-projects.vercel.app", // 🔁 Change to your actual frontend URL
  credentials: true,
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
