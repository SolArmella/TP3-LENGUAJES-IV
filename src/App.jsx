import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios"; 
import ImageUploader from "./ImageUploader";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageUploader />} />   {/* Página Inicio */}
        <Route path="/servicios" element={<Servicios />} /> {/* Página Servicios */}
        <Route path="/contacto" element={<Contacto />} />  {/* Página Contacto */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
