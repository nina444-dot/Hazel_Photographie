import React from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.png';

const Navbar = ({ transparent }) => {
  return (
    <nav 
      className={`
        flex justify-between items-center font-cormorant w-full px-2 py-1 md:px-12 z-50 transition-all duration-300 text-hazel-light
        
        ${transparent 
          ? 'bg-transparent absolute top-0 left-0 shadow-none h-20 md:h-28' 
          : 'bg-hazel-rust relative shadow-lg h-16 md:h-24'}
      `}
    >
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <img 
          src={logo} 
          alt="Logo Captat Hazel" 
          className="h-14 md:h-28 w-auto object-contain" 
        />
      </div>
      
     
      <ul className="flex flex-grow justify-evenly items-center text-[10px] sm:text-sm md:text-xl lg:text-2xl px-2 md:px-10">
        <li className="hover:text-white cursor-pointer transition whitespace-nowrap px-1">Mariages</li>
        <li className="hover:text-white cursor-pointer transition whitespace-nowrap px-5">Les Séances</li>
        <li className="hover:text-white cursor-pointer transition whitespace-nowrap px-5">Bons Cadeaux</li>
        <li className="hover:text-white cursor-pointer transition whitespace-nowrap px-5">A propos</li>
        <li className="hover:text-white cursor-pointer transition whitespace-nowrap px-1">Contact</li>
      </ul>

      {/* Icône Profil */}
      <div className="flex-shrink-0">
        <img 
          src={userIcon} 
          alt="Profil" 
          className="w-4 h-4 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" 
          style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(16%) try(18%) hue-rotate(324deg) brightness(104%) contrast(97%)' }} 
        />
      </div>
    </nav>
  );
};

export default Navbar;