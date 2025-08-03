
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const voosDoDia = [
  { id: "30/07", local: "Asa-Sul", hora: "08:00", piloto: "Cap. Silva", aeronave: "PT-001", status: "Confirmado" },
  { id: "01/08", local: "Ceilândia", hora: "19:30", piloto: "Ten. Rocha", aeronave: "PT-002", status: "Aguardando" },
];

function Voos() {
  const { id } = useParams();
  const navigate = useNavigate();

  const voo = voosDoDia.find((v) => v.id === id);

  if (!voo) {
    return <h4>Voo não encontrado.</h4>;
  }

  return (
    <div className="container mt-4">
      <Card className="p-4">
        <h2>Detalhes do Voo - {voo.id}</h2>
        <p><strong>Local:</strong> {voo.local}</p>
        <p><strong>Hora:</strong> {voo.hora}</p>
        <p><strong>Piloto:</strong> {voo.piloto}</p>
        <p><strong>Aeronave:</strong> {voo.aeronave}</p>
        <p><strong>Status:</strong> {voo.status}</p>
        <Button variant="secondary" onClick={() => navigate(-1)}>Voltar</Button>
      </Card>
    </div>
  );
}

export default Voos;
