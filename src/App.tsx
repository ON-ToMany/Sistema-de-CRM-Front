
import "./App.css";

// 1. Importe o componente que criamos (certifique-se de que o nome do arquivo e o caminho estão corretos)

import Quemsomos from "./pages/quemsomos/Quemsomos";

// Importe sua Navbar e Footer aqui também
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Coloque sua Navbar no topo */}
      {/* <Navbar /> */}

      {/* 3. O componente AboutUs entra aqui como o conteúdo principal */}
      <Quemsomos />

      {/* 4. O Footer fica no final */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
