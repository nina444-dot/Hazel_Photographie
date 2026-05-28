import express from "express";
import { validateCaptcha } from "../middlewares/validateCaptcha.js";
import { sendBonCadeau } from "../controllers/bonCadeau.controller.js";

const router = express.Router();

router.post("/", validateCaptcha, sendBonCadeau);

export default router;