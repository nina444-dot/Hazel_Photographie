import express from "express";
import { validateCaptcha } from '../middlewares/validateCaptcha.js';
import { sendMariageDemande } from "../controllers/mariage.controller.js";

const router = express.Router();

router.post("/", validateCaptcha, sendMariageDemande);

export default router;