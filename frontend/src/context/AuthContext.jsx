import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../api/axios'; // On utilise ton instance axios existante

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 💡 Bonus essentiel : On vérifie si un token existe déjà au chargement de l'application
  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken && savedToken !== "undefined") {
      try {
        const decoded = jwtDecode(savedToken);
        setUser({ id: decoded.id, username: decoded.username || decoded.email });
      } catch (error) {
        console.error("Token invalide ou expiré");
        localStorage.removeItem("adminToken");
      }
    }
    setLoading(false);
  }, []);

  async function login(username, password) {
    // Appel à ton endpoint existant
    const res = await api.post('/auth/login', { username, password });
    
    const token = res.data.token;
    localStorage.setItem("adminToken", token); // On garde ton adminToken local
    
    const decoded = jwtDecode(token);
    setUser({ id: decoded.id, username: decoded.username || decoded.email });
  }

  async function logout() {
    localStorage.removeItem("adminToken");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}