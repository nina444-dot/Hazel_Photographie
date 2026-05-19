import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext"; // Import du hook global

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Récupération de la fonction de déconnexion

  // États pour le formulaire d'ajout
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [details, setDetails] = useState(""); 

  const [formules, setFormules] = useState([]);
  const [loading, setLoading] = useState(true);

  // États pour la modale de modification
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editNom, setEditNom] = useState("");
  const [editPrix, setEditPrix] = useState("");
  const [editDetails, setEditDetails] = useState("");

  useEffect(() => {
    fetchFormules();
  }, []);

  const fetchFormules = async () => {
    try {
      setLoading(true);
      const res = await api.get("/formules"); 
      setFormules(res.data || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des formules :", error);
    } finally {
      setLoading(false);
    }
  };

  // ACTION : Déconnexion via le contexte
  const handleLogout = async () => {
    await logout();
    navigate("/login"); 
  };

  // CREATE : Ajouter une formule
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom.trim() || !prix.trim()) {
      alert("Le nom et le prix sont obligatoires");
      return;
    }
    const newFormule = {
      nom: nom,
      prix: prix.replace("€", ""),
      details: details,
    };
    try {
      await api.post("/formules", newFormule);
      setNom("");
      setPrix("");
      setDetails("");
      fetchFormules(); 
    } catch (error) {
      alert("Erreur lors de l'ajout de la formule");
    }
  };

  // DELETE : Supprimer une formule (avec suppression en cascade côté API)
  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer définitivement cette formule de la base de données ?")) {
      try {
        await api.delete(`/formules/${id}`);
        fetchFormules(); 
      } catch (error) {
        console.error(error);
        alert("Erreur lors de la suppression");
      }
    }
  };

  // Ouvre la modale et pré-remplit les champs
  const openEditModal = (formule) => {
    setEditingId(formule.id);
    setEditNom(formule.nom);
    setEditPrix(String(formule.prix).replace("€", ""));
    setEditDetails(formule.details || "");
    setIsModalOpen(true);
  };

  // UPDATE : Enregistrer les modifications
  const handleUpdateFormule = async (e) => {
    e.preventDefault();
    if (!editNom.trim() || !editPrix.trim()) {
      alert("Le nom et le prix sont obligatoires");
      return;
    }

    try {
      await api.put(`/formules/${editingId}`, {
        nom: editNom,
        prix: editPrix.replace("€", ""),
        details: editDetails,
      });
      setIsModalOpen(false); 
      fetchFormules(); 
    } catch (error) {
      alert("Erreur lors de la modification");
    }
  };

  return (
    <div className="min-h-screen bg-hazel-light font-cormorant flex flex-col text-hazel-brown">
      <Navbar transparent={false} />

      <div className="flex-grow max-w-5xl w-full mx-auto px-6 py-16">
        
        {/* En-tête et bouton déconnexion */}
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h1 className="text-5xl text-hazel-rust tracking-wide mb-2">Bonjour, Christel</h1>
            <p className="text-lg italic text-hazel-brown/80">Gestion de vos prestations et tarifs</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-hazel-rust/15 hover:bg-hazel-rust hover:text-white text-hazel-rust px-4 py-2 text-xs uppercase tracking-widest font-sans font-bold transition duration-300 rounded-[2px]"
          >
            Déconnexion
          </button>
        </div>

        {/* Formulaire d'ajout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white/40 border border-hazel-rust/10 p-6 rounded-[2px] mb-10 shadow-sm">
          <input
            type="text"
            placeholder="Nom (Ex: L'essentiel)"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="bg-white/80 border border-hazel-btn/30 rounded-[2px] px-4 py-2.5 outline-none focus:ring-1 focus:ring-hazel-rust text-md"
          />
          <input
            type="text"
            placeholder="Prix (Ex: 130)"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            className="bg-white/80 border border-hazel-btn/30 rounded-[2px] px-4 py-2.5 outline-none focus:ring-1 focus:ring-hazel-rust text-md"
          />
          <input
            type="text"
            placeholder="Détails (Ex: 10 photos)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="bg-white/80 border border-hazel-btn/30 rounded-[2px] px-4 py-2.5 outline-none focus:ring-1 focus:ring-hazel-rust text-md"
          />
          <button type="submit" className="bg-hazel-rust hover:bg-[#6F2E2E] text-white tracking-widest text-xs uppercase transition duration-300 rounded-[2px] h-full py-3">
            Ajouter la formule
          </button>
        </form>

        <div className="border-b border-hazel-rust/20 pb-4 mb-6">
          <h2 className="text-2xl italic">Vos formules actuelles</h2>
        </div>

        {/* Liste dynamique */}
        <div className="space-y-4">
          {loading ? (
            <p className="text-center py-8 italic text-gray-500">Connexion au serveur en cours...</p>
          ) : formules.length > 0 ? (
            formules.map((formule) => (
              <div 
                key={formule.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/60 border border-hazel-rust/10 p-5 rounded-[2px] shadow-sm transition-all duration-300 group"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold tracking-wide">{formule.nom}</h3>
                    <span className="bg-hazel-rust/10 text-hazel-rust font-sans text-sm font-bold px-2 py-0.5 rounded">
                      {formule.prix}{String(formule.prix).includes('€') ? '' : ' €'}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-gray-600 italic">{formule.details || "Aucun détail spécifié."}</p>
                </div>

                {/* Actions au survol */}
                <div className="flex gap-4 mt-4 sm:mt-0 opacity-85 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-widest font-medium self-end sm:self-center">
                  <button 
                    onClick={() => openEditModal(formule)} 
                    className="hover:text-hazel-rust transition border-b border-transparent hover:border-hazel-rust pb-0.5"
                  >
                    Modifier
                  </button>
                  <button 
                    onClick={() => handleDelete(formule.id)} 
                    className="hover:text-red-600 text-red-500 transition border-b border-transparent hover:border-red-600 pb-0.5"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-8 italic text-gray-500">Aucune formule trouvée.</p>
          )}
        </div>
      </div>

      {/* Modale de Modification sur-mesure */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-hazel-light border border-hazel-rust/20 max-w-md w-full p-8 rounded-[2px] shadow-xl text-hazel-brown relative">
            <h2 className="text-3xl italic mb-6 text-hazel-rust">Modifier la prestation</h2>
            
            <form onSubmit={handleUpdateFormule} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans mb-1">Nom de la formule</label>
                <input
                  type="text"
                  value={editNom}
                  onChange={(e) => setEditNom(e.target.value)}
                  className="w-full bg-white border border-hazel-btn/30 rounded-[2px] px-4 py-2 outline-none focus:ring-1 focus:ring-hazel-rust"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-sans mb-1">Tarif (€)</label>
                <input
                  type="text"
                  value={editPrix}
                  onChange={(e) => setEditPrix(e.target.value)}
                  className="w-full bg-white border border-hazel-btn/30 rounded-[2px] px-4 py-2 outline-none focus:ring-1 focus:ring-hazel-rust"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-sans mb-1">Détails</label>
                <textarea
                  value={editDetails}
                  onChange={(e) => setEditDetails(e.target.value)}
                  rows="3"
                  className="w-full bg-white border border-hazel-btn/30 rounded-[2px] px-4 py-2 outline-none focus:ring-1 focus:ring-hazel-rust text-md font-sans"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 text-xs uppercase tracking-widest font-medium">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 border border-hazel-brown/30 hover:bg-hazel-brown/10 transition rounded-[2px]"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-hazel-rust hover:bg-[#6F2E2E] text-white transition rounded-[2px]"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;