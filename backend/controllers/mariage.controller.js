import { transporter } from "../config/mailer.js";

export const sendMariageDemande = async (req, res) => {
    const { 
        prenomFutureConjointe, 
        dateMariage, 
        lieuCeremonie, 
        lieuReception, 
        villeDepartement, 
        nombreInvites, 
        lieuReserve, 
        projetMessage, 
        budget 
    } = req.body;

    if (!prenomFutureConjointe || !dateMariage || !lieuCeremonie || !lieuReception || !villeDepartement || !projetMessage) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs obligatoires (*)." });
    }

    
    const mailOptions = {
        from: '"Captat Hazel" <contact@hazelphotographie.fr>',
        to: "test@hazelphotographie.fr", // Intercepté par Mailtrap
        subject: `💍 Nouvelle demande de réservation MARIAGE - ${dateMariage}`,
        html: `
          <div style="font-family: sans-serif; color: #4A3E3D; max-width: 600px; margin: 0 auto; border: 1px solid #E6DFDA; padding: 25px; background-color: #FDFBF9;">
            <h2 style="color: #8C5346; border-bottom: 1px solid #E6DFDA; padding-bottom: 10px; font-weight: normal; text-transform: uppercase; text-align: center; letter-spacing: 1px;">💍 Nouveau Projet Mariage</h2>
            
            <h3 style="color: #8C5346; margin-top: 20px;">1. Informations Générales</h3>
            <p><strong>Futurs Mariés :</strong> ${prenomFutureConjointe}</p>
            <p><strong>Date du mariage :</strong> ${dateMariage}</p>
            <p><strong>Ville / Département :</strong> ${villeDepartement}</p>
            <p><strong>Lieu de la cérémonie :</strong> ${lieuCeremonie}</p>
            <p><strong>Lieu de la réception :</strong> ${lieuReception}</p>
            
            <div style="background-color: #F5EFEB; padding: 15px; border-radius: 6px; margin: 20px 0; border: 1px dashed #8C5346;">
                <p style="margin: 0 0 8px 0;"><strong>Nombre d'invités estimé :</strong> ${nombreInvites || "Non spécifié"}</p>
                <p style="margin: 0 0 8px 0;"><strong>Lieu déjà réservé ? :</strong> ${lieuReserve || "Non spécifié"}</p>
                <p style="margin: 0;"><strong>Budget approximatif :</strong> ${budget || "Non renseigné"} €</p>
            </div>

            <h3 style="color: #8C5346;">2. Description du projet</h3>
            <div style="padding: 15px; background-color: #FDFBF9; border-left: 4px solid #8C5346; font-style: italic; white-space: pre-wrap;">
              "${projetMessage}"
            </div>
            
            <p style="font-size: 11px; color: #A1908E; text-align: center; margin-top: 30px; border-top: 1px solid #E6DFDA; padding-top: 10px;">
                Ce message a été généré automatiquement depuis le formulaire Mariage de Hazel Photographie.
            </p>
          </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Votre demande de projet mariage a bien été envoyée avec succès !" });
    } catch (error) {
        console.error("Erreur Nodemailer Mariage :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de l'envoi de votre demande." });
    }
};