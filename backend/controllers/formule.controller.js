import * as FormuleModel from "../models/formule.model.js";

export const getFormulesBySeanceTitre = async (req, res) => {
    try {
        const { titre } = req.params;
        const formules = await FormuleModel.findFormulesByTitre(titre);
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des formules", error: error.message });
    }
};

export const getAllFormules = async (req, res) => {
    try {
        const formules = await FormuleModel.findAllFormules();
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};