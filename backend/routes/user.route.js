import express from "express";
import { registerUser, loginUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser); // Endpoint for user registration
router.post("/login", loginUser);       // Endpoint for user login
router.get("/", getUsers);              // Endpoint to get all users (for testing)

export default router;
