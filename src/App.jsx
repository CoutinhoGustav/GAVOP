import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from "./components/DashboardLayout";
import Perfil from "./pages/Perfil";
import Voos from "./pages/Voos";
import Ocorrencias from "./pages/Ocorrencias";
import Home from "./pages/Home";
import ConsultaOcorrencia from "./pages/ConsultaOcorrencia";





function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/aeronaves/voos" element={<Voos />} />
          
         

          <Route path="/ocorrencias" element={<Ocorrencias />} />
          <Route path="/consulta" element={<ConsultaOcorrencia />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
