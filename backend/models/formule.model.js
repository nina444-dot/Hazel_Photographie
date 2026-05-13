import { pool } from "../config/db.js";

export const findFormulesByTitre = async (titre) => {
    const query = `
        SELECT f.nom, f.prix, f.details 
        FROM formules_standard f
        JOIN seance_formules sf ON f.id = sf.formule_id
        JOIN seances_standard s ON s.id = sf.seance_id
        WHERE s.titre = ?`;
    
    const [rows] = await pool.query(query, [titre]);
    return rows;
};

export const findAllFormules = async () => {
    const [rows] = await pool.query("SELECT * FROM formules_standard");
    return rows;
};