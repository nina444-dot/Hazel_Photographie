import "dotenv/config";
import express from "express";
import cors from "cors"; 
import seanceRoutes from "./routes/seance.route.js";
import formuleRoutes from "./routes/formule.route.js";
import adminRoutes from "./routes/admin.route.js";
import contactRoutes from "./routes/contact.route.js"; 

const app = express();

app.use(cors());
app.use(express.json());

// Branchement des routes
app.use("/api/seances", seanceRoutes);
app.use("/api/formules", formuleRoutes);
app.use("/api/auth", adminRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur Hazel Photographie lancé sur http://localhost:${PORT}`);
});