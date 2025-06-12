import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

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

// Middleware
app.use(cors({
  origin: "https://note-stack-six.vercel.app",
  credentials: true,
}));
app.use(express.json());

// Sample Note Schema
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

// API Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
