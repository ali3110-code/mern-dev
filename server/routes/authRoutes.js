import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  signup,
  login,
  logout,
  checkAuth,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/me", authMiddleware, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
