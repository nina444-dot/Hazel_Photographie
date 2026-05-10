import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';

function App() {
  return (
    <div className="bg-hazel-light min-h-screen flex flex-col font-cormorant">
      <Navbar transparent={true} />
      <main className="flex-grow">
        <Accueil />
      </main>
      <Footer />
    </div>
  );
}
export default App;