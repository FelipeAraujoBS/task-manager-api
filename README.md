# 📝 Task Manager API

Uma API RESTful para gerenciamento de tarefas, construída com Node.js, Express e MongoDB (Mongoose). Este projeto implementa autenticação de usuários com JWT, incluindo registro (register) e login, além do CRUD completo de tarefas.

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
│   ├── loginControllers.js    # Lógica de login
│   ├── userControllers.js     # Lógica de registro
│   └── taskControllers.js     # Lógica de CRUD de tarefas
│
├── middlewares/
│   └── authMiddlewares.js     # Middleware de autenticação JWT
│
├── models/
│   ├── user.js                # Schema do usuário (com hash da senha)
│   └── task.js                # Schema das tarefas
│
├── routes/
│   └── routes.js              # Rotas de login, registro e tarefas
│
├── index.js                   # Arquivo principal da aplicação
└── .env                       # Variáveis de ambiente (PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN)

```
---

## 🔐 Autenticação

- **Registro de usuário**: `POST /register`
- **Login**: `POST /login`  
  - Retorna um `token` JWT no corpo da resposta.
- **Middleware** (`authMiddleware.js`):
  - Verifica e valida o token JWT em rotas protegidas (ainda a implementar para tarefas).
  
## 🗂️ Rotas de Tarefas (Requerem autenticação via JWT)

-Criar nova tarefa: POST /task/register

-Listar tarefas do usuário: GET /task/find

-Listar tarefas do usuário por id: GET /task/find/:id

-Atualizar tarefa: PUT /task/update/:id

-Deletar tarefa: DELETE /task/delete/:id

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
    
## Milestones 

✅ Status

✅ Registro e login com hash de senha

✅ Geração de token JWT

✅ Middleware de autenticação JWT

✅ CRUD completo de tarefas (Create, Read, Update, Delete)

🧪 Testes (Em desenvolvimento)

Recomenda-se testar com Insomnia ou Postman, enviando requisições POST com JSON no corpo:

```bash
POST http://localhost:5000/register

{
  "username": "Felipe",
  "email": "felipe@hotmail.com",
  "password": "123456"
}

```
📌 Observações
  
  O token JWT deve ser salvo pelo frontend e enviado nas requisições protegidas via header:

    Authorization: Bearer <token>

✍️ Autor

Felipe — Desenvolvedor backend 💻
