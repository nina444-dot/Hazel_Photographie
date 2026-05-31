import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
    const { prenom, nom, email, telephone, ville, prestation, message } = req.body;

    if (!prenom || !nom || !email || !message) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs obligatoires (*)." });
    }

    // Configuration du transporteur d'emails (Mailtrap en local, SMTP dédié en production)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
        port: parseInt(process.env.EMAIL_PORT) || 2525,
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS  
        }
    });

    // Définition des options du message
    const mailOptions = {
        from: '"Captat Hazel" <contact@hazelphotographie.fr>', 
        to: process.env.CONTACT_RECEIVER || "test@hazelphotographie.fr", 
        bcc: "elmaaclvr@gmail.com", // Copie de suivi pour la phase de recette (à retirer post-recette)
        subject: `📩 Nouveau message de ${prenom} ${nom}`,
        html: `
          <div style="font-family: sans-serif; color: #4A3E3D; max-width: 600px; margin: 0 auto; border: 1px solid #E6DFDA; padding: 20px; background-color: #FDFBF9;">
            <h2 style="color: #8C5346; border-bottom: 1px solid #E6DFDA; padding-bottom: 10px; font-weight: normal; text-transform: uppercase;">Nouvelle demande de contact</h2>
            <p><strong>Nom complet :</strong> ${prenom} ${nom}</p>
            <p><strong>Email du client :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
            <p><strong>Ville :</strong> ${ville || "Non renseignée"}</p>
            <p><strong>Prestation souhaitée :</strong> ${prestation || "Non spécifiée"}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #F5EFEB; border-left: 4px solid #8C5346;">
              <p style="margin: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
            </div>
          </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Votre message a bien été envoyé !" });
    } catch (error) {
        console.error("Erreur Nodemailer :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de l'envoi du message." });
    }
};