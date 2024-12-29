// Função para obter a hora no fuso horário de Brasília
const getBrasiliaTimeISO = () => {
  const now = new Date(); // Hora UTC atual
  const brasiliaTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  return brasiliaTime.toISOString(); // Já retorna o horário correto em ISO
};

module.exports = { getBrasiliaTimeISO };

  