import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount routes
app.use("/auth", authRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use((req, res, next) => {
  console.log(`🔍 Incoming request: ${req.method} ${req.url}`);
  next();
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});