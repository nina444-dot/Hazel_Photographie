import React, { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    prestation: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await api.post("/contact", formData);
      setStatus({ loading: false, success: res.data.message, error: null });
      setFormData({ prenom: "", nom: "", email: "", telephone: "", ville: "", prestation: "", message: "" });
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

      {/* Conteneur principal du Formulaire */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16">
    
        <div className="max-w-xl w-full bg-[#F5EFEB]/50 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-hazel-rust/10 shadow-sm">
          
          <h1 className="text-3xl sm:text-4xl text-center text-hazel-rust tracking-wide uppercase mb-2">
            Contactez-moi
          </h1>
          <p className="text-center text-sm sm:text-md italic text-hazel-rust mb-6 sm:mb-8 tracking-wide max-w-md mx-auto">
            Merci de compléter le formulaire ci-dessous pour toute demande d'information ou de réservation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left font-sans text-sm">
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-hazel-brown font-medium mb-1">Prénom *</label>
                <input
                  type="text"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust transition-all"
                />
              </div>
              <div>
                <label className="block text-hazel-brown font-medium mb-1">Nom *</label>
                <input
                  type="text"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust transition-all"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-hazel-brown font-medium mb-1">Adresse e-mail *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust transition-all"
              />
            </div>

            {/* TÉLÉPHONE / VILLE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-hazel-brown font-medium mb-1">Numéro de téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust transition-all"
                />
              </div>
              <div>
                <label className="block text-hazel-brown font-medium mb-1">Ville</label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust transition-all"
                />
              </div>
            </div>

            {/* PRESTATION SOUHAITÉE */}
            <div>
              <label className="block text-hazel-brown font-medium mb-1">Prestation souhaitée</label>
              <div className="relative">
                <select
                  name="prestation"
                  value={formData.prestation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust appearance-none transition-all cursor-pointer"
                >
                  <option value="">Sélectionnez une formule...</option>
                  <option value="Famille">Famille</option>
                  <option value="Grossesse">Grossesse</option>
                  <option value="Mariage">Mariage</option>
                  <option value="Couple">Couple</option>
                  <option value="Femme">Femme</option>
                  <option value="Nouveau né">Nouveau né</option>
                  <option value="Autre">Autre demande</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-hazel-rust text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-hazel-brown font-medium mb-1">Votre message *</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/60 border border-hazel-rust/10 text-hazel-brown rounded-md outline-none focus:ring-1 focus:ring-hazel-rust resize-none transition-all"
                placeholder="Racontez-moi votre projet..."
              ></textarea>
            </div>

            {/* ÉTATS DE RETOUR API */}
            {status.success && (
              <p className="text-emerald-700 italic text-center font-cormorant text-lg sm:text-xl mt-2 animate-fade-in">
                 {status.success}
              </p>
            )}
            {status.error && (
              <p className="text-hazel-rust italic text-center font-cormorant text-lg sm:text-xl mt-2">
                 {status.error}
              </p>
            )}

            {/* BOUTON ENVOYER */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-hazel-rust hover:bg-[#6F2E2E] text-white font-cormorant text-lg sm:text-xl tracking-widest py-3 px-4 rounded-md shadow-sm transition-all duration-300 uppercase active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? "Envoi du message..." : "Envoyer"}
              </button>
            </div>

          </form>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Contact;