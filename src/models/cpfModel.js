const pool = require("../database/db");

const addCpf = async (cpf) => {
  const [result] = await pool.query(
    "INSERT INTO restricted_cpf (cpf) VALUES (?)",
    [cpf]
  );
  return result;
};

const findCpf = async (cpf) => {
  const [rows] = await pool.query(
    "SELECT * FROM restricted_cpf WHERE cpf = ?",
    [cpf]
  );
  return rows[0];
};

const deleteCpf = async (cpf) => {
  const [result] = await pool.query(
    "DELETE FROM restricted_cpf WHERE cpf = ?",
    [cpf]
  );
  return result.affectedRows > 0;
};

const findAllCpfs = async () => {
  const [rows] = await pool.query("SELECT * FROM restricted_cpf");
  return rows;
};

module.exports = {
  addCpf,
  findCpf,
  deleteCpf,
  findAllCpfs,
};