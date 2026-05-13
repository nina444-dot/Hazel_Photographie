import React, {useRef, useState} from 'react';
import TarifsModal from '../components/TarifsModale';
import logo from '../assets/logo.png'
import fleurMarron from '../assets/fleur-marron.png';
import flecheGauche from '../assets/fleche-gauche.png';
import flecheDroite from '../assets/fleche-droite.png';
import flecheBas from '../assets/fleche-Bas.png'

const Accueil = () => {
    const scrollRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitre, setSelectedTitre] = useState("");

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="flex flex-col w-full bg-hazel-light font-cormorant overflow-x-hidden">
      
      {/* SECTION LOGO */}
      <section id="accueil" className="min-h-screen relative flex items-center justify-center bg-gray-300">
            <div className="relative z-10 flex flex-col items-center">
           <img 
             src={logo} 
             alt="Captat Hazel Logo" 
             className="w-64 md:w-[450px] object-contain" 
           />
            <img 
            src={flecheBas} 
            alt="Fleche Bas" 
            className="w-8 md:w-[50px] object-contain mt-[20vh] md:mt-10 animate-bounce" 
            />
        </div>         
      </section>

      {/*SECTION INTRO */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
         <div className="aspect-[3/4] bg-gray-200 shadow-sm">
            {/* Future photo des deux petites filles */}
         </div>
         <div className="text-hazel-rust space-y-6">
            <h2 className="text-4xl leading-tight">Photographe de l'amour, des familles et des commencements.</h2>
            <p className=" text-hazel-black text-lg medium leading-relaxed">
               Au cœur de l’Aquitaine, à Pau. Ici, chaque séance devient une parenthèse douce, un moment pour ralentir, observer ce qui tremble un peu, ce qui vit doucement. 
            </p>
            <p className="text-4xl leading-tight">Des photos qui ressemblent à ce que vous avez vraiment vécu.</p>
         </div>
      </section>

     {/* SECTION SÉANCES AVEC FLEUR */}
<section id="seances" className="scroll-mt-20 py-3 text-center">
  
  
  <div className="mb-12 flex flex-col items-center gap-5">
    <img 
      src={fleurMarron} 
      alt="Décoration fleur" 
      className="w-12 h-12 object-contain" 
    />
    <h2 className="text-4xl text-hazel-rust tracking-widest uppercase">
      Les séances que je propose
    </h2>
  </div>
  
  {/* Grille des séances */}
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8">
    {["Famille", "Grossesse", "Mariage", "Couple", "Femme", "Nouveau né"].map((nom, index) => (
      
      /* Le parent 'relative' pour que le bouton se positionne par rapport à l'image */
      <div key={index} className="flex flex-col items-center relative">
        
        {/* Cadre de l'image */}
        <div className="aspect-[3/4] w-full bg-gray-200 shadow-md">
          {/* Future photo ici */}
        </div>

        <button 
  onClick={() => {
    if (nom === "Mariage") {
      console.log("Page Mariage");
    } else {
      setSelectedTitre(nom); 
      setIsModalOpen(true);
    }
  }}
  className="absolute -bottom-6 bg-hazel-rust text-white px-10 py-3 tracking-widest text-sm uppercase rounded-[15px] shadow-lg hover:bg-opacity-90 transition active:scale-95 z-20"
>
  {nom}
</button>
      </div>
    ))}
  </div>
</section>

      {/* SECTION QUI SUIS-JE */}
      <section id="a-propos" className="scroll-mt-20 py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
         <div className="text-hazel-rust space-y-6">
            <h2 className="text-4xl font-semibold">Qui suis-je ?</h2>
            <div className="text-hazel-brown space-y-4 text-lg font-bold leading-relaxed text-justify">
               <p>Je m'appelle Christel. Depuis que je suis petite, j'ai toujours vu le monde comme à travers un objectif certaine que la lumière juste, le bon angle, pouvaient transformer un instant en quelque chose de précieux.</p>
               <p>C'est mon père qui a allumé cette flamme. Avec son appareil argentique, il capturait des autoportraits au milieu des forêts. Le grain de ses photos, leur charme intemporel, m'ont envoûtée. À 13 ans, j'ai reçu mon premier appareil. Le plus beau cadeau qu'on pouvait me faire.</p>
               <p>J'ai tout appris seule, en essayant, en recommençant. Et j'ai découvert ce que j'aimais vraiment : les gens qui s'aiment, les enfants, les instants simples. La vie, en somme.</p>
               <p>Mais je me suis aussi lancée pour une raison qui me tient profondément à cœur : aider les femmes à se voir autrement. Mon objectif est de montrer à chaque femme qu'elle mérite de se regarder avec bienveillance et amour.</p>
               <p>Ici, pas de perfection ni de mise en scène. Juste vous, vos émotions, vos gestes, vos liens.</p>
            </div>
         </div>
         <div className="aspect-[3/4] bg-gray-200 shadow-xl mt-12 md:mt-0">
            {/* Future photo de Christel */}
         </div>
      </section>

      {/* MINI GALERIE PHOTO */}
<section className="py-20 bg-hazel-light overflow-hidden">
  <div className="max-w-7xl mx-auto px-8 relative">
    <div className="flex items-center gap-4">
      
      {/* Flèche Gauche */}
      <button onClick={() => scroll('left')} className="z-10 hover:scale-110 transition shrink-0">
        <img src={flecheGauche} alt="Précédent" className="w-8" />
      </button>

      {/* Container : Ajoute la ref, la classe no-scrollbar et le <style> */}
      <div 
        ref={scrollRef} 
        className="flex gap-4 overflow-x-auto no-scrollbar py-4 scroll-smooth"
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="min-w-[250px] aspect-[3/4] bg-gray-200 shadow-lg shrink-0">
          </div>
        ))}
      </div>

      {/* Flèche Droite */}
      <button onClick={() => scroll('right')} className="z-10 hover:scale-110 transition shrink-0">
        <img src={flecheDroite} alt="Suivant" className="w-8" />
      </button>
    </div>
  </div>
</section>
{/* LA MODALE */}
      <TarifsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        titre={selectedTitre} 
      />
    </div>
  );
};

export default Accueil;