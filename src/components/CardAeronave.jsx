// src/components/CardAeronave.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardAeronave({ aeronave }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/aeronaves/detalhes/${aeronave.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      style={{ width: "18rem", cursor: "pointer" }}
      className="shadow"
    >
      <Card.Body>
        <Card.Title>{aeronave.modelo}</Card.Title>
        <Card.Text>
          Matrícula: <strong>{aeronave.matricula}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardAeronave;
