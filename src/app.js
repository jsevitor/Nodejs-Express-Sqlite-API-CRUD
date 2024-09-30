import { openDb } from "./configDB.js";
import express from "express";
import { createTable, insertPessoa } from "./Controler/Pessoa.js";

const app = express();
const PORT = 3000;

app.use(express.json());

createTable();

app.get("/", (req, res) => {
  res.send("Ola mundor");
});

app.post("/pessoa", (req, res) => {
  insertPessoa(req.body);
  res.json({
    statusCode: 200,
  });
});

app.listen(PORT, () => console.log("API rodando..."));
