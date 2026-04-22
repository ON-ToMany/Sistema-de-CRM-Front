import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";
//import Login from "./pages/login/Login"; // Importe sua nova página
import { AuthProvider } from "./contexts/AuthContext"; 

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/*<Route path="/" element={<Login />} />*/}
            {/*<Route path="/login" element={<Login />} />*/}
            
            <Route path="/quem-somos" element={<Quemsomos />} />
            
            {/* Breno adcionar  aqui a rota de Cadastro quando  vc fizer! */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;