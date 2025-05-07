const User = require("../models/user");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Email já cadastrado." });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "Usuario registrado com sucesso!" });
  } catch (error) {
    console.error("Erro no registro", error);
    res.status(500).json({ message: "Erro ao registrar usuario." });
  }
};

module.exports = { registerUser };
