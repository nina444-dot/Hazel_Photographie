import { Routes, Route, Navigate } from 'react-router-dom'; 
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <div className="bg-hazel-light min-h-screen flex flex-col font-cormorant">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            
    
            <Route 
              path="/admin/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            {/* Redirection automatique pour les URL inconnues */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes> 
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;