import express from "express";
import { getSeanceData } from "../controllers/seance.controller.js";

const router = express.Router();

router.get("/seance", getSeanceData);

export default router;