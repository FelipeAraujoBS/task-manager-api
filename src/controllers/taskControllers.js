const Task = require("../models/task");

const registerTask = async (req, res) => {
  const { title, description, completed } = req.body;

  console.log(req.user);

  try {
    const newTask = new Task({
      title,
      description,
      completed:
        completed === true ||
        completed === "true" ||
        completed === false ||
        completed === "false",
      user: req.user.id,
    });

    await newTask.save();

    res.status(201).json({ message: "Nova tarefa registrada com sucesso!" });
  } catch (error) {
    console.error("Erro no registro da nova tarefa", error);
    res.status(500).json({ message: "Erro ao registrar nova tarefa" });
  }
};

module.exports = { registerTask };
