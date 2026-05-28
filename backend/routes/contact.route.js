import express from "express";
import { validateCaptcha } from '../middlewares/validateCaptcha.js';
import { sendContactEmail } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", validateCaptcha, sendContactEmail);

export default router;