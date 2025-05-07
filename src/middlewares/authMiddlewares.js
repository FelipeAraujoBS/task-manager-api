const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token de autenticação ausente ou mal formatado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id, // ← aqui estava o problema
      email: decoded.email,
    };

    next();
  } catch (error) {
    console.error("Erro no middleware de autenticação:", error.message);
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
};

module.exports = authMiddleware;
