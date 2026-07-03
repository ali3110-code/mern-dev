import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAuth } from "../controllers/authController.js";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.get("/me", authMiddleware, checkAuth);
router.post("/signup", signup);
router.post("/login", login);

export default router;
