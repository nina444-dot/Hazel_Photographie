import React from 'react';
import logo from '../assets/logo.png';
import instagramIcon from '../assets/instagram.png';
import locIcon from '../assets/localisation.png';
import mailIcon from '../assets/courrier.png';

const Footer = () => {
  return (
    <footer className="w-full mt-auto relative font-cormorant">
      
      {/* BANDEAU MARRON */}
      <div className="bg-hazel-rust text-hazel-light h-24 flex items-center relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 items-center px-8">
          
          {/* GAUCHE : Réseaux */}
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold tracking-widest uppercase text-sm opacity-90">Réseau Social</h3>
            <div className="flex items-center gap-3 italic">
              <img src={instagramIcon} alt="" className="w-4 h-4 object-contain" />
              <span className="text-lg">@captathazel</span>
            </div>
          </div>

          {/* LOGO */}
          <div className="relative flex justify-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="absolute h-48 w-auto object-contain pointer-events-none"
              style={{ top: '-96px' }} // Ajustement précis pour le centrage visuel
            />
          </div>

          {/* DROITE : Contact */}
          <div className="flex justify-end"> 
            <div className="flex flex-col gap-2 italic">
              {/* Localisation */}
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <img src={locIcon} alt="" className="w-4 h-4 object-contain" />
                </div>
                <span className="text-lg leading-none">Basée à Géus-d'Arzacq</span>
              </div>
              {/* Mail */}
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <img src={mailIcon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-lg leading-none">captathazel@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-hazel-rust w-full py-3 border-t border-white/5">
        <p className="text-center italic text-xs text-hazel-light/60 tracking-[0.2em] uppercase">
          @2026 captathazel tous droits réservés | créé par dominguez nina
        </p>
      </div>

    </footer>
  );
};

export default Footer;