const express = require("express");

//controllers
const loginControllers = require("../controllers/loginControllers");
const userControllers = require("../controllers/userControllers");
const taskControllers = require("../controllers/taskControllers");

//middlewares
const authMiddleware = require("../middlewares/authMiddlewares");
const verifyReq = require("../middlewares/verifyReq");

//schemas
const schemaLogin = require("../schemas/schemaLogin");
const schemaRegister = require("../schemas/schemaRegister");
const schemaTaskCreate = require("../schemas/schemaTaskCreate");
const schemaTaskUpdate = require("../schemas/schemaTaskUpdate");

const router = express.Router();

//post
router.post("/user/login", verifyReq(schemaLogin), loginControllers.loginUser);
router.post(
  "/user/register",
  verifyReq(schemaRegister),
  userControllers.registerUser
);

//before-Login

router.use(authMiddleware);

//after-Login

//post
router.post(
  "/task/register",
  verifyReq(schemaTaskCreate),
  taskControllers.registerTask
);

//get
router.get("/dashboard", (req, res) => {
  res.status(200).json({ message: `Bem-vindo, ${req.user.email}` });
});
router.get("/task/find", taskControllers.getTask);
router.get("/task/find/:name", taskControllers.getTaskByName);

//update
router.put(
  "/task/update/:id",
  verifyReq(schemaTaskUpdate),
  taskControllers.updateTask
);

//delete
router.delete("/task/delete/:id", taskControllers.deleteTask);

module.exports = router;
