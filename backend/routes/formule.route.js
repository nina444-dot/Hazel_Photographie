import express from "express";
import { getAllFormules } from "../controllers/formule.controller.js";

const router = express.Router();

router.get("/", getAllFormules);      

export default router;