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


// CREATE
export const addFormule = async (req, res) => {
    try {
        const { nom, prix, details } = req.body;
        
        const newId = await FormuleModel.createFormule(nom, prix, details);
        
        const seanceIds = [1, 2, 3, 4, 5];
        
        for (const seanceId of seanceIds) {
            await FormuleModel.linkFormuleToSeance(seanceId, newId);
        }
        
        res.status(201).json({ 
            message: "Formule ajoutée et liée à toutes les séances avec succès", 
            id: newId 
        });
    } catch (error) {
        console.error("Erreur dans addFormule :", error);
        res.status(500).json({ 
            message: "Erreur lors de l'ajout", 
            error: error.message 
        });
    }
};

// UPDATE
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

// DELETE
export const removeFormule = async (req, res) => {
    try {
        const { id } = req.params;
        
        await FormuleModel.deleteFormuleLinks(id);
        
        await FormuleModel.deleteFormule(id);
        
        res.status(200).json({ message: "Formule et liaisons supprimées avec succès" });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la suppression", 
            error: error.message 
        });
    }
};