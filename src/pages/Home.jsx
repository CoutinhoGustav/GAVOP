import React from 'react';
import '../css/Home.css';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="home-container">
      <Card className="text-center p-4 shadow-sm">
        <Card.Body>
          <Card.Title>Bem-vindo ao Painel de Controle</Card.Title>
          <Card.Text>
            Utilize o menu lateral para acessar as seções de perfil, aeronaves ou registrar ocorrências.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
