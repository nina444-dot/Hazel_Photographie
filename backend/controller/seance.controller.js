import { findAllSeances, findAllFormules } from "../models/seance.model.js";


export const getHomeData = async (req, res) => {
    try {
        // Appelle les fonctions du modèle de manière asynchrone
        const seances = await findAllSeances();
        const formules = await findAllFormules();

        // Renvoie la rép au format JSON avec un message de succès
        res.status(200).json({
            message: "Données de la page d'accueil récupérées avec succès",
            seances: seances,
            formules: formules
        });
    } catch (error) {
        // En cas d'erreur renvoie un code 500 (Erreur serveur)
        res.status(500).json({ 
            message: "Erreur lors de la récupération des données", 
            error: error.message 
        });
    }
};