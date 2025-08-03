import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Ocorrencias() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [natureza, setNatureza] = useState("");
  const [tripulantes, setTripulantes] = useState({
    comandante: "",
    copiloto: "",
    medico: "",
    enfermeiro: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTripulanteChange = (e) => {
    const { name, value } = e.target;
    setTripulantes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalvar = () => {
    // Aqui você pode tratar os dados, enviar pra API, etc.
    console.log({
      data,
      natureza,
      tripulantes,
    });
    handleClose();
  };

  return (
    <div>
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
              <Form.Control
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Natureza</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Pane elétrica"
                value={natureza}
                onChange={(e) => setNatureza(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Tripulação</Form.Label>

            <Form.Group className="mb-3">
              <Form.Label>Comandante</Form.Label>
              <Form.Control
                type="text"
                name="comandante"
                placeholder="Nome do Comandante"
                value={tripulantes.comandante}
                onChange={handleTripulanteChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Copiloto</Form.Label>
              <Form.Control
                type="text"
                name="copiloto"
                placeholder="Nome do Copiloto"
                value={tripulantes.copiloto}
                onChange={handleTripulanteChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Médico</Form.Label>
              <Form.Control
                type="text"
                name="medico"
                placeholder="Nome do Médico"
                value={tripulantes.medico}
                onChange={handleTripulanteChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enfermeiro</Form.Label>
              <Form.Control
                type="text"
                name="enfermeiro"
                placeholder="Nome do Enfermeiro"
                value={tripulantes.enfermeiro}
                onChange={handleTripulanteChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Top3</Form.Label>
              <Form.Control
                type="text"
                name="Top3"
                placeholder="Nome do Top3"
                value={tripulantes.enfermeiro}
                onChange={handleTripulanteChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Top2</Form.Label>
              <Form.Control
                type="text"
                name="Top2"
                placeholder="Nome do Top2"
                value={tripulantes.enfermeiro}
                onChange={handleTripulanteChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Top1</Form.Label>
              <Form.Control
                type="text"
                name="Top1"
                placeholder="Nome do Top1"
                value={tripulantes.enfermeiro}
                onChange={handleTripulanteChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSalvar}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ocorrencias;
