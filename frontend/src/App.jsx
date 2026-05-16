import { Routes, Route } from 'react-router-dom'; 
import Accueil from './pages/Accueil';
import Login from './pages/Login';

function App() {
  return (
    <div className="bg-hazel-light min-h-screen flex flex-col font-cormorant">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;