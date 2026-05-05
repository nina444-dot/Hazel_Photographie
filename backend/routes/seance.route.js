import express from "express";
import { getAllSeances, getSeanceById } from "../controllers/seance.controller.js";

const router = express.Router();

router.get("/", getAllSeances);       
router.get("/:id", getSeanceById);     

export default router;