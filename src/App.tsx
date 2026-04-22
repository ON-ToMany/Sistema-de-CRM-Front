import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";
import { AuthProvider } from "./contexts/AuthContext"; 
import LoginUsuario from "./pages/Login/Login";

function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
           {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<LoginUsuario />}/>
            
            <Route path="/quem-somos" element={<Quemsomos />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;