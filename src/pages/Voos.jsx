import React from "react";
import CardVoo from "../components/CardVoo";

const voosDoDia = [
  { id: 1, local: "SBBR", aeronave: "PS-BDF", hora: "08:00" },
  { id: 2, local: "BR-040", aeronave: "PR-DHL", hora: "10:30" },
  { id: 3, local: "HMIB", aeronave: "PR-CBM", hora: "16:15" },
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