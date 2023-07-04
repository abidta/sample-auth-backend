import express from "express";
import { signup, loginUser , logout } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/logout",logout)
export default router;
