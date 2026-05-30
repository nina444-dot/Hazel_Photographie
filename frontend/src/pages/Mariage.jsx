import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { Turnstile } from "react-turnstile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mariage1 from "../assets/mariage1.webp";
import mariage2 from "../assets/mariage2.webp";
import mariage3 from "../assets/mariage3.webp";
import mariage4 from "../assets/mariage4.webp";
import mariage5 from "../assets/mariage5.webp";
import mariage6 from "../assets/mariage6.webp";
import fleurMarron from "../assets/fleur-marron.png";
import fleurBeige from "../assets/fleur-beige.png";

const Mariage = () => {
  const [formData, setFormData] = useState({
    prenomFutureConjointe: "",
    dateMariage: "",
    lieuCeremonie: "",
    lieuReception: "",
    villeDepartement: "",
    nombreInvites: "",
    lieuReserve: "",
    projetMessage: "",
    budget: ""
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus({ 
        loading: false, 
        success: null, 
        error: "Veuillez valider le CAPTCHA." 
      });

      
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await api.post("/mariage", { ...formData, captchaToken });

      setStatus({ loading: false, success: res.data.message, error: null });
      
      setFormData({
        prenomFutureConjointe: "",
        dateMariage: "",
        lieuCeremonie: "",
        lieuReception: "",
        villeDepartement: "",
        nombreInvites: "",
        lieuReserve: "",
        projetMessage: "",
        budget: ""
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
    <div className="bg-hazel-light font-cormorant text-hazel-rust w-full">
      
      <Navbar />

      {/* IMG BACKGROUND */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <img 
          src={mariage1} 
          alt="Mariage par Hazel Photographie" 
          fetchPriority="high" 
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.90)" }} 
        />
        <div className="relative z-10 text-hazel-light space-y-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest">Les Mariages</h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide">Les regards, les gestes, les silences.</p>
          <p className="text-xl md:text-2xl font-medium tracking-wide opacity-90">Tout ce que vous ressentirez encore dans dix ans.</p>
        </div>
      </section>

      {/* MON APPROCHE */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl tracking-widest uppercase font-semibold text-hazel-brown">
          MON APPROCHE
        </h2>
        
        <div className="text-hazel-rust font-bold space-y-6 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center">
          <p>
            Pour moi, photographier un mariage ce n'est pas documenter une journée. 
            C'est raconter une histoire.
          </p>
          <p className="text-hazel-brown font-medium">
            La vôtre, telle qu'elle se vit réellement : <br />
            les regards, les gestes spontanés, les instants que vous ne voyez pas toujours, mais que vous ressentirez toute votre vie.
          </p>
          <p className="text-hazel-rust font-semibold">
            Mon approche est douce, naturelle, inspirée du reportage et de l'esthétique argentique : <br />
            des images sincères, intemporelles, comme des souvenirs déjà précieux.
          </p>
        </div>
      </section>

      {/* LES 3 PHOTOS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto mb-24">
        <img src={mariage2} alt="Détail mariage" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
        <img src={mariage3} alt="Instant complice" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
        <img src={mariage4} alt="Cérémonie mariage" className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm" />
      </section>

      {/* MES FORMULES */}
      <section className="py-24 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-14 flex flex-col items-center text-center">
            <img 
              src={fleurMarron} 
              alt="Lotus" 
              className="w-12 h-12 object-contain mb-3" 
            />
            <h2 className="text-4xl md:text-5xl tracking-[0.2em] font-semibold text-hazel-rust">
              Mes Formules
            </h2>
          </div>
          
          {/* GRILLE FORMULES*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto items-stretch">
            
            {/* Formule 1 */}
            <div className="bg-hazel-rust p-10 rounded-2xl shadow-sm flex flex-col justify-between text-center min-h-[660px]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic tracking-wide text-hazel-light">
                  Premiers Chapitres
                </h3>
                <p className="text-lg leading-relaxed font-bold text-white">
                  Une formule pensée pour capturer l'essentiel : la cérémonie, les émotions, les premiers souvenirs de votre mariage.
                </p>
                <p className="text-lg font-bold text-white">
                  Je privilégie toujours l'authenticité : pas de poses forcées, simplement vous, vos proches, et ce qui se vit sur l'instant.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="pt-4">
                  <p className="text-lg font-bold tracking-widest uppercase text-hazel-light italic mb-3">INCLUS :</p>
                  <ul className="text-lg space-y-2 font-bold text-white">
                    <li>• 4h de reportage photo</li>
                    <li>• Galerie privée en ligne</li>
                    <li>• Images retouchées avec soin</li>
                    <li>• Téléchargement HD</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <span className="border border-hazel-light/30 px-8 py-2 rounded-xl inline-block text-xl tracking-wide font-bold bg-hazel-rust text-hazel-light">
                    800 €
                  </span>
                </div>
              </div>
            </div>

            {/* Formule 2*/}
            <div className="bg-[#B6856B] p-10 rounded-2xl shadow-sm flex flex-col justify-between text-center min-h-[660px]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic tracking-wide text-hazel-rust">
                  Le Film
                </h3>
                <p className="text-lg leading-relaxed font-bold text-white">
                  Votre journée comme un film que l'on aime revoir. Des préparatifs à la lumière du soir, je capture l'atmosphère, les silences, les éclats de rire et les regards qui racontent vraiment votre histoire.
                </p>
                <p className="text-lg font-bold text-white">
                  Une collection pensée pour garder l'émotion intacte, année après année.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="pt-4">
                  <p className="text-lg font-bold tracking-widest uppercase text-hazel-rust italic mb-3">INCLUS :</p>
                  <ul className="text-lg space-y-2 font-bold text-white">
                    <li>• 8h de reportage photo</li>
                    <li>• Préparatifs jusqu'aux moments clés</li>
                    <li>• Galerie privée HD</li>
                    <li>• Images soigneusement retouchées</li>
                    <li>• Séance engagement en option</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <span className="border border-hazel-rust/30 px-8 py-2 rounded-xl inline-block text-xl tracking-wide font-bold bg-[#B6856B] text-hazel-rust">
                    1350 €
                  </span>
                </div>
              </div>
            </div>

            {/* Formule 3 */}
            <div className="bg-hazel-rust md:bg-[#B6856B] p-10 rounded-2xl shadow-sm flex flex-col justify-between text-center min-h-[660px]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic tracking-wide text-hazel-light md:text-hazel-rust">
                  Mémoire Vive
                </h3>
                <p className="text-lg leading-relaxed font-bold text-white">
                  Une présence étendue pour raconter votre journée dans toute son intensité. Des premiers frissons du matin jusqu'à l'énergie de la soirée, je capture l'histoire dans son intégralité.
                </p>
                <p className="text-lg font-bold text-white">
                  Vous repartez également avec un album fine art, pensé comme un objet précieux, à transmettre et feuilleter au fil des années.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="pt-4">
                  <p className="text-lg font-bold tracking-widest uppercase text-hazel-light md:text-hazel-rust italic mb-3">INCLUS :</p>
                  <ul className="text-lg space-y-2 font-bold text-white">
                    <li>• Journée complète de reportage</li>
                    <li>• Galerie privée HD</li>
                    <li>• Album fine art inclus</li>
                    <li>• Accompagnement avant le mariage</li>
                    <li>• Séance engagement</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <span className="border border-hazel-light/30 md:border-hazel-rust/30 px-8 py-2 rounded-xl inline-block text-xl tracking-wide font-bold bg-hazel-rust md:bg-[#B6856B] text-hazel-light md:text-hazel-rust">
                    1800 €
                  </span>
                </div>
              </div>
            </div>

            {/* Formule 4 */}
            <div className="bg-[#B6856B] md:bg-hazel-rust p-10 rounded-2xl shadow-sm flex flex-col justify-between text-center min-h-[660px]">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold italic tracking-wide text-hazel-rust md:text-hazel-light">
                  La Promesse
                </h3>
                <p className="text-lg leading-relaxed font-bold text-white">
                  Une séance à deux, simple et naturelle. Que ce soit pour un PACS, une demande particulière ou simplement pour garder une trace de votre amour, je privilégie toujours les vrais moments.
                </p>
                <p className="text-lg font-bold text-white">
                  Pas besoin de savoir poser : Je vous guide doucement, tout en laissant place à votre spontanéité.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="pt-4">
                  <p className="text-lg font-bold tracking-widest uppercase text-hazel-rust md:text-hazel-light italic mb-3">INCLUS :</p>
                  <ul className="text-lg space-y-2 font-bold text-white">
                    <li>• Environ 2h de séance</li>
                    <li>• Galerie privée en ligne</li>
                    <li>• Images retouchées HD</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <span className="border border-hazel-rust/30 md:border-hazel-light/30 px-8 py-2 rounded-xl inline-block text-xl tracking-wide font-bold bg-[#B6856B] md:bg-hazel-rust text-hazel-rust md:text-hazel-light">
                    350 €
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 text-center text-xl italic max-w-2xl mx-auto space-y-4 text-hazel-rust/85 font-bold leading-relaxed">
            <p>Un acompte de 40% permet de réserver la date. Le solde est à régler avant le mariage.</p>
            <p>
              Je me déplace avec plaisir pour raconter votre histoire. <br />
              Les frais de déplacement sont inclus dans un rayon de 50km autour de Pau, au-delà, un ajustement sera simplement prévu selon la distance.
            </p>
          </div>
          
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl tracking-widest uppercase font-bold text-center mb-12 text-hazel-rust">
          Racontez-moi tout&nbsp;!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-hazel-rust">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Prénom & Nom du / de la futur(e) conjoint(e) *</label>
              <input type="text" name="prenomFutureConjointe" required value={formData.prenomFutureConjointe} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Date du mariage *</label>
              <input type="date" name="dateMariage" required value={formData.dateMariage} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Lieu de la cérémonie *</label>
              <input type="text" name="lieuCeremonie" required value={formData.lieuCeremonie} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest font-bold mb-2">Lieu de la réception *</label>
              <input type="text" name="lieuReception" required value={formData.lieuReception} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest font-bold mb-2">Ville / Département *</label>
            <input type="text" name="villeDepartement" required value={formData.villeDepartement} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
          </div>

          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-bold">Nombre d'invités estimé</label>
            <div className="flex flex-wrap gap-3 text-base italic">
              {["Moins de 50", "50 - 100", "100 - 150", "Plus de 150"].map((option) => (
                <label key={option} className={`flex items-center space-x-2 border px-5 py-2 rounded-full cursor-pointer transition-all ${formData.nombreInvites === option ? "bg-hazel-rust text-hazel-light border-hazel-rust" : "border-hazel-rust/40"}`}>
                  <input type="radio" name="nombreInvites" value={option} checked={formData.nombreInvites === option} onChange={handleChange} className="hidden" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-bold">Avez-vous déjà un lieu réservé ?</label>
            <div className="flex flex-wrap gap-3 text-base italic">
              {["Oui", "En cours", "Pas encore"].map((option) => (
                <label key={option} className={`flex items-center space-x-2 border px-5 py-2 rounded-full cursor-pointer transition-all ${formData.lieuReserve === option ? "bg-hazel-rust text-hazel-light border-hazel-rust" : "border-hazel-rust/40 "}`}>
                  <input type="radio" name="lieuReserve" value={option} checked={formData.lieuReserve === option} onChange={handleChange} className="hidden" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <h3 className="text-2xl font-bold text-center text-hazel-rust">Votre projet en quelques mots</h3>
            <label className="block text-xs font-bold uppercase tracking-widest text-center opacity-60">Partagez votre histoire, vos envies, ce qui est important pour vous...</label>
            <textarea name="projetMessage" required rows="5" value={formData.projetMessage} onChange={handleChange} className="w-full p-4 bg-transparent border border-hazel-rust/40 rounded-sm focus:border-hazel-rust outline-none transition text-lg"></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest font-bold mb-2">Avez-vous un budget approximatif ?</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full p-2 bg-transparent border-b border-hazel-rust/60 focus:border-hazel-rust outline-none transition text-lg" />
          </div>

          {status.success && <div className="text-center text-emerald-700 text-lg font-medium py-2">{status.success}</div>}
          {status.error && <div className="text-center text-hazel-rust text-lg font-medium py-2">{status.error}</div>}

          {/* Intégration de Turnstile */}
          <div className="flex justify-center pt-2">
            <Turnstile
              sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              onError={() => setCaptchaToken(null)}
            />
          </div>

          <div className="text-center pt-4">
            <button type="submit" disabled={status.loading} className="bg-hazel-rust text-hazel-light text-base uppercase tracking-widest font-medium px-12 py-3.5 rounded-full shadow-md transition active:scale-95 disabled:opacity-50">
              {status.loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </div>
        </form>
      </section>

     {/* BAS DE PAGE SÉCURISÉ */}
<section className="bg-hazel-light pt-12 pb-36 md:pt-20 md:pb-48 w-full">
  
  {/* Le bloc marron */}
  <div className="w-full bg-hazel-rust text-hazel-light px-6 py-12 md:py-24">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
      
      {/* Lotus + Phrase 1 */}
      <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10">
        <div className="w-16 h-16 flex items-center justify-center md:self-center">
          <img 
            src={fleurBeige} 
            alt="Lotus" 
            className="w-full h-full object-contain" 
          />
        </div>
        <p className="text-2xl md:text-3xl italic font-light leading-relaxed">
          Si vous aimez les images naturelles, les ambiances douces et les souvenirs qui ressemblent à ce que vous avez vécus... alors nous sommes probablement faits pour travailler ensemble.
        </p>
      </div>

      {/* Photo 1 */}
      <div className="md:col-span-5 flex justify-center md:justify-end order-first md:order-none -mt-4 md:-mt-36 z-20">
        <div 
          className="w-64 h-80 bg-cover bg-center rounded-sm shadow-xl" 
          style={{ backgroundImage: `url(${mariage5})` }}
        ></div>
      </div>

      {/* Photo 2 */}
      <div className="md:col-span-5 flex justify-center md:justify-start mt-6 md:mt-0 -mb-4 md:-mb-36 md:pt-12 z-20">
        <div 
          className="w-64 h-80 bg-cover bg-center rounded-sm shadow-xl" 
          style={{ backgroundImage: `url(${mariage6})` }}
        ></div>
      </div>

      {/* Phrase 2 */}
      <div className="md:col-span-7 text-center md:text-left flex items-center pt-6 md:pt-0 z-10">
        <p className="text-2xl md:text-3xl italic font-light leading-relaxed opacity-95">
          Je serais heureuse de découvrir votre histoire et d'imaginer avec vous la meilleure façon de la raconter.
        </p>
      </div>
      
    </div>
  </div>
</section>

      <Footer />

    </div>
  );
};

export default Mariage;