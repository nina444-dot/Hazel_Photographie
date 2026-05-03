import "dotenv/config";
import express from "express";
import cors from "cors";
import seanceRoutes from "./routes/seance.route.js"; 

const app = express();

app.use(cors());
app.use(express.json());

// Branchement des routes
app.use("/api", seanceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur Hazel Photographie lancé sur http://localhost:${PORT}`);
});