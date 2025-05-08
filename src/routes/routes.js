const express = require("express");
const loginControllers = require("../controllers/loginControllers");
const userControllers = require("../controllers/userControllers");
const taskControllers = require("../controllers/taskControllers");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

//post
router.post("/user/login", loginControllers.loginUser);
router.post("/user/register", userControllers.registerUser);
router.post("/task/register", authMiddleware, taskControllers.registerTask);

//get
router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: `Bem-vindo, ${req.user.email}` });
});
router.get("/task/find", authMiddleware, taskControllers.getTask);
router.get("/task/find/:name", authMiddleware, taskControllers.getTaskByName);

//update
router.put("/task/update/:id", authMiddleware, taskControllers.updateTask);

//delete
router.delete("/task/delete/:id", authMiddleware, taskControllers.deleteTask);

module.exports = router;
