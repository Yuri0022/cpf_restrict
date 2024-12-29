const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cpfRoutes = require("./src/routes/cpfRoutes");
const cors = require('cors');

// variáveis do ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - CORS deve ser configurado antes das rotas
app.use(cors({
  origin: 'http://localhost:8080', // Permitir apenas o frontend na porta 8080
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

// Middleware
app.use(bodyParser.json());

// Usar as rotas
app.use("/api", cpfRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API is running');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
