# Desafio Técnico Backend

## *Visão Geral*

Este projeto é uma aplicação web que integra um back-end desenvolvido em Node.js com um front-end simples em HTML, CSS e JavaScript. Essa aplicação inclui operações de adição, consulta, remoção e listagem de CPFs, usando MySQL para armazenar os dados de maneira estruturada.

---

## *Principais Funcionalidades;*

- *Adicionar um CPF a lista restrita;*
- *Consultar se um CPF está na lista;*
- *Remover um CPF da lista;*
- *Listar todos os CPFs cadastrados.*

---

## *Por que escolhi estas tecnologias?*

### *Node.js com Express.js*

O Node.js é excelente para aplicações que precisam lidar com várias requisições simultâneas e o Express.js é uma biblioteca minimalista que permite criar APIs com facilidade.

### *MySQL*

MySQL é um banco de dados relacional que garante que os dados sejam armazenados de forma consistente. Ja realizei um curso que utilizava o Mysql, o que me deu mais confiaça para utilizalo.

### Frontend: HTML, CSS e JavaScript

Escolha de tecnologias nativas para criar uma interface leve e funcional usando fetch para comunicação direta com o backend.

## **Estrutura do Projeto**

```
projeto/
├── src/
│   ├── controllers/
│   │   └── cpfController.js
│   ├── routes/
│   │   └── cpfRoutes.js
|   ├── models/
|   |   └── cpfModel.js
│   ├── services/
│   │   └── cpfService.js
│   ├── utils/
│   │   └── dateUtils.js
|   |   └── validadeCpf.js
│   └── database/
│       └── db.js
├── css/
│   └── style.css
├── img/
│   └── max_milhas_logo.jpeg
|   └── background.png
├── index.html
├── resultados.html
├── .env
├── index.js
├── package.json
└── README.md
```

## *Configuração do Ambiente*

### *1. Configurar o banco de dados*

1. Necessário que o MySQL esteja instalado na máquina.
2. Crie o banco de dados e a tabela com os seguintes comandos:

   sql
   CREATE DATABASE cpf_restrito;
   USE cpf_restrito;

   CREATE TABLE restricted_cpf (
       id INT AUTO_INCREMENT PRIMARY KEY,
       cpf VARCHAR(11) NOT NULL UNIQUE,
       createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
   );
   

### *2. Configurar o back-end*

1. Clone este repositório:
   bash
   git clone https://github.com/yuri0022/cpf_restrict.git
   
2. Acesse o diretório do projeto:
   bash
   cd projeto
   
3. Instale as dependências:
   bash
   npm install
   
4. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:
   env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=cpf_restrito
   PORT=3000
   
5. Inicie o servidor:
   bash
   npm run dev
   

### *2. Configurar o Frontend*

Abra o arquivo index.html diretamente no navegador ou use o Live Server no VS Code para iniciar um servidor local.

---

## *Testando a API com Postamn ou Insomnia*

Use ferramentas como o [Postman] ou o [Insomnia] para testar os endpoints da API. Aqui estão os principais:

### *1. Adicionar CPF*

- *Método:* POST
- *URL:* http://localhost:3000/api/cpf
- *Corpo da requisição:*
  json
  {
    "cpf": "12345678901"
  }
  
- *Resposta de sucesso (201):*
  json
  {
    "cpf": "12345678901",
    "createdAt": "2024-12-28T15:00:00.000Z"
  }
  
- *Resposta de erro (400):* CPF já está cadastrado.
  json
  {
    "type": "Error",
    "message": "ExistsCpfException. Esse CPF já está cadastrado!"
  }
  
- *Resposta de erro (400):* CPF no formato inválido.
  json
  {
    "type": "Error",
    "message": "InvalidCpfException. O formato do CPF está inválido"
  }
  

### *2. Consultar CPF*

- *Método:* GET
- *URL:* http://localhost:3000/api/cpf/:cpf
- *Resposta de sucesso (200):*
  json
  {
    "id": 22,
    "cpf": "12345678901",
    "createdAt": "2024-12-28T15:00:00.000Z"
  }
  
- *Resposta de erro (400):* CPF não está cadastrado.\\
  json
  {
    "type": "Error",
    "message": "ExistsCpfException. Esse CPF não está cadastrado!"
  }
  
- *Resposta de erro (400):* CPF no formato inválido.
  json
  {
    "type": "Error",
    "message": "InvalidCpfException. O formato do CPF está inválido"
  }
  

### *3. Remover CPF*

- *Método:* DELETE
- *URL:* http://localhost:3000/api/cpf/:cpf
- *Resposta de sucesso (204):* Sem corpo de resposta.
- *Resposta de erro (400):* CPF não está cadastrado.
  json
  {
    "type": "Error",
    "message": "NotFoundCpfException. Esse CPF não está cadastrado!"
  }
  
- *Resposta de erro (400):* CPF no formato inválido.
  json
  {
    "type": "Error",
    "message": "InvalidCpfException. O formato do CPF está inválido"
  }
  

### *4. Listar todos os CPFs*

- *Método:* GET
- *URL:* http://localhost:3000/api/cpf
- *Resposta de sucesso (200):*
  json
  [
    {
      "cpf": "12345678901",
      "createdAt": "2024-12-28T15:00:00.000Z"
    },
    {
      "cpf": "98765432100",
      "createdAt": "2024-12-28T16:00:00.000Z"
    }
  ]
  