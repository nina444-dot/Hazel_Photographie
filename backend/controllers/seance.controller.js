import { findAllSeances, findSeanceById, findFormulesByTitre } from "../models/seance.model.js";


export const getAllSeances = async (req, res) => {
    try {
        const seances = await findAllSeances();
        res.status(200).json(seances);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des séances", error: error.message });
    }
};


export const getSeanceById = async (req, res) => {
    try {
        const seance = await findSeanceById(req.params.id);
        if (!seance) return res.status(404).json({ message: "Séance non trouvée" });
        res.status(200).json(seance);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// Modale
export const getFormulesBySeanceTitre = async (req, res) => {
    try {
        const { titre } = req.params;
        // On appelle une nouvelle méthode dans le model
        const formules = await findFormulesByTitre(titre);
        
        if (!formules || formules.length === 0) {
            return res.status(404).json({ message: "Aucune formule trouvée pour ce titre" });
        }
        
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des formules", error: error.message });
    }
};