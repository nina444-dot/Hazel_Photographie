import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-hazel-light min-h-screen font-cormorant flex flex-col">
      <Navbar transparent={false}/>
      
      <main className="flex-grow">
        
      </main>

      <Footer />
    </div>
  );
}
export default App;