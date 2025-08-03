import React from "react";
import { Link } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      <div className="sidebar bg-dark text-white p-3">
        <h4>Menu</h4>
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link text-white" to="/perfil">Perfil</Link></li>
          <li className="nav-item"><strong>Aeronaves</strong></li>
          <li className="nav-item ms-3"><Link className="nav-link text-white" to="/aeronaves/voos">Voos</Link></li>
          <li className="nav-item ms-3"><Link className="nav-link text-white" to="/aeronaves/aeronaves">Aeronaves</Link></li>
          <li className="nav-item"><strong>Ocorrências</strong></li>
          <li className="nav-item ms-3"><Link className="nav-link text-white" to="/ocorrencias">Novo / Consulta</Link></li>
        </ul>
      </div>
      <div className="content flex-grow-1 p-3">{children}</div>
    </div>
  );
}

export default DashboardLayout;