const cpfModel = require("../models/cpfModel");
const { validateCpf } = require("../utils/validateCpf");
const { getBrasiliaTimeISO } = require('../utils/dateUtils');

const addCpf = async (cpf) => {
  validateCpf(cpf);
  const createdAt = getBrasiliaTimeISO();
  const existingCpf = await cpfModel.findCpf(cpf);
  if (existingCpf) throw new Error("ExistsCpfException."+" Esse CPF já está cadastrado!");

  await cpfModel.addCpf(cpf);
  return { cpf, createdAt: new Date().toISOString() };
};

const checkCpf = async (cpf) => {
  validateCpf(cpf);
  const createdAt = getBrasiliaTimeISO();
  const result = await cpfModel.findCpf(cpf);
  if (!result) throw new Error("NotFoundCpfException."+" Esse CPF não está cadastrado!");
  return result;
};

const removeCpf = async (cpf) => {
  validateCpf(cpf);
  const createdAt = getBrasiliaTimeISO();
  const success = await cpfModel.deleteCpf(cpf);
  if (!success) throw new Error("NotFoundCpfException."+" Esse CPF não está cadastrado!");
};

const findAllCpfs = async () => {
  const createdAt = getBrasiliaTimeISO();
  return await cpfModel.findAllCpfs();
};

module.exports = {
  addCpf,
  checkCpf,
  removeCpf,
  findAllCpfs,
};