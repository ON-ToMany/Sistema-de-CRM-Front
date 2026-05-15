import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Parceria from "./pages/parceiros/Parceria";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import { AuthProvider } from "./contexts/AuthContext";
import LoginUsuario from "./pages/auth/login/Login";
import CadastrarUsuario from "./pages/auth/cadastrar/CadastrarUsuario";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/dashboard/Dashboard";
import PublicLayout from "./components/layouts/layoutpublico/LayoutPublico";
import DashboardLayout from "./components/layouts/layoutdashboard/LayoutDashboards";
import CadastrarOportunidade from "./pages/dashboard/CadastrarOportunidade";
import GerenciarOportunidades from "./pages/dashboard/GerenciarOportunidades";
import Historico from "./pages/dashboard/Historico";
import RecuperarSenha from "./components/recuperarsenha/RecuperarSenha";
import CertificadoVerde from "./components/certificado/CertificadoVerde";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/inicio" element={<Home/>} />
            <Route path="/Parceria" element={<Parceria/>} />
            <Route path="/Sobre" element={<Quemsomos/>} />
            <Route path="/cadastrar" element={<CadastrarUsuario/>} />
          </Route>

          <Route path="/Login" element={<LoginUsuario/>} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/gerenciar-oportunidades" element={<GerenciarOportunidades />} />
            <Route path="/cadastrar-oportunidade" element={<CadastrarOportunidade />} />
            <Route path="/historico-oportunidades" element={<Historico />} />
            <Route path="/certificados" element={<CertificadoVerde oportunidades={[]}/>} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
