import nodemailer from "nodemailer";

export const sendBonCadeau = async (req, res) => {
    const { prenomAcheteur, nomAcheteur, emailAcheteur, nomBeneficiaire, prestation, message } = req.body;

    if (!prenomAcheteur || !nomAcheteur || !emailAcheteur || !nomBeneficiaire || !prestation) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs obligatoires (*)." });
    }


    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Contenu HTML de l'e-mail
    const mailOptions = {
        from: '"Captat Hazel" <contact@hazelphotographie.fr>',
        to: "test@hazelphotographie.fr", // Intercepté par Mailtrap
        subject: `🎁 Nouvelle demande de BON CADEAU - Formule ${prestation}`,
        html: `
          <div style="font-family: sans-serif; color: #4A3E3D; max-width: 600px; margin: 0 auto; border: 1px solid #E6DFDA; padding: 25px; background-color: #FDFBF9;">
            <h2 style="color: #8C5346; border-bottom: 1px solid #E6DFDA; padding-bottom: 10px; font-weight: normal; text-transform: uppercase; text-align: center; letter-spacing: 1px;">🎁 Commande de Bon Cadeau</h2>
            
            <p style="margin-top: 20px;"><strong>Acheteur :</strong> ${prenomAcheteur} ${nomAcheteur}</p>
            <p><strong>Email de l'acheteur :</strong> ${emailAcheteur}</p>
            
            <div style="background-color: #F5EFEB; padding: 15px; border-radius: 6px; margin: 20px 0; border: 1px dashed #8C5346;">
                <p style="margin: 0 0 8px 0;"><strong>Bénéficiaire(s) :</strong> ${nomBeneficiaire}</p>
                <p style="margin: 0;"><strong>Prestation offerte :</strong> Formule ${prestation}</p>
            </div>

            <p><strong>Petit mot personnalisé :</strong></p>
            <div style="padding: 15px; background-color: #FDFBF9; border-left: 4px solid #8C5346; font-style: italic;">
              "${message || "Aucun message personnalisé écrit."}"
            </div>
            
            <p style="font-size: 11px; color: #A1908E; text-align: center; margin-top: 30px; border-top: 1px solid #E6DFDA; padding-top: 10px;">
                Ce message a été généré automatiquement depuis le formulaire Bons Cadeaux de Hazel Photographie.
            </p>
          </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Votre demande de bon cadeau a été envoyée avec succès !" });
    } catch (error) {
        console.error("Erreur Nodemailer Bon Cadeau :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création du bon cadeau." });
    }
};