### Observação

Este repositório contem o **Projeto Catálogo de automóveis** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

## Projeto ClickBeard

#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - UX/UI

#### Tecnologias utilizadas:

  - React;
  - React hook form;
  - chakra-ui;
  - axios;
  - styled-components;
  - TypeScript;
  - CSS;
  - HTML;
  - eslint;
  - vscode;
  - jsonwebtoken;
  - bcrypt;
  - zod;

---

## Inciando o projeto

Para da start no projeto, basta realizar o download ou clonar esse repositório.

Dentro do repositório, entre na pasta backend no terminal e instale as lib:

    npm install

Para roda o banco de dados:

    docker-compose up -d

Para subir as tabelas:

    prisma migrate deploy

É necessario popular o banco com algumas informações, suba a seed com o comando:

    npx prisma db seed

Agora basta da start no backend:

    npm start

vai ficar ativo na rota:  http://localhost:3001/
