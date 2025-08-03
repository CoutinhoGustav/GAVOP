import React from "react";
import { Card } from "react-bootstrap";

function CardVoo({ voo }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Voo #{voo.id}</Card.Title>
        <Card.Text>Destino: {voo.destino}</Card.Text>
        <Card.Text>Hora: {voo.hora}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardVoo;