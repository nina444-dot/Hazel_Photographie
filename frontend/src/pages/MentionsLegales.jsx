import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-hazel-light text-hazel-rust font-cormorant pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-center mb-12">
        Mentions Légales
      </h1>

      <div className="space-y-8 text-lg md:text-xl tracking-wide leading-relaxed">
        
        {/* ÉDITEUR DU SITE */}
        <section>
        <h2 className="text-2xl font-semibold uppercase tracking-wider mb-3 border-b border-hazel-rust/20 pb-1">
            1. Édition du site
        </h2>
        <p>
            Le présent site internet, accessible à l'adresse <strong>{window.location.origin}</strong>, est édité par :
        </p>
        <ul className="list-none pl-2 mt-2 space-y-1">
            <li><strong>Propriétaire :</strong> Captat Hazel - Photographe professionnelle</li>
            <li><strong>Statut :</strong> Entreprise Individuelle (Micro-entreprise)</li>
            <li><strong>Siège social :</strong> 578 cami de lacassourette, Géus-d'Arzacq (64370), France</li>
            <li><strong>Contact :</strong> christel.choy607@gmail.com</li>
            <li><strong>Téléphone :</strong> Uniquement sur demande via le formulaire de contact</li>
            <li><strong>Directeur de la publication :</strong> Christel Choy</li>
        </ul>
        </section>

        {/* HÉBERGEUR */}
        <section>
          <h2 className="text-2xl font-semibold uppercase tracking-wider mb-3 border-b border-hazel-rust/20 pb-1">
            2. Hébergement
          </h2>
          <p>
            Le présent site internet est hébergé gratuitement par :
          </p>
          <ul className="list-none pl-2 mt-2 space-y-3">
            <li>
              <strong>Pour l'interface utilisateur (Frontend) :</strong>
              <br />La société Vercel Inc., située au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </li>
            <li>
              <strong>Pour l'application serveur (Backend/API) :</strong>
              <br />La société Render Services Inc., située au 530 Stevenson St, San Francisco, CA 94103, États-Unis.
            </li>
          </ul>
        </section>

        {/* PROPRIÉTÉ INTELLECTUELLE */}
        <section>
          <h2 className="text-2xl font-semibold uppercase tracking-wider mb-3 border-b border-hazel-rust/20 pb-1">
            3. Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, logos, éléments graphiques) et notamment les photographies présentées dans les galeries sont la propriété exclusive de <strong>Captat Hazel</strong>, sauf mention contraire.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification ou adaptation totale ou partielle des éléments du site, sans l'accord écrit préalable de l'auteur, est strictement interdite.
          </p>
        </section>

        {/* PROTECTION DES DONNÉES */}
        <section>
          <h2 className="text-2xl font-semibold uppercase tracking-wider mb-3 border-b border-hazel-rust/20 pb-1">
            4. Formulaires de contact et Données personnelles
          </h2>
          <p>
            Les informations recueillies via les formulaires de contact (Nom, Prénom, Email, détails de l'événement) sont uniquement destinées au traitement des demandes de prestations photographiques par Captat Hazel. Elles ne sont en aucun cas cédées ou vendues à des tiers.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MentionsLegales;