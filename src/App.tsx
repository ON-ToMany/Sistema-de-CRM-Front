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
import DashboardEmpresa from "./pages/gerenciarempresa/DashboardEmpresa";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/><Ticker/><Footer/></>} />
          <Route path="/inicio" element={<><Navbar/><Home/><Ticker/><Footer/></>} />
          <Route path="/Parceria" element={<><Navbar/><Parceria/><Ticker/><Footer/></>} />
          <Route path="/Sobre" element={<><Navbar/><Quemsomos/><Ticker/><Footer/></>} />
          <Route path="/Login" element={<><Navbar/><LoginUsuario/><Footer/></>} />
          <Route path="/cadastrar" element={<><Navbar/><CadastrarUsuario/><Footer/></>} />
          <Route path="/oportunidades" element={<><Navbar/><CardOportunidade/><Footer/></>} />
          <Route path="/dashboard-empresa" element={<GerenciarEmpresa />} />
          <Route path="/dashboard-cliente" element={<Dashboard />} />
          <Route path="/dashboard-empresa(maria vai ajustar caminho depois)" element={<DashboardEmpresa/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;