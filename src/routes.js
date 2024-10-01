import { Router } from "express";
import {
  createTable,
  deletePessoa,
  insertPessoa,
  selectPessoa,
  selectPessoas,
  updatePessoa,
} from "./Controler/Pessoa.js";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    statusCode: 200,
    msg: "API rodando...",
  });
});

router.get("/pessoas", selectPessoas);
router.get("/pessoa", selectPessoa);
router.post("/pessoa", insertPessoa);
router.put("/pessoa", updatePessoa);
router.delete("/pessoa", deletePessoa);

export default router;
