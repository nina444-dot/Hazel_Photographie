import * as AdminModel from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await AdminModel.findByUsername(username);
        
        
        if (!admin) {
            return res.status(401).json({ message: "Identifiants incorrects" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Identifiants incorrects" });
        }

        const token = jwt.sign(
            { id: admin.id, username: admin.username },
            process.env.JWT_SECRET || "ma_cle_secrete", 
            { expiresIn: "24h" }
        );

        res.status(200).json({ 
            message: "Connexion réussie", 
            token 
        });
    } catch (error) {
       
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};