import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Ticker from "./components/ticker/Ticker";
import Footer from "./components/footer/Footer";
import Parceria from "./pages/parceria/Parceria";
import Quemsomos from "./pages/quemsomos/Quemsomos";
// import { Footer } from "./components/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/Parceria" element={<Parceria />} />
          <Route path="/Sobre" element={<Quemsomos />} />
        </Routes>
      </div>
      <Ticker />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
