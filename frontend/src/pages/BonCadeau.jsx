import React, { useState } from "react";
import api from "../api/axios";
import { Turnstile } from "react-turnstile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageCouple from "../assets/bon-cadeaux.webp"; 

function BonCadeau() {
  const [formData, setFormData] = useState({
    prenomAcheteur: "",
    nomAcheteur: "",
    emailAcheteur: "",
    nomBeneficiaire: "",
    prestation: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!captchaToken) {
      setStatus({ 
        loading: false, 
        success: null, 
        error: "Veuillez valider la vérification de sécurité (CAPTCHA)." 
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      // Envoie les données du formulaire accompagnées du token de sécurité
      const res = await api.post("/bon-cadeau", { ...formData, captchaToken });
      
      setStatus({ loading: false, success: res.data.message, error: null });
      setFormData({
        prenomAcheteur: "",
        nomAcheteur: "",
        emailAcheteur: "",
        nomBeneficiaire: "",
        prestation: "",
        message: "",
      });
      setCaptchaToken(null); 

    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.response?.data?.message || "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-hazel-light font-cormorant flex flex-col text-hazel-brown">
      <Navbar transparent={false} />

      {/* ZONE PRINCIPALE */}
      <div className="flex-grow flex flex-col md:flex-row">
        
        {/* IMG */}
<div className="w-full md:w-1/2 relative min-h-[300px] h-[320px] sm:h-[400px] md:h-auto flex justify-center text-center">
  <img 
    src={imageCouple} 
    alt="Moment de complicité capturé par Hazel Photographie" 
    className="absolute inset-0 w-full h-full object-cover object-center"
    fetchPriority="high"   
  />
  
  <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
  
  {/* TITRES */}
  <div className="absolute top-8 left-4 right-4 z-10 max-w-md mx-auto drop-shadow-lg md:top-1/4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wide font-normal font-cormorant text-hazel-light uppercase">
      Bon Cadeau
    </h1>
    <p className="text-base sm:text-lg md:text-1xl uppercase font-bold tracking-wider mt-2 text-hazel-light">
      Des souvenirs inoubliables à offrir !
    </p>
  </div>
</div>

        {/* ZONE TEXTE ET FORMULAIRE */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-12 py-12">
          <div className="max-w-md w-full flex flex-col">
            
            <p className="text-xl sm:text-2xl text-hazel-rust italic font-bold text-center mb-6 leading-relaxed">
              Remplissez ce formulaire et je vous recontacte rapidement pour préparer votre bon cadeau.
            </p>

            {/* LE FORMULAIRE */}
            <div className="bg-hazel-rust rounded-2xl p-6 sm:p-8 shadow-xl text-white">
              <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans text-sm tracking-wide">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-base font-medium mb-1.5 text-white">Prénom *</label>
                    <input
                      type="text"
                      name="prenomAcheteur"
                      required
                      value={formData.prenomAcheteur}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white transition-all placeholder-hazel-light/70"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-1.5 text-white">Nom *</label>
                    <input
                      type="text"
                      name="nomAcheteur"
                      required
                      value={formData.nomAcheteur}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white transition-all placeholder-hazel-light/70"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium mb-1.5 text-white">Adresse e-mail *</label>
                  <input
                    type="email"
                    name="emailAcheteur"
                    required
                    value={formData.emailAcheteur}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white transition-all placeholder-hazel-light/70"
                  />
                </div>

                <div className="pt-2 space-y-4">
                  <div>
                    <label className="block text-base font-medium mb-1.5 text-white">Pour qui ? (Nom du/des bénéficiaire(s)) *</label>
                    <input
                      type="text"
                      name="nomBeneficiaire"
                      required
                      placeholder="Ex: Marie : De la part de Tom"
                      value={formData.nomBeneficiaire}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white transition-all placeholder-hazel-light/80"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-medium mb-1.5 text-white">Formule souhaitée *</label>
                    <div className="relative">
                      <select
                        name="prestation"
                        required
                        value={formData.prestation}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white cursor-pointer appearance-none"
                      >
                        <option value="" className="text-hazel-brown bg-hazel-light">Choisissez une formule...</option>
                        <option value="Famille" className="text-hazel-brown bg-hazel-light">Formule Famille</option>
                        <option value="Grossesse" className="text-hazel-brown bg-hazel-light">Formule Grossesse</option>
                        <option value="Mariage" className="text-hazel-brown bg-hazel-light">Formule Mariage</option>
                        <option value="Couple" className="text-hazel-brown bg-hazel-light">Formule Couple</option>
                        <option value="Femme" className="text-hazel-brown bg-hazel-light">Formule Femme</option>
                        <option value="Nouveau né" className="text-hazel-brown bg-hazel-light">Formule Nouveau né</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-medium mb-1.5 text-white">Message (Optionnel)</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-transparent border border-white/40 text-white rounded outline-none focus:border-white resize-none transition-all placeholder-hazel-light/80"
                      placeholder="Laissez un mot personnalisé..."
                    ></textarea>
                  </div>
                </div>

                {/* NOTIFICATIONS API */}
                {status.success && (
                  <p className="text-emerald-200 italic text-center font-cormorant text-lg mt-2">
                    📸 {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="text-red-200 italic text-center font-cormorant text-lg mt-2">
                    🤯 {status.error}
                  </p>
                )}


                <div className="flex justify-center pt-2">
                  <Turnstile
                    sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                    onError={() => setCaptchaToken(null)}
                  />
                </div>

                {/* BTN */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="bg-hazel-light text-hazel-rust font-cormorant text-xl sm:text-2xl px-10 py-2.5 rounded-xl shadow-md tracking-wider transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {status.loading ? "Création..." : "Créer mon bon cadeau"}
                  </button>
                </div>
              </form>
            </div>

            <p className="italic font-bold text-center text-hazel-rust mt-4 font-cormorant tracking-wide">
              Je vous réponds sous 24 à 48h afin de créer ensemble un bon cadeau qui vous ressemble.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BonCadeau;