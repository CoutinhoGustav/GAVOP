import React from "react";
import CardAeronave from "../components/CardAeronave";

const aeronaves = [
  { id: 1, modelo: "C-130 Hercules", matricula: "FAB-001" },
  { id: 2, modelo: "KC-390", matricula: "FAB-002" },
];

function Aeronaves() {
  return (
    <div>
      <h2>Lista de Aeronaves</h2>
      <div className="d-flex flex-wrap gap-3">
        {aeronaves.map((aero) => (
          <CardAeronave key={aero.id} aeronave={aero} />
        ))}
      </div>
    </div>
  );
}

export default Aeronaves;