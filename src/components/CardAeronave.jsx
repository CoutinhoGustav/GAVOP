import React from "react";
import { Card } from "react-bootstrap";
import "../css/CardAeronave.css";

function CardAeronave({ aeronave }) {
  return (
    <Card className="voo-card">
      <Card.Body>
        <Card.Title className="voo-title">{aeronave.modelo}</Card.Title>
        <Card.Text className="voo-hora">Matrícula: {aeronave.matricula}</Card.Text>
        <button className="btn btn-primary">Ver Detalhes</button>
      </Card.Body>
    </Card>
  );
}

export default CardAeronave;
