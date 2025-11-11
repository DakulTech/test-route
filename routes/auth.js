import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("✅ /auth/login hit");
  res.json({ message: "Login route reached" });
});

export default router;