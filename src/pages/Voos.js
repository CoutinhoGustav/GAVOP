import React from "react";
import CardVoo from "../components/CardVoo";

const voosDoDia = [
  { id: 1, destino: "Brasília", hora: "08:00" },
  { id: 2, destino: "São Paulo", hora: "10:30" },
];

function Voos() {
  return (
    <div>
      <h2>Voos do Dia</h2>
      <div className="d-flex flex-wrap gap-3">
        {voosDoDia.map((voo) => (
          <CardVoo key={voo.id} voo={voo} />
        ))}
      </div>
    </div>
  );
}

export default Voos;