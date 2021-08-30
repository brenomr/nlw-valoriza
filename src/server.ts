import express from "express";

// Instalar os types (yarn add @types/express -D)
const app = express();

// Request, requisição do cliente, response, responsa do servidor
app.get("/teste", (request, response) => {
  return response.send(`Olá mundo!`);
});

app.post("/teste-post", (request, response) => {
  return response.status(201).send("Post realizado!");
})

// Rodar servidor em uma porta
app.listen(3000, () => console.log(`Server is running on http://localhost:3000`));