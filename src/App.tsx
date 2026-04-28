import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Parceria from "./pages/parceiros/Parceria";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import GerenciarEmpresa from "./pages/dashboards/empresa/GerenciarEmpresa";
import { AuthProvider } from "./contexts/AuthContext";
import LoginUsuario from "./pages/auth/login/Login";
import CadastrarUsuario from "./pages/auth/cadastrar/CadastrarUsuario";
import CardOportunidade from "./pages/dashboards/cliente/CadastrarOportunidade";
import { ToastContainer } from 'react-toastify';
import DashboardEmpresa from "./pages/dashboards/empresa/DashboardEmpresa";
import Dashboard from "./pages/dashboards/cliente/DashboardCliente";
import PublicLayout from "./components/layouts/layoutpublico/LayoutPublico";
import DashboardLayout from "./components/layouts/layoutdashboard/LayoutDashboards";
import ListarOportunidades from "./pages/dashboards/cliente/ListarOportunidades";

function App() {
  return (
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/Parceria" element={<Parceria/>} />
          <Route path="/Sobre" element={<Quemsomos/>} />
          <Route path="/Login" element={<LoginUsuario/>} />
          <Route path="/cadastrar" element={<CadastrarUsuario/>} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard-empresa" element={<DashboardEmpresa/>} />
          <Route path="/gerenciar-empresa" element={<GerenciarEmpresa />} />
          <Route path="/dashboard-cliente" element={<Dashboard />} />
          <Route path="/listar-oportunidades" element={<ListarOportunidades />} />
          <Route path="/cadastrar-oportunidade" element={<CardOportunidade/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;