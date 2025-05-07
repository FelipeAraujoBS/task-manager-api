const Task = require("../models/task");

const registerTask = async (req, res) => {
  const { title, description, completed } = req.body;

  console.log(req.user);

  try {
    const newTask = new Task({
      title,
      description,
      completed: completed === "true" || completed === true ? true : false,
      user: req.user.id,
    });

    await newTask.save();

    res.status(201).json({ message: "Nova tarefa registrada com sucesso!" });
  } catch (error) {
    console.error("Erro no registro da nova tarefa", error);
    res.status(500).json({ message: "Erro ao registrar nova tarefa" });
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });

    if (tasks.length === 0) {
      return res
        .status(200)
        .json({ message: "Esse usuario não tem nenhuma tarefa registrada!" });
    }

    res.status(200).json({ Tarefas: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao tentar encontrar Tarefas" });
  }
};

module.exports = { registerTask, getTask };
