# Projeto GAVOP - Painel de Aeronaves e Ocorrências

Este é um sistema web desenvolvido em React.js utilizando React Router para navegação e React Bootstrap para estilização dos componentes. Ele permite visualizar aeronaves, voos e ocorrências em um layout responsivo com um menu estilo de sidebar e nas telas com cards informativos.

## Tecnologias Utilizadas

* [React]
* [React Router DOM]
* [React Bootstrap]
* [Bootstrap 5]

---

## Instalação e Execução

1. **Clone o repositório:**

```terminal bash
git clone https://github.com/CoutinhoGustav/GAVOP.git
cd gavop
```

2.  **Instale as dependências:**

```bash
npm install
```

---

3.  **Após a instalação, execute o Projeto:**

Para rodar o projeto em modo de desenvolvimento:

```bash
npm start
```

Acesse link no terminal: [http://localhost:3000] ou (http://localhost:3000)

---

## 📁 Estrutura de Pastas

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

## 💡 Scripts Disponíveis

* `npm start` – Inicia o servidor de desenvolvimento.
* `npm run build` – Compila o projeto para produção.
* `npm test` – Executa os testes (se aplicável).
* `npm run eject` – Expõe as configurações do Webpack e Babel (não reversível).

---

## 🪰 Dependências

Se houver erro de módulo não encontrado, execute:

```bash
npm install react-router-dom react-bootstrap bootstrap
```

No arquivo `index.js`, adicione:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

##  Funcionalidades

[x] Layout com sidebar
[x] Cards de Aeronaves e Ocorrências
[x] Navegação com React Router
[ ] Integração com backend
[ ] Autenticação de usuário


