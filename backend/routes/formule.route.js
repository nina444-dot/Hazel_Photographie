import express from "express";
import { getAllFormules, getFormulesBySeanceTitre } from "../controllers/formule.controller.js";

const router = express.Router();

router.get("/", getAllFormules);

router.get("/seance/:titre", getFormulesBySeanceTitre);

export default router;