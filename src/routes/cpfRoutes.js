const express = require("express");
const {
  addCpf,
  checkCpf,
  removeCpf,
  findAllCpfs,
} = require("../controllers/cpfController");
const router = express.Router();

// Adicionar CPF
router.post("/cpf", addCpf);

// Verificar CPF
router.get("/cpf/:cpf", checkCpf);

// Remover CPF
router.delete("/cpf/:cpf", removeCpf);

// Listar todos os CPFs
router.get("/cpf", findAllCpfs);

module.exports = router;