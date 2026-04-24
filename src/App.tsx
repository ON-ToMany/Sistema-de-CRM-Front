import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Ticker from "./components/ticker/Ticker";
import Footer from "./components/footer/Footer";
import Parceria from "./pages/parceria/Parceria";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import GerenciarEmpresa from "./pages/gerenciarempresa/GerenciarEmpresa";
import { AuthProvider } from "./contexts/AuthContext";
import LoginUsuario from "./pages/Login/Login";
import CadastrarUsuario from "./pages/cadastrar/CadastrarUsuario";
import CardOportunidade from "./components/oportunidade/CardOportunidade";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (

    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>

        <Navbar />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/Parceria" element={<Parceria />} />
            <Route path="/Sobre" element={<Quemsomos />} />
            <Route path="/Login" element={<LoginUsuario />} />
            <Route path="/cadastrar" element={<CadastrarUsuario />} />
            <Route path="/oportunidadeCadastro" element={<CardOportunidade />} />
            <Route path="/gerenciar-empresa" element={<GerenciarEmpresa />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <Ticker />
        <Footer />

      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;