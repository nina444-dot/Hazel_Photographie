import { findAllFormules } from "../models/formule.model.js";

export const getAllFormules = async (req, res) => {
    try {
        const formules = await findAllFormules();
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des formules", error: error.message });
    }
};