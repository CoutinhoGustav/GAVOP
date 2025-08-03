# Projeto GAVOP - Painel de Aeronaves e Ocorrências

Este é um sistema web desenvolvido em React.js utilizando React Router para navegação e React Bootstrap para estilização dos componentes. Ele permite visualizar aeronaves, voos e ocorrências em um layout responsivo com um menu estilo de sidebar e nas telas com cards informativos.

---

## Pré-requisitos

Antes de iniciar, verifique se você tem o Node.js e o npm instalados:

```bash
node -v
npm -v
```

Senão estiver instalado, baixe e instale o Node.js (que já inclui o npm) no site oficial:

https://nodejs.org/

Após a instalação, reinicie o terminal e verifique novamente as versões.

---

## Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/CoutinhoGustav/GAVOP.git
cd gavop
```

2. **Instale as dependências:**

```bash ou cmd
npm install
```

3. **Inicie o projeto em modo de desenvolvimento:**

```bash ou cmd
npm start
```

Acesse no navegador:

👉 [http://localhost:3000] ou (http://localhost:3000)

---

##  Estrutura de Pastas:

```
gavop/
│
├── public/
├── src/
│   ├── components/
│   │   ├── CardAeronave.jsx
│   │   ├── CardVoo.jsx
│   │   ├── CardVoo.css
│   │   └── DashboardLayout.jsx
│   ├── css/
│   │   └── DashboardLayout.css
│   ├── pages/
│   │   ├── AeronaveDetalhes.jsx
│   │   ├── Aeronaves.jsx
│   │   ├── ConsultaOcorrencia.jsx
│   │   ├── Home.jsx
│   │   ├── Ocorrencias.jsx
│   │   ├── Perfil.jsx
│   │   └── Voos.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Scripts Disponíveis:

Comandos             

| `npm start`- Inicia o servidor de desenvolvimento.
| `npm run build`- Compila o projeto para produção.
| `npm test`- Executa os testes (se aplicável).        
| `npm run eject`- Exibe configurações ocultas do React.

---

##  Dependências:

Se algum erro de módulo aparecer, instale manualmente com:

```bash
npm install react-router-dom react-bootstrap bootstrap
```

No arquivo `index.js`, certifique-se de importar:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

##  Funcionalidades:

- [x] Layout com sidebar  
- [x] Cards de Aeronaves e Ocorrências  
- [x] Navegação com React Router  
- [ ] Integração com backend  
- [ ] Autenticação de usuário