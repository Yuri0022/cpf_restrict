// Validando se o CPF está formatado corretamente
const validateCpf = (cpf) => {
    if (!cpf || typeof cpf !== "string" || !/^\d{11}$/.test(cpf)) {
      throw new Error("InvalidCpfException. O formato do CPF está inválido");
    }
  };
  
  module.exports = {
    validateCpf,
  };