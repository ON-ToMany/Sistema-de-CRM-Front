import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
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
import PublicLayout from "./components/layouts/layoutpublico/LayoutPublico";
import DashboardLayout from "./components/layouts/layoutdashboard/LayoutDashboards";

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
          <Route path="/oportunidades" element={<CardOportunidade/>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;