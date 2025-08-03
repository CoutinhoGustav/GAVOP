import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Perfil from "./pages/Perfil";
import Voos from "./pages/Voos";
import Aeronaves from "./pages/Aeronaves";
import Ocorrencias from "./pages/Ocorrencias";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/aeronaves/voos" element={<Voos />} />
          <Route path="/aeronaves/aeronaves" element={<Aeronaves />} />
          <Route path="/ocorrencias" element={<Ocorrencias />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;