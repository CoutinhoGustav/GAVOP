import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardVoo.css";


function CardVoo({ voo }) {
  return (
    <Link to={`/aeronaves/${voo.id}`} className="voo-card-link">
      <Card className="voo-card mb-3">
        <Card.Body>
          <Card.Title className="voo-title">Data: {voo.id}</Card.Title>
          <Card.Text className="voo-local">
            <strong>Local:</strong> {voo.local}
          </Card.Text>
          <Card.Text className="voo-hora">
            <strong>Hora:</strong> {voo.hora}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardVoo;
