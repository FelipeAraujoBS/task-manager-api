const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB com sucesso");
  } catch (error) {
    console.error("Erro ao conectar com MongoDB: ", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
