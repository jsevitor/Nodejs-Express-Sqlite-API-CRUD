import express from "express";
import router from "./routes.js";
import cors from "cors";
import https from "https";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log("API rodando..."));

https
  .createServer(
    {
      cert: fs.readFileSync("src/SSL/code.crt"),
      key: fs.readFileSync("src/SSL/code.key"),
    },
    app
  )
  .listen(3001, () => console.log("Rodando um https"));
