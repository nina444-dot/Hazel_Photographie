import * as FormuleModel from "../models/formule.model.js";

export const getFormulesBySeanceTitre = async (req, res) => {
    try {
        const { titre } = req.params;
        const formules = await FormuleModel.findFormulesByTitre(titre);
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la récupération des formules", 
            error: error.message 
        });
    }
};

export const getAllFormules = async (req, res) => {
    try {
        const formules = await FormuleModel.findAllFormules();
        res.status(200).json(formules);
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur serveur", 
            error: error.message 
        });
    }
};

//GESTION ADMIN
//insertion de nouvelles données dynamiques
export const addFormule = async (req, res) => {
    try {
        const { nom, prix, details, seance_id } = req.body;
        
        const newId = await FormuleModel.createFormule(nom, prix, details);
        
        if (seance_id) {
            await FormuleModel.linkFormuleToSeance(seance_id, newId);
        }
        
        res.status(201).json({ 
            message: "Formule ajoutée avec succès", 
            id: newId 
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de l'ajout", 
            error: error.message 
        });
    }
};

export const editFormule = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, prix, details } = req.body;
        await FormuleModel.updateFormule(id, nom, prix, details);
        res.status(200).json({ message: "Formule modifiée" });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la modif", 
            error: error.message 
        });
    }
};

export const removeFormule = async (req, res) => {
    try {
        const { id } = req.params;
        await FormuleModel.deleteFormule(id);
        res.status(200).json({ message: "Formule supprimée" });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la suppression", 
            error: error.message 
        });
    }
};