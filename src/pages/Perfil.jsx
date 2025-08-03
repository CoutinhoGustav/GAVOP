
import React from "react";
import "../css/Perfil.css";

function Perfil() {
  const usuario = {
    nome: "",             
    email: "",            
    foto: "",             
    dataNascimento: "",   
    cpf: "",              
    patente: "",          
  };

  return (
    <div className="perfil-card">
      <img 
        src={usuario.foto} 
        alt="Foto do usuário" 
        className="perfil-foto" 
      />
      <h2 className="perfil-nome">{usuario.nome || "Nome do Usuário"}</h2>
      <p className="perfil-email">{usuario.email || "email@exemplo.com"}</p>

      <div className="perfil-info">
        <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento || "---"}</p>
        <p><strong>CPF:</strong> {usuario.cpf || "---"}</p>
        <p><strong>Patente:</strong> {usuario.patente || "---"}</p>
      </div>
    </div>
  );
}

export default Perfil;
