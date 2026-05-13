import React from 'react';
import logo from '../assets/logo.png';
import instagramIcon from '../assets/instagram.png';
import locIcon from '../assets/localisation.png';
import mailIcon from '../assets/courrier.png';

const Footer = () => {
  return (
    <footer className="w-full mt-auto relative font-cormorant overflow-visible">
      
      {/* BANDEAU MARRON */}
      <div className="bg-hazel-rust text-hazel-light relative min-h-[8rem] md:h-24 flex items-center py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:grid md:grid-cols-3 items-center px-8 gap-10 md:gap-0">
          
          {/* GAUCHE : RÉSEAUX */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-semibold tracking-widest uppercase opacity-90">Réseau Social</h3>
            <div className="flex items-center gap-3 italic">
              <img src={instagramIcon} alt="" className="w-4 h-4 object-contain" />
              <span className="text-lg">@hazel.photographie</span>
            </div>
          </div>

          {/* CENTRE : LOGO */}
          <div className="relative flex justify-center h-10 md:h-auto">
            <img 
              src={logo} 
              alt="Logo Captat Hazel" 
              className="absolute h-36 md:h-48 w-auto object-contain"
              style={{ top: '-80px' }} 
            />
          </div>

          {/* DROITE : INFOS */}
          <div className="flex flex-col items-center md:items-end w-full"> 
            <div className="flex flex-col items-center md:items-start gap-2 italic">
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <img src={locIcon} alt="" className="w-4 h-4 object-contain" />
                </div>
                <span className="text-lg">Basée à Géus-d'Arzacq</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <img src={mailIcon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-lg">captathazel@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* COPYRIGHT */}
      <div className="bg-hazel-rust w-full py-3 border-t border-white/10">
        <p className="text-center italic text-xs md:text-sm text-hazel-light opacity-60 tracking-widest px-4">
          @2026 captathazel tous droits réservés | créé par dominguez nina
        </p>
      </div>

    </footer>
  );
};

export default Footer;