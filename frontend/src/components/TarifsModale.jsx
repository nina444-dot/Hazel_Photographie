import React, { useRef, useEffect, useState } from 'react';
import api from "../api/axios"; 
import fleurMarron from '../assets/fleur-marron.png';
import flecheGauche from '../assets/fleche-gauche.png';
import flecheDroite from '../assets/fleche-droite.png';

const TarifsModale = ({ isOpen, onClose, titre }) => {
  const [formules, setFormules] = useState([]);
  const [loading, setLoading] = useState(false);
  const modalScrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && titre) {
      setLoading(true);
      api.get(`/seances/${encodeURIComponent(titre)}/formules`)
        .then((res) => {
          setFormules(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erreur API:", err);
          setLoading(false);
        });
    }
  }, [isOpen, titre]);

  const scrollModal = (direction) => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Arriere plan */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>

      {/* Conteneur Modale */}
      <div className="relative bg-hazel-light w-full max-w-4xl p-6 md:p-10 shadow-2xl rounded-sm overflow-y-auto max-h-[90vh] font-cormorant no-scrollbar">
        
        {/* Bouton Fermer */}
        <button onClick={onClose} className="absolute top-4 right-6 text-2xl text-hazel-rust font-light">✕</button>

        <div className="flex flex-col items-center">
          <img src={fleurMarron} alt="" className="w-10 h-10 mb-2 object-contain" />
          <h2 className="text-4xl md:text-5xl mb-10 text-center text-hazel-rust tracking-wide">Séances Photo {titre}</h2>

          {/* Liste des Formules (Écritures agrandies) */}
          <div className="w-full space-y-8 mb-12">
            {loading ? (
              <p className="text-center italic text-hazel-rust text-xl">Chargement des tarifs...</p>
            ) : formules.length > 0 ? (
              formules.map((offre, i) => (
                <div key={i} className="flex justify-between items-end border-b border-hazel-rust/30 pb-4 text-hazel-black">
                  <div className="pr-4 text-left">
                    <h3 className="text-3xl font-medium text-hazel-rust tracking-tight">{offre.nom} :</h3>
                    <p className="text-lg md:text-xl mt-2 italic font-light leading-relaxed">{offre.details}</p>
                  </div>
                  <span className="text-3xl font-bold text-hazel-rust whitespace-nowrap">{offre.prix}</span>
                </div>
              ))
            ) : (
              <p className="text-center text-hazel-rust italic text-xl">Aucune formule trouvée pour cette séance.</p>
            )}
          </div>

          {/* Section Statique (Écritures agrandies) */}
          <div className="w-full max-w-2xl mx-auto mb-10">
            <h4 className="text-2xl font-medium text-center text-hazel-rust mb-6 border-hazel-rust/20 pb-2 w-max mx-auto">
              Le Tarif Comprend :
            </h4>
            <ul className="space-y-4 text-lg md:text-xl italic text-left px-4 text-hazel-black leading-relaxed">
              <li className="flex gap-2"><span className="text-hazel-rust font-bold">•</span><span>Un échange avant notre rencontre pour mieux appréhender cette séance.</span></li>
              <li className="flex gap-2"><span className="text-hazel-rust font-bold">•</span><span>Prêt d'accessoires et tenues si besoin.</span></li>
              <li className="flex gap-2"><span className="text-hazel-rust font-bold">•</span><span>Environ 30min à 1h30 de séance photo (matériel inclus).</span></li>
              <li className="flex gap-2"><span className="text-hazel-rust font-bold">•</span><span>1 à 2 journées de retouche photo.</span></li>
              <li className="flex gap-2"><span className="text-hazel-rust font-bold">•</span><span>Envoi des fichiers retouchés en haute définition via Wetransfer.</span></li>
            </ul>
          </div>

          {/* Bouton Contact */}
          <button className="bg-hazel-rust text-white px-12 py-3 rounded-[15px] text-xl hover:bg-opacity-90 shadow-md mb-10 tracking-widest transition-all">
            Me contacter
          </button>

          {/* Mini Galerie Photos */}
          <div className="flex items-center gap-2 w-full mt-4 px-4">
            <button onClick={() => scrollModal('left')} className="shrink-0 hover:scale-110 transition p-2">
               <img src={flecheGauche} alt="Précédent" className="w-6" />
            </button>
            <div ref={modalScrollRef} className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2">
              {[1, 2, 3, 4, 5].map((img) => (
                <div key={img} className="min-w-[140px] aspect-square bg-gray-200 shadow-sm shrink-0 rounded-sm overflow-hidden border border-white">
                </div>
              ))}
            </div>
            <button onClick={() => scrollModal('right')} className="shrink-0 hover:scale-110 transition p-2">
               <img src={flecheDroite} alt="Suivant" className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarifsModale;