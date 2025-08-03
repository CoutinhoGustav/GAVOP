import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../css/Ocorrencias.css";

function Ocorrencias() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ocorrencias-container">
      <h2>Ocorrências</h2>
      <Button variant="primary" onClick={handleShow}>
        Nova Ocorrência
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Ocorrência</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Data</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Natureza</Form.Label>
              <Form.Control type="text" placeholder="Ex: PCR" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Local</Form.Label>
              <Form.Control type="text" placeholder="Ex: Hospital da Criança..." />
            </Form.Group>

            {/* Tripulação */}
            <Form.Group className="mb-3">
              <Form.Label>Comandante</Form.Label>
              <Form.Control type="text" placeholder="Nome do comandante" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Copiloto</Form.Label>
              <Form.Control type="text" placeholder="Nome do copiloto" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Médico</Form.Label>
              <Form.Control type="text" placeholder="Nome do médico" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enfermeiro</Form.Label>
              <Form.Control type="text" placeholder="Nome do enfermeiro" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Top 1</Form.Label>
              <Form.Control type="text" placeholder="Nome do tripulante Top 1" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Top 2</Form.Label>
              <Form.Control type="text" placeholder="Nome do tripulante Top 2" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Top 3</Form.Label>
              <Form.Control type="text" placeholder="Nome do tripulante Top 3" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ocorrencias;
