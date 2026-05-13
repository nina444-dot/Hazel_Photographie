import express from "express";
import { getAllSeances, getSeanceById, getFormulesBySeanceTitre } from "../controllers/seance.controller.js";

const router = express.Router();

router.get("/", getAllSeances);
router.get("/:id", getSeanceById);


router.get("/:titre/formules", getFormulesBySeanceTitre);

export default router;