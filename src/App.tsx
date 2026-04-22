import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import { AuthProvider } from "./contexts/AuthContext"; 
import LoginUsuario from "./pages/Login/Login";
import CadastrarUsuario from "./pages/cadastrar/CadastrarUsuario";



function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>  
           {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Login" element={<LoginUsuario />}/>
            <Route path="/Cadastro" element={<CadastrarUsuario/>}  />
            
            <Route path="/Quem-Somos" element={<Quemsomos />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;