# 📝 Task Manager API

Uma API RESTful para gerenciamento de tarefas, construída com **Node.js**, **Express** e **MongoDB (Mongoose)**. Este projeto implementa autenticação de usuários com **JWT**, incluindo registro (register) e login.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## 📁 Estrutura de Pastas

```bash
src/
├── config/
│   └── database.js            # Conexão com MongoDB
│
├── controllers/
│   ├── loginController.js     # Lógica de login
│   └── userControllers.js     # Lógica de registro
│
├── middleware/
│   └── authMiddleware.js      # Middleware de autenticação JWT
│
├── models/
│   └── user.js                # Schema do usuário (com hash da senha)
│
├── routes/
│   └── routes.js              # Rotas de login e registro
│
├── index.js                   # Arquivo principal da aplicação
└── .env                       # Variáveis de ambiente (PORT, MONGO_URI, JWT_SECRET)

```
---

## 🔐 Autenticação

- **Registro de usuário**: `POST /register`
- **Login**: `POST /login`  
  - Retorna um `token` JWT no corpo da resposta.
- **Middleware** (`authMiddleware.js`):
  - Verifica e valida o token JWT em rotas protegidas (ainda a implementar para tarefas).

---

## 📦 Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/seu-usuario/task-manager-api.git
   cd task-manager-api
```   
2. Instale as dependências:

```bash
  npm install
```
3. Crie um arquivo .env na raiz e adicione:


```bash
  PORT=5000
  MONGO_URI=seu_mongo_uri
  JWT_SECRET=sua_chave_secreta
```

4. Inicie o servidor:

```bash
npm start
```
    

✅ Status

✅ Registro e login com hash de senha
✅ Geração de token JWT
✅ Middleware de autenticação JWT
🕐 CRUD de tarefas (em desenvolvimento)
🧪 Testes

Recomenda-se testar com Insomnia ou Postman, enviando requisições POST com JSON no corpo:

POST http://localhost:5000/register
{
  "username": "Felipe",
  "email": "felipe@hotmail.com",
  "password": "123456"
}

📌 Observações
  
  O token JWT deve ser salvo pelo frontend e enviado nas requisições protegidas via header:

    Authorization: Bearer <token>

✍️ Autor

Felipe — Desenvolvedor backend 💻
