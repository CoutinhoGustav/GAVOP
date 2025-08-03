// src/components/CardVoo.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardVoo({ voo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/voos/${voo.id}`);
  };

  return (
    <Card onClick={handleClick} style={{ width: "18rem", cursor: "pointer" }} className="shadow">
      <Card.Body>
        <Card.Title>{voo.local}</Card.Title>
        <Card.Text>Hora: {voo.hora}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardVoo;
