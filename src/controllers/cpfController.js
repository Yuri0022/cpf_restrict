const cpfService = require("../services/cpfService");

// Adicionar CPF à lista restrita
const addCpf = async (req, res) => {
  try {
    const { cpf } = req.body;
    const result = await cpfService.addCpf(cpf);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ type: error.name, message: error.message });
  }
};

// Verificar se um CPF está na lista restrita
const checkCpf = async (req, res) => {
  try {
    const { cpf } = req.params;
    const result = await cpfService.checkCpf(cpf);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ type: error.name, message: error.message });
  }
};

// Remover CPF da lista restrita
const removeCpf = async (req, res) => {
  try {
    const { cpf } = req.params;
    await cpfService.removeCpf(cpf);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ type: error.name, message: error.message });
  }
};

// Listar todos os CPFs na lista restrita
const findAllCpfs = async (req, res) => {
  try {
    const result = await cpfService.findAllCpfs();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ type: error.name, message: error.message });
  }
};

module.exports = {
  addCpf,
  checkCpf,
  removeCpf,
  findAllCpfs,
};