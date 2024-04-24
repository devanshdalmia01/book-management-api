import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";
import { body } from "express-validator";

const router = Router();

const registerValidators = [
    body("username", "Username is required and must be at least 3 characters.").isLength({ min: 3 }),
    body("email", "Please include a valid email.").isEmail(),
    body("password", "Please enter a password with 6 or more characters.").isLength({ min: 6 }),
];

const loginValidators = [
    body("email", "Please include a valid email.").isEmail(),
    body("password", "Password is required.").exists(),
];

router.post("/register", registerValidators, registerUser);
router.post("/login", loginValidators, loginUser);

export default router;
