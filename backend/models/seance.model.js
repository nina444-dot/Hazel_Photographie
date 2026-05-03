import { pool } from "../config/db.js";


export const findAllSeances = async () => {
    const [rows] = await pool.query("SELECT * FROM seances_standard");
    return rows;
};


export const findAllFormules = async () => {
    const [rows] = await pool.query("SELECT * FROM formules_standard");
    return rows;
};


export const findSeanceById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM seances_standard WHERE id = ?", [id]);
    return rows[0];
};