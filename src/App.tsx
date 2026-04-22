import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import { AuthProvider } from "./contexts/AuthContext"; 
import LoginUsuario from "./pages/Login/Login";
import CadastrarUsuario from "./pages/cadastrar/CadastrarUsuario";
import CardOportunidade from "./components/oportunidade/CardOportunidade";

import { ToastContainer } from 'react-toastify';



function App() {
  return (
 
 <AuthProvider> 
     <ToastContainer/>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>  
           {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Login" element={<LoginUsuario />}/>
            <Route path="/cadatrar" element={<CadastrarUsuario/>}  />
               <Route path="/" element={<CardOportunidade/>} />
            <Route path="/Quem-Somos" element={<Quemsomos />} />
             
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;