import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import "../css/Consulta.css";

function Consulta() {
  const [ocorrencias] = useState([
    {
      id: 1,
      data: "2025-08-01",
      natureza: "Pane elétrica",
      tripulantes: {
        comandante: "João",
        copiloto: "Maria",
        medico: "Carlos",
        enfermeiro: "Ana",
      },
    },
    {
      id: 2,
      data: "2025-08-02",
      natureza: "Falha no motor",
      tripulantes: {
        comandante: "Paulo",
        copiloto: "Fernanda",
        medico: "",
        enfermeiro: "Lucas",
      },
    },
  ]);

  const [filtro, setFiltro] = useState({
    data: "",
    natureza: "",
    comandante: "",
    copiloto: "",
    medico: "",
    enfermeiro: "",
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltro((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ocorrenciasFiltradas = ocorrencias.filter((o) => {
    const matchData = filtro.data ? o.data.includes(filtro.data) : true;
    const matchNatureza = filtro.natureza
      ? o.natureza.toLowerCase().includes(filtro.natureza.toLowerCase())
      : true;

    const matchComandante = filtro.comandante
      ? o.tripulantes.comandante.toLowerCase().includes(filtro.comandante.toLowerCase())
      : true;

    const matchCopiloto = filtro.copiloto
      ? o.tripulantes.copiloto.toLowerCase().includes(filtro.copiloto.toLowerCase())
      : true;

    const matchMedico = filtro.medico
      ? (o.tripulantes.medico || "").toLowerCase().includes(filtro.medico.toLowerCase())
      : true;

    const matchEnfermeiro = filtro.enfermeiro
      ? (o.tripulantes.enfermeiro || "").toLowerCase().includes(filtro.enfermeiro.toLowerCase())
      : true;

    return (
      matchData &&
      matchNatureza &&
      matchComandante &&
      matchCopiloto &&
      matchMedico &&
      matchEnfermeiro
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Consulta de Ocorrências</h2>

      <Form style={{ marginBottom: 20 }}>
        <Form.Group className="mb-2" controlId="filtroData">
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            name="data"
            value={filtro.data}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="filtroNatureza">
          <Form.Label>Natureza</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filtrar por natureza"
            name="natureza"
            value={filtro.natureza}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Label>Tripulação (filtros separados)</Form.Label>

        <Form.Group className="mb-2" controlId="filtroComandante">
          <Form.Control
            type="text"
            placeholder="Comandante"
            name="comandante"
            value={filtro.comandante}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="filtroCopiloto">
          <Form.Control
            type="text"
            placeholder="Copiloto"
            name="copiloto"
            value={filtro.copiloto}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="filtroMedico">
          <Form.Control
            type="text"
            placeholder="Médico"
            name="medico"
            value={filtro.medico}
            onChange={handleFiltroChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="filtroEnfermeiro">
          <Form.Control
            type="text"
            placeholder="Enfermeiro"
            name="enfermeiro"
            value={filtro.enfermeiro}
            onChange={handleFiltroChange}
          />
        </Form.Group>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Data</th>
            <th>Natureza</th>
            <th>Comandante</th>
            <th>Copiloto</th>
            <th>Médico</th>
            <th>Enfermeiro</th>
          </tr>
        </thead>
        <tbody>
          {ocorrenciasFiltradas.length > 0 ? (
            ocorrenciasFiltradas.map((o) => (
              <tr key={o.id}>
                <td>{o.data}</td>
                <td>{o.natureza}</td>
                <td>{o.tripulantes.comandante}</td>
                <td>{o.tripulantes.copiloto}</td>
                <td>{o.tripulantes.medico || "-"}</td>
                <td>{o.tripulantes.enfermeiro || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Nenhuma ocorrência encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Consulta;
