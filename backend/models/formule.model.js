import { pool } from "../config/db.js";

export const findAllFormules = async () => {
    const [rows] = await pool.query("SELECT * FROM formules_standard");
    return rows;
};