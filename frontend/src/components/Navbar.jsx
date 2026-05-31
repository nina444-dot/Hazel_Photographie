import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  
  const handleHashLink = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      // Si on est déjà sur l'accueil, on scroll directement
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`
      flex justify-between items-center font-cormorant w-full px-6 md:px-12 z-[100] 
      transition-all duration-300 text-hazel-light
      ${transparent 
        ? 'bg-transparent absolute top-0 left-0 h-32 md:h-40' 
        : 'bg-hazel-rust relative shadow-lg h-24 md:h-28'}
    `}>
      
      {/* LOGO */}
      <div className="flex-shrink-0 z-[120]">
        <Link to="/" onClick={closeMenu}>
          <img 
            src={logo} 
            alt="Logo" 
            className="h-20 md:h-32 w-auto object-contain cursor-pointer" 
          />
        </Link>
      </div>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex flex-grow justify-center items-center gap-10 lg:gap-20 text-xl lg:text-2xl tracking-[0.15em]">
        <li className="hover:text-hazel-btn transition"><Link to="/mariage">Mariages</Link></li>
        
        <li className="hover:text-hazel-btn transition">
          <a href="#seances" onClick={(e) => handleHashLink(e, 'seances')}>Les Séances</a>
        </li>
        
        <li className="hover:text-hazel-btn transition"><Link to="/bon-cadeau">Bons Cadeaux</Link></li>
        
        <li className="hover:text-hazel-btn transition">
          <a href="#a-propos" onClick={(e) => handleHashLink(e, 'a-propos')}>À propos</a>
        </li>
        
        <li className="hover:text-hazel-btn transition"><Link to="/contact">Contact</Link></li>
      </ul>

      {/* BLOC DROITE */}
      <div className="flex items-center gap-4 md:gap-8 z-[120]">
        <div className="flex-shrink-0">
          <Link to="/login" className="block cursor-pointer hover:opacity-80 transition">
            <div className="w-5 h-5 md:w-6 md:h-6 icon-user-hazel" aria-label="Profil" />
          </Link>
        </div>

  <button 
    onClick={toggleMenu}
    className="flex flex-col justify-center items-center md:hidden w-11 h-11 gap-1.5 focus:outline-none"
    aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
    aria-expanded={isOpen}
    aria-controls="mobile-navigation-menu"
  >
    <span className={`block w-5 h-0.5 bg-hazel-light transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block w-5 h-0.5 bg-hazel-light transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    <span className={`block w-5 h-0.5 bg-hazel-light transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
      </div>

      {/* MENU MOBILE */}
      <div 
      id="mobile-navigation-menu"
      className={`
        fixed inset-0 z-[110] md:hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        <div className="absolute inset-0 bg-hazel-rust/60 backdrop-blur-2xl" />
        <ul className="relative h-full flex flex-col items-center justify-center gap-10 text-3xl tracking-[0.2em] text-white italic">
          <li onClick={closeMenu}><Link to="/mariage">Mariages</Link></li>
          
          
          <li><a href="#seances" onClick={(e) => handleHashLink(e, 'seances')}>Les Séances</a></li>
          
          <li onClick={closeMenu}><Link to="/bon-cadeau">Bons Cadeaux</Link></li>
          
          <li><a href="#a-propos" onClick={(e) => handleHashLink(e, 'a-propos')}>À propos</a></li>
          
          <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;