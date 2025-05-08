const Task = require("../models/task");

const registerTask = async (req, res) => {
  //CREATE
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
  //READ
  try {
    const tasks = await Task.find({ user: req.user.id });

    if (tasks.length === 0) {
      return res
        .status(200)
        .json({ message: "Esse usuario não tem nenhuma tarefa registrada!" });
    }

    res.status(200).json({ Tarefas: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao tentar encontrar Tarefas" });
  }
};

const getTaskByName = async (req, res) => {
  //READ BY ID
  const { name } = req.params;

  try {
    const task = await Task.findOne({ title: name });

    if (!task) {
      return res.status(200).json({ message: "Não há task com esse titulo" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao tentar encontrar Tarefa" });
  }
};

const updateTask = async (req, res) => {
  //UPDATE
  const { title, description, completed } = req.body;
  const { id } = req.params;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ message: "Tarefa não encontrada ou não pertence ao usuario!" });
    }

    res.status(200).json({ message: "Tarefa atualizada com sucesso" }, task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
};

const deleteTask = async (req, res) => {
  //DELETE
  const { id } = req.params;

  try {
    const removedTask = await Task.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!removedTask) {
      return res
        .status(404)
        .json({ message: "Tarefa não encontrada ou não pertence ao usuario!" });
    }

    res.status(200).json({ message: "Tarefa deletada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
};

module.exports = {
  registerTask,
  getTask,
  getTaskByName,
  updateTask,
  deleteTask,
};
