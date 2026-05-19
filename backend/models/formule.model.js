import { pool } from "../config/db.js";

//READ
export const findFormulesByTitre = async (titre) => {
    const query = `
        SELECT f.id, f.nom, f.prix, f.details 
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

// CREATE 
export const createFormule = async (nom, prix, details) => {
    const [result] = await pool.query(
        "INSERT INTO formules_standard (nom, prix, details) VALUES (?, ?, ?)",
        [nom, prix, details]
    );
    return result.insertId; 
};

export const linkFormuleToSeance = async (seance_id, formule_id) => {
    await pool.query(
        "INSERT INTO seance_formules (seance_id, formule_id) VALUES (?, ?)",
        [seance_id, formule_id]
    );
};

// UPDATE et DELETE 
export const updateFormule = async (id, nom, prix, details) => {
    await pool.query(
        "UPDATE formules_standard SET nom = ?, prix = ?, details = ? WHERE id = ?",
        [nom, prix, details, id]
    );
};

export const deleteFormule = async (id) => {
    await pool.query("DELETE FROM formules_standard WHERE id = ?", [id]);
};

export const deleteFormuleLinks = async (formule_id) => {
    await pool.query(
        "DELETE FROM seance_formules WHERE formule_id = ?",
        [formule_id]
    );
};