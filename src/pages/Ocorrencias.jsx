import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Ocorrencias() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h2>Ocorrências</h2>
      <Button variant="primary" onClick={handleShow}>Nova Ocorrência</Button>

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
              <Form.Control type="text" placeholder="Ex: Pane elétrica" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tripulação</Form.Label>
              <Form.Control type="text" placeholder="Comandante, Copiloto, Médico, Enfermeiro..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ocorrencias;