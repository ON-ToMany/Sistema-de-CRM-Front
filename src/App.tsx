import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quemsomos from "./pages/quemsomos/Quemsomos";

function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/quem-somos" element={<Quemsomos />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
