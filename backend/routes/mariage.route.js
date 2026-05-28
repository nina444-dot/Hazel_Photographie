import express from "express";
import { sendMariageDemande } from "../controllers/mariage.controller.js";

const router = express.Router();

router.post("/", sendMariageDemande);

export default router;