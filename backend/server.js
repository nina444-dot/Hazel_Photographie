import "dotenv/config";
import express from "express";
import cors from "cors"; 
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import seanceRoutes from "./routes/seance.route.js";
import formuleRoutes from "./routes/formule.route.js";
import adminRoutes from "./routes/admin.route.js";
import contactRoutes from "./routes/contact.route.js"; 
import bonCadeauRoutes from "./routes/bonCadeau.route.js";
import mariageRoutes from "./routes/mariage.route.js";

const app = express();

app.use(helmet());

const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    optionsSuccessStatus: 200
 };
app.use(cors(corsOptions));

const limiter = rateLimit({
       windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, 
      message: { message: "Trop de requêtes, réessayez dans 15 minutes." },
      standardHeaders: true, // Renvoie l'info dans les headers `RateLimit-*`
    legacyHeaders: false, // Désactive les headers `X-RateLimit-*`
    });

app.use("/api/", limiter);

app.use(express.json());
// Branchement des routes
app.use("/api/seances", seanceRoutes);
app.use("/api/formules", formuleRoutes);
app.use("/api/auth", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bon-cadeau", bonCadeauRoutes);
app.use("/api/mariage", mariageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur Hazel Photographie lancé sur http://localhost:${PORT}`);
});