import axios from 'axios';

export const validateCaptcha = async (req, res, next) => {
  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: "Le contrôle de sécurité est manquant." });
  }

  try {
    // Formatage des données en URL-encoded requis par l'API Cloudflare
    const params = new URLSearchParams();
    params.append('secret', process.env.TURNSTILE_SECRET_KEY);
    params.append('response', captchaToken);

    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    
    if (response.data && response.data.success) {
      next(); 
    } else {
      return res.status(400).json({ message: "Sécurité : Échec de la vérification (Robot détecté)." });
    }
  } catch (error) {
    console.error("Erreur Turnstile:", error);
    return res.status(500).json({ message: "Erreur lors de la vérification de sécurité." });
  }
};