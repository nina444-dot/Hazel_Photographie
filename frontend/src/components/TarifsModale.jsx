import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      const scrollAmount = direction === 'left' ? -150 : 150;
      modalScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Arrière-plan sombre avec flou */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>

      {/* CONTENEUR */}
      <div className="relative bg-hazel-light w-full max-w-4xl shadow-2xl rounded-sm flex flex-col h-auto max-h-[95vh] font-cormorant p-6 md:p-8 justify-between overflow-y-auto no-scrollbar">
        
        {/* BTN FERMER */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-4 text-2xl text-hazel-rust font-light z-[120] hover:scale-110 transition-transform p-2"
          aria-label="Fermer la modale"
        >
          ✕
        </button>

        {/* CONTENU */}
        <div className="flex flex-col items-center w-full space-y-6 md:space-y-7">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <img src={fleurMarron} alt="" className="w-6 h-6 mb-1 object-contain" />
            <h2 className="text-2xl md:text-3xl text-hazel-rust tracking-wide px-6">
              Séances Photo {titre}
            </h2>
          </div>

          {/* Liste des Formules */}
          <div className="w-full space-y-3 max-w-2xl px-2">
            {loading ? (
              <p className="text-center italic text-hazel-rust text-lg">Chargement des tarifs...</p>
            ) : formules.length > 0 ? (
              formules.map((offre, i) => (
                <div key={i} className="flex justify-between items-end border-b border-hazel-rust/20 pb-1 text-hazel-black">
                  <div className="pr-4 text-left">
                    <h4 className="text-lg md:text-xl font-medium text-hazel-rust tracking-tight">{offre.nom} :</h4>
                    <p className="text-xs md:text-sm italic font-light leading-none mt-1">{offre.details}</p>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-hazel-rust whitespace-nowrap">
                    {offre.prix}{typeof offre.prix === 'number' || !offre.prix.toString().includes('€') ? '€' : ''}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-hazel-rust italic text-sm">Aucune formule trouvée.</p>
            )}
          </div>

          {/* Section "Le Tarif Comprend" */}
          <div className="w-full max-w-xl mx-auto text-center">
            <h5 className="text-md md:text-lg font-medium text-hazel-rust mb-3">
              Le Tarif Comprend :
            </h5>
            <ul className="space-y-1.5 text-xs md:text-sm italic text-left text-hazel-black px-4 max-w-max mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-hazel-rust font-bold shrink-0">•</span>
                <span>Un échange avant notre rencontre pour mieux appréhender cette séance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hazel-rust font-bold shrink-0">•</span>
                <span>Prêt d'accessoires et tenues si besoin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hazel-rust font-bold shrink-0">•</span>
                <span>Environ 30min à 1h30 de séance photo (matériel inclus).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hazel-rust font-bold shrink-0">•</span>
                <span>1 à 2 journées de retouche photo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hazel-rust font-bold shrink-0">•</span>
                <span>Envoi des fichiers retouchés en haute définition via Wetransfer.</span>
              </li>
            </ul>
          </div>

          {/* Btn */}
          <div className="py-2">
            <Link 
              to="/contact"
              onClick={onClose} 
              className="bg-hazel-rust text-white text-center px-12 py-2.5 rounded-[15px] text-sm md:text-base shadow-md tracking-widest transition-all inline-block"
            >
              Me contacter
            </Link>
          </div>

          {/* Mini Galerie Photos */}
          <div className="flex items-center justify-center gap-4 w-full max-w-2xl px-2 h-[80px] md:h-[90px]">
            <button onClick={() => scrollModal('left')} className="shrink-0 hover:scale-110 transition p-2">
              <img src={flecheGauche} alt="Précédent" className="w-4 select-none" />
            </button>
            
            <div 
              ref={modalScrollRef} 
              className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar scroll-smooth h-full items-center max-w-full"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((img) => (
                <div key={img} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-gray-200 shadow-sm shrink-0 rounded-sm border border-white">
                </div>
              ))}
            </div>

            <button onClick={() => scrollModal('right')} className="shrink-0 hover:scale-110 transition p-2">
              <img src={flecheDroite} alt="Suivant" className="w-4 select-none" />
            </button>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default TarifsModale;