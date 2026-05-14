import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.png';

const Navbar = ({ transparent }) => {
  return (
    <nav className={`
      flex justify-between items-center font-cormorant w-full px-4 md:px-12 z-50 
      transition-all duration-300 text-hazel-light
      ${transparent 
        ? 'bg-transparent absolute top-0 left-0 h-28 md:h-36' 
        : 'bg-hazel-rust relative shadow-lg h-20 md:h-28'}
    `}>
      
      {/* LOGO */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 md:h-32 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity" 
          />
        </Link>
      </div>
      
      <ul className="flex flex-grow justify-center items-center max-w-[70%] mx-auto text-[11px] md:text-xl lg:text-2xl gap-20 tracking-[0.15em]">
        <li className="hover:text-hazel-btn cursor-pointer transition whitespace-nowrap">Mariages</li>
        <li className="hover:text-hazel-btn cursor-pointer transition whitespace-nowrap">Les Séances</li>
        <li className="hover:text-hazel-btn cursor-pointer transition whitespace-nowrap">Bons Cadeaux</li>
        <li className="hover:text-hazel-btn cursor-pointer transition whitespace-nowrap">À propos</li>
        <li className="hover:text-hazel-btn cursor-pointer transition whitespace-nowrap">Contact</li>
      </ul>

      {/* PROFIL */}
      <div className="flex-shrink-0">
        <div 
          className="w-5 h-5 md:w-6 md:h-6 cursor-pointer transition-colors duration-300 icon-user-hazel"
          aria-label="Profil"
        />
      </div>
    </nav>
  );
};

export default Navbar;