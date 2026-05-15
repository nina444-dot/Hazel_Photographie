import express from "express";
import { 
    getAllFormules, 
    getFormulesBySeanceTitre, 
    addFormule, 
    editFormule, 
    removeFormule 
} from "../controllers/formule.controller.js";

const router = express.Router();

router.get("/", getAllFormules);
router.get("/seance/:titre", getFormulesBySeanceTitre);

router.post("/", addFormule);
router.put("/:id", editFormule);
router.delete("/:id", removeFormule);

export default router;