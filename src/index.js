const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToDatabase = require("./config/database");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("", routes);

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
