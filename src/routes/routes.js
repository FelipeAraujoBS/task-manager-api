const express = require("express");
const loginControllers = require("../controllers/loginController");
const userControllers = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

router.post("/login", loginControllers.loginUser);
router.post("/register", userControllers.registerUser);
router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: `Bem-vindo, ${req.user.email}` });
});

module.exports = router;
